import { Fragment } from "react"

function index(props) {
    
  return (
    <Fragment>
        {/* <label>{props.label}</label> */}
        <input type={props.type} name={props.name} id={props.id} value={props.value} placeholder={props.placeholder} required={props.required}/>
    
    </Fragment>
  )
}
export default index