from firebase_admin import credentials
from firebase_admin import firestore
import pickle
from google.cloud import firestore
import os
import pandas as pd
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "Backend/Server/mai-care-firebase-adminsdk-sfqxu-962ad593ad.json"
db=firestore.Client()

with open('', 'rb') as f:
    model = pickle.load(f)

#Add new user
def create_user(name,email,trimester, age, height, weight,systolic_bp, diastolic_bp, body_temp, heart_rate):
    user_ref = db.collection('users').document()
    
    health_params_ref = user_ref.collection('health_params').document()
    health_params_ref.set({
        'systolic': systolic_bp,
        'diastolic': diastolic_bp,
        'body_temp': body_temp,
        'heart_rate': heart_rate,
        'risk_level': None,
        'timestamp': firestore.SERVER_TIMESTAMP
    })
    
    user_ref.set({
        'name': name,
        'trimester': trimester,
        'age': age,
        'email':email,
        'height':height,
        'weight':weight 
    })
    
    print('User created successfully')

#Add the readingd
def add_health_params(user_id, systolic_bp, diastolic_bp, body_temp, heart_rate):
    user_ref = db.collection('users').document(user_id)
    health_params_ref = user_ref.collection('health_params').document()
    health_params_ref.set({
        'systolic': systolic_bp,
        'diastolic': diastolic_bp,
        'body_temp': body_temp,
        'heart_rate': heart_rate,
        'risk_level': None ,
        'timestamp': firestore.SERVER_TIMESTAMP
    })
    
    print('Health parameters added successfully')

#fetch the latest reading
def get_latest_health_params(user_id):
    user_ref = db.collection('users').document(user_id)
    health_params_ref = user_ref.collection('health_params')
    query = health_params_ref.order_by('timestamp', direction=firestore.Query.DESCENDING).limit(1)
    docs = query.get()

    for doc in docs:
        user_doc = user_ref.get()
        age = user_doc.to_dict()['age']
        health_params_dict = doc.to_dict()
        health_params_dict['age'] = age
        return health_params_dict

    print('No health parameters found for user with ID', user_id)
    return None



#Prediction  is performed
def prediction(latest_health_params):
    if latest_health_params:
        BodyTemp = latest_health_params['body_temp']
        SystolicBP = latest_health_params['systolic']
        HeartRate = latest_health_params['heart_rate']
        RiskLevel = latest_health_params['risk_level']
        DiastolicBP = latest_health_params['diastolic']
        Age = latest_health_params['age']
        print(Age, SystolicBP, DiastolicBP,  BodyTemp, HeartRate)
        X = [[Age, SystolicBP, DiastolicBP, BodyTemp, HeartRate]]
        feature_names = ['Age', 'SystolicBP', 'DiastolicBP', 'BodyTemp', 'HeartRate']
        X_df = pd.DataFrame(X, columns=feature_names)
        risk_level = model.predict(X_df)[0]
        print(risk_level)
        return risk_level
    else:
        print("unable to fetch the values")


 #update the risk level to db   
def update_risklevel(risk_level,user_id):
    user_ref = db.collection('users').document(user_id)
    health_params_ref = user_ref.collection('health_params')
    latest_doc_ref = health_params_ref.order_by('timestamp', direction=firestore.Query.DESCENDING).limit(1).get()[0].reference
    if risk_level == 1:
        latest_doc_ref.update({'risk_level': 'High'})
    elif risk_level == 0:
        latest_doc_ref.update({'risk_level': 'Low'})
    print("Updated the risk level")
    
    



if _name_ == '_main_':
    user_id ='a5YTFN2gq6lqo5JTuMzD'
    name = 'Dharithri'
    email='dharithrirai18@gmail.com'
    trimester = 2
    age = 30
    height=5.5
    weight=36
    systolic_bp = 127
    diastolic_bp = 100
    body_temp = 99.0
    heart_rate = 72

    # create_user(name, email, trimester, age, height,weight, systolic_bp, diastolic_bp, body_temp, heart_rate)
    add_health_params(user_id, systolic_bp, diastolic_bp,body_temp, heart_rate)
    latest_health_params = get_latest_health_params(user_id)
    risk_level = prediction(latest_health_params)
    update_risklevel(risk_level, user_id)