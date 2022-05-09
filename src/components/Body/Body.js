import { useState } from 'react';

import './Body.css';

import Search from '../Search/Search';
import List from '../List/List';
import StatusFilter from '../StatusFilter/StatusFilter';
import Time from '../Time/Time';
import ToDo from '../ToDo/ToDo';
import ItemAdd from '../ItemAdd/ItemAdd';

function Body() {
    let id = 80;

    let dataList = [
        { name: 'Сook dinner', important: false, done: false, keys: 'create app' },
        { name: 'To find a job', important: true, done: false, keys: 'drink tea' },
        { name: 'Gym', important: false, done: true, keys: 'gum' },
        { name: 'Submit site for review', important: false, done: false, keys: 'gu' },
    ];

    let [data, setData] = useState(dataList);
    let [search, setSearch] = useState('');
    let [filter, setFilter] = useState('all');

    let deleteItem = (name) => {
        let item = data.findIndex((e) => e.name === name);
        let arr = [...data.slice(0, item), ...data.slice(item + 1)];
        setData(arr);
    }

    let addItem = (text) => {
        let newItem = {
            name: text,
            keys: `${text}${Math.floor(Math.random() * id) + Math.floor(Math.random() * id)}`,
            important: false,
            done: false
        };

        let arr = [...data, newItem];
        setData(arr);
    }


    let doneItem = (keys) => {
        let item = data.findIndex((e) => e.keys === keys);
        let old = data[item];
        let newItem = { ...old, done: !old.done };
        let arr = [...data.slice(0, item), newItem, ...data.slice(item + 1)];
        setData(arr);
    }



    let impItem = (keys) => {
        let item = data.findIndex((e) => e.keys === keys);
        let old = data[item];
        let newItem = { ...old, important: !old.important };
        let arr = [...data.slice(0, item), newItem, ...data.slice(item + 1)];
        setData(arr);
    }

    let done = data.filter(e => e.done).length;
    let toDo = data.length - done;

    let searchItem = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    };

    let searchChange = (term) => {
        setSearch(term);
    };

    let filterChange = (filter) => {
        setFilter(filter);
    }


    let filterItem = (items, filter) => {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    let visibleItems = filterItem(searchItem(data, search), filter);




    return (
        <main className="body container">
            <Time />
            <section className='search-wrapper'>
                <ToDo toDo={toDo} done={done} />
                <Search searchChange={searchChange} />
            </section>
            <StatusFilter filter={filter} filterChange={filterChange} />
            <List data={visibleItems} onDeleted={(name) => deleteItem(name)} doneItem={doneItem} impItem={impItem} />
            <ItemAdd addItem={addItem} />
        </main>
    );
}

export default Body;