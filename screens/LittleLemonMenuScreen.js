import { View, Text, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';



const LittleLemonMenuScreen = () => {
    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);


    const getMenu = async () => {

        const url = 'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json';

        try {
            const response = await fetch(url);

            const json = await response.json();

            setData(json.menu);
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => { getMenu() });

    return <View>

        {isLoading ? <ActivityIndicator /> : <Text>{JSON.stringify(data)}</Text>}

    </View>
}

export default LittleLemonMenuScreen;