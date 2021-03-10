import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {StyleSheet, View, Text} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';

const Card = ({
  onChooseLeftAnswer,
  onChooseRightAnswer,
  leftText,
  rightText,
  image,
  backgroundColor,
}) => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const cardSpringConfig = {
    damping: 100,
    stiffness: 90,
    mass: 0.5,
  };

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: () => {
      x.value = withSpring(0, cardSpringConfig);
      y.value = withSpring(0, cardSpringConfig);
    },
  });

  const animatedMovableCard = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: interpolate(
            x.value,
            [-50, 50],
            [-0.05, 0.05],
            Extrapolate.EXTEND,
          ),
        },
        {translateX: x.value},
        {translateY: y.value},
      ],
    };
  });

  const animatedRightTextWrapper = useAnimatedStyle(() => {
    return {
      opacity: interpolate(x.value, [15, 70], [0, 1], Extrapolate.CLAMP),
      transform: [
        {
          rotateZ: interpolate(
            x.value,
            [0, 50],
            [0, -0.03],
            Extrapolate.EXTEND,
          ),
        },
      ],
    };
  });

  const animatedLeftTextWrapper = useAnimatedStyle(() => {
    return {
      opacity: interpolate(x.value, [-15, -70], [0, 1], Extrapolate.CLAMP),
      transform: [
        {
          rotateZ: interpolate(
            x.value,
            [-50, 0],
            [0.03, 0],
            Extrapolate.EXTEND,
          ),
        },
      ],
    };
  });

  return (
    <View style={styles.cardWrapper}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[animatedMovableCard, styles.wrapper, {backgroundColor}]}>
          <Animated.View
            style={[animatedRightTextWrapper, styles.topTextWrapper]}>
            <Text style={styles.topText}>{rightText}</Text>
          </Animated.View>
          <Animated.View
            style={[animatedLeftTextWrapper, styles.topTextWrapper]}>
            <Text style={[styles.topText, styles.textLeft]}>{leftText}</Text>
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 240,
    width: 240,
    borderRadius: 35,
    overflow: 'hidden',
  },
  cardWrapper: {
    height: 240,
  },
  topTextWrapper: {
    position: 'absolute',
    width: '120%',
    left: '-10%',
    top: '-10%',
    paddingTop: '15%',
    paddingHorizontal: '15%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 15,
    zIndex: 10,
  },
  topText: {
    color: '#fff',
  },
  textLeft: {
    textAlign: 'right',
  },
});

export default Card;
