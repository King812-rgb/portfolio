import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface WorkCardProps {
  title: string;
  description: string;
  techStack: string;
  githubLink: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  description,
  techStack,
  githubLink,
}) => {
  return (
    <a href={githubLink} target="_blank" className="block">
      <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
        <h4 className="text-xl font-bold mt-2">{title}</h4>
        <p className="text-gray-400">{description}</p>
        <p className="text-sm text-gray-500 mt-2">Tech Stack: {techStack}</p>
        <div className="text-blue-400 hover:underline text-sm mt-2 flex items-center space-x-2">
          <FontAwesomeIcon icon={faGithub} className="w-4 h-4 text-blue-400" />
          <span>View on GitHub</span>
        </div>
      </div>
    </a>
  );
};

export default WorkCard;
