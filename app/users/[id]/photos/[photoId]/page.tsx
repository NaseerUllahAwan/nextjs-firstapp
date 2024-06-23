import React from "react";

interface Props {
  params: {
    id: number;
    photoId: number;
  };
}

const PhotoPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      PhotoPage {id} and photoid is {photoId}
    </div>
  );
};

export default PhotoPage;
