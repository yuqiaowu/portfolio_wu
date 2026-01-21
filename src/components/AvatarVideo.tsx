import { motion } from "motion/react";

interface AvatarVideoProps {
  videoUrl: string;
  size?: number;
}

export function AvatarVideo({ videoUrl, size = 320 }: AvatarVideoProps) {
  return (
    <motion.div
      className="relative flex-shrink-0 w-full max-w-[280px] sm:max-w-[320px] md:max-w-none"
      style={{ aspectRatio: '1/1', maxWidth: size }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* 视频 - 直接显示，不添加额外装饰 */}
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}