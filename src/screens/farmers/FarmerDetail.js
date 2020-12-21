import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  Alert,
  Dimensions,
} from 'react-native';
import colors from '../../res/colors';
import R from 'res/R';
import {UnderLine, ButtonIcon, EditPhone} from '../../library/components';
import images from '../../res/images';
const {width, height} = Dimensions.get('window');

class FarmerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editPhone: false,
      modalVisible: false,
      phone: '',
      phoneError: false,
      showActivity: false,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onSavePhoneNumber = () => {
    const {phone} = this.state;
    if (phone === '') {
      this.setState({phoneError: true});
      return Alert.alert('Phone Error', "Phone Entry can't be empty.");
    }
    this.setState({phoneError: false});
    console.log(phone);
  };
  render() {
    const {modalVisible, showActivity, phoneError} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.detailView}>
            <View style={styles.genView}>
              <Text style={styles.keyText}>Name: </Text>
              <Text style={styles.valueText}>Payton latter.</Text>
            </View>
            <UnderLine
              strokeColor={colors.brown}
              viewStyles={{marginHorizontal: 15}}
            />
            <View style={styles.genView}>
              <Text style={styles.keyText}>Phone: </Text>
              <Text style={styles.valueText}>0772123123</Text>
            </View>
            <UnderLine
              strokeColor={colors.brown}
              viewStyles={{marginHorizontal: 15}}
            />
            <View style={styles.genView}>
              <Text style={styles.keyText}>Region: </Text>
              <Text style={styles.valueText}>Kabale</Text>
            </View>
            <UnderLine
              strokeColor={colors.brown}
              viewStyles={{marginHorizontal: 15}}
            />
            <View style={styles.genView}>
              <Text style={styles.keyText}>Gender: </Text>
              <Text style={styles.valueText}>Male</Text>
            </View>
          </View>
          <View style={styles.imgView}>
            <View>
              <Text style={styles.imgText}>National ID</Text>
              <Image source={images.img} style={styles.imgStyles} />
            </View>
            <View>
              <Text style={styles.imgText}>Birth Certificate</Text>
              <Image source={images.img} style={styles.imgStyles} />
            </View>
          </View>
          <View style={{marginHorizontal: 30, marginTop: 20}}>
            <ButtonIcon
              title="Edit Phone Number"
              iconName="circle-edit-outline"
              onPress={() => this.setModalVisible(true)}
            />
          </View>
          {/* ***************** Modal View Starts here  *************** */}
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              console.log('Modal has been closed.');
            }}>
            {modalVisible ? (
              <EditPhone
                phoneText={(t) => this.setState({phone: t})}
                onSavePhone={this.onSavePhoneNumber}
                onClosedModal={() => this.setModalVisible(false)}
                showActivity={showActivity}
                phoneError={phoneError}
              />
            ) : null}
          </Modal>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  detailView: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 5,
    marginVertical: 10,
  },
  genView: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  keyText: {
    flex: 1,
    color: R.colors.brown,
    fontWeight: 'bold',
  },
  valueText: {
    flex: 3,
  },
  imgStyles: {
    height: 150,
    width: width - 55,
    borderRadius: 10,
  },
  imgText: {
    color: colors.brown,
    marginVertical: 5,
  },
  imgView: {
    marginHorizontal: 20,
    borderWidth: 1,
    paddingHorizontal: 5,
    borderColor: colors.brown,
    borderRadius: 10,
    paddingBottom: 10,
  },
});
export default FarmerDetail;
