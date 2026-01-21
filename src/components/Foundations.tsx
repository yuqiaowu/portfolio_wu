import { motion } from "framer-motion";

export function Foundations() {
  return (
    <section className="px-6 py-32 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="p-12 glass-effect rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            能力的来源
          </motion.h2>

          <div className="space-y-6 text-[var(--color-text-secondary)]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              在进入 Web3 之前，我长期参与真实业务环境下的产品设计与用户研究工作，
              这些产品服务于高成本、高情绪、高不确定性的决策场景。
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              这段经历让我习惯从"最坏结果"而非"理想流程"出发思考产品，
              这也是我今天设计链上风险与决策系统的基础。
            </motion.p>

            <motion.div
              className="pt-6 mt-6 border-t border-[var(--color-border)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-[var(--color-text-primary)] text-lg italic">
                在 Web3 中，资产替代了房子，但人性并没有改变。
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}