import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Title } from "../../components/Texts";
import { Box } from "../../components/Spacing";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider, Text } from "react-native-paper";
import Colors from "../../components/Contants";
import BoxProposal from "../../components/BoxProposal";

const Proposal: React.FC = () => {
  const navigation = useNavigation();

  const propostals = [
    {
      date: "27",
      time: "10:00",
      name: "Caio Martins",
      phone: "+5511971801555",
    },
    {
      date: "27",
      time: "13:00",
      name: "Josefa Maria",
      phone: "+5511971801555",
    },
    {
      date: "27",
      time: "14:00",
      name: "Germania Souza",
      phone: "+5511971801555",
    },
    {
      date: "28",
      time: "10:00",
      name: "Claudio Souza",
      phone: "+5511971801555",
    },
  ];

  return (
    <SafeAreaView
      style={{
        padding: 20,
      }}
    >
      <Title>Consultas de Março</Title>

      <Box mt={10} mb={10}>
        <Divider />
      </Box>

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        {propostals.map((item, index) => {
          return (
            <BoxProposal
              key={index}
              date={item.date}
              time={item.time}
              name={item.name}
              phone={item.phone}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Proposal;
