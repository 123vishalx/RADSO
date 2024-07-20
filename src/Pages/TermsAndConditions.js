import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const TermsAndConditions = () => {
    return (
        <>
        <Navbar/>
        <div className="bg-black text-white min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl  mb-4 font-serif ">Terms and Conditions</h1>
                <h3 className="text-2xl font-bold  mt-8 mb-10 font-serif bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">Radso Innovations Pvt.Ltd. Terms and Conditions </h3>
                <section className="mb-8">
                    
                    <p className="font-serif  text-1.5xl">Welcome to Radso Technology. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website and using our services, you agree to comply with and be bound by these terms. If you disagree with any part of these terms, please do not use our website or services.</p>
                </section>
                
                <section className="mb-8">
                    
                    <ul className="list-disc list-inside">
                        <li><strong>Company:</strong> Radso Technology</li>
                        <li><strong>User:</strong> Any individual or entity accessing our website or using our services</li>
                        <li><strong>Services:</strong> All products and services offered by Radso Technology, including assembly automation and advanced industrial products</li>
                    </ul>
                </section>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 font-sans bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text"> Use of Services</h2>
                    <p className="font-serif "><strong> Eligibility:</strong> Users must be at least 18 years old to use our services.</p>
                    <p className="font-serif  "><strong> User Obligations:</strong> Users agree to use our services only for lawful purposes and in accordance with these terms. Users must not use our services in any way that could harm our business or reputation.</p>
                    <p className="font-serif "><strong> Account Security:</strong> Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 font-sans bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text"> Intellectual Property</h2>
                    <p className="font-serif"><strong> Ownership:</strong> All content, trademarks, logos, and intellectual property on our website are owned by Radso Technology or our licensors. Users may not use any of our intellectual property without prior written consent.</p>
                    <p className="font-serif"><strong> License:</strong> Users are granted a limited, non-exclusive, and revocable license to access and use our website for personal or commercial purposes, in accordance with these terms.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 font-sans bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text"> Product and Service Terms</h2>
                    <p className="font-serif"><strong> Orders:</strong> All orders placed through our website are subject to acceptance by Radso Technology. We reserve the right to refuse or cancel any order at any time.</p>
                    <p className="font-serif"><strong> Pricing:</strong> Prices for our products and services are subject to change without notice. We are not responsible for any typographical errors in pricing.</p>
                    <p className="font-serif"><strong> Payment:</strong> Payment for orders must be made in full at the time of purchase. We accept various forms of payment as indicated on our website.</p>
                    <p className="font-serif"><strong> Delivery:</strong> We will make every effort to deliver products and services in a timely manner. However, we are not responsible for any delays beyond our control.</p>
                    <p className="font-serif"><strong> Returns and Refunds:</strong> Our return and refund policy is outlined on our website. Please refer to this policy for information on returns and refunds.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 font-sans bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text"> Limitation of Liability</h2>
                    <p className="font-serif">Radso Technology will not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, even if we have been advised of the possibility of such damages.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 font-sans bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text"> Indemnification</h2>
                    <p className="font-serif">Users agree to indemnify and hold Radso Technology harmless from any claims, damages, losses, liabilities, and expenses arising out of or related to their use of our services or violation of these terms.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 font-sans bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">Termination</h2>
                    <p className="font-serif">We reserve the right to terminate or suspend access to our services at any time, without notice, for any reason, including but not limited to violation of these terms.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 font-sans bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text"> Governing Law</h2>
                    <p className="font-serif">These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Radso Technology is registered, without regard to its conflict of law provisions.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 font-sans bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text"> Changes to Terms</h2>
                    <p className="font-serif">Radso Technology reserves the right to update or modify these terms and conditions at any time. Users are encouraged to review these terms periodically for any changes. Continued use of our services after any changes constitute acceptance of the new terms.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 font-sans bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">11. Contact Information</h2>
                    <p className="font-serif">If you have any questions or concerns about these terms and conditions, please contact us at:</p>
                    <ul className="list-disc list-inside">
                        <li>Email: dhiviya@radso.com</li>
                        <li>Phone: +91 9944481798</li>
                        <li>Address: Coimbatore, Tamil Nadu, India</li>
                    </ul>
                </section>
            </div>
            <Footer/>
        </div>
        </>
    );
}

export default TermsAndConditions;