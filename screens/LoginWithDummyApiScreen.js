import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, Pressable } from 'react-native';

const LoginWithDummyApiScreen = () => {

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [result, setResult] = React.useState('');
    const [isLogginIn, setLogginIn] = React.useState(false);

    const login = async () => {

        setLogginIn(true);

        const url = 'https://dummyjson.com/auth/login';

        try{
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
    
                    username: email,
                    password: password,
                    expiresInMins: 30, // optional, defaults to 60
                }),
                credentials: 'include' // Include cookies (e.g., accessToken) in the request
            });
    
            const json = await response.json();
            setResult(json);
        }catch(error){
            setResult(error);
        }finally {
            setLogginIn(false);
        }
    };


    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    style={styles.logo}
                    source={require('../img/intellilogics.jpg')} />
                <Text style={styles.message}>Please login to continue</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    onChangeText={onChangeEmail}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    onChangeText={onChangePassword}
                    value={password}
                />

                <Pressable style={styles.buttonContainer}
                    onPress={() => login()}
                >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </Pressable>
                <Text>{result}</Text>
            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        // alignItems: 'center',

    },

    logo: {
        alignSelf: 'center',
        borderRadius: '50%',
    },
    message: {
        textAlign: 'center',
        marginVertical: 20,
    },
    input: {
        padding: 8,
        marginVertical: 8,
        borderRadius: 12,
        borderColor: 'black',
        borderWidth: 1,
    },

    buttonContainer: {
        backgroundColor: 'green',
        padding: 12,
        borderRadius: 12,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'

    },
});
export default LoginWithDummyApiScreen;