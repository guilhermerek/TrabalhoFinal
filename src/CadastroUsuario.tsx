import { VStack, Image, Box, Button, FormControl, Radio } from "native-base";
import Logo from "./assets/ufpr.png";
import { TEMAS } from "./estilos/temas";
import { Titulo } from "./componentes/Titulo";
import { usuarios } from "./utils/CadastroUsuarioTexto";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { useState } from "react";

/**componente principal, que representa a tela de login*/

export default function CadastroUsuario() {
  
  const [dados, setDados] = useState({} as any);
  const [radioValue, setradioValue] = useState('');

  function atualizaDados(campo: string, valor:string){
    setDados({...dados, [campo]:valor});
  }

  return (
    /**
     * organizado em um VStack com configurações para alinhar
     * o conteúdo ao centro verticalmente (alignItems="center")
     * e preenchimento (p={5}) e justificar o conteúdo ao centro
     * horizontalmente (justifyContent="center").
     */
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">

      <Image source={Logo} alt="Logo do app da Aula" />
      <Titulo> {usuarios.titulo} </Titulo>
      <Box>
        {
          usuarios.entradaTexto.map(entrada => {
            return (
              <EntradaTexto
              key={entrada.id}
              label={entrada.label}
              placeholder={entrada.placeholder}
              value={dados[entrada.label]}
              secureTextEntry={entrada.secureTextEntry}
              onChangeText={(text => atualizaDados(entrada.name, text))}
              />
            )
          })
        }
        <FormControl.Label mt={5}>Tipo de usuario:</FormControl.Label>
        <Radio.Group name="radioTipoUsuario" value={radioValue} onChange={(nextValue)=>{
          setradioValue(nextValue);
        }}>
          <Radio value="normal" my={1}>
            Usuario comum.
          </Radio>
          <Radio value="admin" my={1}>
            Administrador.
          </Radio>
        </Radio.Group>

      </Box>
      <Button w="100%" bg={TEMAS.colors.blue[400]} mb={10} borderRadius={"lg"} onPress={() => console.log(dados)}>
        Cadastrar
      </Button>

      
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