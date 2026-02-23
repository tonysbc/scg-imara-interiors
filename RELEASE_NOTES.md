# Imara Interiors — Phase 2.0 Release Notes

## 🌿 Client Summary (For Chiko)
Phase 2.0 establishes the digital soul of Imara Interiors. We have moved away from generic luxury concepts to a **Conscious Luxury** identity that is deeply rooted in your Tanzanian heritage and your Sombetini studio.

### Key Highlights:
*   **Flagship Showcase:** The Mapito Safari Camp (Serengeti) is now featured as your lead project, establishing immediate high-end credibility.
*   **Editorial Excellence:** The website now uses a "magazine-style" layout inspired by *The Local Project*. This ensures your work looks like a curated collection rather than a standard gallery.
*   **Sombetini Integration:** Your physical shop and artisanal artifacts are now woven into the digital experience, inviting clients to connect with your curated collections.
*   **Founder Narrative:** The "About" section is now centered on your personal journey and design philosophy.

---

## 🛠 Technical Log (Internal)
The 2.0 architecture focuses on scalability, performance, and a "Mobile-Exquisite" responsive design.

### Structural Updates:
*   **Global Layout:** Implemented persistent `Header` and `Footer` within `src/app/layout.tsx` for zero-flicker transitions.
*   **Editorial Grid Logic:**
    *   **Spec Bar:** Structured metadata (Service, Location, Materials) for all projects and shop items.
    *   **Status-First Lead:** Consistent lead-in for all cards (Archive, Featured, Available).
*   **Color Palette:**
    *   Primary: `brand-green` (#1b2e26)
    *   Accent: `brand-gold` (#c5a059)
    *   Neutral: `parchment` (#fdfdfc)
*   **Performance:** Optimized images with Next.js `next/image` and established a lightweight texture overlay (`bg-grain`) for visual depth without slowing down the site.
*   **Accessibility:** WCAG 2.1 AA compliance with high-contrast text ratios and semantic HTML.

---

## 🎯 Next Phase Objectives (Phase 3.0)
*   **Online Boutique:** Expansion of the Sombetini shop into a fully browsable digital catalog.
*   **Performance Audit:** Final-stage speed optimizations.

---

# Imara Interiors — Phase 2.1 Release Notes (Heritage & Connection)

## 🌿 Client Summary (For Chiko)
Phase 2.1 deepens the "Rooted" aspect of your brand by introducing the **Burnt Sienna** heritage color and a dedicated **Inquire** page that feels like a personal consultation.

### Key Highlights:
*   **Heritage Color Palette:** Introduced Burnt Sienna (#994023) to represent the Tanzanian earth and the soul of your Arusha workshop.
*   **Dedicated Inquire Page:** We've moved from a simple contact link to a full editorial page. It's designed to begin a meaningful connection with your clients.
*   **Tactile Enhancements:** The website now has a richer "paper" texture and subtle interactive animations that make the digital experience feel more hand-crafted.
*   **Sombetini Stories:** Hovering over shop items now reveals a snippet of their "Artisan Story," highlighting their origin and materials.

---

## 🛠 Technical Log (Internal)
The 2.1 update focuses on brand consistency, tactile UX, and closing the user journey loop.

### Structural Updates:
*   **Design System:**
    *   Added `brand-sienna` (#994023) to `globals.css` and Tailwind configuration.
    *   Role: Connection, Heritage, and "Active" UI elements.
*   **Inquire Route (`/inquire`):**
    *   Split-screen editorial layout with high-res Arusha imagery.
    *   Bespoke form components with custom `select` styling and Burnt Sienna accents.
    *   Direct contact details standardized: `info@imarainteriorsdesignco.com` and `+255 765 560 563`.
*   **UI/UX Refinements (Audit Fixes):**
    *   **Tactile Depth:** Increased grain overlay opacity to `0.08` for a richer feel.
    *   **Mobile Affordance:** Added a minimal two-line hamburger icon to the "Menu" button for better intuitive navigation.
    *   **Journey Closure:** Added a high-impact "Next Step" CTA to the bottom of the About page to prevent "dead-ends."
    *   **Mobile Header & Padding Fix:** 
        *   Compressed header padding to `py-4` on mobile for more vertical space.
        *   Standardized editorial page top padding to `pt-56` (mobile) and `pt-64` (desktop) to eliminate header overlap across all devices.
    *   **Shop Narratives:** Integrated a dynamic hover overlay for shop items that reveals origin and material metadata.

### Data & Identity:
*   Standardized all founder references to "Chiko."
*   Removed redundant global components from the Inquire page.
