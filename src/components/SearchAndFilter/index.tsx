import BottomSheet from '@gorhom/bottom-sheet';
import styles from './styles';
import React from 'react';
import {View, TextInput} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useStateHook } from '../../contextAPI/state';
//import {Colors} from '../../utils/colors';

interface Props {
  searchText: string;
  setSearchText: (searchText: string) => void;
  drawer?: any;
  noFilter?: boolean;
  Colors: any;
  bsRef: React.ForwardedRef<BottomSheet>;
  //expand: ()=> void
}

const SearchAndFilter = ({
  //drawer,
  bsRef,
  //expand,
  searchText,
  setSearchText,
  noFilter = false,
  Colors
}: Props) => {
  const {store ,setStorePartial} = useStateHook();
  return (
    <View style={[styles.inputContainer,  {
      backgroundColor: Colors.secondaryBackground    }]}>
      <TextInput
        style={{padding: 15, color: Colors.label}}
        
        placeholder="Search..."
        placeholderTextColor={Colors.screenHead}
        value={searchText}
        onChangeText={(text: string) => setSearchText(text)}
      />

      {!noFilter && (
        <View>
          <FontAwesome5
            name="filter"
            size={25}
            color={Colors.focused}
            style={styles.filter}
            onPress={() => {
              //drawer.current.openDrawer()
              //console.log(bsRef?.current)
              setStorePartial((prev: any) => ({...prev, bottomSheet: { index: 0, flex: 2}}))
              //bsRef?.current.expand();
            }}
          />
        </View>
      )}
    </View>
  );
};

export default SearchAndFilter;
