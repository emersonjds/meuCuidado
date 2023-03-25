import React from "react";
import { Box } from "../Spacing";
import { Subtitle, Title } from "../Texts";
import { Avatar } from "react-native-paper";
import { Linking, TouchableOpacity } from "react-native";

type PacientCardProps = {
  patients?: {
    name: string;
    time: string;
    id: number;
    phone: string;
  }[];
};

const PacientCard: React.FC<PacientCardProps> = ({ patients }) => {
  //create a deeplink for whatsapp

  const openWhatsApp = () => {
    Linking.openURL(`whatsapp://send?text=Hello&phone=+55${patients?.phone}`);
  };

  return (
    <>
      {patients?.map((patient) => (
        <Box
          key={patient?.id}
          mr={10}
          p={10}
          borderWidth={1}
          borderRadius={10}
          mt={10}
          borderColor="#E5E5E5"
        >
          <Box flexDirection="row" justifyContent="space-between">
            <Title>{patient.name}</Title>
            <Title>Horario: {patient.time}</Title>
          </Box>
          <Box flexDirection="row" alignItems="center" mt={10}>
            <TouchableOpacity onPress={openWhatsApp}>
              <Avatar.Icon
                size={30}
                icon="whatsapp"
                color="#fff"
                style={{
                  backgroundColor: "#25D366",
                }}
              />
            </TouchableOpacity>
            <Box ml={10}>
              <Subtitle>Entrar em Contato</Subtitle>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default PacientCard;
