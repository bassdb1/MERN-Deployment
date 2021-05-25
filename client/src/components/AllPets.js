// 'useState' is used to create some variables that can store some data
import React, {useState, useEffect} from 'react';
// We need to import 'axios' to reach the backend API
import axios from 'axios';
import {Link} from '@reach/router'


const AllPets = () => {
    //state variable
    const [allPets, setallPets] = useState([])
    const [deleteClicked, setdeleteClicked] = useState(false)

    //useEffect is used so that it will load the data only 'one time'

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")     // be sure to include full path, http://...
    // Successful data from the URL above goes in '.then(res) 'res = response' variable'
        .then(res =>{
            console.log("*********")
            console.log(res)
            console.log("*********")
        // I now want to set my data into my 'state variable' 'pets' via the 'setPets' setter
        setallPets(res.data.results)
        })
    // Error data goes in '.catch()'
        .catch(err =>{
            console.log(err)

        })

    }, [deleteClicked])


     // Click Handler - when the 'onclick' is clicked on below, it will run this function.  Get the delete route. Use backticks
     const deleteClickHandler =(e, ID )=>{
        axios.delete(`http://localhost:8000/api/pets/delete/${ID}`)
        .then(res=>{
            console.log(res)
            setdeleteClicked(!deleteClicked)
          
        })

        .catch(err=>{
            console.log(err)
        })

    }


   // Return the Form to the Screen
   return (
   
    
    <div className = "row">
        <div className="col">
        {      
                // map through, loop. my 'allProducts state array' 'pet' = each object in the array, 'i' = index number
                
                allPets.map((pet,i)=>{

                    // You have to have 'return' or it will not display
                    return <div key= {i}className="card">  
                        <div className="card-body">
                            <h4 className="card-title">Name: <Link to ={`/pets/${pet._id}`} >{pet.name}</Link> </h4>
                            <h6 className="card-title">Type: {pet.type}</h6>
                            <h6 className="card-title">Description: {pet.description}</h6>
                            <p><img src={pet.petPic} height ="200px" width ="200px" alt=""/></p>
                            <h6 className="card-subtitle mb-2 text-muted"></h6>
                            <br></br>
                            <Link to= "/">Home</Link>
                        </div>
                    </div>
                
                })
        }
        </div>
        
    </div>
            
)

    };
 

export default AllPets;