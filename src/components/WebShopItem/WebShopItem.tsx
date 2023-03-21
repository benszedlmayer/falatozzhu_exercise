import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Card, Image, Text} from '@rneui/themed';
import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';

import {RootParams} from '../../navigation/RootStackParams';
import {deleteItem, showErrorAlert} from '../../services/mockDataService';
import {Item} from '../../types/types';
import style from './WebShopItem.style';

type WebShopItemProps = {
  item: Item;
  onDelete: (id: number) => void;
};

type WebShopItemNavigationProp = StackNavigationProp<RootParams, 'read'>;

const WebShopItem = ({item, onDelete}: WebShopItemProps) => {
  const navigation = useNavigation<WebShopItemNavigationProp>();

  const onEditPressed = () => {
    navigation.navigate('createEdit', {
      mode: 'edit',
      item,
    });
  };

  const onDeletePressed = () => {
    Alert.alert(
      'Deleting Item',
      `Are you sure you want to delete ${item.name}?`,
      [
        {
          text: 'Delete',
          onPress: () =>
            deleteItem(item.id)
              .then(() => onDelete(item.id))
              .catch(showErrorAlert),
          style: 'destructive',
        },
        {
          text: 'Cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  return (
    <Card>
      <Card.Title>{item.name}</Card.Title>
      <Card.Divider />
      {item.image && (
        <Card.Image
          style={style.image}
          source={{
            uri: item.image,
          }}
        />
      )}
      <Text style={style.description}>{item.description}</Text>
      <View style={style.buttonContainer}>
        <TouchableOpacity onPress={onEditPressed}>
          <Image
            style={style.button}
            source={require('../../assets/icons/icon_edit.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={style.number}>Available: {item.number}</Text>
        <TouchableOpacity onPress={onDeletePressed}>
          <Image
            style={style.button}
            source={require('../../assets/icons/icon_delete.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default WebShopItem;
