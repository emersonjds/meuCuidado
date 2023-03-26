import React, { FC } from "react";
import { View } from "react-native";
import { Box } from "../Spacing";
import Colors from "../Contants";
import { Title } from "../Texts";
import * as S from "./styles";

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
      p={10}
      borderColor={Colors.light_gray}
      justifyContent="center"
    >
      <Box
        width="20%"
        height="80%"
        alignItems="center"
        justifyContent="center"
        bg={Colors.light_blue}
        style={{
          borderRadius: 10,
        }}
      >
        <S.TitleDate>27</S.TitleDate>
      </Box>
    </Box>
  );
};

export default BoxProposal;
