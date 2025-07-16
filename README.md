# 📝 Post Manager

**Post Manager** is a React application that allows you to manage posts.  
It includes a posts list, the ability to create new posts, and detailed views for individual posts — all built with **React 19**, **React Router DOM 7**, and **CSS Modules**, powered by [Vite](https://vitejs.dev/) for lightning‑fast development.

---

## ✨ Features

✅ List all posts in a clean layout  
✅ Create and submit new posts  
✅ View details of a selected post  
✅ Modular, reusable components with scoped styles (CSS Modules)  
✅ Blazing‑fast development & build via Vite  
✅ ESLint configuration for consistent code quality

---

## 📦 Tech Stack

- ⚛️ **React 19**
- 🌐 **React Router DOM 7**
- 🎨 **CSS Modules**
- ⚡ **Vite 7**
- 🛠️ **React Icons**
- ✅ **ESLint** (with React Hooks and Refresh plugins)

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone <your-repo-url> post-manager
cd post-manager
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

The app will run at [http://localhost:5173](http://localhost:5173).

---

## 📜 Available Scripts

| Script            | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build for production (output in `dist/`) |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint to check code quality         |

---

## 📁 Project Structure

```
.
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── MainHeader.jsx
│   │   ├── MainHeader.module.css
│   │   ├── Modal.jsx
│   │   ├── Modal.module.css
│   │   ├── Post.jsx
│   │   ├── Post.module.css
│   │   ├── PostsList.jsx
│   │   └── PostList.module.css
│   ├── routes/
│   │   ├── Posts.jsx
│   │   ├── NewPost.jsx
│   │   ├── PostDetails.jsx
│   │   ├── RootLayout.jsx
│   │   ├── NewPost.module.css
│   │   └── PostDetails.module.css
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── eslint.config.js
├── index.html
└── package.json
```

---

## 🏗️ Build for Production

To build the app for production:

```bash
npm run build
```

To preview the build:

```bash
npm run preview
```

---

## 🤝 Contributing

Contributions are welcome!
If you’d like to contribute:

1. Fork the repository
2. Create a feature branch:
   `git checkout -b feature/my-feature`
3. Commit your changes:
   `git commit -m 'Add my feature'`
4. Push your branch:
   `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

```
MIT License
Copyright (c) 2025 JaisonRego
```

---

## 🌟 Acknowledgments

* [React](https://react.dev/) for the UI library
* [React Router](https://reactrouter.com/) for client‑side routing
* [Vite](https://vitejs.dev/) for fast development & build tools
* [CSS Modules](https://github.com/css-modules/css-modules) for scoped styles
