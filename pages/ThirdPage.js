// React Native Navigation Drawer – Example using Latest Navigation Version
// https://aboutreact.com/react-native-navigation-drawer

import * as React from 'react';
import {Button, View, Text, SafeAreaView, Image} from 'react-native';

const ThirdPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={require("../assets/me_200x150.jpg")} style={{ width: 340, height: 206 }} />
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Alumno: Carlos Augusto Nole Machaca
          </Text>

        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          EXPO REACT-NATIVE
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          EVERIS / CAR-TRU-PER 2020
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ThirdPage;
