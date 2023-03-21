import axios from 'axios';
import {Item} from '../types/types';

export const getItems = async (): Promise<Array<Item>> =>
  axios
    .get('https://64199435c152063412c60eea.mockapi.io/items')
    .then(response => response.data)
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
