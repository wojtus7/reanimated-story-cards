import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const CardReverse = ({isMirrored, shadowOpacity = 0}) => {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={[styles.shadow, {opacity: shadowOpacity}]} />
        <Image
          source={{
            uri: 'https://image.flaticon.com/icons/png/512/3483/3483048.png',
          }}
          style={styles.reverseIcon}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCCD3',
  },
  reverseIcon: {
    height: 140,
    width: 140,
  },
  shadow: {
    position: 'absolute',
    zIndex: 100,
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
});

export default CardReverse;
