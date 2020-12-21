import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ButtonIcon} from '../../library/components';
import colors from '../../res/colors';
import images from '../../res/images';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainView}>
          <TouchableOpacity style={{alignItems: 'center'}}>
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
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Icon name="md-person-circle" size={30} color={colors.cream} />
              <Text style={styles.textName}>Corry Armar</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Icon name="md-phone-portrait" size={30} color={colors.cream} />
              <Text style={styles.textName}>0772123123</Text>
            </View>
          </View>
          <View style={{marginHorizontal: 30}}>
            <ButtonIcon title="Logout" />
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
    height: 100,
  },
  textName: {
    color: colors.cream,
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 10,
  },
});
export default Profile;
