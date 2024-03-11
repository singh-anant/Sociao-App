import React from "react";
import { TextInput, View } from "react-native";
import Text from "@kaloraat/react-native-text";

const InputComponent = ({
  labelName,
  setValue,
  value,
  autoCapitalize,
  autoComplete,
  secureTextType,
}) => {
  return (
    <View style={{ marginHorizontal: 24, marginBottom: 12 }}>
      <Text semi>{labelName}</Text>
      <TextInput
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        secureTextEntry={secureTextType}
        style={{ borderBottomWidth: 0.5, height: 40 }}
        value={value}
        onChangeText={(input) => setValue(input)}
      />
    </View>
  );
};

export default InputComponent;
