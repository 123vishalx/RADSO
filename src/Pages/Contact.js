import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import newProjectIcon from '../assets/project.png';
import axios from 'axios';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    workWithUs: '',
    phone: '',
    project: '',
  });

  const handleChange = (e) => {
    const { id, value, type } = e.target;
    if (type === 'radio') {
      setFormData((prev) => ({ ...prev, workWithUs: value }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://backend-llye.vercel.app/api/contact', formData);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        company: '',
        workWithUs: '',
        phone: '',
        project: '',
      }); // Reset form after submission
    } catch (error) {
      console.error(error);
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen p-8 font-tomato">
        <main className="mt-8">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4">
              <img src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=600" alt="People working together" className="rounded-md"/>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-3xl font-bold mb-4">Simply fill out <span className="text-blue-500">this form</span></h2>
              <p className="mb-6">We will promptly respond to your inquiry to discuss potential collaboration opportunities. You can expect to hear from us within two business days.</p>

              <form className="space-y-4 text-lg" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-lg">Your full name</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="eg. John Singh" className="w-full p-2 border rounded bg-black border-gray-700" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-lg">Your email address</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="eg. you@example.com" className="w-full p-2 border rounded bg-black border-gray-700" />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-2 text-lg">Company Name</label>
                  <input type="text" id="company" value={formData.company} onChange={handleChange} placeholder="eg. Your Company" className="w-full p-2 border rounded bg-black border-gray-700" />
                </div>
                <div>
                  <label className="block mb-2 text-lg">How do you want to work with us?</label>
                  <div className="space-y-2">
                    <div className="flex items-center p-4 border rounded border-gray-700 transition-transform transform hover:scale-105">
                      <input type="radio" id="augment" name="workWithUs" value="Augment my existing team" checked={formData.workWithUs === 'Augment my existing team'} onChange={handleChange} className="mr-4 w-6 h-6" />
                      <label htmlFor="augment" className="flex items-center cursor-pointer w-full">
                        <img src={newProjectIcon} alt="Augment Icon" className="w-8 h-8 mr-4"/>
                        <div>
                          <h3 className="text-lg">Augment my existing team</h3>
                          <p className="text-sm text-gray-400">Expand capacity and boost efficiency for success!</p>
                        </div>
                      </label>
                    </div>
                    <div className="flex items-center p-4 border rounded border-gray-700 transition-transform transform hover:scale-105">
                      <input type="radio" id="newProject" name="workWithUs" value="I have a new project" checked={formData.workWithUs === 'I have a new project'} onChange={handleChange} className="mr-4 w-6 h-6" />
                      <label htmlFor="newProject" className="flex items-center cursor-pointer w-full">
                        <img src={newProjectIcon} alt="New Project Icon" className="w-8 h-8 mr-4"/>
                        <div>
                          <h3 className="text-lg">I have a new project</h3>
                          <p className="text-sm text-gray-400">Turn ideas into reality with our project prowess</p>
                        </div>
                      </label>
                    </div>
                    <div className="flex items-center p-4 border rounded border-gray-700 transition-transform transform hover:scale-105">
                      <input type="radio" id="other" name="workWithUs" value="Other" checked={formData.workWithUs === 'Other'} onChange={handleChange} className="mr-4 w-6 h-6" />
                      <label htmlFor="other" className="flex items-center cursor-pointer w-full">
                        <img src={newProjectIcon} alt="Other Icon" className="w-8 h-8 mr-4"/>
                        <div>
                          <h3 className="text-lg">Other</h3>
                          <p className="text-sm text-gray-400">Explore various collaboration options</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-lg">Phone Number</label>
                  <input type="text" id="phone" value={formData.phone} onChange={handleChange} placeholder="eg. +1-123-456-7890" className="w-full p-2 border rounded bg-black border-gray-700" />
                </div>
                <div>
                  <label htmlFor="project" className="block mb-2 text-lg">Project Details</label>
                  <textarea id="project" value={formData.project} onChange={handleChange} placeholder="Describe your project" rows="4" className="w-full p-2 border rounded bg-black border-gray-700"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Send  Message</button>

              </form>
              
            </div>
            <section className="mt-12 flex flex-col md:flex-row gap-8">
            <div className="card bg-gray-800 p-6 rounded-lg shadow-lg w-full transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Looking for a job?</h2>
              <p className="text-sm mb-4">There is always an exciting position open that you can apply right away. Don’t worry even if there’s not something that suits you immediately, we will get in touch when it becomes available!</p>
              <button type="button" className="bg-blue-500 px-4 py-2 mt-2 rounded text-black transition-transform transform hover:scale-105">Apply Now</button>
            </div>
            <div className="card bg-gray-800 p-6 rounded-lg shadow-lg w-full transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Get an internship</h2>
              <p className="text-sm mb-4">Check out our internship page and ways to get in touch if you’re looking to get an internship at Radso Innovations.</p>
              <button type="button" className="bg-blue-500 px-4 py-2 mt-2 rounded text-black transition-transform transform hover:scale-105">Become an Intern</button>
            </div>
          </section>
        

          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
