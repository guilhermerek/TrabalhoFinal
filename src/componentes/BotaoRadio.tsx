import { VStack } from 'native-base';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const BotaoRadio: React.FC = () => {
  const options = [
    { id: 1, label: 'Opção 1', value: 'option1' },
    { id: 2, label: 'Opção 2', value: 'option2' },
    { id: 3, label: 'Opção 3', value: 'option3' },
  ];

  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

  const handleRadioPress = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <ScrollView>
    <VStack flex={1} alignItems="center" p={5} >
        
        {options.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => handleRadioPress(item.value)}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: 'black', marginRight: 8 }}>
                {selectedValue === item.value && <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: 'black' }} />}
                </View>
                <Text>{item.label}</Text>
            </View>
            </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={() => console.log('Selecionado:', selectedValue)}>
            <View style={{ backgroundColor: 'blue', padding: 10, marginTop: 10 }}>
            <Text style={{ color: 'white' }}>Salvar</Text>
            </View>
        </TouchableOpacity>
        
    
    </VStack>
    </ScrollView>
  );
};

export default BotaoRadio;
