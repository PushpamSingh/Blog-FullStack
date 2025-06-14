import React, { useId } from "react";

export const Input=React.forwardRef(({
        type='text',
        label,
        className="",
        placeholder="Enter Your Input",
        ...props
        },ref)=>{

        const id=useId()
        return (
            <div className="w-full">
                {
                    label && (
                        <label 
                        className={`inline-block pl-1 mb-1`}
                        htmlFor={id}
                        >
                            {label}
                        </label>
                    )
                }
                <input 
                type={type} 
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                id={id}
                {...props}
                ref={ref}
                autoComplete=""
                placeholder={placeholder}
                />
            </div>
        )
    })