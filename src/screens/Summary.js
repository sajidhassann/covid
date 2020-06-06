import React, {useContext, useMemo} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import AppContext from '../appContext/appContext';
import {ActivityIndicator} from 'react-native-paper';
import SummaryDetailCard from '../components/SummaryDetailCard';
import ErrorMsg from '../components/Error&Try';
// import {ScrollView} from 'react-native-gesture-handler';

const Summary = () => {
  const appContext = useContext(AppContext);
  const {getSummary, summary, error, setError} = appContext;

  const keyExtractor = (_, index) => index.toString();

  const renderItem = ({item}) => <SummaryDetailCard summary={item} />;

  const onClick = () => {
    setError(false);
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
      <FlatList
        data={summary}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListFooterComponent={<View style={styles.divider}></View>}
      />
    </View>
  );
  // return (
  //   <View style={styles.container}>
  //     <ScrollView
  //       showsVerticalScrollIndicator={false}
  //       style={{flex: 1}}
  //       contentContainerStyle={{
  //         backgroundColor: 'transparent',
  //       }}>
  //       <SummaryDetailCard date={summary.Date} summary={summary.Global} />
  //     </ScrollView>
  //   </View>
  // );
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
  divider: {marginBottom: 40},
});

export default Summary;
