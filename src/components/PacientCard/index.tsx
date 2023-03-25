import React from "react";
import { Box } from "../Spacing";
import { Subtitle, Title } from "../Texts";
import { Avatar } from "react-native-paper";

type PacientCardProps = {
  patients?: {
    name: string;
    time: string;
  }[];
};

const PacientCard: React.FC<PacientCardProps> = ({ patients }) => {
  return (
    <>
      <Box mr={10} p={10} borderWidth={1} borderRadius={10}>
        <Box flexDirection="row" justifyContent="space-between">
          <Title>Marcela Pereira</Title>
          <Title>Horario: 10:00</Title>
        </Box>
        <Box flexDirection="row" alignItems="center" mt={10}>
          <Avatar.Icon size={50} icon="whatsapp" />
          <Box ml={10}>
            <Subtitle>Entrar em Contato</Subtitle>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PacientCard;
