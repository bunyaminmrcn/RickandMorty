import { Text, View, TouchableOpacity } from 'react-native';

export default function Centerize({ children }) {
    return <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>{children}</View>
}