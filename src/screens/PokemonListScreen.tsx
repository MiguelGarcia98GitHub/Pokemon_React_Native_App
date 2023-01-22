import { View, Text, Button, Image, ScrollView, FlatList } from "react-native";
import { usePokemonStore } from "./../store/store";
import { useEffect } from "react";
import { calcCurrentPageValues } from "./../helpers/calcCurrentPageValue";

export default function PokemonListScreen() {
  const {
    dataOf20Pokemons,
    currentPage,
    initialFetchOf20Pokemons,
    fetchOf20Pokemons,
  } = usePokemonStore();

  useEffect(() => {
    initialFetchOf20Pokemons();
  }, []);

  const PokemonListItem = (props: any) => {
    console.log(props);

    return (
      <View style={{ padding: 20, backgroundColor: "orange" }}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: props.item.sprites.front_default }}
        ></Image>
        <Text> {props.item.id} </Text>
        <Text></Text>
      </View>
    );
  };

  return (
    <View>
      <Text>PokemonListScreen</Text>

      <Button
        title="Next Page"
        disabled={currentPage === 20}
        onPress={() => {
          const { initialNum, finalNum } = calcCurrentPageValues(
            currentPage + 1
          );
          fetchOf20Pokemons(currentPage, +1);
        }}
      />

      <Button
        title="Prev Page"
        disabled={currentPage === 1}
        onPress={() => {
          const { initialNum, finalNum } = calcCurrentPageValues(
            currentPage - 1
          );
          fetchOf20Pokemons(currentPage, -1);
        }}
      />

      {dataOf20Pokemons.length > 1 && (
        <FlatList data={dataOf20Pokemons} renderItem={PokemonListItem} />
      )}
    </View>
  );
}
