import React from 'react';
import { useContext} from 'react';
import { MoviesContext } from './moviesContext';
import {AuthContext} from "./authContext";

export const PublicPage = () => {
    return <h2>Public page</h2>
 }
 export const Movies = () => {
    const movieContext = useContext(MoviesContext);

    return <>
        <h2>Movies Data </h2>
        <div>
            {movieContext.movies.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
        </div>
    </>
}
 export const Profile = () => {
     const authContext = useContext(AuthContext);
    return (
    <> 
        <h2>My Profile </h2> 
        <p>{authContext.userName}</p>
    </>
    );
}
 export const HomePage = () => {
     return  <h2>Home page</h2>
 }
 