import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules"; // Import Grid module
import "swiper/css"; // Ensure Swiper styles are imported
import "swiper/css/grid"; // Import Grid styles

import SpeakerCard from "../common/speaker-card";
import { getSpeakers } from "../../apiClient";

export default function SpeakerCarousel() {
  const { data: speakers, error, isLoading } = useQuery({
    queryKey: ["speakers"],
    queryFn: getSpeakers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading speakers.</p>;

  return (
    <Swiper
      slidesPerView={4} // 4 columns
      spaceBetween={20}
      loop={true}
      autoplay={{ delay: 3000 }}
      modules={[Autoplay, Grid]} // Include Grid module
      grid={{ rows: 3, fill: "row" }} // 2 rows, fill rows first
      breakpoints={{
        360: { slidesPerView: 1, grid: { rows: 2 } },
        640: { slidesPerView: 2, grid: { rows: 2 } }, // Smaller screens: 2 columns, 2 rows
        1024: { slidesPerView: 4, grid: { rows: 3 } }, // Larger screens: 4 columns, 2 rows
      }}
    >
      {speakers.map((speaker : any) => (
        <SwiperSlide key={speaker.id}>
          <SpeakerCard 
            maskUrl="/mask.svg"
            bgUrl="/speaker-mask.svg"
            name={speaker.name}
            imageUrl={speaker.imageUrl}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
