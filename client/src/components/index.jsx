import React from 'react';
import {Link} from '@reach/router';





const Index = () => {
    return (
        <div>
            <h1>Pet Shelter</h1>
            <img src ="/adopt.jpg" alt=""/><br></br>
            <Link to= "/pets/create">Add a Pet</Link><br></br>
            <Link to= "/pets/">View Our Loveable Pets</Link>
        </div>
    );
};

export default Index;