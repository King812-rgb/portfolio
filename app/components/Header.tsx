"use client";
const sections = ["About", "Works", "Contact"];
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const headerHeight = 81;

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  const [showAdminLink, setShowAdminLink] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey && e.key === "k") {
        setShowAdminLink(true);
        setTimeout(() => {
          setShowAdminLink(false);
        }, 10000); 
      }
    };

    const handleClick = () => {
      setShowAdminLink(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 max-w-7xl mx-auto flex items-center justify-between bg-black p-6">
      {/* Title Link */}
      <button
        onClick={() => scrollToSection("Top")}
        className="cursor-pointer text-2xl font-bold hover:text-gray-400 transition"
      >
        My Portfolio.
      </button>

      {/* Navigation Links */}
      <nav className="flex items-center justify-between space-x-3 md:space-x-6">
      {showAdminLink && (
        <button onClick={() => router.push("/admin")} className="cursor-pointer text-red-500 font-bold hover:text-gray-400 transition">
          Admin
        </button>
      )}
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="cursor-pointer font-bold hover:text-gray-400 transition"
          >
            {section}
          </button>
        ))}
      </nav>
    </div>
  );
}
