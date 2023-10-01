import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from "native-base";
import Logo from "../src/assets/ufpr.png";
import { TouchableOpacity } from "react-native";
import { TEMAS } from "./estilos/temas";

export default function Login({navigation}) {
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={Logo} alt="Logo do app da Aula" />
      <Text fontSize="2xl" fontWeight="bold" color={"black"} textAlign="center" mt={5} >
        Calculadora de Horas das Atividades Formativas
      </Text>
      <Box>
        <FormControl mt={3}>
          <FormControl.Label>GRR: </FormControl.Label>
          <Input placeholder="Insira seu GRR!" size="lg" w="100%" borderRadius="lg" bgColor="gray.100" shadow={3} />
        </FormControl>
      </Box>

      <Box>
        <FormControl mt={3}>
          <FormControl.Label>Senha: </FormControl.Label>
          <Input placeholder="Insira sua senha!" size="lg" w="100%" borderRadius="lg" bgColor="gray.100" shadow={3} />
        </FormControl>
      </Box>
      <Button w="100%" bg={TEMAS.colors.purple[500]} mt={10} borderRadius="lg" 
        onPress={()=> navigation.navigate('Tabs')}
      > Acessar! </Button>
      <TouchableOpacity>
        <Link href="https://sistemas.ufpr.br/login" mt={5}>
            Recuperar conta!
        </Link>
      </TouchableOpacity>
    </VStack>

  );
}

