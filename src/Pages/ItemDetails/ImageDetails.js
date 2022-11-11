import React, { useRef, useState } from "react";
import data from "../../localData/data.json";

const ImageDetails = (props) => {
  const { catagory, img } = props;
  const [index, setIndex] = useState(5);
  const imgRef = useRef();
  const images = data[catagory].map((item) => item.img);

  const handleImageChange = (index) => {
    setIndex(index);
    const images = imgRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = "w-16 lg:w-24 opacity-50 hover:opacity-100";
      }
      
      images[index].className = "active";
  };

  return (
    <>
      <div className="">
        <img src={index === 5 ? img : images[index]} alt="" />
      </div>

      <div
        className="sample flex items-center justify-center gap-2 mt-4"
        ref={imgRef}
      >
        {images.slice(0, 4).map((image, index) => (
          <img
            src={image}
            className="w-16 lg:w-24 opacity-50 hover:opacity-100"
            alt=""
            onClick={() => handleImageChange(index)}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default ImageDetails;
