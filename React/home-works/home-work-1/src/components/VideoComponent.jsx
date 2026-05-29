function VideoComponent({ src, width = "100%" }) {
  return <video src={src} width={width} controls />;
}

export default VideoComponent;
