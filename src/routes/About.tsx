import { Text, View, TouchableOpacity } from 'react-native';
import Center from './Center';
import { Screen } from '../utils/screens';


export default function About({ navigation }: any) {
    return <Center>
        <View style={{ }}>
            <Text>About Page</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate(Screen.Main);
            }}>
                <Text>Go to Main</Text>
            </TouchableOpacity>
        </View>
    </Center>;
}