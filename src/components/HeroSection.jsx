import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-3xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Industrial Product and
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          {" "}
          Automation Services
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Transform your manufacturing processes with our cutting-edge automation solutions. From assembly automation to advanced industrial products, we provide the tools and technology to enhance efficiency and productivity.
      
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#!"
          className="bg-gradient-to-r from-blue-600 to-blue-800 py-3 px-4 mx-3 rounded-md"
        >
          Get Quotation
        </a>
        <a href="!#" className="py-3 px-4 mx-3 rounded-md border">
          Call Radso
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-/5 border border--700 shadow-sm shadow-blue-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-/5 border border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
