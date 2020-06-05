import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Surface, Text} from 'react-native-paper';

const SummaryDetailCard = ({
  date,
  summary: {
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  },
}) => {
  return (
    <Surface style={styles.surface}>
      <Text style={styles.header}>Global Summary</Text>
      <View style={styles.view}>
        <Text style={styles.text}>Date:</Text>
        <Text style={[styles.text, {color: 'indigo'}]}>
          {date.split('T')[0].split('-').reverse().join('-')}
        </Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>New Confirmed:</Text>
        <Text style={[styles.text, {color: 'grey'}]}>{NewConfirmed}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Total Confirmed:</Text>
        <Text style={[styles.text, {color: 'grey'}]}>{TotalConfirmed}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>New Deaths:</Text>
        <Text style={[styles.text, {color: 'red'}]}>{NewDeaths}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Total Deaths:</Text>
        <Text style={[styles.text, {color: 'red'}]}>{TotalDeaths}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>New Recovered:</Text>
        <Text style={[styles.text, {color: 'green'}]}>{NewRecovered}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Total Recovered:</Text>
        <Text style={[styles.text, {color: 'green'}]}>{TotalRecovered}</Text>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: 28,
    height: '42%',
    width: '80%',
    elevation: 8,
    alignSelf: 'center',
    margin: 150,
    borderRadius: 28,
  },
  text: {
    fontSize: 17,
  },
  view: {
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {alignSelf: 'center', fontSize: 25, marginBottom: 40},
});

export default SummaryDetailCard;
