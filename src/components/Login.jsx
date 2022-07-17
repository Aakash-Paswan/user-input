import { Formik } from "formik";
import { useState } from "react";
import { Input } from "@material-tailwind/react";
import { useEffect } from "react";
import axios from "axios";
function Login() {
  const [data, setData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(  () => {
   const reteriveData =async ()=>{
    await axios.get('http://localhost:3000/user')
    .then(res=>{
        console.log(res.data);
        setData(res.data)
    })
   }
   reteriveData();
    
  }, [])
  console.log("data", data);
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          address: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        //   const newData = {...values}
          setData((prevData) => [...prevData, values]);
          axios.post('http://localhost:3000/user', values)
        }}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form className="flex flex-col justify-center items-center w-1/2 items-end gap-4 text-center" onSubmit={handleSubmit}>
            <Input
              variant="outlined"
              type="text"
              name="firstName"
              id="firstName"
              onChange={handleChange}
              value={values.fullName}
              placeholder="First Name"

            />
            <Input
              variant="outlined"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={values.lastName}
            />
            <Input
              variant="outlined"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              value={values.email}
            />
            <Input
              variant="outlined"
              type="text"
              name="address"
              id="address"
              placeholder="Full Address"
              onChange={handleChange}
              value={values.address}
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" type="submit">Submit</button>
          </form>
        )}
      </Formik>
      <table className="w-full">
        <thead className="border-b">
          <tr>
            <th>FirstName</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x) => {
           return <tr key = {x.id}>
              <td>{x.firstName}</td>
              <td>{x.lastName}</td>
              <td>{x.email}</td>
              <td>{x.address}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Login;
