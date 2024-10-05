import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
const ColorBox = (props) => {
    const backgroundStyle = {
        backgroundColor: props.hexValue,
    };
    return (
        <View style={[style.box, backgroundStyle]}>
            <Text style={style.text}>
                {props.name} {props.hexValue}
            </Text>
        </View>
    );

};
export default ColorBox;

const style = StyleSheet.create({
    box: {
        padding: 10,
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    text: {
        fontWeight: "800",
        color: "white",
        paddingTop: 25,

    }
})