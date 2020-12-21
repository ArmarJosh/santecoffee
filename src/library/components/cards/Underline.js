import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from 'res/colors';

const UnderLine = (props) => {
  return (
    <View
      style={[
        styles.view,
        props.viewStyles,
        {backgroundColor: props.strokeColor ? props.strokeColor : colors.white},
        props.styles,
        {marginVertical: props.verticleSpace ? props.verticleSpace : 5},
      ]}
    />
  );
};

const styles = StyleSheet.create({
  view: {
    height: 1,
    alignItems: 'stretch',
  },
});
export default UnderLine;
