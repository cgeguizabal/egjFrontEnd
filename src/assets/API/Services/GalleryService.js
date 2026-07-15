import { apiGet, apiPost } from "./axiosIntance";

export const getGalleryImages = async (page = 1) => {
  const response = await apiGet(`/gallery?page=${page}`);
  return response.data.data;
};

export const likeImage = async (publicId) => {
  const response = await apiPost("/gallery/like", {
    public_id: publicId,
  });
  return response.data.likes;
};

export const unlikeImage = async (publicId) => {
  const response = await apiPost("/gallery/unlike", {
    public_id: publicId,
  });
  return response.data.likes;
};
