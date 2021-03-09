import {includes} from 'lodash';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import PowerPerson from './PowerPerson';

const PowerIndicators = ({currentMood}) => {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.personsWrapper}>
          <PowerPerson
            isHappy={includes(currentMood.happy, 'knight')}
            isSad={includes(currentMood.sad, 'knight')}
            image={'https://image.flaticon.com/icons/png/512/3479/3479960.png'}
          />
          <PowerPerson
            isHappy={includes(currentMood.happy, 'joker')}
            isSad={includes(currentMood.sad, 'joker')}
            image={'https://image.flaticon.com/icons/png/512/3479/3479944.png'}
          />
          <PowerPerson
            isHappy={includes(currentMood.happy, 'woman')}
            isSad={includes(currentMood.sad, 'woman')}
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
    overflow: 'hidden',
  },
  personsWrapper: {
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
});

export default PowerIndicators;
