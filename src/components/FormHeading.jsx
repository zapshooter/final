import React from 'react'

const FormHeading = (props) => {
  return (
    <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{props.heading}</h2>
            </div>
  )
}

export default FormHeading