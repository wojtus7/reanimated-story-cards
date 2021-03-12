import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Card from './Card';
import useGeneratedCards from './useGeneratedCards';

export default function AnimatedStyleUpdateExample() {
  const {getCardByIndex} = useGeneratedCards();
  const [currentCard, setCurrentCard] = useState(getCardByIndex(0));

  return (
    <View style={styles.wrapper}>
      <Card
        onChooseLeftAnswer={() => null}
        onChooseRightAnswer={() => null}
        leftText={currentCard.leftText}
        rightText={currentCard.rightText}
        image={currentCard.image}
        backgroundColor={currentCard.background}
      />
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
});
