# Christian Gonzales - Portfolio Website

A modern, interactive portfolio website showcasing Christian Gonzales' work, skills, and professional experience. Built with Next.js and powered by a headless CMS for dynamic content management.

## 🚀 Features

- **Dynamic Portfolio Showcase** - Display projects with filtering capabilities and lightbox view
- **Interactive Guest Book** - Visitors can leave comments with infinite scroll pagination
- **Contact Form** - Direct messaging system with form validation
- **Resume/Skills Section** - Display technical skills with visual progress indicators
- **Social Media Integration** - Links to various social platforms
- **Google Analytics** - Track visitor engagement and site statistics
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Smooth Animations** - Framer Motion animations and particle effects background
- **Static Export** - Can be exported as static HTML for deployment

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 13.4.7** - React framework with Pages Router
- **React 18.2.0** - UI library
- **TypeScript 4.8.3** - Type safety

### Styling & UI
- **Tailwind CSS 3.1.8** - Utility-first CSS framework
- **DaisyUI 2.33.0** - Tailwind CSS component library
- **Framer Motion 7.6.15** - Animation library
- **React Icons 4.4.0** - Icon library
- **Swiper 8.4.2** - Touch slider component

### Data Management
- **Apollo Client 3.7.1** - GraphQL client for state management
- **GraphQL 16.7.1** - Query language for API
- **Hygraph (GraphCMS)** - Headless CMS for content management

### Forms & Validation
- **React Hook Form 7.40.0** - Form validation and handling
- **React Hot Toast 2.4.0** - Toast notifications

### Additional Features
- **React TSParticles 2.3.2** - Particle effects for background
- **React Markdown 8.0.3** - Markdown rendering
- **React Infinite Scroll 6.1.0** - Infinite scrolling for guest book and works
- **React Loading Skeleton 3.1.0** - Loading state placeholders
- **Typewriter Effect 2.19.0** - Typing animation effect
- **Axios 1.3.2** - HTTP client
- **Google Analytics Data API 3.2.0** - Analytics integration

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Hygraph account for CMS (headless content management)

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Felix-Yamamoto
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Copy the content from `.env.example` to a new file named `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Update the following variables in `.env.local`:
   ```env
   NEXT_PUBLIC_HYGRAPH_URL=your_hygraph_content_api_url
   NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN=your_hygraph_auth_token
   ```

   **To get your Hygraph credentials:**
   - Go to your Hygraph project settings
   - Navigate to **Project Settings → Endpoints → Content API**
   - Copy the **Content API URL** for `NEXT_PUBLIC_HYGRAPH_URL`
   - Scroll down to **Permanent Auth Tokens** section
   - Create a new token and copy it for `NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN`

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
# or
yarn build
yarn start
```

### Static Export
```bash
npm run build
npm run export
# or
yarn build
yarn export
```
This generates a static site in the `out` directory.

## 📁 Project Structure

```
├── components/          # React components
│   ├── aboutPage/      # About section components
│   ├── contactPage/    # Contact form and location
│   ├── guestbookPage/  # Guest book functionality
│   ├── resumePage/     # Resume and skills display
│   ├── worksPage/      # Portfolio projects showcase
│   └── statistics/     # Social media links
├── graphqlOperations/  # GraphQL queries and mutations
├── pages/              # Next.js pages
├── public/             # Static assets
├── styles/             # Global styles
├── apollo-client.ts    # Apollo Client configuration
├── data.ts             # Static data (menus, social media)
└── types.d.ts          # TypeScript type definitions
```

## 🎨 Key Sections

1. **Profile** - Introduction and personal information
2. **Works** - Portfolio projects with category filtering
3. **Resume** - Skills, experience, and technical proficiencies
4. **Guest Book** - Interactive visitor comments section
5. **Contact** - Contact form and location information
6. **Links** - Social media and professional profiles

## 🔧 Configuration

### Google Analytics
Update the Google Analytics ID in `pages/_app.tsx`:
```typescript
gtag('config', 'YOUR-GA-ID');
```

### Tailwind Configuration
Customize theme colors and settings in `tailwind.config.js`

### DaisyUI Themes
Modify component themes in `tailwind.config.js` under the DaisyUI plugin section

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run export` - Export static HTML
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Firebase Hosting** (using static export)
- Any static hosting service (after running `npm run export`)

## 📄 License

Private project for Christian Gonzales

## 👨‍💻 Developer

Developed by Diablo Gato Developer

---

For more information about Next.js:
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
