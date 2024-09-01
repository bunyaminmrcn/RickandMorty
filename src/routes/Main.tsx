import { Text, View, TouchableOpacity } from 'react-native';
import Center from './Center';
import { Screen } from '../utils/screens';

export default function Main({ navigation }: any) {

    return (<Center>
        <View style={{ }}>
            <Text>Main Page</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate(Screen.About);
            }}>
                <Text>Go to About</Text>
            </TouchableOpacity>
        </View>
    </Center>);
}
