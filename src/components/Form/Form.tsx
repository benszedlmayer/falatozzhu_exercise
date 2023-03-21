import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {Input} from '@rneui/base';
import {Button, Image, Text} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {View} from 'react-native';

import {RootParams} from '../../navigation/RootStackParams';
import {
  addItem,
  showErrorAlert,
  updateItem,
} from '../../services/mockDataService';
import globalStyles from '../../shared/global.style';
import {FormInputs, Item} from '../../types/types';
import style from './Form.style';

type ReadScreenNavigationProp = BottomTabNavigationProp<
  RootParams,
  'createEdit'
>;

type FormProps = {
  mode: 'create' | 'edit';
  item?: Item;
};

const Form = ({mode = 'create', item}: FormProps) => {
  const navigation = useNavigation<ReadScreenNavigationProp>();
  const [loading, setLoading] = useState(false);

  const {control, handleSubmit, formState, reset} = useForm<FormInputs>({
    defaultValues: {
      name: '',
      number: '',
      description: '',
    },
  });

  useEffect(() => {
    reset({
      name: item?.name ?? '',
      number: item?.number.toString() ?? '',
      description: item?.description ?? '',
    });
  }, [reset, item]);

  const onSubmit: SubmitHandler<FormInputs> = data => {
    setLoading(true);

    let promise: Promise<any>;

    if (mode === 'create') {
      promise = addItem(data);
    } else if (item) {
      promise = updateItem(data, item.id);
    } else {
      promise = Promise.reject(new Error('Invalid form mode'));
    }

    promise
      .then(() => {
        reset();
        navigation.navigate('read');
      })
      .catch(showErrorAlert)
      .finally(() => setLoading(false));
  };

  return (
    <View>
      <Text style={globalStyles.screenTitle}>
        {mode === 'create' ? 'Add new Item' : `Edit Item: ${item?.name ?? ''}`}
      </Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Name of the item"
            leftIcon={
              <Image
                style={globalStyles.icon}
                source={require('../../assets/icons/icon_name.png')}></Image>
            }
          />
        )}
        name="name"
      />
      {formState.errors.name && (
        <Text style={globalStyles.errorMessage}>This is required.</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Number of items available"
            keyboardType="number-pad"
            leftIcon={
              <Image
                style={globalStyles.icon}
                source={require('../../assets/icons/icon_number.png')}></Image>
            }
          />
        )}
        name="number"
      />
      {formState.errors.number && (
        <Text style={globalStyles.errorMessage}>This is required.</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            style={style.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Short description of the item"
            multiline
            leftIcon={
              <Image
                style={globalStyles.icon}
                source={require('../../assets/icons/icon_text.png')}></Image>
            }
          />
        )}
        name="description"
      />
      {formState.errors.description && (
        <Text style={globalStyles.errorMessage}>This is required.</Text>
      )}
      <Button
        onPress={handleSubmit(onSubmit)}
        title="Submit"
        loading={loading}
        radius="lg"
        raised
      />
      {mode === 'edit' && (
        <Button
          onPress={() => navigation.navigate('read')}
          title="Go Back"
          radius="lg"
          raised
          color="secondary"
          containerStyle={style.backButton}
        />
      )}
    </View>
  );
};

export default Form;
