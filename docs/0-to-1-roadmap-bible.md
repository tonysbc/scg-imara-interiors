# 0-to-1 Roadmap Bible: Imara Interiors Design Co.

## Project Vision: Conscious & Rooted Interiors

This document outlines the roadmap for developing a "Mobile-Exquisite" web presence for Imara Interiors Design Co. The website serves as a digital showroom and shop, blending their physical presence in Sombetini with a global online platform. It showcases their commitment to "Conscious Luxury," "Sustainable Design," and "Timeless Functionality."

**Domain:** [imarainteriorsdesignco.com](https://imarainteriorsdesignco.com)
**Logo:** `public/imara_Logo.png`
**Founder:** Chiko
**Physical Store:** Sombetini, Arusha, Tanzania

---

## Guiding Principles

*   **Conscious Luxury Aesthetic:** Emphasize elegance, sophistication, and soulful design rooted in Tanzanian heritage (Inspiration: [House of Bohn](https://www.houseofbohn.com/)).
*   **Editorial Listing Standard:** Adopt the information hierarchy and grid logic of [The Local Project](https://thelocalproject.com.au/), balancing commercial clarity with storytelling.
*   **Physical & Digital Blend:** Seamlessly integrate the Sombetini shop experience with the online portfolio and boutique.

---

## Editorial & Listing Guidelines (The Local Project Standard)

To ensure the site feels like a premium publication rather than just a store:

1.  **The "Spec" Bar:** Every project and shop item must have a consistent metadata bar (e.g., *Service | Location | Status* or *Material | Origin | Availability*).
2.  **Status-First Lead:** Use bold, clear status markers (Inquire, Available in Sombetini, Archive).
3.  **Typography Hierarchy:** Large, light-weight headings for titles, paired with high-density, small-caps metadata for specs.
4.  **Inquiry-Led Commerce:** For high-end artisanal pieces, prioritize "Inquire" (Chiko's personal connection) over "Add to Cart."

---

## Development Protocol

1.  **Deliberate on Feature:** Clearly define the feature's purpose and scope.
2.  **Write Tests:** Create comprehensive tests to verify functionality and requirements.
3.  **Build/Fix:** Implement the feature or resolve identified issues.
4.  **Run Tests:** Execute all tests to ensure code integrity.
5.  **Update Bible:** Document changes, lessons learned, and updates to the roadmap.

---

## Phase 1: Brand Discovery & Core Architecture

*   **Objective:** Establish the foundational narrative and technical framework.
*   **Deliverables:**
    *   Refined Brand Messaging Document (Founder: Chiko).
    *   Scaffolded Next.js/TypeScript Project.
    *   Initial Project Setup with brand-aligned high-contrast UI.

---

## Phase 2: Core Features & Content

*   **Objective:** Develop key sections of the website.
*   **Deliverables:**
    *   Homepage design and implementation (Sombetini Store integration).
    *   "About Us" / "Our Philosophy" page (Founding story by Chiko).
    *   **Portfolio Showcase:**
        *   Project listing page.
        *   Individual project detail pages with high-res image galleries.
    *   "Services" page detailing offerings (Turnkey Interiors, Renovation, Designs).

---

## Phase 3: Advanced Features & E-commerce

*   **Objective:** Enhance user engagement and drive online sales.
*   **Deliverables:**
    *   Online Boutique (Digital extension of the Sombetini shop).
    *   Integrated Blog for thought leadership and SEO.
    *   Contact Form and Location/Shop information.
    *   Full SEO implementation and audit.

---

## Phase 4: Launch & Iteration

*   **Objective:** Deploy the website and plan for ongoing improvements.
*   **Deliverables:**
    *   Website deployment.
    *   Post-launch SEO monitoring.
    *   Plan for future content updates and feature enhancements.

---

## Current Status

*   **Project Initiated:** February 22, 2026
*   **Phase:** Phase 2 (Core Features & Content)
*   **Recent Activity:**
    *   **Rebranding Complete:** Transitioned from "Quiet Luxury" to "Conscious Luxury" to align with Chiko's vision.
    *   **Founder & Location:** Integrated Chiko's narrative and the Sombetini, Arusha shop details across the site.
    *   **Flagship Project:** Added "Mapito Safari Camp, Serengeti" (Marriott Autograph Collection) as the lead portfolio item.
    *   **Editorial Listings:** Implemented "The Local Project" inspired grid with "Status-First" leads and "Spec Bar" metadata for both Portfolio and Shop.
    *   **Burnt Sienna Integration:** Introduced Burnt Sienna (#994023) as a "Heritage & Connection" color, used for status markers, contact details, and the Inquiry CTA.
    *   **Inquire Page Complete:** Transitioned from a simple contact anchor to a dedicated `/inquire` editorial page with split-screen layout and updated contact details (`info@imarainteriorsdesignco.com` and `+255 765 560 563`).
    *   **UI/UX Optimization (Phase 2.1):**
        *   **Header Compression:** Reduced mobile header height (`py-4`) to maximize vertical space.
        *   **Standardized Clearance:** Implemented a unified `pt-56` (mobile) / `pt-64` (desktop) top padding across all editorial pages to eliminate header overlap.
        *   **Mobile Affordance:** Added a minimal two-line hamburger icon to the "Menu" button.
        *   **Shop Narratives:** Integrated dynamic hover overlays for shop items that reveal origin and material stories.
    *   **Logo Visibility:** Optimized logo display in Header/Footer using `mix-blend-mode` for seamless integration on light backgrounds.
*   **Phase 3: Advanced Features Complete (Feb 23, 2026):**
    *   **Online Boutique:** Launched a dedicated `/shop` editorial listing and `/shop/[id]` detail pages.
    *   **Studio Notes:** Integrated a blog system (`/blog`) for thought leadership, branded for tactile authenticity.
    *   **Contextual Inquiries:** Enhanced the `/inquire` flow with piece-specific query parameters for pre-filled data.
*   **Phase 4: Launch Audit & SEO Complete (Feb 23, 2026):**
    *   **Technical SEO:** Dynamic metadata, OG tags, and `robots.txt` implemented.
    *   **Performance:** All routes verified as static or dynamic with successful local builds.
    *   **Accessibility:** Alt-text and semantic placeholder audit complete.
*   **Next Action:** Post-Launch Monitoring & Iteration. Ready for production deployment when instructed.
