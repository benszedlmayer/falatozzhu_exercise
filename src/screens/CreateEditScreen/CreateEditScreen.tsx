import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import React, {useCallback, useEffect} from 'react';
import {Keyboard, Pressable, View} from 'react-native';

import Form from '../../components/Form/Form';
import {RootParams} from '../../navigation/RootStackParams';
import globalStyles from '../../shared/global.style';
import style from './CreateEditScreen.style';

type CreateEditScreenNavigationProp = BottomTabNavigationProp<
  RootParams,
  'createEdit'
>;

const CreateEditScreen = () => {
  const {params: {mode = 'create', item = undefined} = {mode: 'create'}} =
    useRoute<RouteProp<RootParams, 'createEdit'>>();

  const navigation = useNavigation<CreateEditScreenNavigationProp>();
  const [isNavigatedViaTab, setIsNavigatedViaTab] = React.useState(false);

  /* 
  If the component was navigated to via a tab press, reset the mode and item props to 'create' and undefined, respectively
  */
  useFocusEffect(
    useCallback(() => {
      if (isNavigatedViaTab) {
        navigation.setParams({mode: 'create', item: undefined});
      }
    }, [navigation, isNavigatedViaTab]),
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', () => {
      setIsNavigatedViaTab(true);
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    setIsNavigatedViaTab(false);
  }, [mode, item]);

  return (
    <View style={globalStyles.screenContainer}>
      <Pressable style={style.wrapper} onPress={() => Keyboard.dismiss()}>
        <Form mode={mode} item={item} />
      </Pressable>
    </View>
  );
};

export default CreateEditScreen;
