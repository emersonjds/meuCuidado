import React from "react";
import { SafeAreaView } from "react-native";
import { Box } from "../../components/Spacing";
import { Avatar, Divider } from "react-native-paper";
import { Title } from "../../components/Texts";
import PacientCard from "../../components/PacientCard";

const HomeScreen: React.FC = () => {
  const patients = [
    {
      id: 1,
      name: "Marcela Pereira",
      time: "10:00",
      phone: "+5511971801555",
    },
    {
      id: 2,
      name: "Marcela Pereira",
      time: "10:00",
      phone: "+5511971801555",
    },
    {
      id: 3,
      name: "Marcela Pereira",
      time: "10:00",
      phone: "+5511971801555",
    },
  ];

  return (
    <>
      <SafeAreaView>
        <Box height="100%" width="100%" backgroundColor="white">
          <Box mt={10} ml={10} flexDirection="row" alignItems="center">
            <Box>
              <Avatar.Image
                size={50}
                source={require("../../assets/terapeuta.png")}
              />
            </Box>
            <Box ml={10}>
              <Title>Olá, Marcela!</Title>
            </Box>
          </Box>
          <Box mt={10} ml={10}>
            <Divider />
          </Box>
          <Box mt={10} ml={10}>
            <Title>Atendimentos do Dia</Title>
            <Box pt={10}>
              <PacientCard patients={patients} />
            </Box>
          </Box>
        </Box>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
