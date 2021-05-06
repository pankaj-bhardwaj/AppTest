import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';

const CapturedText = () => {
  const inputText = useSelector(state => state.capturedText.inputText);
console.log("asd", inputText)
  return <Text style={styles.dynamicTextStyle}>{inputText}</Text>;
};

const styles = StyleSheet.create({
  dynamicTextStyle: {
    fontSize: 20,
  },
});

export default CapturedText;
