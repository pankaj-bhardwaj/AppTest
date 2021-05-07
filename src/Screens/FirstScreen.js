/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Platform} from 'react-native';
import {useDispatch} from 'react-redux';

import CustomButton from '../common/CustomButton';
import {colors} from '../styles/commonStyles';
import {randomColorGenerator} from '../utils/CommonFunctions';
import {textCapture} from '../redux/actions/TextCaptureActions';
import CapturedText from '../common/CapturedText';
import CustomSwipeButton from '../common/CustomSwipeButton';

const FirstScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [bgColor, setBgColor] = useState(null);

  const onNavigate = index => {
    if (index === 1) {
      setBgColor(randomColorGenerator());
    } else if (index === 2) {
      navigation.navigate('SecondScreen');
    } else if (index === 3) {
      navigation.navigate('ThirdScreen');
    }
  };

  const onTextChange = text => {
    dispatch(textCapture(text));
  };

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <View style={styles.upperContainer}>
        <View style={[styles.flexOne, styles.topPadding]}>
          <CapturedText />
        </View>

        <View style={styles.flexOne}>
          <Text style={styles.text}>First Screen</Text>
        </View>
      </View>

      <View style={styles.lowerContainer}>
        <View style={styles.inputTextView}>
          <TextInput
            onChangeText={onTextChange}
            placeholder={'Whats in your mind...'}
            placeholderTextColor={bgColor ? colors.white : colors.black}
          />
        </View>
        <CustomButton
          customStyle={{backgroundColor: colors.black}}
          textStyle={{color: colors.white}}
          buttonText={'Press Me'}
          onPress={() => onNavigate(1)}
        />
        <CustomButton
          customStyle={{backgroundColor: colors.skyblue}}
          textStyle={{color: colors.white}}
          buttonText={'Press Me to go second screen'}
          onPress={() => onNavigate(2)}
        />
        <CustomButton
          customStyle={{backgroundColor: colors.slategray}}
          textStyle={{color: colors.white}}
          buttonText={'Press Me to go third screen'}
          onPress={() => onNavigate(3)}
        />
        <CustomSwipeButton bgColor={bgColor} />
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
  inputTextView: {
    borderWidth: 1,
    padding: Platform.OS === 'ios' ? 10 : 0,
    marginBottom: 50,
    borderRadius: 5,
  },
  dynamicTextStyle: {
    fontSize: 20,
  },
  flexOne: {
    flex: 1,
  },
  topPadding: {
    paddingTop: 20,
  },
});

export default FirstScreen;
