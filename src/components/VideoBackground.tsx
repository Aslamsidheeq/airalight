import heroVideo from "@/assets/hero-background.mp4";

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute min-h-full min-w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]" />
    </div>
  );
};

export default VideoBackground;
