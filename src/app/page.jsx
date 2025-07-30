'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "./Footer/page"
import Gallery from "./modal/page"
import {
  FaFigma,
  FaReact,
  FaSketch,
  FaArrowLeft,
  FaArrowRight,
  FaInstagram
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiCanva,
  SiPython,
  SiPhp,
  SiAdobe,
  SiAdobexd,
  SiPostgresql,
  SiAdobeillustrator,
  SiLinkedin
} from "react-icons/si";
import { RiSupabaseLine } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const gradientStyle = {
  background: "linear-gradient(45deg, #a855f7, #ec4899)", // purple to pink
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
};

export default function HomePage() {
  const [showDesignSkills, setShowDesignSkills] = useState(true);
  const [showUIUXProjects, setShowUIUXProjects] = useState(true);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.className = "bg-gray-900 text-white";

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
    color: "#fbbf24",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const designSkills = [
    { name: "Figma", icon: <FaFigma style={gradientStyle} /> },
    { name: "Adobe XD", icon: <SiAdobexd style={gradientStyle} /> },
    { name: "Illustrator", icon: <SiAdobeillustrator style={gradientStyle} /> },
    { name: "Canva", icon: <SiCanva style={gradientStyle} /> },

  ];

  const devSkills = [

    { name: "Next.js", icon: <SiNextdotjs style={gradientStyle} /> },
    { name: "React.js", icon: <FaReact style={gradientStyle} /> },
    { name: "PHP", icon: <SiPhp style={gradientStyle} /> },
    { name: "Python", icon: <SiPython style={gradientStyle} /> },
    { name: "MongoDB", icon: <SiMongodb style={gradientStyle} /> },
    { name: "MySQL", icon: <SiMysql style={gradientStyle} /> },
    { name: "Firebase", icon: <IoLogoFirebase style={gradientStyle} /> },
    { name: "PostgreSQL", icon: <SiPostgresql style={gradientStyle} /> },
    { name: "Supabase", icon: <RiSupabaseLine style={gradientStyle} /> },
  ];

  const uiuxProjects = [
  {
    title: "E-commerce Shopping Website UI Design",
    description: "Clean and modern UI design for online shopping experience, Balanced aesthetic appeal with usability across devices.",
    link: "https://www.figma.com/file/your-figma-link-1",
    bgImage: "/UIUX/E-Commerce/about.png", // Add your actual image path here (public/images/)
  },
  {
    title: "Gem Auction Platform UI design",
    description: "Designed an intuitive bidding experience with emphasis on clarity and trust, Developed consistent visual language and interactive components",
    link: "https://www.figma.com/file/your-figma-link-2",
    bgImage: "/UIUX/gems/AuctionPage.png",
  },
  {
    title: "Photography Marketplace",
    description: "Created clean, responsive galleries and purchase flows.",
    link: "https://www.figma.com/file/your-figma-link-3",
    bgImage: "/UIUX/progress/landingpage.png",
  },
];

const fullStackProjects = [
  {
    title: "E-commerce Shopping Website (Best Wishes)",
    description: "Full stack social media app with Next, Node.js, Express.js and MongoDB.",
    repo: "https://github.com/yourusername/social-media-platform",
    bgImage: "/UIUX/E-Commerce/about.png",
  },
  {
    title: "Food Delivery App (Resto)",
    description: "PHP and React.js based food ordering and table reservation system with real-time updates.",
    repo: "https://github.com/yourusername/food-delivery-app",
    bgImage: "/images/full2.jpg",
  },
];


  const gradientText = "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500";

  const typedName = useTypingEffect("IIGNATIOUS REYOL JANUKSHAN", 80);
  // For typing effect, create a custom hook
  function useTypingEffect(text, speed = 150) {
    const [displayedText, setDisplayedText] = useState("");
    const indexRef = useRef(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(indexRef.current));
        indexRef.current++;
        if (indexRef.current >= text.length) clearInterval(timer);
      }, speed);
      return () => clearInterval(timer);
    }, [text, speed]);

    return displayedText;
  }

  // Scroll to section on nav click
  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGallery = () => {
    const section = document.getElementById("gallery");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };



  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div
      className="min-h-screen transition-colors duration-500 font-sans"
      style={{
        background: `radial-gradient(
          circle at ${pos.x}% ${pos.y}%, 
          rgba(76, 29, 149, 0.3),  /* purple with 30% opacity */
          rgba(0, 0, 0, 0.7)      /* black with 70% opacity */
        )`,
      }}
    >
      {/* Navigation Bar */}
      <nav className="flex justify-center items-center fixed top-0 w-full z-50">
        <div className="w-auto max-w-[80%] my-[20px] rounded-full px-10 py-3 flex justify-center items-center bg-white/10 backdrop-blur-md border-b border-white/20 text-white shadow-lg">
          <ul className="flex justify-center items-center gap-8 text-base text-white/80 cursor-pointer select-none">
            {["me", "about", "projects", "skills"].map((item) => (
              <li
                key={item}
                className="capitalize hover:text-purple-500 transition-colors duration-150"
                onClick={() => handleNavClick(item)}
              >
                {item}
              </li>

            ))}
            <li className="border-1 border-white/30 rounded-full px-[20px] py-[5px]" onClick={() => handleGallery()}>Gallery</li>
          </ul>
        </div>
      </nav>

      {/* Landing Page */}
      <section
        id="home"
        className="pt-32 px-8 md:px-24 flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-center md:text-left"
        >
          <h2
            className={`text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-white`}
          >
            I'm{" "}
            <span
              className={`text-4xl font-bold ${gradientText}`}
              aria-label="IGNATIOUS REYOL JANUKSHAN"
            >
              {typedName}
              <span className="border-r-2 border-purple-500 animate-pulse inline-block ml-1" />
            </span>
            ,<br />
            a Passionate UI/UX Designer & Full Stack Developer
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            I design clean, modern, and user-centric experiences, and build
            scalable full-stack applications. Let’s create great products
            together.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition duration-300 font-semibold">
            View My Work
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-80 h-100 rounded-full overflow-hidden shadow-2xl border-6 border-white relative scale-110 grayscale"
          style={{ left: "-50px", top: "50px" }} // shifted left 50px & down 50px

        >
          <Image
            src="/profile3.jpg"
            alt="IGNATIOUS REYOL JANUKSHAN"
            width={500}
            height={288}
            className="object-cover w-[110%] h-[150%]"
            style={{ transform: "translate(0px, -70px)" }}
            priority
          />
        </motion.div>
      </section>

      {/* About Me Section */}
      <section className="mt-[50px] px-6 md:px-16 py-20" id="about">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">About Me</h3>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Hello! I'm <span className="font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Ignatious Reyol Janukshan</span>,
            a passionate UI/UX Designer and Computer Science undergraduate at Uva Wellassa University, Sri Lanka. With <span className="font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">12 +</span>  months of freelance experience, I specialize in crafting user-focused designs — from flyers and posters to prototypes and web interfaces.
            I bring creativity, detail, and functionality to every project I take on. I'm also the Vice Captain of the University Chess Team, which sharpens my strategic thinking and design approach.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "💡 Creative Thinker",
                desc: "I approach problems with unique perspectives and bring fresh ideas to life through intuitive design.",
              },
              {
                title: "🛠 Skilled Designer",
                desc: "Proficient in Figma, and Adobe XD, I craft interfaces that are responsive, elegant, and goal-driven.",
              },
              {
                title: "🤝 Team Collaborator",
                desc: "I love working with developers, stakeholders, and users to turn ideas into impactful digital experiences.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow transition-transform transform hover:scale-105 hover:shadow-[0_4px_20px_rgba(168,85,247,0.3)] duration-300"
              >
                <h4 className="font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">{title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="px-8 md:px-24 py-16 max-w-7xl mx-auto border border-white/80 rounded-[20px]" id="skills">
        <h3 className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 text-center tracking-wide">
          My Skills
        </h3>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-8 mb-12">
          <button
            onClick={() => setShowDesignSkills(true)}
            className={`px-6 py-2 rounded-full font-semibold transition ${showDesignSkills
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
              : "bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white"
              }`}
          >
            UI/UX Design
          </button>
          <button
            onClick={() => setShowDesignSkills(false)}
            className={`px-6 py-2 rounded-full font-semibold transition ${!showDesignSkills
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
              : "bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white"
              }`}
          >
            Full Stack Dev
          </button>
        </div>

        {/* Skills display */}
        <div className="flex flex-wrap justify-center gap-12">
          {(showDesignSkills ? designSkills : devSkills).map(({ name, icon }, idx) => (
            <motion.div
              key={name}
              className="flex flex-col items-center gap-3 cursor-default"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
            >
              <motion.div
                className="text-5xl"
                style={gradientStyle}
                title={name}
              >
                {icon}
              </motion.div>
              <span className="text-sm font-semibold text-gray-300 tracking-wide">{name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="px-8 md:px-24 py-16 max-w-7xl mx-auto shadow-xl mt-[50px] border border-white/80 rounded-[20px]"
        id="projects"
      >
        <h3 className="text-3xl font-extrabold mb-10 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-center tracking-wide">
          My Projects
        </h3>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-8 mb-12">
          <button
            onClick={() => setShowUIUXProjects(true)}
            className={`px-6 py-2 rounded-full font-semibold transition ${showUIUXProjects
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
              : "bg-gray-800 text-purple-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white"
              }`}
          >
            UI/UX Projects
          </button>
          <button
            onClick={() => setShowUIUXProjects(false)}
            className={`px-6 py-2 rounded-full font-semibold transition ${!showUIUXProjects
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
              : "bg-gray-800 text-purple-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white"
              }`}
          >
            Full Stack Projects
          </button>
        </div>

        {/* Projects Carousel */}
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={6000}
          swipeable
          emulateTouch
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <div
                style={{ ...arrowStyles, left: 20 }}
                onClick={onClickHandler}
                aria-label={label}
                role="button"
                tabIndex={0}
                className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full p-1 cursor-pointer transition-colors"
              >
                <FaArrowLeft className="text-white" />
              </div>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <div
                style={{ ...arrowStyles, right: 20 }}
                onClick={onClickHandler}
                aria-label={label}
                role="button"
                tabIndex={0}
                className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full p-1 cursor-pointer transition-colors"
              >
                <FaArrowRight className="text-white" />
              </div>
            )
          }
        >
          {(showUIUXProjects ? uiuxProjects : fullStackProjects).map(
            ({ title, description, link, repo }, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-2xl shadow-lg mx-5 text-white flex flex-col justify-between h-64 bg-cover bg-center relative overflow-hidden"
                style={{
                  backgroundImage: `url(${showUIUXProjects ? uiuxProjects[idx].bgImage : fullStackProjects[idx].bgImage})`,
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[3px] rounded-2xl z-0" />
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-3">{title}</h4>
                  <p className="text-base mb-4 flex-grow">{description}</p>
                  {showUIUXProjects ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline hover:text-pink-300 font-semibold transition-colors"
                    >
                      View Figma Design
                    </a>
                  ) : (
                    <a
                      href={repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 underline hover:text-pink-300 font-semibold transition-colors"
                    >
                      View Repository
                    </a>
                  )}
                </div>
              </motion.div>

            )
          )}
        </Carousel>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-md z-60"
          onClick={toggleModal}
          aria-modal="true"
          role="dialog"
          aria-labelledby="contact-modal-title"
          aria-describedby="contact-modal-desc"
        >
          <div
            className="bg-white/80 dark:bg-gray-900/80 rounded-2xl p-10 max-w-2xl w-full mx-4 shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              id="contact-modal-title"
              className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white text-center"
            >
              Contact Me
            </h3>
            <form className="space-y-6" id="contact-modal-desc" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block mb-2 text-gray-900 dark:text-gray-300 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-900 dark:text-gray-300 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-900 dark:text-gray-300 font-medium">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
            <button
              onClick={toggleModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-gray-900 dark:text-white text-2xl font-bold hover:text-purple-600 transition"
            >
              &times;
            </button>
          </div>
        </div>
      )}


      {/* Fixed Contact Button bottom right */}
      <button
        onClick={toggleModal}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:from-pink-500 hover:to-purple-500 transition duration-300 z-50"
        aria-label="Open contact modal"
      >
        Contect me
      </button>
      <div
        className="fixed bottom-20 right-6 space-x-[10px]  text-white  pb-[8px] rounded-full shadow-lg hover:from-pink-500 z-50"
      >
        {/* <button className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-center">email</button> */}
        <a
          href="https://github.com/ReyolJanu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center justify-center  text-white border-1 border-white h-[35px] w-[35px] rounded-full">
            <IoLogoGithub />
          </button>
        </a>

        <a
          href="https://www.instagram.com/reyol__janu?igsh=OXRxc2R5bW5mdjQy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center justify-center  text-white border-1 border-white h-[35px] w-[35px] rounded-full">
            <FaInstagram />
          </button>
        </a>

        <a
          href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BpE%2BkaqxLRz2%2FQKImjn6kqw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center justify-center  text-white border-1 border-white h-[35px] w-[35px] rounded-full">
            <SiLinkedin />
          </button>
        </a>

      </div>
      <section id="gallery">
        <Gallery />
      </section>
      <Footer />
    </div>
  );
}
