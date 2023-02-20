import { ImageList, ImageListItem } from "@mui/material";
import React, { Fragment, useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const ModelPreviewList = ({ bono }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const Item = ({ image, idx }) => {
    return (
      <ImageListItem sx={{ borderRadius: "12px", overflow: "hidden" }}>
        <img src={image} onClick={() => openImageViewer(idx)} />
      </ImageListItem>
    );
  };

  return (
    <Fragment>
      <ImageList cols={2}>
        {bono?.images.map((image, idx) => (
          <Item key={idx} image={image} idx={idx}/>
        ))}
      </ImageList>
      {isViewerOpen && (
        <ImageViewer
          src={bono?.images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </Fragment>
  );
};

export default ModelPreviewList;
