import { VStack, Image, Text, Box, FormControl, Input, Button, Link, useToast } from "native-base";
import Logo from "../src/assets/ufpr.png";
import { TouchableOpacity } from "react-native";
import { TEMAS } from "./estilos/temas";
import { useState } from "react";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { fazerLogin } from "./servicos/autenticacao";

export default function Login({navigation}) {

  const [grr, setGrr] = useState('');
  const [senha, setSenha] = useState('');
  const toast= useToast();

  async function login() {
    const resultado = await fazerLogin(grr,senha)
    console.log(resultado);
    if(resultado && resultado.result.id){
      navigation.replace('Tabs');
    }else{
      toast.show({
        title: "Erro no LOGIN!",
        description: "Email ou senha incorreta!",
        backgroundColor: 'red.500'
      })
    }
  }

  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={Logo} alt="Logo do app da Aula" />
      <Text fontSize="2xl" fontWeight="bold" color={"black"} textAlign="center" mt={5} >
        Faça Login na sua Calculadora de Horas das Atividades Formativas!
      </Text>
      <Box>
        <EntradaTexto label="GRR" placeholder="Insira seu GRR" value={grr} onChangeText={setGrr} />
        <EntradaTexto label="Senha" placeholder="Insira sua senha" value={senha} onChangeText={setSenha} secureTextEntry={true} />
      </Box>

      <Button w="100%" bg={TEMAS.colors.purple[500]} mt={10} borderRadius="lg" 
        onPress={login}
      > Acessar! </Button>
      <TouchableOpacity>
        <Link href="https://sistemas.ufpr.br/login" mt={5}>
            Recuperar conta!
        </Link>
      </TouchableOpacity>
    </VStack>

  );
}

