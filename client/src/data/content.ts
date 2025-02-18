import {
    Bot,
    CableCar,
    CircleDollarSign,
    DollarSign,
    Landmark,
    LayoutDashboard,
    Link,
    NotebookPen,
    TableColumnsSplit,
    TrendingUp,
    Warehouse,
    Wrench,
} from "lucide-react";

export interface TeamMember {
    id: number;
    name: string;
    position: string;
    bio: string;
    education?: string[];
    imageUrl: string;
    socialLinks: {
        linkedin?: string;
        twitter?: string;
        instagram?: string;
    };
}

export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Bishu Giri",
        position: "Co-founder",
        imageUrl: "images/employee.jpg",
        bio: "Bishu Giri is a seasoned data scientist and AI expert with over eight years of experience in data science, analytics, and research. He has worked with esteemed organizations like the World Bank and Bridgei2i Analytics Solutions (now Accenture AI). At Bridgei2i, Bishu worked as a data scientist, helping Fortune 500 organizations to adapt to data driven solutions. Some of the projects he worked on: developing fraud detection models using text analytics, demand forecasting using time series data, loan default prediction using credit history, optimizing lead time in supply chain for a CPG organization. His expertise extends to generative AI, machine learning, database management, visualization, and optimization.",
        education: [
            "MS in Public Policy, Carnegie Mellon University, Pittsburgh, USA",
            "MS in Economics, Madras School of Economics, Chennai, India",
        ],
        socialLinks: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
        },
    },
    {
        id: 2,
        name: "Indra Giri",
        position: "Co-founder",
        imageUrl: "images/employee.jpg",
        bio: "7+ years of experience working in public policy, survey design, and data collection. Skilled in policy evaluation and strategic research methodologies.",
        socialLinks: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
        },
    },
    {
        id: 3,
        name: "Krishna Sharma",
        position: "Co-founder",
        imageUrl: "images/employee.jpg",
        bio: " Krishna Sharma is a Policy Fellow at the Hoover Institution, Stanford University. With extensive experience in research and data analytics, he has worked with leading organizations such as the United Nations and the Ministry of Finance, Government of India. His research focuses on migration, innovation, and economic development, with a special emphasis on global investment dynamics and public policy. Krishna is also a regular commentator on fiscal federalism and agricultural issues in Nepal. He holds a Master's in Economics from South Asian University-New Delhi and has a proven track record of bridging academic insights with practical policy solutions.",
        education: ["Phd Economics, Clemson University"],
        socialLinks: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
        },
    },
    {
        id: 4,
        name: "Maheswar Giri",
        position: "Co-founder",
        imageUrl: "images/employee.jpg",
        bio: `Maheshwar Giri is an agricultural economist specializing in economic research and policy analysis. He recently completed his PhD thesis at the Faculty of Economics, South Asian University, New Delhi, where he examined agrarian institutions in Nepal and their impact on agricultural performance. His research employed advanced quantitative methods to provide policy insights on land tenure, extension services, and agricultural market dynamics.\n\n Giri has expertise in survey design, econometrics, data analysis, and impact evaluation. His research interests include agricultural economics, land relations, extension services, marketing channels, energy transitions, and rural livelihoods.
`,
        socialLinks: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
        },
    },
    {
        id: 5,
        name: "Praval Sharma",
        position: "Co-founder",
        imageUrl: "images/employee.jpg",
        bio: "Praval Sharma has a Ph.D. in Computer Science. His research interests lie at the intersection of natural language processing and spatial data mining. He has worked extensively on developing novel data-driven algorithms that leverage machine learning, large language models, and spatial statistics to extract meaningful insights from  large-scale datasets. In addition to his research expertise, Praval has worked as a software engineer and gained hands-on experience in professional software development. He has worked on a variety of projects for international clients based in Europe and the USA. Overall, his experience spans various domains that include artificial intelligence, geospatial analysis, and software development.",
        socialLinks: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
        },
    },
    {
        id: 6,
        name: "Dr. Ram N. Shrestha",
        position: "Co-founder",
        imageUrl: "images/employee.jpg",
        bio: " Ram Narayan Shrestha is an Economist by training with research interest in the areas of development economics, labour economics and related areas. Dr. Shrestha specialises in survey designing, data collection tools and labour market analysis.",
        socialLinks: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
        },
    },
    {
        id: 7,
        name: "Sumit Sharma",
        position: "Co-founder",
        imageUrl: "images/employee.jpg",
        bio: " Sumit Sharma is an economist at ICICI Bank in Mumbai, India, with over 11 years of experience in data analysis and research. He has previously worked with EY and Capgemini Consulting, as a data analyst. He completed his masters in economics from Delhi School of Economics in 2013. He has been associated with Sankhya Solutions since 2020, with an aim to promote data centred analysis of developmental issues.",
        socialLinks: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
        },
    },
];

export const content = {
    heroData: [
        {
            id: 1,
            title: "Research & Policy Analysis",
            description:
                "Comprehensive research solutions and evidence-based policy recommendations for informed decision-making",
            image: "/images/hero1.jpg",
            alt: "Research team analyzing policy documents",
        },
        {
            id: 2,
            title: "Monitoring Evaluation & Learning",
            description:
                "Track progress, measure impact, and implement data-driven improvements for optimal results",
            image: "/images/hero2.jpg",
            alt: "Team reviewing evaluation metrics",
        },
        {
            id: 3,
            title: "Survey Designing & Data Collection",
            description:
                "Expert survey design and comprehensive data collection methodologies",
            image: "/images/hero3.jpg",
            alt: "Data collection and survey process",
        },
        {
            id: 4,
            title: "Training & Skills Development",
            description:
                "Empowering professionals with cutting-edge skills and knowledge transfer programs",
            image: "images/hero4.jpg",
            alt: "Professional training session",
        },
        {
            id: 5,
            title: "Custom Message",
            description:
                "You can put your custom message or latest news/ article here",
            image: "images/hero4.jpg",
            alt: "Professional training session",
        },
    ],
    company: {
        name: "Sankhya Solutions",
        tagline: "Your Intelligence Partner",
        logo: "images/logo.png",
        description:
            "Leading provider of research, analysis, and strategic consulting services helping organizations make data-driven decisions.",
        facebook: "https://facebook.com",
        whatsapp: "https://whatsapp.com",
        linkedin: "https://linkedin.com",
    },
    about: {
        title: "About Us",

        image: "/images/about.jpg",

        description:
            "is a data analytics and consultancy organization that helps enterprises and governments achieve accelerated impact by providing data driven insights.We are a team of young professionals, scholars, working towards a common goal of making a difference in society by harnessing the power of research and data.",
        history:
            "Sankhya was founded in 2019 to revolutionize decision-making in Nepal through data-driven solutions, Artificial Intelligence (AI), and machine learning (ML). We believe these technologies can transform organizations, boost the economy, and position Nepali businesses alongside global leaders. Our mission is to empower organizations with actionable insights, optimize operations, and foster growth through advanced analytics. By harnessing AI and ML, we aim to drive innovation, improve productivity, and enable smarter strategies. At Sankhya, we let data speak, guiding decisions that create meaningful change. Together, we’re building a data-driven future where Nepali organizations thrive on the global stage.",

        aboutCards: {
            mission: {
                img: "/images/mission.jpg",
            },
            vision: {
                img: "/images/vision.jpg",
            },
        },
    },

    industries: [
        {
            id: 1,
            title: "Banking & Financials",
            heading1:
                "Driving exceptional customer experiences with AI-led analytics",
            heading2:
                "Our team professionals work with clients to transform their business processes, optimize operations, and drive growth in the constantly evolving financial services landscape.",
            challenges: [
                {
                    icon: DollarSign,
                    title: "Default loan prediction",
                    description: "minmize NPAs",
                },
                {
                    icon: TableColumnsSplit,
                    title: "Customer Segmentation",
                    description: "for product recommendation",
                },

                {
                    icon: Landmark,
                    title: "Loan & Mortgage Approval Automation",
                    description: "",
                },
            ],
        },
        {
            id: 2,
            title: "Retail",
            heading1:
                "Turn your  enterprise data into actionable insights that drive top-line growth and bottom-line savings",
            heading2:
                "Power your data strategies with our retail data analytics solutions, so you can navigate complex data ecosystems, monetize enterprise data, improve time to insights, and maximize ROI.",
            challenges: [
                {
                    icon: TableColumnsSplit,
                    title: "Customer Segmentation",
                    description: "",
                },
                {
                    icon: TrendingUp,
                    title: "Churn Prediction",
                    description: "",
                },
                {
                    icon: Warehouse,
                    title: "Demand Forecasting & Inventory Management",
                    description: "",
                },
                {
                    icon: LayoutDashboard,
                    title: "Dashboard & Reporting",
                    description: "",
                },
                {
                    icon: CircleDollarSign,
                    title: "Dynamic Pricing",
                    description: "",
                },
            ],
        },
        {
            id: 3,
            title: "Industry",
            heading1:
                "Make AI your engine for high-speed performance with manufacturing analytics as you fast-track value in your production",
            heading2:
                "With the right AI and data strategy powered by automation, industrial businesses can run smart operations. You need end-to-end industrial analytics capabilities that can harness your data, solve your use cases, and help you run operations cost-effectively.",
            challenges: [
                {
                    icon: Wrench,
                    title: "Predictive Maintenance & Equipment Monitoring",
                    description: "",
                },
                {
                    icon: Link,
                    title: "Supply Chain Optimization",
                    description: "",
                },
            ],
        },
        {
            id: 4,
            title: "Travel & Hospitality",
            heading1:
                "Get prescriptive recommendations at the inflection point of decision to deliver better travel and hospitality experiences to customers",
            heading2:
                "We provide AI and advanced analytics for the hospitality and travel management industry to mitigate risks and accentuate their profitability, so they can focus on turning insights into action and realize value faster.",
            challenges: [
                {
                    icon: CableCar,
                    title: "Personalized Travel Itenary",
                    description: "",
                },
                {
                    icon: DollarSign,
                    title: "Dynamic Pricing & Revenue Management",
                    description: "",
                },
                {
                    icon: NotebookPen,
                    title: "Demand Forecasting & Capacity Planning",
                    description: "",
                },
                {
                    icon: Bot,
                    title: "Chatbots & Virtual Travel Assistants",
                    description: "",
                },
            ],
        },
    ],

    services: [
        {
            id: 1,
            title: "Data Science & AI Solutions",
            description:
                "Harness the power of data-driven intelligence to unlock new opportunities and optimize decision-making. Our expertise in artificial intelligence, machine learning, and statistical modeling enables businesses to stay ahead of the competition.",
            icon: "Brain",
            whatWeProvide: [
                {
                    title: "Forecasting",
                    description:
                        "Develop time-series models and trend analysis to anticipate future outcomes, from market trends to operational demands.",
                },
                {
                    title: "Predictive Modeling",
                    description:
                        "Use advanced machine learning algorithms to uncover patterns, detect risks, and improve decision-making.",
                },
                {
                    title: "Customer Analytics",
                    description:
                        "Gain deep insights into customer behavior, segmentation, and lifetime value to enhance engagement and retention strategies.",
                },
                {
                    title: "Generative AI Implementation",
                    description:
                        "Leverage cutting-edge AI models for content generation, automation, and process optimization, ensuring seamless business innovation.",
                },
            ],

            whyChooseUs: [
                "Expert team with years of experience",
                "Customized solutions for your specific needs",
                "Data-driven insights and recommendations",
                "Proven track record of success",
            ],
            image: "/images/service1.jpg",
        },
        {
            id: 2,
            title: "Survey Design & Research Consulting",
            description:
                "We specialize in data collection, research methodologies, and survey analytics to provide robust, evidence-based insights for businesses, policymakers, and researchers.",
            icon: "ClipboardList",

            whatWeProvide: [
                {
                    title: "Survey Design & Execution",
                    description:
                        " Develop scientifically sound survey frameworks that ensure accurate and meaningful responses.",
                },
                {
                    title: "Data Collection & Cleaning",
                    description:
                        " Implement structured and unstructured data gathering techniques, ensuring high-quality datasets for analysis.",
                },
                {
                    title: "Statistical Analysis & Interpretation",
                    description:
                        "Conduct quantitative and qualitative analysis, helping clients draw meaningful conclusions from research data.",
                },
            ],

            whyChooseUs: [
                "Expert team with years of experience",
                "Customized solutions for your specific needs",
                "Data-driven insights and recommendations",
                "Proven track record of success",
            ],

            image: "/images/service2.jpg",
        },
        {
            id: 3,
            title: "Business Intelligence & Data Visualization",
            description:
                "Transform raw data into actionable insights through interactive dashboards and reporting tools.",
            icon: "LineChart",

            whatWeProvide: [
                {
                    title: "Executive Dashboards",
                    description:
                        "Create customized, real-time dashboards to track key performance indicators (KPIs) and enhance decision-making.",
                },
                {
                    title: "Reporting & Monitoring",
                    description:
                        "Automate business reporting with real-time data updates, ensuring consistent monitoring of key metrics.",
                },
            ],

            whyChooseUs: [
                "Expert team with years of experience",
                "Customized solutions for your specific needs",
                "Data-driven insights and recommendations",
                "Proven track record of success",
            ],

            image: "/images/service3.jpg",
        },
        {
            id: 4,
            title: "Strategy & Advisory Services",
            description:
                "We provide data-driven strategic consulting to help businesses optimize operations, identify growth opportunities, and navigate the evolving AI landscape.",
            icon: "GraduationCap",

            whatWeProvide: [
                {
                    title: "Data Strategy & Governance",
                    description:
                        "Develop frameworks for data security, compliance, and effective data management.from market trends to operational demands.",
                },
                {
                    title: "AI & Digital Transformation Roadmaps",
                    description:
                        " Assist organizations in adopting AI solutions, automating workflows, and scaling digital initiatives.",
                },
                {
                    title: "Market & Competitive Analysis",
                    description:
                        " Leverage data science to assess industry trends, customer preferences, and competitor movements for informed decision-making.",
                },
            ],

            whyChooseUs: [
                "Expert team with years of experience",
                "Customized solutions for your specific needs",
                "Data-driven insights and recommendations",
                "Proven track record of success",
            ],

            image: "/images/service4.jpg",
        },
    ],
    stats: [
        { value: "50+", label: "Projects Completed" },
        { value: "95%", label: "Client Satisfaction" },
        { value: "7+", label: "Industry Experts" },
        { value: "2+", label: "Years Experience" },
    ],
    testimonials: [
        {
            id: 1,
            quote: "Their analytical approach and strategic insights transformed our decision-making process.",
            author: "Sarah Chen",
            position: "Director of Operations",
            company: "TechCorp Global",
        },
        {
            id: 2,
            quote: "The depth of research and quality of analysis exceeded our expectations.",
            author: "Michael Rodriguez",
            position: "Policy Director",
            company: "Public Policy Institute",
        },
    ],
    resources: [
        {
            id: 1,
            title: "Let's look at the Covid-19 cases in Nepal (Province wise)",
            description:
                "Statistical analysis and visualization of COVID-19 spread across different provinces of Nepal",
            image: "/images/resource1.jpg",
            publishedDate: "2025-02-03",
            author: "Sankhya Solutions",
            articleContent: `
          <p>This is the full content of the article "Let's look at the Covid-19 cases in Nepal (Province wise)".</p>
          <p>More content goes here...</p>
          <p>And even more content...</p>
        `,
            slug: "lets-look-at-the-covid-19-cases-in-nepal-province-wise", // Added slug
        },
        {
            id: 2,
            title: "How to save the economy from the pandemic",
            description:
                "Economic impact analysis and recovery strategies during global health crisis",
            image: "images/resource2.jpg",
            publishedDate: "2025-02-03",
            author: "Sankhya Solutions",
            articleContent: `
          <p>This is the full content of the article "How to save the economy from the pandemic".</p>
          <p>More content about economic recovery...</p>
          <p>Strategies and analysis...</p>
        `,
            slug: "how-to-save-the-economy-from-the-pandemic", // Added slug
        },
        {
            id: 3,
            title: "Agriculture modernisation: Basic things should be fixed",
            description:
                "Assessment of fundamental agricultural challenges and modernization opportunities",
            image: "images/resource1.jpg",
            publishedDate: "2025-02-03",
            author: "Sankhya Solutions",
            articleContent: `
          <p>Full article content for "Agriculture modernisation: Basic things should be fixed".</p>
          <p>Challenges in agriculture...</p>
          <p>Modernization opportunities...</p>
        `,
            slug: "agriculture-modernisation-basic-things-should-be-fixed", // Added slug
        },
        {
            id: 4,
            title: "India's run for a digital payment and banking system",
            description:
                "Evolution and impact of digital payment systems in India's financial landscape",
            image: "images/resource2.jpg",
            publishedDate: "2025-02-03",
            author: "Sankhya Solutions",
            articleContent: `
          <p>In-depth article on "India's run for a digital payment and banking system".</p>
          <p>Evolution of digital payments...</p>
          <p>Impact on Indian economy...</p>
        `,
            slug: "indias-run-for-a-digital-payment-and-banking-system", // Added slug
        },
        {
            id: 5,
            title: "Food insecurity likely in the post-corona world",
            description:
                "Analysis of global food security challenges and mitigation strategies",
            image: "images/resource1.jpg",
            publishedDate: "2025-02-03",
            author: "Sankhya Solutions",
            articleContent: `
          <p>Detailed analysis on "Food insecurity likely in the post-corona world".</p>
          <p>Global food security challenges...</p>
          <p>Mitigation strategies...</p>
        `,
            slug: "food-insecurity-likely-in-the-post-corona-world", // Added slug
        },
        {
            id: 6,
            title: "Capitalism: Analyzing through the Lens of Karl Marx",
            description:
                "Modern interpretation of Marxist theory in contemporary economic systems",
            image: "images/resource2.jpg",
            publishedDate: "2025-02-03",
            author: "Sankhya Solutions",
            articleContent: `
          <p>Academic article on "Capitalism: Analyzing through the Lens of Karl Marx".</p>
          <p>Marxist theory in modern context...</p>
          <p>Economic systems analysis...</p>
        `,
            slug: "capitalism-analyzing-through-the-lens-of-karl-marx", // Added slug
        },
        {
            id: 7,
            title: "Digital Banking in Nepal and its road ahead",
            description:
                "Comprehensive study of digital banking adoption and future prospects in Nepal",
            image: "images/resource1.jpg",
            publishedDate: "2025-02-03",
            author: "Sankhya Solutions",
            articleContent: `
          <p>Study on "Digital Banking in Nepal and its road ahead".</p>
          <p>Adoption of digital banking...</p>
          <p>Future prospects in Nepal...</p>
        `,
            slug: "digital-banking-in-nepal-and-its-road-ahead", // Added slug
        },
        {
            id: 8,
            title: "Farming profession: There is need of attitudinal fix",
            description:
                "Investigation into farming culture and necessary mindset changes",
            image: "images/resource2.jpg",
            publishedDate: "2025-02-03",
            author: "Sankhya Solutions",
            articleContent: `
          <p>Investigation on "Farming profession: There is need of attitudinal fix".</p>
          <p>Farming culture in Nepal...</p>
          <p>Mindset changes needed...</p>
        `,
            slug: "farming-profession-there-is-need-of-attitudinal-fix", // Added slug
        },
        {
            id: 9,
            title: "Rise of Cryptocurrencies -Bubble or Beast",
            description:
                "Analysis of cryptocurrency market trends and future implications",
            image: "images/resource1.jpg",
            publishedDate: "2025-02-03",
            author: "Sankhya Solutions",
            articleContent: `
          <p>Analysis on "Rise of Cryptocurrencies -Bubble or Beast".</p>
          <p>Cryptocurrency market trends...</p>
          <p>Future implications...</p>
        `,
            slug: "rise-of-cryptocurrencies-bubble-or-beast", // Added slug
        },
        {
            id: 10,
            title: "Reviving Postal Services in Nepal for Financial Inclusion",
            description:
                "Strategy study for modernizing postal services to enhance financial accessibility",
            image: "images/resource2.jpg",
            publishedDate: "2025-02-03",
            author: "Sankhya Solutions",
            articleContent: `
          <p>Strategy study for "Reviving Postal Services in Nepal for Financial Inclusion".</p>
          <p>Modernizing postal services...</p>
          <p>Enhancing financial accessibility...</p>
        `,
            slug: "reviving-postal-services-in-nepal-for-financial-inclusion", // Added slug
        },
        {
            id: 11,
            title: "Importance of having data skills in the post-corona world",
            description:
                "Assessment of data literacy needs in the evolving job market",
            image: "images/resource1.jpg",

            publishedDate: "2025-02-03",
            author: "Sankhya Solutions",
            articleContent: `
          <p>Assessment of "Importance of having data skills in the post-corona world".</p>
          <p>Data literacy needs...</p>
          <p>Evolving job market skills...</p>
        `,
            slug: "importance-of-having-data-skills-in-the-post-corona-world", // Added slug
        },
    ],
    contact: {
        title: "Contact Us",
        subtitle: "Get in touch to discuss how we can help your organization",
        email: {
            label: "Email",
            value: "info@sankhyasolutions.com.np",
        },
        phone: {
            label: "Phone",
            value: "+977 9812345678",
        },
        office: {
            label: "Office",
            address: ["Putalisadak, Kathmandu, Nepal"],
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d954.7340308434239!2d85.32151777233386!3d27.70327200652718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQyJzExLjciTiA4NcKwMTknMTcuMyJF!5e0!3m2!1sen!2snp!4v1738124267281!5m2!1sen!2snp ></iframe>",
    },
    joinUs: {
        image: "/images/team-collaboration.jpg",
    },
};
