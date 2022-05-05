import './StatusFilter.css';



function StatusFilter() {

    return (
        <div className='status'>
            <button className='status__btn' type='button'>active</button>
            <button className='status__btn' type='button'>done</button>
            <button className='status__btn' type='button'>all</button>
        </div>
    );
}

export default StatusFilter;