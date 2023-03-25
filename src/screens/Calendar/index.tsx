import React, { useState } from "react";
import { Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";
import { Title } from "../../components/Texts";
import { Box } from "../../components/Spacing";
import { Divider } from "react-native-paper";

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

  const onDayPress = (day) => {
    setSelected(day.dateString);
  };

  //   create a function that receive the data and push item in array of dates
  const handleDate = (date) => {
    const newDate = date;
    const newDates = [...dates, newDate];
    setDates(newDates);
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
              return setSelected(day.dateString);
            }}
            markedDates={{
              "2023-03-27": {
                selected: true,
                marked: true,
                selectedColor: "blue",
              },
              "2023-03-28": {
                selected: true,
                marked: true,
                selectedColor: "blue",
              },
              "2023-03-29": {
                selected: true,
                marked: true,
                selectedColor: "blue",
              },
            }}
          />
        </Box>
      </SafeAreaView>
    </>
  );
};

export default CalendarScreen;
