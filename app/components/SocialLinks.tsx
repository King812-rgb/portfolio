"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function ContactForm() {
  return (
    <ul className="flex justify-center space-x-4 mt-6">
      <li>
        <a href="https://www.linkedin.com/in/masaki-nagura-129151157/" target="_blank"
          className="w-12 h-12 flex items-center justify-center border-2 border-gray-500 rounded-full hover:border-white transition">
          <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 text-gray-500 hover:text-white transition" />
        </a>
      </li>
      <li>
        <a href="https://github.com/yourgithub" target="_blank"
          className="w-12 h-12 flex items-center justify-center border-2 border-gray-500 rounded-full hover:border-white transition">
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5 text-gray-500 hover:text-white transition" />
        </a>
      </li>
    </ul>
  );
}