import axios from 'axios';
import {Alert} from 'react-native';
import {FormInputs, Item} from '../types/types';

export const getItems = async (): Promise<Array<Item>> =>
  axios
    .get('https://64199435c152063412c60eea.mockapi.io/items')
    .then(response => (response.data.length ? response.data.reverse() : []))
    .catch(e => {
      console.log(e);
      return false;
    });

export const deleteItem = async (id: number): Promise<boolean> =>
  axios
    .delete(`https://64199435c152063412c60eea.mockapi.io/items/${id}`)
    .then(() => true)
    .catch(e => {
      console.log(e);
      return false;
    });

export const addItem = async (item: FormInputs): Promise<boolean> =>
  axios
    .post(`https://64199435c152063412c60eea.mockapi.io/items`, {
      id: Math.random() * 1000,
      name: item.name,
      number: item.number,
      description: item.description,
    })
    .then(() => true)
    .catch(e => {
      console.log(e);
      return false;
    });

export const updateItem = async (
  item: FormInputs,
  id: number,
): Promise<boolean> =>
  axios.put(`https://64199435c152063412c60eea.mockapi.io/items/${id}`, {
    name: item.name,
    number: item.number,
    description: item.description,
  });

export const showErrorAlert = () => {
  Alert.alert('Error', 'Can not connect to the mock api', [{text: 'Okay'}]);
};
