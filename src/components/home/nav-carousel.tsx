import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks"

const images = [
  { src: "/carousel/programmes.svg", link: "/programmes" },
  { src: "/carousel/house.svg", link: "/house-of-fiction" },
  { src: "/carousel/bazaar.svg", link: "/bazaar" },
  { src: "/carousel/partners.svg", link: "/partners" },
];

export default function CircularCarousel() {
  const navigate = useNavigate();
      const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div style={{ width: "100vw", overflow: "hidden", textAlign: "center" }}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        autoplay={{ delay: 3000 }}
        coverflowEffect={{
          rotate: 0, // Keep main slide straight
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[Autoplay, EffectCoverflow]}
        onProgress={(swiper) => {
          swiper.slides.forEach((slide) => {
            const slideProgress = (slide as any).progress; // Type assertion to access progress
            let rotation = 0;
            let translateY = 0;
        
            if (slideProgress < 0) {
              // Left side
              rotation = Math.max(-15, slideProgress * 15); // Rotate up to -15deg
              translateY = Math.max(80, Math.abs(slideProgress) * 100); // Move down
            } else if (slideProgress > 0) {
              // Right side
              rotation = Math.min(15, slideProgress * 15); // Rotate up to 15deg
              translateY = Math.max(80, Math.abs(slideProgress) * 100); // Move down
            }
        
            slide.style.transform = `translateY(${translateY}px) rotate(${rotation}deg)`;
          });
        }}
        
        
        style={{ width: "100%", height: "auto" }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={`slide`} onClick={() => navigate(item.link)} style={{ width: isMobile ?"80%" : 'auto' }}>
            <Image
              src={item.src}
              alt={`Slide ${index + 1}`}
              width={250}
              style={{
                cursor: "pointer",
                borderRadius: "10px",
                transition: "transform 0.3s ease-out",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
