import  React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';



const dummyPlaces = [
    {
        id:'p1',
        title:'Leaning Tower of Pisa',
        description: 'Famous Building',
        imageUrl: 'https://www.boredpanda.com/blog/wp-content/uploads/2017/07/pisa-tower-dominykas-clen-5971f78b62422__605.jpg',
        address: 'Piazza del Duomo, 56126 Pisa PI, Italy',
        location: {
            lat:43.7230,
            lng:10.3966
        },
        creator: 'u1'
    },
    {
        id:'p2',
        title:'Empire State Building',
        description: 'Famous Skyscraper',
        imageUrl: 'https://www.boredpanda.com/blog/wp-content/uploads/2017/07/pisa-tower-dominykas-clen-5971f78b62422__605.jpg',
        address: '1234 GFY Lane',
        location: {
            lat:40,
            lng:-73
        },
        creator: 'u2'
    }
];

const UserPlaces = () =>{
    const userId = useParams().userId;
    const loadedPlaces = dummyPlaces.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;