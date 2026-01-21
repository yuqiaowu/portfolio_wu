import { ArrowDown } from "lucide-react";
import { AvatarVideo } from "./AvatarVideo";
import { motion } from "framer-motion";

interface HeroProps {
  language: string;
}

export function Hero({ language }: HeroProps) {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // 内容配置
  const content = {
    zh: {
      greeting: "Hi，我的名字是：",
      name: "吴雨桥",
      title: "我是一名「产品设计师」",
      intro: (
        <>
          通过设计解决问题是我的快乐与成就之源
          <br />
          我正在寻找可以「共同创造的可靠伙伴」
          <br />
          首先，让我先介绍下自己……
        </>
      ),
    },
    en: {
      greeting: "Hi, my name is:",
      name: "Jo",
      title: "I'm a Product Designer",
      intro: (
        <>
          Solving problems through design is my source of joy and fulfillment
          <br />
          I'm looking for reliable partners to create together
          <br />
          First, let me introduce myself...
        </>
      ),
    },
  };

  const currentContent = content[language as keyof typeof content] || content.zh;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* iOS 风格的流动背景光晕 - 绿色主色调 + 红/紫色点缀 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 绿色主光晕 */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-emerald-500 rounded-full opacity-12 blur-[120px]"
          style={{ top: "20%", left: "10%" }}
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute w-[600px] h-[600px] bg-green-400 rounded-full opacity-10 blur-[130px]"
          style={{ bottom: "15%", right: "15%" }}
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* 红色点缀光晕 - 增强显示 */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-rose-500 rounded-full opacity-15 blur-[110px]"
          style={{ top: "50%", right: "20%" }}
          animate={{
            x: [0, 35, 0],
            y: [0, 35, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute w-[380px] h-[380px] bg-red-400 rounded-full opacity-12 blur-[95px]"
          style={{ top: "25%", right: "35%" }}
          animate={{
            x: [0, -25, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* 紫色点缀光晕 */}
        <motion.div
          className="absolute w-[450px] h-[450px] bg-purple-500 rounded-full opacity-8 blur-[110px]"
          style={{ bottom: "30%", left: "25%" }}
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute w-[350px] h-[350px] bg-emerald-400 rounded-full opacity-10 blur-[90px]"
          style={{ top: "60%", left: "50%" }}
          animate={{
            x: [0, -30, 0],
            y: [0, -35, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {/* 左右布局：左侧视频头像，右侧文字 */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* 左侧：视频头像 */}
          <div className="flex-shrink-0">
            import avatarVideoUrl from "../assets/videos/avatar_video_optimized.mp4";

            // ... existing imports

            export function Hero({language}: HeroProps) {
  // ... existing code

          </div>

          {/* 右侧：文字内容 */}
          <div
            className="space-y-4 md:space-y-6 flex-1 text-center md:text-left"
          >
            {/* 问候语 - 高亮显示 */}
            <p
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 text-lg md:text-xl mb-3 font-semibold"
            >
              {currentContent.greeting}
            </p>

            {/* 姓名 */}
            <h1
              className="text-[var(--color-text-primary)] text-4xl md:text-6xl"
            >
              {currentContent.name}
            </h1>

            {/* 职业 - 高亮显示 */}
            <h2
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-4 font-semibold text-2xl md:text-4xl"
            >
              {currentContent.title}
            </h2>

            {/* 自我介绍 */}
            <p
              className="text-[var(--color-text-secondary)] max-w-2xl text-base md:text-lg leading-relaxed"
            >
              {currentContent.intro}
            </p>
          </div>
        </div>
      </div>

      {/* iOS 26 风格的引导下滑箭头 */}
      <motion.button
        onClick={scrollToProjects}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg hover:bg-white/15 transition-all duration-300 group"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-[var(--color-accent)] group-hover:text-emerald-400 transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
}