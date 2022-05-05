import './Item.css';



function Item({ name, important = false }) {

    const style = {
        color: important ? 'tomato' : 'black'
    };

    return (
        <p style={style}>{ name }</p>
    );
}

export default Item;