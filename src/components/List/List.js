import './List.css';

import Item from '../Item/Item';

function List({ data }) {

let listItem = data.map(item => <li key={item.name}>
    <Item { ...item }/>
</li>)

    return (
        <ul>
            {listItem}
        </ul>
    );
}

export default List;