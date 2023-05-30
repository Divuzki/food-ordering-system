import React, { useState } from 'react';
import swal from 'sweetalert';
import { useDelivery } from '../../contexts/DeliveryProvider';
import useAuth from '../../hooks/useAuth';
import TextField from '../Form/TextField';

const DeliveryForm = () => {
    const { user } = useAuth()

    const [change, setChange] = useState({
        hostel: '',
        roomNo: '',
        flatno: '',
        name: `${user.displayName}`
    })
    const { setInput, setDisabled } = useDelivery();

    //handle Change 
    const handleChange = (e) => {
        const { value, name } = e.target;
        setChange((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })

    }

    //handle Submit 
    const handleSubmit = (e) => {
        e.preventDefault();
        setInput({
            hostel: change.hostel,
            roomNo: change.roomNo,
            flatno: change.flatno,
            name: change.name
        })
        swal("Information Updated!", "Your shipping details updated successfully!", "success")
        setDisabled(false)
    }

    return (
        <div className="flex flex-col mt-20">
            <h1 className="text-2xl poppins pb-4 border-b border-gray-500 text-gray-700">Edit Delivery Details</h1>
            <form className="my-4" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-3">
                    <TextField
                        type="text"
                        placeholder="Hostel Name"
                        name="hostel"
                        value={change.hostel}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        type="text"
                        placeholder="Room Number"
                        name="roomNo"
                        value={change.roomNo}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        type="text"
                        placeholder="Flat Number"
                        name="flatno"
                        value={change.flatno}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        type="text"
                        placeholder="Delivery to"
                        name="name"
                        value={change.name}
                        onChange={handleChange}
                        required
                    />
                    <button className="w-full px-6 py-3 rounded-lg bg-primary text-white poppins ring-red-300 focus:ring-4 transition duration-500">Save & Continue</button>
                </div>
            </form>
        </div>
    )
}

export default DeliveryForm
