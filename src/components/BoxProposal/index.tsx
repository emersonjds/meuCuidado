import React, { FC } from "react";
import { Box } from "../Spacing";
import Colors from "../Contants";
import * as S from "./styles";
import { Subtitle, Title } from "../Texts";
import { Button } from "react-native-paper";

type BoxProposalProps = {
  date: string;
  time: string;
  name: string;
  phone: string;
};

const BoxProposal: FC<BoxProposalProps> = ({ date, time, name, phone }) => {
  return (
    <Box
      width="100%"
      height={120}
      borderWidth={1}
      borderRadius={10}
      p={20}
      borderColor={Colors.light_gray}
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center"
    >
      <Box
        width="20%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        bg={Colors.light_blue}
        style={{
          borderRadius: 10,
        }}
      >
        <S.TitleDate>{date}</S.TitleDate>
        <Subtitle>Mar</Subtitle>
      </Box>
      <Box width="45%" p={10}>
        <Title>Nova consulta</Title>
        <Subtitle>Horario: {time}</Subtitle>
        <Subtitle>Nome: {name}</Subtitle>
        <Subtitle> {phone}</Subtitle>
      </Box>
      <Box>
        <Button
          mode="contained"
          onPress={() => console.log("Pressed")}
          buttonColor="#2ecc71"
          style={{
            marginBottom: 10,
          }}
        >
          Aceitar
        </Button>
        <Button
          mode="contained"
          onPress={() => console.log("Pressed")}
          buttonColor="#e74c3c"
        >
          Rejeitar
        </Button>
      </Box>
    </Box>
  );
};

export default BoxProposal;
