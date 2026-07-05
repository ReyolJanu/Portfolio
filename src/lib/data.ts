import { Project, BlogPost, Service } from "./types";

export const projects: Project[] = [
  {
    slug: "ecommerce-ui",
    title: "E-Commerce Shopping UI",
    description:
      "A clean, conversion-focused shopping experience designed for a modern retail brand, from product discovery to checkout.",
    category: "ui-ux",
    tags: ["Figma", "UI Design", "E-Commerce", "Design System"],
    year: "2024",
    featured: true,
    coverImage: "/UIUX/E-Commerce/Product Page.jpg",
    images: [
      "/UIUX/E-Commerce/Product Page.jpg",
      "/UIUX/E-Commerce/Checkout page.png",
      "/UIUX/E-Commerce/Services.png",
      "/UIUX/E-Commerce/about.png",
      "/UIUX/E-Commerce/customizable gift page.png",
    ],
    role: "UI/UX Designer",
    overview:
      "A full e-commerce UI designed to reduce friction throughout the purchase journey. The system covers product listing, detailed product pages, cart, and checkout, all built on a consistent component library.",
    challenge:
      "The client needed a shopping experience that balanced visual richness with fast scanability. Their previous design had high drop-off at the product page due to cluttered layouts and unclear CTAs.",
    solution:
      "I restructured the information hierarchy, gave the product imagery dominant real estate, and simplified the checkout to a single-page flow. A subtle color system guides the user's eye to key actions without feeling aggressive.",
  },
  {
    slug: "gem-auction",
    title: "Gem Auction Platform",
    description:
      "A trust-first marketplace UI for buying and selling precious gems, designed for both novice buyers and seasoned collectors.",
    category: "ui-ux",
    tags: ["Figma", "UI Design", "Marketplace", "Dashboard"],
    year: "2024",
    featured: true,
    coverImage: "/UIUX/gems/AuctionPage.png",
    images: [
      "/UIUX/gems/AuctionPage.png",
      "/UIUX/gems/become a seller add address.png",
    ],
    role: "UI/UX Designer",
    overview:
      "A marketplace platform designed for the gem trading industry. The UI handles complex workflows like bidding, seller verification, and gem certification display, all while maintaining a premium, trustworthy feel.",
    challenge:
      "Gem trading relies heavily on trust and detail. The challenge was presenting technical gemological data clearly while making the bidding experience feel live and engaging.",
    solution:
      "I used a card-based layout with clear data hierarchies for gem specs, added real-time bid status indicators, and designed an onboarding flow that builds seller credibility progressively.",
  },
  {
    slug: "photography-marketplace",
    title: "Photography Print Marketplace",
    description:
      "An end-to-end design for a platform where photographers sell fine art prints, from sign-up to personalised print selection.",
    category: "ui-ux",
    tags: ["Figma", "UI Design", "Marketplace", "Mobile"],
    year: "2023",
    featured: true,
    coverImage: "/UIUX/progress/landingpage.png",
    images: [
      "/UIUX/progress/landingpage.png",
      "/UIUX/progress/select photos.jpg",
      "/UIUX/progress/select Print.jpg",
      "/UIUX/progress/Order summery & shipping Info.jpg",
      "/UIUX/progress/Final.jpg",
      "/UIUX/progress/sign in.png",
      "/UIUX/progress/signup.png",
    ],
    role: "UI/UX Designer",
    overview:
      "A mobile-first platform connecting photographers with art enthusiasts. The experience covers discovery, customisation of print size and framing, and a streamlined checkout with order tracking.",
    challenge:
      "Photographers needed a storefront that felt as premium as a gallery, while buyers needed confidence in print quality before purchasing without physical inspection.",
    solution:
      "I introduced high-fidelity mockup previews for each print, a step-by-step customisation flow, and social proof elements at key decision points.",
  },
  {
    slug: "bestwishes-app",
    title: "BestWishes E-Commerce App",
    description:
      "A full-stack gifting platform, custom gift boxes, personalisation, and a real-time order dashboard for both customers and admins.",
    category: "development",
    tags: ["Next.js", "React", "MongoDB", "TypeScript"],
    year: "2024",
    featured: false,
    coverImage: "/UIUX/E-Commerce/customizable gift page.png",
    images: ["/UIUX/E-Commerce/customizable gift page.png"],
    role: "Full-Stack Developer",
    overview:
      "A complete e-commerce solution for a gifting brand. Built with Next.js and MongoDB, the platform handles product management, custom gift box building, secure checkout, and admin order management.",
    challenge:
      "The client needed a custom gift-box builder that let customers mix and match products in real time, while keeping inventory management simple on the admin side.",
    solution:
      "I built a drag-and-drop box builder with live price calculation, integrated Stripe for payments, and created a lightweight admin dashboard for order fulfilment tracking.",
  },
  {
    slug: "resto-app",
    title: "Resto Food Delivery App",
    description:
      "A full-stack food delivery platform with real-time order tracking, restaurant management, and a delivery driver interface.",
    category: "development",
    tags: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    year: "2023",
    featured: false,
    coverImage: "/profilepng.png",
    images: ["/profilepng.png"],
    role: "Full-Stack Developer",
    overview:
      "A three-sided marketplace for food delivery: customers browse and order, restaurants manage menus and orders, and drivers get optimised delivery routes.",
    challenge:
      "Coordinating real-time state across three different user types, customer, restaurant, and driver, while keeping latency low and the UI responsive.",
    solution:
      "Firebase Realtime Database handles live order state. Each user type gets a tailored interface with only the controls they need, keeping the experience simple despite the backend complexity.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "designing-for-accessibility",
    title: "Designing for Accessibility Without Sacrificing Aesthetics",
    description:
      "Accessibility and visual quality are often framed as competing priorities. They don't have to be.",
    date: "2025-03-10",
    readTime: "6 min read",
    tags: ["Accessibility", "Design", "WCAG"],
    content: `Accessibility is often treated as a checklist item, something you bolt on after the design is "done." That framing creates unnecessary tension between accessibility and aesthetics.

## The False Trade-Off

The most common objection I hear is that accessible colour contrast "kills" the brand palette. But this misses the point: if your colour choices make text hard to read, they were never good design choices to begin with. Good contrast is good design.

## Focus States Are Not Ugly by Default

Default browser focus rings are ugly because browsers ship conservative defaults, not because focus states are inherently unattractive. A well-designed focus ring can use your brand's action colour, a subtle shadow, or a high-contrast outline that feels intentional.

## Hierarchy Solves Many Problems

Most accessibility issues trace back to poor information hierarchy. When headings, body text, and secondary information are visually distinct, users with cognitive disabilities navigate more easily, and so does everyone else. Accessibility and clarity are the same thing.

## Motion and Animation

Framer Motion and CSS transitions are fantastic tools, but they should respect \`prefers-reduced-motion\`. The fix is trivial and the impact on users with vestibular disorders is significant.

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
\`\`\`

Accessible design is just good design with a wider aperture.`,
  },
  {
    slug: "design-process",
    title: "My Design Process: From Brief to Shipped",
    description:
      "How I approach a new project, the questions I ask, the tools I use, and the decisions I make along the way.",
    date: "2025-02-18",
    readTime: "8 min read",
    tags: ["Process", "Design", "Workflow"],
    content: `Every project is different, but the underlying process is consistent. Here's how I move from a client brief to a shipped product.

## 1. Understand Before You Design

The first thing I do with any new brief is ask the questions the brief doesn't answer. Who exactly is the user? What does success look like six months after launch? What are the current friction points? What decisions are already made?

Good design solves the right problem. This phase is about making sure I know what the right problem actually is.

## 2. Define the Constraints

Constraints are the designer's best friend. Time, budget, technical stack, existing brand, each constraint eliminates a category of solutions and focuses the work. I spend time mapping these explicitly before opening Figma.

## 3. Start with Structure, Not Style

I resist jumping to high-fidelity too early. Low-fidelity wireframes are faster to question and faster to throw away. I'm solving for information hierarchy and user flow at this stage, not pixels.

## 4. Design in Systems

Every interface element I design gets built as a reusable component. This isn't just engineering hygiene, it forces design decisions to be deliberate. If a button has five visual variants, that's a signal that the design hasn't been thought through.

## 5. Test with Real Constraints

Prototypes are tested on real devices, in realistic lighting, with users who have no context. The goal is to find the places where my mental model diverges from the user's.

## 6. Handoff and Follow Through

I stay involved through development. A design handoff is not the end of the designer's job, it's the start of the implementation phase, where design decisions get stress-tested against technical reality.`,
  },
  {
    slug: "building-with-nextjs",
    title: "Why I Build My UX Projects in Next.js",
    description:
      "A designer who codes is a different kind of designer. Here's why I think in Next.js when I think about interfaces.",
    date: "2025-01-22",
    readTime: "5 min read",
    tags: ["Next.js", "Development", "Design Engineering"],
    content: `I started as a designer. I learned to code because I kept running into the limits of static prototypes, they couldn't capture motion, state, or real content. Learning Next.js changed the way I design.

## Prototypes That Feel Real

When your prototype is a real application, you stop making the comfortable design decisions that only look good in Figma. Real data breaks layouts. Real users find edge cases. Building in Next.js forces those problems to surface early.

## The Performance Constraint Is a Design Constraint

Next.js makes you think about load time as part of the design. Image optimisation, font loading, route prefetching, these aren't afterthoughts. They're part of the experience.

## Server Components Changed How I Think About Data

With React Server Components, the distinction between "what the server knows" and "what the client needs" becomes a design decision. Do users need this information immediately? Can it load progressively? These questions shape the interface.

## Type Safety as Design System Enforcement

TypeScript acts as a design system enforcer. If a component expects a \`variant: "primary" | "secondary"\` prop, it's impossible to use it in a way that breaks the design intent. Types make the design system load-bearing.

I still design in Figma. But I think in Next.js.`,
  },
];

export const services: Service[] = [
  {
    id: "ux-design",
    title: "UI/UX Design",
    description:
      "End-to-end interface design, from research and wireframes to polished, developer-ready UI. I design products that are intuitive, accessible, and visually precise.",
    coverImage: "/UIUX/E-Commerce/Product Page.jpg",
    features: [
      "User research & competitive analysis",
      "Information architecture & user flows",
      "Wireframing & prototyping",
      "High-fidelity UI design in Figma",
      "Design system creation",
      "Usability testing",
    ],
  },
  {
    id: "design-engineering",
    title: "Design Engineering",
    description:
      "I close the gap between design and production, building interfaces in React and Next.js that match the design intent pixel for pixel, with smooth animations and real performance.",
    coverImage: "/UIUX/progress/landingpage.png",
    features: [
      "Next.js & React development",
      "Framer Motion animations",
      "Responsive, accessible markup",
      "Component library development",
      "Performance optimisation",
      "TypeScript throughout",
    ],
  },
  {
    id: "interface-development",
    title: "Interface Development",
    description:
      "Pixel-perfect implementation of designs into production-ready interfaces using React, Next.js, and Tailwind CSS with smooth animations and real performance.",
    coverImage: "/UIUX/gems/AuctionPage.png",
    features: [
      "React & Next.js development",
      "Responsive & accessible markup",
      "Framer Motion animations",
      "Component library build-out",
      "Performance optimisation",
      "Design-to-code handoff",
    ],
  },
  {
    id: "brand-identity",
    title: "Brand & Visual Identity",
    description:
      "Visual identity systems that work across digital and print, logomarks, colour systems, typography, and the guidelines that hold it all together.",
    coverImage: "/UIUX/E-Commerce/about.png",
    features: [
      "Logo design & refinement",
      "Colour & typography systems",
      "Brand guidelines document",
      "Social media templates",
      "Icon & illustration style",
      "Application across touchpoints",
    ],
  },
];
