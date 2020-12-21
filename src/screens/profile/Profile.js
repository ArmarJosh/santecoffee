import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ButtonIcon, UnderLine} from '../../library/components';
import colors from '../../res/colors';
import images from '../../res/images';
import {AuthContext} from '../../context/app-context';
import {Auth, UserService} from '../../library/networking';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      avatar: '',
      showActivity: '',
    };
  }

  async componentDidMount() {
    const auth = new Auth();
    await auth.onHandelGetUser().then(async (user) => {
      console.log(user);
      await this.setState({
        userID: user.uid,
      });
      this.getUserDatabase(user.uid);
    });
  }

  getUserDatabase = async (uid) => {
    this.setState({showActivity: true});
    const db = new UserService();
    await db
      .onGetDocumentData('users', uid)
      .then((result) => {
        console.log(result.data());
        this.setState({
          name: `${result.data().firstname} ${result.data().secondname}`,
          phone: result.data().phone,
          avatar: result.data().avatarURL,
          showActivity: false,
        });
      })
      .catch((e) => {
        console.log(e);
        his.setState({showActivity: false});
      });
  };

  onHandleLogOut = async () => {
    console.log('logging out..');
    const auth = new Auth();
    await auth
      .onLogOut()
      .then(() => {
        this.context.signOut();
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Error', 'Error occurred while logging out, try again');
      });
  };

  render() {
    const {name, phone, showActivity} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.mainView}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => alert('upload profile image.')}>
            <View>
              <Image
                source={images.avatar}
                style={{
                  height: 150,
                  width: 150,
                  resizeMode: 'contain',
                  borderRadius: 200,
                }}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.nameView}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.textName}>MANAGER</Text>
              <UnderLine viewStyles={{width: 250}} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Icon name="md-person-circle" size={30} color={colors.cream} />
              <Text style={styles.textName}>{name}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Icon name="md-phone-portrait" size={30} color={colors.cream} />
              <Text style={styles.textName}>{phone}</Text>
            </View>
          </View>
          <View>
            {showActivity ? (
              <ActivityIndicator size="large" color={colors.orange} />
            ) : null}
          </View>
          <View style={{marginHorizontal: 30}}>
            <ButtonIcon title="Logout" onPress={this.onHandleLogOut} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  mainView: {
    flex: 1,
    justifyContent: 'space-around',
  },
  nameView: {
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  textName: {
    color: colors.cream,
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 10,
  },
});

Profile.contextType = AuthContext;
export default Profile;
