import { useState } from "react"

const Button = ({ show, setShow }) => {
    return (
        <button className={`text-white  font-semibold ${show ? 'bg-blue-600' : ''} hover:bg-sky-600 hover:border-purple-700 transition-all delay-100 ease-linear border-2 p-2 rounded-lg shadow-xl  border-blue-600`} onClick={() => setShow(!show)}>Concept I Learned</button>
    )
}

export default Button
