import React from "react";
import "../statics/page2.css";
import canvaIcon from "../assets/canva.png";
import photoshopIcon from "../assets/photoshop.png";
import illustratorIcon from "../assets/illustrator.png";
import figmaIcon from "../assets/figma.png";
import { Slide, Fade, Bounce } from "react-awesome-reveal";


const skills = [
  {
    icon: canvaIcon,
    title: "Canva",
    description:
      "I am skilled in Canva, allowing me to quickly create attractive designs and produce high-quality graphics, presentations, and visual materials while maintaining consistency and style across all projects.",
  },
  {
    icon: photoshopIcon,
    title: "Adobe Photoshop",
    description:
      "I am proficient in Adobe Photoshop, using its advanced tools to retouch images, create compositions, and design with precision. My experience allows me to transform and enhance any project with high-quality results.",
  },
  {
    icon: illustratorIcon,
    title: "Adobe Illustrator",
    description:
      "I am proficient in Adobe Illustrator, creating detailed illustrations and precise vector designs. My skill with this software allows me to turn ideas into impactful, high-quality graphics.",
  },
  {
    icon: figmaIcon,
    title: "Figma",
    description:
      "I am skilled in Figma, creating high-quality interactive designs and prototypes. My experience with this tool allows me to collaborate efficiently and develop visually appealing, functional interfaces.",
  },
];

const Page2 = () => {
  return (
    <div className="page-container">
      <h1 className="page-title"><Fade direction="down">MY SKILLS</Fade></h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <Bounce><div key={index} className="skill-card">
            <div className="skill-icon-container">
              <img src={skill.icon} alt={`${skill.title} Icon`} className="skill-icon" />
            </div>
            <h2 className="skill-title">{skill.title}</h2>
            <p className="skill-description">{skill.description}</p>
          </div></Bounce>
        ))}
      </div>
    </div>
  );
};

export default Page2;
