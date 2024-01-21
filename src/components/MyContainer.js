import List from "./MyList";
import { useState } from 'react';

const Container = () => {
    const [items, setItems] = useState([
        {id: "1", text: "This is an item" },
        {id: "2", text: "Also this"}
    ])
    

    function add(e) {
        var textValue = document.getElementById("text").value
        e.preventDefault()
        var length = items.length
        const newItem = {id: String(length+1), text: textValue}

        var newItems = [...items]
        newItems.push(newItem)
        setItems(newItems)
    }

    return (
        <>
            <List items={items} header="Really epic list component"/>
            <form>
                <textarea id="text"></textarea>
                <button onClick={(e) => add(e)}>add</button>
            </form>
        </>
    )
}

export default Container