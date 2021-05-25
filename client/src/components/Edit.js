import React, {useEffect, useState} from 'react';  // useEffect to load the ASI page data.  useState to store data ina a state variable
import axios from 'axios';  // this lets us use API Endpoints
import {navigate, Link} from '@reach/router';  // this allows me to go to my home page

// Props allows us to bring over properties
const Edit = (props) => {

    // We want to populate this form with what we get from the database, and store in a state variable
    const [petinfo, setpetinfo] = useState({

    // I need to store my state variabels here - that will be modified.
        name:"",
        type:"",
        description:"",
        petPic:""
    })

    // Create a state variable for errors

    const [errors, setErrors] = useState({})

    //useEffect - Loads only one time for data - if not it will load over and over
    useEffect(()=>{
       
        // Using Axios to go get the data from the website, be sure to include backticks.  'id' was defined on app.js
        axios.get(`http://localhost:8000/api/pets/${props.id}`)

        // Whatever is returning from the axios call above is being stored here
            .then(res=>{
                console.log(res)
        // Populate the State Variable
            setpetinfo(res.data.results)
            })   
            .catch(err=>console.log(err))

        },[])

    // Submit Handler - needed to submit the edited form, 'e' = event
    
    const updateInfo = (e)=>{
        // prevent the default from the page 'refreshing the page' on submit
        e.preventDefault();
        // I need to use 'Axios' to 'Put' My data in the database - look at my routes from Postman.  be sure to include backticks.
        // .. With a put, what it needs updated (props.id), and what it needs updated with (petinfo)
        axios.put(`http://localhost:8000/api/pets/update/${props.id}`, petinfo)
       
        // Whatever response we get back we can console.log it
            .then(res=>{
                console.log(res)

               // I want it to Naviagte me back to my 'home page' with the data changed - I will need to import Naviagte
               // If no errors - Validation
               if(res.data.results){
                // Go back to home page
            navigate("/")
            }
            
            // Put errors here
            //seterrors(res.data.errors
            else {
                console.log(res)

                setErrors(res.data.errors)
        }
            })
        // Any Errors
            .catch(err=>console.log(err))
 
    }

    // On Change Handler - needed to change the data.  'e' is taking information about the 'event' - update our 'State Variables'
    // ... Using 'setpetinfo' as a setter to modify 'petinfo;

    const changehandler = (e)=>{
        
        setpetinfo({
            // we need to 'preserve' what is in the data now with the 'spread operator'
            ...petinfo,

            [e.target.name]:e.target.value

        })

    }

    return (
        // copy over the form from my create.js, and place between the 'div's.  'Returns data to the Webpage'
        <div>
            <h3>Edit Pet</h3>

            {/* When I submit this form, I want this to run the 'Submit Handler' 'updateInfo' */}
            <form onSubmit = {updateInfo}>
                <div className="form-group">
                    <label>Name: </label>
            {/* I also need to tell it we are using a change Handler to edit the data        */}
                {errors.name? <p className="text-danger">{errors.name.message}</p> : ""}

                    <input onChange={changehandler} type="text" name="name" id="" className="form-control" value={petinfo.name}/>
                    {/* <input onChange={changehandler} type="text" name="name" id="" className="form-control" /> */}

                </div>
                <div className="form-group">

                <label>Type: </label>
             {/* I also need to tell it we are using a change Handler to edit the data        */}
                {errors.type? <p className="text-danger">{errors.type.message}</p> : ""}
                    <input onChange={changehandler} type="text" name="type" id="" className="form-control" value={petinfo.type}/>   
                    {/* <input onChange={changehandler} type="text" name="type" id="" className="form-control"/>    */}


                    {/* <textarea onChange={changehandler} name="type" id="" cols="30" rows="10" className="form-control" value={petinfo.punchline}></textarea> */}
                </div>
                <div className="form-group">
                    <label>Description </label>
                    {errors.description? <p className="text-danger">{errors.description.message}</p> : ""}
                    <input onChange={changehandler} type="text" name="description" id=""className="form-control" value ={petinfo.description}/>
                    {/* <input onChange={changehandler} type="text" name="description" id=""className="form-control"/> */}
                </div>

                <div className="form-group">
                <label>Pet Picture: </label>
                    {errors.petPic? <p className="text-danger">{errors.petPic.message}</p> : ""}
                    <input onChange={changehandler} type="text" name="petPic" id=""className="form-control" value = {petinfo.petPic}/>
                </div>

                <div className="form-group">
                <label>Skill 1: </label>
                    {/* {errors.petPic? <p className="text-danger">{errors.petPic.skill1}</p> : ""} */}
                    <input onChange={changehandler} type="text" name="skill1" id=""className="form-control" value = {petinfo.skill1}/>
                </div>

                <div className="form-group">
                <label>Skill 2: </label>
                    {/* {errors.petPic? <p className="text-danger">{errors.petPic.skill2}</p> : ""} */}
                    <input onChange={changehandler} type="text" name="skill2" id=""className="form-control" value = {petinfo.skill2}/>
                </div>

                <div className="form-group">
                <label>Skill 3: </label>
                    {/* {errors.petPic? <p className="text-danger">{errors.petPic.skill3}</p> : ""} */}
                    <input onChange={changehandler} type="text" name="skill3" id=""className="form-control" value = {petinfo.skill3}/>
                </div>

                <input type="submit" value="Update Pet"/>
             </form>

             
             <br></br>
            <Link to= "/">Home</Link>
            
        </div>
    );
};

export default Edit;