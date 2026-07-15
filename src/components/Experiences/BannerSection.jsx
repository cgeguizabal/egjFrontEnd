import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { getGalleryImages } from "../../assets/API/Services/GalleryService";
import banner from "../../styles/components/experiences/bannerSection.module.scss";

// Six different dynamic compositions for the three images.
// Each composition defines different size/position classes and a
// supporting phrase tied to a specific image slot (0, 1, or 2).
const COMPOSITIONS = [
  {
    slots: [
      { sizeClass: "slot_hero", captionBelow: false },
      { sizeClass: "slot_small_top", captionBelow: false },
      { sizeClass: "slot_small_bot", captionBelow: true },
    ],
    phrase: "Every path tells a story.",
    phraseSlot: 2,
  },
  {
    slots: [
      { sizeClass: "slot_small_top", captionBelow: false },
      { sizeClass: "slot_hero", captionBelow: false },
      { sizeClass: "slot_small_bot", captionBelow: false },
    ],
    phrase: "The jungle is alive — so are you.",
    phraseSlot: 0,
  },
  {
    slots: [
      { sizeClass: "slot_small_top", captionBelow: true },
      { sizeClass: "slot_small_bot", captionBelow: false },
      { sizeClass: "slot_hero", captionBelow: false },
    ],
    phrase: "Adventure begins where the road ends.",
    phraseSlot: 0,
  },
  {
    slots: [
      { sizeClass: "slot_hero", captionBelow: true },
      { sizeClass: "slot_small_bot", captionBelow: false },
      { sizeClass: "slot_small_top", captionBelow: false },
    ],
    phrase: "Wild doesn't have to mean unprepared.",
    phraseSlot: 0,
  },
  {
    slots: [
      { sizeClass: "slot_small_bot", captionBelow: false },
      { sizeClass: "slot_hero", captionBelow: true },
      { sizeClass: "slot_small_top", captionBelow: false },
    ],
    phrase: "Three days. One forest. Infinite memories.",
    phraseSlot: 1,
  },
  {
    slots: [
      { sizeClass: "slot_small_top", captionBelow: false },
      { sizeClass: "slot_small_bot", captionBelow: true },
      { sizeClass: "slot_hero", captionBelow: false },
    ],
    phrase: "From the canopy to the riverbank.",
    phraseSlot: 1,
  },
];

const ROTATION_INTERVAL = 20000; // 20 seconds

function BannerSection() {
  const [allImages, setAllImages] = useState([]);
  const [compositionIndex, setCompositionIndex] = useState(0);
  const [imageOffset, setImageOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await getGalleryImages(1);
        if (data.images.length >= 3) {
          setAllImages(data.images);
        }
      } catch (err) {
        console.error("Error fetching banner images:", err);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    if (allImages.length < 3) return;

    timerRef.current = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCompositionIndex((prev) => (prev + 1) % COMPOSITIONS.length);
        setImageOffset((prev) => (prev + 3) % Math.max(allImages.length, 3));
        setIsAnimating(false);
      }, 500);
    }, ROTATION_INTERVAL);

    return () => clearInterval(timerRef.current);
  }, [allImages]);

  const currentComposition = COMPOSITIONS[compositionIndex];
  const displayImages =
    allImages.length >= 3
      ? [0, 1, 2].map((i) => allImages[(imageOffset + i) % allImages.length])
      : [];

  return (
    <section className={banner.banner_section}>
      {/* Left: promotional text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "-2%" }}
        transition={{
          delay: 0.1,
          x: { duration: 0.55, ease: "easeInOut" },
          opacity: { duration: 1.1, ease: "easeOut" },
        }}
        className={banner.banner_text}
      >
        <span className={banner.banner_eyebrow}>LIMITED SPACES AVAILABLE</span>
        <h2 className={banner.banner_headline}>
          Secure Your Spot
          <br />
          <span className={banner.banner_headline_highlight}>
            with 30% Today
          </span>
        </h2>
        <p className={banner.banner_body}>
          Your Amazon adventure is one step away. Lock in your dates with a
          simple 30% deposit — and let us handle the rest, from arrival to your
          last morning on the river.
        </p>
        <div className={banner.banner_perks}>
          <span>✓ All-inclusive package</span>
          <span>✓ English-speaking guides</span>
          <span>✓ Airport transfers included</span>
        </div>
        <button className={banner.banner_cta} onClick={() => navigate("/tour")}>
          Book Your Expedition
        </button>
      </motion.div>

      {/* Right: rotating dynamic image composition */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "-2%" }}
        transition={{
          delay: 0.15,
          x: { duration: 0.55, ease: "easeInOut" },
          opacity: { duration: 1.1, ease: "easeOut" },
        }}
        className={banner.banner_images}
      >
        <AnimatePresence mode="wait">
          {displayImages.length === 3 && (
            <motion.div
              key={`${compositionIndex}-${imageOffset}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className={banner.composition}
            >
              {displayImages.map((img, i) => {
                const slot = currentComposition.slots[i];
                const isPhrase = currentComposition.phraseSlot === i;
                return (
                  <motion.figure
                    key={img.public_id}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className={`${banner.comp_figure} ${banner[slot.sizeClass]}`}
                  >
                    <img
                      src={img.url}
                      alt={`Expedition moment ${i + 1}`}
                      className={banner.comp_img}
                      loading="lazy"
                    />
                    {isPhrase && (
                      <motion.figcaption
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className={`${banner.comp_caption} ${slot.captionBelow ? banner.comp_caption_below : banner.comp_caption_overlay}`}
                      >
                        {currentComposition.phrase}
                      </motion.figcaption>
                    )}
                  </motion.figure>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Rotation indicator dots */}
        <div className={banner.rotation_dots}>
          {COMPOSITIONS.map((_, i) => (
            <span
              key={i}
              className={`${banner.rotation_dot} ${i === compositionIndex ? banner.rotation_dot_active : ""}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default BannerSection;
