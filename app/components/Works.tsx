import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import WorkCard from "./WorkCard";
import "swiper/css";
import "swiper/css/navigation";

export const Works = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Works</h1>
      <Swiper
        modules={[Navigation]}
        navigation
        loop={false}
        spaceBetween={30}
        slidesPerView={2}
        breakpoints={{
          0: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="max-w-5xl mx-auto"
      >
        <SwiperSlide>
          <WorkCard
            title="Portfolio"
            description="Highlight my skills and projects"
            siteLink="https://portfolio-masaki-naguras-projects.vercel.app/"
            githubLink="https://github.com/King812-rgb/portfolio"
            techStackList={[
              "React",
              "Next.js",
              "Tailwind",
              "Vercel",
              "githubActions",
              "sonarQube",
              "Lint",
            ]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <WorkCard
            title="Tech-Blog"
            description="A blog about development issues and research"
            siteLink="https://tech-blog-five-lac.vercel.app/"
            githubLink="https://github.com/King812-rgb/tech-blog"
            techStackList={[
              "React",
              "Next.js",
              "Tailwind",
              "Vercel",
              "githubActions",
              "sonarQube",
              "Lint",
              "Jest",
            ]}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
