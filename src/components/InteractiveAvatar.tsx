import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

interface InteractiveAvatarProps {
  waveVideoUrl: string;
  thinkVideoUrl?: string;
  idleVideoUrl?: string;
  size?: number;
}

export function InteractiveAvatar({ 
  waveVideoUrl, 
  thinkVideoUrl, 
  idleVideoUrl,
  size = 280 
}: InteractiveAvatarProps) {
  const [currentState, setCurrentState] = useState<'wave' | 'think' | 'idle'>('wave');
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const topVideoRef = useRef<HTMLVideoElement>(null);
  const isLoadingRef = useRef(false);

  // 安全的视频切换函数 - 同时切换两个视频
  const switchVideo = async (videoUrl: string, shouldLoop: boolean) => {
    const video = videoRef.current;
    const topVideo = topVideoRef.current;
    if (!video || !topVideo || isLoadingRef.current) return;

    try {
      isLoadingRef.current = true;
      
      // 先暂停两个视频
      video.pause();
      topVideo.pause();
      
      // 切换到新视频
      video.src = videoUrl;
      topVideo.src = videoUrl;
      video.loop = shouldLoop;
      topVideo.loop = shouldLoop;
      video.currentTime = 0;
      topVideo.currentTime = 0;
      
      // 确保两个视频都加载完成
      await Promise.all([
        new Promise((resolve) => {
          if (video.readyState >= 2) resolve(null);
          else video.addEventListener('loadeddata', () => resolve(null), { once: true });
        }),
        new Promise((resolve) => {
          if (topVideo.readyState >= 2) resolve(null);
          else topVideo.addEventListener('loadeddata', () => resolve(null), { once: true });
        })
      ]);
      
      // 同步播放
      video.currentTime = 0;
      topVideo.currentTime = 0;
      await video.play();
      await topVideo.play();
      
      isLoadingRef.current = false;
    } catch (error) {
      // 忽略 AbortError，这是正常的中断
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error('Video playback error:', error);
      }
      isLoadingRef.current = false;
    }
  };

  // 保持两个视频同步
  useEffect(() => {
    const video = videoRef.current;
    const topVideo = topVideoRef.current;
    if (!video || !topVideo) return;

    const syncVideos = () => {
      if (Math.abs(video.currentTime - topVideo.currentTime) > 0.1) {
        topVideo.currentTime = video.currentTime;
      }
    };

    video.addEventListener('timeupdate', syncVideos);

    return () => {
      video.removeEventListener('timeupdate', syncVideos);
    };
  }, []);

  // 页面加载时播放挥手动画
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleWaveEnd = () => {
      setCurrentState(idleVideoUrl ? 'idle' : 'wave');
    };

    // 第一次播放挥手视频
    switchVideo(waveVideoUrl, !idleVideoUrl);
    video.addEventListener('ended', handleWaveEnd);

    return () => {
      video.removeEventListener('ended', handleWaveEnd);
      video.pause();
    };
  }, [waveVideoUrl, idleVideoUrl]);

  // 处理视频切换
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      if (currentState === 'think') {
        // 思考动画结束后回到待机状态
        setCurrentState(idleVideoUrl ? 'idle' : 'wave');
      }
    };

    let videoUrl = waveVideoUrl;
    let shouldLoop = false;

    if (currentState === 'wave') {
      videoUrl = waveVideoUrl;
      shouldLoop = !idleVideoUrl; // 如果没有待机视频，挥手视频循环
    } else if (currentState === 'think' && thinkVideoUrl) {
      videoUrl = thinkVideoUrl;
      shouldLoop = false;
    } else if (currentState === 'idle' && idleVideoUrl) {
      videoUrl = idleVideoUrl;
      shouldLoop = true;
    }

    switchVideo(videoUrl, shouldLoop);

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, [currentState, waveVideoUrl, thinkVideoUrl, idleVideoUrl]);

  // 点击触发思考动画
  const handleClick = () => {
    if (thinkVideoUrl && currentState !== 'think') {
      setCurrentState('think');
    }
  };

  return (
    <motion.div
      className="relative cursor-pointer select-none flex-shrink-0"
      style={{ 
        width: size, 
        height: size * 1.3,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.5,
        ease: [0.34, 1.56, 0.64, 1]
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 圆形玻璃容器 - 背景装饰 */}
      <div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          top: size * 0.5,
          left: 0,
          background: 'rgba(17, 24, 39, 0.6)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          zIndex: 1,
        }}
      />

      {/* 底层视频 - 圆形裁剪（身体在圆内） */}
      <div
        className="absolute"
        style={{
          width: size,
          height: size * 1.3,
          top: 0,
          left: 0,
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: size,
            height: size,
            position: 'absolute',
            top: size * 0.5,
            left: 0,
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <video
            ref={videoRef}
            style={{
              width: size,
              height: size * 1.3,
              objectFit: 'contain',
              objectPosition: 'center top',
              position: 'absolute',
              top: -size * 0.5,
              left: 0,
            }}
            muted
            playsInline
            preload="auto"
          />
        </div>
      </div>

      {/* 顶层视频 - 只显示上半身（头部露出） */}
      <div
        className="absolute"
        style={{
          width: size,
          height: size * 1.3,
          top: 0,
          left: 0,
          zIndex: 3,
        }}
      >
        <div
          style={{
            width: size,
            height: size * 0.55,
            overflow: 'hidden',
          }}
        >
          <video
            ref={topVideoRef}
            style={{
              width: size,
              height: size * 1.3,
              objectFit: 'contain',
              objectPosition: 'center top',
            }}
            muted
            playsInline
            preload="auto"
          />
        </div>
      </div>

      {/* 悬浮提示 */}
      {isHovered && thinkVideoUrl && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full text-xs z-10"
          style={{
            background: 'rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            color: 'var(--color-accent)',
            bottom: -20,
          }}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
        >
          点击看看会发生什么 👀
        </motion.div>
      )}
    </motion.div>
  );
}