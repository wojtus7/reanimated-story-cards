import React from 'react';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
  interpolate,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated';
import {StyleSheet, View} from 'react-native';
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

  const textOpacityMultiplier = useSharedValue(1);

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
      console.log('x: ', x.value, ' y: ', y.value);
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
          rotateZ: 0.3,
        },
        {translateX: x.value},
        {translateY: y.value},
      ],
    };
  });

  return (
    <>
      <View style={styles.cardWrapper}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View>
            <Animated.View
              style={[animatedMovableCard, styles.wrapper, {backgroundColor}]}
            />
          </Animated.View>
        </PanGestureHandler>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 240,
    width: 240,
    borderRadius: 35,
    overflow: 'hidden',
  },
  wrapperBack: {
    height: 240,
    width: 240,
    borderRadius: 35,
    overflow: 'hidden',
    position: 'absolute',
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
  shadow: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
    zIndex: 10,
  },
});

export default Card;
