import React from "react";
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Menu(){
    return(
        <View style={estilos.container}>
            <View style={estilos.menuArea}>
                <Pressable style={estilos.buttonAdd}>
                    <Text style={estilos.buttonAddText}>Criar Lista</Text>
                </Pressable>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 10
    },
    menuArea: {
        width: "90%",
        backgroundColor: "#141414",
        color: "#9012ff",
        textAlign: "center",
        padding: 20,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonAdd: {
        backgroundColor: "#1c1c1c",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    buttonAddText: {
        color: "#9012ff",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "InterBold",
    },
    text:{
        color: "#9012ff",
        fontFamily: "InterBold",
    }
});