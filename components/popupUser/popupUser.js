import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, Modal, SafeAreaView, View, Text } from 'react-native';

//Images
import UserIcon from '../../scr/images/icons/userIcon.png';

export default function PopupUser(){

    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <>
            <TouchableOpacity onPress={()=>setModalVisible(true)}>
                <Image source={UserIcon} style={estilos.imgUserIcon} />
            </TouchableOpacity>
            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
            >
                <SafeAreaView style={estilos.safeAreaView} onTouchStart={()=>setModalVisible(false)}>
                    <View style={estilos.areaModal}>
                        <TouchableOpacity>
                            <Text style={estilos.textPopUp}>Logar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={estilos.textPopUp}>Registrar</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Modal>
        </>
    );
}

const estilos = StyleSheet.create({
    imgUserIcon: {
        width: 40,
        height: 40,
    },
    safeAreaView: {
        width: "100%",
        alignItems: "flex-end",
    },
    areaModal:{
        width: "auto",
        marginTop: "22%",
        backgroundColor: "#000",
    },
    textPopUp: {
        color: "#9012ff",
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "InterRegular",
        textAlign: "right",
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
});