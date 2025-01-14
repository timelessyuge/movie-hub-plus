import noImage from "../assets/no-image-placeholder.webp";

const setImageSizeUrl = (
  baseUrl: string,
  imgSizeString: string,
  imgPath: string
) => {
  if (!baseUrl) return noImage;

  return baseUrl + imgSizeString + imgPath;
};

export default setImageSizeUrl;
