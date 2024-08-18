import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";

import { weatherConditions } from "@/helpers/constants";
import { ICondition, IWeather } from "@/helpers/interfaces";

interface WeatherProps {
  weather: IWeather;
  setCity: (city: string) => void;
}

const Weather = ({ weather: { temp, name, country, weather }, setCity }: WeatherProps) => {
  const condition = weatherConditions[(weather?.at(0)?.title.en as ICondition) || "clear"];
  const [query, setQuery] = useState<string>("");

  return (
    <LinearGradient colors={condition.gradient} style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      {!!weather.length && (
        <View style={styles.container}>
          <MaterialCommunityIcons name={condition.iconName} size={86} color="white" />

          <View style={styles.flex}>
            <Text style={styles.temp}>{temp.value.toFixed(0)} °C </Text>
            <Text style={styles.temp}>
              | {name}, {country}
            </Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>{condition.title}</Text>
            <Text style={styles.description}>{condition.description}</Text>

            <View style={styles.searchContainer}>
              <TextInput
                style={styles.input}
                placeholder="Qidirish"
                placeholderTextColor="gray"
                onChangeText={setQuery}
              />
              <View style={styles.btn}>
                <Button title="Yuborish" accessibilityLabel="search city weather" onPress={() => setCity(query)} />
              </View>
            </View>
          </View>
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    paddingTop: 120,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  temp: {
    fontSize: 32,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 20,
    height: 20,
  },
  text: {
    color: "#fff",
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "300",
    marginBottom: 4,
    textAlign: "left",
  },
  description: {
    color: "white",
    fontWeight: "600",
    fontSize: 22,
    textAlign: "left",
  },
  searchContainer: {
    backgroundColor: "#e8e8e8",
    width: "100%",
    padding: 10,
    marginTop: 10,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  input: {
    width: "70%",
  },
  btn: {
    width: "30%",
  },
});

export default Weather;
