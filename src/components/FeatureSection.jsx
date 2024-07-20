import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-8 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-blue-600 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-2 lg:mt-10 tracking-wide">
           The Future of{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
            Industrial Automation
          </span>
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl mt-5 lg:mt-10 text-neutral-400">
          Discover our innovative solutions for industrial products and automation services
        </p>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div className="mt-4">
                <h5 className="text-xl mt-1 mb-6 font-semibold text-white">{feature.text}</h5>
                <p className="text-md p-2 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
