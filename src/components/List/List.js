import './List.css';

import Item from '../Item/Item';

function List({ data }) {

// let listItem = data.map(item => <li key={item.name}>
//     <Item { ...item }/>
// </li>)

    return (
        <ul className='list'>
            {data.map(item => <Item name={item.name} key={item.keys} important={item.important} />)}
        </ul>
    );
}

export default List;