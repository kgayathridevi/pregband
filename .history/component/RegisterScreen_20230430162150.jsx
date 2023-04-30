import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import axios from "axios";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [trimester, setTrimester] = useState("");

  const handleRegister = () => {
    const data = {
      name: name,
      age: parseInt(age),
      email: email,
      height: parseInt(height),
      weight: parseInt(weight),
      trimester: parseInt(trimester),
    };

    fetch("http://192.168.65.122:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // handle successful response from Flask API
      })
      .catch((error) => {
        console.error("Error:", error);
        // handle error response from Flask API
      });
  };

  // axios
  //   .post("http://192.168.65.122:5000/register", data)
  //   .then((response) => {
  //     console.log("Success:", response.data);
  //     // handle successful response from Flask API
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //     // handle error response from Flask API
  //   });
  // };

  return (
    <View>
      <Text>Name:</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text>Age:</Text>
      <TextInput
        placeholder="Enter your name"
        value={age}
        onChangeText={setAge}
      />

      <Text>Email:</Text>
      <TextInput
        placeholder="Enter your name"
        value={email}
        onChangeText={setEmail}
      />

      <Text>Height:</Text>
      <TextInput
        placeholder="Enter your name"
        value={height}
        onChangeText={setHeight}
      />

      <Text>Weight:</Text>
      <TextInput
        placeholder="Enter your name"
        value={weight}
        onChangeText={setWeight}
      />

      <Text>Trimester:</Text>
      <TextInput
        placeholder="Enter your name"
        value={trimester}
        onChangeText={setTrimester}
      />

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
