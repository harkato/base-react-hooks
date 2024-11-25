import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import useSWR from 'swr';

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setUsers(res.data);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        })
    }, []);

    if(loading) {
        return <div>Carregando ...</div>
    }

    return (
        <div>
            <h1>Lista de usuários</h1>
            <ul>
                {users.map(users => (
                    <li key={users.id}>{users.name}</li>
                ))}
            </ul>
        </div>        
    )
}