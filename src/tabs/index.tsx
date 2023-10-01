import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
/*import Ionicons from "react-native-vector-icons/Ionicons";*/
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import CadastroUnidade from "./CadastroHoras";
import Principal from "./Principal";


const Tab = createBottomTabNavigator();

const screenOptions= {
    tabBarStyle:{
        backgroundColor: "#8806ce"
    },
    tabBarActiveTintColor:"#fff",
    tabBarInactiveTintColor:"#000"
};


const tabs = [
    {
        id: 1,
        name: "Principal",
        component: Principal,
        icon: "home"
    },
    {
        id: 2,
        name: "CadastroHoras",
        component: CadastroUnidade,
        icon: "certificate"
    }
]

export default function Tabs(){

    return(
        <Tab.Navigator screenOptions={screenOptions}>
            {tabs.map((tabs) => (
                <Tab.Screen 
                key={tabs.id}
                name={tabs.name}
                component={tabs.component}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size})=> (
                        <MaterialCommunityIcons name={tabs.icon} color={color} size={size}/>
                    )
                }}
                />
            ))}
            
    </Tab.Navigator>
    )
}