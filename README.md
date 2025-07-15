# Zentry Awards Clone

<div align="center">
  <br />
    <img src="https://github.com/user-attachments/assets/ab600f24-f4d9-4cef-8f1e-3fd9194afb30" alt="Project Banner">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-GSAP-black?style=for-the-badge&logoColor=white&logo=greensock&color=88CE02" alt="greensock" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">An Awwwards-Inspired Website Clone</h3>

   <div align="center">
     Fully responsive UI/UX crafted for learning modern web animations and design.
    </div>
</div>

---

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)  
2. ⚙️ [Tech Stack](#tech-stack)  
3. 🔋 [Features](#features)  
4. 🤸 [Quick Start](#quick-start)  
5. 🕸️ [Snippets](#snippets)  
6. 🔗 [Assets](#assets)  
7. 🚀 [More](#more)

---

## ⚠️ Disclaimer

All design inspiration and assets are credited to **[Zentry](https://zentry.com/)**.  
This project is built **purely for educational purposes**. It is **not intended for commercial use**.

---

## 🤖 Introduction

Build a visually captivating, award-style website inspired by **[Zentry](https://zentry.com/)**.

Features include:

- Scroll-triggered animations  
- Geometric transitions  
- Engaging video storytelling  
- Smooth responsiveness  
- 3D interactive hover effects

---

## ⚙️ Tech Stack

- **React.js**
- **Tailwind CSS**
- **GSAP (GreenSock Animation Platform)**

---

## 🔋 Features

✅ **Scroll-Based Animations** – Engaging animations as you scroll.

✅ **Clip Path Transitions** – Unique geometric animations with `clip-path`.

✅ **3D Hover Effects** – Interactive 3D card transformations.

✅ **Video Storytelling** – Seamless video transitions.

✅ **Responsive UI/UX** – Fully responsive design for all devices.

---

## 🤸 Quick Start

### Prerequisites

- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/en)  
- [npm](https://www.npmjs.com/)

### Clone this Repository

```bash
git clone https://github.com/Prince-verma56/Zentry-Awaards-clone
cd Zentry-Awaards-clone

Install Dependencies

npm install
Run the Project Locally


  
npm run dev
Then open:
http://localhost:5173

🕸️ Snippets
Example: components/RoundedCorners.jsx






import React from 'react'

const RoundedCorners = () => {
  return (
    <svg
      className="invisible absolute size-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="flt_tag">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="flt_tag"
          />
          <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
        </filter>
      </defs>
    </svg>
  )
}
export default RoundedCorners





🔗 Assets
Download all project assets from:
https://drive.google.com/file/d/12hCVnanOAUmM1vzz2dTWZ_uEFGG8xDcT/view

Google Drive Link

Note: Assets and fonts belong to Zentry and are used only for learning and demonstration purposes.
If you plan to deploy this project publicly or commercially, please replace these assets with your own.


