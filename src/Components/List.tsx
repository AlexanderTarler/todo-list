import { useEffect, useState } from 'react';
import ListItem from './ListItem';
import '../App.css';



export default function List() {
    const [list, setList] = useState<any>([]);
    const [counter, setCounter] = useState(0);

    const addNewListItem = () => {
        setList([...list, <ListItem id={counter} itemToRemove={deleteById} />])
        setCounter(counter + 1)
    }

    const deleteById = (id: number) => {
        setList((item: any[]) => {
            return item.filter((item: any) => item.props.id !== id)
        })
    }

    return (<>
        <div id='list'>
            <ul>
                {list.map((item: any) => {
                    return (
                        <li key={item.props.id}>
                            {item}
                            {/* <button onClick={() => deleteById(item.props.id)}>Delete</button> */}
                        </li>
                    )
                })}
            </ul>
            <button onClick={addNewListItem}>Add new list item</button>
        </div>
    </>
    );
}

