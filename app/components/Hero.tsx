import SocialLinks from "./SocialLinks";
import "../global.css";

export default function Hero() {
  return (
    <div
      id="Top"
      className="h-screen flex flex-col justify-center items-center text-center fade-in-up"
    >
      <h1 className="text-5xl md:text-7xl font-bold">Masaki Nagura</h1>
      <p className="text-lg md:text-2xl mt-6 whitespace-pre-line">
        My mission is to shape the future and empower the next generations
        {"\n"}
        by leading the transformation of vision into reality.
      </p>
      <SocialLinks />
    </div>
  );
}
