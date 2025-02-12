import React from 'react';

function VideoSection() {
  return (
    <div className="flex flex-col md:justify-start md:w-[60%]">
      <video controls>
        <source src="/video/advert.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoSection;
