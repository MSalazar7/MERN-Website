import React from 'react';
import UsersList from '../components/UsersList'


const Users = () => {
    const USERS = 
    [
        {
            id: 'u1', 
            name: 'Michael Salazar', 
            image: 'https://media.licdn.com/dms/image/v2/D5603AQGRr2nWKIJg5A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722727860122?e=1734566400&v=beta&t=7x9lEepGedw9hCMlKsR83opl1sRzlFLFFgLeLV9JtOs',
            places: 3,
        }
        
    ];
    return <UsersList items= {USERS} />;
};

export default Users;