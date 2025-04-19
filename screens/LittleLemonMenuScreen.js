import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';



const LittleLemonMenuScreen = () => {
    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);


    const getMenu = async () => {

        console.log('executed');
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


    const Item = ({ data }) => {
        return (
            <View style={menuStyles.menuRow}>
                <Text style={menuStyles.menuItemText}>{data.title}</Text>
                <Text style={menuStyles.menuItemText}>${data.price}</Text>
            </View>
        );
    };

    const renderItem = ({ item }) => <Item data={item} />

    return <View style={menuStyles.container}>

        {isLoading ? <ActivityIndicator /> :

            <FlatList
                data={data}
                renderItem={renderItem}
            />
        }

    </View>
}

const menuStyles = StyleSheet.create({
    container: {flex: 1},
    menuRow: { 
        backgroundColor: '#cccccc',
        margin: 4,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
    },
    menuItemText: {
        fontSize: 16,
    }
});


export default LittleLemonMenuScreen;