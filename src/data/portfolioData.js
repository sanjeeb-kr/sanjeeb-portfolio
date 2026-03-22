import { Github, Code2, Database, Layout, Terminal } from 'lucide-react';

import imgCarPrice from '../assets/images/use car price predictor.png';
import imgPropertyNYC from '../assets/images/property analytics newyork.png';
import imgNewsAnalyzer from '../assets/images/ai powered news analyser.png';
import imgFciDashboard from '../assets/images/fci stock dashboard.png';
import imgApiBot from '../assets/images/api documentation bot.png';
import imgNlp from '../assets/images/nlp_pic.png';
import imgDs from '../assets/images/data structures.png';
import imgCloud from '../assets/images/cloud.png';
import imgTesting from '../assets/images/software testing.png';
import imgSql from '../assets/images/sql.png';

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
    about: [
        {
            title: "Tech Enthusiast at Heart",
            content: "Hi there! I'm Sanjeeb, a B.Tech CSE student at Lovely Professional University. I’ve always been fascinated by how data can tell a story. While others see spreadsheets and raw numbers, I see patterns, insights, and solutions just waiting to be uncovered."
        },
        {
            title: "Data & ML Problem Solver",
            content: "I specialize in turning messy data into clean, actionable intelligence. Whether I'm building a machine learning model to predict prices or designing a sleek dashboard to visualize analytics, I absolutely love the thrill of creating things that actually make a difference."
        }
    ],
    skills: {
        "Languages": [
            { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
            { name: "C", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
            { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
        ],
        "Core Skills": [
            { name: "Data Structures", image: "https://cdn-icons-png.flaticon.com/512/1055/1055644.png" },
            { name: "Algorithms", image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
            { name: "Data Analysis", image: "https://cdn-icons-png.flaticon.com/512/4249/4249114.png" },
            { name: "Machine Learning", image: "https://cdn-icons-png.flaticon.com/512/2103/2103446.png" }
        ],
        "Libraries/Frameworks": [
            { name: "NumPy", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
            { name: "Pandas", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
            { name: "Matplotlib", image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
            //{ name: "Seaborn", image: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" },
            { name: "Scikit-learn", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" }
        ],
        "Tools & Platforms": [
            { name: "Power BI", image: "https://logo.svgcdn.com/logos/microsoft-power-bi.png" },
            { name: "Excel", image: "https://cdn-icons-png.flaticon.com/512/732/732220.png" },
            { name: "GitHub", image: "https://cdn-icons-png.flaticon.com/512/733/733553.png" },
            { name: "Google Colab", image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg" }
        ],
        "Soft Skills": [
            { name: "Teamwork", image: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png" },
            { name: "Responsibility", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" },
            { name: "Adaptability", image: "https://cdn-icons-png.flaticon.com/512/9364/9364816.png" },
            { name: "Consistency", image: "https://cdn-icons-png.flaticon.com/512/3241/3241416.png" }
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
            degree: "12th\n(CBSE)",
            grade: "Percentage: 92.2%",
            year: "Apr 2020 – Mar 2022"
        },
        {
            school: "Patna Central School, Patna",
            degree: "10th\n(CBSE)",
            grade: "Percentage: 90.8%",
            year: "Apr 2019 – Mar 2020"
        }
    ],
    certifications: [
        { title: "Mastering Data Structures & Algorithms", issuer: "AlgoTutor", date: "Aug 2025", link: "https://drive.google.com/file/d/1JotLPgrjsi0oKj3BlwjPhYX-8U4BD5IO/view", coverImage: imgDs, category: "DSA" },
        { title: "Cloud Computing", issuer: "NPTEL (Swayam)", date: "Apr 2025", link: "https://drive.google.com/file/d/1z0uf2DB36vh8pAUIrT7y-FMD87RiGgBf/view", coverImage: imgCloud, category: "Cloud" },
        { title: "Software Engineering: Implementation and Testing", issuer: "Coursera", date: "Apr, 2024", link: "https://drive.google.com/file/d/1SenPk340jDG9_n9fAwDjAK5MbSGPIZ1l/view", coverImage: imgTesting, category: "Testing" },
        { title: "SQL: A Practical Introduction for Querying Databases", issuer: "Coursera", date: "Mar 2024", link: "https://drive.google.com/file/d/1qtmKLALjlm7O6MqXvVTrEnQGfWKoS2hl/view", coverImage: imgSql, category: "SQL" }
    ],
    training: [
        {
            title: "AI-Powered NLP",
            company: "AlgoTutor",
            date: "Jun 2025 - Jul 2025",
            image: imgNlp,
            outcomes: [
                "Strengthened NLP fundamentals through 20+ Python exercises",
                "Gained practical experience in end-to-end NLP workflows",
                "Developed extractive summarization system for efficient text analysis"
            ],
            techStack: ["Python", "NLTK", "Spacy", "Machine Learning"],
            projectDetails: "Completed a comprehensive extractive summarization project analyzing large text corpora, applying tokenization, stemming, TF-IDF scoring, and sentence ranking to extract the most relevant information.",
            link: "https://drive.google.com/file/d/1jb987ELmsARFMy16hGmV6j6TYQjXqZbp/view"
        }
    ],
    extracurricular: [
        {
            role: "Hackathon Participant",
            org: "Hack Quest - CTF Challenge",
            date: "Apr 2024",
            icon: "Shield",
            highlight: "Secured digital assets in a high-stakes 24-hour competitive environment.",
            desc: "Immersed in a 24-hour intensive CTF challenge, solving complex security puzzles across web, pwn, and crypto categories.",
            skills: ["Cybersecurity", "CTF", "Pwn"],
            link: "https://drive.google.com/file/d/1SEhPEd5MoVmDHo7d5wtekrBue548eh8j/view?usp=drive_link"
        },
        {
            role: "Workshop Participant",
            org: "CyberSleuth Ethical Hacking",
            date: "Sep 2023",
            icon: "ShieldCheck",
            highlight: "Mastered fundamental hacking concepts and penetration testing techniques.",
            desc: "Engaged in hands-on labs focused on ethical hacking, covering reconnaissance, scanning, and vulnerability analysis.",
            skills: ["Ethical Hacking", "InfoSec", "Pentesting"],
            link: "https://drive.google.com/file/d/1YVUQZgF394GF-B5LlyHWm3JH6wSyYy9X/view?usp=drive_link"
        },
        {
            role: "Awareness Coordinator",
            org: "Mukta Foundation",
            date: "Jun 2024 – Jul 2024",
            icon: "Users",
            highlight: "Led community-focused initiatives to drive social impact and awareness.",
            desc: "Coordinated large-scale awareness drives and volunteer efforts, managing over 20+ members to achieve community goals.",
            skills: ["Leadership", "Management", "Social Advocacy"],
            link: "https://drive.google.com/file/d/1M5y_uBbbZ2o9vHDFqsmJsl36oVZwTWiP/view?usp=sharing"
        }
    ]
};
