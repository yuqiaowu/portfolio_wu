import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import agentPreview from "figma:asset/4eedef126ad5287a862e2b03c6d7509f42472a8b.png";

const projects = [
  {
    type: "",
    question: "AI 辅助交易与风险决策系统",
    questionEn: "AI-Assisted Trading & Risk Decision System",
    title: "资本分配是智力与真理相融合的纪律",
    titleEn: "Capital allocation is the discipline where intelligence meets truth",
    link: "https://agent.sparkvalues.com",
    preview: agentPreview,
    sections: [
      {
        label: "项目概述",
        labelEn: "Project Overview",
        content: "交易是概率的游戏，但这并不是稀有的事情，不确定性本身是常态，我们每一天都生活在概率中，不同的选择，会塑造不同的结果。\n\n在这个项目中，我构建了一个完整的决策闭环来驯服不确定性：\n数据收集 → 数据清洗 → AI推理决策 → 风控管理 → 执行检测 → 模型优化\n\n如果你也对此感兴趣，我想我们可以聊聊",
        contentEn: "Trading is a game of probability, but uncertainty is not rare—it's the norm. We live in probability every day, and different choices shape different outcomes.\n\nIn this project, I built a complete decision loop to tame uncertainty:\nData Collection → Data Cleaning → AI Inference → Risk Management → Execution Monitoring → Model Optimization\n\nIf you're interested, let's chat"
      }
    ]
  }
];

interface FeaturedProjectsProps {
  language: string;
}

export function FeaturedProjects({ language }: FeaturedProjectsProps) {
  const isZh = language === "zh";
  
  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="mb-4 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[var(--color-accent)]">03.</span>
          {isZh ? "我的项目" : "My Projects"}
        </motion.h2>

        <motion.p 
          className="text-[var(--color-text-secondary)] mb-8 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {isZh ? "由我个人构思创造vibe coding 实现的产品，我在设计中解决实际问题" : "Products I conceived and built through vibe coding, solving real problems through design"}
        </motion.p>

        <div className="space-y-6">
          {projects.map((project, index) => {
            return (
              <motion.div 
                key={index}
                className="glass-effect rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* 项目头部 */}
                <div className="w-full p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      {project.type && (
                        <div className="flex items-center gap-3">
                          <span className="text-xs px-3 py-1.5 glass-effect-elevated text-[var(--color-accent)] rounded-full">
                            {project.type}
                          </span>
                        </div>
                      )}
                      <h3 className="text-[var(--color-accent)] text-xl sm:text-2xl">
                        {isZh ? project.question : project.questionEn}
                      </h3>
                      <p className="text-[var(--color-text-secondary)] text-base sm:text-lg">
                        {isZh ? project.title : project.titleEn}
                      </p>
                    </div>
                    
                    {/* 访问项目按钮 */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 glass-effect hover:glass-effect-elevated text-[var(--color-text-primary)] rounded-full transition-all duration-300 ios-button text-sm sm:text-base whitespace-nowrap"
                    >
                      {isZh ? "访问项目web" : "Visit Project"}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* 项目详情 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-6 sm:space-y-8 border-t border-[var(--color-border)] pt-6 sm:pt-8">
                    {/* 项目预览图 */}
                    {project.preview ? (
                      <motion.div 
                        className="w-full rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <img 
                          src={project.preview} 
                          alt={`${project.title} 预览`}
                          className="w-full h-auto"
                        />
                      </motion.div>
                    ) : (
                      <div className="w-full h-64 glass-effect-elevated rounded-2xl flex items-center justify-center">
                        <p className="text-[var(--color-text-secondary)]">项目预览图（待替换）</p>
                      </div>
                    )}
                    
                    {project.sections.map((section, sectionIndex) => (
                      <motion.div 
                        key={sectionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + sectionIndex * 0.05 }}
                        className="p-4 sm:p-6 rounded-2xl"
                      >
                        <h4 className="mb-3 text-[var(--color-accent)] text-base sm:text-lg">
                          {isZh ? section.label : section.labelEn}
                        </h4>
                        <p className="text-[var(--color-text-secondary)] whitespace-pre-line text-sm sm:text-base">
                          {isZh ? section.content : section.contentEn}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}