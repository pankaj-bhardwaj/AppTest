/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import CustomButton from '../common/CustomButton';
import {colors} from '../styles/commonStyles';
import {randomColorGenerator} from '../utils/CommonFunctions';
import CapturedText from '../common/CapturedText';

const SecondScreen = ({navigation}) => {
  const [bgColor, setBgColor] = useState(colors.white);

  const onNavigate = index => {
    if (index === 1) {
      setBgColor(randomColorGenerator());
    } else if (index === 2) {
      navigation.navigate('ThirdScreen');
    } else if (index === 3) {
      navigation.navigate('FirstScreen');
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <View style={styles.upperContainer}>
        <View style={[styles.flexOne, styles.topPadding]}>
          <CapturedText />
        </View>

        <View style={styles.flexOne}>
          <Text style={styles.text}>Second Screen</Text>
        </View>
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
          buttonText={'Press Me to go Third screen'}
          onPress={() => onNavigate(2)}
        />
        <CustomButton
          customStyle={{backgroundColor: colors.slategray}}
          textStyle={{color: colors.white}}
          buttonText={'Press Me to go First screen'}
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
  flexOne: {
    flex: 1,
  },
  topPadding: {
    paddingTop: 20,
  },
});

export default SecondScreen;
