import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Alert } from "react-native";
import axios from 'axios';

const API_URL ='http://localhost:5000/api/ubicacion';

export default class App extends Component {
  state = {
    ubicacion: this.coordenadas
  };

  encontrarCoordenadas = () => {
    navigator.geolocation.getCurrentPosition(
      posicion => {
        const longitud = JSON.stringify(posicion.coords.longitude);
        const latitud = JSON.stringify(posicion.coords.latitude);
        const user_name= "Juan Rojas";


        this.setState({ longitud, latitud });

        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        
        const actual = yyyy + '-' + mm + '-' + dd;
        this.setState({ fecha : actual })

        const data = JSON.stringify({
          user_name: "Juan Rojas",
          latitud: this.state.latitud,
          longitud: this.state.longitud,
          fecha: this.state.fecha
        })

        return alert(JSON.stringify(data))
        axios.post(API_URL, this.state)
        .then(response => {
          alert(JSON.stringify(response.data.ok))
        })
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  render() {
    return (
      <View style={estilos.contenedor}>
        <TouchableOpacity onPress={this.encontrarCoordenadas}>
          <Text style={estilos.texto}>Ubicación</Text>
          <Text>Longitud: {this.state.longitud}</Text>
          <Text>Latitud: {this.state.latitud}</Text>
          <Text>Usuario: {this.state.user_name}</Text>
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
  },
  boton:{
    backgroundColor: "#367698",
    color: "white"
  }
});