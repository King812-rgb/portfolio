import SocialLinks from "./SocialLinks";

export function About() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">About</h1>
      <h3>
        <span className="split-text is-visible">
          Hi, I&rsquo;m Masaki Nagura, a Systems Development Director passionate
          about building competitive businesses with software&AI.
        </span>
      </h3>
      <br />
      
      <strong>Work Experience</strong>
      <ul className="list-disc list-inside">
        <li>
          Internship as a BizDev Maneger,{" "}
          <a
            href="https://miup.jp/"
            className="text-blue-500 hover:text-blue-600"
          >
            Miup Inc,
          </a>{" "}
          Bangladesh (2019)
        </li>
        <li>
          System Analyst and IT Systems Engineer,{" "}
          <a
            href="https://www.accenture.com/"
            className="text-blue-500 hover:text-blue-600"
          >
            Accenture Japan Ltd,
          </a>{" "}
          Japan (2019-2022)
        </li>
        <li>
          System Development Director and Project Manager,{" "}
          <a
            href="https://www.recruit.co.jp/"
            className="text-blue-500 hover:text-blue-600"
          >
            Recruit Co.,
          </a>{" "}
          Japan (2022-Present)
        </li>
      </ul>
      <br />

      <strong>Skills</strong>
      <ul className="list-disc list-inside">
        <li>Project Management</li>
        <li>
          System Development Direction
          <ul className="list-disc list-inside pl-5">
            <li>Requirement Definition</li>
            <li>Architecture Design</li>
            <li>Migration Planning</li>
          </ul>
        </li>
        <li>Front-end Development (React, Next.js, Tailwind CSS, etc..)</li>
        <li>Back-end Development (Jave(SpringBoot), Python(Flask))</li>
        <li>Other Tools (Git, Linux, SQL, Docker, etc...)</li>
      </ul>
      <br />
      <strong>Language</strong>
      <ul className="list-disc list-inside">
        <li>Japanese</li>
        <li>English</li>
      </ul>
      <br />
      <strong>Career Preference</strong>
      <br />
      <ul className="list-disc list-inside pl-5">
        <li>
          I&rsquo;m seeking opportunities, both in Japan and abroad, to challeng
          myself and grow as a software engineer to enhance my impact.
        </li>
      </ul>
      <br />
      If you&rsquo;re interested in working with me or have an offer, feel free
      to reach out!
      <br />
      <SocialLinks />
    </div>
  );
}
