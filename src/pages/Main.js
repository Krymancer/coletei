import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';

import recycle from '../assets/recycle';
import map from '../assets/map.png';
import initiative from '../assets/initiatives.png';
import contact from '../assets/contact.png';
import info from '../assets/info.png';

const Main = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.topText}>
          <Text style={styles.greeting} > Olá </Text>
          <Text style={styles.username}> Fulano da Silva </Text>
          <Text style={styles.pointsText}> Seu saldo é: </Text>
          <Text style={styles.points}> 99999 </Text>
        </View>
        <View style={[styles.grid, {marginTop: 30}]}>
          <TouchableOpacity style={styles.button}>
            <Image source={recycle}></Image>
            <Text>PlaceHolder</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>         
            <Image source={map}></Image>
            <Text>PlaceHolder</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.button}>
            <Image source={initiative}></Image>
            <Text>PlaceHolder</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>            
            <Image source={contact}></Image>
            <Text>PlaceHolder</Text>            
          </TouchableOpacity>
        </View>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.button}>
            <Image source={info}></Image>
            <Text>PlaceHolder</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>            
            <Image source={contact}></Image>
            <Text>PlaceHolder</Text>            
          </TouchableOpacity>
        </View>

        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.scan}>
            <Text style={styles.botText}>ESCANEAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resg}>
            <Text style={styles.botText}>RESGATAR</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  topText: {
    lineHeight: 2
  },
  greeting: {
    fontSize: 38,
    textAlign: "center",
    paddingTop: 10
  },
  username: {
    fontSize: 42,
    textAlign: "center",
    color: "#e7c832",
    marginTop: -10
  },
  pointsText: {
    fontSize: 20,
    textAlign: "center"
  },
  points: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4f4f4f"
  },
  grid: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20

  },
  button: {
    marginHorizontal: 40
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
    marginTop: 20
  },
  scan: {
    height: 60,
    width: 140,
    backgroundColor: '#fa423b',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18 
  },
  resg: {
    height: 60,
    width: 140,
    backgroundColor: '#e7c832',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },

});

export default Main;
