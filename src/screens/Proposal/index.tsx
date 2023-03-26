import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Title } from "../../components/Texts";
import { Box } from "../../components/Spacing";
import { SafeAreaView } from "react-native-safe-area-context";

const Proposal: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        <Box flex={1}>
          <Title>Proposal</Title>
        </Box>
      </SafeAreaView>
    </>
  );
};

export default Proposal;
