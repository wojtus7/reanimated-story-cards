import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const CardPerson = ({image}) => {
  return (
    <>
      <View style={styles.wrapper}>
        <Image source={{uri: image}} style={styles.personImage} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  personImage: {
    height: 200,
    width: 200,
  },
});

export default CardPerson;
