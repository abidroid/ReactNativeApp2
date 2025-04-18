import { View, Text, TextInput, ScrollView, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';

const LoginScreen = ({ navigation }) => {

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <View style={loginStyles.loginView}>

            <ScrollView style={loginStyles.loginScrollView}>

                <Text style={loginStyles.txtStyle}>IntelliLogics</Text>

                <Image
                    style={loginStyles.logo}
                    source={require('../assets/icon.png')}

                />
                <Text>Login to continue</Text>

                <TextInput
                    style={loginStyles.textInputStyle}
                    placeholder='email'
                    onChangeText={onChangeEmail}
                    value={email}
                    keyboardType='text-email'
                />
                <TextInput
                    style={loginStyles.textInputStyle}
                    placeholder='password'
                    onChangeText={onChangePassword}
                    value={password}
                    secureTextEntry={true}
                />
                <Pressable
                    style={loginStyles.buttonStyle}
                    onPress={() => navigation.navigate('Dashboard')}>
                    <Text style={loginStyles.buttonText}>LOGIN</Text>
                </Pressable>
            </ScrollView>
        </View>);
};

export default LoginScreen;

const loginStyles = StyleSheet.create({

    loginView: {
        flex: 1,
    },

    loginScrollView: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 24,

    },
    txtStyle: {
        fontSize: 40,
        textAlign: 'center'
    },

    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },

    buttonStyle: {
        backgroundColor: '#00DD00',
        paddingHorizontal: 40,
        paddingVertical: 10,
        alignSelf: 'center',
        borderRadius: 20,
    },

    buttonText: {
        fontSize: 20,
        color: 'white',
    },

    textInputStyle: {
        padding: 12,
        marginVertical: 16,
        borderRadius: 20,
        borderColor: '#333333',
        borderWidth: 1,
    }
});