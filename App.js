import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, useIsDrawerOpen} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import SearchCountry from './src/screens/SearchCountry';
import CountryDetails from './src/screens/CountryDetails';
import GlobalSummary from './src/screens/Summary';
import ContinentTab from './src/tabs/ContinentTab';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Iconn from 'react-native-vector-icons/FontAwesome';
import Conio from 'react-native-vector-icons/MaterialCommunityIcons';

import AppState from './src/appContext/appState';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const menu = (onPress, isOpen) => (
  <Conio
    name={isOpen ? 'menu-open' : 'menu'}
    style={{margin: 15}}
    size={25}
    color="dimgray"
    onPress={onPress}
  />
);

const tab = (props, continent, openDrawer, isOpen) => {
  const name =
    continent === 'north' || continent === 'south'
      ? continent.toString().charAt(0).toUpperCase() +
        continent.toString().slice(1) +
        ' America'
      : continent.toString().charAt(0).toUpperCase() +
        continent.toString().slice(1);

  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name={name}
        options={{headerLeft: () => menu(openDrawer, isOpen)}}>
        {() => <ContinentTab {...props} continent={continent} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const Continents = ({navigation: {openDrawer}}) => {
  const isOpen = useIsDrawerOpen();
  return (
    <Tab.Navigator
      initialRouteName="Asia"
      activeColor="white"
      inactiveColor="lightgray"
      shifting={false}
      barStyle={styles.bar}
      backBehavior="initialRoute">
      <Tab.Screen
        name="Asia"
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="globe-asia" color={color} size={23} />
          ),
        }}>
        {(props) => tab(props, 'asia', openDrawer, isOpen)}
      </Tab.Screen>
      <Tab.Screen
        name="Europe"
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="globe-europe" color={color} size={23} />
          ),
        }}>
        {(props) => tab(props, 'europe', openDrawer, isOpen)}
      </Tab.Screen>
      <Tab.Screen
        name="North"
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="globe-americas" color={color} size={23} />
          ),
        }}>
        {(props) => tab(props, 'north', openDrawer, isOpen)}
      </Tab.Screen>
      <Tab.Screen
        name="South"
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="globe-americas" color={color} size={23} />
          ),
        }}>
        {(props) => tab(props, 'south', openDrawer, isOpen)}
      </Tab.Screen>
      <Tab.Screen
        name="Australia"
        options={{
          tabBarIcon: ({color}) => (
            <Iconn name="globe" color={color} size={27} />
          ),
        }}>
        {(props) => tab(props, 'australia', openDrawer, isOpen)}
      </Tab.Screen>
      <Tab.Screen
        name="Africa"
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="globe-africa" color={color} size={23} />
          ),
        }}>
        {(props) => tab(props, 'africa', openDrawer, isOpen)}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const Home = ({navigation: {openDrawer}}) => {
  const isOpen = useIsDrawerOpen();
  return (
    <Stack.Navigator
      screenOptions={{headerTitleAlign: 'center'}}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={SearchCountry}
        options={{headerLeft: () => menu(openDrawer, isOpen)}}
      />
      <Stack.Screen
        name="Details"
        component={CountryDetails}
        options={({
          route: {
            params: {country},
          },
        }) => ({title: country})}
      />
    </Stack.Navigator>
  );
};

const Summary = ({navigation: {openDrawer}}) => {
  const isOpen = useIsDrawerOpen();
  return (
    <Stack.Navigator
      screenOptions={{headerTitleAlign: 'center'}}
      initialRouteName="Summary">
      <Stack.Screen
        name="Summary"
        component={GlobalSummary}
        options={{headerLeft: () => menu(openDrawer, isOpen)}}
      />
    </Stack.Navigator>
  );
};
const App = () => {
  const dimensions = useWindowDimensions();
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <AppState>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Drawer.Navigator
              drawerStyle={styles.drawer}
              drawerType="slide"
              edgeWidth={dimensions.width}>
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen name="Summary" component={Summary} />
              <Drawer.Screen name="Continents" component={Continents} />
            </Drawer.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </AppState>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
  },
  drawer: {
    width: '70%',
  },
  bar: {
    backgroundColor: 'dimgray',
    padding: 3,
  },
  icon: {
    fontSize: 30,
  },
});
export default App;
