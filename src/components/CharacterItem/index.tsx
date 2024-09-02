import React from 'react';
import { Image, View, Text } from 'react-native';
import { ICharacter } from 'interfaces';
import styles from './styles';
import { joinStyles } from '../../helper';

interface CharacterProps {
  character: ICharacter;
  simplified?: boolean;
  theme: any
}

const CharacterItem = ({ character, simplified = false, theme }: CharacterProps) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: character.image }}
        style={simplified ? styles.smallImage : styles.image}
      />
      <View style={styles.nameAndCount}>
        <Text style={joinStyles(styles.name, { color: theme.primary})}>{character.name}</Text>
        {!simplified && (
          <Text style={joinStyles(styles.episodeCount, {color: theme.inActive})}>
            {character.episode.length} Episodes
          </Text>
        )}
      </View>
    </View>
  );
};

export default CharacterItem;
