import React, {useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const Question = ({question, showQuestion}) => {
  const openAnimation = useSharedValue(0);

  useEffect(() => {
    openAnimation.value = withTiming(showQuestion ? 1 : 0);
  }, [openAnimation, showQuestion]);

  const animatedWrapper = useAnimatedStyle(() => {
    return {
      opacity: openAnimation.value,
      transform: [{translateY: 10 - openAnimation.value * 10}],
    };
  });

  return (
    <>
      <Animated.View style={[animatedWrapper, styles.wrapper]}>
        <Text style={styles.text}>{question}</Text>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default Question;
