import { useEffect, useState, useRef } from 'react';
import fetchDataFromAPI from '../Helpers/fetcher';
import '../Styling/ListItem.css';
import React from 'react';



function ListItem({ id, itemToRemove }: any) {
    const [item, setItem] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // I have 'any' as a type for my events since typing events
    // is a bit wonky
    const handleChange = (event: any) => {
        setItem(event.target.value);
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            event.target.blur();
        }
    };

    const editButton = () => {
        inputRef.current?.focus();
    }


    useEffect(() => {
        fetchDataFromAPI(setItem);
    }, [])

    return (<>
        <li key={id} className='list-item'>
            <div>
                <input ref={inputRef} className='list-item-text' data-testid='list-item-text' type="text" onChange={handleChange} onKeyDown={handleKeyDown} value={item} />
            </div>

            <div className='buttons'>
                <button className='edit-button' data-testid='edit-button' onClick={() => editButton()}>Edit</button>
                <button className='remove-button' data-testid='remove-button' onClick={() => itemToRemove(id)}><span className="text">Delete</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
            </div>
        </li>
    </>
    );
}


export default React.memo(ListItem);
