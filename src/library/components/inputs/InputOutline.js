import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import colors from 'res/colors';

const InputOutline = (props) => {
  return (
    <View
      style={[
        styles.inputView,
        {borderColor: props.error ? colors.red : colors.orange},
      ]}>
      <TextInput
        placeholder={props.placeholder}
        style={[styles.inputStyles, props.inputStyles]}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        placeholderTextColor={
          props.placeholderTextColor
            ? props.placeholderTextColor
            : colors.darkGray
        }
        textContentType={props.textContentType}
        autoCorrect={props.autoCorrect}
        keyboardType={props.keyboardType}
        autoCompleteType={props.autoCompleteType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  inputStyles: {
    paddingLeft: 25,
    color: colors.darkBrown,
    fontSize: 16,
    fontWeight: 'normal',
    height: 40,
    justifyContent: 'center',
  },
});

export default InputOutline;
