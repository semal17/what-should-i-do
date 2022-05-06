import { useState } from 'react';

import './Item.css';



function Item({ name }) {

    let [done, setDone] = useState(false);
    let [imp, setImp] = useState(false);


    let onNameClick = () => {
        setDone(!done);
    };

    let onImpClick = () => {
        setImp(!imp);
    };

    

    let styleName = 'item__name';

    if (done) {
        styleName += ' item__name--done';
    }


    if (imp) {
        styleName += ' item__name--imp';
    }


    return (
        <li className='item'>
            <div className='item__text'>
                <p className={styleName} onClick={onNameClick}>{name}</p>
            </div>
            <div className='item__wrapper'>
                <div className='item__icon' onClick={onImpClick} >
                    <span className='item__icon-intro'>i</span>
                </div>
                <div className='item__icon'>
                    <span className='item__icon-intro'>d</span>
                </div>
            </div>
        </li>

    );
}

export default Item;