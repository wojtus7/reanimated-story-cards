import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Card from './Card';
import PlaceholderBackCards from './PlaceholderBackCards';

export default function AnimatedStyleUpdateExample(props) {
  const [showCard, setShowCard] = useState(true);

  const onChooseAnswer = () => {
    setTimeout(() => {
      setShowCard(false);
    }, 300);
    setTimeout(() => {
      setShowCard(true);
    }, 700);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.cardWrapper}>
        <PlaceholderBackCards />
        {showCard && (
          <Card
            onChooseLeftAnswer={onChooseAnswer}
            onChooseRightAnswer={onChooseAnswer}
            leftText={'Left Option'}
            rightText={'Right Option'}
            image={'https://image.flaticon.com/icons/png/512/3479/3479910.png'}
            backgroundColor={'#ccc'}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardWrapper: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
