import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CareerPage = () => {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white p-10">
        <div className="text-4xl mt-30px mb-60px ml-24">Careers</div>
        <h1 className="text-3xl font-bold mb-10 mt-8 ml-24">
          <span className="text-blue-500">
            Your Future Awaits: Discover Opportunities That Elevate Your Career!
          </span>
        </h1>

        <div className="jobs-list-container p-6 max-w-7xl mx-auto">
          <div className="jobs grid grid-cols-1 md:grid-cols-3 gap-10">
            {jobData.map((job, index) => (
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
                <div className="location mb-4 text-gray-400">
                  <strong>Location: </strong>{job.location}
                </div>
                <div className="apply-before mb-4 text-gray-400">
                  <strong>Apply Before: </strong>{new Date(job.applyBefore).toLocaleDateString()}
                </div>
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
};

export default CareerPage;
