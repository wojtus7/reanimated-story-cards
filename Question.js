import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

const Question = ({question = '', showQuestion}) => {
  const animatedWrapper = useAnimatedStyle(() => {
    return {
      opacity: withTiming(showQuestion ? 1 : 0),
      transform: [{translateY: withTiming(showQuestion ? 0 : 10)}],
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
    paddingHorizontal: 30,
  },
});

export default Question;
