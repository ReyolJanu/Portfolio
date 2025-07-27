'use client';

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const illustrationWorks = [
  { id: 1, src: "/illustations/1.jpg", alt: "Illustration 1" },
  { id: 2, src: "/illustations/2.jpg", alt: "Illustration 2" },
  { id: 3, src: "/illustations/3.jpg", alt: "Illustration 3" },
  { id: 4, src: "/illustations/4.jpg", alt: "Illustration 4" },
  { id: 5, src: "/illustations/5.jpg", alt: "Illustration 5" },
  { id: 6, src: "/illustations/6.jpg", alt: "Illustration 6" },
];

const uiuxWorks = [
  { id: 1, src: "/UIUX/E-Commerce/about.png", alt: "UI/UX 1" },
  { id: 2, src: "/UIUX/E-Commerce/Checkout page.png", alt: "UI/UX 2" },
  { id: 3, src: "/UIUX/E-Commerce/Product Page.jpg", alt: "UI/UX 3" },
  { id: 4, src: "/UIUX/E-Commerce/Services.png", alt: "UI/UX 4" },
  { id: 5, src: "/UIUX/E-Commerce/customizable gift page.png", alt: "UI/UX 5" },
  { id: 6, src: "/UIUX/progress/Order summery & shipping Info.jpg", alt: "UI/UX 6" },
  { id: 7, src: "/UIUX/progress/landingpage.png", alt: "UI/UX 7" },
  { id: 8, src: "/UIUX/gems/AuctionPage.png", alt: "UI/UX 8" },
  { id: 9, src: "/UIUX/gems/become a seller add address.png", alt: "UI/UX 9" },
];

function Gallery() {
  const [activeTab, setActiveTab] = useState("uiux");
  const worksToShow = activeTab === "illustrations" ? illustrationWorks : uiuxWorks;

  return (
    <section id="gallery" className="w-full min-h-screen px-6 py-16 bg-black text-white">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Work Gallery
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-12">
          <button
            onClick={() => setActiveTab("uiux")}
            className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
              activeTab === "uiux"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                : "border border-gray-700 text-gray-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white"
            }`}
          >
            UI/UX Designs
          </button>
          <button
            onClick={() => setActiveTab("illustrations")}
            className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
              activeTab === "illustrations"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                : "border border-gray-700 text-gray-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white"
            }`}
          >
            Illustrations
          </button>
        </div>

        {/* Gallery with Modal View */}
        <PhotoProvider>
          <div className="flex flex-wrap justify-center gap-6">
            <AnimatePresence mode="wait">
              {worksToShow.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: item.id * 0.05 }}
                  viewport={{ once: true }}
                >
                  <PhotoView src={item.src}>
                    <div className="w-[30%] min-w-[250px] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 group cursor-pointer">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={500}
                        height={300}
                        className="object-cover w-full h-auto max-h-[250px] group-hover:opacity-90"
                      />
                    </div>
                  </PhotoView>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
}

export default Gallery;
