import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import axios from 'axios';

const API_URL ='';
// let unix_timestamp = 158186303421.4758
// var date = new Date(unix_timestamp * 1000);
// var hours = date.getHours();
// var minutes = "0" + date.getMinutes();
// var seconds = "0" + date.getSeconds();
// var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
// console.log(formattedTime);

export default class App extends Component {
  state = {
    ubicacion: this.coordenadas
  };

  encontrarCoordenadas = () => {
    navigator.geolocation.getCurrentPosition(
      posicion => {
        const coordenadas = JSON.stringify(posicion);
        //alert(coordenadas);

        this.setState({ coordenadas });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  postData =()=>{
    axios.post(API_URL,this.state)
      .then(response=>{
         console.log(response)
      })
      .catch(e=>{
         console.log(e)
    });
  }

  render() {
    return (
      <View style={estilos.contenedor}>
        <TouchableOpacity onPress={this.encontrarCoordenadas}>
          <Text style={estilos.texto}>Donde Estoy?</Text>
          <Text>ubicacion: {this.state.coordenadas}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e1e7ea"
  },
  texto: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});