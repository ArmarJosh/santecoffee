import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import R from 'res/R';

const ButtonBigger = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.btnView} onPress={props.onPress}>
        <View style={styles.iconView}>
          <Icon name={props.iconName} color={R.colors.white} size={40} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.btnText}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  btnView: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: R.colors.orange,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',
    backgroundColor: R.colors.white,
  },
  btnText: {
    color: R.colors.brown,
    fontSize: 16,
    fontWeight: '300',
    marginLeft: 10,
  },
  textView: {
    backgroundColor: R.colors.white,
  },
  iconView: {
    backgroundColor: R.colors.orange,
    height: 70,
    width: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ButtonBigger;
