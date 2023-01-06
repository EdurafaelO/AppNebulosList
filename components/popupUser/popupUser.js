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
                    <View style={estilos.box}>
                        <TouchableOpacity>
                            <Text>Logar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Registrar</Text>
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
        height: "100%",
        alignItems: "flex-end",
    },
    box:{
        width: "75%",
        height: "100%",
        backgroundColor: "#ff0000",
        marginTop: "22%"
    },
});