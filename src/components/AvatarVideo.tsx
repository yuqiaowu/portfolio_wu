import { motion } from "motion/react";
import { useState } from "react";
import posterUrl from "../assets/videos/avatar_poster_v2.png";

interface AvatarVideoProps {
  videoUrl: string;
  size?: number;
}

export function AvatarVideo({ videoUrl, size = 320 }: AvatarVideoProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 w-full max-w-[280px] sm:max-w-[320px] md:max-w-none"
      style={{ aspectRatio: '1/1', maxWidth: size }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* 封面图片 - 视频加载前显示 */}
      <motion.img
        src={posterUrl}
        alt="Avatar Poster"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        animate={{ opacity: isVideoLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* 视频 - 加载完成后淡入 */}
      <motion.video
        src={videoUrl}
        poster={posterUrl}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-contain"
        style={{ background: "transparent" }}
        onPlaying={() => setIsVideoLoaded(true)}
        onClick={(e: React.MouseEvent<HTMLVideoElement>) => {
          const video = e.currentTarget;
          if (video.paused) {
            video.play();
          }
        }}
        animate={{ opacity: isVideoLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}