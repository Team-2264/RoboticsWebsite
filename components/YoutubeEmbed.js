import React from 'react';

const YouTubeEmbed = ({ embedId }) => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe 
        width="100%" height="646.875" 
        src="https://www.youtube.com/embed/dD-vSED53uI?si=pSnWhsOLwQFgz8Kj" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>

        </iframe>
    </div>
  );
};

export default YouTubeEmbed;