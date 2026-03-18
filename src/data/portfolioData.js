import { Github, Code2, Database, Layout, Terminal } from 'lucide-react';

import imgCarPrice from '../assets/images/use car price predictor.png';
import imgPropertyNYC from '../assets/images/property analytics newyork.png';
import imgNewsAnalyzer from '../assets/images/ai powered news analyser.png';
import imgFciDashboard from '../assets/images/fci stock dashboard.png';
import imgApiBot from '../assets/images/api documentation bot.png';

export const portfolioData = {
    personal: {
        name: "Sanjeeb Kumar",
        headline: "Data Analyst | Data Scientist | BI Analyst",
        location: "Patna, Bihar",
        email: "sanjeebsk.160204@gmail.com",
        phone: "+91-8240409227",
        github: "https://github.com/sanjeeb-kr",
        linkedin: "https://www.linkedin.com/in/sanjeeb-kr",
        instagram: "https://www.instagram.com/sanjeeb._.18/",
        whatsapp: "https://wa.me/918240409227",
        leetcode: "https://leetcode.com/u/sanjeeb_18/",
        resume: "https://drive.google.com/file/d/1rwcmQfpqOeYkcwTeaAVkjYuZZxRWLNUH/view?usp=drive_link",
        stats: {
            cgpa: "8.7",
            projects: "5+",
            certifications: "5+"
        }
    },
    hero: {
        title: "Hi, I'm Sanjeeb Kumar",
        subtitle: "B.Tech CSE | Lovely Professional University",
        rotatingText: [
            "Data Analyst",
            "Data Scientist",
            "BI Analyst"
        ]
    },
    about: "Data Analyst skilled in predictive analytics and data-driven problem solving, with experience working on real-world datasets to extract insights and build predictive models. Proficient in Python, Power BI, and Excel for data analysis and dashboard development, focused on delivering actionable insights to support effective decision-making.",
    skills: {
        technical: [
            { name: "Python", icon: Terminal, category: "Languages" },
            { name: "C++", icon: Code2, category: "Languages" },
            { name: "C", icon: Code2, category: "Languages" },
            { name: "Java", icon: Code2, category: "Languages" },
            { name: "Data Structures & Algorithms", icon: Terminal, category: "Core Skills" },
            { name: "Data Analysis", icon: Database, category: "Core Skills" },
            { name: "Machine Learning", icon: Code2, category: "Core Skills" },
            { name: "NumPy", icon: Database, category: "Libraries/Frameworks" },
            { name: "Pandas", icon: Database, category: "Libraries/Frameworks" },
            { name: "Matplotlib", icon: Layout, category: "Libraries/Frameworks" },
            { name: "Seaborn", icon: Layout, category: "Libraries/Frameworks" },
            { name: "Scikit-learn", icon: Code2, category: "Libraries/Frameworks" },
            { name: "Power BI", icon: Database, category: "Tools & Platforms" },
            { name: "Excel", icon: Database, category: "Tools & Platforms" },
            { name: "GitHub", icon: Github, category: "Tools & Platforms" },
            { name: "Google Colab", icon: Terminal, category: "Tools & Platforms" }
        ],
        soft: [
            "Teamwork", "Responsibility", "Adaptability", "Consistency"
        ]
    },
    projects: [
        {
            id: 1,
            title: "Used Car Price Predictor",
            category: "Data Analysis",
            image: imgCarPrice,
            date: "Feb 2026 - Mar 2026",
            summary: "Built a machine learning model to estimate used car market prices. Trained predictive models on 15,000+ records.",
            details: "Built a machine learning model to estimate used car market prices. Performed dataset preprocessing, feature engineering, regression model training, and evaluation using Scikit-learn. Trained predictive models on 15,000+ car records enabling data-driven price estimation.",
            tech: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "Data Preprocessing", "Feature Engineering"],
            links: {
                github: "https://github.com/sanjeeb-kr/car_price_pred",
                live: "https://car-price-pred-pi1t.onrender.com/"
            }
        },
        {
            id: 2,
            title: "Property Pricing Analytics: New York",
            category: "Dashboards",
            image: imgPropertyNYC,
            date: "Nov 2025 - Dec 2025",
            summary: "Designed an interactive Power BI dashboard analyzing borough-level property sales trends.",
            details: "Designed an interactive Power BI dashboard analyzing borough-level property sales trends. Applied DAX calculations, Power Query transformations, data modeling, slicers, and KPI cards. Enabled structured exploration of pricing trends, sales distribution, and borough-wise market insights.",
            tech: ["Power BI", "DAX", "Data Modeling", "Power Query", "KPI Development", "Data Analysis"],
            links: {
                github: "",
                live: "https://app.powerbi.com/view?r=eyJrIjoiM2ZhYTA4MGMtNTAyOC00NWQyLWFlZDYtM2ZmZWQ2NzRjOTBlIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D"
            }
        },
        {
            id: 3,
            title: "AI-Powered News Analyzer",
            category: "AI/Web",
            image: imgNewsAnalyzer,
            date: "Jun 2025 - Jul 2025",
            summary: "Developed an AI-driven system to retrieve, summarize, and analyze real-time news articles.",
            details: "Developed an AI-driven system to retrieve, summarize, and analyze real-time news articles. Integrated REST APIs, Flask backend, Regex preprocessing, TextBlob sentiment scoring, Gemini authenticity verification. Delivered automated summaries, sentiment insights, and authenticity labels improving real-time news comprehension.",
            tech: ["Python", "Flask", "REST APIs", "BeautifulSoup", "Google Gemini API", "Prompt Engineering"],
            links: {
                github: "https://github.com/sanjeeb-kr/news_sum",
                live: "https://news-sum-ja5d.onrender.com/"
            }
        },
        {
            id: 4,
            title: "FCI Stock Dashboard",
            category: "Dashboards",
            image: imgFciDashboard,
            date: "Jun 2025",
            summary: "Designed to visualize state-wise and national commodity stock flow for faster monitoring and decisions.",
            details: "Designed to visualize state-wise and national commodity stock flow for faster monitoring and decisions. Applied pivot tables, formulas, rankings, and automated KPIs to analyze monthly trends and stock variations. Enabled quick insights into stock patterns, improving evaluation of regional performance and distribution efficiency.",
            tech: ["Microsoft Excel", "Pivot Tables", "Formulas", "Conditional Formatting", "KPI Design", "Data Analysis"],
            links: {
                github: "",
                live: "https://drive.google.com/file/d/1s8hm6w240RmXgP4a273GGkbAt45jTdKV/view"
            }
        },
        {
            id: 5,
            title: "API Documentation Bot",
            category: "AI/Web",
            image: imgApiBot,
            date: "Jun 2025",
            summary: "Created a system to auto-detect API URLs and generate simple API documentation.",
            details: "Created a system to auto-detect API URLs and generate simple API documentation. Implemented Flask routes, BeautifulSoup parsing, Gemini-based URL prediction, and an integrated chatbot for API queries. Produced structured Markdown docs with use cases and sample calls for easier API learning.",
            tech: ["Python", "Flask", "REST APIs", "BeautifulSoup", "Google Gemini API", "Prompt Engineering"],
            links: {
                github: "https://github.com/sanjeeb-kr/API_bot",
                live: "https://api-bot-farx.onrender.com/"
            }
        }
    ],
    education: [
        {
            school: "Lovely Professional University, Phagwara",
            degree: "B.Tech - Computer Science and Engineering",
            grade: "CGPA: 8.7",
            year: "Aug 2023 - Present"
        },
        {
            school: "Patna Central School, Patna",
            degree: "12th Grade",
            grade: "Percentage: 92.2%",
            year: "Apr 2020 – Mar 2022"
        },
        {
            school: "Patna Central School, Patna",
            degree: "10th Grade",
            grade: "Percentage: 90.8%",
            year: "Apr 2019 – Mar 2020"
        }
    ],
    certifications: [
        { title: "Mastering Data Structures & Algorithms", issuer: "AlgoTutor", date: "Aug 2025", link: "https://drive.google.com/file/d/1JotLPgrjsi0oKj3BlwjPhYX-8U4BD5IO/view" },
        { title: "Cloud Computing", issuer: "NPTEL (Swayam)", date: "Apr 2025", link: "https://drive.google.com/file/d/1z0uf2DB36vh8pAUIrT7y-FMD87RiGgBf/view" },
        { title: "Software Engineering: Implementation and Testing", issuer: "Coursera", date: "Apr, 2024", link: "https://drive.google.com/file/d/1SenPk340jDG9_n9fAwDjAK5MbSGPIZ1l/view" },
        { title: "SQL: A Practical Introduction for Querying Databases", issuer: "Coursera", date: "Mar 2024", link: "https://drive.google.com/file/d/1qtmKLALjlm7O6MqXvVTrEnQGfWKoS2hl/view" }
    ],
    training: [
        {
            title: "AI-Powered NLP",
            company: "AlgoTutor",
            date: "Jun 2025 - Jul 2025",
            outcomes: [
                "Strengthened NLP fundamentals through 20+ Python exercises",
                "Gained practical experience in end-to-end NLP workflows",
                "Developed extractive summarization system for efficient text analysis"
            ],
            link: "https://drive.google.com/file/d/1jb987ELmsARFMy16hGmV6j6TYQjXqZbp/view"
        }
    ],
    extracurricular: [
        {
            role: "Awareness Program Coordinator",
            org: "Mukta Foundation",
            date: "Jun 2024 – Jul 2024",
            desc: "Led awareness drives and volunteer initiatives."
        },
        {
            role: "Class Representative",
            org: "Lovely Professional University",
            date: "Aug 2023 – May 2024",
            desc: "Facilitated communication between students and faculty."
        }
    ]
};
