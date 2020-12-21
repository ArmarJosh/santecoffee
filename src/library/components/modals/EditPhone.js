import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import colors from '../../../res/colors';
import InputOutline from '../inputs/InputOutline';
import ButtonIcon from '../buttons/ButtonIcon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EditPhone = (props) => {
  const {showActivity, phoneError} = props;
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.crossView}
          onPress={props.onClosedModal}>
          <Icon name="close-circle" size={50} color={colors.orange} />
        </TouchableOpacity>
        <InputOutline onChangeText={props.phoneText} error={phoneError} />
        <ButtonIcon
          title="Save"
          iconName="content-save"
          onPress={props.onSavePhone}
        />
        {showActivity ? (
          <ActivityIndicator color={colors.orange} size="large" />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  crossView: {
    alignItems: 'center',
    marginVertical: 80,
  },
  main: {
    marginHorizontal: 30,
  },
});

export default EditPhone;
