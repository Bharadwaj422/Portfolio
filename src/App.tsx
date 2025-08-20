import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Download,
  ExternalLink,
  Calendar,
  Award,
  Code,
  Database,
  Brain,
  BarChart3,
  GraduationCap,
  Briefcase,
  Star,
  ChevronRight
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "Miniorange Security Services",
      location: "Pune",
      period: "Jan 2025 – May 2025",
      description: "Developed AI chatbot using Langchain, Amazon Bedrock LLM, Redis. Fine-tuned LLM on proprietary data. Added conversation memory & dynamic URL generation.",
      link: "chatbot.miniorange.in",
      technologies: ["Langchain", "Amazon Bedrock", "Redis", "LLM Fine-tuning"]
    },
    {
      title: "Data Analyst Intern",
      company: "MedTour Easy",
      location: "Remote",
      period: "Apr 2024 – Jun 2024",
      description: "Built ML model to predict repeat blood donations. Automated ML pipeline with TPOT.",
      link: "https://github.com/Bharadwaj422/Predict_blood_Donor",
      technologies: ["Machine Learning", "TPOT", "Python", "Predictive Analytics"]
    },
    {
      title: "Data Analyst Intern",
      company: "Vault of Codes",
      location: "Remote",
      period: "Jan 2024 – Apr 2024",
      description: "Performed restaurant data analysis. Extracted trends & visualized data using Python.",
      link: "https://github.com/Bharadwaj422/Restaurant-database-Analysis",
      technologies: ["Python", "Data Visualization", "Trend Analysis"]
    }
  ];

  const projects = [
    {
      title: "AI Chatbot for Customer Support",
      description: "Enhanced self-service support using advanced AI technologies",
      technologies: ["Langchain", "Redis", "Amazon Bedrock"],
      link: "chatbot.miniorange.in",
      category: "AI/ML"
    },
    {
      title: "Blood Donation Predictor",
      description: "Automated ML pipeline to predict repeat donors",
      technologies: ["TPOT", "Machine Learning", "Python"],
      link: "https://github.com/Bharadwaj422/Predict_blood_Donor",
      category: "Machine Learning"
    },
    {
      title: "Restaurant Data Insights",
      description: "Comprehensive trend analysis on cuisines, price ranges, and ratings",
      technologies: ["Python", "Data Visualization", "Analytics"],
      link: "https://github.com/Bharadwaj422/Restaurant-database-Analysis",
      category: "Data Analytics"
    },
    {
      title: "Employee Tracking Dashboard",
      description: "Interactive Power BI dashboard for attendance, skills, and project allocation",
      technologies: ["Power BI", "Dashboard Design", "Analytics"],
      link: "https://github.com/Bharadwaj422/Employee-Monitoring-System-",
      category: "Business Intelligence"
    },
    {
      title: "Travel Booking System",
      description: "Personalized travel plans with trip cancellation and user authentication",
      technologies: ["Pega", "System Architecture", "Authentication"],
      category: "System Design"
    }
  ];

  const skills = {
    "Programming & Databases": ["Python", "SQL", "Redis"],
    "Analytics & Visualization": ["Power BI", "Data Cleaning", "Data Wrangling", "Data Visualization", "Data Reasoning"],
    "Machine Learning & AI": ["Machine Learning", "NLP", "LLMs", "Langchain", "Fine-tuning", "RAG", "Hugging Face", "Chatbot Development", "Ollama"]
  };

const certifications = [
  {
    title: "Google Data Analytics (Google)",
    link: "https://coursera.org/share/6ab474dc28899264745f14e28033aae6",
  },
  {
    title: "Pega Senior System Architect",
    link: "https://accounts.pega.com/profile/BharadwajPutrevu/share/BPEGACPSSA88V-PEGACPSSA88V1",
  },
  {
    title: "Pega System Architect",
    link: "https://accounts.pega.com/profile/BharadwajPutrevu/share/BPEGACPSA88V1-PEGACPSA88V1",
  },
  {
    title: "Python for Data Science (NPTEL)",
    link: "https://archive.nptel.ac.in/content/noc/NOC23/SEM1/Ecertificates/106/noc23-cs21/Course/NPTEL23CS21S1589053403065281.jpg",
  },
  {
    title: "Introduction to Databases (NxtWave)",
    link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=KIHUDSZECB",
  },
  {
    title: "Data Analytics using Power BI (NxtWave)",
    link: "https://certificates.ccbp.in/intensive/data-analytics-using-powerbi?id=SNMTACSJQM",
  },
  {
    title: "Data Analytics Foundations (NxtWave)",
    link: "https://certificates.ccbp.in/intensive/data-analytics-foundations?id=HLTQDJVQWX",
  },
];

  const achievements = [
    "Scopus-indexed research paper on Healthcare Monitoring System",
    "IJRASET research paper on Data Analytics using Power BI"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">Bharadwaj Putrevu</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                      activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dark Mountain Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="gradient-text">Bharadwaj Putrevu</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Data-Driven Professional & AI Solutions Developer
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transforming data into actionable insights through intelligent AI solutions, 
                machine learning models, and interactive dashboards. Passionate about leveraging 
                technology to optimize operations and drive strategic decision-making.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Visakhaptnam</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:krishnabharadwaj422@gmail.com" className="hover:text-blue-400 transition-colors">
                  krishnabharadwaj422@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:7013672469" className="hover:text-blue-400 transition-colors">
                  7013672469
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="https://linkedin.com/in/bharadwajputrevu"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-blue-500/25"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/Bharadwaj422"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-gray-500/25"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
              <a
                href="/Bharadwaj_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <button className="glow-button bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-teal-500/25">
                  <Download className="h-5 w-5" />
                  Download Resume
                </button>
              </a>

            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <ChevronRight className="h-6 w-6 mx-auto text-gray-400 rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                A data-driven professional with demonstrated ability in developing intelligent solutions 
                and delivering actionable insights, acquired through impactful internships and projects.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Core Expertise</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <BarChart3 className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span>Interactive dashboards using Power BI</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Code className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span>Robust data analytics with Python</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span>AI-powered chatbots using Langchain and Redis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Database className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span>Machine learning model development</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Passion & Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Passionate about using technology to optimize operations and improve decision-making. 
                    I believe in the power of data to transform businesses and create meaningful impact 
                    through intelligent automation and predictive analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Work Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700 card-hover">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-blue-400" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-400" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  {exp.link && (
                    <a
                      href={exp.link.startsWith('http') ? exp.link : `https://${exp.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </a>
                  )}
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700 card-hover">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-teal-600/20 text-teal-300 rounded-full text-xs font-medium border border-teal-600/30">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 text-center">{category}</h3>
                <div className="space-y-3">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3">
                      <Star className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700">
              <div className="flex items-start gap-4">
                <GraduationCap className="h-8 w-8 text-blue-400 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">B.Tech in CSE – Data Science</h3>
                  <p className="text-lg text-gray-300 mb-2">Raghu Institute of Technology, Visakhapatnam</p>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400">
                    <span>2020–2024</span>
                    <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-600/30">
                      CGPA: 7.97
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Intermediate</h3>
                    <p className="text-gray-300 mb-2">NRI Junior College, Visakhapatnam</p>
                    <div className="flex items-center gap-4 text-gray-400">
                      <span>2018–2020</span>
                      <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded text-sm border border-green-600/30">
                        CGPA: 8.5
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">SSC</h3>
                    <p className="text-gray-300 mb-2">NRI Indian Springs, Visakhapatnam</p>
                    <div className="flex items-center gap-4 text-gray-400">
                      <span>2018</span>
                      <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded text-sm border border-green-600/30">
                        CGPA: 9.5
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section id="certifications" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Certifications & Achievements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Certifications */}
            {/* Certifications */}
<div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700">
  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
    <Award className="h-6 w-6 text-blue-400" />
    Certifications
  </h3>
  <div className="space-y-4">
    {certifications.map((cert, index) => (
      <div key={index} className="flex items-start gap-3">
        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:underline hover:text-blue-400 transition"
        >
          {cert.title}
        </a>
      </div>
    ))}
  </div>
</div>


            {/* Achievements */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Star className="h-6 w-6 text-yellow-400" />
                Research Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Ready to collaborate on your next data-driven project? Let's connect and discuss how we can turn your data into actionable insights.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href="mailto:krishnabharadwaj422@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                        krishnabharadwaj422@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a href="tel:7013672469" className="text-white hover:text-blue-400 transition-colors">
                        +91 7013672469
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">Visakhaptnam, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/bharadwajputrevu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="h-6 w-6 text-white" />
                    </a>
                    <a
                      href="https://github.com/Bharadwaj422"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Github className="h-6 w-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell me about your project or how we can collaborate..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full glow-button bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Bharadwaj Putrevu. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
