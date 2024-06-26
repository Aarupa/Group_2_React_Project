const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-100 w-full pt-10">
            <div className="px-6 lg:px-20 w-full">
                <div className="flex flex-wrap justify-between mb-10">
                    {/* Contact Us Section */}
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="text-gray-400">
                            <strong>Address:</strong> 1234 Health St, Wellness City, HC 56789<br />
                            <strong>Phone:</strong> (123) 456-7890<br />
                            <strong>Email:</strong> <a href="mailto:contact@healthcare.com" className="hover:text-blue-400">contact@healthcare.com</a>
                        </p>
                        <div className="mt-4">
                            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                            <ul className="flex space-x-6">
                                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Facebook</a></li>
                                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a></li>
                                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Instagram</a></li>
                                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Operating Hours Section */}
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Operating Hours</h3>
                        <ul className="text-gray-400">
                            <li className="mb-2">Mon - Fri: 9:00 AM - 8:00 PM</li>
                            <li className="mb-2">Sat: 10:00 AM - 5:00 PM</li>
                            <li className="mb-2">Sun: Closed</li>
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Services</h3>
                        <ul className="text-gray-400">
                            <li className="mb-2"><a href="#" className="hover:text-blue-400">General Consultation</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-400">Emergency Care</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-400">Surgery</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-400">Pediatrics</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-400">Pharmacy</a></li>
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="text-gray-400">
                            <li className="mb-2"><a href="/about" className="hover:text-blue-400">About Us</a></li>
                            <li className="mb-2"><a href="/services" className="hover:text-blue-400">Services</a></li>
                            <li className="mb-2"><a href="/contact" className="hover:text-blue-400">Contact</a></li>
                            <li className="mb-2"><a href="/faq" className="hover:text-blue-400">FAQ</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 mt-10 p-2 text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} - Healthcare | All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
