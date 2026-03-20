import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
type Lang = "en" | "zh";

const BASE_URL = import.meta.env.BASE_URL;

/* ─────────────────────────────────────────────
   CONTENT — BILINGUAL
───────────────────────────────────────────── */
const CONTENT = {
  en: {
    nav: ["About", "CV", "Projects", "Creative Works", "Contact"],
    hero: {
      badge: "2026",
      sub1: "Hello, I'm Wufan Chen.",
      sub2: "I build brands that connect and create content that resonates.",
      cta1: "View Projects",
      cta2: "Get in Touch",
    },
    ticker: [
      "Brand Strategy",
      "Campaign Design",
      "Copywriting",
      "Photography",
      "Video Production",
      "Social Media",
      "Editorial Direction",
      "Motion Design",
    ],
about: {
  label: "About Me",
  photo: "images/zjz.JPG",
      stats: [
        { n: "4", l: "Internships" },
        { n: "10+", l: "Projects" },
        { n: "2", l: "Degrees" },
        { n: "2", l: "Countries" },
      ],
      body: [
        "Hi, I'm Wufan Chen",
        "I specialize in brand strategy and content creation. I have strong stress management skills, good teamwork and communication abilities, and an outgoing personality.",
      ],
      cvBtn: "View My CV",
      eduEN:
        "BA Advertising — Shanghai Business School\nMA Society, Culture & Media — University of Leeds, UK",
      skillsLabel: "Skills",
      skills: [
        "Photography",
        "Image Processing",
        "Video Editing",
        "Data Analysis",
        "AI Vibe Coding",
      ],
    },
    projects: {
      label: "Selected Projects",
      heading: "Brand strategy\n& campaigns.",
      items: [
        {
          num: "01",
          title: "Caltrate Strawberry Yogurt Calcium Gummies Launch Plan",
          subtitle: "Brand Collaboration Planning",
          cat: "Brand Collaboration Planning",
          year: "",
          intro: "Based on the market insight that young consumers have low acceptance of traditional health supplements, this plan uses cross-brand collaboration and scenario-based marketing to turn \u201ccalcium supplementation\u201d into a fashionable lifestyle, while using strawberry yogurt calcium gummies to drive Caltrate\u2019s brand rejuvenation.",
          desc: "Based on the market insight that young consumers have low acceptance of traditional health supplements, this plan uses cross-brand collaboration and scenario-based marketing to turn \u201ccalcium supplementation\u201d into a fashionable lifestyle, while using strawberry yogurt calcium gummies to drive Caltrate\u2019s brand rejuvenation.",
          detail: "",
          role: "",
          tags: ["Brand Collaboration", "Scenario Marketing", "Brand Rejuvenation"],
          image: `${BASE_URL}images/caltrate.png`,
          accent: "#A3C9FF",
          sections: [
            {
              heading: "Insight (Consumer Insight)",
              body: "Young consumers tend to have low acceptance of traditional health supplements, and their awareness of the need for calcium supplementation is also relatively limited. At the same time, however, younger audiences are becoming more interested in lifestyle-oriented wellness \u2014 they prefer lighter and more everyday ways to manage their health within daily-life scenarios.",
            },
            {
              heading: "Strategy (Brand Strategy)",
              body: "Therefore, this brand strategy takes \u201cscenario-based wellness\u201d as its core idea. Through cross-brand collaborations, the act of calcium supplementation is embedded into multiple high-frequency moments in young people\u2019s daily lifestyles, transforming it from a traditional health behavior into a relaxed, stylish, and sustainable habit.",
            },
            {
heading: "Scenario (Lifestyle Collaboration Scenarios)",
body: "",
sub: [
  {
    title: "Caltrate × YONGPU Coffee | 'Daily C Boost' 28-Day Wellness Countdown Blind Box",
    body: "Launch a 28-day wellness countdown blind box featuring daily-pack Caltrate Strawberry Milk Calcium Gummies paired with different YONGPU coffee flavors. Each box also includes small wellness items such as steam eye masks, herbal bath packs, and vitamin organizers. The 'unboxing + wellness check-in' concept integrates calcium intake into young consumers' daily routines while creating a sense of surprise and ritual.",
  },
  {
    title: "Caltrate × ANESSA | Sunshine Vitality Protection Kit",
    body: "Introduce a co-branded wellness kit combining ANESSA travel-size sunscreen with Caltrate Strawberry Milk Calcium Gummies. Designed as an easy-to-carry daily wellness pack for young women, the collaboration connects skincare and health management and communicates a simple message: protect outer beauty with sunscreen while supporting inner vitality with calcium.",
  },
  {
    title: "Caltrate × Particle Fever | Energy Refill Station Collaboration",
    body: "Partner with sportswear brand Particle Fever to create in-store 'Energy Refill Stations'. Launch co-branded sports kits combining athletic gear with Caltrate calcium gummies while organizing running and yoga community events. This collaboration positions calcium gummies as a daily wellness supplement for active lifestyles and strengthens the connection between the brand and youth wellness culture.",
  },
],
},
{
heading: "Strategic Outcome",
body: "By activating three key lifestyle scenarios—coffee, skincare, and sports—the strategy connects calcium supplementation with the everyday routines of young consumers. This approach positions Caltrate as a modern wellness companion while increasing awareness and acceptance of the new Strawberry Yogurt Calcium Gummies among younger audiences."
},
],
},
{
num: "02",
title: "Nanyuan · Guiyu Homestay Brand",
subtitle: "A Day of Jiangnan Living",
cat: "",
year: "",
intro: "Built around the concept of 'Retreat into Jiangnan', this project develops an immersive cultural experience for a boutique homestay located on Qingxi Old Street in Fengxian District. Through garden-style spatial design, traditional cultural activities, and social experiences, the project translates the Jiangnan lifestyle into a contemporary cultural tourism destination. The goal is to transform the homestay from a simple accommodation service into a cultural experience brand that combines hospitality, lifestyle, and social engagement.",
desc: "Insight: Young travelers increasingly seek cultural depth and shareable experiences during trips, yet most homestays still focus primarily on accommodation and lack immersive cultural storytelling.",
detail: "",
role: "",
tags: [],
image: `${BASE_URL}images/nygy.png`,
accent: "#FFC6C6",
sections: [
{
heading: "Market Insight",
body: "Today’s young travelers value meaningful cultural experiences and social storytelling during their journeys. However, many homestays still operate primarily as lodging services, missing opportunities to create immersive cultural environments."
},
{
heading: "Brand Experience IP",
body: "Retreat into Jiangnan — a cultural concept that invites visitors to step away from urban noise and experience the slow rhythm of Jiangnan life through space, culture, and social interaction."
},
{
heading: "Experience System Design",
body: "The project builds five interconnected experience layers — Stay / Dine / Play / Explore / Connect — combining Jiangnan cuisine, traditional leisure activities, and cultural gatherings to create a multi-dimensional brand journey.",
sub: [
{
title: "Retreat · Stay",
body: "Guests check in wearing Hanfu, open their windows to classical gardens, and fall asleep to the sound of flowing water — transforming accommodation into an immersive Jiangnan living experience."
},
{
title: "Retreat · Dine",
body: "Dining becomes a cultural ritual through experiences such as flowing-cup banquets, traditional brewing workshops, and Song Dynasty tea ceremonies."
},
{
title: "Retreat · Play",
body: "Traditional leisure activities such as pitch-pot games, guqin sessions, archery experiences, and herbal sachet workshops introduce guests to the aesthetics of ancient Chinese recreation."
},
{
title: "Retreat · Explore",
body: "Visitors explore Qingxi Old Street in Hanfu, enjoy Jiangnan opera performances, and participate in lantern-lit night tours, creating highly shareable cultural moments."
},
{
title: "Retreat · Connect",
body: "Cultural social programs including immersive murder-mystery experiences and workshops in calligraphy, painting, and flower arrangement foster deeper cultural engagement and social interaction."
}
]
},
{
heading: "Strategic Outcome",
body: "By combining cultural storytelling with immersive spatial experiences, the project establishes a differentiated cultural tourism homestay brand that integrates accommodation, lifestyle, and community."
}
]
},
{
  num: "03",
  title: "Meike Brand Communication Campaign",
  subtitle: "",
  cat: "",
  year: "",
  intro: "Meike specializes in silk eye masks and steam eye masks, dedicated to providing consumers with a comfortable sleep and relaxation experience. Centered around the core concept of 'Pause Moments', this project develops a brand communication campaign for the lifestyle brand Meike. Through scenario-based content and user co-creation, it highlights the high-pressure moments young people face in everyday life, positioning Meike as a symbol of everyday relaxation for young consumers.",
  desc: `"In This Moment, the World Pauses"`,
  detail: "The product is embedded into real-life scenarios experienced by young people: studying late in the library / working in the office / social fatigue / eye strain / meditation / bathing / ... When users put on a Meike eye mask, the world seems to be put on pause.",
  role: ["Scenario-Based Product Marketing Strategy", "Social Media Content Design"],
  tags: [],
image: `${BASE_URL}images/meike.png`,
  accent: "#FFD9A3",
  sections: [
    {
      heading: "Social Media Content Design",
      sub: [
        {
          title: "Weibo",
          body: `Launch interactive hashtag campaigns to increase brand discussion.
Create the hashtag #IfTheWorldPausedForOneMinuteWhatWouldYouDo and invite users to share their own pause moments.
Start a "Pause Moment" photo collection campaign to encourage users to post relaxing moments from everyday life, while sustaining participation through polls, interactive comments, and giveaway activities.`
        },
        {
          title: "Rednote | KOL Collaboration",
          body: "Invite lifestyle bloggers, sleep-focused creators, and workplace influencers to share their own 'pause moments' through authentic daily-life content, helping audiences recognize the value of taking short breaks in the middle of a busy routine."
        },
        {
          title: "Rednote | Workplace Blogger — 'How a Ten-Minute Lunch Break Saved My Productivity'",
          body: "Share how short moments of rest during a busy workday can restore energy and improve productivity in the afternoon."
        },
        {
          title: "Rednote | Lifestyle Blogger — 'My Bedtime Wind-Down Ritual'",
          body: "Document bedtime relaxation routines such as reading, meditation, and using a steam eye mask to highlight the emotional comfort of a nighttime ritual."
        },
        {
          title: "Rednote | Travel Blogger — 'The Most Comfortable Way to Rest While Traveling'",
          body: "Show how to recover during travel through short breaks, such as using a steam eye mask on planes, high-speed trains, or in hotels, making the journey more comfortable."
        },
        {
          title: "TikTok | In-Feed Advertising",
          body: "Build a unified visual concept in which people become still, sound disappears, and the pace of the frame slows down. Through a series of short scenario-based films, present different 'pause moments' from daily life and reinforce the brand experience of relaxation and rest."
        },
        {
          title: "TikTok | Short Film Series: 'Pause Moments'",
          body: "Through short stories set in different everyday scenarios, present the moments in which young people search for brief relief within a fast-paced lifestyle."
        },
        {
          title: "TikTok | 'Thought Pause'",
          body: `Late at night in the library, a student is rushing to finish assignments, overwhelmed and mentally exhausted, while deadline reminders and message notifications keep flashing across the computer screen.
When the student puts on a Meike steam eye mask, everything around them seems to suddenly freeze, and the world becomes quiet.`
        },
        {
          title: "TikTok | 'Social Pause'",
          body: `During the evening rush hour, a crowded subway is filled with announcements, conversations, and phone notifications.
The protagonist is exhausted and notices someone they know in the corner of their vision, but does not want to greet them.
They put on a Meike eye mask for a short rest, and the entire carriage feels as if it has been placed on pause.`
        },
        {
          title: "TikTok | 'Gaming Pause'",
          body: `Late at night, game sound effects continue to fill the room as the protagonist has been playing for hours and their eyes are gradually becoming tired.
When they put on a Meike eye mask, both the screen and the noise seem to pause at the same time.`
        },
        {
          title: "TikTok | 'Pause for Meditation'",
          body: `In a yoga studio early in the morning, the noise of the city can still be heard faintly in the distance.
The protagonist sits on a yoga mat trying to relax.
After putting on a Meike eye mask and entering a meditative state, the world gradually becomes still and quiet.`
        },
        {
          title: "Offline Experience",
          body: `Set up a "Pause Space" in urban commercial districts.
Spatial design includes: a quiet rest area + soft lighting + a product experience zone.
Users can enjoy a short moment of relaxation in the space while taking photos and sharing their experience online.`
        }
      ]
    },
    {
      heading: "Strategic Outcome",
      body: "Through the core concept of 'Pause Moments', Meike evolves from a functional sleep product into a lifestyle brand with emotional value."
    }
  ]
}
],projectDetail: {
  view: "View Project",
  back: "← Back to Projects",
  overview: "Overview",
  details: "Project Details",
  roleLabel: "Role & Responsibilities",
  tagsLabel: "Tags",
  visuals: "Project visuals coming soon",
}
},
creative: {
  label: "Creative Works",
  heading: "Copy, visuals\n& video.",
  cats: [
    {
      name: "Copywriting",
      color: "#C8651A",
      bg: "rgba(200,101,26,0.1)",
items: [
  {
    title: "1054 Rescue Team Campaign Copy｜Folk Festival Event",
    desc: `Walking for peace on the 16th day of the Lunar New Year — with 1054 by your side.`,
    type: "essay",
  },
  {
    title: "1054 Rescue Team Campaign Copy｜International Women's Day",
    desc: `Women are not roles to be defined — they are forces in action.
More than just March 8th,
1054 Rescue Team
honors every woman who protects and safeguards others, every single day.`,
    type: "essay",
  },
  {
    title: "1054 Rescue Team Campaign Copy｜Summer Water Safety Campaign",
    desc: `1054 Rescue Team wishes every child:
Grow bravely toward the sun.`,
    type: "essay",
  },
  {
    title: "1054 Rescue Team Campaign Copy｜Gaokao Support Campaign",
    desc: `To every student taking the Gaokao:
When the pen is set down, your sharpness has been fully expressed.
When the blade is sheathed, success has already arrived.`,
    type: "essay",
  },
],
    },
    {
  name: "Video Content",
  color: "#B0436E",
  bg: "rgba(176,67,110,0.1)",
  items: [
     {
      title: "Blossoming Flower",
      desc: "A short video that condenses the slow blooming process of flowers through editing, paired with rhythmic music to highlight the beauty and vitality of life.",
      type: "experimental",
      video: "https://www.youtube.com/embed/WxWTrKI_zSk",
    },
   {
  title: "Silky Hair Shampoo Ad",
  desc: "A humorous and unconventional brand film that blends horror elements with beauty storytelling, highlighting the transformation from dry, frizzy hair to smooth and silky texture.",
  type: "branded",
  video: "https://www.youtube.com/embed/cAprCSuh1j4",
}
  ],
}
  ],
  request: "Available on request",
},
cv: {
  label: "Experience",
  heading: "Internship\nexperience.",
  items: [
    {
      role: "New Media Operations (Volunteer)",
      company: "Anhui 1054 Rescue Team",
      period: "Apr 2023 – Present",
      location: "",
      points: [
        'Content Operations: Planned short-video topics and wrote scripts based on platform trends and audience interests. Produced content centered on the team\'s core image of "timely rescue," "comprehensive support," and "human warmth."',
        "Video Production: Responsible for short-video editing and post-production, with 30+ videos completed in total. Overall videos over 15,000+ views.",
      ],
    },
    {
      role: "Account Executive Intern",
      company: "Chunbo Culture Communication Company",
      period: "Mar 2022 – May 2022",
      location: "Advertising Agency",
      points: [
        "Project Support: Assisted in preparing pitch materials and proposal documents for brand campaigns, and participated in developing brand advertising and communication strategies.",
        "Project Coordination: Liaised with clients and internal design teams, coordinated project resources and tracked execution progress, supporting the successful delivery of 5+ brand marketing projects.",
        "Brand Marketing Projects: Participated in the execution of multiple brand campaigns, including the launch of Centrum Overseas Flagship Store on Tmall, the Centrum 618 Shopping Festival campaign, Caltrate JD Brand Day campaign, and an H5 interactive advertising project.",
      ],
    },
    {
      role: "Content Production",
      company: "Yuanyouhui Photography Studio",
      period: "Jun 2020 – Aug 2020",
      location: "",
      points: [
        "Content Creativity: Independently designed creative shooting scenes and carried out photography work, participating in 10+ shooting projects in total.",
        "Project Execution: Took on private photography projects and completed post-production work. For the Chinese Classics Recitation Video Competition project at Chuzhou Middle School in Anhui Province, the work won Second Prize among 1,000+ submissions.",
      ],
    },
    {
      role: "Livestream Assistant Intern",
      company: "Beauty Retail Store",
      period: "Jan 2020 – Mar 2020",
      location: "",
      points: [
        "Livestream Operations: Responsible for livestream preparation and product script writing, and assisted with livestream promotional activities. Average viewership reached 5,000+ per session.",
        "Content Distribution: Edited highlight clips from livestreams and published them on social media platforms to support secondary content distribution.",
        "User Operations: Built customer communities and tracked user feedback, maintaining relationships with 100+ customers and supporting repeat purchases and conversion.",
      ],
    },
  ],
  edu: "Education",
  eduDetail:
    "BA Advertising — Shanghai Business School\nMA Society, Culture & Media — University of Leeds, UK",
},
contact: {
  label: "Contact",
  heading: "Let's work\ntogether.",
  sub: "Open to internship opportunities, freelance projects, and creative collaborations. I'd love to hear what you're building.",
links: [
  {
    label: "Email",
    value: "arouchan666@gmail.com",
    href: "mailto:arouchan666@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Wufan Chen",
    href: "https://www.linkedin.com/in/wufan-chen-ba5a333b8",
  },
  {
    label: "WhatsApp",
    value: "+44 7789 069040",
    href: "https://wa.me/447789069040",
  },
],
  available: "Available for new opportunities",
  form: {
    name: "Name",
    namePh: "Your name",
    email: "Email",
    emailPh: "arouchan666@gmail.com",
    message: "Message",
    messagePh: "Tell me about your project...",
    send: "Send Message →",
    sent: "Message sent.",
    sentSub: "Thank you — I'll be in touch soon.",
  },
},
footer: "© 2026 Wufan Chen",
  },
  zh: {
    nav: ["关于我", "实习经历", "品牌策划", "创意作品", "联系方式"],
    hero: {
      badge: "2026",
      sub1: "你好，我是陈吴凡。",
      sub2: "我为品牌赋予温度，让内容与人真实连接。",
      cta1: "查看项目",
      cta2: "联系我",
    },
    ticker: [
      "品牌战略",
      "活动策划",
      "文案撰写",
      "摄影创作",
      "视频制作",
      "社交媒体",
      "编辑统筹",
      "动态设计",
    ],
    about: {
      label: "关于我",
      photoLabel: "image/zjz.JPG",
      stats: [
        { n: "4", l: "实习经历" },
        { n: "10+", l: "项目案例" },
        { n: "2", l: "学历" },
        { n: "2", l: "国家" },
      ],
      body: [
        "你好，我是陈吴凡",
        "我擅长品牌策略和内容创作。我有较强的抗压能力,良好的团队协调能力和沟通能力,性格开朗。",
      ],
      cvBtn: "查看简历",
      eduEN: "广告学学士 — 上海商学院\n社会、文化与媒体学硕士 — 英国利兹大学",
      skillsLabel: "技能",
      skills: [
        "摄影（Photography）",
        "图像处理（Image Processing）",
        "视频剪辑（Video Editing）",
        "数据分析（Data Analysis）",
        "AI Vibe Coding",
      ],
    },
    projects: {
      label: "精选项目",
      heading: "品牌策略\n与营销活动。",
items: [
  {
      num: "01",
  title: "钙尔奇草莓酸奶味钙软糖新品上市方案",
  subtitle: "品牌联名策划",
image: `${BASE_URL}images/caltrate.png`,
    year: "",
    intro: "基于年轻消费者对保健品接受度低的市场洞察，本策划通过跨界联名与场景营销，将“补钙”打造为时尚生活方式，并以草莓牛奶钙软糖推动钙尔奇品牌年轻化。",
    desc: "基于年轻消费者对保健品接受度低的市场洞察，本策划通过跨界联名与场景营销，将“补钙”打造为时尚生活方式，并以草莓牛奶钙软糖推动钙尔奇品牌年轻化。",
    detail: "",
    role: "",
    tags: [],
    accent: "#A3C9FF",
    sections: [
      {
        heading: "消费者洞察",
        body: "年轻消费者对传统保健品的接受度较低，对“补钙”的需求认知也相对有限。但与此同时，年轻人越来越关注生活方式型养生——他们更愿意通过日常生活场景中的轻量化方式来实现健康管理。"
      },
      {
        heading: "品牌策略",
        body: "因此，本次品牌策略以“场景化养生”为核心思路，通过跨界联名将补钙行为融入年轻人日常生活方式中的多个高频场景，使补钙从传统健康行为转变为一种轻松、时尚且可持续的生活习惯。"
      },
      {
heading: "生活场景联名",
body: "",
sub: [
  {
    title: "钙尔奇 × 永璞咖啡｜【每日C次放】28天养生倒数日历盲盒",
    body: "推出 28 天养生计划倒数日历盲盒，将钙尔奇草莓牛奶钙软糖升级为每日即食小包装，并与不同口味的一杯装永璞咖啡组合。每个盲盒同时搭配轻养生好物，如蒸汽眼罩、泡脚包、维生素收纳盒等。通过“拆盲盒 + 养生打卡”的形式，将补钙融入年轻人的日常生活习惯，满足年轻人对仪式感消费与惊喜体验的需求。"
  },
  {
    title: "钙尔奇 × 安耐晒｜阳光活力防晒补给盒",
    body: "推出“阳光活力补给盒”联名产品，将安耐晒小规格防晒与钙尔奇草莓牛奶钙软糖随身装组合，打造年轻女性外出时便于携带的健康补给产品。通过将“防晒护肤”与“补钙养生”结合，传递健康生活理念：防晒守护外在美，补钙守护内在活力。"
  },
  {
    title: "钙尔奇 × Particle Fever｜运动能量补给站联名计划",
    body: "与运动品牌 Particle Fever 合作，在其线下门店打造“运动能量补给站”。推出联名运动礼包，将运动装备与钙尔奇草莓钙软糖结合，并结合跑步、瑜伽等线下社群活动，让钙软糖成为年轻运动人群日常健康补给的一部分，从而强化品牌与活力生活方式之间的联系。"
  }
]
},
{
heading: "策略目标",
body: "通过覆盖“咖啡—护肤—运动”三大生活方式场景，建立补钙与年轻生活方式之间的联系，从而推动钙尔奇品牌的年轻化转型，并提升新品草莓牛奶钙软糖在年轻消费群体中的认知度与接受度。"
},
],
},
{
num: "02",
title: "南园·归隅民宿品牌",
subtitle: "在归隅，过一日江南",
cat: "",
year: "",
intro: "本项目围绕“归隐江南”的核心概念，为奉贤区青溪老街中的新民宿打造沉浸式江南文化体验场景。通过园林式空间设计、古风文化互动与社交活动，将传统江南生活方式融入现代文旅消费场景。本策划旨在使民宿从单一住宿空间升级为集住宿、文化体验与社交互动于一体的沉浸式文旅品牌。",
desc: "市场洞察：年轻消费者在旅行中更加重视文化体验与社交分享，而多数民宿仍以住宿功能为主，缺乏沉浸式文化场景。",
detail: "",
role: "",
tags: [],
image: `${BASE_URL}images/nygy.png`,
accent: "#FFC6C6",
sections: [
{
heading: "市场洞察",
body: "年轻消费者在旅行中更加重视文化体验与社交分享，而多数民宿仍以住宿功能为主，缺乏沉浸式文化场景。"
},
{
heading: "核心体验IP",
body: "归隐江南——在城市喧嚣之外，体验一隅江南慢生活。"
},
{
heading: "产品体验设计",
body: "构建“归隐 · 宿 / 饮 / 乐 / 游 / 社”五大体验体系，通过江南饮食、古风娱乐与文化社交活动打造沉浸式体验。",
sub: [
{
title: "归隐·宿",
body: "汉服体验入住，推窗见园林，入夜听流水，营造沉浸式江南居住体验。"
},
{
title: "归隐·饮",
body: "江南文化饮食体验：曲水流觞宴、古法酿酒体验、宋式点茶体验等，将餐饮设计成文化体验。"
},
{
title: "归隐·乐",
body: "古风休闲娱乐体验：投壶、古琴、射箭体验以及中药香囊DIY等互动活动。"
},
{
title: "归隐·游",
body: "江南生活方式体验：汉服漫游青溪老街、江南戏剧节目、夜游灯会等，强化拍照与社交分享属性。"
},
{
title: "归隐·社",
body: "文化社交活动：剧本杀沉浸体验、书法/绘画/插花体验课程等文化交流活动。"
}
]
},
{
heading: "策略目标",
body: "通过文化IP与沉浸式体验设计，构建具有差异化竞争力的文旅民宿品牌概念。"
}
]
},
{
  num: "03",
  title: "寐刻品牌传播策划",
  subtitle: "",
  cat: "",
  year: "",
  intro: "寐刻主营真丝眼罩与蒸汽眼罩产品，致力于为消费者提供舒适的睡眠与放松体验。本项目以 “暂停时刻” 为核心内容概念，为生活方式品牌“寐刻”设计品牌传播Campaign。通过情景化内容与用户共创，展示年轻人在日常生活中的高压瞬间，将寐刻打造为年轻人日常生活中的放松时刻符号。",
  desc: "「这一刻，世界暂停」",
  detail: "将产品融入年轻人的真实生活场景：图书馆赶作业 / 办公室工作 / 社交疲劳 / 用眼过度 / 冥想 / 泡澡 / …… 。当用户戴上寐刻眼罩，世界仿佛按下暂停键。",
  role: ["产品场景化营销策划", "社交媒体传播内容设计"],
  tags: [],
image: `${BASE_URL}images/meike.png`,
  accent: "#FFD9A3",
  sections: [
    {
      heading: "社媒内容设计",
      sub: [
        {
          title: "微博",
          body: `发起话题互动，提升品牌讨论度。
发起话题互动 #如果世界暂停一分钟，你会做什么#，邀请用户分享自己的暂停时刻。
开启「暂停瞬间」照片征集活动，鼓励用户发布生活中的放松瞬间，并通过投票互动与评论抽奖等方式鼓励用户持续参与。`
        },
        {
          title: "小红书｜KOL内容合作",
          body: "邀请生活方式博主、睡眠博主与职场博主分享自己的“暂停时刻”，通过真实生活场景的分享，让用户感受到在忙碌生活中短暂休息的重要性。"
        },
        {
          title: "小红书｜职场博主 — 《午休十分钟拯救我的工作效率》",
          body: "分享忙碌工作日中的午休放松方式，通过十分钟的短暂休息恢复精力，提高下午的工作效率。"
        },
        {
          title: "小红书｜生活方式博主 — 《我的睡前放松仪式》",
          body: "记录日常睡前放松流程，例如阅读、冥想与使用蒸汽眼罩，让用户感受到睡前仪式感带来的身心放松。"
        },
        {
          title: "小红书｜旅行博主 — 《旅途中最舒服的休息方式》",
          body: "在旅行途中分享如何利用短暂休息恢复状态，例如在飞机、高铁或酒店中使用蒸汽眼罩，让旅途更加舒适。"
        },
        {
          title: "抖音｜信息流广告",
          body: "统一视觉概念：人物静止、声音消失、画面慢下来，通过一系列情景短片呈现不同生活场景中的「暂停时刻」，强化品牌所传递的放松与休息体验。"
        },
        {
          title: "抖音｜短片系列《暂停时刻》",
          body: "通过不同生活场景中的短片故事，呈现年轻人在快节奏生活中寻找片刻放松的瞬间。"
        },
        {
          title: "抖音｜《思绪暂停》",
          body: `深夜图书馆里，学生赶作业，思绪混乱，电脑不断弹出 deadline 提醒与消息通知。
当学生戴上寐刻蒸汽眼罩，周围一切仿佛突然静止，世界逐渐安静下来。`
        },
        {
          title: "抖音｜《社交暂停》",
          body: `晚高峰地铁上人群拥挤，广播声、聊天声与手机铃声混杂在一起。
主角十分疲惫，在余光中看见了并不想打招呼的熟人。
TA戴上寐刻眼罩小憩，车厢仿佛被按下暂停键。`
        },
        {
          title: "抖音｜《游戏暂停》",
          body: `深夜房间里游戏音效不断，主角已经连续玩了几个小时游戏，眼睛逐渐疲惫。
当他戴上寐刻蒸汽眼罩，屏幕与声音仿佛一同暂停。`
        },
        {
          title: "抖音｜《暂停一下去冥想》",
          body: `清晨瑜伽室里城市的喧闹隐约传来，主角坐在瑜伽垫上试图放松自己。
戴上寐刻眼罩进入冥想状态，世界逐渐安静下来。`
        },
        {
          title: "线下体验",
          body: `在城市商圈设置 「暂停空间」。
空间设计：安静休息区 + 柔和灯光 + 产品体验区。
用户可以在空间中体验短暂放松，并拍照打卡分享。`
        }
      ]
    },
    {
      heading: "策略目标",
      body: "通过“暂停时刻”这一核心概念，寐刻从功能型睡眠产品升级为具有情绪价值的生活方式品牌。"
     }
  ]
}
],
projectDetail: {
      view: "查看项目",
      back: "← 返回项目列表",
      overview: "项目概述",
      details: "项目详情",
      roleLabel: "角色与职责",
      tagsLabel: "标签",
      visuals: "项目视觉内容即将上线",
}   
},
    creative: {
      label: "创意作品",
      heading: "文案、图片\n与视频。",
      cats: [
{
  name: "文案创作",
  color: "#C8651A",
  bg: "rgba(200,101,26,0.1)",
  items: [
    {
      title: "1054志愿者救援队宣传文案｜民俗活动",
      desc: `正月十六走太平，1054伴你行。`,
      type: "essay",
    },
    {
      title: "1054志愿者救援队宣传文案｜三八妇女节",
      desc: `女性不是被定义的角色，她们是行动中的力量。
不止3.8妇女节，
1054救援队
时刻致敬每一位守护安全的她。`,
      type: "essay",
    },
    {
      title: "1054志愿者救援队宣传文案｜暑期防溺水知识宣讲活动",
      desc: `1054救援队祝小朋友们，
向着太阳，勇敢长大。`,
      type: "essay",
    },
    {
      title: "1054志愿者救援队宣传文案｜高考保障活动",
      desc: `1054救援队祝高考考生，
落笔合盖锋芒尽，
收刀入鞘成功时。`,
      type: "essay",
    },
  ],
},
        {
          name: "视频内容",
          color: "#B0436E",
          bg: "rgba(176,67,110,0.1)",
          items: [
           {
  title: "绽放的花",
  desc: "通过剪辑手法，将花朵缓慢绽放的过程浓缩于短片之中，配合富有节奏感的音乐，突出生命盛放的力量与美感。",
  type: "branded",
video: "https://player.bilibili.com/player.html?bvid=BV1fJAVzoE4f&page=1&autoplay=0",
 },
 {
  title: "柔顺洗发水广告",
  desc: "这是一个欧莱雅洗发水广告，将恐怖与幽默结合：女孩遇到女鬼，却更在意她干枯毛躁的头发。她用洗发水帮女鬼改善发质，使其变得柔顺有光泽。",
  type: "branded",
video: "https://player.bilibili.com/player.html?bvid=BV1fJAVzoE6b&page=1&autoplay=0",
},
          ],
        },
      ],
      request: "可提供完整作品",
    },
    cv: {
      label: "实习经历",
      heading: "实习与\n工作经验。",
      items: [
        {
          role: "志愿服务",
          company: "安徽1054救援队",
          period: "2023.04 – 至今",
          location: "",
          points: [
            "内容运营：结合平台热点与用户兴趣策划短视频选题并撰写脚本。围绕「及时救援」「全面帮助」「有温度」等核心形象输出内容。",
            "视频制作：负责短视频剪辑与后期制作，累计完成视频 30+条，总计播放量达到 15,000+。",
          ],
        },
        {
          role: "客户执行（实习）",
          company: "淳博文化传播公司",
          period: "2022.03 – 2022.05",
          location: "广告公司",
          points: [
            "项目支持：协助完成品牌项目的比稿材料与提案文档撰写，参与品牌广告与传播策略的讨论和制定。",
            "项目协调：对接客户与公司内部设计团队，协调项目资源并跟进执行进度，支持 5+ 品牌营销项目的顺利落地。",
            "品牌营销项目：参与多个品牌传播项目执行，包括善存天猫海外旗舰店上线、善存 618 购物节 campaign、钙尔奇京东大牌日 campaign，以及 H5 互动广告项目。",
          ],
        },
        {
          role: "内容制作",
          company: "园游会摄影工作室",
          period: "2020.06 – 2020.08",
          location: "",
          points: [
            "内容创意：独立设计创意拍摄场景并完成摄影执行，累计参与拍摄项目 10+组。",
            "项目执行：承接私人拍摄需求并完成后期处理。安徽省滁州中学中华经典诵读视频大赛拍摄项目，作品在 1000+参赛作品中获得二等奖。",
          ],
        },
        {
          role: "直播助理（实习）",
          company: "美妆零售商店",
          period: "2020.01 – 2020.03",
          location: "",
          points: [
            "直播运营：负责直播准备与产品脚本撰写，协助直播推广活动，单场直播平均观看 5,000+人次。",
            "内容传播：剪辑直播精彩片段并发布至社交平台，促进直播内容二次传播。",
            "用户运营：建立客户社群并跟踪用户反馈，维护 100+客户关系，促进复购与转化。",
          ],
        },
      ],
      edu: "学历",
      eduDetail:
        "广告学学士 — 上海商学院\n社会、文化与媒体学硕士 — 英国利兹大学",
    },
    contact: {
      label: "联系方式",
      heading: "期待与你\n合作。",
      sub: "欢迎实习合作、自由项目及创意联名。期待听你聊聊正在构建的事情。",
      links: [
        {
          label: "邮箱",
          value: "arouchan666@gmail.com",
          href: "mailto:arouchan666@gmail.com",
        },
        { label: "微信", value: "19921943963", href: "#" },
        { label: "电话", value: "19921943963", href: "#" },
      ],
      available: "欢迎新机会与合作",
      form: {
        name: "姓名",
        namePh: "你的名字",
        email: "邮箱",
        emailPh: "your@email.com",
        message: "留言",
        messagePh: "告诉我你正在做的项目……",
        send: "发送消息 →",
        sent: "消息已发送。",
        sentSub: "谢谢 — 我会尽快与你联系。",
      },
    },
    footer: "© 2026 陈吴凡",
  },
};

/* ─────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────── */
function useFadeIn(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Fade({
  children,
  delay = 0,
  up = 20,
}: {
  children: React.ReactNode;
  delay?: number;
  up?: number;
}) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${up}px)`,
        transition: `opacity 1s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 1s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   DECORATIVE BLOBS & SHAPES
───────────────────────────────────────────── */
function Blob({
  x,
  y,
  w,
  h,
  color,
  blur = 90,
  opacity = 1,
}: {
  x: string;
  y: string;
  w: number;
  h?: number;
  color: string;
  blur?: number;
  opacity?: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        pointerEvents: "none",
        zIndex: 0,
        width: w,
        height: h ?? w,
        borderRadius: "50%",
        background: color,
        filter: `blur(${blur}px)`,
        opacity,
      }}
    />
  );
}

function Ring({
  x,
  y,
  size,
  color,
  thickness = 1.5,
}: {
  x: string;
  y: string;
  size: number;
  color: string;
  thickness?: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        pointerEvents: "none",
        zIndex: 0,
        width: size,
        height: size,
        borderRadius: "50%",
        border: `${thickness}px solid ${color}`,
        opacity: 0.35,
      }}
    />
  );
}

function DotGrid({
  x,
  y,
  cols = 6,
  rows = 5,
  gap = 22,
  color = "rgba(160,170,200,0.18)",
}: {
  x: string;
  y: string;
  cols?: number;
  rows?: number;
  gap?: number;
  color?: string;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        pointerEvents: "none",
        zIndex: 0,
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${gap}px)`,
        gap: `${gap}px`,
      }}
    >
      {Array.from({ length: cols * rows }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 3,
            height: 3,
            borderRadius: "50%",
            background: color,
          }}
        />
      ))}
    </div>
  );
}

function WaveLine({
  x,
  y,
  color = "rgba(163,201,255,0.3)",
  width = 200,
}: {
  x: string;
  y: string;
  color?: string;
  width?: number;
}) {
  return (
    <svg
      style={{
        position: "absolute",
        left: x,
        top: y,
        pointerEvents: "none",
        zIndex: 0,
      }}
      width={width}
      height="40"
      viewBox={`0 0 ${width} 40`}
      fill="none"
    >
      <path
        d={`M0 20 Q${width / 6} 5 ${width / 3} 20 Q${width / 2} 35 ${(width * 2) / 3} 20 Q${(width * 5) / 6} 5 ${width} 20`}
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   GLASS CARD
───────────────────────────────────────────── */
function GlassCard({
  children,
  style = {},
  className,
  onMouseEnter,
  onMouseLeave,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.9)",
        borderRadius: 24,
        boxShadow:
          "0 6px 40px rgba(140,150,200,0.12), 0 1px 8px rgba(140,150,200,0.08)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────── */
type ProjectSection = {
  heading: string;
  body?: string;
  sub?: { title: string; body: string }[];
};
type ProjectItem = {
  num: string;
  title: string;
  subtitle: string;
  cat: string;
  year: string;
  intro: string;
  desc: string;
  detail: string;
  role: string | string[];
  tags: string[];
  accent: string;
  image?: string;
  sections?: ProjectSection[];
};
function ProjectCard({
  item,
  index,
  onView,
}: {
  item: ProjectItem;
  index: number;
  onView: () => void;
}) {
  const [hov, setHov] = useState(false);
  return (
    <Fade delay={index * 0.08}>
      <div
        onClick={onView}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: hov ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.55)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: `1px solid ${hov ? item.accent + "55" : "rgba(255,255,255,0.9)"}`,
          borderRadius: 24,
          padding: "1.75rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          transition: "all 0.45s cubic-bezier(0.22,1,0.36,1)",
          transform: hov ? "translateY(-5px) scale(1.005)" : "translateY(0) scale(1)",
          boxShadow: hov
            ? `0 20px 56px rgba(140,150,200,0.16), 0 6px 20px ${item.accent}20`
            : "0 6px 32px rgba(140,150,200,0.08), 0 1px 6px rgba(140,150,200,0.06)",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, ${item.accent}, ${item.accent}40, transparent)`,
          borderRadius: "24px 24px 0 0",
          opacity: hov ? 1 : 0.5,
          transition: "opacity 0.4s",
        }} />

        <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
            background: `linear-gradient(135deg, ${item.accent}20, ${item.accent}08)`,
            border: `1.5px solid ${item.accent}28`,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.35s",
            boxShadow: hov ? `0 3px 12px ${item.accent}18` : "none",
          }}>
            <span style={{ fontSize: "1.2rem", fontWeight: 900, color: item.accent, opacity: 0.7, letterSpacing: "-0.04em" }}>{item.num}</span>
          </div>
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, letterSpacing: "-0.02em", color: "#333", margin: 0, lineHeight: 1.25 }}>{item.title}</h3>
            <span style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, color: item.accent, opacity: 0.8 }}>{item.cat}</span>
          </div>
        </div>

        <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "#777", margin: 0 }}>{item.intro}</p>

        <div style={{
          width: "100%", aspectRatio: "16/9", borderRadius: 14,
          overflow: "hidden",
          background: `linear-gradient(145deg, ${item.accent}10, rgba(240,240,248,0.5), ${item.accent}06)`,
          border: item.image ? "none" : `1.5px dashed ${item.accent}25`,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.35s",
          boxShadow: hov ? `inset 0 0 20px ${item.accent}08` : "none",
        }}>
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          ) : (
            <div style={{ textAlign: "center" }}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" style={{ opacity: 0.3, marginBottom: 4 }}>
                <rect x="3" y="6" width="26" height="20" rx="3" stroke={item.accent} strokeWidth="1.5" />
                <circle cx="12" cy="14" r="3" stroke={item.accent} strokeWidth="1.5" />
                <path d="M3 22l7-5 5 4 4-3 10 7" stroke={item.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: "0.7rem", color: "#C0C8D8", fontWeight: 500, display: "block" }}>Product Image</span>
            </div>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
          <span style={{
            fontSize: 16, color: hov ? item.accent : "#D0D0DC",
            transition: "all 0.3s",
            transform: hov ? "translateX(3px)" : "translateX(0)",
            display: "inline-block",
          }}>→</span>
        </div>
      </div>
    </Fade>
  );
}

/* ─────────────────────────────────────────────
   ICON SET
───────────────────────────────────────────── */
const ICONS: Record<string, React.ReactNode> = {
  essay: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path
        d="M6 8h20M6 14h14M6 20h17M6 26h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  campaign: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path
        d="M4 24L16 6l12 18H4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="20" r="2" fill="currentColor" />
    </svg>
  ),
  photo: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect
        x="3"
        y="7"
        width="26"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="16" cy="16" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="24" cy="11" r="1.5" fill="currentColor" />
    </svg>
  ),
  motion: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect
        x="3"
        y="5"
        width="26"
        height="22"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 11l10 5-10 5V11z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  documentary: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect
        x="2"
        y="8"
        width="20"
        height="16"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M22 13l8-4v14l-8-4V13z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  branded: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 10l10 6-10 6V10z" fill="currentColor" opacity="0.55" />
    </svg>
  ),
};

/* ─────────────────────────────────────────────
   CREATIVE ITEM CARD
───────────────────────────────────────────── */
type CatType = {
  name: string;
  color: string;
  bg: string;
  items: Array<{
    title: string;
    desc: string;
    quote?: string;
    type: string;
    video?: string;
  }>;
};
function CreativeItemCard({
  item,
  ii,
  cat,
  lang,
  requestLabel,
}: {
  item: CatType["items"][0];
  ii: number;
  cat: CatType;
  lang: Lang;
  requestLabel: string;
}) {
  const [hov, setHov] = useState(false);
  const isVideo = cat.name.includes("Video") || cat.name.includes("视频");
  const typeLabel =
    lang === "en"
      ? item.type === "essay" || item.type === "campaign"
        ? "Add Text"
        : isVideo || item.type === "branded"
          ? "Add Video"
          : "Add Image"
   : item.type === "essay" || item.type === "campaign"
  ? "添加文本"
  : isVideo || item.type === "branded"
    ? "添加视频"
    : "添加图片";
  return (
    <GlassCard
      style={{
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        transform: hov ? "translateY(-6px)" : "none",
        boxShadow: hov
          ? `0 20px 56px rgba(140,150,200,0.16), 0 4px 16px ${cat.color}28`
          : "0 6px 40px rgba(140,150,200,0.1)",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
{item.type !== "essay" && item.type !== "campaign" && (
  <div
    style={{
      aspectRatio: isVideo ? "16/9" : "3/2",
      background: hov
        ? cat.bg
        : "linear-gradient(135deg, rgba(240,240,245,0.85) 0%, rgba(232,232,240,0.85) 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.625rem",
      transition: "background 0.35s ease",
      borderBottom: "1px solid rgba(200,205,225,0.18)",
      overflow: "hidden",
    }}
  >
    {isVideo && item.video ? (
      <iframe
        width="100%"
        height="100%"
        src={item.video}
        title={item.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
      />
    ) : (
      <>
        <div
          style={{
            color: hov ? cat.color : "#CCCCCC",
            transition: "color 0.3s, transform 0.3s",
            transform: hov ? "scale(1.12)" : "scale(1)",
          }}
        >
          {ICONS[item.type] ?? ICONS.photo}
        </div>
        <span
          style={{
            fontSize: 9.5,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: hov ? cat.color : "#D0D0D0",
            transition: "color 0.3s",
          }}
        >
          {typeLabel}
        </span>
      </>
    )}
  </div>
)}
      <div style={{ padding: "1.5rem 1.625rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.625rem",
          }}
        >
          <h3
            style={{
              fontSize: "0.975rem",
              fontWeight: 700,
              color: "#333",
              letterSpacing: "-0.01em",
            }}
          >
            {item.title}
          </h3>
          <span style={{ fontSize: 11, color: "#D0D0D0", fontWeight: 600 }}>
            {String(ii + 1).padStart(2, "0")}
          </span>
        </div>
        {item.quote && (
          <p
            style={{
              fontSize: "0.82rem",
              color: "#888",
              fontStyle: "italic",
              lineHeight: 1.7,
              marginBottom: "0.75rem",
              borderLeft: `2.5px solid ${cat.color}70`,
              paddingLeft: "0.75rem",
            }}
          >
            "{item.quote}"
          </p>
        )}
     <p
  style={{
    fontSize: "0.82rem",
    color: "#999",
    lineHeight: 1.78,
    whiteSpace: "pre-line",
  }}
>
  {item.desc}
</p>
        <p
          style={{
            fontSize: "0.72rem",
            color: "#CCCCCC",
            fontStyle: "italic",
            marginTop: "0.75rem",
          }}
        >
          {requestLabel}
        </p>
      </div>
    </GlassCard>
  );
}

/* ─────────────────────────────────────────────
   CV ITEM CARD
───────────────────────────────────────────── */
type CVItemType = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};
function CVItemCard({ item, delay }: { item: CVItemType; delay: number }) {
  const [hov, setHov] = useState(false);
  return (
    <Fade delay={delay}>
      <GlassCard
        style={{
          padding: "2rem 2.5rem",
          transition: "all 0.35s ease",
          transform: hov ? "translateY(-3px)" : "none",
          boxShadow: hov
            ? "0 14px 48px rgba(140,150,200,0.15)"
            : "0 6px 40px rgba(140,150,200,0.09)",
        }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "1.125rem",
            alignItems: "flex-start",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#333",
                marginBottom: "0.3rem",
              }}
            >
              {item.role}
            </h3>
            <p
              style={{ fontSize: "0.85rem", color: "#BBBBC8", fontWeight: 500 }}
            >
              {item.company}
              {item.location ? ` · ${item.location}` : ""}
            </p>
          </div>
          <span
            style={{
              fontSize: 11.5,
              fontWeight: 600,
              padding: "0.35rem 0.9rem",
              borderRadius: 100,
              background: hov
                ? "rgba(163,201,255,0.22)"
                : "rgba(200,205,225,0.18)",
              color: hov ? "#5B8ED6" : "#CCCCCC",
              border: `1px solid ${hov ? "rgba(163,201,255,0.45)" : "transparent"}`,
              transition: "all 0.25s",
              whiteSpace: "nowrap",
            }}
          >
            {item.period}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
          }}
        >
          {item.points.map((pt, j) => (
            <div
              key={j}
              style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}
            >
              <span style={{
                width: 7, height: 7, minWidth: 7, borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(163,201,255,0.6), rgba(200,180,255,0.5))",
                marginTop: "0.55rem",
                border: "1px solid rgba(163,201,255,0.3)",
              }} />
              <span style={{ fontSize: "0.86rem", color: "#777", lineHeight: 1.8 }}>{pt}</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </Fade>
  );
}

/* ─────────────────────────────────────────────
   SECTION HEADER
───────────────────────────────────────────── */
function SH({
  label,
  heading,
  right,
}: {
  label: string;
  heading: string;
  right?: React.ReactNode;
}) {
  return (
    <Fade>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginBottom: "4rem",
        }}
      >
        <div>
          <span
            style={{
              fontSize: 10,
              letterSpacing: "0.26em",
              color: "#BBBBC8",
              textTransform: "uppercase",
              fontWeight: 700,
              display: "block",
              marginBottom: "0.875rem",
            }}
          >
            {label}
          </span>
          <h2
            style={{
              fontSize: "clamp(1.875rem,3.5vw,2.625rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#333",
              lineHeight: 1.1,
              whiteSpace: "pre-line",
            }}
          >
            {heading}
          </h2>
        </div>
        {right}
      </div>
    </Fade>
  );
}

/* ─────────────────────────────────────────────
   LANGUAGE TOGGLE BUTTON
───────────────────────────────────────────── */
function LangBtn({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.04em",
        padding: "0.42rem 1rem",
        borderRadius: 100,
        border: `1.5px solid ${active ? "rgba(163,201,255,0.55)" : "rgba(200,205,225,0.35)"}`,
        background: active ? "rgba(163,201,255,0.18)" : "transparent",
        color: active ? "#5B8ED6" : "#CCCCCC",
        cursor: "pointer",
        fontFamily: "inherit",
        transition: "all 0.22s ease",
      }}
    >
      {label}
    </button>
  );
}

/* ─────────────────────────────────────────────
   MAIN PORTFOLIO
───────────────────────────────────────────── */
export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const t = CONTENT[lang];
  const NAV_IDS = ["about", "cv", "projects", "creative", "contact"];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const y = window.scrollY + 140;
      for (const id of NAV_IDS) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight)
          setActiveSection(id);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (activeProject !== null) {
    const proj = t.projects.items[activeProject];
    return (
      <div style={{ fontFamily: "'Inter','Helvetica Neue',system-ui,sans-serif", background: "#F5F5F5", color: "#333", minHeight: "100vh", overflowX: "hidden", position: "relative", animation: "fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1)" }}>
        <style>{`
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fadeInScale { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
          .detail-card { animation: fadeInScale 0.5s cubic-bezier(0.22,1,0.36,1) both; }
          .detail-card:nth-child(2) { animation-delay: 0.08s; }
          .detail-card:nth-child(3) { animation-delay: 0.16s; }
          .detail-card:nth-child(4) { animation-delay: 0.24s; }
          .detail-card:nth-child(5) { animation-delay: 0.32s; }
          .detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
          @media (max-width: 640px) { .detail-grid { grid-template-columns: 1fr !important; } }
        `}</style>
        <Blob x="55%" y="-8%" w={700} color={`${proj.accent}30`} blur={130} />
        <Blob x="-10%" y="35%" w={500} color="rgba(224,195,240,0.22)" blur={110} />
        <Blob x="45%" y="65%" w={450} color="rgba(195,232,195,0.18)" blur={100} />
        <Blob x="85%" y="50%" w={300} color="rgba(255,198,198,0.15)" blur={90} />
        <Ring x="90%" y="5%" size={220} color={`${proj.accent}25`} />
        <Ring x="90%" y="5%" size={320} color={`${proj.accent}12`} thickness={0.8} />
        <Ring x="3%" y="80%" size={140} color="rgba(224,195,240,0.25)" />
        <DotGrid x="92%" y="60%" cols={5} rows={6} color={`${proj.accent}12`} />
        <WaveLine x="10%" y="92%" color="rgba(195,232,195,0.2)" width={300} />

        <div style={{ maxWidth: 920, margin: "0 auto", padding: "4rem 2.5rem 5rem", position: "relative", zIndex: 1 }}>
          <button
            onClick={() => setActiveProject(null)}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.5)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.7)", borderRadius: 100, cursor: "pointer", color: "#888", fontWeight: 600, fontSize: "0.82rem", fontFamily: "inherit", marginBottom: "2.5rem", padding: "0.6rem 1.4rem", transition: "all 0.25s", letterSpacing: "0.02em" }}
            onMouseEnter={e => { (e.target as HTMLElement).style.color = proj.accent; (e.target as HTMLElement).style.borderColor = proj.accent + "50"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.color = "#888"; (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.7)"; }}
          >
{t.projects.projectDetail.back}
          </button>

          <div className="detail-card" style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
            <div style={{
              width: 80, height: 80, borderRadius: 20, flexShrink: 0,
              background: `linear-gradient(135deg, ${proj.accent}25, ${proj.accent}08)`,
              border: `2px solid ${proj.accent}35`,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: `0 8px 32px ${proj.accent}20`,
            }}>
              <span style={{ fontSize: "2rem", fontWeight: 900, color: proj.accent, opacity: 0.75, letterSpacing: "-0.04em" }}>{proj.num}</span>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700, padding: "0.35rem 0.9rem", borderRadius: 100, background: `${proj.accent}18`, color: proj.accent, border: `1px solid ${proj.accent}35` }}>{proj.cat}</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#333", lineHeight: 1.15, margin: 0 }}>{proj.title}</h1>
              <p style={{ fontSize: "0.9rem", color: "#BBBBC8", fontWeight: 600, letterSpacing: "0.03em", margin: "0.4rem 0 0" }}>{proj.subtitle}</p>
            </div>
          </div>

          <GlassCard className="detail-card" style={{ padding: proj.image ? 0 : "2.5rem", marginBottom: "1.5rem", overflow: "hidden" }}>
            {proj.image ? (
              <img
                src={proj.image}
                alt={proj.title}
                style={{ width: "100%", maxHeight: "420px", objectFit: "cover", display: "block", borderRadius: 20 }}
              />
            ) : (
              <div style={{ width: "100%", aspectRatio: "2.2/1", borderRadius: 20, background: `linear-gradient(135deg, ${proj.accent}12, rgba(240,240,248,0.5), ${proj.accent}06)`, border: `2px dashed ${proj.accent}25`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <svg width="36" height="36" viewBox="0 0 32 32" fill="none" style={{ opacity: 0.3, marginBottom: 6 }}>
                    <rect x="3" y="6" width="26" height="20" rx="3" stroke={proj.accent} strokeWidth="1.5" />
                    <circle cx="12" cy="14" r="3" stroke={proj.accent} strokeWidth="1.5" />
                    <path d="M3 22l7-5 5 4 4-3 10 7" stroke={proj.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontSize: "0.8rem", color: "#B0B8CC", fontWeight: 500, display: "block" }}>{t.projects.projectDetail.visuals}</span>
                </div>
              </div>
            )}
          </GlassCard>

          {proj.sections && proj.sections.length > 0 ? (
            <>
              {proj.sections.map((sec, si) => (
                <GlassCard key={si} className="detail-card" style={{ padding: "2.5rem", marginBottom: "1.5rem" }}>
                  <h3 style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, color: proj.accent, marginBottom: "1.25rem" }}>{sec.heading}</h3>
                  {sec.body && <p style={{ fontSize: "0.95rem", lineHeight: 2, color: "#555", margin: 0 }}>{sec.body}</p>}
                  {sec.sub && sec.sub.length > 0 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: sec.body ? "1.5rem" : 0 }}>
                      {sec.sub.map((s, ssi) => (
                        <div key={ssi} style={{ padding: "1.5rem", borderRadius: 16, background: `linear-gradient(135deg, ${proj.accent}08, rgba(255,255,255,0.4))`, border: `1px solid ${proj.accent}18` }}>
                          <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#444", margin: "0 0 0.6rem", lineHeight: 1.35 }}>{s.title}</h4>
                          <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: "#666", margin: 0 }}>{s.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </GlassCard>
              ))}
            </>
          ) : (
            <>
              {proj.desc && (
                <GlassCard className="detail-card" style={{ padding: "2.5rem", marginBottom: "1.5rem" }}>
                  <h3 style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: "#BBBBC8", marginBottom: "1.25rem" }}>{t.projects.projectDetail.overview}</h3>
                  <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "#666", margin: 0 }}>{proj.desc}</p>
                </GlassCard>
              )}
              {proj.detail && (
                <GlassCard className="detail-card" style={{ padding: "2.5rem", marginBottom: "1.5rem" }}>
                  <h3 style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: "#BBBBC8", marginBottom: "1.25rem" }}>{t.projects.projectDetail.details}</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 2, color: "#555", margin: 0 }}>{proj.detail}</p>
                </GlassCard>
              )}
              {(proj.role && (Array.isArray(proj.role) ? proj.role.length > 0 : proj.role !== "") || (proj.tags ?? []).length > 0) && (
                <div className="detail-card detail-grid" style={{ marginBottom: "1.5rem" }}>
                  {proj.role && (Array.isArray(proj.role) ? proj.role.length > 0 : proj.role !== "") && (
                    <GlassCard style={{ padding: "2rem" }}>
                      <h3 style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: "#BBBBC8", marginBottom: "1rem" }}>{t.projects.projectDetail.roleLabel}</h3>
                      {Array.isArray(proj.role) ? (
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                          {proj.role.map((r, ri) => (
                            <p key={ri} style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#666", margin: 0 }}>{r}</p>
                          ))}
                        </div>
                      ) : (
                        <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#666", margin: 0 }}>{proj.role}</p>
                      )}
                    </GlassCard>
                  )}
                  {(proj.tags ?? []).length > 0 && (
                    <GlassCard style={{ padding: "2rem" }}>
                      <h3 style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: "#BBBBC8", marginBottom: "1rem" }}>{t.projects.projectDetail.tagsLabel}</h3>
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                        {(proj.tags ?? []).map(tag => (
                          <span key={tag} style={{ fontSize: "0.82rem", fontWeight: 600, padding: "0.45rem 1rem", borderRadius: 100, background: `${proj.accent}15`, color: "#777", border: `1px solid ${proj.accent}30` }}>{tag}</span>
                        ))}
                      </div>
                    </GlassCard>
                  )}
                </div>
              )}
            </>
          )}

          <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
            <button
              onClick={() => setActiveProject(null)}
              style={{ padding: "0.875rem 2.25rem", borderRadius: 100, border: "1px solid rgba(200,205,225,0.35)", background: "rgba(255,255,255,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", color: "#888", fontWeight: 600, fontSize: "0.82rem", cursor: "pointer", fontFamily: "inherit", transition: "all 0.25s", letterSpacing: "0.02em" }}
              onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = proj.accent + "50"; (e.target as HTMLElement).style.color = "#555"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = "rgba(200,205,225,0.35)"; (e.target as HTMLElement).style.color = "#888"; }}
            >
{t.projects.projectDetail.back}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily: "'Inter','Helvetica Neue',system-ui,sans-serif",
        background: "#F5F5F5",
        color: "#333",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #F5F5F5; overflow-x: hidden; }

        .nl {
          font-size: 13px; text-decoration: none; font-weight: 400;
          color: #C0C0CC; position: relative; letter-spacing: 0.01em;
          transition: color 0.22s ease; padding-bottom: 2px;
        }
        .nl::after {
          content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
          height: 1.5px; background: linear-gradient(90deg,#A3C9FF,#FFC6C6); border-radius: 2px;
          transform: scaleX(0); transform-origin: left; transition: transform 0.22s ease;
        }
        .nl:hover, .nl.on { color: #555; }
        .nl:hover::after, .nl.on::after { transform: scaleX(1); }
        .nl.on { font-weight: 600; }

        .bp {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 0.875rem 2rem; border-radius: 100px;
          font-size: 13px; font-weight: 600; letter-spacing: 0.02em;
          text-decoration: none; border: none; cursor: pointer; font-family: inherit;
          background: linear-gradient(135deg,#C2DBFF 0%,#A3C9FF 100%);
          color: #3a6fa8;
          box-shadow: 0 4px 24px rgba(163,201,255,0.4),0 1px 8px rgba(163,201,255,0.2);
          transition: transform 0.25s ease,box-shadow 0.25s ease,filter 0.25s ease;
        }
        .bp:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(163,201,255,0.5); filter: brightness(1.04); }

        .bs {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 0.875rem 2rem; border-radius: 100px;
          font-size: 13px; font-weight: 600; letter-spacing: 0.02em;
          text-decoration: none; cursor: pointer; font-family: inherit;
          background: rgba(255,255,255,0.65); color: #888;
          border: 1.5px solid rgba(200,205,225,0.55);
          backdrop-filter: blur(10px);
          transition: border-color 0.22s,color 0.22s,transform 0.22s,box-shadow 0.22s;
        }
        .bs:hover { border-color: rgba(163,201,255,0.65); color: #5B8ED6; transform: translateY(-2px); box-shadow: 0 4px 18px rgba(163,201,255,0.2); }

        .bsub {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          width: 100%; padding: 0.95rem 2rem; border-radius: 100px;
          font-size: 13px; font-weight: 600; letter-spacing: 0.025em;
          border: none; cursor: pointer; font-family: inherit;
          background: linear-gradient(135deg,#C2DBFF 0%,#A3C9FF 100%);
          color: #3a6fa8;
          box-shadow: 0 4px 22px rgba(163,201,255,0.36);
          transition: transform 0.22s,box-shadow 0.22s,filter 0.22s;
        }
        .bsub:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(163,201,255,0.45); filter: brightness(1.04); }

        .fi {
          width: 100%; padding: 0.9rem 1.1rem;
          border: 1.5px solid rgba(200,205,225,0.45); border-radius: 12px;
          font-size: 0.9rem; color: #444; background: rgba(255,255,255,0.65);
          outline: none; font-family: inherit; backdrop-filter: blur(10px);
          transition: border-color 0.2s,box-shadow 0.2s,background 0.2s;
        }
        .fi:focus { border-color: rgba(163,201,255,0.7); background: rgba(255,255,255,0.92); box-shadow: 0 0 0 4px rgba(163,201,255,0.12); }
        .fi::placeholder { color: #D0D0D8; }

        .cl {
          display: flex; align-items: center; gap: 1.25rem;
          padding: 1.1rem 0; border-bottom: 1px solid rgba(200,205,225,0.3);
          text-decoration: none; color: #555; font-size: 0.9rem; transition: color 0.2s;
        }
        .cl:hover { color: #5B8ED6; }
        .cl:last-child { border-bottom: none; }

        .sp { padding: 8rem 2.5rem; }

        @media (max-width: 960px) {
          .dn { display: none !important; }
          .mb { display: flex !important; }
          .ag { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .pg { grid-template-columns: 1fr 1fr !important; }
          .cwg { grid-template-columns: 1fr !important; }
          .cg { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .sp { padding: 5rem 1.5rem !important; }
        }
        @media (max-width: 640px) {
          .ht { font-size: clamp(2.4rem,10vw,3.2rem) !important; }
          .sr { gap: 1.75rem !important; }
          .pg { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ═══════════════ NAV ═══════════════ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          background: scrolled ? "rgba(245,245,248,0.82)" : "transparent",
          backdropFilter: scrolled ? "blur(26px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(26px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(200,205,225,0.22)" : "none",
          transition: "all 0.35s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 2.5rem",
            height: 66,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href="#"
            style={{
              fontWeight: 800,
              fontSize: 13.5,
              letterSpacing: "0.1em",
              color: "#444",
              textDecoration: "none",
            }}
          >
            {lang === "en" ? "WUFAN CHEN" : "陈吴凡"}
          </a>
          <div
            className="dn"
            style={{ display: "flex", gap: "2.25rem", alignItems: "center" }}
          >
            {t.nav.map((label, i) => (
              <a
                key={i}
                href={`#${NAV_IDS[i]}`}
                className={`nl${activeSection === NAV_IDS[i] ? " on" : ""}`}
              >
                {label}
              </a>
            ))}
          </div>
          <div
            className="dn"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <LangBtn
              active={lang === "en"}
              onClick={() => setLang("en")}
              label="EN"
            />
            <LangBtn
              active={lang === "zh"}
              onClick={() => setLang("zh")}
              label="中文"
            />
          </div>
          <div
            className="mb"
            style={{ display: "none", alignItems: "center", gap: "0.75rem" }}
          >
            <button
              onClick={() => setLang(lang === "en" ? "zh" : "en")}
              style={{
                fontSize: 12,
                fontWeight: 700,
                padding: "0.3rem 0.75rem",
                borderRadius: 100,
                border: "1.5px solid rgba(163,201,255,0.5)",
                background: "rgba(163,201,255,0.12)",
                color: "#5B8ED6",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              {lang === "en" ? "中文" : "EN"}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 4,
              }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 22,
                    height: 2,
                    background: "#888",
                    borderRadius: 2,
                    transition: "all 0.25s",
                    transform: menuOpen
                      ? i === 0
                        ? "rotate(45deg) translate(5px,5px)"
                        : i === 2
                          ? "rotate(-45deg) translate(5px,-5px)"
                          : "scaleX(0)"
                      : "none",
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div
            style={{
              background: "rgba(245,245,248,0.96)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(200,205,225,0.22)",
              padding: "1.25rem 2.5rem",
            }}
          >
            {t.nav.map((label, i) => (
              <a
                key={i}
                href={`#${NAV_IDS[i]}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "0.875rem 0",
                  fontSize: 15,
                  color: "#555",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(200,205,225,0.2)",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ═══════════════ HERO ═══════════════ */}
      <section
        style={{
          paddingTop: 66,
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(145deg,#EEF3FA 0%,#F5F0F8 35%,#FAF0EE 65%,#EEF6F0 100%)",
        }}
      >
        {/* Layer 1 – large base blobs */}
        <Blob
          x="52%"
          y="-12%"
          w={780}
          color="rgba(163,201,255,0.32)"
          blur={130}
        />
        <Blob
          x="-14%"
          y="20%"
          w={600}
          color="rgba(255,198,198,0.28)"
          blur={120}
        />
        <Blob
          x="72%"
          y="48%"
          w={540}
          color="rgba(195,232,195,0.22)"
          blur={110}
        />
        <Blob
          x="22%"
          y="60%"
          w={480}
          color="rgba(224,195,240,0.26)"
          blur={100}
        />
        <Blob x="42%" y="30%" w={360} color="rgba(255,217,163,0.2)" blur={90} />
        {/* Layer 2 – smaller accent blobs for depth */}
        <Blob
          x="88%"
          y="18%"
          w={260}
          color="rgba(163,201,255,0.22)"
          blur={70}
        />
        <Blob
          x="10%"
          y="80%"
          w={300}
          color="rgba(255,198,198,0.18)"
          blur={75}
        />
        <Blob
          x="60%"
          y="75%"
          w={320}
          color="rgba(255,217,163,0.18)"
          blur={80}
        />
        <Blob x="32%" y="10%" w={220} color="rgba(195,232,195,0.2)" blur={65} />
        <Blob
          x="76%"
          y="88%"
          w={280}
          color="rgba(224,195,240,0.18)"
          blur={70}
        />
        {/* Rings */}
        <Ring
          x="78%"
          y="8%"
          size={200}
          color="rgba(163,201,255,0.4)"
          thickness={1}
        />
        <Ring
          x="78%"
          y="8%"
          size={280}
          color="rgba(163,201,255,0.18)"
          thickness={0.8}
        />
        <Ring
          x="78%"
          y="8%"
          size={360}
          color="rgba(163,201,255,0.1)"
          thickness={0.6}
        />
        <Ring
          x="5%"
          y="68%"
          size={160}
          color="rgba(255,198,198,0.38)"
          thickness={1}
        />
        <Ring
          x="5%"
          y="68%"
          size={230}
          color="rgba(255,198,198,0.18)"
          thickness={0.8}
        />
        <Ring
          x="55%"
          y="88%"
          size={120}
          color="rgba(195,232,195,0.3)"
          thickness={1}
        />
        <Ring
          x="92%"
          y="55%"
          size={100}
          color="rgba(255,217,163,0.3)"
          thickness={1}
        />
        {/* Dot grids */}
        <DotGrid
          x="82%"
          y="28%"
          cols={6}
          rows={7}
          color="rgba(163,201,255,0.18)"
        />
        <DotGrid
          x="2%"
          y="12%"
          cols={5}
          rows={6}
          color="rgba(255,198,198,0.16)"
        />
        <DotGrid
          x="48%"
          y="82%"
          cols={4}
          rows={4}
          color="rgba(195,232,195,0.16)"
        />
        {/* Ghost letter */}
        <div
          style={{
            position: "absolute",
            bottom: "-3rem",
            right: "-2rem",
            fontSize: "28vw",
            fontWeight: 900,
            letterSpacing: "-0.08em",
            color: "rgba(163,201,255,0.06)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          P
        </div>

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "7rem 2.5rem 3rem",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Fade>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.5rem",
                flexWrap: "wrap",
                marginBottom: "2.5rem",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: 36,
                    height: 1.5,
                    background: "linear-gradient(90deg,#A3C9FF,#FFC6C6)",
                    borderRadius: 2,
                  }}
                />
                <span
                  style={{
                    fontSize: 10.5,
                    letterSpacing: "0.24em",
                    color: "#C0C0CC",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  {t.hero.badge}
                </span>
                <div
                  style={{
                    width: 36,
                    height: 1.5,
                    background: "linear-gradient(90deg,#FFC6C6,#A3C9FF)",
                    borderRadius: 2,
                  }}
                />
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <LangBtn
                  active={lang === "en"}
                  onClick={() => setLang("en")}
                  label="English"
                />
                <LangBtn
                  active={lang === "zh"}
                  onClick={() => setLang("zh")}
                  label="中文"
                />
              </div>
            </div>
          </Fade>

          <Fade delay={0.05}>
            <h1
              style={{
                fontSize: "clamp(5rem,16vw,14rem)",
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: "-0.06em",
                color: "transparent",
                background:
                  "linear-gradient(135deg,rgba(120,160,220,0.5) 0%,rgba(200,170,220,0.45) 40%,rgba(220,180,160,0.4) 70%,rgba(160,210,180,0.45) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                userSelect: "none",
              }}
            >
              PORTFOLIO
            </h1>
          </Fade>

          <Fade delay={0.12}>
            <div
              style={{
                maxWidth: 480,
                margin: "2.5rem 0 2.75rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1.15rem",
                  color: "#777",
                  lineHeight: 1.8,
                  fontWeight: 500,
                  marginBottom: "0.5rem",
                }}
              >
                {t.hero.sub1}
              </p>
              <p
                style={{
                  fontSize: "1.0rem",
                  color: "#AAAAAA",
                  lineHeight: 1.85,
                  fontWeight: 400,
                }}
              >
                {t.hero.sub2}
              </p>
            </div>
          </Fade>

          <Fade delay={0.18}>
            <div
              style={{
                display: "flex",
                gap: "0.875rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <a href="#projects" className="bp">
                {t.hero.cta1} →
              </a>
              <a href="#contact" className="bs">
                {t.hero.cta2}
              </a>
            </div>
          </Fade>
        </div>

        {/* Ticker */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            borderTop: "1px solid rgba(200,205,225,0.22)",
            background: "rgba(245,245,248,0.6)",
            backdropFilter: "blur(14px)",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "1.5rem 2.5rem",
              display: "flex",
              gap: 0,
              overflowX: "auto",
              alignItems: "center",
            }}
          >
            {t.ticker.map((s, i) => (
              <span
                key={s}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  whiteSpace: "nowrap",
                }}
              >
                {i > 0 && (
                  <span style={{ color: "#D8D8E0", fontSize: 7 }}>✦</span>
                )}
                <span
                  style={{
                    fontSize: 10.5,
                    letterSpacing: "0.14em",
                    color: "#C4C4CC",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {s}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section
        id="about"
        style={{
          borderTop: "1px solid rgba(200,205,225,0.2)",
          background:
            "linear-gradient(160deg,#F0F5FB 0%,#F7F0FB 50%,#F0F5FB 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* About: layered blobs */}
        <Blob
          x="-8%"
          y="5%"
          w={500}
          color="rgba(163,201,255,0.28)"
          blur={110}
        />
        <Blob
          x="70%"
          y="55%"
          w={440}
          color="rgba(224,195,240,0.3)"
          blur={100}
        />
        <Blob x="55%" y="-8%" w={360} color="rgba(195,232,195,0.2)" blur={90} />
        <Blob
          x="30%"
          y="65%"
          w={320}
          color="rgba(255,217,163,0.18)"
          blur={85}
        />
        <Blob x="85%" y="20%" w={280} color="rgba(255,198,198,0.2)" blur={80} />
        <Blob
          x="15%"
          y="35%"
          w={240}
          color="rgba(163,201,255,0.16)"
          blur={70}
        />
        <Blob
          x="60%"
          y="85%"
          w={300}
          color="rgba(224,195,240,0.18)"
          blur={75}
        />
        {/* Rings */}
        <Ring x="85%" y="5%" size={170} color="rgba(224,195,240,0.45)" />
        <Ring
          x="85%"
          y="5%"
          size={240}
          color="rgba(224,195,240,0.22)"
          thickness={0.8}
        />
        <Ring
          x="85%"
          y="5%"
          size={320}
          color="rgba(224,195,240,0.1)"
          thickness={0.6}
        />
        <Ring
          x="8%"
          y="78%"
          size={140}
          color="rgba(163,201,255,0.3)"
          thickness={1}
        />
        <Ring
          x="8%"
          y="78%"
          size={200}
          color="rgba(163,201,255,0.15)"
          thickness={0.8}
        />
        <Ring
          x="50%"
          y="50%"
          size={90}
          color="rgba(195,232,195,0.25)"
          thickness={1}
        />
        {/* Dots */}
        <DotGrid
          x="78%"
          y="52%"
          cols={6}
          rows={6}
          color="rgba(224,195,240,0.22)"
        />
        <DotGrid
          x="2%"
          y="15%"
          cols={4}
          rows={5}
          color="rgba(163,201,255,0.16)"
        />
        <WaveLine x="0%" y="80%" color="rgba(163,201,255,0.22)" width={320} />
        <WaveLine x="55%" y="10%" color="rgba(224,195,240,0.22)" width={260} />
        {/* Ghost letter */}
        <div
          style={{
            position: "absolute",
            right: "-2%",
            top: "8%",
            fontSize: "22rem",
            fontWeight: 900,
            color: "rgba(163,201,255,0.055)",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
            letterSpacing: "-0.05em",
            zIndex: 0,
          }}
        >
          A
        </div>

        <div
          className="sp ag"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "8rem 2.5rem",
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "5rem",
            alignItems: "start",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Fade>
            <div>
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: "0.26em",
                  color: "#C0C0CC",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  display: "block",
                  marginBottom: "1.5rem",
                }}
              >
                {t.about.label}
              </span>
<div
  style={{
    width: "25vw",
    maxWidth: "220px",
    aspectRatio: "4/5",
    borderRadius: 24,
    position: "relative",
    overflow: "hidden",
  }}
>
  <img
    src={`${BASE_URL}images/zjz.JPG`}
    alt="Wufan Chen"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center top",
      display: "block",
    }}
  />
</div>
              <div
                className="sr"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.25rem 2rem",
                  marginTop: "2rem",
                }}
              >
                {t.about.stats.map((s) => (
                  <div key={s.l}>
                    <p
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 900,
                        color: "#333",
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                      }}
                    >
                      {s.n}
                    </p>
                    <p
                      style={{
                        fontSize: 9,
                        color: "#CCCCCC",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        marginTop: 4,
                      }}
                    >
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
          <Fade delay={0.1}>
            <div>
              {t.about.body.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: i === 0 ? "1.5rem" : "1.025rem",
                    fontWeight: i === 0 ? 700 : 400,
                    color: i === 0 ? "#333" : "#666",
                    lineHeight: i === 0 ? 1.3 : 1.9,
                    marginBottom: "1.625rem",
                  }}
                >
                  {p}
                </p>
              ))}
              <div
                style={{
                  marginTop: "1rem",
                  padding: "1.25rem 1.5rem",
                  borderRadius: 18,
                  background: "rgba(163,201,255,0.08)",
                  border: "1px solid rgba(163,201,255,0.2)",
                }}
              >
                {t.about.eduEN.split("\n").map((line, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: "0.8rem",
                      color: "#5B8ED6",
                      lineHeight: 1.7,
                      fontStyle: "italic",
                      marginBottom: i === 0 ? "0.2rem" : 0,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
              <div style={{ marginTop: "2rem" }}>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    color: "#C0C0CC",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  {t.about.skillsLabel}
                </span>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}
                >
                  {t.about.skills.map((skill: string) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        padding: "0.5rem 1.1rem",
                        borderRadius: 100,
                        background: "rgba(163,201,255,0.12)",
                        color: "#6B9BD2",
                        border: "1px solid rgba(163,201,255,0.28)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div
                style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem" }}
              >
                <a href="#cv" className="bs">
                  {t.about.cvBtn}
                </a>
                <a
                  href="#contact"
                  className="bp"
                  style={{ padding: "0.875rem 1.5rem", fontSize: 13 }}
                >
                  {t.hero.cta2} →
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* ═══════════════ CV ═══════════════ */}
      <section
        id="cv"
        style={{
          borderTop: "1px solid rgba(200,205,225,0.2)",
          background:
            "linear-gradient(155deg,#EAF2F8 0%,#F0EEFF 50%,#EAF2F8 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Blob
          x="65%"
          y="-10%"
          w={560}
          color="rgba(163,201,255,0.28)"
          blur={110}
        />
        <Blob
          x="-6%"
          y="50%"
          w={460}
          color="rgba(200,180,255,0.24)"
          blur={100}
        />
        <Blob x="38%" y="78%" w={400} color="rgba(195,232,195,0.2)" blur={90} />
        <Blob
          x="25%"
          y="10%"
          w={300}
          color="rgba(255,217,163,0.16)"
          blur={80}
        />
        <Blob
          x="82%"
          y="35%"
          w={280}
          color="rgba(255,198,198,0.18)"
          blur={75}
        />
        <Blob
          x="50%"
          y="48%"
          w={260}
          color="rgba(200,180,255,0.15)"
          blur={70}
        />
        <Blob
          x="72%"
          y="82%"
          w={320}
          color="rgba(163,201,255,0.16)"
          blur={78}
        />
        <Ring x="5%" y="8%" size={180} color="rgba(200,180,255,0.38)" />
        <Ring
          x="5%"
          y="8%"
          size={260}
          color="rgba(200,180,255,0.18)"
          thickness={0.8}
        />
        <Ring
          x="5%"
          y="8%"
          size={340}
          color="rgba(200,180,255,0.09)"
          thickness={0.6}
        />
        <Ring x="92%" y="70%" size={130} color="rgba(195,232,195,0.32)" />
        <Ring
          x="92%"
          y="70%"
          size={190}
          color="rgba(195,232,195,0.16)"
          thickness={0.8}
        />
        <Ring x="50%" y="92%" size={110} color="rgba(163,201,255,0.28)" />
        <DotGrid
          x="82%"
          y="12%"
          cols={6}
          rows={7}
          color="rgba(163,201,255,0.18)"
        />
        <DotGrid
          x="3%"
          y="65%"
          cols={5}
          rows={6}
          color="rgba(200,180,255,0.15)"
        />
        <WaveLine x="68%" y="8%" color="rgba(163,201,255,0.25)" width={260} />
        <WaveLine x="20%" y="90%" color="rgba(200,180,255,0.2)" width={240} />
        <div
          style={{
            position: "absolute",
            left: "-2%",
            top: "10%",
            fontSize: "18rem",
            fontWeight: 900,
            color: "rgba(200,180,255,0.065)",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
            letterSpacing: "-0.05em",
            zIndex: 0,
          }}
        >
          E
        </div>

        <div
          className="sp"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "8rem 2.5rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <SH label={t.cv.label} heading={t.cv.heading} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.125rem",
            }}
          >
            {t.cv.items.map((item, i) => (
              <CVItemCard key={i} item={item} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PROJECTS ═══════════════ */}
      <section
        id="projects"
        style={{
          borderTop: "1px solid rgba(200,205,225,0.2)",
          background:
            "linear-gradient(155deg,#EAF0F8 0%,#EFF2EC 50%,#EAF0F8 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Projects: layered blobs */}
        <Blob
          x="60%"
          y="-8%"
          w={640}
          color="rgba(163,201,255,0.3)"
          blur={120}
        />
        <Blob
          x="-8%"
          y="55%"
          w={500}
          color="rgba(195,232,195,0.28)"
          blur={105}
        />
        <Blob x="38%" y="72%" w={380} color="rgba(255,217,163,0.2)" blur={90} />
        <Blob x="80%" y="40%" w={300} color="rgba(224,195,240,0.2)" blur={80} />
        <Blob
          x="20%"
          y="15%"
          w={280}
          color="rgba(255,198,198,0.16)"
          blur={75}
        />
        <Blob
          x="50%"
          y="40%"
          w={260}
          color="rgba(195,232,195,0.16)"
          blur={70}
        />
        <Blob
          x="75%"
          y="80%"
          w={320}
          color="rgba(163,201,255,0.18)"
          blur={80}
        />
        {/* Rings */}
        <Ring x="3%" y="3%" size={200} color="rgba(163,201,255,0.32)" />
        <Ring
          x="3%"
          y="3%"
          size={280}
          color="rgba(163,201,255,0.16)"
          thickness={0.8}
        />
        <Ring
          x="3%"
          y="3%"
          size={360}
          color="rgba(163,201,255,0.08)"
          thickness={0.6}
        />
        <Ring x="90%" y="75%" size={140} color="rgba(195,232,195,0.35)" />
        <Ring
          x="90%"
          y="75%"
          size={200}
          color="rgba(195,232,195,0.18)"
          thickness={0.8}
        />
        <Ring x="45%" y="90%" size={100} color="rgba(255,217,163,0.3)" />
        {/* Dots & waves */}
        <DotGrid
          x="85%"
          y="58%"
          cols={7}
          rows={8}
          color="rgba(195,232,195,0.22)"
        />
        <DotGrid
          x="5%"
          y="70%"
          cols={5}
          rows={6}
          color="rgba(163,201,255,0.15)"
        />
        <WaveLine x="65%" y="88%" color="rgba(195,232,195,0.35)" width={300} />
        <WaveLine x="10%" y="10%" color="rgba(163,201,255,0.2)" width={250} />
        <div
          style={{
            position: "absolute",
            left: "-2%",
            bottom: "5%",
            fontSize: "18rem",
            fontWeight: 900,
            color: "rgba(195,232,195,0.07)",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
            letterSpacing: "-0.05em",
            zIndex: 0,
          }}
        >
          P
        </div>

        <div
          className="sp"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "8rem 2.5rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <SH
            label={t.projects.label}
            heading={t.projects.heading}
          />
          <div
            className="pg"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.75rem",
            }}
          >
            {t.projects.items.map((item, i) => (
              <ProjectCard
                key={item.num}
                item={item}
                index={i}
                onView={() => { setActiveProject(i); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CREATIVE WORKS ═══════════════ */}
      <section
        id="creative"
        style={{
          borderTop: "1px solid rgba(200,205,225,0.2)",
          background:
            "linear-gradient(150deg,#FAF0EE 0%,#F5F0FA 50%,#EEF5FA 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Creative Works: layered blobs */}
        <Blob x="72%" y="2%" w={580} color="rgba(255,198,198,0.3)" blur={115} />
        <Blob
          x="-6%"
          y="38%"
          w={500}
          color="rgba(163,201,255,0.24)"
          blur={105}
        />
        <Blob
          x="40%"
          y="70%"
          w={440}
          color="rgba(224,195,240,0.28)"
          blur={95}
        />
        <Blob x="20%" y="5%" w={320} color="rgba(255,217,163,0.18)" blur={85} />
        <Blob x="85%" y="60%" w={280} color="rgba(195,232,195,0.2)" blur={80} />
        <Blob
          x="55%"
          y="28%"
          w={260}
          color="rgba(255,198,198,0.16)"
          blur={72}
        />
        <Blob
          x="10%"
          y="75%"
          w={300}
          color="rgba(163,201,255,0.16)"
          blur={78}
        />
        {/* Rings */}
        <Ring x="88%" y="25%" size={160} color="rgba(255,198,198,0.42)" />
        <Ring
          x="88%"
          y="25%"
          size={230}
          color="rgba(255,198,198,0.2)"
          thickness={0.8}
        />
        <Ring
          x="88%"
          y="25%"
          size={310}
          color="rgba(255,198,198,0.1)"
          thickness={0.6}
        />
        <Ring x="5%" y="10%" size={120} color="rgba(163,201,255,0.3)" />
        <Ring
          x="5%"
          y="10%"
          size={180}
          color="rgba(163,201,255,0.15)"
          thickness={0.8}
        />
        <Ring x="48%" y="85%" size={130} color="rgba(224,195,240,0.3)" />
        {/* Dots & waves */}
        <DotGrid
          x="3%"
          y="70%"
          cols={6}
          rows={7}
          color="rgba(163,201,255,0.18)"
        />
        <DotGrid
          x="80%"
          y="55%"
          cols={5}
          rows={5}
          color="rgba(255,198,198,0.15)"
        />
        <WaveLine x="45%" y="4%" color="rgba(224,195,240,0.35)" width={280} />
        <WaveLine x="0%" y="55%" color="rgba(163,201,255,0.2)" width={240} />
        <div
          style={{
            position: "absolute",
            right: "-2%",
            bottom: "8%",
            fontSize: "18rem",
            fontWeight: 900,
            color: "rgba(255,198,198,0.065)",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
            letterSpacing: "-0.05em",
            zIndex: 0,
          }}
        >
          C
        </div>

        <div
          className="sp"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "8rem 2.5rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <SH label={t.creative.label} heading={t.creative.heading} />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "5rem" }}
          >
            {t.creative.cats.map((cat, ci) => (
              <Fade key={cat.name} delay={ci * 0.06}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1.875rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: 10.5,
                      letterSpacing: "0.16em",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      background: cat.bg,
                      color: cat.color,
                      padding: "0.42rem 1rem",
                      borderRadius: 100,
                      border: `1px solid ${cat.color}35`,
                    }}
                  >
                    {cat.name}
                  </span>
                  <div
                    style={{
                      flexGrow: 1,
                      height: 1,
                      background: `linear-gradient(90deg,${cat.color}30,transparent)`,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 11.5,
                      color: "#D0D0D8",
                      fontWeight: 600,
                    }}
                  >
                    0{ci + 1}
                  </span>
                </div>
                <div
                  className="cwg"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.25rem",
                  }}
                >
                  {cat.items.map((item, ii) => (
                    <CreativeItemCard
                      key={item.title}
                      item={item}
                      ii={ii}
                      cat={cat}
                      lang={lang}
                      requestLabel={t.creative.request}
                    />
                  ))}
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CONTACT ═══════════════ */}
      <section
        id="contact"
        style={{
          borderTop: "1px solid rgba(200,205,225,0.2)",
          background:
            "linear-gradient(145deg,#EEF4FB 0%,#F8EEF5 50%,#EEF8F0 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Multi-colour blobs */}
        <Blob
          x="60%"
          y="-8%"
          w={540}
          color="rgba(163,201,255,0.3)"
          blur={105}
        />
        <Blob
          x="-8%"
          y="32%"
          w={460}
          color="rgba(255,198,198,0.25)"
          blur={95}
        />
        <Blob
          x="35%"
          y="65%"
          w={400}
          color="rgba(224,195,240,0.28)"
          blur={90}
        />
        <Blob
          x="72%"
          y="62%"
          w={300}
          color="rgba(195,232,195,0.22)"
          blur={80}
        />
        {/* Decorative */}
        <Ring x="88%" y="5%" size={160} color="rgba(163,201,255,0.4)" />
        <Ring
          x="88%"
          y="5%"
          size={230}
          color="rgba(163,201,255,0.2)"
          thickness={0.8}
        />
        <Ring x="2%" y="72%" size={130} color="rgba(255,198,198,0.4)" />
        <DotGrid
          x="80%"
          y="50%"
          cols={5}
          rows={5}
          color="rgba(163,201,255,0.18)"
        />
        <DotGrid
          x="2%"
          y="20%"
          cols={4}
          rows={5}
          color="rgba(255,198,198,0.18)"
        />
        <WaveLine x="22%" y="88%" color="rgba(224,195,240,0.35)" width={260} />

        <div
          className="sp cg"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "8rem 2.5rem",
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: "7rem",
            alignItems: "start",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Fade>
            <div>
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: "0.26em",
                  color: "#C0C0CC",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                {t.contact.label}
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.875rem,3.5vw,2.625rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#333",
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                  whiteSpace: "pre-line",
                }}
              >
                {t.contact.heading}
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#777",
                  lineHeight: 1.88,
                  marginBottom: "2.75rem",
                }}
              >
                {t.contact.sub}
              </p>
              <div>
                {t.contact.links.map((l) => (
                <a
  key={l.label}
  href={l.href}
  target="_blank"
  rel="noopener noreferrer"
  style={{ ... }}
>
                    <span
                      style={{
                        fontSize: 9.5,
                        color: "#CCCCCC",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        minWidth: 80,
                      }}
                    >
                      {l.label}
                    </span>
                    {l.value}
                  </a>
                ))}
              </div>
              <div
                style={{
                  marginTop: "2.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#82C882",
                    boxShadow: "0 0 0 4px rgba(130,200,130,0.2)",
                  }}
                />
                <span style={{ fontSize: 12, color: "#AAAAAA" }}>
                  {t.contact.available}
                </span>
              </div>
            </div>
          </Fade>

          <Fade delay={0.1}>
            {submitted ? (
              <GlassCard
                style={{ padding: "4.5rem 2rem", textAlign: "center" }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "rgba(163,201,255,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.625rem",
                    fontSize: 24,
                    color: "#5B8ED6",
                  }}
                >
                  ✓
                </div>
                <p
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    color: "#333",
                    marginBottom: "0.625rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {t.contact.form.sent}
                </p>
                <p style={{ fontSize: "0.875rem", color: "#AAAAAA" }}>
                  {t.contact.form.sentSub}
                </p>
              </GlassCard>
            ) : (
              <GlassCard style={{ padding: "2.75rem" }}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  {[
                    {
                      label: t.contact.form.name,
                      type: "text",
                      ph: t.contact.form.namePh,
                      key: "name" as const,
                    },
                    {
                      label: t.contact.form.email,
                      type: "email",
                      ph: t.contact.form.emailPh,
                      key: "email" as const,
                    },
                  ].map((f) => (
                    <div key={f.key}>
                      <label
                        style={{
                          display: "block",
                          fontSize: 10,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          fontWeight: 700,
                          color: "#C0C0CC",
                          marginBottom: "0.55rem",
                        }}
                      >
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        required
                        className="fi"
                        placeholder={f.ph}
                        value={formData[f.key]}
                        onChange={(e) =>
                          setFormData({ ...formData, [f.key]: e.target.value })
                        }
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: 10,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        color: "#C0C0CC",
                        marginBottom: "0.55rem",
                      }}
                    >
                      {t.contact.form.message}
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="fi"
                      placeholder={t.contact.form.messagePh}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      style={{ resize: "vertical" }}
                    />
                  </div>
                  <button type="submit" className="bsub">
                    {t.contact.form.send}
                  </button>
                </form>
              </GlassCard>
            )}
          </Fade>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer
        style={{
          borderTop: "1px solid rgba(200,205,225,0.2)",
          background: "rgba(245,245,248,0.8)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "1.875rem 2.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span style={{ fontSize: 11.5, color: "#CCCCCC", fontWeight: 600 }}>
            {t.footer}
          </span>
          <div style={{ display: "flex", gap: "1.75rem" }}>
            {["LinkedIn", "Instagram", "Email"].map((l) => (
              <a
                key={l}
                href="#contact"
                style={{
                  fontSize: 11.5,
                  color: "#CCCCCC",
                  textDecoration: "none",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#A3C9FF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#CCCCCC")}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
