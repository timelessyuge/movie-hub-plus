const setImageUrl = (imgSizeString: string, imgPath: string) => {
  const baseUrl = "https://image.tmdb.org/t/p/";
  // console.log(imgPath);
  return baseUrl + imgSizeString + imgPath;
};

export default setImageUrl;
