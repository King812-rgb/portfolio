import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

interface WorkCardProps {
  title: string;
  description: string;
  githubLink: string;
  techStackList: string[];
  siteLink: string;
  screenshotUrl: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  description,
  githubLink,
  techStackList,
  siteLink,
  screenshotUrl,
}) => {
  return (
    <a
      href={siteLink}
      target="_blank"
      className="block max-w-5xl mx-auto h-full"
    >
      <div className="flex flex-col bg-gray-800 rounded-lg hover:bg-gray-700 hover:border-2 hover:border-blue-500 transition">
        <Image
          src={`${screenshotUrl}`}
          alt={`${title} screenshot`}
          className="w-full h-64 object-cover rounded-t-lg"
          width={600}
          height={300}
        />
        <div className="flex-grow p-6">
          <h4 className="text-2xl font-bold mt-2 mb-2">{title}</h4>
          <p className="text-gray-400">{description}</p>
          <p className="text-gray-500 mt-2">{techStackList.join(" | ")}</p>
          <a
            href={githubLink}
            target="_blank"
            className="text-blue-400 hover:underline text-sm mt-8 flex items-center space-x-2"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="w-4 h-4 text-blue-400"
            />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </a>
  );
};

export default WorkCard;
