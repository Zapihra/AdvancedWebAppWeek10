function List(props) {
    const items = props.items
    const header = props.header
    const itemsList = items.map((item) =>
    <li id={item.id}>{item.text}</li>
    );

    return (<>
        <h1>{header}</h1>
        <ol>
            {itemsList}
        </ol>
        props.items
        <h2>I'm a list</h2>
    </>)
}

export default List