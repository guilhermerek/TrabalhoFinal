import { TEMAS } from '../estilos/temas';
import {  Text, Button, VStack, Image } from "native-base";
import Logo from "../assets/ufpr.png";
import { Titulo } from '../componentes/Titulo';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { buscarUsuario } from '../servicos/usuario';
import { Texto } from '../componentes/Texto';

export default function PerfilUsuario({navigation}) {


    const [idusuario, setIdUsuario] = useState('');
    const [usuario, setUsuario] = useState({} as any);

    useEffect(()=>{
        obtemUsuario();
        
        console.log(idusuario);
    }, [])

    async function obtemUsuario() {
        try {
            const id = await AsyncStorage.getItem('idusuario');
            setIdUsuario (id);
            if(id !== null){
                const usuarioaux = await buscarUsuario(id);
                setUsuario({...usuarioaux.result});
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
    <Image source={Logo} alt="Logo do app da Aula" />
      
    <Titulo mb={10}>
        Perfil do Usuário!
    </Titulo>
    <Texto>Nome</Texto>
    <Text >{usuario.nome}</Text>
    <Texto>CPF</Texto>
    <Text>{usuario.cpf}</Text>
    <Texto>E-mail</Texto>
    <Text>{usuario.email}</Text>
    {usuario.role && usuario.role == "user" ? <Text>Usuário comum.</Text> : <Text>Administrador.</Text>}



    <Button w="100%" bg={TEMAS.colors.purple[500]} mt={10} borderRadius="lg" 
        onPress={() => navigation.navigate('CadastroHoras')}
      >Editar Usuario</Button>

      <Button w="100%" bg={TEMAS.colors.red[400]} mt={5} borderRadius="lg" 
        onPress={() => navigation.replace('Login')}
      >Logoff</Button>

    </VStack>
  );
}