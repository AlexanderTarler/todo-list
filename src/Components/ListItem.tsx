import { useEffect, useState, useRef } from 'react';
import fetchDataFromAPI from '../Helpers/fetcher';
import '../App.css';
import React from 'react';

function ListItem({ id, itemToRemove }: any) {
    const [item, setItem] = useState('');
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (event: any) => {
        setQuery(event.target.value);
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            setItem(query);
            setQuery('');
        }
    };

    const editButton = () => {
        inputRef.current?.classList.toggle('visible');
        inputRef.current?.focus();
    }


    useEffect(() => {
        fetchDataFromAPI(setItem);
    }, [])

    return (<>
        <li key={id} className='list-item'>
            <div>
                {item}
            </div>

            <div className='buttons'>
                <button className='edit-button' onClick={() => editButton()}>Edit</button>
                <button className='remove-button' onClick={() => itemToRemove(id)}>Remove</button>
                <input ref={inputRef} className='edit-item' type="text" onChange={handleChange} onKeyDown={handleKeyDown} value={query} />

            </div>
        </li>
    </>
    );
}


export default React.memo(ListItem);
