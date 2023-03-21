import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import WebShopItem from '../../components/WebShopItem/WebShopItem';
import {getItems} from '../../services/mockDataService';
import globalStyles from '../../shared/global.style';
import {Item} from '../../types/types';
import style from './ReadScreen.style';

const ReadScreen = () => {
  const [items, setItems] = useState<Array<Item>>([]);

  useEffect(() => {
    async function getMockData() {
      getItems().then(data => setItems(data));
    }

    getMockData();
  }, []);

  const handleDelete = (id: number) =>
    setItems(prev => prev.filter(item => item.id !== id));

  return (
    <View style={globalStyles.screenContainer}>
      <FlatList
        contentContainerStyle={style.container}
        data={items}
        renderItem={({item}) => (
          <WebShopItem item={item} onDelete={handleDelete} />
        )}
      />
    </View>
  );
};

export default ReadScreen;
