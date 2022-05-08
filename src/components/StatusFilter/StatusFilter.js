import './StatusFilter.css';



function StatusFilter({ filter, filterChange }) {

    let buttonsList = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ];

    let buttons = buttonsList.map(({ name, label }) => {
       let isActive = filter === name;
       let itemClass = isActive ? 'status__btn--active' : '';
        return (
            <button key={name} className={`status__btn ${itemClass}`}
            onClick={() => filterChange(name)} type='button'><span>{label}</span></button>
        )
    });

    return (
        <div className='status'>
            {buttons}
        </div>
    );
}

export default StatusFilter;