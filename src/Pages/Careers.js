import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import dataScientistSVG from "../assets/data-scientist.svg";
import softwareSVG from "../assets/software-engineer.svg";
import projectmanagerSVG from "../assets/project-manager.svg";
import productmanagerSVG from "../assets/product-manager.svg";
import salesreprentativeSVG from "../assets/sales-representative.svg";
import marketingmanagerSVG from "../assets/marketing-manager.svg";

const jobs = [
  {
    title: "Software Engineer",
    image: softwareSVG,
    details:
      "Responsible for designing, developing and maintaining software systems and applications.",
    openPositions: "2",
    link: "#!",
  },
  {
    title: "Data Scientist",
    image: dataScientistSVG,
    details:
      "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
    openPositions: "3",
    link: "#!",
  },
  {
    title: "Project Manager",
    image: projectmanagerSVG,
    details:
      "Responsible for planning, executing and closing projects on time and within budget.",
    openPositions: "1",
    link: "#!",
  },
  {
    title: "Product Manager",
    image: productmanagerSVG,
    details:
      "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
    openPositions: "1",
    link: "#",
  },
  {
    title: "Sales Representative",
    image: salesreprentativeSVG,
    details:
      "Responsible for reaching out to potential customers and closing sales deals.",
    openPositions: "4",
    link: "#",
  },
  {
    title: "Marketing Manager",
    image: marketingmanagerSVG,
    details:
      "Responsible for creating and executing marketing strategies to promote a company or product.",
    openPositions: "1",
    link: "#",
  },
];

function App() {
  const [searchTerm] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white p-10">
        <div className="text-4xl mt-30px mb-60px ml-16">Careers</div>
        <h1 className="text-3xl font-bold mb-10 mt-8 ml-16">
          {" "}
          <span className="text-blue-500">
          Your Future Awaits: Discover Opportunities That Elevate Your Career!
          </span>
        </h1>

        <div className="jobs-list-container p-6 max-w-7xl mx-auto">
          <div className="jobs grid grid-cols-1 md:grid-cols-3 gap-10">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="job p-6 bg-gray-900 shadow-lg rounded-lg border border-gray-700 transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={job.image}
                    alt={job.title}
                    className="w-12 h-14 mr-3"
                  />
                  <div>
                    <h3 className="job-title text-xl font-semibold text-white">
                      {job.title}
                    </h3>
                    <span className="open-positions text-sm text-gray-400">
                      {job.openPositions} open{" "}
                      {job.openPositions === 1 ? "position" : "positions"}
                    </span>
                  </div>
                </div>
                <div className="details mb-4 text-gray-300">{job.details}</div>
                <a
                  href={job.link}
                  className="inline-block py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
