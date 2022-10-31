import React from 'react'
import Form from './Form'
import FormHeading from './FormHeading'
import { Button } from './Button'

const DriverDetailsEntry = () => {
    return (
        <>
            <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <FormHeading  heading="Driver Details"/>
                <div class="relative max-w-md mx-auto mt-8 md:mt-16">
                    <div class="overflow-hidden bg-white rounded-md shadow-md">
                        <div class="px-4 py-6 sm:px-8 sm:py-7">
                            <form action="#" method="POST">
                                <div class="space-y-5">
                                    <Form name="Employee Name" placeholder="Enter Employee Name" />
                                    <Form name="Start Date" placeholder="Enter Start Date" />
                                    <Form name="Terminal" placeholder="Enter Terminal" />
                                    <Form name="Driver License" placeholder="Enter Driver License" />
                                    <Form name="Expiry" placeholder="Enter Expiry" />
                                    <Form name="Shift" placeholder="Enter Shift" />
                                    <Form name="Employee Type" placeholder="Enter Employee Type" />
                                    <Form name="Employee Status" placeholder="Enter Employee Status" />
                                    <Form name="Semi Annual Review" placeholder="Enter Semi Annual Review" />
                                    <Form name="Medical Expiry Date" placeholder="Enter Medical Expiry Date" />
                                    <Form name="Supervisor" placeholder="Enter Supervisor" />
                                    <Form name="Phone Number" placeholder="Enter Phone Number" />
                                    <Form name="Employee ID" placeholder="Enter Employee ID" />
                                    <Form name="Emergency Contact Number" placeholder="Enter Emergency Contact Number" />
                                    <Form name="CVOR Points" placeholder="Enter CVOR Points" />
                                </div>
                                <Button />
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
        </section>    
        </>
        
      )
}

export default DriverDetailsEntry   