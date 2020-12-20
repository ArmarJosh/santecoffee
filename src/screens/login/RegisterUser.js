import React, {Component} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ActivityIndicator,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../../res/colors';
import {ButtonIcon, InputOutline} from '../../library/components';

class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      secondName: '',
      phoneNumber: '',
      region: '',
      gender: '',

      firstNameError: false,
      secondNameError: false,
      phoneNumberError: false,
      regionError: false,
      genderError: false,

      showActivity: false,
    };
  }

  onHandelSave = () => {
    const {firstName, secondName, phoneNumber, region, gender} = this.state;
    if (firstName === '') {
      return alert("First name can't be empty");
    } else if (secondName === '') {
      this.setState({secondNameError: true});
      return alert("Second name can't be empty");
    } else if (phoneNumber === '') {
      this.setState({phoneNumberError: true});
      return alert("Phone number can't be empty");
    } else if (region === '') {
      this.setState({regionError: true});
      return alert("Region can't be empty");
    } else if (gender === '') {
      this.setState({genderError: true});
      return alert("Region can't be empty");
    } else {
      this.setState({
        genderError: false,
        regionError: false,
        phoneNumberError: false,
        secondNameError: false,
        firstNameError: false,
      });

      console.log('register');
      // put the registration code here.
    }
  };
  render() {
    const {
      showActivity,
      firstNameError,
      secondNameError,
      phoneNumberError,
      genderError,
      regionError,
    } = this.state;
    return (
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.bottomView}>
              <InputOutline
                error={firstNameError}
                placeholder="First Name"
                autoCompleteType="name"
                onChangeText={(t) => this.setState({firstName: t})}
              />
              <InputOutline
                error={secondNameError}
                placeholder="Second Name"
                autoCompleteType="name"
                onChangeText={(t) => this.setState({secondName: t})}
              />

              <InputOutline
                error={phoneNumberError}
                placeholder="Phone number"
                autoCompleteType="tel"
                onChangeText={(t) => this.setState({phoneNumber: t})}
              />

              <InputOutline
                error={regionError}
                placeholder="Region"
                onChangeText={(t) => this.setState({region: t})}
              />
              <View style={styles.picker}>
                <RNPickerSelect
                  placeholder={{
                    label: 'Gender',
                    value: null,
                    color: colors.orange,
                  }}
                  onValueChange={(value) => this.setState({gender: value})}
                  items={[
                    {
                      label: 'Male',
                      value: 'Male',
                      color: colors.orange,
                      key: 'Male',
                    },
                    {label: 'Female', value: 'Female', color: colors.orange},
                  ]}
                  style={{
                    color: colors.orange,
                    placeholder: {
                      color: colors.orange,
                    },
                  }}
                />
              </View>
            </View>
            <View style={styles.bottomView}>
              <View style={{marginTop: 10}}>
                {showActivity ? (
                  <ActivityIndicator size="large" color={colors.orange} />
                ) : null}
                <ButtonIcon
                  title="Save"
                  iconName="content-save"
                  onPress={this.onHandelSave}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
    justifyContent: 'space-around',
  },

  bottomView: {
    marginHorizontal: 40,
  },
  picker: {
    borderWidth: 1,
    borderColor: colors.orange,
    paddingLeft: 15,
    borderRadius: 20,
    height: 45,
    marginVertical: 5,
    marginHorizontal: 5,
  },
});

export default RegisterUser;
