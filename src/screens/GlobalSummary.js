import React, {useContext, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import SummaryDetailCard from '../components/SummaryDetailCard';
import AppContext from '../appContext/appContext';
import {ActivityIndicator} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import ErrorMsg from '../components/Error&Try';

const GlobalSummary = () => {
  const appContext = useContext(AppContext);
  const {getSummary, summary, error} = appContext;

  const onClick = () => {
    getSummary();
  };

  useMemo(() => {
    getSummary();
  }, []);

  if (error) {
    return <ErrorMsg onPress={onClick} />;
  }

  if (summary === null) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color="dimgray" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={{
          backgroundColor: 'transparent',
        }}>
        <SummaryDetailCard date={summary.Date} summary={summary.Global} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  indicator: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GlobalSummary;
