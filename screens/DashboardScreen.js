import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";


// Create an array of topics and then navigate to the respective screens for practice
// Use FlatList


const screens = [
    { id: 1, title: 'DMC', routeName: 'Dmc' },
    { id: 2, title: 'FlexBox', routeName: 'FlexBox' },
    { id: 3, title: 'Products List - Fake Store API', routeName: 'ProductsList' },
    { id: 4, title: 'Little Lemon Menu API', routeName: 'LittleLemonMenu' },
    { id: 5, title: 'T20 Teams Local JSON', routeName: 'T20' },
    { id: 6, title: 'Random Quote API - Dummy JSON', routeName: 'RandomQuote' },
    { id: 7, title: 'Login With DummyApi Screen', routeName: 'LoginWithDummyApi' },
    { id: 8, title: 'Images Demo Screen', routeName: 'ImagesDemo' },

]


const Item = ({ data }) => {
    return (
        <>
            <Pressable onPress={ ()=> data.navigation.navigate(data.item.routeName)} >
                <View style={dashboardStyles.itemRow}>
                    <Text style={dashboardStyles.itemText}>{data.item.id}</Text>
                    <View style={{ width: 20 }} />

                    <Text style={dashboardStyles.itemText}>{data.item.title}</Text>
                    {/* <Text style={dashboardStyles.itemText}>{data.item.component}</Text> */}
                </View>
            </Pressable>
        </>
    );
}
const DashboardScreen = ({navigation}) => {


    const renderItem = ({ item }) => <Item data={{item: item, navigation: navigation}}  />;
    return (
        <View style={dashboardStyles.container}>

            <FlatList
                data={screens}
                renderItem={renderItem}
            />

        </View>
    );

};

const dashboardStyles = StyleSheet.create({
    container: {
        flex: 1
    },

    itemRow: {
        flexDirection: 'row',
        padding: 8,
        backgroundColor: '#333333',
        marginBottom: 8,
    },

    itemText: {
        color: 'white',
        fontSize: 20,

    }
});
export default DashboardScreen;

