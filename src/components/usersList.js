import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    retrieveUsers,
    findUserByName,
} from "../actions/myUsers";

import '../App.css';
import { Link } from 'react-router-dom';

const UsersList = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchName, setSearchName] = useState("");

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveUsers());
    }, []);

    const onChangeSearchName = e => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };

    const refreshData = () => {
        setCurrentUser(null);
        setCurrentIndex(-1);
    };

    const setActiveUser = (user, index) => {
        setCurrentUser(user);
        setCurrentIndex(index);
    };


    const findByName = () => {
        refreshData();
        dispatch(findUserByName(searchName));
    };

    return (

        <div className="wrapper">
            <div id="search-bar" className="search-bar">
                <form action="">
                    <input
                        type="text"
                        placeholder="Busca un usuario por nombre"
                        value={searchName}
                        onChange={onChangeSearchName}
                    />
                </form>
                <button className="searchButton" type="button" onClick={findByName}>
                    Buscar
                </button>
            </div>
            <div className="user-results">
                {!!users && users.map((user, index) => {
                    return (
                        <div key={index} className="user-card">
                            <div className="close"><button>x</button></div>
                            <img src="images.jpeg" className="avatar" />
                            <div className="top info">{user.name}</div>
                            <div className="bottom info">{user.email}</div>
                        </div>
                    );
                })}
            </div>
        </div>

    );
};

export default UsersList;