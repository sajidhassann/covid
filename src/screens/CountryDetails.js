import React, {useContext, useMemo} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import DayDetailCard from '../components/DayDetailCard';
import AppContext from '../appContext/appContext';
import {ActivityIndicator} from 'react-native-paper';

const CountryDetails = ({navigation: {setOptions}}) => {
  const appContext = useContext(AppContext);
  const {getDetail, detail, current, clearCurrent} = appContext;
  useMemo(() => {
    getDetail(current.Slug);
    clearCurrent();
  }, []);
  if (detail === null) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color="dimgray" />
      </View>
    );
  }
  const len = detail.length;
  if (len === 0) {
    return (
      <View style={styles.nodata}>
        <Text style={{fontSize: 30}}>No Data Available</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <DayDetailCard title={'Day One'} data={detail[0]} margin={60} />
      <View style={styles.divider}></View>
      <DayDetailCard title={'Last Day Reported'} data={detail[1]} margin={0} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  indicator: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardView: {
    marginTop: 60,
  },
  divider: {margin: 30},
  nodata: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default CountryDetails;
