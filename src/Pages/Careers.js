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
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white-800">
        <div className="jobs-list-container p-4 max-w-5xl mx-auto">
          <h2 className="text-3xl mb-4">
            {filteredJobs.length} {filteredJobs.length === 1 ? "Job" : "Jobs"}
          </h2>
          <input
            className="job-search p-2 mb-6 w-full border border-white-300 rounded bg-black"
            type="text"
            placeholder="Search here..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="jobs grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="job p-4 bg-black shadow-md rounded-md border border-white"
              >
                <div className="flex items-center mb-2">
                  <img src={job.image} alt={job.title} className="w-10 h-10 mr-2" />
                  <div>
                    <h3 className="job-title text-xl font-semibold">{job.title}</h3>
                    <span className="open-positions text-sm text-red-600">
                      {job.openPositions} open{" "}
                      {job.openPositions === 1 ? "position" : "positions"}
                    </span>
                  </div>
                </div>
                <div className="details mb-2 text-white-600">{job.details}</div>
                <a
                  href={job.link}
                  className="inline-block mt-4 py-2 px-4 bg-blue-600 text-black rounded-md"
                >
                  More Details
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
