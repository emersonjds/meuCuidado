import React, { useState } from "react";
import { Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";
import { Title } from "../../components/Texts";
import { Box } from "../../components/Spacing";
import { Divider } from "react-native-paper";
import { Alert, Modal, StyleSheet, Pressable } from "react-native";

const CalendarScreen: React.FC = () => {
  const [selected, setSelected] = useState("");

  LocaleConfig.locales["pt-br"] = {
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
  };

  const [modalVisible, setModalVisible] = useState(false);

  const markedDates = {
    "2023-03-27": {
      selected: true,
      marked: true,
      selectedColor: "blue",
      name: "Caio Martins",
      time: "10:00",
      phone: "+5511971801555",
    },
    "2023-03-28": {
      selected: true,
      marked: true,
      selectedColor: "blue",
      name: "Jose Bonifácio",
      time: "10:00",
      phone: "+5511971801555",
    },
    "2023-03-29": {
      selected: true,
      marked: true,
      selectedColor: "blue",
      name: "Marcela Pereira",
      time: "10:00",
      phone: "+5511971801555",
    },
  };

  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "#fff",
          paddingTop: 20,
          paddingHorizontal: 20,
        }}
      >
        <Box mt={10}>
          <Box mb={30}>
            <Title>Adicione datas em que você esta disponivel</Title>
          </Box>

          <Box nt={10} mb={10}>
            <Divider />
          </Box>
          <Calendar
            onDayPress={(day) => {
              setSelected(day.dateString);
              setModalVisible(true);
            }}
            markedDates={{ ...markedDates }}
          />
        </Box>
      </SafeAreaView>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <Box
            alignItems="center"
            justifyContent="center"
            flex={1}
            height="100%"
            width="100%"
          >
            {markedDates[selected] ? (
              <Box width="80%" alignSelf="center">
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    Nome: {markedDates[selected].name}
                  </Text>
                  <Text style={styles.modalText}>
                    Horario: {markedDates[selected].time}
                  </Text>
                  <Text style={styles.modalText}>
                    Telefone: {markedDates[selected].phone}
                  </Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Fechar</Text>
                  </Pressable>
                </View>
              </Box>
            ) : (
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    Nenhum atendimento marcado para esse dia
                  </Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            )}
          </Box>
        </Modal>
      </View>
    </>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
