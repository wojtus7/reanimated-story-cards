import {StyleSheet, View} from 'react-native';
import React from 'react';
import CardReverse from './CardReverse';

const PlaceholderBackStaticCard = () => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.wrapperBack}>
        <CardReverse />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperBack: {
    position: 'absolute',
    height: 240,
    width: 240,
    backgroundColor: '#aaa',
    borderRadius: 35,
    overflow: 'hidden',
  },
  cardWrapper: {
    height: 240,
    position: 'absolute',
    alignItems: 'center',
    transform: [{rotateY: '180deg'}],
  },
});

export default PlaceholderBackStaticCard;
