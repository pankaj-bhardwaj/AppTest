/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Image} from 'react-native';
import SwipeButton from 'rn-swipe-button';

import {colors} from '../styles/commonStyles';
import icons from '../utils/Icons';

type CustomSwipeButtonProps = {
  bgColor: String,
};

const CustomSwipeButton = ({bgColor = null}: CustomSwipeButtonProps) => {
  const ArrowRight = () => (
    <Image source={icons.ic_right_arrow} style={styles.image} />
  );

  return (
    <SwipeButton
      shouldResetAfterSuccess={true}
      // onSwipeFail={() => console.log('failed')}
      // onSwipeStart={() => console.log('start')}
      onSwipeSuccess={() => {
        alert('Successfully Swiped.');
      }}
      title={'Slide me'}
      titleColor={colors.white}
      railBackgroundColor={bgColor || colors.black}
      containerStyles={styles.container}
      thumbIconStyles={styles.radius}
      railStyles={styles.radius}
      railFillBorderColor={colors.black}
      railFillBackgroundColor={colors.black}
      thumbIconBackgroundColor={colors.skyblue}
      thumbIconBorderColor={colors.skyblue}
      height={40}
      thumbIconComponent={ArrowRight}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginHorizontal: 0,
  },
  radius: {
    borderRadius: 5,
  },
  image: {
    height: 20,
    width: 20,
  },
});

export default CustomSwipeButton;
