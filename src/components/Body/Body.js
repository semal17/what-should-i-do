import './Body.css';

import Search from '../Search/Search';
import List from '../List/List';
import StatusFilter from '../StatusFilter/StatusFilter';
import Time from '../Time/Time';
import ToDo from '../ToDo/ToDo';

function Body() {

    let data = [
        { name: 'create app', important: true, keys: 'create app' },
        { name: 'drink tea', important: false, keys: 'drink tea' },
        { name: 'gum', important: false, keys: 'gum' },
        { name: 'gum', important: false, keys: 'gu' },
    ];

    return (
        <main className="body container">
            <section className='serch-wrapper'>
                <ToDo />
                <Search />
            </section>
            <StatusFilter />
            <List data={data} />
            <Time />
        </main>
    );
}

export default Body;