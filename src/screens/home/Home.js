import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import colors from '../../res/colors';
import images from '../../res/images';
import {ButtonBigger} from '../../library/components/';

const {width, height} = Dimensions.get('window');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainView}>
          <View>
            <Image style={styles.imgStyle} source={images.coffee} />
          </View>
          <View style={styles.btnView}>
            <ButtonBigger
              title="Register new farmer"
              iconName="account-plus"
              onPress={() => this.props.navigation.push('AddFarmer')}
            />
            <ButtonBigger
              title="Get all farmers by region"
              iconName="map-marker"
              onPress={() => console.log('get farmers')}
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
