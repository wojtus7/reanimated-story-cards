import {View, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import Card from './Card';
import PlaceholderBackCards from './PlaceholderBackCards';
import Question from './Question';
import PowerIndicators from './PowerIndicators';
import PlaceholderBackStaticCard from './PlaceholderBackStaticCard';
import StartButton from './StartButton';
import useGeneratedCards from './useGeneratedCards';

export default function AnimatedStyleUpdateExample() {
  const {getCardByIndex} = useGeneratedCards();
  const [currentCard, setCurrentCard] = useState(getCardByIndex(0));
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentMood, setCurrentMood] = useState({happy: [], sad: []});

  const [showStartButton, setShowStartButton] = useState(true);
  const [showAnimatedReverseCard, setShowAnimatedReverseCard] = useState(false);
  const [showReverseCard, setShowReverseCard] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  // TODO refactor those settimeouts
  const showNextCard = (timeout) => {
    setTimeout(() => {
      setShowCard(true);
      setTimeout(() => {
        setShowQuestion(true);
      }, 100);
    }, timeout);
  };

  const onStartGame = () => {
    setCurrentCard(getCardByIndex(currentCardIndex));
    setCurrentCardIndex(currentCardIndex + 1);

    setTimeout(() => {
      setShowStartButton(false);
      setShowAnimatedReverseCard(true);
    }, 500);
    setTimeout(() => {
      setShowReverseCard(true);
      setTimeout(() => {
        setShowAnimatedReverseCard(false);
      }, 100);
    }, 2000);
    showNextCard(2500);
  };

  const onChooseLeftAnswer = () => {
    createNewCard();
    setTimeout(() => {
      setCurrentMood({happy: [], sad: []});
    }, 200);
  };

  const onChooseRightAnswer = () => {
    createNewCard();
    setTimeout(() => {
      setCurrentMood({happy: [], sad: []});
    }, 200);
  };

  const createNewCard = () => {
    setShowQuestion(false);
    setTimeout(() => {
      // let it fly away in peace for 300 ms
      setCurrentCard(getCardByIndex(currentCardIndex));
      setCurrentCardIndex(currentCardIndex + 1);
      setShowCard(false);
    }, 300);
    showNextCard(700);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.questionWrapper}>
        <Question question={currentCard.question} showQuestion={showQuestion} />
      </View>
      <View style={styles.cardWrapper}>
        {showStartButton && <StartButton onPress={onStartGame} />}
        {showAnimatedReverseCard && <PlaceholderBackCards />}
        {showReverseCard && <PlaceholderBackStaticCard />}
        {showCard && (
          <Card
            onChooseLeftAnswer={onChooseLeftAnswer}
            onChooseRightAnswer={onChooseRightAnswer}
            leftText={currentCard.leftText}
            rightText={currentCard.rightText}
            image={currentCard.image}
            backgroundColor={currentCard.background}
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
