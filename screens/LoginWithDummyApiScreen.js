import {View, Text, TextInput, StyleSheet, ScrollView, Image} from 'react-native';

const LoginWithDummyApiScreen = () => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                source={require('../img/intellilogics.jpg')}/>
                <Text>Please login to continue</Text>

            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        
    },

    input: {
        padding: 8,
        margin: 8,
        borderRadius: 12,
        borderColor: 'black',
        borderWidth: 1,
    }, 

    buttonContainer: {},
    buttonText: {},
});
export default LoginWithDummyApiScreen;