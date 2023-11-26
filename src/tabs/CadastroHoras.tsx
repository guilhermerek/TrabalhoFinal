import { VStack, Image, Box, Checkbox, ScrollView } from "native-base";
import  Logo from '../assets/ufpr.png'
import { Titulo } from "../componentes/Titulo";

import { Botao } from "../componentes/Botao";
import { useState } from "react";
import { secoes } from "../utils/CadastroHorasTexto";
import React from "react";

import { StyleSheet, View } from 'react-native';
import BotaoRadio from "../componentes/BotaoRadio";
import { EntradaTexto } from "../componentes/EntradaTexto";



export default function CadastroHoras() {

  const [numSecao, setNumSecao] = useState(0);

  function avancarSecao() {
    if(numSecao < secoes.length - 1){
      setNumSecao(numSecao + 1);
    }
  }

  function voltarSecao() {
    if(numSecao > 0){
      setNumSecao(numSecao - 1);
    }
  }

  return (
    <ScrollView flex={1} p={5}>
    <VStack flex={1} alignItems="center" p={5} >
      <Image source={Logo} alt="Logo do app para lançar horas" />
      <Titulo>
        {secoes[numSecao].titulo}
      </Titulo>
      

      <Box>
      {
        secoes[numSecao].entradaTexto.map( entrada=> {
          return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
        })}
          
          <View style={styles.container}>
          <BotaoRadio />
        </View>

      </Box>
      


      <Box>    
        {
          secoes[numSecao].checkbox.map(checkbox => {
            return <Checkbox key={checkbox.id} value={checkbox.value}>{checkbox.value}</Checkbox>
          })}
          
      </Box>
      {console.log(numSecao)}
      {numSecao < secoes.length - 1 && <Botao onPress= {()=> avancarSecao()} mb={-2}> Avançar </Botao>}
      {numSecao > 0  && <Botao onPress= {()=> voltarSecao()} bgColor='grey.300' mb={8}> Voltar </Botao>}
      
    </VStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});