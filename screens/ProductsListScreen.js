
import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet } from 'react-native';

const ProductsListScreen = () => {

    const [isLoading, setLoading] = React.useState(true);
    const [products, setProducts] = React.useState([]);

    const getProducts = async () => {
        const url = 'https://fakestoreapi.com/products';

        try {

            const response = await fetch(url);
            const json = await response.json();

            setProducts(json);
        } catch (error) {
            console.error('Something went wrong');
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => { getProducts(); }, []);

    const Item = ({ item }) => {
        return (
            <View style={styles.productRow}>

                <Image
                    style={styles.productImage}
                    source={{ uri: item.image }}

                />

                <View style={styles.productColumn} >
                    <Text
                        style={styles.productTitle}
                        numberOfLines={1}

                    >{item.title}</Text>
                    <Text
                        style={styles.description}
                        numberOfLines={3}

                    >{item.title}</Text>
                </View>

            </View>
        );
    }

    const renderItem = ({ item }) => <Item item={item} />
    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> :

                <FlatList
                    data={products}
                    keyExtractor={(prod) => prod.id}
                    renderItem={renderItem}

                />
            }


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flext: 1,
    },
    productRow: {

        flexDirection: 'row',
        gap: 12,
        backgroundColor: '#cccccc',
        marginBottom: 8,
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 16,
    },

    productColumn: {

        gap: 12,
        backgroundColor: 'white',
        height: '100%',
        flex: 1,

    },

    productImage: {
        width: 120,
        height: 120,
        borderRadius: 16,
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        flexShrink: 1,
    


    },
    productPrice: {

    },
    productDescription: {},
});

export default ProductsListScreen;