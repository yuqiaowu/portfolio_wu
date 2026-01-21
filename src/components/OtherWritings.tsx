import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import otherWritingsImage from "figma:asset/60f5edc23054f5755588b3d0827ed6bd7487930f.png";
import courseImage from "figma:asset/07777a84b650ba343bc7182ac0f30d9880c27b8e.png";

interface OtherWritingsProps {
  language: string;
}

export function OtherWritings({ language }: OtherWritingsProps) {
  const isZh = language === "zh";

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="mb-4 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[var(--color-accent)]">05.</span>
          {isZh ? "其他" : "Other Writings"}
        </motion.h2>

        <motion.p
          className="text-[var(--color-text-secondary)] mb-8 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {isZh
            ? "公众号原创/翻译文章转：\"互联网早读课\"、\"MicroUX\"、\"人人都是产品经理\"等行业大V转发"
            : "Original/Translated articles republished by: \"Internet Morning Reading\", \"MicroUX\", \"Everyone is a Product Manager\" and other industry influencers"}
        </motion.p>

        {/* 文章转发截图 */}
        <motion.div
          className="glass-effect rounded-3xl overflow-hidden mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={otherWritingsImage}
            alt={isZh ? "其他文章转发截图" : "Other writings screenshots"}
            className="w-full h-auto"
          />
        </motion.div>

        {/* 三节课合作课程 */}
        <motion.div
          className="glass-effect rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src={courseImage}
            alt={isZh ? "三节课合作课程" : "Sanjieke Course Collaboration"}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}