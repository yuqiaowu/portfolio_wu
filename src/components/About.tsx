import { motion } from "motion/react";
import { useState, useEffect } from "react";
// 按照索引顺序重命名图片
import photo1 from "figma:asset/3319a204da17cec6bc9151557591406d7eb0b0e9.png"; // 原img6
import photo2 from "figma:asset/c188c5dcfbcbc30d573be88f444bc7a6250ca012.png"; // 原img5
import photo3 from "figma:asset/5802e82b194b97eb9c6f5acaf7e6f41cdce625a9.png"; // 原img17
import photo4 from "figma:asset/dfb9fff1ace8cdc54374a86a2cf490779f1df6de.png"; // 原img2
import photo5 from "figma:asset/8a1423fd0ff480c5fde11d5f91a153c4706b0e12.png"; // 原img3
import photo6 from "figma:asset/7790ce0fb2b4581b296ade03762be5f3fecb2f23.png"; // 原img1
import photo7 from "figma:asset/b887766512acd07f7f86a6cd2ae1734a48c9857f.png"; // 原img7
import photo8 from "figma:asset/6eb298ab88b9cf6c7f6634a22893ac76528a2501.png"; // 原img11
import photo9 from "figma:asset/8ea5bc366a1722e64921cb2df8e11dc0df58ddb3.png"; // 原img16
import photo10 from "figma:asset/3b7e788d4998996427a36df8e32dbd9b327e98c1.png"; // 原img18
import photo11 from "figma:asset/30e6cf1a7e8a19de0876726611b0db9b53c90b8f.png"; // 原imgAward
import photo12 from "figma:asset/d0477eca8306d180e4bd328573ff38d4a6d1f389.png"; // 原img15
import photo13 from "figma:asset/b6c6ca50b2684cabba6742629044cba24fb81546.png"; // 原img8
import photo14 from "figma:asset/1df0e1e88d5ce2439e98bdb4c90fba9b9114ab95.png"; // 原img9
import photo15 from "figma:asset/df4c0c5e2a397324728f869f63796a5fed08ffe7.png"; // 原imgNew
import photo16 from "figma:asset/069eaddb1982bb638565945d44b025cded2ebe75.png"; // 原img13
import photo17 from "figma:asset/1655a893f0fe8c139100035195ccd9652751ec1d.png"; // 原img14
import photo18 from "figma:asset/b5bcd178b58e597a8870a470b6cba5af8f44de81.png"; // 原img4
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AboutProps {
  language: string;
}

export function About({ language }: AboutProps) {
  const [selectedCompany, setSelectedCompany] = useState(0);
  const [hoveredPhotoIndex, setHoveredPhotoIndex] = useState<
    number | null
  >(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const experiences = [
    {
      period: "2018.08-2024.01 (5年)",
      periodEn: "2018.08-2024.01 (5 years)",
      company: "北京自如",
      companyEn: "Beijing Ziroom",
      title: "UX设计师",
      titleEn: "UX Designer",
      fullCompany: "北京自如信息科技有限公司",
      fullCompanyEn:
        "Beijing Ziroom Information Technology Co., Ltd.",
      responsibilities: [
        "任自如C端租住找房流程组组长，负责自如搜索-详情-看房转化链路优化",
        "优化C端设计度量标准，设计NPS评价系统，规定设计量化指标",
        "自如家装线（B端）配置/协同 APP 0-1 从调研梳理业务逻辑到产品上线",
        "设计管理：组内日常管理，招聘，规划人员能力模型，优化工作流量化标准，沉淀设计方法资产，对产出结果负责",
      ],
      responsibilitiesEn: [
        "Led Ziroom's C-end housing search process team, responsible for optimizing the search-details-viewing conversion funnel",
        "Optimized C-end design measurement standards, designed NPS evaluation system, and established design quantification metrics",
        "Led Ziroom's home decoration line (B-end) configuration/collaboration APP from 0-1, from research and business logic organization to product launch",
        "Design management: daily team management, recruitment, planning personnel capability model, optimizing workflow quantification standards, accumulating design methodology assets, and being accountable for output results",
      ],
    },
    {
      period: "2015.04-2017.02 (2年)",
      periodEn: "2015.04-2017.02 (2 years)",
      company: "恩威集团",
      companyEn: "Enwei Group",
      title: "UI设计师",
      titleEn: "UI Designer",
      fullCompany: "恩威集团",
      fullCompanyEn: "Enwei Group",
      responsibilities: [
        "负责恩威生活App首页、详情页、付款页体验优化，太子峪雪场小程序及线下物料设计",
        "宸瑞健康App首页改版、在线问诊板块流程优化",
        "游四方短租App主业务体验优化、视觉改版",
        "恩威生活详情页、付款页体验优化",
        "恩威生活小程序",
      ],
      responsibilitiesEn: [
        "Responsible for Enwei Life app homepage, detail page, and payment page experience optimization; Taiziyugu Snow Resort mini-program and offline materials design",
        "Chenrui Health app homepage redesign; optimized online consultation module flow",
        "YouSifang short-term rental app core experience optimization and visual redesign",
        "Enwei Life detail and payment page experience optimization",
        "Enwei Life WeChat mini-program",
      ],
    },
    {
      period: "2014.02-2014.12 (1年)",
      periodEn: "2014.02-2014.12 (1 year)",
      company: "中航建筑工程有限公司",
      companyEn: "AVIC Architecture Co., Ltd.",
      title: "建筑设计师助理",
      titleEn: "Architectural Design Assistant",
      fullCompany: "中航建筑工程有限公司",
      fullCompanyEn: "AVIC Architecture Co., Ltd.",
      responsibilities: [
        "协助建筑设计师完成方案设计及施工图绘制，确保图纸符合项目规范与技术要求",
        "参与投标项目，独立完成标书制作与图纸排版，提升标书整体专业性与可视化表达",
      ],
      responsibilitiesEn: [
        "Assisted architectural designers in completing schematic design and construction drawing preparation, ensuring drawings met project specifications and technical requirements",
        "Participated in bidding projects, independently completed bid document production and drawing layout, enhancing the overall professionalism and visual expression of bid documents",
      ],
    },
  ];

  const currentExp = experiences[selectedCompany];

  const photos = [
    // 第一屏索引 0-5
    // 索引0：第一排第一张
    {
      src: photo3,
      alt: "产品设计演讲",
      description:
        "23年自如设计周作为分享嘉宾，分享主题：《设计度量中的反直觉》",
      descriptionEn:
        "2023 Ziroom Design Week guest speaker: 'Counterintuitive Aspects in Design Metrics'",
    },
    // 索引1：第一排第一张
    {
      src: photo3,
      alt: "产品设计演讲",
      description:
        "23年自如设计周作为分享嘉宾，分享主题：《设计度量中的反直觉》",
      descriptionEn:
        "2023 Ziroom Design Week guest speaker: 'Counterintuitive Aspects in Design Metrics'",
    },
    // 索引2：第一排第二张
    {
      src: photo1,
      alt: "产品设计演讲",
      description:
        "23年自如设计周作为分享嘉宾，分享主题：《设计度量中的反直觉》",
      descriptionEn:
        "2023 Ziroom Design Week guest speaker: 'Counterintuitive Aspects in Design Metrics'",
    },

    // 索引3：第一排第三张
    {
      src: photo4,
      alt: "产品分享演讲",
      description:
        "23年自如设计周作为分享嘉宾，分享主题：《设计度量中的反直觉》",
      descriptionEn:
        "2023 Ziroom Design Week guest speaker: 'Counterintuitive Aspects in Design Metrics'",
    },
    // 索引4：第二排第一张（原#7）
    {
      src: photo2,
      alt: "设计师价值分享",
      description:
        "22年自如设计周作为分享嘉宾，分享主题：《创意型交互设计助力线下体验线上化》",
      descriptionEn:
        "2022 Ziroom Design Week guest speaker: 'Creative Interaction Design Empowers Offline-to-Online Experience'",
    },
    // 索引5：第二排第二张
    {
      src: photo5,
      alt: "行业演讲",
      description:
        "22年自如设计周作为分享嘉宾，分享主题：《创意型交互设计助力线下体验线上化》",
      descriptionEn:
        "2022 Ziroom Design Week guest speaker: 'Creative Interaction Design Empowers Offline-to-Online Experience'",
    },
    // 索引6：第二排第三张（原#13）
    {
      src: photo13,
      alt: "IXDC设计大会",
      description: "参加IXDC设计大会后合影",
      descriptionEn: "Group photo at IXDC Design Conference",
    },
    // 第二屏索引 7-12
    // 索引7：第一排第一张（原#4）
    {
      src: photo6,
      alt: "用户研究会议",
      description: "配置人员访谈中",
      descriptionEn: "Conducting user interviews",
    },
    // 索引8：第一排第二张
    {
      src: photo8,
      alt: "团队培训分享",
      description: "日常项目讨论",
      descriptionEn: "Daily project discussion",
    },
    // 索引9：第一排第三张
    {
      src: photo9,
      alt: "用户研究与测试",
      description: "参与眼动测试，了解用户行为",
      descriptionEn:
        "Participating in eye-tracking test to understand user behavior",
    },
    // 索引10：第二排第一张（原#11）
    {
      src: photo11,
      alt: "最佳设计师奖",
      description: "配置APP上线后的一些团队肯定",
      descriptionEn: "Team recognition after configuration APP launch",
    },
    // 索引11：第二排第二张（原#12）
    {
      src: photo15,
      alt: "自如设计周演讲",
      description: "配置app上线后作为最佳设计师被表彰",
      descriptionEn: "Awarded as Best Designer after configuration app launch",
    },
    // 索引12：第二排第三张（原#15）
    {
      src: photo7,
      alt: "团队庆祝活动",
      description: "配置app 成功上线后的庆功会",
      descriptionEn:
        "Celebration event after successful configuration app launch",
    },
    // 第三屏索引 13-18
    // 索引13：第一排第一张（原#12）
    {
      src: photo12,
      alt: "团队环境体验奖",
      description: "组织用研学习，给优秀的成员颁奖",
      descriptionEn:
        "Organizing UX research training and awarding excellent members",
    },
    // 索引14：第一排第二张（原#15）
    {
      src: photo10,
      alt: "产品路径规划",
      description:
        "和深度用户讨论如何设计复杂功能的分类来更加符合用户习惯",
      descriptionEn:
        "Discussing with power users how to design complex feature categorization to better match user habits",
    },
    // 索引15：第一排第三张（原#14）
    {
      src: photo14,
      alt: "产品思维演讲",
      description: "参加产品经理大会看到了梁宁老师",
      descriptionEn:
        "Attending Product Manager Conference and meeting Teacher Liang Ning",
    },
    // 索引16：第二排第一张
    {
      src: photo16,
      alt: "MasterGo设计工程化演讲",
      description: "参加MasterGo 2.0发布会",
      descriptionEn: "Attending MasterGo 2.0 Launch Event",
    },
    // 索引17：第二排第二张
    {
      src: photo17,
      alt: "Bitcoin Asia大会",
      description: "参加香港比特币asia大会",
      descriptionEn: "Attending Bitcoin Asia Conference in Hong Kong",
    },
    // 索引18：第二排第三张
    {
      src: photo18,
      alt: "团队合作",
      description: "和团队参加阿里设计周",
      descriptionEn: "Attending Alibaba Design Week with team",
    },
  ];

  // 18张照片，每屏6张（上下两排，每排3张），共3屏
  const totalPages = 3;

  // 创建无限循环轮播数据：在原有3屏基础上，末尾追加第一屏的副本
  // 这样当滑到第4屏（索引3）时，会瞬间重置到第1屏（索引0），实现无缝循环
  const allScreens = [
    photos.slice(0, 6),   // 第1屏
    photos.slice(6, 12),  // 第2屏
    photos.slice(12, 18), // 第3屏
    photos.slice(0, 6),   // 第1屏的副本（用于无缝循环）
  ];

  // 自动滚动和进度条逻辑
  useEffect(() => {
    // 如果鼠标悬停在照片上，暂停进度
    if (hoveredPhotoIndex !== null) {
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 100 / 80; // 8秒完成，每100ms增加1.25%
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [hoveredPhotoIndex]);

  // 当进度达到100%时切换到下一页
  useEffect(() => {
    if (progress >= 100 && !isTransitioning) {
      setIsTransitioning(true);

      // 向左滑动到下一页
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      setProgress(0);

      // 动画完成后检查是否需要重置到第一屏
      setTimeout(() => {
        // 如果当前在第4屏（索引3，即第一屏的副本），瞬间跳回第一屏（索引0）
        if (nextPage === 3) {
          setCurrentPage(0);
        }
        setIsTransitioning(false);
      }, 600); // 与滑动动画时长一致
    }
  }, [progress, currentPage, isTransitioning]);

  // 手动点击切换页面时重置进度
  const handlePageChange = (index: number) => {
    if (!isTransitioning) {
      setCurrentPage(index);
      setProgress(0);
    }
  };

  return (
    <section id="about" className="px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* 标题 */}
        <motion.h2
          className="mb-4 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[var(--color-accent)]">01.</span>
          {language === "zh" ? "关于我" : "About Me"}
        </motion.h2>

        {/* 工作经历板块 - 左侧公司列表，右侧详细信息 */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* 左侧 - 公司列表 */}
          <motion.div
            className="md:col-span-1 space-y-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {experiences.map((exp, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCompany(index)}
                className={`w-full text-left px-4 sm:px-6 py-4 rounded-2xl transition-all duration-300 ${selectedCompany === index
                    ? "glass-effect-elevated border-l-4 border-[var(--color-accent)]"
                    : "glass-effect hover:glass-effect-elevated"
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <p
                  className={`font-medium mb-1 text-sm sm:text-base ${selectedCompany === index
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-text-primary)]"
                    }`}
                >
                  {language === "zh" ? exp.company : exp.companyEn}
                </p>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
                  {language === "zh" ? exp.period : exp.periodEn}
                </p>
              </motion.button>
            ))}
          </motion.div>

          {/* 右侧 - 详细信息 */}
          <motion.div
            key={selectedCompany}
            className="md:col-span-2 ios-card p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-[var(--color-text-primary)] mb-2">
              {language === "zh" ? currentExp.title : currentExp.titleEn}
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm mb-6">
              {language === "zh" ? currentExp.period : currentExp.periodEn}
            </p>

            {currentExp.responsibilities.length > 0 && (
              <ul className="space-y-2">
                {(language === "zh"
                  ? currentExp.responsibilities
                  : currentExp.responsibilitiesEn
                ).map((resp, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[var(--color-accent)] flex-shrink-0">
                      ▸
                    </span>
                    <span className="text-[var(--color-text-secondary)] leading-relaxed">
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>

        {/* 照片墙 */}
        <motion.div
          className="mt-20 -mx-6 md:-mx-12 lg:-mx-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[var(--color-text-primary)] mb-8 flex items-center gap-4 px-6 md:px-12 lg:px-24">
            {language === "zh" ? "工作瞬间" : "Work Moments"}
          </h3>

          <p className="text-[var(--color-text-secondary)] text-sm mb-8 -mt-4 px-6 md:px-12 lg:px-24">
            {language === "zh"
              ? "喜欢参与思想的讨论和碰撞，小火花也有价值"
              : "I enjoy participating in discussions and collisions of ideas, even small sparks have value"}
          </p>

          <div className="space-y-6">
            {/* 无限循环轮播容器 */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-600 ease-in-out"
                style={{
                  transform: `translateX(-${currentPage * 100}%)`,
                  transition: isTransitioning ? 'transform 0.6s ease-in-out' : 'none',
                }}
              >
                {allScreens.map((screen, screenIndex) => (
                  <div
                    key={screenIndex}
                    className="w-full flex-shrink-0 space-y-3 md:space-y-6"
                  >
                    {/* 第一排 */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 px-4 md:px-12 lg:px-24">
                      {screen.slice(0, 3).map((photo, index) => (
                        <div
                          key={`screen${screenIndex}-row1-${index}`}
                          className={`ios-card overflow-hidden group cursor-pointer ${index === 2 ? 'hidden md:block' : ''}`}
                          onMouseEnter={() => setHoveredPhotoIndex(index * 2)}
                          onMouseLeave={() => setHoveredPhotoIndex(null)}
                        >
                          <div className="relative aspect-[16/10] overflow-hidden w-full h-full bg-white/5">
                            <img
                              src={photo.src}
                              alt={photo.alt}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {photo.description && (
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-2 md:p-4 lg:p-6">
                                <p className="text-white text-[10px] md:text-xs lg:text-sm leading-tight md:leading-relaxed whitespace-pre-line line-clamp-3 md:line-clamp-none">
                                  {language === "zh"
                                    ? photo.description
                                    : photo.descriptionEn}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 第二排 */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 px-4 md:px-12 lg:px-24">
                      {screen.slice(3, 6).map((photo, index) => (
                        <div
                          key={`screen${screenIndex}-row2-${index}`}
                          className={`ios-card overflow-hidden group cursor-pointer ${index === 2 ? 'hidden md:block' : ''}`}
                          onMouseEnter={() => setHoveredPhotoIndex(index * 2 + 1)}
                          onMouseLeave={() => setHoveredPhotoIndex(null)}
                        >
                          <div className="relative aspect-[16/10] overflow-hidden w-full h-full bg-white/5">
                            <img
                              src={photo.src}
                              alt={photo.alt}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {photo.description && (
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-2 md:p-4 lg:p-6">
                                <p className="text-white text-[10px] md:text-xs lg:text-sm leading-tight md:leading-relaxed whitespace-pre-line line-clamp-3 md:line-clamp-none">
                                  {language === "zh"
                                    ? photo.description
                                    : photo.descriptionEn}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 苹果风格的进度条控制器 */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {/* 进度点 */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
                {Array.from({ length: totalPages }).map(
                  (_, index) => {
                    // 显示逻辑：当currentPage为3时，实际显示第0页的进度
                    const displayPage = currentPage % totalPages;
                    const isActive = displayPage === index;

                    return (
                      <button
                        key={index}
                        onClick={() => handlePageChange(index)}
                        className="group relative"
                        aria-label={`跳转到第 ${index + 1} 页`}
                      >
                        {isActive ? (
                          // 当前项：带进度条的长条
                          <div className="relative w-8 h-1.5 rounded-full bg-white/20 overflow-hidden">
                            <motion.div
                              className="absolute inset-0 bg-white/80 origin-left"
                              initial={{ scaleX: 0 }}
                              animate={{
                                scaleX: progress / 100,
                              }}
                              transition={{
                                duration: 0.1,
                                ease: "linear",
                              }}
                            />
                          </div>
                        ) : (
                          // 其他项：小圆点
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
                            whileHover={{ scale: 1.2 }}
                          />
                        )}
                      </button>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
