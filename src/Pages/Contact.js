import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import augmentIcon from '../assets/argue.png';
import newProjectIcon from '../assets/project.png';
import teamsicon from '../assets/teamwork.png';
const ContactUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen p-8 font-tomato">
        <div className="text-2xl mt-30px mb-40px">Contact Us</div>
        
        
        <main className="mt-8">
          <h1 className="text-6xl font-bold mb-4">Let's build <span className="text-blue-500">together</span></h1>
          <p className="mb-8 text-2xl">Whether you're a startup trying to launch a business or an enterprise looking to scale up, there's definitely something we can do for you.</p>
          
          <div className="flex">
            <div className="w-3/6">
              <img src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=600" alt="People working together" className="rounded-md"/>
            </div>
            <div className="w-1/2">
              <h2 className="text-5xl font-bold mb-4">Simply fill out <span className="text-blue-500">this form</span></h2>
              <p className="mb-8">We will promptly respond to your inquiry to discuss potential collaboration opportunities. You can expect to hear from us within two business days.</p>

              <form className="space-y-4 text-xl">
                <div>
                  <label htmlFor="name" className="block mb-4 text-2xl">Your full name</label>
                  <input type="text" id="name" placeholder="eg. John Singh" className="w-full p-2 border rounded bg-black border-gray-700" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-4 text-2xl">Your email address</label>
                  <input type="email" id="email" placeholder="eg. you@example.com" className="w-full p-2 border rounded bg-black border-gray-700" />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-4 text-2xl">Company Name</label>
                  <input type="text" id="company" placeholder="eg. Your Company" className="w-full p-2 border rounded bg-black border-gray-700" />
                </div>
                <div>
                  <label className="block mb-4 text-2xl">How do you want to work with us?</label>
                  <div className="space-y-2">
                    <div className="flex items-center p-4 border rounded border-gray-700">
                      <input type="radio" id="augment" name="workWithUs" className="mr-4" />
                      <label htmlFor="augment" className="flex items-center cursor-pointer w-full">
                        <img src={augmentIcon} alt="Augment Icon" className="w-10 h-10 mr-4"/>
                        <div>
                          <h3 className="text-xl">Augment my existing team</h3>
                          <p className="text-sm text-gray-400">Expand capacity and boost efficiency for success!</p>
                        </div>
                      </label>
                    </div>
                    <div className="flex items-center p-4 border rounded border-gray-700">
                      <input type="radio" id="newProject" name="workWithUs" className="mr-4" />
                      <label htmlFor="newProject" className="flex items-center cursor-pointer w-full">
                        <img src={newProjectIcon} alt="New Project Icon" className="w-10 h-10 mr-4"/>
                        <div>
                          <h3 className="text-xl">I have a new project</h3>
                          <p className="text-sm text-gray-400">Turn ideas into reality with our project prowess</p>
                        </div>
                      </label>
                    </div>
                    <div className="flex items-center p-4 border rounded border-gray-700">
                      <input type="radio" id="dedicatedTeam" name="workWithUs" className="mr-4" />
                      <label htmlFor="dedicatedTeam" className="flex items-center cursor-pointer w-full">
                        <img src={teamsicon} alt="Dedicated Team Icon" className="w-10 h-10 mr-4"/>
                        <div>
                          <h3 className="text-xl">I want a dedicated team for my project</h3>
                          <p className="text-sm text-gray-400">Your goal for excellence is our team's focus</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-4 text-2xl">What is your phone number?</label>
                  <input type="text" id="phone" placeholder="Enter your number" className="w-full p-2 border rounded bg-black border-gray-700" />
                </div>
                <div>
                  <label htmlFor="project" className="block mb-4 text-2xl">Tell us something about your project</label>
                  <textarea id="project" placeholder="eg. I am looking to develop this incredible app that..." className="w-full p-10 border rounded bg-black border-gray-700"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 px-4 py-2 rounded text-black">Send A Message</button>
              </form>
            </div>
          </div>

          <section className="mt-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-blue-500">Looking for a job?</h2>
                <p className="mt-2">There is always an exciting position open that you can apply right away. Don’t worry even if there’s not something that suits you immediately, we will get in touch when it becomes available!</p>
                <button type="submit" className="bg-blue-500 px-4 py-2 mb-2 mt-4 rounded text-black">Apply Now</button>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-500">Get an internship</h2>
                <p className="mt-2">Check out our internship page and ways to get in touch if you’re looking to get an internship at Leapfrog.</p>
                <button type="submit" className="bg-blue-500 px-4 py-2 mt-4 rounded text-black">Become an Intern</button>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default ContactUsPage;
