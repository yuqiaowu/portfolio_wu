import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ThinkingProps {
  language: string;
}

export function Thinking({ language }: ThinkingProps) {
  const isZh = language === "zh";
  
  const articles = [
    {
      id: 3,
      url: "https://aigc-jo.notion.site/2665e03c08bf40278a3c6093bde3a434",
      title: {
        zh: "「复盘」可用性测试-踩坑篇",
        en: "Retrospective: Usability Testing Pitfalls"
      },
      subtitle: {
        zh: "用户更倾向于积极的回答（社会称许性偏差）",
        en: "Users tend toward positive responses (social desirability bias)"
      },
      content: {
        zh: `用户更倾向于积极的回答（社会称许性偏差）

研究表明（Dillman 2008）, 与匿名调查相比，直接询问（不管是面对面还是通过电话）受访者都倾向于给出他们认为在别人眼中看起来会更好的答案，也就是更正面的反馈。

针对这种现象，有些专家提议，要最小程度地减小现场测试人员对用户的影响，他们建议：在「用户」填写问卷时，测试人员主动离开，并在测试完成，送走「用户」后再查看答案，或者让用户回家去填写问卷。

但我认为这种太过看重最后的分数的做法是没有必要的，因为「可用性测试」是个定性的过程，参与的人数本来也不多，即使影响降至最小，我们也不能保证最后出来的分数就客观可信，如果要更客观的分数，完全可以采用大批量「定量」问卷，或者通过后台数据「埋点」更客观地了解用户的行为。

而我们做访谈的最终目的，应该是了解到「受访用户」的思考方式、并从中归纳出该群体整体性的思维习惯。

也就是说，在访谈时询问用户的问题，关注点并不在最后的「分数」，而是从「分数」洞察到用户没有说出的，甚至自己都不知道的隐秘的想法。`,
        en: `Users tend toward positive responses (social desirability bias)

Research shows (Dillman 2008) that compared to anonymous surveys, direct inquiries (whether face-to-face or by phone) tend to elicit responses that respondents believe will appear better in others' eyes—in other words, more positive feedback.

To address this phenomenon, some experts propose minimizing the on-site tester's influence on users by suggesting: testers should leave while "users" fill out questionnaires, only reviewing answers after the test is complete and users have departed, or allowing users to complete questionnaires at home.

However, I believe this overly score-focused approach is unnecessary, because "usability testing" is a qualitative process with inherently small participant numbers. Even with minimal influence, we cannot guarantee that resulting scores are objective and reliable. For more objective scores, we could simply use large-scale "quantitative" surveys or understand user behavior more objectively through backend data "tracking."

The ultimate goal of conducting interviews should be to understand "interview participants'" thinking patterns and deduce the overall thinking habits of that group.

In other words, when asking users questions during interviews, the focus should not be on the final "score," but rather on using the "score" to gain insight into what users haven't said, or even thoughts they themselves don't know they have.`
      },
      tags: [
        { zh: "可用性测试", en: "Usability Testing" },
        { zh: "用户研究", en: "User Research" },
        { zh: "认知偏差", en: "Cognitive Bias" },
        { zh: "研究方法", en: "Research Methods" }
      ],
      isLatest: false
    },
    {
      id: 4,
      url: "https://www.woshipm.com/pd/4612217.html",
      title: {
        zh: "科技时代，未来设计师发展的2个方向",
        en: "The Tech Era: Two Directions for Future Designers"
      },
      subtitle: {
        zh: "设计师该如何与科技共存？",
        en: "How should designers coexist with technology?"
      },
      content: {
        zh: `6月2日，华为发布并开源了物联网超级终端"鸿蒙OS 2.0" ，兼容全部安卓和web应用，实现多种类、多数量设备之间硬件互助和资源共享。

凑了巧, 几天后，苹果公司在其全球开发者大会（WWDC2021）上也发布了操作系统 Mac OS 12 Monterey，意在通过"Universal Control "实现全场景设备间的无缝对接。

很明显，科技的发展并不温和，没有硝烟的战争在大佬之间早已爆发，随着商业化落地，革新的浪潮也将对旧有生活、工作模式带来了巨量冲击。

回到内卷的设计行业，诸如"设计师会不会卷着卷着就被人工智能革了命？"之类的问题也常被提起，未来设计师该如何与科技共存？

对此，我有以下一些浅见与你分享：

科技进步给设计行业带来的改变
人工智能会淘汰掉设计师吗？
未来设计师的发展方向`,
        en: `On June 2nd, Huawei released and open-sourced the IoT super device "HarmonyOS 2.0," compatible with all Android and web applications, enabling hardware collaboration and resource sharing among various types and quantities of devices.

Coincidentally, a few days later, Apple announced its operating system Mac OS 12 Monterey at its Worldwide Developers Conference (WWDC2021), aiming to achieve seamless integration between devices across all scenarios through "Universal Control."

Clearly, technological advancement is not gentle—a war without gunfire has already erupted among the giants. As commercialization lands, the wave of innovation will bring massive impacts to existing life and work patterns.

Returning to the fiercely competitive design industry, questions like "Will designers be replaced by AI as the competition intensifies?" are frequently raised. How should designers coexist with technology in the future?

On this, I have some humble insights to share with you:

How technological progress is changing the design industry
Will AI eliminate designers?
Future development directions for designers`
      },
      tags: [
        { zh: "设计趋势", en: "Design Trends" },
        { zh: "人工智能", en: "Artificial Intelligence" },
        { zh: "职业发展", en: "Career Development" },
        { zh: "科技创新", en: "Tech Innovation" }
      ],
      isLatest: false
    },
    {
      id: 1,
      url: "https://www.woshipm.com/user-research/4445978.html",
      title: {
        zh: "影响\"用户忠诚\"的2个维度",
        en: "Two Dimensions That Influence Customer Loyalty"
      },
      subtitle: {
        zh: "如何让用户不离开我们？这件事值得所有产品费尽心机",
        en: "How to keep users from leaving? This is worth every product's best efforts"
      },
      content: {
        zh: `如何让用户不离开我们？这件事值得所有产品费尽心机。

毕竟，快速获取用户其实并不难，最直接的大肆撒钱或者哗众取宠一番，就能有一大波流量奔赴而来。但最悲惨莫过于，当热情退却，曾经你侬我侬的用户就头也不回地投奔他家，只留下我们头秃的运营暗自流泪。

是什么决定了用户的忠诚度？

从人性"趋利避害"的角度出发。我认为可以分成两个维度，维度1，用户获得，维度2，离开成本。

## **用户获得——从无感到崇拜**

我们说"需求是产品之源"，所谓"需求"指的就是用户从产品中的获得。

那么问题来了，为何有些产品看似可以满足用户的某类需求（比如打车），但当竞品有更便宜的价格时，用户还是毫不犹豫地转身就走，一点忠诚度也没有？这就要说到人类的决策特点——理智与情感，产品与用户建立不同的情感链接会带来不同的忠诚模型，所以，我们按照用户和产品的情感链接情况，把留存的"老用户"类型分为：无感情类、消极感情类、积极感情类。

### **无感情用户的忠诚——为利而来者也会因利而去**

对于薅羊毛的用户来说，使用的产品虽然可以满足其基本需求，但这并不是产品吸引他们的核心优势，因为别的产品也可以，他留下的主要目的是为了薅羊毛，哪里有羊毛就薅哪里，当竞品有更便宜的价格时，他们自然会选择离开。

类似的情况还有楼下的小卖部、包子铺，我们去购物，不是因为有多喜欢它，而是因为它就在楼下，离得近方便！当楼下开了一家更大的超市，更味美的包子铺的时候，我们可能就不会再选择它，因为我们忠诚的原因——离得近——已经不复存在。

当然，有套路就有反套路，当年打车大战，滴滴使用随机金额的红包，让本想要薅确定性羊毛的无感情用户薅羊毛上瘾，对其产生路径依赖，同时也大大节省了运营费用。`,
        en: `How to keep users from leaving? This is worth every product's best efforts.

After all, acquiring users quickly isn't that hard—throw money around or create some sensational buzz, and you'll see a wave of traffic rushing in. But the most tragic part is when the excitement fades, those users who were once so devoted turn around and head to competitors without looking back, leaving us and our balding operations team in tears.

What determines user loyalty?

From the perspective of human nature's tendency to "seek benefit and avoid harm," I believe it can be divided into two dimensions: Dimension 1, User Gains; Dimension 2, Switching Costs.

## **User Gains—From Indifference to Devotion**

We say "demand is the source of products," and "demand" refers to what users gain from the product.

So here's the question: Why do some products seemingly satisfy a certain user need (like ride-hailing), yet when competitors offer cheaper prices, users still leave without hesitation, showing no loyalty whatsoever? This relates to the characteristics of human decision-making—rationality and emotion. Different emotional connections between products and users lead to different loyalty models. Therefore, based on the emotional connection between users and products, we categorize "retained users" into: emotionless users, negative emotional users, and positive emotional users.

### **Loyalty of Emotionless Users—Those Who Come for Profit Will Leave for Profit**

For users who are just here for deals, the product may satisfy their basic needs, but this isn't the core advantage attracting them—other products can do the same. Their main purpose is to grab deals, and they'll go wherever the deals are. When competitors offer better prices, they'll naturally choose to leave.

Similar situations include the convenience store downstairs or the dumpling shop—we shop there not because we particularly like it, but because it's downstairs and convenient! When a bigger supermarket or a better dumpling shop opens downstairs, we might stop choosing the old one, because the reason for our loyalty—proximity—no longer exists.

Of course, where there are strategies, there are counter-strategies. During the ride-hailing wars, Didi used random-amount red envelopes to make emotionless deal-seekers addicted to grabbing uncertain rewards, creating path dependency while significantly reducing operational costs.`
      },
      tags: [
        { zh: "用户忠诚度", en: "User Loyalty" },
        { zh: "用户留存", en: "User Retention" },
        { zh: "产品策略", en: "Product Strategy" },
        { zh: "用户心理", en: "User Psychology" }
      ],
      isLatest: true
    },
    {
      id: 2,
      url: "https://aigc-jo.notion.site/996fe3902f104c6dbb97e0483699c870?pvs=73",
      title: {
        zh: "停止取悦你的用户",
        en: "Stop Trying to Delight Your Customers"
      },
      subtitle: {
        zh: "用户忠诚度与解决问题的难易程度密切相关",
        en: "Customer loyalty is closely tied to how easy you make it to solve their problems"
      },
      content: {
        zh: `公司必须取悦用户这个观念是如此的根深蒂固，以致于很少有人去思考它的前提与适用范围。你可以问问自己，用户因为超预期的服务而光顾产品的频率有多高？你也许会想到一些例子，例如一个旅行者坚持返回一家特别细心周到的旅社。但是你可能不能举出更多。

现在你再问问自己：用户因为可怕的服务体验而不再光顾一家公司的频率有多高？

每时每刻！

他们会对丢失自己行李的航空公司、让其永久等待的线上客服、看不懂"紧急订单"含义的干洗店进行报复！

### 太普遍的障碍

大多数用户在与客服部门接触后都会面临忠诚度下降的问题: 

• 56%的人不得不多次解释一个问题；
• 57%的人不得不从网页切换到手机；
• 62%的人必须反复与公司联系以解决问题；
• 59%的人花费了中到高的努力来解决问题；

用户惩罚不良服务的冲动（至少会比奖励令人愉快的服务更加强烈）在大多数公司最大的客户服务渠道——基于电话和自助服务的交互中，戏剧性地发挥着作用。在这些情况下，我们的研究表明：用户忠诚度与公司兑现其基本甚至平凡的承诺的关系要远远大于为其提供眼花缭乱的服务体验。但是，大多数公司都没有意识到这一点，因此在投资浪费和客户流失方面付出了高昂的代价。`,
        en: `The notion that companies must delight customers is so ingrained that few question its premise and scope. Ask yourself: How often do customers patronize a product because of exceptional service? You might think of some examples, like a traveler who insists on returning to a particularly attentive inn. But you probably can't name many more.

Now ask yourself: How often do customers abandon a company due to terrible service experiences?

All the time!

They'll punish airlines that lose their luggage, online customer service that makes them wait forever, and dry cleaners that can't understand what "urgent order" means!

### All Too Common Obstacles

Most customers face declining loyalty after interacting with customer service departments:

• 56% have to explain a problem multiple times;
• 57% have to switch from web to phone;
• 62% must repeatedly contact the company to resolve an issue;
• 59% expend medium to high effort to solve problems;

The impulse to punish poor service (at least as strong as the desire to reward delightful service) plays out dramatically in most companies' largest customer service channels—phone-based and self-service interactions. In these situations, our research shows: Customer loyalty is far more related to a company's ability to deliver on its basic, even mundane promises than to provide dazzling service experiences. Yet most companies aren't aware of this, paying a high price in wasted investment and customer attrition.`
      },
      tags: [
        { zh: "客户服务", en: "Customer Service" },
        { zh: "用户忠诚度", en: "Customer Loyalty" },
        { zh: "努力成本", en: "Effort Cost" },
        { zh: "服务设计", en: "Service Design" }
      ],
      isLatest: false
    }
  ];
  
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
          <span className="text-[var(--color-accent)]">04.</span>
          {isZh ? "思考文章" : "Thoughts & Articles"}
        </motion.h2>

        <motion.p 
          className="text-[var(--color-text-secondary)] mb-8 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {isZh ? "项目沉淀和思考火花" : "Project insights and sparks of thinking"}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-effect rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 group flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + (index % 2) * 0.1 }}
            >
              {/* 文章头部 */}
              <div className="p-6 bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent border-b border-[var(--color-border)]">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1">
                    {article.isLatest && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 rounded-full mb-3">
                        <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse" />
                        <span className="text-xs text-[var(--color-accent)]">
                          {isZh ? "最新" : "Latest"}
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl mb-2 text-white group-hover:text-[var(--color-accent)] transition-colors duration-300 line-clamp-2">
                      {isZh ? article.title.zh : article.title.en}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                    <ExternalLink className="w-5 h-5 text-[var(--color-accent)] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed line-clamp-2">
                  {isZh ? article.subtitle.zh : article.subtitle.en}
                </p>
              </div>

              {/* 文章内容预览 */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1 space-y-4">
                  <div className="text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line text-sm line-clamp-6">
                    {isZh ? article.content.zh : article.content.en}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2.5 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full text-xs"
                      >
                        {isZh ? tag.zh : tag.en}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 阅读提示 */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-[var(--color-border)]">
                  <div className="flex items-center gap-2">
                    {article.url.includes('notion.site') ? (
                      <>
                        <svg className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
                        </svg>
                        <span className="text-[var(--color-text-secondary)] text-xs">
                          {isZh ? "Notion" : "Notion"}
                        </span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm1-18h-2v8.414l5.293 5.293 1.414-1.414-4.707-4.707v-7.586z"/>
                        </svg>
                        <span className="text-[var(--color-text-secondary)] text-xs">
                          {isZh ? "人人都是产品经理" : "PMCAFF"}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-[var(--color-accent)] group-hover:gap-3 transition-all duration-300">
                    <span className="text-xs font-medium">
                      {isZh ? "阅读" : "Read"}
                    </span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}