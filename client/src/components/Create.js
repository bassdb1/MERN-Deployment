import { navigate, Link } from '@reach/router';
import axios from 'axios';
import React, {useState} from 'react';

// Create a 'State Variable' to hold your Data, also have 'keys', 'from my model' to match
const Create = () => {
    const [forminfo, setforminfo] = useState({
        name:"",
        type:"",
        description:"",
        petPic:""

    })

// Create a state variable for errors

const [errors, setErrors] = useState({})


    // Change Handler - everything that is being typed in my form below goes through here
    const changehandler = (e)=>{
        setforminfo({
            ...forminfo,                         // this is the spread operator, it keeps the current data from being overwritten
            [e.target.name]:e.target.value
        })
    }
 
  // Submit Handler - when the form is 'submitted' I want it to run this 'Submit Handler' (e) = event
    const submitHandler = (e)=>{

        //prevent the page from refreshing
        e.preventDefault()

        // check to see if data is getting submitted
        console.log("submitted")

        // Run Axios to 'Post' the data - I got this route from Postman, then what data, our data is stored in 'forminfo'
        axios.post("http://localhost:8000/api/pets/create", forminfo)
            .then(res=>{
                console.log("Response after posting the Form!")
                console.log(res)
               
                // If no errors - Validation
                if(res.data.results){
                    // Go back to home page
                navigate("/")
                }
                
                // Put errors here
                //seterrors(res.data.errors
                else {setErrors(res.data)
            }})
            .catch(err=> console.log("Errors!", err))
    }

    return (
        <div className = "container">
            <h1>Add a new Pet</h1>
            <form onSubmit = {submitHandler}>
                <div className="form-group">
                    <label>Name: </label>
                      {errors.name? <p className="text-danger">{errors.name.message}</p> : ""}
                    <input onChange={changehandler} type="text" name="name" id="" className="form-control"/>
                </div>
                <div className="form-group">

                <label>Type: </label>
                {errors.type? <p className="text-danger">{errors.type.message}</p> : ""}
                
                    <input onChange={changehandler} type="text" name="type" id="" className="form-control"/>
                    {/* <textarea onChange={changehandler} name="punchline" id="" cols="30" rows="10" className="form-control"></textarea> */}
                </div>

               
                <div className="form-group">
                <label>Description: </label>
                    {errors.description? <p className="text-danger">{errors.description.message}</p> : ""}
                    <input onChange={changehandler} type="text" name="description" id=""className="form-control"/>
                </div>

                <div className="form-group">
                <label>Pet Picture: </label>
                    {errors.petPic? <p className="text-danger">{errors.petPic.message}</p> : ""}
                    <input onChange={changehandler} type="text" name="petPic" id=""className="form-control"/>
                </div>

                <div className="form-group">
                <label>Skill 1: </label>
                    {/* {errors.petPic? <p className="text-danger">{errors.petPic.skill1}</p> : ""} */}
                    <input onChange={changehandler} type="text" name="skill1" id=""className="form-control"/>
                </div>

                <div className="form-group">
                <label>Skill 2: </label>
                    {/* {errors.petPic? <p className="text-danger">{errors.petPic.skill2}</p> : ""} */}
                    <input onChange={changehandler} type="text" name="skill2" id=""className="form-control"/>
                </div>

                <div className="form-group">
                <label>Skill 3: </label>
                    {/* {errors.petPic? <p className="text-danger">{errors.petPic.skill3}</p> : ""} */}
                    <input onChange={changehandler} type="text" name="skill3" id=""className="form-control"/>
                </div>

                

                <input type="submit" value="Add Pet"/>
             </form>
             <br></br>
            <Link to= "/">Home</Link>
               
            

        </div>


    );  
};


export default Create;