import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const featuredProducts = [
  {
    name: "Electric Screwdriver (with in built screw counter)",
    make: "Delvo (Nitto Kohki)",
    origin: "Japan",
    features: [
      "Screw Count Up/Down upon successful Torque Reach",
      "Integration with PLC for OK/NG/OK-ALL signals from screwdriver",
      "Wireless signal transmission from Screwdriver to PLC",
      "Internal screw counter for easy operation and control",
    ],
    price: "₹ 85,000.00",
    image: "https://media.istockphoto.com/id/1309203916/photo/screwdriver-cut-out.jpg?s=2048x2048&w=is&k=20&c=NMGSL9Wm5SYmslq69K07iNu5Bs-DqA7WMIEhSZPYZg8=",
  },
  {
    name: "Electric Screwdriver (without counter)",
    make: "Delvo (Nitto Kohki)",
    origin: "Japan",
    features: [
      "Plug-and-play type screwdriver.",
      "No requirement of external power supply, ensuring hasslefree operation",
      "Low budget option, apt for installation on simple assembly lines",
    ],
    price: "₹ 41,000.00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIGGUqjPxJQRCaXDJO7_ZX9HDNACX31Bg8vA&s",
  },
  {
    name: "Soldering Station",
    make: "Metcal",
    origin: "USA",
    features: [
      "Connection Validation technology. Soldering Iron continues to transfer heat until the joint is formed.",
      "Temperature controlled operation with Poka-yoke for temperature fall.",
      "Use 2 soldering irons with single controller",
    ],
    price: "₹ 1,55,200.00",
    image: "https://media.istockphoto.com/id/1034252844/photo/soldering-iron-digital-station-on-the-workplace.jpg?s=2048x2048&w=is&k=20&c=-rk9nqA1R7Lu6YBN9jtVl1CZeHnme4phEzQ16y8MR-o=",
  },
  {
    name: "Robotic Station",
    make: "Custom",
    origin: "India",
    features: [
      "Use automated station for operations like soldering, glue dispensing, gasket placement, other such customized operations as and where required.",
    ],
    price: "₹ 4,50,000.00 ~ ₹ 7,50,000.00",
    image: "https://amatrol.com/wp-content/uploads/2022/02/870-AB53A_Mechatronics_19112014_053-St5-1.png",
  },
  {
    name: "Electric Screwdriver",
    make: "Sudong",
    origin: "China",
    features: [
      "Transducerised torque validation and display.",
      "Live Cp / Cpk plotting on 4.5'' Touch screen on controller",
      "Wireless data logging of each tightened screw",
      "Available in torque ranges from 0.01 Nm to 100 Nm as a complete unit",
      "Available in torque > 100 Nm as torque shaft for mounting on customized fastening fixture.",
    ],
    price: "₹ 3,50,000.00 ~ ₹ 10,50,000.00",
    image: "https://media.istockphoto.com/id/502155589/photo/working-tools.jpg?s=2048x2048&w=is&k=20&c=5kVCGqSIsPXXTVs2AchDfzVh4EaEchdAYC3qfIcZ07o=",
  },
  {
    "name": "Precision Torque Wrench",
    "make": "TorqMaster",
    "origin": "Germany",
    "features": [
      "Digital display for precise torque settings",
      "Automatic calibration to ensure accuracy",
      "Ergonomic handle for comfortable use",
      "Includes multiple torque range settings"
    ],
    "price": "₹ 12,500.00",
    "image": "https://media.istockphoto.com/id/146964918/photo/newton-meter-torque-wrench-isolated.jpg?s=2048x2048&w=is&k=20&c=yNZROGgrnlEa000tUjA1Q7X_ggSwLNotUNVhgZ4WBhs="
  },
  {
    "name": "High-Temperature Soldering Iron",
    "make": "HeatPro",
    "origin": "USA",
    "features": [
      "Temperature range up to 500°C",
      "Rapid heat-up and temperature recovery",
      "Interchangeable tips for different soldering tasks",
      "Ergonomic design for reduced hand fatigue"
    ],
    "price": "₹ 9,800.00",
    "image": "https://media.istockphoto.com/id/1161018279/photo/mens-hands-work-with-a-soldering-iron.jpg?s=2048x2048&w=is&k=20&c=OpANxRikU-jVXeqzyYzZbpbivZaKmaGInSGkJY2ADyY="
  },
  {
    "name": "Automatic Screw Feeder System",
    "make": "FastFeed",
    "origin": "South Korea",
    "features": [
      "Automatic feeding and placement of screws",
      "Adjustable feed rate for different screw sizes",
      "Built-in sensors for precise screw alignment",
      "Compatible with various assembly line configurations"
    ],
    "price": "₹ 2,75,000.00",
    "image": "https://media.istockphoto.com/id/1581311636/photo/electric-screwdriver-on-a-wooden-table-side-view-of-the-black-metallic-screws-electric.jpg?s=2048x2048&w=is&k=20&c=8Ye_RpQvE2ip6ifNppJblHOxzSyTvc4Rqq5Y-4osh8c="
  }
  
  
];

const allProducts = [
  {
    name: "Electric Screwdriver (with in built screw counter)",
    make: "Delvo (Nitto Kohki)",
    origin: "Japan",
    features: [
      "Screw Count Up/Down upon successful Torque Reach",
      "Integration with PLC for OK/NG/OK-ALL signals from screwdriver",
      "Wireless signal transmission from Screwdriver to PLC",
      "Internal screw counter for easy operation and control",
    ],
    price: "₹ 85,000.00",
    image: "https://media.istockphoto.com/id/1309203916/photo/screwdriver-cut-out.jpg?s=2048x2048&w=is&k=20&c=NMGSL9Wm5SYmslq69K07iNu5Bs-DqA7WMIEhSZPYZg8=",
  },
  {
    name: "Electric Screwdriver (without counter)",
    make: "Delvo (Nitto Kohki)",
    origin: "Japan",
    features: [
      "Plug-and-play type screwdriver.",
      "No requirement of external power supply, ensuring hasslefree operation",
      "Low budget option, apt for installation on simple assembly lines",
    ],
    price: "₹ 41,000.00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIGGUqjPxJQRCaXDJO7_ZX9HDNACX31Bg8vA&s",
  },
  {
    name: "Soldering Station",
    make: "Metcal",
    origin: "USA",
    features: [
      "Connection Validation technology. Soldering Iron continues to transfer heat until the joint is formed.",
      "Temperature controlled operation with Poka-yoke for temperature fall.",
      "Use 2 soldering irons with single controller",
    ],
    price: "₹ 1,55,200.00",
    image: "https://media.istockphoto.com/id/1034252844/photo/soldering-iron-digital-station-on-the-workplace.jpg?s=2048x2048&w=is&k=20&c=-rk9nqA1R7Lu6YBN9jtVl1CZeHnme4phEzQ16y8MR-o=",
  },
  {
    name: "Robotic Station",
    make: "Custom",
    origin: "India",
    features: [
      "Use automated station for operations like soldering, glue dispensing, gasket placement, other such customized operations as and where required.",
    ],
    price: "₹ 4,50,000.00 ~ ₹ 7,50,000.00",
    image: "https://amatrol.com/wp-content/uploads/2022/02/870-AB53A_Mechatronics_19112014_053-St5-1.png",
  },
  {
    name: "Electric Screwdriver",
    make: "Sudong",
    origin: "China",
    features: [
      "Transducerised torque validation and display.",
      "Live Cp / Cpk plotting on 4.5'' Touch screen on controller",
      "Wireless data logging of each tightened screw",
      "Available in torque ranges from 0.01 Nm to 100 Nm as a complete unit",
      "Available in torque > 100 Nm as torque shaft for mounting on customized fastening fixture.",
    ],
    price: "₹ 3,50,000.00 ~ ₹ 10,50,000.00",
    image: "https://media.istockphoto.com/id/502155589/photo/working-tools.jpg?s=2048x2048&w=is&k=20&c=5kVCGqSIsPXXTVs2AchDfzVh4EaEchdAYC3qfIcZ07o=",
  },
  {
    name: "Custom Solutions",
    make: "Custom",
    origin: "India",
    features: [
      "We provide custom attachments for tools for customer specific requirements like wireless signal transmission from Screwdriver controller to PLC, addition of run mode control in existing products",
    ],
    price: "As per specific requirement",
    image: "https://media.istockphoto.com/id/962093478/photo/hand-holding-light-bulb-and-cog-inside-and-innovation-icon-network-connection-on-brain.jpg?s=612x612&w=0&k=20&c=NquULumh6yC_vQARgWyyx9k8OwDbQlE2_jjQZceP6rY=",
  },
];


const ProductCard = ({ product }) => (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between h-full">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <div>
        <h3 className="text-xl font-bold mb-2 text-blue-500">{product.name}</h3>
        <p className="text-sm italic">{product.make} - {product.origin}</p>
        <ul className="mt-2 mb-4">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <span className="mr-2">✔️</span>{feature}
            </li>
          ))}
        </ul>
        <p className="font-semibold mb-4">Price: {product.price}</p>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded self-center mt-auto">View Details</button>
    </div>
  );
  
  const ProductPage = () => {
    return (
      <div className="bg-black text-white">
        <Navbar />
  
        {/* Hero Section */}
        <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://st3.depositphotos.com/1006308/12567/i/450/depositphotos_125671208-stock-photo-fablab-and-3d-printing.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6">
            <h1 className="text-4xl md:text-6xl font-bold text-center">
              <span className="text-white">Innovative</span> <span className="text-blue-500">Products</span>
            </h1>
            <p className="text-xl md:text-2xl mt-4">High-quality industrial tools for modern needs</p>
          </div>
        </div>
  
        {/* Featured Products Carousel */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-semibold">
                <span className="text-white">Main</span> <span className="text-blue-500">Categories</span>
              </h2>
            </div>
            <div className="flex overflow-x-auto space-x-8 pl-4">
              {featuredProducts.map((product, index) => (
                <div key={index} className="min-w-[300px] lg:min-w-[350px] bg-gray-800 rounded-lg shadow-lg">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* All Products Section */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-semibold">
                <span className="text-white">Popular</span> <span className="text-blue-500">Products</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
  
        {/* Custom Solutions Section */}
        <section className="section__container modern__container" id="custom-solutions">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <img src="https://media.istockphoto.com/id/1073204254/photo/electric-saws-in-tool-store.jpg?s=2048x2048&w=is&k=20&c=qNcmZ9jHdAVo_s7uKTg_6uji63W46kFAFyzlJkiqKj0=" alt="product1" className="object-cover w-full h-64 md:h-auto" />
            <img src="https://media.istockphoto.com/id/1492044911/photo/in-a-carpenters-workshop-a-power-drill-with-a-network-connection-is-on-a-wooden-workbench.jpg?s=612x612&w=0&k=20&c=xtBDqbjRFkm6vRklgTMnvCx4ths7rUR8RJA2-DfFvm8=" alt="product2" className="object-cover w-full h-64 md:h-auto" />
            <img src="https://media.istockphoto.com/id/1461270973/photo/a-professional-tool-for-work-repair-and-construction-in-the-store-sale-of-wired-power-tools.jpg?s=612x612&w=0&k=20&c=u_McvEDwJMSnGWwjy3pINfYMRlNRRUUXMK-OssSlS9k=" alt="product3" className="object-cover w-full h-64 md:h-auto" />
            <img src="https://media.istockphoto.com/id/623847942/photo/electric-tools-for-construction-on-stand-in-shop.jpg?s=612x612&w=0&k=20&c=y7yg_jy_4r8PEQxlW0OmUWALUYZ8qcnkt9rkcOs8G1M=" alt="product4" className="object-cover w-full h-64 md:h-auto" />
          </div>
          <div className="modern__content mt-12 md:mt-24">
            <h2 className="section__header">Custom Solutions</h2>
            <p className="section__subheader">
              Tailored Automation Solutions Designed to Meet Your Unique Business Needs.
              Discover Our Range of Customizable Products and Services.
            </p>
            <div className="modern__grid">
              <div className="modern__card">
                <span>
                  <i className="fas fa-tools"></i>
                </span>
                <p>
                  Explore our customizable electric screwdrivers with advanced features like built-in counters and wireless control.
                </p>
              </div>
              <div className="modern__card">
                <span>
                  <i className="fas fa-lightbulb"></i>
                </span>
                <p>
                  Discover our adaptable soldering stations with temperature control and validation technology to suit your specific needs.
                </p>
              </div>
              <div className="modern__card">
                <span>
                  <i className="fas fa-robot"></i>
                </span>
                <p>
                  Implement our robotic stations for customized automation tasks, from soldering to glue dispensing.
                </p>
              </div>
              <div className="modern__card">
                <span>
                  <i className="fas fa-cogs"></i>
                </span>
                <p>
                  We provide custom solutions tailored to your requirements, including advanced signal transmission and control systems.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <Footer />
      </div>
    );
  };
  
  export default ProductPage;