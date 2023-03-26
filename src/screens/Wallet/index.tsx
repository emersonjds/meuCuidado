import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Subtitle, Title } from "../../components/Texts";
import { Box } from "../../components/Spacing";
import { Divider } from "react-native-paper";

const Wallet: React.FC = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <Box>
        <Title>MInha Carteira</Title>
      </Box>

      <Box mt={10} mb={10}>
        <Divider />
      </Box>

      <Box>
        <Title>Saldo</Title>
      </Box>

      <Box>
        <Title
          style={{
            fontSize: 50,
            color: "#2ecc71",
          }}
        >
          R$ 1986.12
        </Title>
      </Box>
      {/* create a icon of money */}
      <Box mt={10} mb={10}>
        <Divider />
      </Box>
      <Box>
        <Title>Conta Cadastrada</Title>
        <Subtitle
          style={{
            fontSize: 20,
          }}
        >
          Agência: 0000 Conta: 00000
        </Subtitle>
      </Box>

      <Box mt={10} mb={10}>
        <Divider />
      </Box>

      <Box>
        <Title>Próximos pagamentos</Title>
        <Subtitle
          style={{
            fontSize: 20,
          }}
        >
          Agendado para dia 31/03/2023
        </Subtitle>
        <Box mt={10} mb={10}>
          <Divider />
        </Box>
        <Title>Valor para pagamento</Title>
        <Subtitle
          style={{
            fontSize: 20,
          }}
        >
          R$ 983,12,00
        </Subtitle>
      </Box>

      <Box>
        <Title>Solicitar retirada</Title>
      </Box>
    </SafeAreaView>
  );
};

export default Wallet;
