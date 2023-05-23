import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import FormInput from "./components/FormInput";


const App = () => {
  
  
  
const [catRegister, setcatRegister]=useState({
    catName:"",
    formFile:"",
    male:"",
    female:"",
    dateofborth:"",
    weight:""

});

const [records, setReccords]=useState([]);
 
 const handleInput=(e) =>{    
    const name = e.target.name;
    const value=e.target.value;
    console.log(name, value)  
    
    setcatRegister({...catRegister, [name] : value});
 }

 
 const handleSubmit=(e) =>{
    e.preventDeafult();

    const newRecord={...catRegister, id : new Date().getTime().toString()}
 
    setReccords([...records, newRecord]);
    console.log(records); 
  }

 return (
    <div className="app">
      <form action="" onSubmit={handleSubmit}>
      <br></br>
        <h4>Your cat's details</h4><br></br>
        <p>Did you know? <br></br>
        "Your house will always be blessed with love, laughter, and friendship if you have a cat.”</p>
        <div className="cantainer">

            <lable or="catName">Your cat's name </lable><br></br>
            <input type="text" value={catRegister.catName} onChange={handleInput}
             autoComplete="off" name="catName" id= "catName" placeholder="Fluffy"></input><br></br>
            
            <div class="mb-3">
              <label for="formFile" class="form-label">Upload</label>
              <input class="form-control" value={catRegister.formFile} name="formFile" type="file" id="formFile" onChange={handleInput}></input>
            </div>

            <lable for="gender">Gender </lable>       
            <div className="form-check" >
              <label for="male" style={{paddingRight: "150px"}}>
                <input type="radio" name="gender" value={catRegister.male} className="form-check-input" id="male"  onChange={handleInput}/>{' '}
                Male 
              </label>             
              <label htmlFor="female"  >              
                <input type="radio" name="gender" value={catRegister.female} className="form-check-input" id="female"  onChange={handleInput}/>{' '}
                Female                
              </label>
            </div>           
          
            <lable htmlFor="dateofborth">Date of Birth </lable><br></br>
            <input class="bi bi-calendar-fill" value={catRegister.dateofborth} type="date" name="dateofborth" id="dateofborth" onChange={handleInput}></input><br></br>

            <lable htmlFor="weight">Currernt weight (in Kg) </lable><br></br>
            <input type="number" value={catRegister.weight} name="weight" id="weight" placeholder="Enter wieght" onChange={handleInput}></input><br></br>

        </div>
        <button type="submit" style={{marginTop: "15px"}} > Save and proceed</button>
      </form>
    </div>
  );
}; 


export default App;