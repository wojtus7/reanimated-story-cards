import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import PowerPerson from './PowerPerson';

const PowerIndicators = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.personsWrapper}>
          <PowerPerson
            image={'https://image.flaticon.com/icons/png/512/3479/3479960.png'}
          />
          <PowerPerson
            image={'https://image.flaticon.com/icons/png/512/3479/3479944.png'}
          />
          <PowerPerson
            image={'https://image.flaticon.com/icons/png/512/3479/3479919.png'}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  personsWrapper: {
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
});

export default PowerIndicators;
