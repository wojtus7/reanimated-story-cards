import React from 'react';
import {StyleSheet, View} from 'react-native';

const Card = ({
  onChooseLeftAnswer,
  onChooseRightAnswer,
  leftText,
  rightText,
  image,
  backgroundColor,
}) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={[styles.wrapper, {backgroundColor}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 240,
    width: 240,
    borderRadius: 35,
    overflow: 'hidden',
  },
  cardWrapper: {
    height: 240,
  },
});

export default Card;
