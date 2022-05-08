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
                <i className="item__icon-intro fa-solid fa-star"></i>
                </div>
                <div className='item__icon' onClick={onDeleted}>
                <i className="item__icon-intro fa-solid fa-trash"></i>

                </div>
            </div>
        </li>

    );
}

export default Item;