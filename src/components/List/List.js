import './List.css';

import Item from '../Item/Item';

function List({ data, onDeleted, impItem, doneItem }) {


    return (
        <ul className='list'>
            {data.map(item => <Item name={item.name} key={item.keys} important={item.important} done={item.done}
                onDeleted={() => onDeleted(item.name)} impItem={() => impItem(item.keys)} doneItem={() => doneItem(item.keys)} />)}
        </ul>
    );
}

export default List;