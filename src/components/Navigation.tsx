import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  currentLang: string;
  onLangChange: (lang: string) => void;
}

export function Navigation({ currentLang, onLangChange }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "hero", label: currentLang === "zh" ? "首页" : "Home" },
    { id: "about", label: currentLang === "zh" ? "关于我" : "About" },
    { id: "abilities", label: currentLang === "zh" ? "核心能力" : "Abilities" },
    { id: "projects", label: currentLang === "zh" ? "项目" : "Projects" },
    { id: "thinking", label: currentLang === "zh" ? "思考" : "Thinking" },
    { id: "other", label: currentLang === "zh" ? "其他" : "Other" },
    { id: "contact", label: currentLang === "zh" ? "联系" : "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 检测是否滚动
      setIsScrolled(window.scrollY > 20);

      // 检测当前在哪个section
      const sections = ["hero", "about", "abilities", "projects", "thinking", "other", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初始检测
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // 导航栏高度
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false); // 关闭移动端菜单
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-black/40 backdrop-blur-md"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Title - 移动端显示 */}
            <button
              onClick={() => scrollToSection("hero")}
              className="md:hidden text-[var(--color-accent)] font-medium text-lg"
            >
              {currentLang === "zh" ? "吴雨桥" : "Jo"}
            </button>

            {/* 导航链接 - 桌面端 */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-1 transition-colors ${
                    activeSection === item.id
                      ? "text-[var(--color-accent)]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* 右侧按钮组 */}
            <div className="flex items-center gap-3">
              {/* 语言切换 - 半透明iOS风格 */}
              <div className="flex items-center gap-1 bg-white/5 rounded-full p-1">
                <button
                  onClick={() => onLangChange("zh")}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    currentLang === "zh"
                      ? "bg-white/20 text-white border border-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  中
                </button>
                <button
                  onClick={() => onLangChange("en")}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    currentLang === "en"
                      ? "bg-white/20 text-white border border-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* 移动端汉堡菜单按钮 */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* 移动端全屏菜单 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* 背景遮罩 */}
            <div
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* 菜单内容 */}
            <motion.div
              className="relative h-full flex flex-col items-center justify-center px-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              <nav className="flex flex-col items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-3xl transition-colors ${
                      activeSection === item.id
                        ? "text-[var(--color-accent)]"
                        : "text-white/70 hover:text-white"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}