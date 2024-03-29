import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  Alert, 
  StyleSheet, 
  View, 
  TextInput, 
  Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      txtPeso : "",
      txtAltura : "",
    };
  }

  botaoCalcular = _ => {
    const {txtPeso, txtAltura} = this.state
    const peso = parseFloat(txtPeso)
    const altura = parseFloat(txtAltura)

    if(Number.isNaN(peso) || Number.isNaN(altura)) {
      Alert.alert("Erro", "Preencha os campos corretamente.")
      return
    }

    const imc = peso / altura ** 2
    let categoria = ""

    if (imc < 18.5) {
      categoria = "Abaixo do peso."
    }
    else if (imc < 25) {
      categoria = "Peso normal."
    }
    else if (imc < 30) {
      categoria = "Acima do peso."
    }
    else {
      categoria = "Obesidade"
    }
    const mensagem = `IMC = ${imc.toFixed(1)}\n${categoria}` 
    
    Alert.alert("Índice de massa Corporal", mensagem)
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder = "Peso"
          keyboardType = 'numeric'
          style= {styles.input}
          onChangeText = {txtPeso => this.setState({ txtPeso })}
        />
        <TextInput 
          placeholder = "Altura"
          keyboardType = 'numeric'
          style= {styles.input}
          onChangeText = {txtAltura => this.setState({ txtAltura })}
        />
        <Button 
          onPress = {this.botaoCalcular}
          title = "Calcular IMC"
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding : 16,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1, 
    fontSize: 22,
    height:32,
    padding:5,
    marginBottom: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
});
