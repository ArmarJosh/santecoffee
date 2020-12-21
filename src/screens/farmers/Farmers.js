import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import colors from '../../res/colors';
import {FarmerCard, InputOutline} from '../../library/components';

class Farmers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onHandleSearch = (search) => {
    console.log(search);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchView}>
          <InputOutline onChangeText={(t) => this.onHandleSearch(t)} />
        </View>
        <ScrollView>
          <View style={styles.main}>
            <FarmerCard
              onPress={() => this.props.navigation.push('FarmerDetail')}
            />
            <FarmerCard />
            <FarmerCard />
            <FarmerCard />
            <FarmerCard />
            <FarmerCard />
            <FarmerCard />
            <FarmerCard />
            <FarmerCard />
            <FarmerCard />
            <FarmerCard />

            <FarmerCard />
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
