import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import colors from '../../res/colors';
import {FarmerCard, InputOutline} from '../../library/components';
import {UserService} from '../../library/networking';

class Farmers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      farmers: [],
      showActivity: false,
      refreshing: false,
    };
  }
  componentDidMount() {
    this.onGetFarmers();
  }

  onGetFarmers = async () => {
    await this.setState({farmers: [], showActivity: true});
    const {farmers} = this.state;
    let farmersArr = farmers.slice();
    this.setState({showActivity: true});
    const db = new UserService();
    await db
      .onGetCollectionData('farmers')
      .then(async (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
          farmersArr.push(doc.data());
        });
        await this.setState({
          farmers: farmersArr,
          showActivity: false,
          refreshing: false,
        });
      })
      .catch((error) => {
        console.log('error getting document ' + error);
        this.setState({showActivity: false, refreshing: false});
        Alert.alert(
          'Connection Error',
          'Check internet Connection and pull to refresh.',
        );
      });
  };

  onHandleSearch = (search) => {
    console.log(search);
  };

  onRefreshing = async () => {
    await this.setState({refreshing: true});
    this.onGetFarmers();
  };

  render() {
    const {showActivity, farmers, refreshing} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.searchView}>
          <InputOutline onChangeText={(t) => this.onHandleSearch(t)} />
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.onRefreshing}
            />
          }>
          <View style={styles.main}>
            <View>
              {showActivity ? (
                <ActivityIndicator size="large" color={colors.orange} />
              ) : null}
            </View>
            {farmers.map((farmer) => (
              <FarmerCard
                key={farmer.userCode}
                details={farmer}
                farmerDetail={(d) =>
                  this.props.navigation.navigate('FarmerDetail', {d})
                }
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  main: {
    marginHorizontal: 10,
  },
  searchView: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconView: {
    height: 40,
    width: 60,
    backgroundColor: colors.cream,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Farmers;
