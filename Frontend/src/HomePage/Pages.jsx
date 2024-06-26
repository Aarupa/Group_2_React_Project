function Pages() {
    return (
        <div className="h-[90vh] bg-white flex flex-col md:flex-row items-center justify-around shadow-lg">
            <div className="w-full md:w-[40%] px-6 text-left">
                <h1 className="text-2xl md:text-4xl lg:text-5xl text-black font-bold mb-4">
                    Your New <span className="text-teal-500 hover:text-teal-600 transition-colors duration-300 animate-bounce">Smile</span>  <br/> Starts Here
                </h1>
                <p className="text-base md:text-lg text-slate-600 font-bold mb-6">
                    Your well-being is our top priority. Health encompasses a range of conditions, from common illnesses and chronic diseases to dental care and mental health. At Medicare, we offer comprehensive services to address all your health needs. Our dedicated team of professionals is here to support you in achieving a healthier, happier life. Book your appointment today and take the first step towards complete well-being!
                </p>
                <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded shadow-md transition duration-300 transform hover:scale-105">
                    GET APPOINTMENT
                </button>
            </div>
            {/* Conditionally render the image for larger devices */}
            <div className="hidden md:block w-[45%] mt-6 md:mt-0">
                <img className="w-full" src="https://doctors-portal-visit.web.app/static/media/Mask%20Group%201.f112c368.png" alt="Dentist smiling at a patient" />
            </div>
        </div>
    );
}

export default Pages;









