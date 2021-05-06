/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Dimensions} from 'react-native';
import {colors} from '../styles/commonStyles';

const {width} = Dimensions.get('window');

type CustomButtonProps = {
  onPress: Function,
  customStyle: Object,
  buttonText: String,
  textStyle: Object,
};

const CustomButton = ({
  onPress,
  buttonText,
  customStyle,
  textStyle,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, customStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: width / 10,
    backgroundColor: 'red',
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.white,
  },
  text: {
    color: colors.black,
  },
});

export default CustomButton;
