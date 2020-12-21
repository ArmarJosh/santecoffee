import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {ButtonIcon, InputOutline} from '../../library/components';
import colors from '../../res/colors';
import images from '../../res/images';
import {Auth, UserService} from '../../library/networking';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rePassword: '',
      emailError: false,
      passwordError: false,
      showActivity: false,
    };
  }

  onHandelEmailValidation = (inputText) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(inputText)) {
      this.setState({email: inputText, emailError: false});
    } else {
      this.setState({emailError: true});
    }
  };

  onHandelSignup = async () => {
    const {email, password, emailError, rePassword} = this.state;
    if (password.length < 6) {
      this.setState({passwordError: true});
      return Alert.alert(
        'Password Error',
        "Password can't be less than 6 characters",
      );
    } else if (password !== rePassword) {
      this.setState({passwordError: true});
      return Alert.alert('Password Error', "Passwords don't Match");
    } else if (email === '' || emailError === true) {
      return Alert.alert('Email Error', 'Check email.');
    } else {
      this.setState({
        emailError: false,
        passwordError: false,
        showActivity: true,
      });

      // Start sign Up logic
      console.log('call login function.');
      const auth = new Auth();
      await auth
        .onHandelSignUpWithEmailPassword(email, password)
        .then(async (res) => {
          console.log('res: ', res.user);

          // Check auth state change and create user DB
          await auth
            .onAuthStateChange()
            .then(async (user) => {
              console.log('user: ', user.uid);
              let uid = user.uid;
              let email = user.email;
              if (user) {
                const userdb = new UserService();
                await userdb
                  .onCreateUserDB(uid, email)
                  .then(async () => {
                    await this.setState({showActivity: false, uid});
                    this.props.navigation.navigate('Register');
                  })
                  .catch((e) => {
                    console.log('user_error: ', e);
                    alert('Error Saving');
                    this.setState({showActivity: false});
                  });
              }
            })
            .catch((e) => {
              console.log(e);
              this.setState({showActivity: false});
            });
        })
        .catch((e) => {
          console.log(e);
          this.setState({showActivity: false});
          alert('Error Creating account.');
        });
    }
  };

  render() {
    const {showActivity, emailError, passwordError} = this.state;
    return (
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
              <Image source={images.icon} style={styles.imageView} />
            </View>

            <View style={styles.bottomView}>
              {showActivity ? (
                <ActivityIndicator size="large" color={colors.orange} />
              ) : null}
              <InputOutline
                error={emailError}
                placeholder="E-mail"
                autoCompleteType="email"
                keyboardType="email-address"
                onChangeText={(t) => this.onHandelEmailValidation(t)}
              />
              <InputOutline
                error={passwordError}
                placeholder="Password"
                onChangeText={(t) => this.setState({password: t})}
                secureTextEntry={true}
              />
              <InputOutline
                error={passwordError}
                placeholder="Re-password"
                onChangeText={(t) => this.setState({rePassword: t})}
                secureTextEntry={true}
              />
              <View style={{marginTop: 10}}>
                <ButtonIcon
                  title="Sign Up"
                  iconName="login-variant"
                  onPress={this.onHandelSignup}
                />
              </View>
              <View style={styles.signupView}>
                <Text style={styles.dontText}>I have an account </Text>
                <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                  <Text style={styles.signupText}>Login </Text>
                </TouchableOpacity>
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
  imageView: {
    resizeMode: 'contain',
    height: 140,
    width: 140,
    borderRadius: 200,
  },
  bottomView: {
    marginHorizontal: 40,
  },
  signupView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  dontText: {
    fontWeight: '300',
    color: colors.darkBrown,
    fontSize: 16,
  },
  signupText: {
    color: colors.orange,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SignUp;
