import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import LevelsList from "./LevelsList";
import { useRoute } from "@react-navigation/native";

export default function CarrerTracer() {
  const route = useRoute();
  const [actualLevel, setActualLevel] = useState(route.params?.level);

  const stringsArray = [
    "Zlatan Ibrahimovic",
    "Antoine Griezmann",
    "Hugo Lloris",
    "Angel Di Maria",
    "Thiago Alcantara",
    "Alvaro Morata",
    "Xavi Simons",
    "Raphaël Leao",
    "Ludovic Blas",
    "Alex Grimaldo",
  ];

  useEffect(() => {
    console.log(route.params?.level);
    setActualLevel(route.params?.level);
  }, [route.params?.level]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Carrer Tracer</Text>
      </View>
      <LevelsList
        stringsArray={stringsArray}
        actualLevel={actualLevel}
        redirection={"CarrerTracerLevel"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008000",
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 50,
    color: "white",
  },
});
