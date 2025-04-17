"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import WorkCard from "./WorkCard";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Work } from "@/app/types/Work";

export const Works = () => {
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    fetch("/api/works/getWorkList")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWorks(data);
      });
  }, []);

  if (!works.length) {
    return <div className="text-center">Loading works...</div>;
  }

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
        {works.map((work) => (
          <SwiperSlide key={work.id}>
            <WorkCard
              title={work.title}
              description={work.description}
              siteLink={work.site_url}
              githubLink={work.github_url}
              techStackList={work.tech_stack.split(",")}
              screenshotUrl={work.screenshot_url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
