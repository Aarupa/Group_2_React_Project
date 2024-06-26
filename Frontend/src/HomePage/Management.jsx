

function Management() {
    return (
        <div className='h-screen md:h-[90vh] flex flex-col md:flex-row items-center justify-around'>
            {/* Image section */}
            <div className='w-full md:w-[45%] mb-6 md:mb-0'>
                <img
                    src="https://docpulse.com/wp-content/uploads/2024/02/hospital-software0001.jpg"
                    alt="Medical Practice Management Software"
                    className='w-full h-auto'
                />
            </div>
            {/* Text section */}
            <div className='w-full md:w-[50%] px-6 text-center md:text-left'>
                <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                    Medical Practice Management Software
                </h1>
                <p className='text-xl md:text-2xl text-slate-600 font-bold mb-6'>
                    One-stop solution to manage all the aspects of OPD starting from patient
                    registration to generating digital prescriptions, bills and revenue analysis.
                    Pharmacy and Lab management is also simplified, enabling doctors to view lab
                    reports in the software. Customizable medical case sheets to create electronic
                    medical records (EMR).
                </p>
                <button className='bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded shadow-md'>
                    Click Here
                </button>
            </div>
        </div>
    );
}

export default Management;
