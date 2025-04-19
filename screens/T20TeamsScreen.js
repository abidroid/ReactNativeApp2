import { View, Text, FlatList } from 'react-native';
import ttwenty from '../ttwenty.json';


const T20TeamsScreen = () => {

    const teams = ttwenty.teams;


    return (<View>
        <Text>{teams[0].fullName}</Text>
    </View>);

}

export default T20TeamsScreen;