# Discover Sumur | Tourism in Nubra Valley, Ladakh

> **"Discover the Beauty, Culture and Peace of Ladakh."**

Discover Sumur is a modern, premium tourism web platform designed for Sumur Village in Nubra Valley, Ladakh, India. Built with React 19, TypeScript, and Tailwind CSS in a sleek Himalayan Dark/Black theme with warm gold accents.

---

## 🏔️ Highlights & Dedicated Pages

1. **Home (`#home`)**: Atmospheric Hero with mountain silhouettes, altitude stats, dedicated feature cards, and "Where Nature Meets Tradition" village welcome narrative.
2. **Samstanling Monastery (`#monastery`)**: *NEW Dedicated Page* featuring the real photograph of Samstanling Gompa among the mountain slopes, its 19th-century Gelugpa founding by Lama Tsultim Nima, monastic art, and sacred decorum.
3. **Buddha Stupa & Park (`#stupa`)**: *NEW Dedicated Page* featuring the high-resolution photograph of Buddha Statue & Stupa against the mountains, the 5 Cosmic Elements of Buddhist stupas, Kora circumambulation practices, and verified records.
4. **Village Homestays (`#homestays`)**: *NEW Dedicated Page* featuring real photographs of authentic Ladakhi family homestays, garden retreats, traditional kitchen hearth (*Chansa*), eco-friendly dry-composting practices, and guest etiquette.
5. **Village & Heritage Trails (`#village`)**: *NEW Dedicated Page* featuring curated walking trails (Glacial Canal Yura walk, Old Village Earthen Architecture lane, Riverside Willow Grove trail, and Monastic Ascent).
6. **Explore & Attractions (`#explore`)**: Complete overview of Sumur's natural landscapes, Samstanling Gompa, Buddha Stupa, local picnic grove, and regional distinctions for Hunder sand dunes.
7. **Culture & Heritage (`#culture`)**: 4 cultural pillars (Ladakhi Traditions, Traditional Architecture, Local Food & Hospitality, Village Life) and 4 visitor experience modules.
8. **Travel Guide (`#guide`)**: Road route from Leh via Khardung La pass, mountain pass safety & weather preparedness, permit guidance, and Nubra destinations.
9. **Stay & Accommodation (`#stay`)**: Accommodation cards with property highlights and transparent status notices.
10. **Wayfinding & Map (`#map`)**: Geographic coordinates (`34.6342° N, 77.6388° E`), topographic route diagram, waypoint milestone inspector, and configurable Google Maps link.
11. **Moments Photo Gallery (`#gallery`)**: 8 photo slots with category filters and interactive fullscreen Lightbox viewer.
12. **Responsible Tourism & Contact (`#contact`)**: Leave No Trace ethics (7 principles), editable tourism inquiry desk configuration, and visitor inquiry dispatch form.

---

## 📸 Updating Images with Real Photographs

**No AI images are used in this website.** All photography is mapped through a single configuration file:

👉 `src/config/images.ts`

To replace any placeholder with a real photograph:
1. Open `src/config/images.ts`.
2. Locate the image entry (e.g., `samstanlingMonastery`, `heroPanorama`, `buddhaStupa`, etc.).
3. Paste your image URL into the `url` property:
   ```typescript
   samstanlingMonastery: {
     id: 'attr-samstanling-monastery',
     url: 'https://your-domain.com/photos/samstanling.jpg', // <-- Insert URL here
     alt: 'Samstanling Monastery (Gompa) against the rugged mountain slopes',
     caption: 'Samstanling Gompa in Sumur, Ladakh',
     credit: 'Your Name / Studio',
   }
   ```
4. Save the file. The website automatically swaps the placeholder with the high-resolution photograph and enables full-resolution viewing in the lightbox.

---

## 🛠️ Local Development

To run the application locally on your computer:

```bash
# 1. Install dependencies
npm install

# 2. Start the local Vite development server
npm run dev
```

Open `http://localhost:3000` in your web browser.

---

## 🚀 Building & Deploying to Netlify

The project is pre-configured with `netlify.toml` and `public/_redirects` for 1-click Netlify deployment.

### Option 1: Git-Connected Netlify Deployment (Recommended)
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Log in to [Netlify](https://app.netlify.com).
3. Click **"Add new site"** > **"Import an existing project"**.
4. Select your repository.
5. Netlify will auto-detect settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**.

### Option 2: Manual Build & Drop
```bash
# Generate the production build
npm run build
```
Drag and drop the generated `dist/` directory directly onto the Netlify Drop dashboard.

---

## ⚖️ Disclaimer
*Discover Sumur celebrates the natural beauty, culture, and heritage of Nubra Valley, Ladakh. This website is an independent informational tourism resource and not an official government portal.*
