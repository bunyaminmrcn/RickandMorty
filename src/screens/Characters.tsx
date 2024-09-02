import React, { useRef } from 'react';
import {
  StyleSheet,
  FlatList,
  Pressable,
  DrawerLayoutAndroid,
  Text,
  View
} from 'react-native';
import { Colors } from '../utils/colors';
import { useCharacters } from '../contextAPI/main';
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../utils/screens';
import CharacterItem from '../components/CharacterItem';
import { ICharacter } from '../interfaces';
import SearchAndFilter from '../components/SearchAndFilter';
import CharacterFilterContent from '../components/CharacterFilterContent';
import { CommonActions } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useTheme } from '../contextAPI/theme';
import { joinStyles } from '../helper';
import BottomSheetWrapper from '../components/BottomSheet';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import { useBottomSheet } from '@gorhom/bottom-sheet';

const Characters = ({ route }) => {
  const { data, fetchMoreData, searchText, setSearchText } = useCharacters();
  const navigation = useNavigation();
  const drawer = useRef<any>(null);
  const [isFocus, setIsFocus] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const { darkTheme, theme, setThemeF } = useTheme();
  
  //const { expand } = useBottomSheet();
  //const { bsRef } = route.params;

  return (
    <>
      <SearchAndFilter
        drawer={drawer}
        bsRef={null}
        //expand={expand}
        searchText={searchText}
        setSearchText={setSearchText}
        Colors={theme}
      />


      <FlatList
        onEndReached={fetchMoreData}
        style={{ backgroundColor: theme.primaryBackground, flex :1 }}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item: character }: { item: ICharacter }) => (
          <Pressable
            key={character.name}
            onPress={() => {
              //navigation.navigate(Screen.CharacterDetails, { character });

              navigation.dispatch(
                CommonActions.navigate({
                  name: Screen.Details, params: {
                    character
                  }
                })
              );

            }}>
            <CharacterItem character={character} theme={theme} />
          </Pressable>
        )}
      />
    </>

  );
};

export default Characters;


const styles = StyleSheet.create({
  container2: { backgroundColor: Colors.primaryBackground },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    color: 'white',
    backgroundColor: 'green'
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
