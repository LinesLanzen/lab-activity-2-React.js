import React from 'react';

const VideoSources = ({ sources }) => {
  return (
    <>
      {sources.map((source, index) => (
        <source key={index} src={source.src} type={source.type} />
      ))}
    </>
  );
};

const VideoDisplay = () => {
  const videoSources = [
    { src: "https://cdn-l.cdprojektred.com/video/cdpr_website_001.mp4", type: "video/mp4" },
    { src: "https://cdn-l.cdprojektred.com/video/cdpr_website_mobile_001.mp4", type: "video/mp4" }
  ];

  return (
    <main className="home-top">
      <div className="container-fluid main-video">
        <img src="/img/logo-5eac85f8.svg" alt="Logo" className="logo-video"/>
        <div className="video-intro">
          Passionate <br/>
          Creators of Story-Driven<br/>Role-Playing Games
        </div>
        <video id="home-video" autoPlay loop muted playsInline>
          <VideoSources sources={videoSources} />
        </video>
      </div>
    </main>
  );
};

export default VideoDisplay;
