"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronsDown, FiChevronsUp, FiLayout, FiCode, FiServer, FiPenTool } from "react-icons/fi";
import type { Service } from "@/lib/types";

/* ── Inline SVG Illustrations ─────────────────────────────────────── */

function IllustrationUIUX() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Back card – static gray wireframe */}
      <rect x="20" y="20" width="220" height="270" rx="16" fill="#E4E4E7" />
      <rect x="40" y="48" width="140" height="12" rx="4" fill="#A1A1AA" />
      <rect x="40" y="68" width="100" height="8" rx="4" fill="#C4C4C8" />
      <rect x="40" y="82" width="120" height="8" rx="4" fill="#C4C4C8" />
      <rect x="40" y="106" width="80" height="64" rx="8" fill="#C4C4C8" />
      <rect x="132" y="106" width="80" height="64" rx="8" fill="#C4C4C8" />
      <rect x="40" y="182" width="172" height="8" rx="4" fill="#C4C4C8" />
      <rect x="40" y="198" width="140" height="8" rx="4" fill="#C4C4C8" />
      <rect x="40" y="224" width="64" height="28" rx="8" fill="#B8A9E8" />

      {/* Front card – floats up/down */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-8; 0,0" dur="3.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" keyTimes="0;0.5;1" />
        <rect x="160" y="60" width="210" height="220" rx="16" fill="var(--color-primary)" />
        <circle cx="195" cy="102" r="22" fill="white" opacity="0.2" />
        <circle cx="195" cy="102" r="14" fill="white" opacity="0.35" />
        {/* Toggle – pulses */}
        <rect x="328" y="90" width="38" height="22" rx="11" fill="white" opacity="0.25" />
        <circle cx="355" cy="101" r="9" fill="white" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        <rect x="226" y="94" width="80" height="10" rx="4" fill="white" opacity="0.5" />
        <rect x="226" y="110" width="55" height="8" rx="4" fill="white" opacity="0.3" />
        {/* Cards */}
        <rect x="175" y="138" width="88" height="76" rx="10" fill="white" opacity="0.15" />
        <circle cx="219" cy="166" r="16" fill="#8B6FFF">
          <animate attributeName="r" values="16;19;16" dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" />
        </circle>
        <rect x="183" y="190" width="72" height="8" rx="4" fill="white" opacity="0.3" />
        <rect x="183" y="202" width="52" height="6" rx="3" fill="white" opacity="0.2" />
        <rect x="273" y="138" width="88" height="76" rx="10" fill="white" opacity="0.15" />
        <polyline points="281,195 296,178 312,184 328,162 344,168 352,155" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
        </polyline>
        <circle cx="352" cy="155" r="4" fill="white" opacity="0.9" />
        {/* Bottom pill */}
        <rect x="175" y="228" width="130" height="36" rx="18" fill="white" opacity="0.15" />
        <rect x="185" y="238" width="80" height="8" rx="4" fill="white" opacity="0.4" />
        <circle cx="296" cy="246" r="10" fill="#8B6FFF" opacity="0.9" />
        {/* cursor tag */}
        <rect x="310" y="255" width="56" height="22" rx="6" fill="#212121" />
        <rect x="318" y="262" width="40" height="6" rx="3" fill="white" opacity="0.5" />
      </g>

      {/* Floating dots */}
      <circle cx="370" cy="30" r="6" fill="var(--color-primary)">
        <animateTransform attributeName="transform" type="translate" values="0,0; -3,5; 0,0" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" />
      </circle>
      <circle cx="355" cy="50" r="4" fill="#8B6FFF" opacity="0.6">
        <animateTransform attributeName="transform" type="translate" values="0,0; 4,-4; 0,0" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" />
      </circle>
      <circle cx="18" cy="200" r="5" fill="#8B6FFF" opacity="0.5">
        <animateTransform attributeName="transform" type="translate" values="0,0; 3,6; 0,0" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" />
      </circle>
    </svg>
  );
}

function IllustrationDesignEngineering() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Figma window – static */}
      <rect x="10" y="30" width="170" height="240" rx="14" fill="#E4E4E7" />
      <rect x="10" y="30" width="170" height="32" rx="14" fill="#D4D4D8" />
      <circle cx="30" cy="46" r="6" fill="#A1A1AA" opacity="0.5" />
      <circle cx="48" cy="46" r="6" fill="#A1A1AA" opacity="0.5" />
      <rect x="70" y="40" width="80" height="12" rx="4" fill="#A1A1AA" opacity="0.4" />
      <rect x="22" y="76" width="146" height="52" rx="8" fill="var(--color-primary)" opacity="0.85" />
      <rect x="32" y="88" width="80" height="10" rx="4" fill="white" opacity="0.7" />
      <rect x="32" y="104" width="55" height="8" rx="4" fill="white" opacity="0.4" />
      <rect x="32" y="116" width="35" height="16" rx="6" fill="white" opacity="0.5" />
      <rect x="22" y="140" width="66" height="56" rx="8" fill="#C4C4C8" />
      <circle cx="42" cy="160" r="12" fill="#8B6FFF" opacity="0.6" />
      <rect x="30" y="178" width="50" height="7" rx="3" fill="#A1A1AA" />
      <rect x="30" y="189" width="38" height="5" rx="3" fill="#C4C4C8" />
      <rect x="100" y="140" width="66" height="56" rx="8" fill="#C4C4C8" />
      <circle cx="120" cy="160" r="12" fill="#8B6FFF" opacity="0.6" />
      <rect x="108" y="178" width="50" height="7" rx="3" fill="#A1A1AA" />
      <rect x="108" y="189" width="38" height="5" rx="3" fill="#C4C4C8" />
      <rect x="22" y="208" width="146" height="28" rx="6" fill="#B8A9E8" opacity="0.5" />
      <rect x="32" y="217" width="80" height="8" rx="4" fill="var(--color-primary)" opacity="0.5" />
      <rect x="22" y="246" width="32" height="14" rx="4" fill="var(--color-primary)" />
      <rect x="60" y="246" width="32" height="14" rx="4" fill="#8B6FFF" />
      <rect x="98" y="246" width="32" height="14" rx="4" fill="#B8A9E8" />
      <rect x="136" y="246" width="32" height="14" rx="4" fill="#212121" />

      {/* Arrow – slides right */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 8,0; 0,0" dur="1.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" />
        <rect x="192" y="130" width="46" height="28" rx="14" fill="var(--color-primary)" />
        <polyline points="204,144 224,144" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <polyline points="218,138 226,144 218,150" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Code window – floats up slightly */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" keyTimes="0;0.5;1" />
        <rect x="248" y="30" width="145" height="240" rx="14" fill="#1a1a2e" />
        <rect x="248" y="30" width="145" height="32" rx="14" fill="#16162a" />
        <circle cx="266" cy="46" r="5" fill="#A1A1AA" opacity="0.3" />
        <circle cx="282" cy="46" r="5" fill="#A1A1AA" opacity="0.3" />
        <circle cx="298" cy="46" r="5" fill="#A1A1AA" opacity="0.3" />
        <rect x="330" y="38" width="55" height="16" rx="5" fill="#2a2a40" />
        <rect x="337" y="43" width="40" height="6" rx="2" fill="var(--color-primary)" opacity="0.6" />
        {/* Code lines fade in staggered */}
        <rect x="262" y="76" width="60" height="7" rx="3" fill="var(--color-primary)" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.4s" begin="0s" repeatCount="indefinite" />
        </rect>
        <rect x="326" y="76" width="55" height="7" rx="3" fill="#8B6FFF" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.4s" begin="0.2s" repeatCount="indefinite" />
        </rect>
        <rect x="262" y="92" width="95" height="7" rx="3" fill="#8B6FFF" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.4s" begin="0.4s" repeatCount="indefinite" />
        </rect>
        <rect x="262" y="108" width="32" height="7" rx="3" fill="#A1A1AA" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.4s" begin="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="300" y="108" width="50" height="7" rx="3" fill="var(--color-primary)" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
        </rect>
        <rect x="276" y="124" width="42" height="7" rx="3" fill="#A1A1AA" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.4s" begin="1s" repeatCount="indefinite" />
        </rect>
        <rect x="276" y="140" width="60" height="7" rx="3" fill="#C4C4C8" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
        </rect>
        <rect x="292" y="156" width="32" height="7" rx="3" fill="#A1A1AA" opacity="0.3" />
        <rect x="276" y="172" width="28" height="7" rx="3" fill="#C4C4C8" opacity="0.3" />
        <rect x="262" y="188" width="12" height="7" rx="3" fill="#A1A1AA" opacity="0.3" />
        <rect x="248" y="246" width="145" height="24" rx="8" fill="#2a2a40" />
        <rect x="258" y="252" width="115" height="6" rx="3" fill="var(--color-primary)" opacity="0.4" />
      </g>

      {/* Top pills */}
      <rect x="248" y="8" width="58" height="20" rx="10" fill="#E4E4E7" />
      <rect x="262" y="13" width="30" height="8" rx="4" fill="#A1A1AA" opacity="0.6" />
      <rect x="318" y="8" width="58" height="20" rx="10" fill="var(--color-primary)" />
      <rect x="332" y="13" width="30" height="8" rx="4" fill="white" opacity="0.8" />

      {/* Floating dots */}
      <circle cx="216" cy="34" r="5" fill="var(--color-primary)" opacity="0.5">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,5; 0,0" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" />
      </circle>
      <circle cx="228" cy="50" r="3" fill="#8B6FFF" opacity="0.4">
        <animateTransform attributeName="transform" type="translate" values="0,0; 4,0; 0,0" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" />
      </circle>
    </svg>
  );
}

function IllustrationInterfaceDev() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Browser window */}
      <rect x="30" y="20" width="340" height="250" rx="14" fill="#1a1a2e" />
      <rect x="30" y="20" width="340" height="36" rx="14" fill="#16162a" />
      <circle cx="52" cy="38" r="6" fill="#A1A1AA" opacity="0.25" />
      <circle cx="70" cy="38" r="6" fill="#A1A1AA" opacity="0.25" />
      <circle cx="88" cy="38" r="6" fill="#A1A1AA" opacity="0.25" />
      <rect x="140" y="28" width="120" height="18" rx="9" fill="#2a2a40" />
      <rect x="150" y="34" width="80" height="6" rx="3" fill="var(--color-primary)" opacity="0.4" />
      <circle cx="348" cy="38" r="5" fill="var(--color-primary)" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* File tree – static */}
      <rect x="30" y="56" width="120" height="214" rx="0" fill="#16162a" />
      <rect x="42" y="72" width="55" height="8" rx="3" fill="var(--color-primary)" opacity="0.6" />
      <rect x="52" y="90" width="75" height="7" rx="3" fill="#8B6FFF" opacity="0.4" />
      <rect x="62" y="104" width="50" height="6" rx="3" fill="#A1A1AA" opacity="0.35" />
      <rect x="62" y="116" width="45" height="6" rx="3" fill="#A1A1AA" opacity="0.35" />
      <rect x="62" y="128" width="55" height="6" rx="3" fill="#A1A1AA" opacity="0.35" />
      <rect x="52" y="144" width="65" height="7" rx="3" fill="#8B6FFF" opacity="0.4" />
      <rect x="62" y="158" width="48" height="6" rx="3" fill="#A1A1AA" opacity="0.35" />
      <rect x="62" y="170" width="52" height="6" rx="3" fill="#A1A1AA" opacity="0.35" />
      <rect x="52" y="186" width="60" height="7" rx="3" fill="#8B6FFF" opacity="0.4" />
      <rect x="62" y="200" width="44" height="6" rx="3" fill="#A1A1AA" opacity="0.35" />
      <rect x="62" y="212" width="50" height="6" rx="3" fill="#A1A1AA" opacity="0.35" />

      {/* Preview panel – floats */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-6; 0,0" dur="3.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" keyTimes="0;0.5;1" />
        <rect x="158" y="64" width="204" height="100" rx="10" fill="#2a2a40" />
        <rect x="166" y="72" width="40" height="8" rx="3" fill="var(--color-primary)" opacity="0.6" />
        <rect x="344" y="70" width="12" height="12" rx="3" fill="var(--color-primary)" opacity="0.5" />
        <rect x="166" y="90" width="188" height="64" rx="8" fill="var(--color-primary)" opacity="0.7" />
        <circle cx="186" cy="114" r="12" fill="white" opacity="0.3" />
        <rect x="204" y="108" width="80" height="8" rx="4" fill="white" opacity="0.5" />
        <rect x="204" y="120" width="55" height="6" rx="3" fill="white" opacity="0.3" />
        <rect x="326" y="106" width="24" height="16" rx="8" fill="white" opacity="0.25" />
        <circle cx="342" cy="114" r="7" fill="white" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Code panel – fading lines */}
      <rect x="158" y="176" width="204" height="80" rx="10" fill="#2a2a40" />
      <rect x="166" y="185" width="55" height="7" rx="3" fill="var(--color-primary)" opacity="0.5" />
      <rect x="166" y="200" width="100" height="6" rx="3" fill="#8B6FFF" opacity="0.4">
        <animate attributeName="width" values="100;130;100" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" />
      </rect>
      <rect x="178" y="212" width="70" height="6" rx="3" fill="#A1A1AA" opacity="0.35">
        <animate attributeName="width" values="70;90;70" dur="3s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" />
      </rect>
      <rect x="190" y="224" width="55" height="6" rx="3" fill="#A1A1AA" opacity="0.3">
        <animate attributeName="width" values="55;72;55" dur="3s" begin="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" />
      </rect>
      <rect x="178" y="236" width="30" height="6" rx="3" fill="#A1A1AA" opacity="0.25" />
      <rect x="166" y="248" width="12" height="6" rx="3" fill="#A1A1AA" opacity="0.2" />

      {/* Floating badges */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 3,-5; 0,0" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" />
        <rect x="360" y="120" width="50" height="22" rx="8" fill="var(--color-primary)" />
        <circle cx="369" cy="131" r="5" fill="white" opacity="0.8" />
        <rect x="378" y="127" width="25" height="6" rx="3" fill="white" opacity="0.8" />
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; -4,4; 0,0" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" />
        <rect x="0" y="100" width="46" height="46" rx="10" fill="#E4E4E7" />
        <rect x="12" y="112" width="22" height="22" rx="4" fill="#8B6FFF" opacity="0.5" />
      </g>

      {/* Status pills */}
      <rect x="60" y="277" width="100" height="20" rx="10" fill="#E4E4E7" />
      <circle cx="74" cy="287" r="4" fill="var(--color-primary)" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <rect x="82" y="283" width="66" height="6" rx="3" fill="#A1A1AA" opacity="0.5" />
      <rect x="180" y="277" width="88" height="20" rx="10" fill="#E4E4E7" />
      <circle cx="194" cy="287" r="4" fill="var(--color-primary)" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" begin="0.75s" repeatCount="indefinite" />
      </circle>
      <rect x="202" y="283" width="54" height="6" rx="3" fill="#A1A1AA" opacity="0.5" />
    </svg>
  );
}

function IllustrationBrandIdentity() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Top row */}
      {/* Card 1 – floats */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-7; 0,0" dur="3.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" keyTimes="0;0.5;1" />
        <rect x="10" y="10" width="120" height="130" rx="12" fill="#E4E4E7" />
        <circle cx="70" cy="58" r="30" fill="var(--color-primary)" opacity="0.7" />
        <circle cx="70" cy="58" r="16" fill="white" opacity="0.8" />
        <ellipse cx="70" cy="58" rx="6" ry="9" fill="var(--color-primary)" opacity="0.9" />
        <rect x="22" y="100" width="96" height="8" rx="4" fill="#A1A1AA" opacity="0.5" />
        <rect x="22" y="114" width="72" height="6" rx="3" fill="#C4C4C8" />
        <rect x="22" y="126" width="55" height="6" rx="3" fill="#C4C4C8" />
      </g>

      {/* Card 2 – typography – static */}
      <rect x="142" y="10" width="120" height="130" rx="12" fill="#E4E4E7" />
      <text x="158" y="72" fontSize="48" fontWeight="700" fill="var(--color-primary)" opacity="0.7" fontFamily="serif">Aa</text>
      <text x="210" y="72" fontSize="48" fontWeight="700" fill="#212121" opacity="0.8" fontFamily="serif">Bb</text>
      <rect x="154" y="86" width="96" height="7" rx="3" fill="#A1A1AA" opacity="0.4" />
      <rect x="154" y="100" width="80" height="5" rx="3" fill="#C4C4C8" />
      <rect x="154" y="111" width="65" height="5" rx="3" fill="#C4C4C8" />
      <rect x="154" y="122" width="90" height="16" rx="8" fill="var(--color-primary)" />
      <circle cx="168" cy="130" r="6" fill="white" opacity="0.8" />
      <rect x="178" y="126" width="50" height="8" rx="3" fill="white" opacity="0.8" />

      {/* Card 3 – colors – each swatch pulses */}
      <rect x="274" y="10" width="120" height="130" rx="12" fill="#E4E4E7" />
      <rect x="286" y="22" width="96" height="24" rx="6" fill="var(--color-primary)">
        <animate attributeName="opacity" values="1;0.7;1" dur="2s" begin="0s" repeatCount="indefinite" />
      </rect>
      <rect x="294" y="28" width="40" height="7" rx="3" fill="white" opacity="0.9" />
      <rect x="294" y="37" width="28" height="5" rx="2" fill="white" opacity="0.5" />
      <rect x="286" y="52" width="96" height="22" rx="6" fill="#8B6FFF">
        <animate attributeName="opacity" values="1;0.7;1" dur="2s" begin="0.4s" repeatCount="indefinite" />
      </rect>
      <rect x="294" y="57" width="40" height="7" rx="3" fill="white" opacity="0.8" />
      <rect x="286" y="80" width="96" height="22" rx="6" fill="#B8A9E8">
        <animate attributeName="opacity" values="1;0.7;1" dur="2s" begin="0.8s" repeatCount="indefinite" />
      </rect>
      <rect x="294" y="85" width="40" height="7" rx="3" fill="white" opacity="0.8" />
      <rect x="286" y="108" width="96" height="22" rx="6" fill="#212121">
        <animate attributeName="opacity" values="1;0.7;1" dur="2s" begin="1.2s" repeatCount="indefinite" />
      </rect>
      <rect x="294" y="113" width="40" height="7" rx="3" fill="white" opacity="0.8" />

      {/* Bottom row */}
      {/* Card 4 – shapes – slow rotate on triangle */}
      <rect x="10" y="154" width="170" height="136" rx="12" fill="#E4E4E7" />
      <rect x="28" y="172" width="58" height="58" rx="10" fill="var(--color-primary)" opacity="0.8" />
      <rect x="40" y="183" width="18" height="34" rx="4" fill="white" opacity="0.9" />
      <rect x="100" y="172" width="58" height="58" rx="10" fill="#C4C4C8" />
      <g transform="translate(129,207)">
        <animateTransform attributeName="transform" type="rotate" values="0 0 0;8 0 0;0 0 0" dur="4s" additive="sum" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" />
        <polygon points="0,-24 -16,12 16,12" fill="var(--color-primary)" opacity="0.7" />
      </g>
      <rect x="28" y="246" width="58" height="34" rx="8" fill="var(--color-primary)" opacity="0.5" />
      <rect x="100" y="246" width="58" height="34" rx="8" fill="#C4C4C8" />
      <rect x="116" y="256" width="26" height="14" rx="7" fill="#A1A1AA" opacity="0.5" />
      <text x="38" y="270" fontSize="22" fill="white" opacity="0.9">+</text>

      {/* Card 5 – brand – floats */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="4.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" keyTimes="0;0.5;1" />
        <rect x="194" y="154" width="200" height="136" rx="12" fill="#E4E4E7" />
        <rect x="206" y="168" width="80" height="34" rx="8" fill="var(--color-primary)" />
        <rect x="214" y="178" width="55" height="14" rx="4" fill="white" opacity="0.9" />
        <rect x="296" y="168" width="86" height="34" rx="8" fill="#C4C4C8" />
        <rect x="304" y="178" width="60" height="14" rx="4" fill="#A1A1AA" opacity="0.7" />
        <rect x="206" y="214" width="36" height="36" rx="8" fill="#C4C4C8" />
        <circle cx="224" cy="232" r="10" fill="#8B6FFF" opacity="0.6" />
        <rect x="252" y="214" width="130" height="36" rx="8" fill="#212121" opacity="0.85" />
        <rect x="260" y="224" width="95" height="7" rx="3" fill="var(--color-primary)" opacity="0.5" />
        <rect x="260" y="235" width="70" height="5" rx="3" fill="#A1A1AA" opacity="0.3" />
        <rect x="206" y="260" width="176" height="22" rx="6" fill="#C4C4C8" opacity="0.6" />
        <rect x="214" y="266" width="100" height="6" rx="3" fill="#A1A1AA" opacity="0.4" />
      </g>

      {/* Corner dots – float */}
      <circle cx="10" cy="10" r="5" fill="#8B6FFF" opacity="0.5">
        <animateTransform attributeName="transform" type="translate" values="0,0; 4,3; 0,0" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" />
      </circle>
      <circle cx="390" cy="10" r="5" fill="var(--color-primary)" opacity="0.5">
        <animateTransform attributeName="transform" type="translate" values="0,0; -4,3; 0,0" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" />
      </circle>
      <circle cx="390" cy="290" r="5" fill="var(--color-primary)" opacity="0.4">
        <animateTransform attributeName="transform" type="translate" values="0,0; -3,-4; 0,0" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines="0.45,0,0.55,1;0.45,0,0.55,1" />
      </circle>
    </svg>
  );
}

const illustrations: Record<string, React.ReactNode> = {
  "ux-design":               <IllustrationUIUX />,
  "design-engineering":      <IllustrationDesignEngineering />,
  "full-stack-development":  <IllustrationInterfaceDev />,
  "brand-identity":          <IllustrationBrandIdentity />,
};

const serviceIcons: Record<string, React.ElementType> = {
  "ux-design":               FiLayout,
  "design-engineering":      FiCode,
  "full-stack-development":  FiServer,
  "brand-identity":          FiPenTool,
};

interface Props {
  services: Service[];
}

export function ServicesAccordion({ services }: Props) {
  const [hoveredId, setHoveredId] = useState<string>("");

  return (
    <div className="divide-y divide-[#E4E4E7] border border-[#E4E4E7] rounded-2xl overflow-hidden">
      {services.map((service) => {
        const isOpen = hoveredId === service.id;
        const Icon   = serviceIcons[service.id] ?? FiLayout;

        return (
          <div
            key={service.id}
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId("")}
          >
            {/* Row header */}
            <div className="flex w-full items-center gap-4 px-6 py-8 cursor-default transition-colors hover:bg-[#F4F4F5]/60">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors"
                style={{ background: isOpen ? "rgba(var(--color-primary-rgb), 0.1)" : "#F4F4F5" }}
              >
                <Icon size={17} color={isOpen ? "var(--color-primary)" : "#A1A1AA"} />
              </span>
              <span className={`flex-1 text-base font-semibold tracking-tight transition-colors ${isOpen ? "text-primary" : "text-[#212121]"}`}>
                {service.title}
              </span>
              <span className="text-primary transition-colors">
                {isOpen ? <FiChevronsUp size={20} /> : <FiChevronsDown size={20} />}
              </span>
            </div>

            {/* Expanded panel */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 border-t border-[#E4E4E7]">
                    {/* Left: animated illustration */}
                    <div className="flex items-center justify-center bg-[#F9F9FB] p-8 md:p-12 min-h-[280px]">
                      <div className="w-full max-w-[340px]">
                        {illustrations[service.id]}
                      </div>
                    </div>
                    {/* Right: details */}
                    <div className="flex flex-col justify-center gap-5 p-8 md:p-12 border-t md:border-t-0 md:border-l border-[#E4E4E7]">
                      <p className="text-base text-[#A1A1AA] leading-relaxed">{service.description}</p>
                      <ul className="space-y-2.5">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-sm text-[#212121]">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
