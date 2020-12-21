import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import UnderLine from './Underline';
import R from 'res/R';

const FarmerCard = (props) => {
  const {details} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.farmerDetail(details)}>
        <View style={styles.genView}>
          <Text style={styles.keyText}>Name: </Text>
          <Text style={styles.valueText}>
            {`${details.firstName} ${details.secondName} `}
          </Text>
        </View>
        <UnderLine />
        <View style={styles.genView}>
          <Text style={styles.keyText}>Phone: </Text>
          <Text style={styles.valueText}>{details.phoneNumber}</Text>
        </View>
        <UnderLine />
        <View style={styles.genView}>
          <Text style={styles.keyText}>Region: </Text>
          <Text style={styles.valueText}>{details.region}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: R.colors.cream,
    marginHorizontal: 5,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: R.colors.orange,
    elevation: 3,
    paddingVertical: 5,
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
});

export default FarmerCard;
