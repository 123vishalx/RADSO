import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import newProjectIcon from '../assets/project.png';


const ContactUsPage = () => {
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

              <form className="space-y-4 text-lg">
                <div>
                  <label htmlFor="name" className="block mb-2 text-lg">Your full name</label>
                  <input type="text" id="name" placeholder="eg. John Singh" className="w-full p-2 border rounded bg-black border-gray-700" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-lg">Your email address</label>
                  <input type="email" id="email" placeholder="eg. you@example.com" className="w-full p-2 border rounded bg-black border-gray-700" />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-2 text-lg">Company Name</label>
                  <input type="text" id="company" placeholder="eg. Your Company" className="w-full p-2 border rounded bg-black border-gray-700" />
                </div>
                <div>
                  <label className="block mb-2 text-lg">How do you want to work with us?</label>
                  <div className="space-y-2">
                    <div className="flex items-center p-4 border rounded border-gray-700 transition-transform transform hover:scale-105">
                      <input type="radio" id="augment" name="workWithUs" className="mr-4 w-6 h-6" />
                      <label htmlFor="augment" className="flex items-center cursor-pointer w-full">
                        <img src={newProjectIcon} alt="Augment Icon" className="w-8 h-8 mr-4"/>
                        <div>
                          <h3 className="text-lg">Augment my existing team</h3>
                          <p className="text-sm text-gray-400">Expand capacity and boost efficiency for success!</p>
                        </div>
                      </label>
                    </div>
                    <div className="flex items-center p-4 border rounded border-gray-700 transition-transform transform hover:scale-105">
                      <input type="radio" id="newProject" name="workWithUs" className="mr-4 w-6 h-6" />
                      <label htmlFor="newProject" className="flex items-center cursor-pointer w-full">
                        <img src={newProjectIcon} alt="New Project Icon" className="w-8 h-8 mr-4"/>
                        <div>
                          <h3 className="text-lg">I have a new project</h3>
                          <p className="text-sm text-gray-400">Turn ideas into reality with our project prowess</p>
                        </div>
                      </label>
                    </div>
                    <div className="flex items-center p-4 border rounded border-gray-700 transition-transform transform hover:scale-105">
                      <input type="radio" id="dedicatedTeam" name="workWithUs" className="mr-4 w-6 h-6" />
                      <label htmlFor="dedicatedTeam" className="flex items-center cursor-pointer w-full">
                        <img src={newProjectIcon} alt="Dedicated Team Icon" className="w-8 h-8 mr-4"/>
                        <div>
                          <h3 className="text-lg">I want a dedicated team for my project</h3>
                          <p className="text-sm text-gray-400">Your goal for excellence is our team's focus</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-lg">What is your phone number?</label>
                  <input type="text" id="phone" placeholder="Enter your number" className="w-full p-2 border rounded bg-black border-gray-700" />
                </div>
                <div>
                  <label htmlFor="project" className="block mb-2 text-lg">Tell us something about your project</label>
                  <textarea id="project" placeholder="eg. I am looking to develop this incredible app that..." className="w-full p-4 border rounded bg-black border-gray-700"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 px-4 py-2 rounded text-black transition-transform transform hover:scale-105">Send A Message</button>
              </form>
            </div>
          </div>

          <section className="mt-12 flex gap-8">
            <div className="card bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2 transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Looking for a job?</h2>
              <p className="text-sm mb-4">There is always an exciting position open that you can apply right away. Don’t worry even if there’s not something that suits you immediately, we will get in touch when it becomes available!</p>
              <button type="button" className="bg-blue-500 px-4 py-2 mt-2 rounded text-black transition-transform transform hover:scale-105">Apply Now</button>
            </div>
            <div className="card bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2 transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Get an internship</h2>
              <p className="text-sm mb-4">Check out our internship page and ways to get in touch if you’re looking to get an internship at Radso Innovations.</p>
              <button type="button" className="bg-blue-500 px-4 py-2 mt-2 rounded text-black transition-transform transform hover:scale-105">Become an Intern</button>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default ContactUsPage;
