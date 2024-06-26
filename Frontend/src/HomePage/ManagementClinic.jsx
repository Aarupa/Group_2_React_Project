

import React from 'react'

function ManagementClinic() {
    return (
        <>
            <div className='h-[90vh] flex flex-col md:flex-row justify-around items-center' >
                <div className='hidden md:block w-[90%] md:w-[45%] mb-6 md:mb-0'>
                    <img src="https://docpulse.com/wp-content/uploads/2024/02/clinic-management-001.jpg" alt="Dentist smiling at a patient" className="w-full"/>
                </div>
                <div className="w-[90%] md:w-[50%] px-6 items-center">
                    <h1 className="text-black text-2xl md:text-4xl font-bold mb-4">
                        Medical Practice Management Software
                    </h1>
                    <p className="text-slate-600 text-lg md:text-xl font-bold mb-6">
                        Our platform offers a streamlined process for patients to select doctors based on their specialty and book appointments conveniently. This user-friendly system enhances accessibility to healthcare services, ensuring efficient scheduling and minimizing wait times. By focusing on ease of use and accessibility, we aim to improve the overall patient experience and facilitate better health outcomes.
                    </p>
                    <button className="bg-teal-500 font-bold py-3 px-4 rounded shadow">
                        Click Here
                    </button>
                </div>
            </div>
        </>
    )
}

export default ManagementClinic;