import { View, Text, FlatList, StyleSheet } from 'react-native';
import ttwenty from '../ttwenty.json';


const T20TeamsScreen = () => {

    const teams = ttwenty.teams;


    const Item = ({info}) => {
        return (
            <View style={ttwentyStyles.teamRow}>
                <Text>{info.fullName}</Text>
                <Text>Captain {info.captain}</Text>
            </View>
        );
    }
    const renderItem = ({item}) => <Item info={item} />;


    return (<View style={ttwentyStyles.container}>
        <FlatList
        data={teams}
        renderItem={renderItem}
        
        />
    </View>);

}

const ttwentyStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    teamRow: {
        marginBottom: 20,
        backgroundColor: '#abcdef',
        padding: 10,
    },
    teamRowText: {
        color: 'white',
        fontSize: 20,
    }
});

export default T20TeamsScreen;