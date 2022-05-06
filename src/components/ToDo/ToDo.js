import './ToDo.css';


function ToDo({toDo, done}) {

    return (
        <div className='todo'>
        <p className='todo__text'><span className='todo__number'>{toDo}</span> to do, <span className='todo__number'>{done}</span> done</p>
        </div>
    );
}

export default ToDo;