import React, {useContext, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import SummaryDetailCard from '../components/SummaryDetailCard';
import AppContext from '../appContext/appContext';
import {ActivityIndicator} from 'react-native-paper';

const GlobalSummary = () => {
  const appContext = useContext(AppContext);
  const {getSummary, summary} = appContext;

  useMemo(() => {
    getSummary();
  }, []);
  if (summary === null) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color="dimgray" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <SummaryDetailCard date={summary.Date} summary={summary.Global} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  indicator: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GlobalSummary;
