import BottomSheet, {
    BottomSheetView,
    BottomSheetBackdrop
} from '@gorhom/bottom-sheet';
import { useStateHook } from '../../contextAPI/state';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useReducedMotion } from 'react-native-reanimated';
import { Button, List } from 'react-native-paper';

import bottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';

const BottomSheetWrapper = React.forwardRef((props: { children: React.ReactNode }, ref: React.ForwardedRef<BottomSheet>) => {


    const reducedMotion = useReducedMotion();
    const { store, setStorePartial } = useStateHook()
    const { bottomSheet } = store;
    const { index, flex } = bottomSheet;

    const renderBackdrop = useCallback(
		(props) => (
			<BottomSheetBackdrop
				{...props}
				disappearsOnIndex={-1}
				appearsOnIndex={0}
			/>
		),
		[]
	);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
        if(index == -1) {
            setStorePartial((prev :any ) => ({...prev, bottomSheet: { index: -1, flex: 0}}))
        }
    }, []);

    //const [index, setIndex] = useState(-1);

    useEffect(() => {
        //setIndex(1)
        //ref?.current.snapToPosition('50%');
    }, [])
    return (
        <View style={{ flex }}>
            <BottomSheet
                ref={ref}
                onChange={handleSheetChanges}
                snapPoints={useMemo(() => ['100%'], [])}
                style={{ zIndex: 5}}
                containerStyle={{ backgroundColor: 'rgba(52, 52, 52, 0)' }}
                animateOnMount={false}
                index={index}
                backdropComponent={renderBackdrop}
            >
                <BottomSheetView style={{width: '100%', height:'100%'}}>
                    
                    {props.children}
                </BottomSheetView>
            </BottomSheet>
        </View>

    )
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1
    },
});
export default BottomSheetWrapper;