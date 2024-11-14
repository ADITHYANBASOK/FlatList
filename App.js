import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import ColorBox from "./Src/Components/ColorBox";
import { ArrayColors } from "./Src/Components/RawData";
const App = () => {

  return (
    <FlatList
      style={style.container}
      data={ArrayColors}
      keyExtractor={(item) => item.hex}
      renderItem={({ item }) => <ColorBox hexValue={item.hex} name={item.name} />}
      ListHeaderComponent={<Text style={style.text}>List of Colors</Text>}
    />

  );
};
export default App;
const style = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 2,
    paddingBottom: 10,
  },
  text: {
    fontWeight: "800",
    color: "black",
    marginBottom: 20,
  }
})