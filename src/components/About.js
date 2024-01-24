import { useEffect, useState } from "react"

const About = () => {
    let [fetchList, setfetchlist] = useState(null)
    useEffect(() => {
        let mounted = true;
        function doStuff() {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(res => {
                var fetchedList = res.map((item)=> 
                <li key={item.id}>{item.title}</li>
                );
                setfetchlist(fetchedList)
                
            })            
        }
        
        doStuff();

        return () => {mounted = false;};

    }, [])

    return(<>
        <div> 
            <ul>
            {fetchList}
            </ul>
        </div>
    </>
    )
}
export default About