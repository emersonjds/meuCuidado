import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Box } from "../../components/Spacing";
import { Avatar, Button, Divider } from "react-native-paper";
import { Subtitle, Title } from "../../components/Texts";
import PacientCard from "../../components/PacientCard";

import { LogBox } from "react-native";

import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  // Ignore log notification by message
  LogBox.ignoreLogs(["Warning: ..."]);

  //Ignore all log notifications
  LogBox.ignoreAllLogs();

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const patients = [
    {
      id: 1,
      name: "Jose Auricchio",
      time: "13:00",
      phone: "+5511971801555",
    },
    {
      id: 2,
      name: "Marcela Pereira",
      time: "14:00",
      phone: "+5511971801555",
    },
    {
      id: 3,
      name: "Paulo Santos",
      time: "16:00",
      phone: "+5511971801555",
    },
  ];

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Oba, voce tem uma nova consulta",
        body: "Uma consulta foi marcada para as 10:00 do dia 31/03/2021",
      },
      trigger: { seconds: 5 },
    });
  }

  async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    return token;
  }

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    schedulePushNotification();

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        navigation.navigate("Proposes");
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <>
      <SafeAreaView>
        <Box height="100%" width="100%" backgroundColor="white">
          <Box mt={10} ml={10} flexDirection="row" alignItems="center">
            <Box ml={10}>
              <Avatar.Image
                size={70}
                source={require("../../assets/terapeuta.png")}
              />
            </Box>
            <Box ml={10}>
              <Title
                style={{
                  fontSize: 20,
                }}
              >
                Olá, Marcela!
              </Title>
              <Subtitle>CRP: 9793247-88</Subtitle>
              <Subtitle>Empresa: Autonomo</Subtitle>
            </Box>
          </Box>
          <Box mt={10} ml={10}>
            <Divider />
          </Box>

          <ScrollView>
            <Box mt={10} ml={10}>
              <Title
                style={{
                  fontSize: 20,
                }}
              >
                Seus atendimentos hoje:
              </Title>
              <Box pt={10}>
                <PacientCard patients={patients} />
              </Box>
            </Box>
            <Box mt={10} ml={10}>
              <Title
                style={{
                  fontSize: 20,
                }}
              >
                Seus atendimentos amanhã:
              </Title>
              <Box pt={10}>
                <PacientCard patients={patients} />
              </Box>
            </Box>
          </ScrollView>
        </Box>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
