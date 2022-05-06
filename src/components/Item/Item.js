// import { useState } from 'react';

import './Item.css';



function Item({ name, important, done, onDeleted, impItem, doneItem }) {

    let styleName = 'item__name';

    if (done) {
        styleName += ' item__name--done';
    }

    if (important) {
        styleName += ' item__name--imp';
    }

    return (
        <li className='item'>
            <div className='item__text'>
                <p className={styleName} onClick={doneItem}>{name}</p>
            </div>
            <div className='item__wrapper'>
                <div className='item__icon' onClick={impItem} >
                    <span className='item__icon-intro'>i</span>
                </div>
                <div className='item__icon' onClick={onDeleted}>
                    <span className='item__icon-intro'>d</span>
                </div>
            </div>
        </li>

    );
}

export default Item;