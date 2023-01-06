import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
//Fontes
import { useFonts, Inter_900Black, Inter_400Regular } from '@expo-google-fonts/inter';
import { Bangers_400Regular  } from '@expo-google-fonts/bangers';

//Componentes
import Header from './components/header/header';
import Menu from './components/menu/menu';

export default function App() {
  const [fontCarregada] = useFonts({
    "InterBold": Inter_900Black,
    "InterRegular": Inter_400Regular,
    "BangersRegular": Bangers_400Regular,
  });

  if(!fontCarregada){
    return <View style={styles.container}>

    </View>
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text>Teste</Text>
        </View>
        <Menu />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: '#1c1c1c',
    color: '#4e0191',
    alignContent: "center",
  },
  content: {
    paddingHorizontal: 20,
  }
});
