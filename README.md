# 🧠 devs-prompt

**Transform your raw ideas into world-class developer prompts.**

A futuristic Next.js application powered by AI that transforms raw, informal prompts into precise, professional technical specifications following software engineering best practices.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?style=flat-square&logo=tailwindcss)

---

## ✨ Features

### 🎯 AI-Powered Enhancement
- Transforms casual prompts into professional technical specifications
- Uses **ChatGPT-42** via RapidAPI for intelligent processing
- **Always outputs in English**, regardless of input language
- Follows enterprise-level software engineering standards

### 🎨 Futuristic 3D UI
- Interactive **3D particle background** with 2000+ particles
- **Glassmorphism** design with neon orange/gold accents
- Smooth **Framer Motion** animations
- **React Three Fiber** powered 3D graphics

### ⚡ Real-Time Processing
- Fast API response with beautiful loading animations
- 3D energy sphere with rotating effects during processing
- Dynamic loading messages

### 📊 Smart Comparison
- **Side-by-side view** on desktop (stacked on mobile)
- Before/after comparison with statistics
- Character count and improvement percentage
- Scrollable content areas with custom dark scrollbar

### 📋 Developer-Friendly
- **One-click copy** to clipboard
- Fully **responsive** design (mobile, tablet, desktop)
- **Accessible** with ARIA labels and keyboard navigation
- Clean, modern UI with optimal UX

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ installed
- **npm** or **yarn** package manager
- **RapidAPI account** (optional - test key included)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/bagaspra16/devs-prompt.git
cd devs-prompt
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

The `.env.example` already contains a test API key:
```env
RAPIDAPI_KEY=18c4b2fd16msh32d393319e95b02p1ebdb6jsncda25d8eb8d3
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🎮 How to Use

### Step 1: Enter Your Prompt
Type any raw idea or prompt in any language:
```
buat halaman login pakai react
```
or
```
create a todo app
```

### Step 2: Click "Enhance Prompt"
Watch the beautiful 3D loading animation while AI processes your request.

### Step 3: View Results
See your enhanced prompt with:
- Professional technical specifications
- Detailed requirements
- Implementation guidelines
- Testing strategies
- Security considerations

### Step 4: Copy & Use
Click "Copy Result" to copy the enhanced prompt to your clipboard.

### Step 5: Compare (Optional)
Click "Show Comparison" to see before/after side-by-side.

---

## 📊 Example Transformation

### Input (Casual)
```
buat api untuk user management
```

### Output (Professional)
```
OBJECTIVE:
Develop a production-ready RESTful API for comprehensive user management 
with authentication, authorization, and CRUD operations following industry 
best practices.

REQUIREMENTS:

1. API Architecture
   - Implement RESTful API design principles
   - Use proper HTTP methods (GET, POST, PUT, PATCH, DELETE)
   - Follow REST naming conventions for endpoints
   - Implement API versioning (e.g., /api/v1/)

2. User Management Endpoints
   - POST /api/v1/users - Create new user
   - GET /api/v1/users - List all users (with pagination)
   - GET /api/v1/users/:id - Get user by ID
   - PUT /api/v1/users/:id - Update user
   - DELETE /api/v1/users/:id - Delete user
   - POST /api/v1/users/login - User authentication
   - POST /api/v1/users/logout - User logout
   - POST /api/v1/users/refresh - Refresh access token

3. Authentication & Authorization
   - Implement JWT-based authentication
   - Use bcrypt for password hashing (cost factor 12)
   - Implement role-based access control (RBAC)
   - Add middleware for route protection
   - Implement refresh token rotation

... (continues with detailed specifications)
```

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript 5** - Type-safe development
- **TailwindCSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Three Fiber** - 3D graphics with Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Lucide React** - Modern icon library

### Backend/API
- **Next.js API Routes** - Serverless functions
- **RapidAPI ChatGPT-42** - AI-powered prompt enhancement
- **Native Fetch API** - HTTP client (no external dependencies)

### Development
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## 📁 Project Structure

```
devs-prompt/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── enhance/
│   │   │       └── route.ts          # API endpoint for AI processing
│   │   ├── layout.tsx                # Root layout with 3D background
│   │   ├── page.tsx                  # Main application page
│   │   └── globals.css               # Global styles
│   ├── components/
│   │   ├── Background3D.tsx          # 3D particle background
│   │   ├── LoadingScene.tsx          # 3D loading animation
│   │   ├── Navbar.tsx                # Navigation bar
│   │   ├── PromptForm.tsx            # Input form component
│   │   ├── PromptResult.tsx          # Results display component
│   │   └── Footer.tsx                # Footer with credits
│   ├── lib/
│   │   └── utils.ts                  # Utility functions
│   └── styles/
│       └── globals.css               # Custom CSS and Tailwind
├── public/
│   └── favicon.ico                   # App icon
├── .env.example                      # Environment variables template
├── package.json                      # Dependencies and scripts
├── tailwind.config.ts                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
├── next.config.mjs                   # Next.js configuration
└── README.md                         # This file
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
RAPIDAPI_KEY=your_rapidapi_key_here
```

**Get your RapidAPI key:**
1. Sign up at [RapidAPI](https://rapidapi.com)
2. Subscribe to [ChatGPT-42 API](https://rapidapi.com/rphrp1985/api/chatgpt-42)
3. Copy your API key
4. Replace in `.env`

### Customization

**Colors** (`tailwind.config.ts`):
```typescript
colors: {
  neon: {
    orange: "#FF8C42",  // Primary accent
    gold: "#FFD700",    // Secondary accent
  },
}
```

**System Prompt** (`src/app/api/enhance/route.ts`):
Modify the `systemPrompt` variable to change AI behavior.

**3D Particles** (`src/components/Background3D.tsx`):
Adjust particle count, size, and behavior.

---

## 🎨 Design System

### Color Palette
- **Background**: Black (#000000)
- **Surface**: Deep Gray (rgba(255,255,255,0.05))
- **Primary**: Neon Orange (#FF8C42)
- **Secondary**: Neon Gold (#FFD700)
- **Text**: White (#FFFFFF)
- **Muted**: Gray-400

### Typography
- **Display**: Space Grotesk (headings)
- **Body**: Inter (content)
- **Mono**: System monospace (code)

### Effects
- **Glassmorphism**: Backdrop blur with transparency
- **Neon Glow**: Text shadow with color spread
- **Smooth Animations**: 200-300ms transitions
- **3D Depth**: Layered elements with blur

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Deploy to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your repository
- Add environment variable: `RAPIDAPI_KEY`
- Deploy!

### Other Platforms

**Netlify:**
```bash
npm run build
# Deploy the .next folder
```

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🧪 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

### Code Quality

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended rules
- **Prettier**: Code formatting (optional)
- **Git Hooks**: Pre-commit linting (optional)

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (stacked layout)
- **Tablet**: 640px - 1024px (adaptive)
- **Desktop**: > 1024px (side-by-side)
- **Large**: > 1280px (max width 1280px)

### Mobile Optimizations
- Stacked comparison view
- Reduced padding and spacing
- Smaller font sizes
- Full-width buttons
- Touch-friendly tap targets (44x44px minimum)
- Reduced 3D particle count for performance

---

## 🔒 Security

### Implemented
- ✅ Environment variables for API keys
- ✅ Server-side API calls (keys not exposed to client)
- ✅ Input validation and sanitization
- ✅ HTTPS-only in production
- ✅ No sensitive data in client bundle

### Recommendations
- Use your own RapidAPI key for production
- Implement rate limiting
- Add user authentication if needed
- Monitor API usage
- Set up error tracking (Sentry, etc.)

---

## 🐛 Troubleshooting

### API Key Issues
**Problem**: "RapidAPI key not configured"
**Solution**: Check `.env` file exists with `RAPIDAPI_KEY`

### Port Already in Use
**Problem**: Port 3000 is already in use
**Solution**: Next.js will automatically use port 3001, 3002, etc.

### 3D Graphics Not Showing
**Problem**: Black screen or no 3D effects
**Solution**: 
- Use a modern browser (Chrome, Firefox, Safari)
- Enable WebGL in browser settings
- Check GPU acceleration is enabled

### Slow Performance
**Problem**: Laggy animations
**Solution**:
- Reduce particle count in `Background3D.tsx`
- Disable 3D effects on low-end devices
- Use production build (`npm run build`)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow existing code style
- Add TypeScript types for new code
- Test on multiple screen sizes
- Update README if needed
- Keep commits atomic and descriptive

---

## 🙏 Acknowledgments

- **RapidAPI** - For ChatGPT-42 API access
- **Three.js Community** - For amazing 3D graphics library
- **Next.js Team** - For the incredible React framework
- **Vercel** - For seamless deployment platform
- **Open Source Community** - For all the amazing tools

---

## 👨‍💻 Author

**bagaspra16**

- Portfolio: [bagaspra16-portfolio.vercel.app](https://bagaspra16-portfolio.vercel.app/)
- GitHub: [@bagaspra16](https://github.com/bagaspra16)
- LinkedIn: [bagas-pratama-junianika](https://linkedin.com/in/bagas-pratama-junianika)

---

## ⭐ Show Your Support

If you find this project helpful, please give it a ⭐ on GitHub!

---

**Built with ❤️ by developers, for developers.**

*Transform your ideas into professional prompts - because great code starts with great prompts.*
