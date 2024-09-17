import React from 'react';
import UsersList from '../components/UsersList'


const Users = () => {
    const USERS = [{
        id: 'u1', 
        name: 'Michael Salazar', 
        image: 'https://media.licdn.com/dms/image/v2/D5603AQGRr2nWKIJg5A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722727860145?e=1728518400&v=beta&t=isIVmeJ1t-LyWJhtmLPtWg78AMKRwAb7ophYmA-jdvk',
        places: 3
    }];
    return <UsersList items= {USERS} />;
};

export default Users;