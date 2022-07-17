import { Formik } from "formik"
import { useState } from "react"

function Login() {
    const [data, setData]=useState([])
  return (
    <div>
        <Formik initialValues={
            {
                firstName:"",
                lastName:"",
                email:"",
                address:"",
            }
        }
        onSubmit={values=>{
            console.log(values)
            // const newData = {...values}
            setData(prevData=>[...prevData, values])
        }}
        >
       {({values, handleSubmit, handleChange})=>(
         <form onSubmit={handleSubmit}>
         <input type="text"  name="firstName" id="firstName" placeholder="First Name" onChange={handleChange}  value={values.fullName} />
         <input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={handleChange}  value={values.lastName}/>
         <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} value={values.email}/>
         <input type="text" name="address" id="address" placeholder="Full Address" onChange={handleChange} value={values.address}/>
         <button type="submit">Submit</button>

     </form>
       )}

        </Formik>
    <table border='1'>
        <thead >
            <tr>
                <th>FirstName</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
           { data.map((x)=>(<tr>
                <td>{x.firstName}</td>
                <td>{x.lastName}</td>
                <td>{x.email}</td>
                <td>{x.address}</td>

            </tr>))}
        </tbody>
    </table>


    </div>
  )
}
export default Login