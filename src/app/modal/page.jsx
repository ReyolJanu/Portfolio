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
    <section id="gallery" className="w-full min-h-screen px-4 md:px-24 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg hover:shadow-[0_4px_20px_rgba(168,85,247,0.2)] hover:bg-white/10 transition-all duration-300">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Quick Look
          </motion.h2>

          {/* Tabs */}
          <div className="flex justify-center gap-6 mb-12">
            <button
              onClick={() => setActiveTab("uiux")}
              className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                activeTab === "uiux"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "border border-white/30 text-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-white/50"
              }`}
            >
              UI/UX Designs
            </button>
            <button
              onClick={() => setActiveTab("illustrations")}
              className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                activeTab === "illustrations"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "border border-white/30 text-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-white/50"
              }`}
            >
              Illustrations
            </button>
          </div>

          {/* Gallery with Instagram-style Grid */}
          <PhotoProvider>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
              <AnimatePresence mode="wait">
                {worksToShow.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: item.id * 0.05 }}
                    viewport={{ once: true }}
                    className="aspect-square"
                  >
                    <PhotoView src={item.src}>
                      <div className="w-full h-full overflow-hidden cursor-pointer group relative rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={300}
                          height={300}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </PhotoView>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </PhotoProvider>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
