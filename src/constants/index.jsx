import {  Cloud, Hammer, Wrench } from "lucide-react";

import { GlobeLock } from "lucide-react";

import { Brain } from 'lucide-react';
import { SquareArrowRight } from 'lucide-react';




export const navItems = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Careers", href: "/careers" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
];




export const features = [
  {
    icon: <GlobeLock />, 
    text: "Industrial IoT Solutions",
    description: "Optimize your industrial processes with our advanced IoT solutions tailored for the manufacturing sector."
  },
  {
    icon: <SquareArrowRight />, 
    text: "Automation Services",
    description: "Streamline your operations with our comprehensive automation services, from consultation to implementation."
  },
  {
    icon: <Hammer />,
    text: "Electric Assembly Tools",
    description: "Enhance your assembly line efficiency with our state-of-the-art electric tools designed for precision and durability."
  },
  {
    icon: <Wrench />, 
    text: "Predictive Maintenance",
    description: "Reduce downtime and maintenance costs with our predictive maintenance solutions using cutting-edge AI technology."
  },
  {
    icon: <Cloud />, 
    text: "Cloud Infrastructure",
    description: "Leverage our robust cloud infrastructure to securely manage and analyze your industrial data in real-time."
  },
  {
    icon: <Brain />, 
    text: "AI Model Engineering",
    description: "Implement powerful AI models to enhance decision-making and operational efficiency in your industrial applications."
  }
];


export const checklistItems = [
  {
    title: "Seamless Integration of IoT Devices",
    description:
      "Effortlessly integrate and manage IoT devices across your industrial operations for enhanced efficiency and real-time monitoring.",
  },
  {
    title: "Automated Workflow Management",
    description:
      "Optimize your industrial workflows with our automated solutions, reducing manual interventions and increasing productivity.",
  },
  {
    title: "Predictive Maintenance Scheduling",
    description:
      "Implement predictive maintenance to foresee equipment issues before they arise, minimizing downtime and maintenance costs.",
  },
  {
    title: "Real-Time Data Analytics",
    description:
      "Utilize advanced data analytics to gain insights into your industrial processes, enabling data-driven decision-making and operational improvements.",
  },
  {
    title: "AI-Driven Process Optimization",
    description:
      "Leverage AI technologies to optimize your industrial processes, enhancing efficiency and reducing operational costs.",
  },

];



