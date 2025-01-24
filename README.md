# Chef AI

Chef AI is a dynamic, React-based web application that generates personalized recipes based on user-provided ingredients. Powered by the Claude AI API, the app provides an intuitive and interactive interface for users to explore creative culinary ideas. The project is built with modern technologies such as React, Next.js, Tailwind CSS, and Shadcn, and is deployed seamlessly using Vercel.

## **Table of Contents**
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

---

## **Demo**
Check out the live demo of Chef AI:  
[Chef AI on Vercel](https://chef-ai.vercel.app/)

---

## **Features**
- Generate personalized recipes based on a list of ingredients provided by the user.
- Interactive and responsive user interface designed with **Tailwind CSS** and **Shadcn**.
- Seamless integration with the **Claude AI API** for recipe generation.
- Fully responsive design ensuring compatibility across devices.
- Deployed on **Vercel** for fast and reliable hosting.

---

## **Technologies Used**
The project leverages the following technologies:
- **React**: For building the user interface.
- **Next.js**: For server-side rendering and routing.
- **Tailwind CSS**: For responsive and modern UI design.
- **Shadcn**: For additional UI components and styling.
- **Claude AI API**: For natural language processing to generate recipes.
- **JavaScript, HTML, CSS**: Core web development technologies.

---

## **Installation**

Follow these steps to set up Chef AI locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/KanishkGoyal19/Chef_AI.git
   cd chef-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Claude API key:
   ```env
   NEXT_PUBLIC_CLAUDE_API_KEY=your_claude_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

---

## **Usage**

1. Enter a list of ingredients in the input field provided on the homepage.
2. Click on the "Generate Recipe" button.
3. Chef AI will use the Claude API to generate a personalized recipe based on your ingredients.
4. View or save your recipe for future use.


## **License**

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---
