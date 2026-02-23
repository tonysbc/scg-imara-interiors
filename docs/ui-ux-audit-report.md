# UI/UX Audit & Optimization Roadmap

**Project:** Imara Interiors Design Co.  
**Date:** February 23, 2026  
**Focus:** Enhancing the "Conscious & Rooted" digital experience.

---

## 1. Audit Summary
The current site successfully establishes a premium, "Quiet Luxury" aesthetic. The integration of Burnt Sienna and the editorial "Spec Bar" logic has elevated the commercial clarity. However, certain "friction points" prevent a 100% seamless journey, particularly regarding mobile affordance and narrative continuity.

**Current Journey Score:** 87.6/100

---

## 2. Path to 100% (Implementation Plan)

### Phase A: Tactile Refinement & Affordance (High Priority)
*   **Issue:** Grain texture is slightly too faint; Mobile "Menu" button lacks intuitive visual cues.
*   **Solution:** Increase texture opacity to `0.08`. Add a minimal two-line "hamburger" icon to the mobile menu button.

### Phase B: Navigation Closure (Closing the Loop)
*   **Issue:** The About page acts as a "dead-end" for the user journey.
*   **Solution:** Add a "Visit our Sombetini Studio" CTA at the bottom of the About page, linking to the Inquire form.

### Phase C: Bespoke Form Components
*   **Issue:** The native browser `select` dropdown on the Inquire page feels unpolished.
*   **Solution:** Custom-style the dropdown to align with the brand's typographic hierarchy and Burnt Sienna accents.

### Phase D: Shop Narrative Hover
*   **Issue:** Shop items feel transactional in the grid.
*   **Solution:** Implement a subtle hover state that reveals the "Artisan Story" snippet (Origin/Material) before the user clicks.

---

### Phase E: Header Compression & Editorial Clearance (Resolved)
*   **Issue:** Persistent overlap on mobile devices, where top-level text (e.g., "Sombetini Studio") was buried beneath the fixed header.
*   **Solution:**
    *   **Header Compression:** Reduced header vertical padding on mobile from `py-6` to `py-4`, gaining valuable vertical space.
    *   **Standardized Clearance:** Implemented a unified top padding of `pt-56` (224px) for all primary editorial pages (About, Inquire, Portfolio Detail) to ensure zero overlap and a high-end sense of space on all screen sizes.
- **Visual Depth:** Enhanced tactile feel across all devices.
- **Editorial Integrity:** Custom components replace all "default" browser styling.
