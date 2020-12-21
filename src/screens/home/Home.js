import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import colors from '../../res/colors';
import images from '../../res/images';
import {ButtonBigger} from '../../library/components/';
import {Auth, UserService} from '../../library/networking';

const {width, height} = Dimensions.get('window');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: '',
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
    const db = new UserService();
    await db
      .onGetDocumentData('users', uid)
      .then((result) => {
        if (result.data().firstname === '') {
          console.log('first name missing.');
          this.props.navigation.push('UserInfo');
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainView}>
          <View>
            <Image style={styles.imgStyle} source={images.coffee} />
          </View>
          <View style={styles.btnView}>
            <ButtonBigger
              title="Register a new farmer"
              iconName="account-plus"
              onPress={() => this.props.navigation.push('AddFarmer')}
            />
            <ButtonBigger
              title="Get all farmers by region"
              iconName="map-marker"
              onPress={() =>
                alert(
                  'Would open a region modal, then navigate to show farmers from the selected region. Dint have enough time to implemet this feature.',
                )
              }
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  imgStyle: {
    height: 120,
    width: width,
    resizeMode: 'cover',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  btnView: {
    marginTop: width / 2,
    marginHorizontal: 20,
  },
});

export default Home;
