import { CheckCircle2 } from "lucide-react";
import code from "../assets/code1.png";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-6 ">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-8 m-10 tracking-wide">
        Enhanced{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          Automation and Workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-2/5 mt-39 mb-10">
          <img src={code} alt="Coding"  style={{ marginTop: '100px 0' }}/>
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
