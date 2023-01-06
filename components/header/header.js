import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

//Comonentes
import PopupUser from "../popupUser/popupUser";

export default function Header(){
    return (
        <View style={estilos.container}>
            <Text style={estilos.textTitleHeader}>Nebulos List</Text>
            <PopupUser />
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#141414",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        flexDirection: "row",
    },
    textTitleHeader: {
        fontFamily: "BangersRegular",
        color: "#9012ff",
        fontSize: 30,
        paddingHorizontal: 20,
    },
});