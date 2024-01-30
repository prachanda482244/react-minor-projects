import { useState } from "react"

const Button = ({ name = 'Concept I Learned', show, setShow }) => {
    return (
        <button className={`text-white  font-semibold ${show ? 'bg-blue-600' : ''} hover:bg-sky-600 hover:border-purple-700 transition-all delay-100 ease-linear border-2 p-1 rounded-lg shadow-xl  border-blue-600`} onClick={() => setShow(!show)}>{name}</button>
    )
}

export default Button
