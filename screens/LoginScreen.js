import {View, Text, TextInput, ScrollView , StyleSheet} from 'react-native';


const LoginScreen = ({navigation}) => {

    return (
    <>
    <Text style={loginStyles.txtStyle}>Login Screen</Text>
    <Text>Learning Navigation</Text>
    </>);
};

export default LoginScreen;

const loginStyles = StyleSheet.create({

    txtStyle: {
        fontSize: 40,
    }
});