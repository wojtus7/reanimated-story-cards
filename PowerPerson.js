import React, {useEffect} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const PowerPerson = ({image, isHappy, isSad}) => {
  const heartAnimation = useSharedValue(0);
  const cloudAnimation = useSharedValue(0);
  const personSize = useSharedValue(1);

  useEffect(() => {
    if (isHappy) {
      heartAnimation.value = withTiming(1);
      personSize.value = withTiming(1.1);
      setTimeout(() => {
        personSize.value = withTiming(1);
        heartAnimation.value = withTiming(0);
      }, 1000);
    }
    if (isSad) {
      cloudAnimation.value = withTiming(1);
      personSize.value = withTiming(0.9);
      setTimeout(() => {
        personSize.value = withTiming(1);
        cloudAnimation.value = withTiming(0);
      }, 1000);
    }
  }, [cloudAnimation, heartAnimation, isSad, isHappy, personSize]);

  const animatedHeart = useAnimatedStyle(() => {
    return {
      opacity: heartAnimation.value,
      transform: [{translateY: 20 - heartAnimation.value * 20}],
    };
  });

  const animatedCloud = useAnimatedStyle(() => {
    return {
      opacity: cloudAnimation.value,
      transform: [{translateY: 20 - cloudAnimation.value * 20}],
    };
  });

  const personScale = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: (personSize.value - 1) * -50},
        {scale: personSize.value},
      ],
    };
  });

  return (
    <>
      <View style={styles.wrapper}>
        <Animated.View style={[animatedHeart, styles.heartWrapper]}>
          <Image
            source={{
              uri: 'https://image.flaticon.com/icons/png/512/3208/3208700.png',
            }}
            style={styles.heartImage}
          />
        </Animated.View>
        <Animated.View style={[animatedCloud, styles.cloudWrapper]}>
          <Image
            source={{
              uri: 'https://image.flaticon.com/icons/png/512/1146/1146860.png',
            }}
            style={styles.cloudImage}
          />
        </Animated.View>
        <Animated.View style={personScale}>
          <Image source={{uri: image}} style={styles.personImage} />
        </Animated.View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  personImage: {
    height: 95,
    width: 95,
  },
  heartImage: {
    height: 55,
    width: 55,
  },
  heartWrapper: {
    position: 'absolute',
    bottom: 105,
  },
  cloudImage: {
    height: 65,
    width: 65,
  },
  cloudWrapper: {
    position: 'absolute',
    bottom: 95,
  },
});

export default PowerPerson;
