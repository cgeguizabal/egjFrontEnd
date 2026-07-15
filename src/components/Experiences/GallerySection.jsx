import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {
  getGalleryImages,
  likeImage,
  unlikeImage,
} from "../../assets/API/Services/GalleryService";
import gallery from "../../styles/components/experiences/gallerySection.module.scss";

function GallerySection() {
  const [images, setImages] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });
  const [loading, setLoading] = useState(true);
  const [likedIds, setLikedIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("egj_liked_images") || "[]");
    } catch {
      return [];
    }
  });
  const [modalImage, setModalImage] = useState(null);
  const [pageTransition, setPageTransition] = useState(false);

  const fetchImages = useCallback(async (page) => {
    setLoading(true);
    setPageTransition(true);
    try {
      const data = await getGalleryImages(page);
      setImages(data.images);
      setPagination(data.pagination);
    } catch (err) {
      console.error("Error fetching gallery images:", err);
    } finally {
      setLoading(false);
      setPageTransition(false);
    }
  }, []);

  useEffect(() => {
    fetchImages(1);
  }, [fetchImages]);

  // Persist liked IDs to localStorage
  useEffect(() => {
    localStorage.setItem("egj_liked_images", JSON.stringify(likedIds));
  }, [likedIds]);

  const handleLike = async (e, image) => {
    e.stopPropagation();
    const isLiked = likedIds.includes(image.public_id);

    // Optimistic update on the images array
    setImages((prev) =>
      prev.map((img) =>
        img.public_id === image.public_id
          ? { ...img, likes: isLiked ? img.likes - 1 : img.likes + 1 }
          : img,
      ),
    );

    if (isLiked) {
      setLikedIds((prev) => prev.filter((id) => id !== image.public_id));
      await unlikeImage(image.public_id).catch(() => {
        // Revert on error
        setImages((prev) =>
          prev.map((img) =>
            img.public_id === image.public_id
              ? { ...img, likes: img.likes + 1 }
              : img,
          ),
        );
        setLikedIds((prev) => [...prev, image.public_id]);
      });
    } else {
      setLikedIds((prev) => [...prev, image.public_id]);
      await likeImage(image.public_id).catch(() => {
        setImages((prev) =>
          prev.map((img) =>
            img.public_id === image.public_id
              ? { ...img, likes: img.likes - 1 }
              : img,
          ),
        );
        setLikedIds((prev) => prev.filter((id) => id !== image.public_id));
      });
    }
  };

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  const handlePageChange = async (newPage) => {
    if (newPage < 1 || newPage > pagination.totalPages) return;
    window.scrollTo({
      top: document.getElementById("gallery-section")?.offsetTop - 100,
      behavior: "smooth",
    });
    await fetchImages(newPage);
  };

  // Assign visual size class in a repeating masonry pattern
  const getSizeClass = (index) => {
    const pattern = [
      gallery.img_large,
      gallery.img_small,
      gallery.img_small,
      gallery.img_medium,
      gallery.img_tall,
      gallery.img_small,
      gallery.img_medium,
      gallery.img_small,
      gallery.img_tall,
      gallery.img_large,
    ];
    return pattern[index % pattern.length];
  };

  return (
    <section id="gallery-section" className={gallery.gallery_section}>
      <motion.header
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-2%" }}
        transition={{
          delay: 0.1,
          y: { duration: 0.5, ease: "easeInOut" },
          opacity: { duration: 1.2, ease: "easeOut" },
        }}
        className={gallery.gallery_header}
      >
        <h2 className={gallery.gallery_title}>MOMENTS IN THE WILD</h2>
        <p className={gallery.gallery_subtitle}>
          Real stories, real places — captured deep inside the Amazon.
        </p>
        <hr className={gallery.gallery_hr} />
      </motion.header>

      {loading ? (
        <div className={gallery.gallery_loading}>
          <span className={gallery.gallery_loading_dot} />
          <span className={gallery.gallery_loading_dot} />
          <span className={gallery.gallery_loading_dot} />
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={pagination.currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={gallery.gallery_grid}
          >
            {images.map((image, index) => {
              const isLiked = likedIds.includes(image.public_id);
              return (
                <motion.figure
                  key={image.public_id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{
                    delay: (index % 10) * 0.05,
                    y: { duration: 0.5, ease: "easeInOut" },
                    opacity: { duration: 0.8, ease: "easeOut" },
                  }}
                  className={`${gallery.gallery_item} ${getSizeClass(index)}`}
                  onClick={() => openModal(image)}
                >
                  <img
                    src={image.url}
                    alt={`Gallery photo ${index + 1}`}
                    className={gallery.gallery_img}
                    loading="lazy"
                  />
                  <div className={gallery.gallery_item_overlay}>
                    <button
                      className={`${gallery.like_btn} ${isLiked ? gallery.like_btn_active : ""}`}
                      onClick={(e) => handleLike(e, image)}
                      aria-label={isLiked ? "Unlike photo" : "Like photo"}
                    >
                      {isLiked ? <FaHeart /> : <FaRegHeart />}
                      <span className={gallery.like_count}>{image.likes}</span>
                    </button>
                  </div>
                </motion.figure>
              );
            })}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-2%" }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className={gallery.pagination}
          aria-label="Gallery pagination"
        >
          <button
            className={gallery.pagination_arrow}
            onClick={() => handlePageChange(pagination.currentPage - 1)}
            disabled={pagination.currentPage === 1}
            aria-label="Previous page"
          >
            <MdChevronLeft />
          </button>

          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
            (page) => (
              <button
                key={page}
                className={`${gallery.pagination_dot} ${page === pagination.currentPage ? gallery.pagination_dot_active : ""}`}
                onClick={() => handlePageChange(page)}
                aria-label={`Page ${page}`}
                aria-current={
                  page === pagination.currentPage ? "page" : undefined
                }
              >
                {page}
              </button>
            ),
          )}

          <button
            className={gallery.pagination_arrow}
            onClick={() => handlePageChange(pagination.currentPage + 1)}
            disabled={pagination.currentPage === pagination.totalPages}
            aria-label="Next page"
          >
            <MdChevronRight />
          </button>
        </motion.nav>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className={gallery.modal_backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.figure
              className={gallery.modal_figure}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={gallery.modal_close}
                onClick={closeModal}
                aria-label="Close modal"
              >
                <IoClose />
              </button>
              <img
                src={modalImage.url}
                alt="Expanded gallery photo"
                className={gallery.modal_img}
              />
              <div className={gallery.modal_footer}>
                <button
                  className={`${gallery.like_btn} ${likedIds.includes(modalImage.public_id) ? gallery.like_btn_active : ""}`}
                  onClick={(e) => handleLike(e, modalImage)}
                >
                  {likedIds.includes(modalImage.public_id) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}
                  <span className={gallery.like_count}>
                    {images.find((i) => i.public_id === modalImage.public_id)
                      ?.likes ?? modalImage.likes}
                  </span>
                </button>
              </div>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default GallerySection;
