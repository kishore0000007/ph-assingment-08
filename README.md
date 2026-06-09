# ☀️ SunCart

A modern full-stack e-commerce web application built with **Next.js 15**, featuring a sleek dark tech aesthetic, authentication, and a curated summer product catalog.

🔗 **Live Demo:** [summer-vibe-six.vercel.app](https://summer-vibe-six.vercel.app)

---

## ✨ Features

- 🛍️ **Product Catalog** — 12 curated summer essentials with category filtering
- 🔍 **Product Detail Pages** — Stock bar, quantity selector, add to cart with occasion selector
- 🔐 **Authentication** — Email/password sign up & login + Google OAuth via Better Auth
- 👤 **User Profile** — Avatar, session management, logout
- 📱 **Fully Responsive** — Mobile-first design with hamburger menu
- 🎨 **Dark UI** — Custom cyan/blue tech aesthetic with smooth animations
- ⚡ **Fast** — Static JSON data, no external API calls at runtime

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | JavaScript (JSX) |
| Styling | Inline CSS + Tailwind CSS |
| Auth | Better Auth |
| Database | MongoDB Atlas |
| UI Components | HeroUI |
| Icons | Lucide React, React Icons |
| Notifications | React Toastify |
| Deployment | Vercel |
| Package Manager | pnpm |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.js                  # Homepage
│   ├── shop/page.jsx            # Shop page
│   ├── products/[id]/page.jsx   # Single product page
│   ├── login/page.jsx           # Login page
│   ├── register/page.jsx        # Register page
│   ├── profile/page.jsx         # User profile page
│   ├── story/page.jsx           # Our story page
│   └── api/auth/[...all]/       # Better Auth API route
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── modules/
│   │   ├── Home/
│   │   │   ├── Banner.jsx
│   │   │   └── SignatureTreats.jsx
│   │   ├── Shop/
│   │   │   ├── ShopHeading.jsx
│   │   │   └── Products.jsx
│   │   └── SingleProduct/
│   │       └── SingleProduct.jsx
│   └── Shared/
│       └── ProductCard.jsx
└── lib/
    ├── auth.js
    ├── auth-client.js
    └── ThemeToggler.jsx
public/
└── data.json                    # Product data
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- MongoDB Atlas account
- Google OAuth credentials

### Installation

```bash
# Clone the repo
git clone https://github.com/kishore0000007/ph-assingment-08.git
cd ph-assingment-08

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file in the root:

```properties
NEXT_PUBLIC_BASE_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your_secret_here
MONGODB_URL=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Run Locally

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment

This project is deployed on **Vercel**. Every push to `main` triggers an automatic redeployment.

```bash
git add .
git commit -m "your message"
git push origin main
```

For production, update environment variables in Vercel dashboard:
- Set `BETTER_AUTH_URL` and `NEXT_PUBLIC_BASE_URL` to your Vercel domain
- Add your production domain to Google OAuth authorized origins

---

## 📦 Product Categories

- Accessories · Skincare · Clothing · Outdoor
- Footwear · Bags · Sports · Drinkware · Kids

---

## 📸 Pages

| Page | Route |
|------|-------|
| Home | `/` |
| Shop | `/shop` |
| Product Detail | `/products/[id]` |
| Login | `/login` |
| Register | `/register` |
| Profile | `/profile` |
| Our Story | `/story` |

---

## 🔒 Auth Flow

- Email/password registration and login
- Google OAuth sign-in
- Session-based authentication via Better Auth
- Protected profile page

---

## 👨‍💻 Author

**Kishore Roy**
- GitHub: [@kishore0000007](https://github.com/kishore0000007)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
