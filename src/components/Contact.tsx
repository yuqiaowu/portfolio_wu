import { Mail, Github, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import wechatQR from "figma:asset/7cfbfe2633e650cc93d3d1e0d09fdcaa67f2c080.png";
import telegramQR from "figma:asset/e5c5eb3eea8f405410a03891b8231d1afb8db404.png";

interface ContactProps {
  language: string;
}

export function Contact({ language }: ContactProps) {
  const isZh = language === "zh";
  const [showQR, setShowQR] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const closeQR = () => {
    setShowQR(null);
    setCopied(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("maomaodemiao@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-6 py-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="p-8 sm:p-12 glass-effect rounded-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="mb-4 sm:mb-6 text-3xl sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {isZh ? "联系我" : "Contact Me"}
          </motion.h2>
          <motion.p
            className="text-[var(--color-text-secondary)] mb-8 sm:mb-12 text-base sm:text-lg max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isZh 
              ? "如果你在寻找一位善于洞察用户需求、注重体验细节的产品设计师，欢迎联系"
              : "If you're looking for a Product Designer who excels at understanding user needs and crafting delightful experiences, let's connect"
            }
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              onClick={() => setShowQR("email")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 ios-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Email
            </motion.button>

            <motion.a
              href="https://github.com/yuqiaowu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 glass-effect-elevated rounded-full hover:shadow-lg hover:shadow-green-500/20 text-[var(--color-text-primary)] ios-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>

            <motion.button
              onClick={() => setShowQR("telegram")}
              className="inline-flex items-center gap-2 px-8 py-4 glass-effect-elevated rounded-full hover:shadow-lg hover:shadow-green-500/20 text-[var(--color-text-primary)] ios-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Telegram
            </motion.button>

            <motion.button
              onClick={() => setShowQR("wechat")}
              className="inline-flex items-center gap-2 px-8 py-4 glass-effect-elevated rounded-full hover:shadow-lg hover:shadow-green-500/20 text-[var(--color-text-primary)] ios-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
              </svg>
              {isZh ? "微信" : "WeChat"}
            </motion.button>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="mt-12 pt-8 border-t border-[var(--color-border)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-[var(--color-text-secondary)]">
              {isZh 
                ? "© 2025 · 产品设计师作品集"
                : "© 2025 · Product Designer Portfolio"
              }
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQR}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            
            {/* Modal */}
            <motion.div
              className="relative glass-effect-elevated rounded-3xl p-8 max-w-md w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-medium mb-6 text-center">
                {showQR === "wechat" && (isZh ? "微信二维码" : "WeChat QR Code")}
                {showQR === "telegram" && (isZh ? "Telegram 二维码" : "Telegram QR Code")}
                {showQR === "email" && (isZh ? "电子邮件" : "Email")}
              </h3>
              
              {showQR !== "email" ? (
                <>
                  <div className="bg-white p-4 rounded-2xl mb-6">
                    <img
                      src={showQR === "wechat" ? wechatQR : telegramQR}
                      alt="QR Code"
                      className="w-full h-auto"
                    />
                  </div>

                  <p className="text-center text-[var(--color-text-secondary)] mb-2">
                    {showQR === "wechat" && (isZh ? "微信号: 18030486027" : "WeChat ID: 18030486027")}
                    {showQR === "telegram" && (isZh ? "Telegram: 18030486027" : "Telegram: 18030486027")}
                  </p>

                  <p className="text-center text-[var(--color-text-secondary)] text-sm">
                    {isZh ? "扫描二维码添加我" : "Scan to connect with me"}
                  </p>
                </>
              ) : (
                <>
                  <div className="bg-[var(--color-bg-secondary)] p-6 rounded-2xl mb-6 text-center">
                    <p className="text-2xl text-[var(--color-accent)] font-mono break-all">
                      maomaodemiao@gmail.com
                    </p>
                  </div>

                  <p className="text-center text-[var(--color-text-secondary)] text-sm mb-4">
                    {isZh ? "点击下方按钮复制邮箱地址" : "Click the button below to copy email address"}
                  </p>

                  <motion.button
                    onClick={copyEmail}
                    className="w-full px-6 py-3 glass-effect-elevated rounded-full hover:shadow-lg hover:shadow-green-500/20 text-[var(--color-text-primary)] ios-button mb-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {copied ? (isZh ? "✓ 已复制" : "✓ Copied") : (isZh ? "复制邮箱" : "Copy Email")}
                  </motion.button>
                </>
              )}

              <motion.button
                onClick={closeQR}
                className="mt-6 w-full px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white rounded-full ios-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isZh ? "关闭" : "Close"}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}