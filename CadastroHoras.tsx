import { VStack, Image, Box, Checkbox, ScrollView } from "native-base";
import  Logo from './src/assets/ufpr.png'
import { Titulo } from "./src/componentes/Titulo";
import { EntradaTexto } from "./src/componentes/EntradaTexto";
import { Botao } from "./src/componentes/Botao";
import { useState } from "react";
import { secoes } from "./src/utils/CadastroHorasTexto";

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
        secoes[numSecao].entradaTexto.map(entrada => {
          return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
        })}
      </Box>
      <Box>    
        {
          secoes[numSecao].checkbox.map(checkbox => {
            return <Checkbox key={checkbox.id} value={checkbox.value}>{checkbox.value}</Checkbox>
          })}
          
      </Box>
      {console.log(numSecao)}
      {(numSecao < secoes.length - 1) && <Botao onPress= {()=> avancarSecao()} mb={10}> Avançar </Botao>}
      {(numSecao > 0 ) && <Botao onPress= {()=> voltarSecao()} bgColor='grey.400' > Voltar </Botao>}
      
    </VStack>
    </ScrollView>
  );
}

