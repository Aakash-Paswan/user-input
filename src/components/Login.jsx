import { Formik } from "formik";
import { useState } from "react";
import { Input } from "@material-tailwind/react";
function Login() {
  const [data, setData] = useState([]);
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
          // const newData = {...values}
          setData((prevData) => [...prevData, values]);
        }}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form className="flex w-full items-end gap-4" onSubmit={handleSubmit}>
            <Input
              variant="outlined"
              type="text"
              name="firstName"
              id="firstName"
              onChange={handleChange}
              value={values.fullName}
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
      <table className="min-w-full">
        <thead className="border-b">
          <tr>
            <th>FirstName</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x) => (
            <tr>
              <td>{x.firstName}</td>
              <td>{x.lastName}</td>
              <td>{x.email}</td>
              <td>{x.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Login;
