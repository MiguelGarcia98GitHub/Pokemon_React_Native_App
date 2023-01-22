import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PokemonListScreen from "./src/screens/PokemonListScreen";
import { calcCurrentPageValues } from "./src/helpers/calcCurrentPageValue";

export default function App() {
  console.log(calcCurrentPageValues(4));

  return (
    <View style={{ padding: 20, backgroundColor: "grey" }}>
      <PokemonListScreen />
    </View>
  );
}
