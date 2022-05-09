import { useState } from 'react';

import './ItemAdd.css';



function ItemAdd({ addItem }) {

let [inputText, setInputText] = useState('');

let inputChange = (e) => {
    setInputText(e.target.value);    
};

let onSubmit = (e) => {
    e.preventDefault();
    addItem(inputText);
    setInputText('');
}


    return (
        <form className='item-add' onSubmit={onSubmit}>
        <input className='item-add__input' type='text' onChange={inputChange} placeholder='What else should you do?' value={inputText}></input>
            <button className='item-add__btn'>+ Add</button>
        </form>
    );
}

export default ItemAdd;