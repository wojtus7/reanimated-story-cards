/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */

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
import React, {useEffect, useState} from 'react';
import {PanGestureHandler} from 'react-native-gesture-handler';
import CardPerson from './CardPerson';
import CardReverse from './CardReverse';

const Card = ({
  onChooseLeftAnswer,
  onChooseRightAnswer,
  leftText,
  rightText,
  image,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const openAnimation = useSharedValue(1);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: (event) => {
      if (event.velocityX > 500 || event.translationX > 150) {
        x.value = withSpring(400, {
          velocity: event.velocityX,
        });
        runOnJS(onChooseRightAnswer)();
      } else if (event.velocityX < -500 || event.translationX < -150) {
        x.value = withSpring(-400, {
          velocity: event.velocityX,
        });
        runOnJS(onChooseLeftAnswer)();
      } else {
        x.value = withSpring(0);
      }
      y.value = withSpring(0);
    },
  });

  useEffect(() => {
    // I give time for images to load up without blinking
    setShowCard(true);
    setTimeout(() => {
      openAnimation.value = withTiming(2, {
        duration: 1000,
      });
      setTimeout(() => {
        setIsActive(true);
      }, 1000);
    }, 200);
  }, []);

  const animatedMovableCard = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: x.value},
        {translateY: y.value},
        {
          rotateZ: interpolate(
            x.value,
            [-50, 50],
            [-0.2, 0.2],
            Extrapolate.EXTEND,
          ),
        },
      ],
    };
  });

  const animatedFront = useAnimatedStyle(() => {
    return {
      opacity: openAnimation.value >= 1.5 ? 1 : 0,
      transform: [
        {
          scale: interpolate(openAnimation.value, [1, 1.5, 2], [1, 1.2, 1]),
        },
        {perspective: openAnimation.value * 180},
        {rotateY: `${openAnimation.value * 180}deg`},
      ],
    };
  });

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

  const animatedBackShadow = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        openAnimation.value,
        [1, 1.5],
        [0, 0.3],
        Extrapolate.CLAMP,
      ),
    };
  });

  const animatedFrontShadow = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        openAnimation.value,
        [1.5, 2],
        [0.3, 0],
        Extrapolate.CLAMP,
      ),
    };
  });

  const animatedRightTextWrapper = useAnimatedStyle(() => {
    return {
      opacity: interpolate(x.value, [15, 40], [0, 1], Extrapolate.CLAMP),
    };
  });

  const animatedLeftTextWrapper = useAnimatedStyle(() => {
    return {
      opacity: interpolate(x.value, [-15, -40], [0, 1], Extrapolate.CLAMP),
    };
  });

  return (
    <>
      <View style={[{opacity: showCard ? 1 : 0}, styles.cardWrapper]}>
        <Animated.View style={[animatedBack, styles.wrapperBack]}>
          <Animated.View style={[animatedBackShadow, styles.shadow]} />
          <CardReverse />
        </Animated.View>
        <PanGestureHandler onGestureEvent={gestureHandler} enabled={isActive}>
          <Animated.View style={animatedFront}>
            <Animated.View style={[animatedMovableCard, styles.wrapper]}>
              <Animated.View
                style={[animatedRightTextWrapper, styles.topTextWrapper]}>
                <Animated.Text style={styles.topText}>
                  {rightText}
                </Animated.Text>
              </Animated.View>
              <Animated.View
                style={[animatedLeftTextWrapper, styles.topTextWrapper]}>
                <Animated.Text style={styles.topText}>{leftText}</Animated.Text>
              </Animated.View>
              <CardPerson image={image} />
              <Animated.View style={[animatedFrontShadow, styles.shadow]} />
            </Animated.View>
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
    backgroundColor: '#ccc',
    borderRadius: 35,
    overflow: 'hidden',
  },
  wrapperBack: {
    height: 240,
    width: 240,
    backgroundColor: '#aaa',
    borderRadius: 35,
    overflow: 'hidden',
    position: 'absolute',
  },
  cardWrapper: {
    height: 240,
  },
  topTextWrapper: {
    position: 'absolute',
    width: '100%', // because absolute
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 15,
    zIndex: 10,
  },
  topText: {
    color: '#fff',
  },
  shadow: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
  },
});

export default Card;
