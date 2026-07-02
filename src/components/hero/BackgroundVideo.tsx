export default function BackgroundVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-90 brightness-[0.8] contrast-110 saturate-110"
      >
        <source
          src="/bgvid.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/20 via-[#0a0a0f]/40 to-[#0a0a0f]/60" />

      <div className="absolute -left-[8%] top-[12%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(102,126,234,.12),transparent_70%)]" />

      <div className="absolute -right-[5%] bottom-[8%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(118,75,162,.10),transparent_70%)]" />
    </div>
  );
}