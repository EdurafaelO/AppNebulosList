import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, Modal, SafeAreaView } from 'react-native';

//Images
import UserIcon from '../../scr/images/icons/userIcon.png';

export default function PopupUser(){

    
    return (
        <>
            <TouchableOpacity  onPress={()=>{setVisible(true)}}>
                <Image source={UserIcon} style={estilos.imgUserIcon} />
            </TouchableOpacity>
        </>
    );
}

const estilos = StyleSheet.create({
    imgUserIcon: {
        width: 40,
        height: 40,
    }
});