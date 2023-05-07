import { randomNumber } from '../Helpers/randomNumber';


const fetchDataFromAPI = (setItem: any) => {
    const random = randomNumber();
    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            setItem(data.name)
        })
}

export default fetchDataFromAPI;