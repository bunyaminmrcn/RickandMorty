import { useCharacters } from '../../contextAPI/main';
import React from 'react';
import { View, Button, Alert } from 'react-native';
import { List } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../utils/colors';
import styles from './styles';
import { useTheme } from '../../contextAPI/theme';
import { joinStyles } from '../../helper';

const CharacterFilterContent = () => {
  const { filter, setFilter, resetFilter } = useCharacters();
  const { darkTheme, setThemeF, theme } = useTheme()
  const filterStatus = (status: string) => {
    if (filter.status === status) return setFilter({ ...filter, status: '' });
    setFilter({ ...filter, status });
  };

  const filterGender = (gender: string) => {
    if (filter.gender === gender) return setFilter({ ...filter, gender: '' });
    setFilter({ ...filter, gender });
  };

  const checkIcon = (
    <FontAwesome5 name="check" size={25} color={'green'} />
  );

  return (
    <View style={joinStyles({ flex: 1 }, {
      backgroundColor: theme.primaryBackground
    })}>
      <List.Section
        title="Filters"
        style={joinStyles(styles.listSection, {
          backgroundColor: theme.primaryBackground
        })}
        titleStyle={joinStyles(styles.listSectionTitle, {
          color: theme.label
        })}>
        <List.Accordion
          style={joinStyles(styles.listAccordion, { backgroundColor: theme.secondaryBackground })}
          titleStyle={joinStyles(styles.listAccordionTitle, {
            color: theme.primary
          })}
          title="Status"
          left={() => (
            <FontAwesome5 name="heartbeat" size={25} color={theme.focused} />
          )}>
          <View style={{ left: -30 }}>
            <List.Item
              title="Alive"
              titleStyle={joinStyles(styles.listItem, {
                color: theme.label
              })}
              onPress={() =>  {
                filterStatus('Alive')
              }}
              left={() => (
                <FontAwesome5 name="heart" size={25} color={theme.focused} />
              )}
              right={() => (filter.status === 'Alive' ? checkIcon : null)}
            />
            <List.Item
              title="Dead"
              titleStyle={joinStyles(styles.listItem, { color: theme.label })}
              onPress={() => filterStatus('Dead')}
              left={() => (
                <FontAwesome5
                  name="heart-broken"
                  size={25}
                  color={theme.focused}
                />
              )}
              right={() => (filter.status === 'Dead' ? checkIcon : null)}
            />
          </View>
        </List.Accordion>
        <List.Accordion
          style={joinStyles(styles.listAccordion, {
            backgroundColor: theme.secondaryBackground
          })}
          titleStyle={joinStyles(styles.listAccordionTitle, {
            color: theme.primary
          })}
          title="Gender"
          left={() => (
            <FontAwesome5 name="user" size={25} color={theme.focused} />
          )}>
          <View style={{ left: -30 }}>
            <List.Item
              title="Male"
              titleStyle={joinStyles(styles.listItem, {
                color: theme.label
              })}
              onPress={() => filterGender('Male')}
              left={() => (
                <FontAwesome5 name="male" size={25} color={theme.focused} />
              )}
              right={() => (filter.gender === 'Male' ? checkIcon : null)}
            />
            <List.Item
              title="Female"
              titleStyle={joinStyles(styles.listItem, {
                color: theme.label
              })}
              onPress={() => filterGender('Female')}
              left={() => (
                <FontAwesome5 name="female" size={25} color={theme.focused} />
              )}
              right={() => (filter.gender === 'Female' ? checkIcon : null)}
            />
          </View>
        </List.Accordion>
      </List.Section>
      <Button title="Reset Filter" onPress={resetFilter} />
    </View>
  );
};

export default CharacterFilterContent;
