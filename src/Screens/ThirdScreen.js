/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CustomButton from '../common/CustomButton';
import {colors} from '../Styles/commonStyles';
import {randomColorGenerator} from '../Utils/CommonFunctions';

const ThirdScreen = ({navigation}) => {
  const [bgColor, setBgColor] = useState(colors.white);

  const onNavigate = index => {
    if (index === 1) {
      setBgColor(randomColorGenerator());
    } else if (index === 2) {
      navigation.navigate('FirstScreen');
    } else if (index === 3) {
      navigation.navigate('SecondScreen');
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <View style={styles.upperContainer}>
        <Text style={styles.text}>Third Screen</Text>
      </View>

      <View style={styles.lowerContainer}>
        <CustomButton
          customStyle={{backgroundColor: colors.black}}
          textStyle={{color: colors.white}}
          buttonText={'Press Me'}
          onPress={() => onNavigate(1)}
        />
        <CustomButton
          customStyle={{backgroundColor: colors.skyblue}}
          textStyle={{color: colors.white}}
          buttonText={'Press Me to go First screen'}
          onPress={() => onNavigate(2)}
        />
        <CustomButton
          customStyle={{backgroundColor: colors.slategray}}
          textStyle={{color: colors.white}}
          buttonText={'Press Me to go Second screen'}
          onPress={() => onNavigate(3)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
  },
  upperContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowerContainer: {
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 25,
  },
});

export default ThirdScreen;
