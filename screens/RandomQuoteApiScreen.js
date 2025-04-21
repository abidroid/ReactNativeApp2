import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

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
        }finally {
            setLoading(false);
        }
    };

    

}

export default RandomQuoteApiScreen;