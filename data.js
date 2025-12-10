window.portfolioData = {
    "config": {
        "currentLang": "zh",
        "theme": "light"
    },
    "translations": {
        "zh": {
            "nav_projects": "项目", "nav_stack": "技能", "nav_opensource": "开源", "nav_exp": "经历", "nav_contact": "联系",
            "hero_btn_contact": "联系我", "hero_btn_github": "GitHub",
            "section_stack": "技术栈", "section_projects": "个人项目", "section_opensource": "开源贡献", "section_exp": "教育/工作经历", "section_contact": "保持联系",
            "footer_rights": "保留所有权利", "view_detail": "查看详情", "project_link": "项目链接"
        },
        "en": {
            "nav_projects": "Projects", "nav_stack": "Stack", "nav_opensource": "Open Source", "nav_exp": "Experience", "nav_contact": "Contact",
            "hero_btn_contact": "Contact Me", "hero_btn_github": "GitHub",
            "section_stack": "Tech Stack", "section_projects": "Projects", "section_opensource": "Contributions", "section_exp": "Education & Experience", "section_contact": "Get in Touch",
            "footer_rights": "All Rights Reserved", "view_detail": "View Details", "project_link": "Project Link"
        }
    },
    "info": {
        "name": "stargodleon",
        "titleZH": "具身智能工程师",
        "titleEN": "Embodied Intelligence Engineer",
        "descZH": "“未来属于具身智能。”",
        "descEN": "\"The future belongs to embodied intelligence.\"",
        "avatar": "./images/avatar.jpg",
        "email": "your_email@example.com",
        "github": "https://github.com/stargodyangzai"
    },
    // 1. 技术栈 (分类双语化)
    "stack": [
        {
            "categoryZH": "前端核心",
            "categoryEN": "Frontend Core",
            "items": ["React", "Vue3", "Tailwind CSS"]
        },
        {
            "categoryZH": "具身智能",
            "categoryEN": "Embodied AI",
            "items": ["RL", "VLA", "IL"]
        }
    ],
    // 2. 项目 (标签双语化)
    "projects": [
        {
            "id": 1,
            "titleZH": "基于IsaacLab的机械臂抓取策略在线蒸馏至DP3网络",
            "titleEN": "Online Distillation of IsaacLab Grasping Policy to DP3",
            "descZH": "基于IsaacLab的机械臂抓取策略在线蒸馏至DP3网络。",
            "descEN": "Online distillation of robotic arm grasping strategy based on IsaacLab to DP3 network.",
            "category": "RL",
            "tagsZH": ["MLP", "DP3", "强化学习", "蒸馏"],
            "tagsEN": ["MLP", "DP3", "RL", "Distillation"],
            "image": "./images/project1.png",
            "link": "",
            "detailZH": "### 项目背景\n基于 **IsaacLab** 环境，探索高效的机械臂抓取策略。\n\n### 核心工作\n1. 训练 Teacher Policy（RL Agent）。\n2. 使用在线蒸馏（Online Distillation）技术。\n3. 将策略迁移至 **DP3 网络** 以实现更强的泛化能力。",
            "detailEN": "### Background\nExploring efficient robotic arm grasping strategies based on the **IsaacLab** environment.\n\n### Core Work\n1. Training a Teacher Policy (RL Agent).\n2. Using Online Distillation techniques.\n3. Transferring the policy to a **DP3 Network**."
        }
    ],
    // 3. 开源 (描述和角色双语化)
    "opensource": [
        {
            "repo": "Embodied-Intelligence-Study-Notes",
            "descZH": "个人的具身智能技术学习笔记",
            "descEN": "Personal study notes on Embodied Intelligence",
            "roleZH": "作者",
            "roleEN": "Author",
            "link": "https://github.com/stargodyangzai/Embodied-Intelligence-Study-Notes"
        }
    ],
    "experience": [
        {
            "roleZH": "硕士研究生", "roleEN": "Master Student",
            "companyZH": "武汉大学", "companyEN": "Wuhan University",
            "time": "2025.9 - 至今",
            "descZH": "研究方向：机器人技术", "descEN": "Research Focus: Robotics"
        },
        {
            "roleZH": "本科生", "roleEN": "Undergraduate Student",
            "companyZH": "江苏大学", "companyEN": "Jiangsu University",
            "time": "2021.9 - 2025.6",
            "descZH": "专业：软件工程", "descEN": "Major: Software Engineering"
        }
    ],
    // 4. 社交链接 (已添加)
    "socials": [
        { "name": "GitHub", "icon": "fa-brands fa-github", "link": "https://github.com/stargodyangzai" },
        { "name": "Zhihu", "icon": "fa-brands fa-zhihu", "link": "https://zhihu.com/people/yourid" },
        { "name": "Xiaohongshu", "icon": "fa-solid fa-camera-retro", "link": "https://xiaohongshu.com/user/profile/yourid" },
        { "name": "Email", "icon": "fa-solid fa-envelope", "link": "mailto:your_email@example.com" },
        { "name": "Twitter", "icon": "fa-brands fa-twitter", "link": "https://twitter.com/yourhandle" }
    ]
};
