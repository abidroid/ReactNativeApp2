import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <>
      <NavigationContainer>
        {/* <View style={styles.container}> */}


        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
            name='Login'
            component={LoginScreen}
          />
          <Stack.Screen
            name='Dashboard'
            component={DashboardScreen}
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
