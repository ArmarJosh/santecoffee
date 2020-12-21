import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import colors from '../../res/colors';
import images from '../../res/images';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        source={images.logo}
        style={{height: 150, height: 150, resizeMode: 'contain'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
