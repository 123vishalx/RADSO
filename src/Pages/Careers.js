import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CareerPage = () => {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    resume: null,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("https://backend-llye.vercel.app/api/career");
        setJobData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    closeModal();
  };

  // Pagination Logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobData.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white p-10">
        <div className="text-4xl mb-8 text-center md:text-left md:ml-24 lg:ml-24">
          Careers
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left md:ml-24 lg:ml-24">
          <span className="text-blue-500">
            Your Future Awaits: Discover Opportunities That Elevate Your Career!
          </span>
        </h1>

        <div className="jobs-list-container p-6 max-w-7xl mx-auto">
          <div className="jobs grid grid-cols-1 md:grid-cols-3 gap-10">
            {currentJobs.length > 0 ? (
              currentJobs.map((job, index) => (
                <div
                  key={index}
                  className="job p-6 bg-gray-900 shadow-lg rounded-lg border border-gray-700 transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={job.image} // Assuming your API provides the image URL
                      alt={job.title}
                      className="w-12 h-14 mr-3"
                    />
                    <div>
                      <h3 className="job-title text-lg md:text-xl font-semibold text-white">
                        {job.title}
                      </h3>
                      <span className="open-positions text-sm text-gray-400">
                        {job.openPositions} open{" "}
                        {job.openPositions === 1 ? "position" : "positions"}
                      </span>
                    </div>
                  </div>
                  <div className="details mb-4 text-gray-300">{job.details}</div>
                  <div className="location mb-4 text-gray-400">
                    <strong>Location: </strong>{job.location}
                  </div>
                  <div className="apply-before mb-4 text-gray-400">
                    <strong>Apply Before: </strong>{new Date(job.applyBefore).toLocaleDateString()}
                  </div>
                  <button
                    onClick={() => openModal(job)}
                    className="inline-block py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
              ))
            ) : (
              <p>No Jobs available</p>
            )}
          </div>

          {/* Pagination */}
          <div className="pagination mt-8 flex justify-center">
            {[...Array(Math.ceil(jobData.length / jobsPerPage)).keys()].map(number => (
              <button
                key={number + 1}
                onClick={() => paginate(number + 1)}
                className={`page-number mx-2 py-1 px-3 rounded ${currentPage === number + 1 ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && selectedJob && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="modal-content bg-gray-800 p-6 rounded-lg w-full max-w-lg relative">
            <button className="modal-close absolute top-2 right-2 text-white text-2xl" onClick={closeModal}>×</button>
            <h2 className="text-xl font-semibold mb-4">Apply for {selectedJob.title}</h2>
            <form onSubmit={handleSubmit}>
              <label className="block mb-4">
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded"
                  required
                />
              </label>
              <label className="block mb-4">
                Email Address:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded"
                  required
                />
              </label>
              <label className="block mb-4">
                Country:
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded"
                  required
                />
              </label>
              <label className="block mb-4">
                Upload Resume:
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded"
                  required
                />
              </label>
              <button type="submit" className="btn py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default CareerPage;
