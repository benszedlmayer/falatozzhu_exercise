import {Card, Text, Image} from '@rneui/themed';
import React from 'react';
import {Alert, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {deleteItem} from '../../services/mockDataService';

import {Item} from '../../types/types';
import style from './WebShopItem.style';

type WebShopItemProps = {
  item: Item;
  onDelete: (id: number) => void;
};

const WebShopItem = ({item, onDelete}: WebShopItemProps) => {
  const onDeletePressed = () => {
    Alert.alert(
      'Deleting Item',
      `Are you sure you want to delete ${item.name}?`,
      [
        {
          text: 'Delete',
          onPress: () => deleteItem(item.id).then(() => onDelete(item.id)),
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
      <Card.Image
        style={style.image}
        source={{
          uri: item.image,
        }}
      />
      <Text style={style.description}>{item.description}</Text>
      <View style={style.buttonContainer}>
        <TouchableOpacity>
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
