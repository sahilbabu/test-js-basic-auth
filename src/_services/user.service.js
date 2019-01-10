import config from 'config';
import {authHeader} from '../_helpers';
import axios from 'axios';

export const userService = {
    login,
    logout,
    getAll
};

function login(username, password) {
    const url = `https://cldemo.cumulocity.com/user/currentUser?auth`;
    const auth = {
        username: 'mudassir',
        password: 'changeme'
    };


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a user in the response
            return axios({
                method: 'get',
                url,
                auth: {
                    username: 'mudassir',
                    password: 'changeme'
                }
            }).then((response) => {
                console.log(response.data);
                user = response.data;
                if (user) {
                    // store user details and basic auth credentials in local storage
                    // to keep user logged in between page refreshes
                    user.authdata = window.btoa(username + ':' + password);
                    localStorage.setItem('user', JSON.stringify(user));
                }
                return user;
            }).catch((error) => {
                    console.log(error);
                });

        });





}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
