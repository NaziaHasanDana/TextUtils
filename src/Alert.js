import React from 'react'

 export default function Alert(props) {
    const capitalize= (word)=>{
        const lower = word.toLowerCase();// conerts all the chr of string to lower case 
        return lower.charAt(0).toUpperCase() +lower.slice(1); //access the 1st string and capitalize it. and after that accesses the index 1 and makes all smaller
    }
  return (
    <div>
        {props.alert && props.alert.type && props.alert.msg && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        )}

    </div>




  )
}
