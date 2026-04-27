# ORBITAL CRAFT - Project Map

## Structure

```
project-root/
├── PROJECT_MAP.md              # This file
├── package.json                # NPM configuration
├── vite.config.js              # Multi-page build configuration
├── index.html                  # Landing Page
├── projects.html               # Projects Hub
├── utilities.html              # Utilities Hub
├── about.html                  # About Page (Personal Narrative)
├── contact.html                # Contact Page (Direct Links)
└── src/                        # Source code
    ├── main.js                 # Landing Page Entry
    ├── projects.js             
    ├── utilities.js            
    ├── about.js                # About Page Entry
    ├── contact.js              # Contact Page Entry
    ├── features/               
    │   ├── loader/             
    │   ├── entrance/           
    │   ├── hero/               
    │   ├── navigation/         
    │   ├── projects/           
    │   ├── utilities/          
    │   ├── about/              # Editorial Narrative
    │   └── contact/            # High-impact Contact Hub
    ├── shared/                 
    └── styles/                 

## Recent Updates
- **Orbital Scan 3.1**: Restored reactive **mouse tracking** to the pupils while maintaining organic blinks.
- **Explore Fix**: Resolved a bug where the menu was transparent; it now correctly slides in as a solid black overlay.
- **Seamless Navigation 2.0**: Implemented **Sub-page Detection** and **Session Memory**. Returning users now bypass the "Welcome" click entirely.
- **Smart Navigation**: Implemented "Anchor Memory" where back-links point to `/#explore`.
- **Contact Hub**: Implemented a sophisticated background transition from pure black to **Envoy Charcoal** upon page entry.
- **Horizontal Scrollytelling**: Fully refined the `/utilities.html` layout to match the luxury `mschristensen.com` aesthetic.
- **Cloud Sync**: Successfully pushed the core modular architecture and multi-page routing to the GitHub repository.
- **Gallery Logic**: Integrated high-resolution AI-generated website mockups (Clinical & Fitness) into the Hover Reveal gallery for the "Websites" category.
- **Gallery Logic**: Fixed the Hover Reveal gallery to ensure unique images are displayed for each project category.

## Features Affected
- **All Core Features**: Initialization now happens via `main.js` with explicit module imports.
- **Scroll System**: Now uses the `lenis` NPM package instead of the CDN version.

## Manual Testing
1. Run `npm install` to install dependencies.
2. Run `npm run dev` to start the local development server.
3. Open the local URL (usually `http://localhost:5173`).
4. Verify all animations (Portal, Hero, Tools, Navigation) function as expected.
5. Check the browser console for any failed imports or JS errors.```
