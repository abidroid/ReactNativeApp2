import React, { useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, ActivityIndicator } from 'react-native';

const RandomQuoteApiScreen = () => {

    const [isLoading, setLoading] = React.useState(true);
    const [quote, setQuote] = React.useState({});

    const getRandomQuote = async () => {

        setLoading(true);

        const url = 'https://dummyjson.com/quotes/random';

        try {
            const response = await fetch(url);
            const json = await response.json();
            setQuote(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { getRandomQuote() }, []);

    // UI
    return (
        <View style={styles.container}>

            <Text style={styles.quoteText}>{quote.quote}</Text>
            <Text style={styles.authorText}>{quote.author}</Text>

            {isLoading ? <ActivityIndicator /> : <View/>}
            <Pressable style={styles.buttonStyle}
                onPress={() => getRandomQuote()}
            >
                <Text style={styles.buttonText}>Get Random Quote</Text>
            </Pressable>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 16,
        padding: 16,
    },

    quoteText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    authorText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    buttonStyle: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 16,
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    }
});

export default RandomQuoteApiScreen;