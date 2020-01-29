import React, {Component} from 'react';
import {Modal,ImageBackground, Text,SafeAreaView, TouchableHighlight, View, Alert, Button, StyleSheet} from 'react-native';

  const image = './assets/fondo.png'

  export default class Menu extends Component {
    
    state = {
      modalVisible: false,
    };
  
    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }
  
    render() {
      return (
        <SafeAreaView style={styles.container}>
        <View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
              <View>
                <Text>Producto</Text>
  
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>Atrás</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <Text style={styles.textMenu}>Crear menú de la Semana</Text>
          <View style={styles.separator}/>
          <TouchableHighlight style={styles.touchStyle}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={styles.text}>Lunes</Text>
          </TouchableHighlight>
          <View style={styles.separator1}/>
          <TouchableHighlight style={styles.touchStyle}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={styles.text}>Martes</Text>
          </TouchableHighlight>
          <View style={styles.separator1}/>
          <TouchableHighlight style={styles.touchStyle}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={styles.text}>Miércoles</Text>
          </TouchableHighlight>
          <View style={styles.separator1}/>
          <TouchableHighlight style={styles.touchStyle}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={styles.text}>Jueves</Text>
          </TouchableHighlight>
          <View style={styles.separator1}/>
          <TouchableHighlight style={styles.touchStyle}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={styles.text}>Viernes</Text>
          </TouchableHighlight>
          <ImageBackground source={{uri: image}} style={{width: '100%', height: '100%'}}>
            <Text>Inside</Text>
          </ImageBackground>
        </View>
        </SafeAreaView>
      );
    }
  } 
    
  const styles = StyleSheet.create({
        container: {
            flex:1,
            alignItems:'center',
            marginTop: 50,
        },
        text: { 
            textAlign: 'center',
            fontWeight: '100',
            color: '#eee' 
        },
        textMenu:{
            fontSize: 20,
            marginTop:0
        },
        touchStyle:{
            backgroundColor: '#000',
            borderColor:'#eee',
            padding:10,
            borderRadius:5,
        },
        separator: {
            marginVertical: 10,
            borderBottomColor: '#000',
            borderBottomWidth: StyleSheet.hairlineWidth,
        },
        separator1: {
            marginVertical: 10,
            borderBottomColor: '#eee',
            borderBottomWidth: StyleSheet.hairlineWidth,
        },
  })
