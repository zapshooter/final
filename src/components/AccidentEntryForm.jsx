import React from 'react'
import Form from './Form'
import FormHeading from './FormHeading'
import { Button } from './Button'

const AccidentEntry = () => {
    return (
        <>
            <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <FormHeading  heading="Accident Entry"/>
                <div class="relative max-w-md mx-auto mt-8 md:mt-16">
                    <div class="overflow-hidden bg-white rounded-md shadow-md">
                        <div class="px-4 py-6 sm:px-8 sm:py-7">
                            <form action="#" method="POST">
                                <div class="space-y-5">
                                    <Form name="Select Accident" placeholder="Enter Select Accident" />
                                    <Form name="Start Date" placeholder="Enter Start Date" />
                                    <Form name="Driver" placeholder="Enter Driver" />
                                    <Form name="Driver License" placeholder="Enter Driver License" />
                                    <Form name="Road Type" placeholder="Road Type" />
                                    <Form name="Location" placeholder="Enter Location" />
                                    <Form name="Tractor" placeholder="Enter Tractor" />
                                    <Form name="Trailer" placeholder="Enter Trailer" />
                                    <Form name="Accident Type" placeholder="Enter Accident Type" />
                                    <Form name="Damages" placeholder="Enter Damages" />
                                    <Form name="Towing" placeholder="Enter Towing" />
                                    <Form name="Company Accident Report" placeholder="Enter Company Accident Report" />
                                    <Form name="Police Report" placeholder="Enter Police Dept Officer" />
                                    <Form name="Emergency Contact Number" placeholder="Enter Claim Number" />
                                    <Form name="Environmental" placeholder="Enter Adjuster" />
                                    <Form name="Correction And Training" placeholder="Enter Correction And Training" />
                                    <Form name="Driver Charged" placeholder="Enter Driver Charged" />
                                    <Form name="Action Taken" placeholder="Enter Action Taken" />
                                    <Form name="Preventable/Non-Preventable" placeholder="Enter Preventable/Non-Preventable" />
                                    <Form name="Cost" placeholder="Enter Cost" />
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

export default AccidentEntry