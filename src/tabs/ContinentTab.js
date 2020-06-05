import React, {useContext, useMemo} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import CountryBriefCard from '../components/CountryBriefCard';
import AppContext from '../appContext/appContext';
import {ActivityIndicator} from 'react-native-paper';
import ErrorMsg from '../components/Error&Try';

const ContinentTab = ({continent}) => {
  const appContext = useContext(AppContext);
  const {getContinent, continents, error} = appContext;
  const keyExtractor = (item, index) => index.toString();

  const onClick = async () => {
    await getContinent(continent);
  };

  useMemo(async () => {
    await getContinent(continent);
  }, []);

  const renderItem = ({item}) => <CountryBriefCard data={item} />;

  if (error) {
    return <ErrorMsg onPress={onClick} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={
          <View style={styles.indicator}>
            <ActivityIndicator size="large" color="dimgray" />
          </View>
        }
        showsVerticalScrollIndicator={false}
        data={continents === null ? null : continents[continent]}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        extraData={continents}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    // paddingLeft: 20,
  },
  indicator: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100%',
  },
  cardView: {
    marginTop: 60,
  },
  divider: {margin: 30},
});

export default ContinentTab;
