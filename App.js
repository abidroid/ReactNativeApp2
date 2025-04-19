import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import CountriesFlagScreen from './screens/CountiesFlagScreen';
import FlexBoxScreen from './screens/FlexBoxScreen';
import LittleLemonMenuScreen from './screens/LittleLemonMenuScreen';
import DmcScreen from './screens/DmcScreen';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <>
      <NavigationContainer>
        {/* <View style={styles.container}> */}


        <Stack.Navigator initialRouteName='Dashboard'>
          <Stack.Screen
            name='Login'
            component={LoginScreen}
          />
          <Stack.Screen
            name='Dashboard'
            component={DashboardScreen}
          />
          <Stack.Screen
            name='Dmc'
            component={DmcScreen}
          />

          <Stack.Screen
            name='CountriesFlag'
            component={CountriesFlagScreen}
          />
          <Stack.Screen
            name='FlexBox'
            component={FlexBoxScreen}
          />
          <Stack.Screen
            name='LittleLemonMenu'
            component={LittleLemonMenuScreen}
          />


        </Stack.Navigator>
        {/* </View> */}
      </NavigationContainer>

    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
