import { NativeBaseProvider, StatusBar } from 'native-base';
import { TEMAS } from './src/estilos/temas';
import Login from './Login';
import CadastroHoras from './CadastroHoras';


export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]}></StatusBar>
      
      <CadastroHoras />
    </NativeBaseProvider>
  );
}