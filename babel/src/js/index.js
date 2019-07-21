import '../css/index.css';
import search from './search';
import render from './render';

const id = prompt('Who the hell that pokemon is');

search(id)
    .then((data) => {
        console.log(data);
        render(data);
    })
    .catch(() => {
        console.log('Pokemon was not found');
    });