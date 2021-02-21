import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const CardReverse = () => {
  return (
    <>
      <View style={styles.wrapper}>
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
  },
  reverseIcon: {
    height: 140,
    width: 140,
  },
});

export default CardReverse;
