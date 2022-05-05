import './Body.css';

import Search from '../Search/Search';
import List from '../List/List';
import StatusFilter from '../StatusFilter/StatusFilter';
import Time from '../Time/Time';

function Body() {

    let data = [
{ name: 'create app', important: true},
{ name: 'drink tea', important: false},
{ name: 'gum', important: false},
    ];

    return (
        <section>            
            <Search/>
            <StatusFilter/>
            <List  data={data}/>
            <Time/>
        </section>
    );
}

export default Body;