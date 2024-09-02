import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface EpisodeItemProps {
  episodeName: string;
  date: string;
  bg: string;
  fg: string;
}

const EpisodeItem = ({ episodeName, date, bg, fg }: EpisodeItemProps) => {
  return (
    <View style={[styles.itemContainer, {
      backgroundColor: bg
    }]}>
      <Text style={[styles.episodeName, { color: fg }]}>{episodeName}</Text>
      <Text style={[styles.date, { color: fg }]}>{date}</Text>
    </View>
  );
};

export default EpisodeItem;
