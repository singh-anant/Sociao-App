import React from "react";
import { TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";

const SubmitButtonComponent = ({ title, handleSubmit, loading }) => {
  return (
    <TouchableOpacity
      onPress={handleSubmit}
      style={{
        backgroundColor: "#E72F5D",
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        marginHorizontal: 20,
        borderRadius: 24,
      }}
    >
      <Text bold white medium center style={{ color: "white" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButtonComponent;
