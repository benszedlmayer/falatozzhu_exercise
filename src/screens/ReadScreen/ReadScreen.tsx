import {useIsFocused} from '@react-navigation/native';
import {Text} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import WebShopItem from '../../components/WebShopItem/WebShopItem';
import {getItems, showErrorAlert} from '../../services/mockDataService';
import globalStyles from '../../shared/global.style';
import {Item} from '../../types/types';
import style from './ReadScreen.style';

const ReadScreen = () => {
  const isFocused = useIsFocused();
  const [items, setItems] = useState<Array<Item>>([]);

  useEffect(() => {
    async function getMockItemsData() {
      getItems()
        .then(data => setItems(data))
        .catch(showErrorAlert);
    }

    getMockItemsData();
  }, [isFocused]);

  // Function to update items state array when an item is deleted
  const handleDelete = (id: number) =>
    setItems(prev => prev.filter(item => item.id !== id));

  return (
    <View style={globalStyles.screenContainer}>
      {items.length ? (
        <FlatList
          contentContainerStyle={style.container}
          data={items}
          renderItem={({item}) => (
            <WebShopItem item={item} onDelete={handleDelete} />
          )}
        />
      ) : (
        <>
          <Text style={globalStyles.screenTitle}>The inventory is empty</Text>
          <Text style={globalStyles.screenSubtitle}>
            Add new items on the Create screen!
          </Text>
        </>
      )}
    </View>
  );
};

export default ReadScreen;
