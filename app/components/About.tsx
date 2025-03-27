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
      <strong>Background</strong>
      <br />
      Born and raised in Tokyo, I studied medical engineering, focusing on
      biometric signal processing and machine learning.
      <br />
      After graduation, I spent 5years at{" "}
      <a href="https://www.accenture.com/">Accenture</a> and{" "}
      <a href="https://recruit-holdings.com/">Recruit Co.</a> , leading projects
      in Retail EC, B2B SaaS, and consumer apps. <br />
      I specialize in co-creating product visions and translating them into
      product development.
      <br />
      <br />
      <strong>Future Vision</strong>
      <br />
      In the coming years, I&rsquo;m committed to refining my skills in coding,
      design, and architecture as a backend enginineer, maximizing my impact.
      <br />
      <br />
      If you&rsquo;re interested in working with me or have an offer, feel free
      to reach out!
      <br />
      <SocialLinks />
    </div>
  );
}
