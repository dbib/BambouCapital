import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, ADD_ITEM_FULL } from './types';
import axios from 'axios';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('http://localhost:5000/articles')
        .then( res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        )
};

export const addItem = (item) => dispatch => {
    axios
        .post('http://localhost:5000/articles/add', item)
        .then(res => 
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        )
};

export const addItemFull = (item) => dispatch => {
    axios
        .post('http://localhost:5000/articles/upload', item)
        .then(res => 
            dispatch({
                type: ADD_ITEM_FULL,
                payload: res.data
            })
        )
}

export const deleteItem = (id) => dispatch => {
    axios
        .delete(`http://localhost:5000/articles/${id}`)
        .then( res =>
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        )   
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
}