import React, { useState } from 'react';

const Appointment = () => {
    const [formData, setFormData] = useState({
        patientName: '',
        email: '',
        phone: '',
        doctor: '',
        appointmentDate: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div className="container mx-auto px-20 py-5">
            <h1 className="justify-center text-2xl font-bold mb-4">Doctor Appointment Form</h1>
            <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="patientName" className="block text-gray-700 font-bold mb-2">Patient Name:</label>
                    <input type="text" id="patientName" name="patientName" value={formData.patientName} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone:</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="doctor" className="block text-gray-700 font-bold mb-2">Doctor:</label>
                    <select id="doctor" name="doctor" value={formData.doctor} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option value="">Select Doctor</option>
                        <option value="Dr. Smith">Dr. Smith</option>
                        <option value="Dr. Johnson">Dr. Johnson</option>
                        <option value="Dr. Williams">Dr. Williams</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="appointmentDate" className="block text-gray-700 font-bold mb-2">Preferred Appointment Date:</label>
                    <input type="date" id="appointmentDate" name="appointmentDate" value={formData.appointmentDate} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Additional Message (optional):</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows="4" cols="50" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Appointment</button>
            </form>
        </div>
    );
};

export default Appointment;