import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import R from 'res/R';

const ButtonIcon = (props) => {
  return (
    <View styles={styles.container}>
      <TouchableOpacity style={styles.btnView} onPress={props.onPress}>
        <Icon name={props.iconName} color={R.colors.white} size={25} />
        <Text style={styles.btnText}>{props.title.toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //paddingHorizontal: 5,
  },
  btnView: {
    flexDirection: 'row',
    backgroundColor: R.colors.orange,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  btnText: {
    color: R.colors.white,
    fontSize: 16,
    fontWeight: '300',
    marginLeft: 10,
  },
});
export default ButtonIcon;
