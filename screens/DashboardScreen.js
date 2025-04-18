import { Text } from "react-native";


// Create an array of topics and then navigate to the respective screens for practice
// Use FlatList


const screens = [
    {id: 1, title: 'DMC', component: 'DmcScreen'},
    {id: 2, title: 'FlexBox', component: 'FlexBoxScreen'},
    {id: 3, title: 'Country Flag API', component: 'CountriesFlagScreen'},
]

const DashboardScreen = () => {

    return <Text>Dashboard</Text>;

};

export default DashboardScreen;