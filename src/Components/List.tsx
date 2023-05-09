import { useEffect, useState } from 'react';
import ListItem from './ListItem';
import '../Styling/List.css';
import { v4 as uuid } from 'uuid';

export default function List() {
    const [list, setList] = useState<any>([]);
    const [counter, setCounter] = useState(0);

    const addNewListItem = () => {
        setList([...list, <ListItem id={uuid()} itemToRemove={deleteById} />])
        setCounter(counter + 1)
    }

    const deleteById = (id: number) => {
        setList((item: any[]) => {
            return item.filter((item: any) => item.props.id !== id)
        })
    }

    return (<>
        <div id='list'>
            <h1>To do</h1>
            <ul>
                {list.map((item: any) => {
                    return (
                        <li key={item.props.id}>
                            {item}
                        </li>
                    )
                })}
            </ul>
            <button onClick={addNewListItem} id='add-new-list-item-button' data-testid="new-item">New</button>
        </div>
    </>
    );
}

