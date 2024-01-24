import List from "./MyList";
import { useState } from 'react';
import { withTranslation } from "react-i18next";

/*const Container = () => {

    const [items, setItems] = useState([
        {id: "1", text: "This is an item"},
        {id: "2", text: "Also this"}
    ])
    
    const updateItem = (id) => {
        const li = document.getElementsByTagName("li")
        li[id-1].style.textDecoration = "line-through"
    }
    

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
            <List items={items} updateItem={updateItem} header="Really epic list component"/>
            <form>
                <textarea id="text"></textarea>
                <button onClick={(e) => add(e)}>add</button>
            </form>
        </>
    )
}*/

const SecondContainer = ({ t }) => {
    return(
    <>
        <div>{t('front')}</div>
    </>)
}


export default withTranslation() (SecondContainer);