import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/about.jpg'; 
import aboutIcon1 from '../assets/about-icon-1.png';
import aboutIcon2 from '../assets/about-icon-2.png'; 
import workProcessImg1 from '../assets/work-process-img-1.jpg'; 
import workProcessImg2 from '../assets/work-process-img-2.jpg'; 
import workProcessImg3 from '../assets/work-process-img-3.jpg'; 
import workProcessImg4 from '../assets/work-process-img-4.jpg'; 
import teamImg1 from '../assets/team-img-1.jpg'; 
import teamImg2 from '../assets/team-img-2.jpg'; 
import teamImg3 from '../assets/team-img-3.jpg'; 
import teamImg4 from '../assets/team-img-4.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import backgroundImage from '../assets/ss121.png';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const AboutUsPage = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <section id="about" className="py-12">
        <motion.div
          className="container mx-auto px-4 flex flex-col md:flex-row items-center"
          initial="hidden"
          animate="visible"
          variants={slideIn}
        >
          <div className="md:w-1/2 ml-20">
            <img src={aboutImage} alt="About Us" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10">
            <h6 className="text-blue-500 text-xl uppercase mb-4">— About Us</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">We work on unique design factors</h2>
            <p className="text-gray-400 mb-10">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="w-12 h-12 mr-4">
                  <img src={aboutIcon1} alt="Experience Icon" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h5 className="text-xl font-bold">12 Years Experience</h5>
                  <p className="text-gray-400">
                    It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text..
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-12 h-12 mr-4">
                  <img src={aboutIcon2} alt="Tips Icon" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h5 className="text-xl font-bold">Unique Tips & Design</h5>
                  <p className="text-gray-400">
                    It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text..
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>
      <motion.div
        className="relative flex justify-center items-center h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <a
          href="https://www.youtube.com/watch?v=_2LLXnUdUIc"
          className="absolute w-16 h-16 bg-white rounded-full flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-10 h-10 text-black" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 15l6-3-6-3v6z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </a>
      </motion.div>
      <section id="work-process" className="py-12 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h6 className="text-blue-500 text-xl uppercase mb-2">— Work Process —</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
          <div className="flex flex-wrap justify-center">
            <motion.div className="w-full md:w-1/4 p-4" initial="hidden" animate="visible" variants={fadeIn}>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <img src={workProcessImg1} alt="Thinking" className="w-full h-48 object-cover rounded-lg mb-4" />
                <span>01</span>
                <h6 className="text-lg font-bold">Thinking</h6>
              </div>
            </motion.div>
            <motion.div className="w-full md:w-1/4 p-4" initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <img src={workProcessImg2} alt="Research" className="w-full h-48 object-cover rounded-lg mb-4" />
                <span>02</span>
                <h6 className="text-lg font-bold">Research</h6>
              </div>
            </motion.div>
            <motion.div className="w-full md:w-1/4 p-4" initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.4 }}>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <img src={workProcessImg3} alt="Wireframe" className="w-full h-48 object-cover rounded-lg mb-4" />
                <span>03</span>
                <h6 className="text-lg font-bold">Wireframe</h6>
              </div>
            </motion.div>
            <motion.div className="w-full md:w-1/4 p-4" initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.6 }}>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <img src={workProcessImg4} alt="Design" className="w-full h-48 object-cover rounded-lg mb-4" />
                <span>04</span>
                <h6 className="text-lg font-bold">Design</h6>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="team" className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h6 className="text-blue-500 text-xl uppercase mb-2">— Team</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center">
            <motion.div className="w-full md:w-1/4 p-4" initial="hidden" animate="visible" variants={fadeIn}>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <img src={teamImg1} alt="Team Member 1" className="w-full h-55 object-cover rounded-lg mb-4" />
                <h6 className="text-lg font-bold m-2">Dellon Thomas</h6>
                <span className="text-sm text-gray-400">Graphic Designer</span>
              </div>
            </motion.div>
            <motion.div className="w-full md:w-1/4 p-4" initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <img src={teamImg2} alt="Team Member 2" className="w-full h-55 object-cover rounded-lg mb-4" />
                <h6 className="text-lg font-bold m-2">Dellon Thomas</h6>
                <span className="text-sm text-gray-400">Graphic Designer</span>
              </div>
            </motion.div>
            <motion.div className="w-full md:w-1/4 p-4" initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.4 }}>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <img src={teamImg3} alt="Team Member 3" className="w-full h-55 object-cover rounded-lg mb-4" />
                <h6 className="text-lg font-bold m-2">Dellon Thomas</h6>
                <span className="text-sm text-gray-400">Graphic Designer</span>
              </div>
            </motion.div>
            <motion.div className="w-full md:w-1/4 p-4" initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.6 }}>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <img src={teamImg4} alt="Team Member 4" className="w-full h-55 object-cover rounded-lg mb-4" />
                <h6 className="text-lg font-bold m-2">Dellon Thomas</h6>
                <span className="text-sm text-gray-400">Graphic Designer</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
