import { nanoid } from "nanoid";
import { useState } from "react";
import mockData from "../../mock-data.json"
function UserInterface() {

  const [userData, setUserData] = useState([])
  const [formData, setFormData] = useState({
    fullName:"",
    address:"",
    phoneNumber:"",
    email:"",
    id: nanoid(),
  })
const handleChange=(event)=>{
  event.preventDefault();
  // const fieldName = event.target.getAttribute('name')
  // const newFormData ={...formData};
  // newFormData[fieldName] = event.target.value;
  // setFormData(newFormData)
  setFormData((prevValue)=>({...prevValue, [event.target.name] : event.target.value
  }))
}

const handleSubmit = (event)=>{
  event.preventDefault();
// const newContact = {
//   fullName: formData.fullName,
//   address:formData.address,
//   phoneNumber: formData.phoneNumber,
//   email: formData.email,
//   id: formData.id,
// }
// const contacts = [...userData, newContact ]
setUserData([...userData, {
  fullName: formData.fullName,
  address:formData.address,
  phoneNumber: formData.phoneNumber,
  email: formData.email,
  id: formData.id,
} ]) 
}

  return (
    <div>
      <table id="customers">
       {userData && (<thead>
          <tr>
            <th>S.No.</th>
            <th>Full Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>email</th>
          </tr>
        </thead>)}
        <tbody>{ userData.map(x=>{
        return <tr key = {x.id}>
          <td>{x.id}</td>
          <td>{x.fullName}</td>
          <td>{x.address}</td>
          <td>{x.phoneNumber}</td>
          <td>{x.email}</td>
        </tr>})
          }
         
        </tbody>
      </table>
          <h2>Add Contacts Details</h2>
      <form onSubmit={handleSubmit}>
        <input 
        placeholder="Full Name"
        type="text"
        id="fullName"
        name="fullName"
        onChange={handleChange}
        required="required"

        />
        <input 
         placeholder="address"
         type="text"
         id="address"
         name="address"
        onChange={handleChange}
        required="required"


        />
        <input 
         placeholder="phone number"
         type="number"
         id="phoneNumber"
         name="phoneNumber"
         onChange={handleChange}
        required="required"

        />
        <input 
         placeholder="Email:"
         type="email"
         id="email"
         name="email"
         onChange={handleChange}
        required="required"

        />
        
        <button type="submit">Add Person</button>
      </form>
    </div>
  );
}
export default UserInterface;
