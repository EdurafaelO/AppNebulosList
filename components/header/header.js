import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

//Images
import UserIcon from '../../scr/images/icons/userIcon.png';

export default function Header(){
    return (
        <View style={estilos.container}>
            <Text style={estilos.textTitleHeader}>Nebulos List</Text>
            <Pressable>
                <Image source={UserIcon} style={estilos.imgUserIcon} />
           </Pressable>
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
    imgUserIcon: {
        width: 40,
        height: 40,
    }
});