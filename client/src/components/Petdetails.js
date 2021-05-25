import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate, Link} from '@reach/router';

// State Variable to hold our one pet detail
const Petdetails = (props) => {
    const [petinfo, setpetinfo]= useState({})

// UseEffect is used to run only one time

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)  // this is used to make our backend API call
            .then(res=>{                                          // what we get back goes in the variable 'res' for response
                console.log(res)
                setpetinfo(res.data.results)                  // setting my 'State Variable' 'petinfo' with the response from my get command                   
            })
            .then(console.log(petinfo))
            .catch(err=> console.log(err))
    },[])

    // Click Handler - when the 'onclick' is clicked on below, it will run this function.  Get the delete route. Use backticks
    const deleteClickHandler =()=>{
        axios.delete(`http://localhost:8000/api/pets/delete/${props.id}`)
        .then(res=>{
            console.log(res)
            navigate("/")
        })

        .catch(err=>{
            console.log(err)
        })

    }

    return (
        <div>
            {/* <h1>Details about this Pet: {props.id} </h1> */}
            <h1>Details about this Pet:</h1>
            <p><img src={petinfo.petPic} height ="400px" width ="400px" alt=""/></p>
            
            <h1>Name: {petinfo.name}</h1>
            <h3>Type: {petinfo.type}</h3>
            <h3>Description: {petinfo.description}</h3>
            <h3>Skills: {petinfo.skill1} {petinfo.skill2} {petinfo.skill3} </h3>
            <button onClick = {deleteClickHandler} className="btn-danger">Adopt Me</button>
            <Link to={`/pets/update/${props.id}`}><button  className="btn-warning">Edit</button></Link>
            <br></br>
            <Link to= "/">Home</Link>
         </div>
    );
};


export default Petdetails;