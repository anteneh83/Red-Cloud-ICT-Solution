# RED CLOUD ICT SOLUTIONS PLC

# Website Modernization & Premium Corporate Experience

## 1. PROJECT OBJECTIVE

Redesign and modernize the existing Red Cloud ICT Solutions PLC website:

https://redcloud.com.et/

The existing website is an older/basic corporate website. The goal is to transform it into a:

* Premium
* Modern
* Professional
* Enterprise-grade
* Visually impressive
* Highly responsive
* Fast
* Accessible
* SEO-friendly
* Interactive
* Technology-focused

website that represents Red Cloud as a serious ICT, cloud, software, infrastructure, fintech, and digital transformation company.

IMPORTANT:

This is NOT a complete content replacement.

The existing legitimate content MUST remain available.

The task is to:

1. Preserve existing company information.
2. Improve its presentation.
3. Reorganize it into a better information architecture.
4. Add modern sections around it.
5. Make the website visually impressive.
6. Prepare the architecture for additional content that will be added later.
7. Do not invent company facts, customers, statistics, partnerships, products, awards, certifications, or claims.

---

# 2. EXISTING WEBSITE CONTENT THAT MUST BE PRESERVED

The current website contains the following important content:

## Company

Red Cloud ICT Solutions PLC

Established in 2022.

Existing positioning:

"Take Your Business Online"

Existing description:

"Empowering businesses with cutting-edge technology solutions to drive efficiency, growth, and success."

Existing About content:

"Welcome to Red Cloud ICT Solutions PLC, your trusted partner in digital transformation. Established in 2022, we are a leading force in the ICT industry, committed to innovation, quality, and customer satisfaction."

Existing Mission:

"Empowering businesses with cutting-edge technology solutions to drive efficiency, growth, and success."

Existing Commitment:

"Aligning with the country's digital strategy and policy, we continuously strive to provide innovative solutions that exceed our clients' expectations."

## Existing Services

These MUST remain:

1. Data Center & Hosting
2. E-Commerce
3. Financial Technology | FinTech
4. Virtual Internet Service Provider | VISP
5. Sales Automation

## Existing Contact Information

Address:

Ethiopian IT Park, Goro Road to Tulu Dimtu

Phone:

8025

Email:

[admin@redcloud.com.et](mailto:admin@redcloud.com.et)

Do not delete or silently replace existing information.

If newer company-approved information becomes available later, structure the application so the content can easily be updated.

---

# 3. IMPORTANT CONTENT RULE

Do NOT invent:

* Customer numbers
* Employee numbers
* Revenue
* Transaction numbers
* Awards
* Certifications
* Partner relationships
* Government contracts
* Product claims
* Technology claims
* Security certifications
* SLA percentages
* Uptime percentages
* Market position claims
* "Largest" / "Best" / "#1" claims
* Fake testimonials
* Fake case studies

If content is unavailable, create a clearly marked content placeholder that can be replaced later.

Example:

[CLIENT LOGOS WILL BE ADDED]

NOT:

"Trusted by 500+ companies"

unless that number is provided and approved.

---

# 4. CORE DESIGN DIRECTION

The visual direction should be:

## "Premium African Enterprise Technology"

Red Cloud should NOT look like:

* A generic WordPress website
* A cheap template
* A simple SaaS landing page
* A cryptocurrency website
* A gaming website
* An overly futuristic cyberpunk website

It should feel like a serious enterprise technology company.

Think:

* Enterprise ICT
* Cloud infrastructure
* Data centers
* Software platforms
* Digital transformation
* FinTech
* Networking
* Automation
* African technology ecosystem

The design should communicate:

TRUST
+
TECHNOLOGY
+
INFRASTRUCTURE
+
INNOVATION
+
SCALE

---

# 5. VISUAL STYLE

Use a sophisticated dark/light visual system.

Primary direction:

* Deep black
* Near-black
* White
* Soft gray
* Neutral surfaces
* Red Cloud brand accent

Do NOT use excessive blue.

The site should have strong contrast and premium typography.

Use:

* Large headings
* Strong visual hierarchy
* Generous whitespace
* Thin borders
* Subtle gradients
* Glass effects only where appropriate
* Soft shadows
* Rounded cards, but not excessively rounded
* High-quality imagery
* Subtle motion

Avoid:

* Excessive gradients
* Rainbow colors
* Huge glowing effects
* Excessive glassmorphism
* Excessive rounded cards
* Overly animated interfaces
* Visual clutter

---

# 6. TECHNOLOGY STACK

Use a modern production-ready frontend.

Preferred:

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui where useful

Use App Router if using Next.js.

Recommended libraries:

### Animation

Use:

* Framer Motion / Motion
* GSAP where advanced timeline animation is required

Do NOT animate everything.

Animations should support storytelling.

### 3D

Use:

* Three.js
* React Three Fiber
* @react-three/drei

Three.js should be used selectively.

Possible uses:

1. Hero background
2. Interactive cloud/network visualization
3. Digital infrastructure visualization
4. Data/network nodes
5. Subtle 3D globe
6. Interactive technology ecosystem

Do NOT create a heavy 3D scene that destroys performance.

The 3D experience should degrade gracefully on:

* Mobile
* Low-end computers
* Reduced-motion users

Example concept:

A subtle 3D network/cloud infrastructure object behind the hero text.

The user should still be able to read the content clearly.

---

# 7. OTHER RECOMMENDED LIBRARIES

Consider:

* Lucide React for icons
* Lenis for smooth scrolling
* Embla Carousel or Swiper for carousels
* React Hook Form for forms
* Zod for form validation
* next/image for image optimization
* next/font for typography
* clsx / tailwind-merge for class management

Only install libraries that provide real value.

Avoid dependency bloat.

---

# 8. PERFORMANCE REQUIREMENT

This is extremely important.

The website MUST feel fast.

Do not sacrifice performance for visual effects.

Requirements:

* Lazy-load heavy 3D components.
* Lazy-load below-the-fold images.
* Use dynamic imports for Three.js.
* Avoid loading Three.js on pages that do not need it.
* Optimize all images.
* Use WebP/AVIF where appropriate.
* Avoid giant background videos.
* Avoid excessive JavaScript.
* Prefer CSS animation for simple effects.
* Respect prefers-reduced-motion.
* Avoid layout shifts.
* Keep initial page load lightweight.

The homepage must remain usable even if:

* WebGL is unavailable
* JavaScript is slow
* The device is low-end
* The network is slow

Provide fallback visuals.

---

# 9. RESPONSIVE DESIGN

The website MUST be fully responsive.

Required breakpoints:

* Small mobile
* Mobile
* Tablet
* Laptop
* Desktop
* Large desktop

Do not simply shrink desktop layouts.

Design mobile layouts intentionally.

Mobile requirements:

* Hamburger navigation
* Large but readable typography
* Touch-friendly buttons
* Proper spacing
* No horizontal overflow
* 3D effects reduced or disabled when necessary
* Cards become vertical
* Navigation becomes a mobile drawer
* Contact forms remain usable
* Images remain optimized

Test at approximately:

320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px

---

# 10. GLOBAL WEBSITE STRUCTURE

Create the following architecture:

/

├── Home

├── About

├── Solutions

│   ├── Data Center & Hosting
│   ├── E-Commerce
│   ├── FinTech
│   ├── VISP
│   └── Sales Automation

├── Products

├── Industries

├── Partners

├── Insights

│   ├── News
│   ├── Blog
│   └── Announcements

├── Careers

└── Contact

Not every page needs to be fully populated immediately.

Create a scalable architecture so content can be added later.

---

# 11. HEADER / NAVIGATION

Create a premium sticky header.

Desktop:

RED CLOUD logo

Home
About
Solutions
Products
Industries
Partners
Insights
Careers
Contact

CTA:

"Let's Talk"

Header behavior:

* Transparent over hero initially
* Changes to solid/glass surface on scroll
* Smooth transition
* Subtle border
* Remains readable over backgrounds

Do not make the header too tall.

---

# 12. HERO SECTION

The hero is the most important visual section.

Do NOT simply recreate:

"Take Your Business Online"

as a plain heading.

Keep the existing phrase available but modernize the presentation.

Recommended concept:

Eyebrow:

RED CLOUD ICT SOLUTIONS PLC

Main heading:

BUILDING THE DIGITAL
INFRASTRUCTURE
FOR TOMORROW

Supporting text:

Technology, infrastructure and intelligent digital solutions that help businesses operate smarter, scale faster and transform with confidence.

Primary CTA:

Explore Our Solutions

Secondary CTA:

Talk to Red Cloud

Existing phrase:

"Take Your Business Online"

can appear as supporting positioning/tagline rather than dominating the hero.

---

# 13. HERO 3D EXPERIENCE

Create a subtle Three.js / React Three Fiber visual.

Concept:

A digital infrastructure network.

Visual elements:

* Floating nodes
* Connecting lines
* Cloud-like geometry
* Small data particles
* Server/network-inspired forms
* Subtle orbital motion
* Depth
* Ambient movement

The 3D object should communicate:

CONNECTED
SCALABLE
DIGITAL
INFRASTRUCTURE

Do not create a literal cartoon cloud.

Keep the 3D visual abstract and premium.

Interaction:

* Mouse movement subtly influences camera/object
* Very slow autonomous animation
* No aggressive spinning
* No distracting movement

Mobile:

Use simplified animation or static fallback.

---

# 14. TRUST / METRICS SECTION

Immediately after the hero, create a compact credibility section.

Example:

"Technology built for real businesses."

Possible metrics:

Customers
Solutions
Partners
Team

BUT:

Only display numerical values when verified.

Until then, use placeholders:

[Customer Count]
[Solutions Count]
[Partner Count]
[Team Count]

Do not fabricate numbers.

---

# 15. ABOUT SECTION

Create a premium "Who We Are" section.

Layout:

Left:
Large visual / company image / video

Right:
About text

Heading:

WHO WE ARE

Use the existing company description.

Add:

Established in 2022.

Then visually separate:

Mission
Commitment

Use cards or split sections.

---

# 16. ABOUT VISUAL

Do not use generic office stock imagery if avoidable.

Prefer:

* Actual Red Cloud office
* Actual team
* Data center
* Infrastructure
* Product screenshots
* Company activities

If real images are unavailable, use tasteful technology imagery temporarily.

Mark placeholders clearly so they can be replaced later.

---

# 17. SERVICES / SOLUTIONS

Rename the section visually to:

OUR SOLUTIONS

Keep the existing services.

Create premium interactive cards.

Cards:

01
DATA CENTER & HOSTING

02
E-COMMERCE

03
FINANCIAL TECHNOLOGY

04
VISP

05
SALES AUTOMATION

Each card should have:

* Number
* Icon
* Title
* Short description
* Arrow
* Hover animation

Hover:

* Card slightly moves
* Border accent appears
* Icon animates
* Background changes subtly

Do not make every card bounce.

---

# 18. SOLUTIONS INTERACTION

Consider a horizontal or asymmetric layout.

Example:

Large active solution card on left.

Smaller navigation cards on right.

Clicking a solution updates the main visual/content.

Desktop:

Interactive.

Mobile:

Convert into vertical cards or accordion.

---

# 19. DATA CENTER & HOSTING PAGE

Create a dedicated page architecture.

Sections:

Hero
Overview
Infrastructure
Capabilities
Benefits
Technology
CTA

Do not invent infrastructure specifications.

Use placeholders where necessary.

Example:

"[Infrastructure capabilities to be provided by Red Cloud]"

---

# 20. E-COMMERCE PAGE

Create:

Hero
Overview
Platform capabilities
Customer experience
Business benefits
Integrations
Product screenshots
CTA

If Hulubeje is officially approved as a Red Cloud product, it can later be featured here.

Do not invent information.

---

# 21. FINTECH PAGE

Create:

Hero
Digital payments
Financial technology
Integration capabilities
Security
Scalability
Use cases
CTA

Do not make unsupported regulatory or security claims.

---

# 22. VISP PAGE

Create:

Hero
Connectivity
Infrastructure
Network capabilities
Business benefits
Coverage
CTA

Use actual technical information when provided.

---

# 23. SALES AUTOMATION PAGE

Create:

Hero
Automation
Workflow
Analytics
Business efficiency
Integration
CTA

---

# 24. PRODUCTS SECTION

Create a dedicated product showcase.

Use large product cards.

Each product:

Product image/screenshot
Name
Category
Short description
Key capabilities
Learn More

Do not invent products.

Use placeholders until the official product list is provided.

---

# 25. INDUSTRIES SECTION

Create an industry ecosystem section.

Potential categories:

* Financial Services
* Retail
* E-Commerce
* Enterprise
* Telecommunications
* Government
* SMEs

IMPORTANT:

Only publish categories that Red Cloud confirms.

Use visual icons and interactive cards.

---

# 26. WHY RED CLOUD

Create a premium section:

WHY RED CLOUD

Potential principles:

Innovation
Reliability
Security
Scalability
Local Expertise
Customer Focus

These should be derived from approved company messaging.

Do not make unsupported superlative claims.

Visual:

Large statement on one side.

Animated vertical list on the other.

---

# 27. TECHNOLOGY ECOSYSTEM

Create a section explaining Red Cloud's technology capabilities.

Possible visual:

Infrastructure
↓
Cloud
↓
Platforms
↓
Applications
↓
Automation
↓
Business

Use an interactive animated diagram.

This is an excellent place for subtle Three.js or SVG animation.

Do NOT turn this into a generic "technology stack" containing random programming languages.

The website represents the company, not the developer stack.

---

# 28. CASE STUDIES

Create a scalable case study section.

Example card:

PROJECT
CLIENT
INDUSTRY

Problem

Solution

Impact

Technologies

Learn More

IMPORTANT:

Do not invent case studies.

Use:

"Case studies coming soon"

if content has not been provided.

---

# 29. PARTNERS

Create:

OUR PARTNERS

Logo wall.

Use only officially approved logos.

Add subtle infinite scrolling if there are many logos.

Do not make logos overly large.

If no logos are provided:

[Partner logos will be added]

---

# 30. CUSTOMERS / TRUST

Create:

TRUSTED BY BUSINESSES

Use approved customer logos.

Do not create fake logos.

Do not display customer names without authorization.

---

# 31. INSIGHTS

Create a modern content section.

Categories:

News
Technology
Company Updates
Case Studies
Announcements

Cards should contain:

Image
Category
Date
Title
Excerpt
Read More

Use realistic placeholders only during development.

---

# 32. CAREERS

Create a Careers page.

Potential content:

Build technology with us.

Open Positions

Engineering
Product
Operations
Sales
Marketing
Support

Do not invent job openings.

Use:

"Open positions will be published here."

until actual vacancies are supplied.

---

# 33. CONTACT SECTION

Create a strong CTA before the footer.

Heading:

LET'S BUILD SOMETHING GREAT TOGETHER

Supporting text:

Have a technology challenge, business requirement, or new idea?

Let's start a conversation.

CTA:

Talk to Red Cloud

Then contact form.

Fields:

Name
Email
Subject
Message

Use:

React Hook Form
+
Zod

Validation:

Name required
Valid email
Subject required
Message required

Provide clear error messages.

---

# 34. CONTACT INFORMATION

Preserve:

Ethiopian IT Park, Goro Road to Tulu Dimtu

8025

[admin@redcloud.com.et](mailto:admin@redcloud.com.et)

Also structure the application so additional:

Phone
Email
Social links
Map
Office hours

can be added later.

---

# 35. GOOGLE MAP

Preserve the existing map functionality.

Improve its presentation.

Use:

* Rounded container
* Proper responsive aspect ratio
* Subtle border
* Loading fallback

Do not let the map dominate the contact section.

---

# 36. FOOTER

Create a premium enterprise footer.

Structure:

RED CLOUD

Short company description.

Solutions

* Data Center & Hosting
* E-Commerce
* FinTech
* VISP
* Sales Automation

Company

* About
* Careers
* Insights
* Contact

Resources

* Products
* Case Studies
* Partners

Social

* LinkedIn
* Telegram
* Other approved social platforms

Contact

* Address
* Phone
* Email

Bottom:

© Red Cloud ICT Solutions PLC
All Rights Reserved.

Include:

Privacy Policy
Terms & Conditions

Do not create fake policy content.

---

# 37. MICRO-INTERACTIONS

Use tasteful animations.

Examples:

Buttons:

Arrow moves slightly on hover.

Cards:

Small translateY.

Images:

Very subtle scale.

Navigation:

Smooth active state.

Section:

Fade/slide when entering viewport.

Numbers:

Count-up animation only when actual numbers exist.

Avoid:

* excessive bouncing
* excessive scaling
* spinning icons
* annoying cursor effects
* animation everywhere

---

# 38. SCROLL EXPERIENCE

Use smooth scrolling.

Potential library:

Lenis

But ensure:

* Accessibility
* Keyboard navigation
* Reduced motion
* Mobile performance

Do not hijack scrolling.

---

# 39. PAGE TRANSITIONS

If using Next.js, implement subtle page transitions.

Keep them fast.

Maximum perceived transition:

approximately 200–400ms.

Do not make users wait for decorative animations.

---

# 40. CUSTOM CURSOR

Optional.

Only use a custom cursor on desktop.

Never use it on mobile.

If implemented:

* Small
* Minimal
* Fast
* Accessible

If it affects usability, remove it.

---

# 41. 3D PERFORMANCE STRATEGY

Three.js must NOT be loaded globally.

Use:

dynamic import

and client-only components where necessary.

Example architecture:

components/
3d/
HeroScene.tsx
NetworkScene.tsx
CloudScene.tsx

Load:

HeroScene

only when required.

Provide:

HeroFallback

for devices where WebGL is unavailable.

Check:

prefers-reduced-motion

and reduce animation accordingly.

---

# 42. IMAGE STRATEGY

Use next/image.

Never use huge unoptimized images.

Use:

AVIF/WebP

where appropriate.

Images should have:

* width
* height
* alt
* responsive sizing

Do not use meaningless alt text.

---

# 43. ACCESSIBILITY

The website MUST meet modern accessibility expectations.

Requirements:

* Semantic HTML
* Keyboard navigation
* Visible focus states
* Accessible buttons
* Accessible forms
* Proper labels
* Proper heading hierarchy
* ARIA only when necessary
* Sufficient contrast
* Reduced motion support
* No information conveyed only through color

Test keyboard navigation.

---

# 44. SEO

Implement:

Title
Meta description
Open Graph
Twitter/X metadata
Canonical URLs
Robots
Sitemap
Structured data where appropriate

Homepage title:

Red Cloud ICT Solutions PLC | Digital Transformation & Technology Solutions

Create appropriate metadata for every page.

Use Organization structured data if the required information is available.

Do not invent structured-data fields.

---

# 45. FAVICON / BRANDING

Use the official Red Cloud logo.

Create:

* favicon
* apple icon
* OG image
* social sharing image

Do not redesign the company logo unless explicitly requested.

---

# 46. DESIGN SYSTEM

Create reusable tokens.

Example:

colors:
background
foreground
muted
border
accent
accent-hover

spacing:
section
container
card

radius:
sm
md
lg

shadows:
subtle
elevated

Typography should have:

Display
Heading
Body
Caption

Do not hard-code random styles throughout components.

---

# 47. COMPONENT ARCHITECTURE

Create reusable components.

Example:

components/

├── layout/
│   ├── Header
│   ├── Footer
│   └── Container
│
├── hero/
│   ├── Hero
│   └── HeroScene
│
├── about/
│   ├── AboutSection
│   ├── Mission
│   └── Commitment
│
├── solutions/
│   ├── SolutionCard
│   ├── SolutionGrid
│   └── SolutionShowcase
│
├── products/
├── industries/
├── partners/
├── case-studies/
├── insights/
├── contact/
│
├── ui/
│
└── 3d/

Do not create one giant page component.

---

# 48. DATA-DRIVEN CONTENT

Avoid hardcoding repeated content directly into JSX.

Example:

solutions.ts

should contain:

[
{
title,
description,
icon,
href
}
]

This makes it easy for Red Cloud to add new services later.

Do the same for:

Products
Industries
Partners
Insights
Case Studies
Careers

---

# 49. CMS-READY ARCHITECTURE

The first implementation does not necessarily need a CMS.

However, structure the content so a CMS can be introduced later.

Avoid tightly coupling content and presentation.

Future CMS candidates:

* Sanity
* Strapi
* Payload CMS
* Contentful

Do not install a CMS unless explicitly requested.

---

# 50. DARK / LIGHT MODE

If implemented:

Dark mode should be the primary premium experience.

Light mode should remain polished.

Do not simply invert colors.

Each mode should have intentional:

* backgrounds
* surfaces
* borders
* typography
* shadows

Persist preference.

Respect system preference.

---

# 51. MOBILE NAVIGATION

Mobile header:

Logo
Menu button

Menu opens a full-height or large drawer.

Items:

Home
About
Solutions
Products
Industries
Partners
Insights
Careers
Contact

CTA:

Let's Talk

Animation should be smooth but fast.

Prevent body scrolling while menu is open.

---

# 52. ERROR / LOADING STATES

Every dynamic area should have appropriate states.

Examples:

Loading
Empty
Error

Do not display broken UI.

---

# 53. FORM UX

Contact form:

* Validate on interaction appropriately
* Show errors clearly
* Disable submit while sending
* Show loading state
* Show success state
* Show failure state
* Prevent duplicate submission

Never expose sensitive API keys in frontend code.

---

# 54. SECURITY

Do not:

* expose API keys
* expose secrets
* put private credentials in NEXT_PUBLIC variables
* trust client-side validation alone

If a backend endpoint is added later:

validate server-side as well.

---

# 55. PERFORMANCE TARGET

Target:

Lighthouse:

Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+

These are targets, not reasons to compromise functionality.

Particular attention:

* LCP
* CLS
* INP
* image optimization
* JavaScript bundle size

---

# 56. BROWSER SUPPORT

Ensure good behavior on modern:

Chrome
Edge
Firefox
Safari

Desktop and mobile browsers.

---

# 57. REDUCED MOTION

Respect:

prefers-reduced-motion: reduce

When enabled:

* disable parallax
* reduce 3D movement
* remove unnecessary transitions
* simplify animations

The site must remain fully usable.

---

# 58. VISUAL STORYTELLING

The homepage should feel like a journey:

1. WHO IS RED CLOUD?
2. WHAT DOES RED CLOUD DO?
3. WHY DOES IT MATTER?
4. WHAT SOLUTIONS ARE AVAILABLE?
5. WHAT TECHNOLOGY POWERS THEM?
6. WHO DOES RED CLOUD SERVE?
7. WHAT HAS RED CLOUD BUILT?
8. WHY TRUST RED CLOUD?
9. HOW CAN I CONTACT RED CLOUD?

Do not simply stack unrelated sections.

Every section should lead naturally to the next.

---

# 59. HOMEPAGE ORDER

Recommended final order:

01 Header

02 Hero

03 Trust / Metrics

04 About Red Cloud

05 Mission & Commitment

06 Solutions

07 Technology Ecosystem

08 Products

09 Industries

10 Why Red Cloud

11 Case Studies

12 Partners / Customers

13 Insights

14 CTA

15 Contact

16 Footer

Not every section needs to be visible if content is unavailable.

Empty sections should not look empty.

---

# 60. VISUAL QUALITY BAR

The finished website should feel comparable in polish to a modern:

* enterprise technology company
* cloud infrastructure company
* fintech platform
* global software company

It should NOT feel like:

* a university project
* a basic Bootstrap template
* a generic Tailwind landing page
* an AI-generated template
* a portfolio website

Pay attention to:

Typography
Spacing
Grid
Alignment
Motion
Imagery
Consistency
Responsiveness
Performance

---

# 61. DO NOT OVERDESIGN

Important:

Professional ≠ more animations.

Professional ≠ more gradients.

Professional ≠ more 3D.

Professional ≠ more colors.

The design should be restrained.

Use 3D where it creates visual identity.

Use animations where they improve comprehension.

Use whitespace aggressively.

---

# 62. CONTENT EXPANSION READY

The website is expected to receive additional content later.

Therefore, design the architecture so these can easily be added:

* New services
* New products
* New customers
* New partners
* New industries
* Case studies
* News
* Blog posts
* Careers
* Team members
* Company statistics
* Certifications
* Awards
* Testimonials

Adding a new service should NOT require redesigning the entire page.

---

# 63. CURRENT INFORMATION TO VERIFY BEFORE PUBLISHING

Public Red Cloud channels currently contain additional information that may be useful during content gathering, including references to SaaS/IaaS/PaaS and 800+ customers.

However:

DO NOT automatically publish these claims.

Treat them as content leads that require approval.

Likewise, public posts reference products such as Hulubeje and enterprise work around CNET/ERP.

These can be considered for future sections only after official confirmation.

---

# 64. DEVELOPMENT PROCESS

Do NOT immediately build everything at once.

Follow this order:

PHASE 1

Inspect existing project.

Determine:

* framework
* folder structure
* existing assets
* existing logo
* current dependencies
* deployment configuration

Do not destroy existing working functionality.

PHASE 2

Create design system.

PHASE 3

Create header + hero.

PHASE 4

Create homepage sections.

PHASE 5

Create responsive layouts.

PHASE 6

Add animation.

PHASE 7

Add Three.js selectively.

PHASE 8

Create inner pages.

PHASE 9

SEO/accessibility.

PHASE 10

Performance optimization.

PHASE 11

Final QA.

---

# 65. IMPORTANT: PRESERVE EXISTING PROJECT

Before making major changes:

Create a safe Git checkpoint.

Do not delete existing code blindly.

Do not remove existing content.

Do not remove working functionality simply because it is visually old.

Refactor when necessary.

---

# 66. FINAL QA CHECKLIST

Before considering the project complete:

## Visual

[ ] Looks professional

[ ] Looks like an enterprise ICT company

[ ] No template-like appearance

[ ] Typography is consistent

[ ] Spacing is consistent

[ ] Colors are consistent

[ ] Animations are subtle

[ ] 3D is tasteful

## Responsive

[ ] 320px

[ ] 375px

[ ] 390px

[ ] 430px

[ ] 768px

[ ] 1024px

[ ] 1280px

[ ] 1440px

[ ] 1920px

## Functional

[ ] Navigation works

[ ] Mobile menu works

[ ] All CTAs work

[ ] Contact form works

[ ] Form validation works

[ ] Links work

[ ] Internal routes work

[ ] Footer links work

## Accessibility

[ ] Keyboard navigation

[ ] Focus states

[ ] Alt text

[ ] Form labels

[ ] Contrast

[ ] Reduced motion

## Performance

[ ] Three.js lazy loaded

[ ] Images optimized

[ ] No unnecessary dependencies

[ ] No console errors

[ ] No hydration errors

[ ] No layout shift

[ ] Lighthouse tested

## SEO

[ ] Metadata

[ ] Open Graph

[ ] Sitemap

[ ] Robots

[ ] Canonical URLs

[ ] Structured data where appropriate

---

# 67. MOST IMPORTANT DESIGN PRINCIPLE

The website should communicate this feeling within the first 5 seconds:

"Red Cloud is a serious technology company that builds and operates real digital infrastructure and business solutions."

The visitor should immediately understand:

WHO:
Red Cloud ICT Solutions PLC

WHAT:
Technology, infrastructure and digital solutions

WHY:
Helping businesses operate, grow and transform

WHERE:
Ethiopia / African digital ecosystem

ACTION:
Explore solutions / Start a conversation

---

# 68. FINAL IMPLEMENTATION RULE

Do not just make the current website "prettier."

Rebuild the experience around:

CONTENT
+
DESIGN
+
MOTION
+
TECHNOLOGY
+
PERFORMANCE
+
RESPONSIVENESS

The final result should look intentionally designed, not AI-generated.

Every visual effect must have a purpose.

Every section must communicate something useful.

Every animation must remain subordinate to the content.

Every component must be reusable.

Every page must work on mobile.

Every important piece of existing company content must remain accessible.

Build a website that Red Cloud can continue expanding for years.
