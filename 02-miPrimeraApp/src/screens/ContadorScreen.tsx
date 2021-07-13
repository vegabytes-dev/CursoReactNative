import React, { useState } from 'react';
import {Text, View} from 'react-native';

export const ContadorScreen = () => {
    const [contador, setContador] = useState(10)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 40,
          textAlign: 'center',
          top: 15,
        }}>
        Contador: xxxx
      </Text>
    </View>
  );
};
