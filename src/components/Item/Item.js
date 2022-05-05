import './Item.css';



function Item({ name, important = false }) {

    const style = {
        color: important ? 'tomato' : 'black'
    };

    return (
        <li className='item'>
            <div className='item__text'>
                <p className='item__name' style={style}>{name}</p>
            </div>
            <div className='item__wrapper'>
                <div className='item__icon'>
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