"use client"
import { useState } from "react";

import DetailData from "./DetailData";


const Biodata = () => {
    const [heading, setHeading] = useState([
       
        {
            id: 1,
            roles: "About Linux69",
            data: "Linux69 is a passionate Web Developer with a focus on building dynamic, user-friendly applications using React. With expertise in front-end technologies and modern JavaScript frameworks, Linux69 has been helping businesses create seamless, interactive, and high-performance web experiences since [year]."
        },
        {
            id: 2,
            roles: 'Technical Support',
            data: "Specializing in React.js, Linux69 thrives in creating responsive, scalable, and maintainable web applications. With a deep understanding of React's ecosystem, including Redux, React Router, and Hooks, Linux69 ensures that every project delivers a smooth user experience. Their skill set extends to modern web development tools like Webpack, Babel, and ES6+ JavaScript, as well as version control with Git."
        },
        {
            id: 3,
            roles: 'Experience & Background',
            data: "linux69 has worked on countless projects, ranging from [examples of project types, e.g., e-commerce platforms, SaaS applications, etc.]. They are adept at translating design mockups and wireframes into high-quality code, collaborating with UX/UI designers, and ensuring cross-browser compatibility and performance optimization."
        },
        {
            id: 4,
            roles: 'Philosophy & Approach',
            data: "Linux69 believes in clean, modular, and well-documented code that not only solves the problem at hand but also stands the test of time. They prioritize performance, accessibility, and scalability in every project, ensuring that users have a frictionless experience across devices. By staying up-to-date with the latest trends and best practices in web development, Linux69 ensures each project is built with the most effective, cutting-edge tools."
        },
        {
            id: 5,
            roles: 'Personal Life & Interests',
            data: "When not coding, Linux69 enjoys [personal interests or hobbies, e.g., gaming, hiking, traveling, etc.]. They are also an active participant in the tech community, often attending or speaking at [tech events, meetups, or conferences, if applicable]."
        }
    ]);

    return (
        <div>
           
            
            <DetailData result={heading} title="Ajagbe Sunday Babatunde" />
        </div>
    );
};

export default Biodata;
