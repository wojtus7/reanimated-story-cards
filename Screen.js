import {View, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import Card from './Card';
import PlaceholderBackCards from './PlaceholderBackCards';
import Question from './Question';
import PowerIndicators from './PowerIndicators';

export default function AnimatedStyleUpdateExample(props) {
  const [showReverseCard, setShowReverseCard] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  const showNextCard = (timeout) => {
    setTimeout(() => {
      setShowCard(true);
      setTimeout(() => {
        setShowQuestion(true);
      }, 100);
    }, timeout);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowReverseCard(true);
    }, 500);
    showNextCard(2000);
  }, []);

  const onChooseAnswer = () => {
    setShowQuestion(false);
    setTimeout(() => {
      // let it fly away in peace for 300 ms
      setShowCard(false);
    }, 300);
    showNextCard(700);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.topWrapper}>
        <PowerIndicators />
      </View>
      <View style={styles.questionWrapper}>
        <Question
          question="Something something super something"
          showQuestion={showQuestion}
        />
      </View>
      <View style={styles.cardWrapper}>
        {showReverseCard && <PlaceholderBackCards />}
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
      <View style={styles.nameWrapper} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardWrapper: {
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionWrapper: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameWrapper: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topWrapper: {
    width: '100%',
    height: 200,
    backgroundColor: '#ccc',
  },
});
