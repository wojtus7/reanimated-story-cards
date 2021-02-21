import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';
import {StyleSheet, View} from 'react-native';
import React from 'react';
import CardReverse from './CardReverse';

const PlaceholderBackCards = () => {
  const openAnimation = useSharedValue(1);

  const animatedBack = useAnimatedStyle(() => {
    return {
      opacity: openAnimation.value <= 1.5 ? 1 : 0,
      transform: [
        {
          scale: interpolate(openAnimation.value, [1, 1.5, 2], [1, 1.2, 1]),
        },
        {perspective: openAnimation.value * 180},
        {rotateY: `${openAnimation.value * 180}deg`},
      ],
    };
  });

  return (
    <>
      <View style={styles.cardWrapper}>
        <Animated.View style={[animatedBack, styles.wrapperBack]}>
          <CardReverse />
        </Animated.View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapperBack: {
    height: 240,
    width: 240,
    backgroundColor: '#aaa',
    borderRadius: 35,
  },
  cardWrapper: {
    height: 240,
    position: 'absolute',
  },
});

export default PlaceholderBackCards;
