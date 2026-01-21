import { Layers, Users, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// 图片资源
import img1 from "figma:asset/a48fbe413980c3c617de7a2a5a4c4456edad6efe.png";
import img2 from "figma:asset/7aee402408f22db5a51fff9ebb023ef13e1deb8d.png";
import img3 from "figma:asset/94f67a8d096216b2bd5dffe0eb9cf0bdfddaa19a.png";
import img4 from "figma:asset/5d4c6f91554ac4ef6592dfd659db50bbddf02418.png"; // 02 现有NPS问卷局限性
import img5 from "figma:asset/dfbe6bfbc5b50bf193f7acd5754413de8b7d4711.png"; // 03 体验引导不足-标签定位
import img6 from "figma:asset/6825c9c2a233bdb190e595a3fdb2585cb91467fc.png"; // 04 体验引导不足-体验问题设计
import img7 from "figma:asset/51f00c60470d6cd01c9f30bc44562d3ce39f3bf1.png"; // 05 体验回题设计-2.体验问题设计
import img8 from "figma:asset/e44671c679e3b7ced0e2d224093db613f11a617a.png"; // 06 选项结果和反馈没有关联-4.后台展示（新）
import img9 from "figma:asset/59566a83e995db0b476a31799b6f059fb5debc08.png"; // 07 选项结果和反馈没有关联-前端展示
import img17 from "figma:asset/00123313a62290d0a0e0e366d334d2c62e22c69c.png"; // 08 用户访谈现场照片和文字整理
import img18 from "figma:asset/9de5df0221c4f70ac4930ac7afe9da725f937722.png"; // 09 可用性测试前期准备
import img19 from "figma:asset/46fa8917302bca6ee2e990364815d230cf638497.png"; // 10 家装配置b端用户深度访谈定性分析
import img20 from "figma:asset/f41cf02cad8df5496c8e412abda8adbc1046bed3.png"; // 11 筛选数据洞察-标签vs点击排序
import img21 from "figma:asset/bedad65304b6d65aa25e51cd58768c078dccd68a.png"; // 12 筛选数据洞察-房源状态和装修风格
import img22 from "figma:asset/33a40ad5abd1b4d556b92214653ec901abceda48.png"; // 13 筛选数据洞察-移动端界面分析
import img23 from "figma:asset/0eef35d238edcef3d1990593a03d283e4052dcb8.png"; // 14 筛选数据-洞察-房源朝向（组合多于选择）
import img24 from "figma:asset/e638673ed2aa30530ee1959818c72ecbb08676de.png"; // 15 筛选数据-洞察-组合标签多
import img25 from "figma:asset/12f22488b17b07a98e16c43c4f0b30eb2d25003f.png"; // 16 目前筛选存在问题
import img10 from "figma:asset/5354564e3db5484add5d7a74f016eaf04261cdf7.png"; // 第三张头图 - 家装后台业务梳理线上化
import img11 from "figma:asset/a9b3b28efdd2574297c4614ed6e552f85524a1cd.png"; // 02 家装配置前期业务流程梳理
import img12 from "figma:asset/94f67a8d096216b2bd5dffe0eb9cf0bdfddaa19a.png"; // 03 家装配置b端用户定量研究问卷
import img13 from "figma:asset/cfe611fd6679a4dfc21f0e493a45b5e20ec8e96d.png"; // 04 家装配置b端前期业务流程梳理（含数据标注）
import img14 from "figma:asset/4be89dee379999a0532d29bda3301c8b59d4165b.png"; // 05 用户深度访谈定性分析
import img15 from "figma:asset/8865acdf22fa4a1c8610dfafdce9e57b05556faf.png"; // 06 收集业务线下流程→线上线下一致化
import img16 from "figma:asset/f045948876711219187804e693004c5183303597.png"; // 07 收集业务线下流程详细视图
import img26 from "figma:asset/fd3a0883935cba6d47e497d0467c9393c7769330.png"; // 08 家装配置B端线上线下一致化
import img27 from "figma:asset/8cf4490ebe89f3b63fea5baa2e388144c118e4d3.png"; // 09 家装配置页面重构
import img28 from "figma:asset/3384a6e06be3380eb05824c406591e0a6c5a67a3.png"; // 16 配置方案移动端界面设计
import img29 from "figma:asset/3a9d7b42bdd8f373cbaab85389d84ca8edd697d7.png"; // 11 整理业务流程，发现问题并提出改进方案
import img30 from "figma:asset/df78e8dcfe9195b516d3a5ab5e0ca6c79f5dff2a.png"; // 12 派送流程-了解现状
import img31 from "figma:asset/a934da348acc39fc439edbce2b3753a3d0db73b0.png"; // 13 框架设计-关联性排序
import img32 from "figma:asset/9b4b1f03587286f8056aa5bf9af813317f6a7ad6.png"; // 14 结构问题-无力承载并行任务
import img33 from "figma:asset/3488e4e8c853b3a66fb1e1580391a02cff07076a.png"; // 15 配置项-采购中心数据库
import img34 from "figma:asset/c82905a6241caeccf2f232b6f8e0738b4bc93743.png"; // 16 框架设计-如何描述床?

// 好奇心板块图片
import curiosityImg1 from "figma:asset/d0997d613692b9b5431311b0847c93ef533fc81f.png"; // 01 VR/全景体验优化
import curiosityImg2 from "figma:asset/27d9e5ad3a9383fab20dd162822e262f71ce1314.png"; // 02 体验地图走查
import curiosityImg3 from "figma:asset/425631a205eabb837e089f8ca18c8d80527f7d2a.png"; // 03 体验优化历程回顾
import curiosityImg4 from "figma:asset/594fe2d19610e3b43a11378fc5272174d7c6318e.png"; // 04 体验优化历程回顾详细
import curiosityImg5 from "figma:asset/9311478a1903710281473c2be90cf62df5f0d42b.png"; // 05 对VR/全景视频调研
import curiosityImg6 from "figma:asset/fdbd44650ce8255b96bd88c813b4e2f9fa6da2c1.png"; // 06 VR实现的技术调研
import curiosityImg7 from "figma:asset/8355b5d64372c7b2b1bf73924904ff3722d514f2.png"; // 07 制作可交互原型可用性测试
import curiosityImg8 from "figma:asset/8ccde2f012b17663b553b987be6b0ec56cabd0aa.png"; // 08 Part 02 基于可用性测试的探索
import curiosityImg9 from "figma:asset/d46338babfb3672da72cfe43b345589505af7be8.png"; // 09 界面功能问卷+定性访谈
import curiosityImg10 from "figma:asset/594abf85550f3460f54307406c6b68a22bc19dc7.png"; // 10 Part 02 布局调整
import curiosityImg11 from "figma:asset/4f8e4f3f4d403b18ff61b239df744150300fcf86.png"; // 11 Part 02「回到主视角」按钮优化
import curiosityImg12 from "figma:asset/f7a7075b8318bf74f49f5fae44a9b226c68d341f.png"; // 12 Part 02 小木说模块——亲和力
import curiosityImg13 from "figma:asset/2edc426b86f1b934bb50d34e58ef7c3e528a8fa6.png"; // 13 Part 01 小区VR的引导设计
import curiosityImg14 from "figma:asset/1edd969fb67020009fec6f1518360bed7314b24b.png"; // 14 心舍2.0 详情页改版
import curiosityImg15 from "figma:asset/f0b5ead80664be247fe75c46c7de42debd345ed9.png"; // 15 01介绍-负责部分
import curiosityImg16 from "figma:asset/abc5d16cda68de01a472bce95ffe67551f2db7a4.png"; // 16 03尝试-设计举措
import curiosityImg17 from "figma:asset/7ec99ad907c8a2b2a83f506534f8ee1015eec150.png"; // 17 03尝试-设计举措 家居板块
import curiosityImg18 from "figma:asset/87911ad7f5213187897301fbfc9072c2536c0334.png"; // 18 03尝试-设计举措 智能板块
import curiosityImg19 from "figma:asset/abab02e3271e34dfbd8fdbf71bb12c533df0413f.png"; // 19 难题-哪个更好？好在哪里？
import curiosityImg20 from "figma:asset/8c8a0d58a35f2eb41d80da3d7f50608b6054c748.png"; // 20 强化亮点内容
import curiosityImg21 from "figma:asset/87e337302ed535419a5555628fdea43f3a03d7d6.png"; // 21 如何度量框架布局和视觉的优化？
import curiosityImg22 from "figma:asset/fb7f1630896ba49b97144ae41f22e6ebf725054e.png"; // 22 访谈部分-人员招募和方案设计
import curiosityImg23 from "figma:asset/e2cdb2e7e6dedd87dc5feb9d2a2d8eecbaa00983.png"; // 23 数据与结论
import curiosityImg24 from "figma:asset/2c1f9f4a327d2a5d85d3cf8d4b73f01cabd83546.png"; // 24 个人中心头图情感化动效-适配设计方案
import curiosityImg25 from "figma:asset/1a857e64fb5fca732b8928a8f55cc2bfc1083a74.png"; // 25 三帧svga优化方案
import curiosityImg26 from "figma:asset/13df2c5ceef121f3c34b4fee0c3eaf0e400e785d.png"; // 26 三帧svga优化方案详细

const abilities = [
  {
    icon: Users,
    title: "同理心与感知力：观察用户行为，洞察用户诉求",
    titleEn: "Empathy & Insight: Observe User Behavior, Understand User Needs",
    description:
      "重要的是不仅看用户如何说，更要观察用户如何做",
    descriptionEn: "It's not just about what users say, but what they actually do",
    images: {
      hero: img1,
      gallery: [img4, img5, img6, img7, img8, img9, img17, img18, img19, img20, img21, img22, img23, img24, img25],
    },
  },
  {
    icon: Layers,
    title: "探索问题本质：理解复杂流程，产品化核心节点",
    titleEn: "Explore the Essence: Understand Complex Processes, Productize Key Moments",
    description: "设计师揣摩用户脑中的模式和梦想，并让设计与它们匹配",
    descriptionEn: "Designers understand patterns and dreams in users' minds, and match design with them",
    images: {
      hero: img10,
      gallery: [img13, img11, img12, img14, img29, img30, img31, img32, img33, img34, img15, img16, img26, img27, img28],
    },
  },
];

interface CoreAbilitiesProps {
  language: string;
}

export function CoreAbilities({ language }: CoreAbilitiesProps) {
  const isZh = language === "zh";
  const [selectedImage, setSelectedImage] = useState<
    string | null
  >(null);
  const [expandedSections, setExpandedSections] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleSection = (index: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="px-6 py-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="mb-4 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[var(--color-accent)]">
            02.
          </span>
          {isZh ? "我擅长的" : "What I Excel At"}
        </motion.h2>

        <motion.p
          className="text-[var(--color-text-secondary)] mb-8 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {isZh ? "我不费力，且乐于去做的" : "What I do effortlessly and enjoy"}
        </motion.p>

        <div className="grid grid-cols-1 gap-6">
          {/* 第一板块：好奇心是原动力 */}
          <motion.div
            className="group p-8 glass-effect rounded-3xl hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-green-500/10 before:via-transparent before:to-emerald-500/10 before:opacity-50 before:pointer-events-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            whileHover={{
              scale: 1.02,
              borderColor: "rgba(16, 185, 129, 0.3)",
            }}
          >
            {/* 标题描述 */}
            <div className="flex items-start gap-4 relative z-10 mb-8">
              <motion.div
                className="hidden md:flex p-4 glass-effect-elevated rounded-2xl flex-shrink-0"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="w-6 h-6 text-[var(--color-accent)]" />
              </motion.div>
              <div className="space-y-2 flex-1">
                <h3 className="group-hover:text-[var(--color-accent)] transition-colors">
                  {isZh ? "探索不同交互方式和新技术在有限空间的实现" : "Exploring Different Interactions and Emerging Technologies"}
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  {isZh ? "设计不止功能，好奇心是创造的原动力" : "Design is more than function, curiosity drives creation"}
                </p>
              </div>
            </div>

            {/* 图片展示区域 - 重点大图 + 小图网格 */}
            <div className="space-y-4">
              {/* 01 - VR/全景体验优化 大图 */}
              <motion.div
                className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(curiosityImg1)}
              >
                <img
                  src={curiosityImg1}
                  alt="VR全景体验优化"
                  className="w-full h-auto"
                />
              </motion.div>

              {/* 前6张小图网格 */}
              <motion.div
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {[curiosityImg2, curiosityImg3, curiosityImg4, curiosityImg5, curiosityImg6, curiosityImg7].map((img, idx) => (
                  <motion.div
                    key={idx}
                    className="rounded-2xl overflow-hidden cursor-pointer aspect-video bg-black/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      src={img}
                      alt={`好奇心案例 ${idx + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* 展开更多内容 */}
              <AnimatePresence>
                {expandedSections[-1] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4 overflow-hidden"
                  >
                    {/* 剩余小图 08-13 */}
                    <motion.div className="grid grid-cols-3 gap-4">
                      {[curiosityImg8, curiosityImg9, curiosityImg10, curiosityImg11, curiosityImg12, curiosityImg13].map((img, idx) => (
                        <motion.div
                          key={idx}
                          className="rounded-2xl overflow-hidden cursor-pointer aspect-video bg-black/20"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setSelectedImage(img)}
                        >
                          <img
                            src={img}
                            alt={`好奇心案例 ${idx + 8}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* 14 - 心舍2.0 详情页改版 大图 */}
                    <motion.div
                      className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedImage(curiosityImg14)}
                    >
                      <img
                        src={curiosityImg14}
                        alt="心舍2.0 详情页改版"
                        className="w-full h-auto"
                      />
                    </motion.div>

                    {/* 15-26 小图网格 */}
                    <motion.div className="grid grid-cols-3 gap-4">
                      {[curiosityImg15, curiosityImg16, curiosityImg17, curiosityImg18, curiosityImg19, curiosityImg20, curiosityImg21, curiosityImg22, curiosityImg23, curiosityImg24, curiosityImg25, curiosityImg26].map((img, idx) => (
                        <motion.div
                          key={idx}
                          className="rounded-2xl overflow-hidden cursor-pointer aspect-video bg-black/20"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setSelectedImage(img)}
                        >
                          <img
                            src={img}
                            alt={`好奇心案例 ${idx + 15}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 展开/收起按钮 */}
              <motion.button
                className="w-full py-4 glass-effect-elevated rounded-2xl text-[var(--color-accent)] hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() => toggleSection(-1)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{expandedSections[-1] ? (isZh ? "收起" : "Show Less") : (isZh ? "展开更多" : "Show More")}</span>
                <motion.svg
                  className="w-5 h-5"
                  animate={{ rotate: expandedSections[-1] ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
            </div>
          </motion.div>

          {/* 其他能力板块 */}
          {abilities.map((ability, index) => {
            const Icon = ability.icon;
            return (
              <motion.div
                key={index}
                className="group p-8 glass-effect rounded-3xl hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (index + 1) * 0.1,
                }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(16, 185, 129, 0.3)",
                }}
              >
                {/* 标题描述 */}
                <div className="flex items-start gap-4 relative z-10 mb-8">
                  <motion.div
                    className="hidden md:flex p-4 glass-effect-elevated rounded-2xl flex-shrink-0"
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </motion.div>
                  <div className="space-y-2 flex-1">
                    <h3 className="group-hover:text-[var(--color-accent)] transition-colors">
                      {isZh ? ability.title : ability.titleEn}
                    </h3>
                    <p className="text-[var(--color-text-secondary)]">
                      {isZh ? ability.description : ability.descriptionEn}
                    </p>
                  </div>
                </div>

                {/* 图片展示区域 */}
                {ability.images && (
                  <div className="space-y-4">
                    {/* 头图 - 固定显示 */}
                    <motion.div
                      className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ scale: 1.02 }}
                      onClick={() =>
                        setSelectedImage(ability.images.hero)
                      }
                    >
                      <img
                        src={ability.images.hero}
                        alt={`${ability.title} 主图`}
                        className="w-full h-auto"
                      />
                    </motion.div>

                    {/* 前6张图片 - 3列网格布局 */}
                    <motion.div
                      className="grid grid-cols-3 gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {ability.images.gallery.slice(0, 6).map(
                        (image, imgIndex) => (
                          <motion.div
                            key={imgIndex}
                            className="rounded-2xl overflow-hidden cursor-pointer aspect-video bg-black/20"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{
                              opacity: 1,
                              scale: 1,
                            }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: 0.4 + imgIndex * 0.1,
                            }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() =>
                              setSelectedImage(image)
                            }
                          >
                            <img
                              src={image}
                              alt={`${ability.title} 示例 ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        ),
                      )}
                    </motion.div>

                    {/* 展开更多内容 */}
                    {ability.images.gallery.length > 6 && (
                      <>
                        <AnimatePresence>
                          {expandedSections[index] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.5 }}
                              className="overflow-hidden"
                            >
                              <motion.div className="grid grid-cols-3 gap-4">
                                {ability.images.gallery.slice(6).map(
                                  (image, imgIndex) => (
                                    <motion.div
                                      key={imgIndex}
                                      className="rounded-2xl overflow-hidden cursor-pointer aspect-video bg-black/20"
                                      initial={{ opacity: 0, scale: 0.9 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{
                                        duration: 0.4,
                                        delay: imgIndex * 0.05,
                                      }}
                                      whileHover={{ scale: 1.05 }}
                                      onClick={() =>
                                        setSelectedImage(image)
                                      }
                                    >
                                      <img
                                        src={image}
                                        alt={`${ability.title} 示例 ${imgIndex + 7}`}
                                        className="w-full h-full object-cover"
                                      />
                                    </motion.div>
                                  ),
                                )}
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* 展开/收起按钮 */}
                        <motion.button
                          className="w-full py-4 glass-effect-elevated rounded-2xl text-[var(--color-accent)] hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                          onClick={() => toggleSection(index)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>{expandedSections[index] ? (isZh ? "收起" : "Show Less") : (isZh ? "展开更多" : "Show More")}</span>
                          <motion.svg
                            className="w-5 h-5"
                            animate={{ rotate: expandedSections[index] ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </motion.button>
                      </>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 图片放大预览模态框 */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 p-3 glass-effect-elevated rounded-full hover:bg-white/20 transition-colors z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              className="max-w-7xl max-h-[90vh] overflow-auto scrollbar-hide"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="放大预览"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}