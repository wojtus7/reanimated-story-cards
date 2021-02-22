import {times} from 'lodash';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from 'react-native-reanimated';
import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import CardReverse from './CardReverse';

const PlaceholderBackCards = () => {
  const openAnimation = useSharedValue(-2);

  useEffect(() => {
    openAnimation.value = 0;
  }, []);

  function cardTransform(index) {
    return () => {
      'worklet';
      const localTranslateX = withDelay(
        250 - index * 50,
        withTiming(openAnimation.value * 200, {duration: 800}),
      );

      const localTranslateY = withDelay(
        250 - index * 50,
        withTiming(openAnimation.value * 50, {duration: 800}),
      );

      return {
        transform: [
          {translateX: localTranslateX},
          {translateY: localTranslateY},
        ],
        zIndex: index,
      };
    };
  }

  const Card = ({index}) => {
    return (
      <Animated.View
        style={[useAnimatedStyle(cardTransform(index)), styles.wrapperBack]}>
        <CardReverse shadowOpacity={0.2 - index * 0.05} />
      </Animated.View>
    );
  };

  return (
    <>
      <View style={styles.cardWrapper}>
        {times(5, (index) => (
          <Card index={index} />
        ))}
      </View>
    </>
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
  },
});

export default PlaceholderBackCards;
