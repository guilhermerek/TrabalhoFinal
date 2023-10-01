import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createNativeStackNavigator();

import Login from "./Login";
import Tabs from "./tabs";
import CadastroUsuario from "./CadastroUsuario";

export default function Rotas(){
    return (
        /**
         * estrutura de navegação usando NavigationContainer
         * para encapsular as rotas do aplicativo
         */
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="Login" component={Login} options={{headerShown:false}}
                />
                <Tab.Screen 
                    name="Tabs" component={Tabs} options={{headerShown:false}}
                />
                <Tab.Screen 
                    name="CadastroUsuario" component={CadastroUsuario} options={{headerShown:false}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

/**
 * Dentro do NavigationContainer, cria-se um Tab.Navigator
 * que será usado para gerenciar as diferentes telas do aplicativo.
 * 
 * Dentro do Tab.Navigator, é definido várias telas usando
 * Tab.Screen. Cada tela é associada a um nome
 * ("Login", "Principal", "CadastroUnidade") e a um componente
 * correspondente (por exemplo, Login, Principal, CadastroUnidade).
 * 
 * A propriedade options é usada para definir configurações de tela,
 * como ocultar o cabeçalho (headerShown: false)
 */