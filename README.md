# SAWAII - North Indian Restaurant Website

SAWAII is a premium, modern, and visually stunning website designed for a high-end North Indian restaurant. Built with modern web technologies, it focuses on aesthetic excellence, smooth user interactions, and a responsive experience across all devices.

## 🌟 Features

-   **Premium Aesthetics**: A dark-themed, gold-accented design language that exudes elegance and luxury.
-   **Responsive Design**: Fully responsive layouts ensuring a seamless experience on mobile, tablet, and desktop screens.
-   **Dynamic Menu**: An organized and beautifully accessible digital menu showcasing categories like "The Sip Gallery", "Small Plates", and "Tandoori Creations".
-   **Smooth Scrolling**: Integrated **Lenis** for buttery-smooth scroll experiences.
-   **Glassmorphism Effects**: Modern UI components like the navigation bar and popups feature refined glassmorphism styles.
-   **Custom Image Processing**: Includes components for transparent image rendering and background removal.
-   **SEO Optimized**: Uses `react-helmet-async` for managing document heads and metadata.

## 🛠️ Technology Stack

This project is built using a robust modern stack:

-   **Framework**: [React](https://react.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Routing**: [React Router](https://reactrouter.com/)
-   **Smooth Scroll**: [Lenis](https://lenis.studio/)

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

-   Node.js (Version 16 or higher recommended)
-   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/subbu9133/sawaii.git
    cd sawaii
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

## 💻 Usage

### Development Server
To start the local development server with hot reload:
```bash
npm run dev
```
The application will typically run on `http://localhost:5173`.

### Production Build
To create an optimized production build:
```bash
npm run build
```

### Preview Production Build
To locally preview the production build:
```bash
npm run preview
```

### Linting
To run the linter and check for code quality issues:
```bash
npm run lint
```

## 📂 Project Structure & File Details

Here is a detailed breakdown of the key files and directories in the project:

### **`src/pages/`** (Key Website Pages)
| File | Description |
| :--- | :--- |
| `Home.tsx` | **The Main Landing Page**. Contains the Hero section, About Us preview, and key highlights of the restaurant. |
| `Menu.tsx` | **The Digital Menu**. Displays the full menu using data from `menuData.ts`. Features a 2-column layout and gold aesthetics. |
| `Catering.tsx` | **Catering Information**. Details regarding catering services offered by SAWAII. |
| `Order.tsx` | **Order Page**. Interface for users to place online orders. |

### **`src/components/`** (Reusable UI Components)
| File | Description |
| :--- | :--- |
| `Layout.tsx` | **Main App Wrapper**. Wraps all pages. Contains the `GlassNavbar`, Footer, and global layout settings. |
| `GreenScreenImage.tsx` | **Image Processor**. A special component that removes the green background from images dynamically using canvas. |
| `TransparentImage.tsx` | **Transparency Handler**. Renders images and can remove specific background colors (like white) to make them transparent. |
| `HeroSlider.tsx` | **Image Slider**. The carousel component used in the Hero section of the Home page. |
| `PromotionalPopup.tsx` | **Popup Modal**. A component for displaying promotional offers (currently disabled/removed). |
| `RevealOnScroll.tsx` | **Animation Wrapper**. Adds "fade-in" or "slide-up" animations to elements as they scroll into view. |
| `SectionHeader.tsx` | **Standard Header**. Reusable component to render consistent section titles/headers across the site. |

### **`src/components/Navigation/`**
| File | Description |
| :--- | :--- |
| `GlassNavbar.tsx` | **Primary Navigation**. The main top navigation bar featuring a glassmorphism (blur) effect and responsive mobile menu. |

### **`src/components/Layout/`**
| File | Description |
| :--- | :--- |
| `SmoothScroll.tsx` | **Scroll Engine**. Configures **Lenis** to provide the smooth, high-end scrolling feel of the website. |

### **`src/data/`**
| File | Description |
| :--- | :--- |
| `menuData.ts` | **The Data Source**. A TypeScript file containing the entire menu structure (Categories, Items, Prices, Descriptions). **Edit this file to update menu content.** |

### **Configuration Files**
| File | Description |
| :--- | :--- |
| `tailwind.config.js` | **Design System**. Defines the custom color palette, font families, and screen breakpoints. |
| `vite.config.ts` | **Build Config**. Configuration for the Vite build tool. |

## 🎨 Customization

### Colors & Fonts
The project uses a custom color palette defined in `tailwind.config.js` or via standard utility classes (e.g., `text-yellow-500` for gold accents). Fonts are typically set via CSS imports or Tailwind configuration.

### Menu Data
The menu content is dynamically managed via `src/data/menuData.ts`. You can easily add, remove, or modify categories and items in this structured file to update the website content without touching the UI code.

## 📄 License

This project is proprietary and all rights are reserved.

---
© 2026 SAWAII. All rights reserved.
