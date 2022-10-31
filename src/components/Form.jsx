import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Form = (props) => {
    // const navigate=useNavigate();
    // const[details,setDetails]=useEffect({
    //     name:"",
    // })

    // const handleChange=((event) => {
    //     console.log(event.target)

    // })
  return (
        
                                <div>
                                    <label for="" class="text-base font-medium text-gray-900">{props.name}</label>
                                    <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">                                            
                                        </div>
    
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder={props.placeholder}
                                            class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                            // onChange={handleChange}
                                        />
                                    </div>
                                </div>
    
  )
}

export default Form