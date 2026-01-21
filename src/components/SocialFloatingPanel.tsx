import { Github, BookOpen, MessageCircle, Mail, Newspaper, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    link: "#",
    color: "hover:text-white"
  },
  {
    name: "人人都是产品经理",
    icon: BookOpen,
    link: "#",
    color: "hover:text-orange-400"
  },
  {
    name: "公众号",
    icon: Newspaper,
    link: "#",
    color: "hover:text-green-400"
  },
  {
    name: "微信",
    icon: MessageCircle,
    link: "#",
    color: "hover:text-green-500"
  },
  {
    name: "WhatsApp",
    icon: Mail,
    link: "#",
    color: "hover:text-green-600"
  },
  {
    name: "Telegram",
    icon: Send,
    link: "#",
    color: "hover:text-green-400"
  }
];

export function SocialFloatingPanel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="glass-effect rounded-3xl p-4 space-y-3 shadow-xl">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-12 h-12 rounded-2xl glass-effect-elevated transition-all duration-300 ${social.color} group relative`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <social.icon className="w-5 h-5 text-[var(--color-text-secondary)] group-hover:text-current transition-colors duration-300" />
            
            {/* 悬浮提示 */}
            {hoveredIndex === index && (
              <motion.div
                className="absolute right-full mr-3 px-3 py-2 glass-effect rounded-xl whitespace-nowrap"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-sm text-[var(--color-text-primary)]">
                  {social.name}
                </span>
              </motion.div>
            )}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}