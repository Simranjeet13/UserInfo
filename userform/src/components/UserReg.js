import React, {useState} from 'react';
function UserReg() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [age,setAge] = useState(null);
    const [address,setAddress] = useState(null);
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "Age"){
            setAge(value);
        }
        if(id === "Address"){
            setAddress(value);
        }

    }
    const handleSubmit  = () => {
        console.log(firstName,lastName,email,age,address);
    }
    return(
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" onChange = {(e) => handleInputChange(e)} type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" onChange = {(e) => handleInputChange(e)} id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="age">
                  <label className="form__label" for="Age">Age</label>
                  <input className="form__input" onChange = {(e) => handleInputChange(e)} type="Age"  id="Age" placeholder="Age"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" onChange = {(e) => handleInputChange(e)} className="form__input" placeholder="Email"/>
              </div>
              <div className="Address">
                  <label className="form__label" for="Address">Address </label>
                  <input  type="Address" id="Address" onChange = {(e) => handleInputChange(e)} className="form__input" placeholder="Address"/>
              </div>
          </div>
          <div className="footer">
              <button onClick={()=>handleSubmit()} type="submit" className="btn">Register</button>
          </div>
      </div>      
    )       
}
export default UserReg;