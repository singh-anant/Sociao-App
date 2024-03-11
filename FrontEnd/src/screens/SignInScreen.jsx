import React, { useState } from "react";
import { View, Image } from "react-native";
import Text from "@kaloraat/react-native-text";
import InputComponent from "../components/InputComponent";
import SubmitButtonComponent from "../components/SubmitButtonComponent";
import axios from "axios";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState();

  const handleSubmit = async () => {
    if (!email || !password) {
      alert("All fields are required");
      setLoading("false");
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:8000/signin", {
        email,
        password,
      });
      setLoading(false);
      console.log("Success", data);
      alert("Sign In Successfull");
    } catch (error) {
      console.log(err);
      setLoading(false);
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
        Sign In
      </Text>

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
        New to Sociao??{" "}
        <Text
          bold
          style={{ color: "#E72F5D" }}
          onPress={() => navigation.navigate("Signup")}
        >
          Sign Up
        </Text>
      </Text>
      <Text center bold style={{ color: "#5cbdb9", marginTop: 10 }}>
        Forgot Password
      </Text>
    </KeyboardAwareScrollView>
  );
};

export default SignInScreen;
