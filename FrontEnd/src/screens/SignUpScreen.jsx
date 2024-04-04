import React, { useState } from "react";
import { View, Image } from "react-native";
import Text from "@kaloraat/react-native-text";
import InputComponent from "../components/InputComponent";
import SubmitButtonComponent from "../components/SubmitButtonComponent";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Authentication";

const SignUpScreen = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [loading, setLoading] = useState();
  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    } else if (email && password) {
      try {
        // console.log(email + " " + password);
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created successfully");
        setName("");
        setEmail("");
        setPassword("");
        navigation.navigate("Signin");
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert(
            "The provided email is already in use. Please use a different email address."
          );
        } else {
          console.log("Error while authentication", error);
        }
      }
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1, justifyContent: "center" }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../assets/sociaologo.png")}
          style={{
            width: 300,
            height: 200,
            resizeMode: "contain",
            marginBottom: 20,
          }}
        />
      </View>
      <Text title center>
        Sign Up
      </Text>
      <InputComponent
        labelName="Name"
        value={name}
        setValue={setName}
        autoCapitalize="words"
        autoCorrect={false}
      />
      <InputComponent
        labelName="Email"
        value={email}
        setValue={setEmail}
        autoCapitalize={false}
        autoCorrect={false}
        keyboardType="email-address"
      />
      <InputComponent
        labelName="Password"
        value={password}
        setValue={setPassword}
        autoCapitalize={false}
        autoCorrect={false}
        secureTextType={true}
      />
      {/* <Button title="Submit" /> */}
      {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}

      <SubmitButtonComponent title={"Submit"} handleSubmit={handleSubmit} />
      <Text center>
        Already a User??{" "}
        <Text
          bold
          style={{ color: "#E72F5D" }}
          onPress={() => navigation.navigate("Signin")}
        >
          Sign In
        </Text>
      </Text>
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen;
