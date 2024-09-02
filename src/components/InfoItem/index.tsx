import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../../utils/colors';
import styles from './styles';

interface InfoItemProps {
  iconName: string;
  label: string;
  value: string;
  fg: string;
  bg: string;
  focused: string;
}

const InfoItem = ({iconName, label, value, fg, bg, focused}: InfoItemProps) => {
  return (
    <View style={[styles.itemContainer, { backgroundColor: bg}]}>
      <View style={[styles.iconContainer, { }]}>
        <FontAwesome5 name={iconName} size={25} color={focused} />
      </View>
      <Text style={[styles.label, { color: fg}]}>{label}</Text>
      <Text style={[styles.value, {color: fg}]}>{value}</Text>
    </View>
  );
};

export default InfoItem;
