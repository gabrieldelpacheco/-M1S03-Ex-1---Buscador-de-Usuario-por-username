import { users } from './users.js';

let username;
let btnSearch = document.getElementById('btnSearch');

btnSearch.addEventListener('click', filterUser);

function filterUser() {
    username = document.getElementById('username').value;
    let user = users.find(user => {
        return user.username === username;
    });
    
    console.log(user);
}