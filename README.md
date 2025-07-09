# Codnity Homepage

A simple, responsive React homepage built with [React](https://reactjs.org/), [Redux Toolkit](https://redux-toolkit.js.org/), and [Material UI](https://mui.com/). This project features a gallery, basic routing, modern UI elements, and mobile-friendly layout.

## 🚀 Features

- 🧭 Responsive layout (desktop & mobile)
- 🔗 Header with navigation links
- 📸 Gallery page with paginated image loading from [Pexels API](https://www.pexels.com/api/)
- 📄 About and Home pages with styled content
- 🎨 Built with Material UI components
- ⚙️ State management via Redux Toolkit
- ✅ Written in TypeScript

## 📁 Folder Structure

- components/ # Reusable UI components (Header, Footer)
- pages/ # Routed views (Home, About, Gallery)
- store/ # Redux slices, hooks, store configuration
- types/ # Global TypeScript interfaces
- App.tsx # Main component with routing
- main.tsx # App entry point

## 🛠️ Setup & Usage

1. **Install dependencies**

```bash
npm install
```
2. **Add your Pexels API key**

Create a .env file at the root and add:

```bash
VITE_PEXELS_API_KEY=your_api_key_here
```
3. **Run the development server**

```bash
npm run dev
```
Visit http://localhost:5173 to see the app in action.
