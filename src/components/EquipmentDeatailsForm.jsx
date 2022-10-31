import React from 'react'
import Form from './Form'
import FormHeading from './FormHeading'
import { Button } from './Button'

const EquipmentDetailsForm = () => {
  return (
    <>
        <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <FormHeading  heading="Tractor Details Entry"/>
            <div class="relative max-w-md mx-auto mt-8 md:mt-16">
                <div class="overflow-hidden bg-white rounded-md shadow-md">
                    <div class="px-4 py-6 sm:px-8 sm:py-7">
                        <form action="#" method="POST">
                            <div class="space-y-5">
                                <Form name="Tractor No." placeholder="Enter Tractor No." />
                                <Form name="Year" placeholder="Enter Year" />
                                <Form name="Terminal" placeholder="Enter Terminal" />
                                <Form name="ELD" placeholder="Enter ELD" />
                                <Form name="Axels" placeholder="Enter Axeels" />
                                <Form name="Owner" placeholder="Enter Owner" />
                                <Form name="Type" placeholder="Enter Type" />
                                <Form name="Weight" placeholder="Enter Weight" />
                                <Form name="PM" placeholder="Enter PM" />
                                <Form name="Date of Annual Safety Inspection" placeholder="Enter Date" />
                                <Form name="License Plate" placeholder="Enter License Plate" />
                                <Form name="Contact" placeholder="Enter Contact" />
                                <Form name="Tractor Status" placeholder="Enter Tractor Status" />
                                <Form name="VIN" placeholder="Enter VIN" />
                                <Form name="Fire Extinguisher" placeholder="Enter Fire Extinguisher" />
                                <Form name="Fire Tire Size" placeholder="Enter Tire Size" />
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

export default EquipmentDetailsForm