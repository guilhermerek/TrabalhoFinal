import { VStack, Image, Text } from "native-base";
import Logo from "./assets/ufpr.png";

/**componente principal, que representa a tela de login*/

export default function CadastroUsuario() {
  return (
    /**
     * organizado em um VStack com configurações para alinhar
     * o conteúdo ao centro verticalmente (alignItems="center")
     * e preenchimento (p={5}) e justificar o conteúdo ao centro
     * horizontalmente (justifyContent="center").
     */
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">

      <Image source={Logo} alt="Logo do app da Aula" />
      <Text fontSize="2xl" fontWeight="bold" color={"gray.500"} textAlign="center" mt={5} >
        Tela de cadastro do usuário!
      </Text>

      
    </VStack>

  );
}

/** exibe uma imagem (Image source={Logo} alt="Logo do app da Aula"),
 * um título informando ao usuário para fazer
 * login com suas credenciais, e campos de entrada de email e senha
 * usando FormControl e Input */

/**
 * O botão "Entrar" permite ao usuário acessar o aplicativo
 * quando pressionado. Ele tem uma ação definida usando a
 * propriedade onPress, que, quando ativada, navegará para a
 * tela "Principal"
 */

/**
 * Abaixo do botão de login, tem um link "Recuperar senha!"
 * que permite acessar uma página para recuperar a senha
 * (definido com a propriedade href)
 */

/**
 * link "Faça seu cadastro!" que, quando pressionado,
 * navegará para a tela "CadastroUnidade"
 * (usando navigation.navigate
 */