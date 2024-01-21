function List(props) {
    const items = props.items
    const header = props.header
    if (items){
    const itemsList = items.map((item) =>
    <li key={item.id} onClick={() => props.updateItem(item.id)}>{item.text}</li>
    );

    return (<>
        <h1>{header}</h1>
        <ol>
            {itemsList}
        </ol>
    </>)
    }
}

export default List