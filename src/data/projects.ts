import type { Language, ProjectsData } from './types'

export const projectsData: Record<Language, ProjectsData> = {
  es: {
    heading: 'Proyectos',
    projects: [
      {
        name: 'Rabbit Ecommerce',
        description: 'Ecommerce full stack con React, Node.js, MongoDB y APIs RESTful.',
        tech: ['React.js', 'Node.js', 'MongoDB', 'REST APIs'],
        links: [
          { label: 'Repo', href: 'https://github.com/JoaquinManz/rabbit-ecommerce', kind: 'repo' },
          { label: 'Demo', href: 'https://rabbit-ecommerce-liart.vercel.app/', kind: 'demo' },
        ],
        imageAlt: 'Captura de pantalla de Rabbit Ecommerce',
        image: '/img/rabbit.jpeg',
      },
      {
        name: 'Data Finance',
        description:
          'Sitio de finanzas responsive construido en React.js, con componentes reutilizables y diseño adaptable.',
        tech: ['React.js'],
        links: [
          { label: 'Repo', href: 'https://github.com/JoaquinManz/data-finance', kind: 'repo' },
          { label: 'Demo', href: 'https://datafinancejm.netlify.app/', kind: 'demo' },
        ],
        imageAlt: 'Captura de pantalla de Data Finance',
        image: '/img/finance.png',
      },
      {
        name: 'Shopping Cart',
        description:
          'Carrito de compras interactivo construido en React, con agregado y eliminación de productos, gestión del estado del carrito y flujo de checkout.',
        tech: ['React.js'],
        links: [
          { label: 'Demo', href: 'https://shoppingcartjm.netlify.app/', kind: 'demo' },
          { label: 'Repo', href: 'https://github.com/JoaquinManz/Shopping-cart', kind: 'repo' },
        ],
        imageAlt: 'Captura de pantalla de Shopping Cart',
        image: '/img/ecommerce.jpeg',
      },
      {
        name: 'Geritch Restaurant',
        description: 'Landing page para restaurante con animaciones CSS y diseño responsive.',
        tech: ['HTML5', 'CSS3', 'React.js'],
        links: [
          { label: 'Repo', href: 'https://github.com/JoaquinManz/geritch-restaurant', kind: 'repo' },
          { label: 'Demo', href: 'https://geritchjm.netlify.app/', kind: 'demo' },
        ],
        imageAlt: 'Captura de pantalla de Geritch Restaurant',
        image: '/img/geritch.jpeg',
      },
      {
        name: 'GPT-3 OpenAI Landing Page',
        description: 'Landing page de demostración para OpenAI GPT-3, con diseño moderno y responsive.',
        tech: ['HTML5', 'CSS3', 'React.js'],
        links: [
          { label: 'Repo', href: 'https://github.com/JoaquinManz/gpt3-jm', kind: 'repo' },
          { label: 'Demo', href: 'https://gpt3jm.netlify.app/', kind: 'demo' },
        ],
        imageAlt: 'Captura de pantalla de GPT-3 OpenAI Landing Page',
        image: '/img/gpt3.jpeg',
      },
    ],
  },
  en: {
    heading: 'Projects',
    projects: [
      {
        name: 'Rabbit Ecommerce',
        description: 'Full stack ecommerce built with React, Node.js, MongoDB, and RESTful APIs.',
        tech: ['React.js', 'Node.js', 'MongoDB', 'REST APIs'],
        links: [
          { label: 'Repo', href: 'https://github.com/JoaquinManz/rabbit-ecommerce', kind: 'repo' },
          { label: 'Demo', href: 'https://rabbit-ecommerce-liart.vercel.app/', kind: 'demo' },
        ],
        imageAlt: 'Screenshot of Rabbit Ecommerce',
        image: '/img/rabbit.jpeg',
      },
      {
        name: 'Data Finance',
        description:
          'Responsive finance site built with React.js, featuring reusable components and an adaptive design.',
        tech: ['React.js'],
        links: [
          { label: 'Repo', href: 'https://github.com/JoaquinManz/data-finance', kind: 'repo' },
          { label: 'Demo', href: 'https://datafinancejm.netlify.app/', kind: 'demo' },
        ],
        imageAlt: 'Screenshot of Data Finance',
        image: '/img/finance.png',
      },
      {
        name: 'Shopping Cart',
        description:
          'Interactive shopping cart built with React, featuring adding and removing products, cart state management, and a checkout flow.',
        tech: ['React.js'],
        links: [
          { label: 'Demo', href: 'https://shoppingcartjm.netlify.app/', kind: 'demo' },
          { label: 'Repo', href: 'https://github.com/JoaquinManz/Shopping-cart', kind: 'repo' },
        ],
        imageAlt: 'Screenshot of Shopping Cart',
        image: '/img/ecommerce.jpeg',
      },
      {
        name: 'Geritch Restaurant',
        description: 'Restaurant landing page with CSS animations and a responsive design.',
        tech: ['HTML5', 'CSS3', 'React.js'],
        links: [
          { label: 'Repo', href: 'https://github.com/JoaquinManz/geritch-restaurant', kind: 'repo' },
          { label: 'Demo', href: 'https://geritchjm.netlify.app/', kind: 'demo' },
        ],
        imageAlt: 'Screenshot of Geritch Restaurant',
        image: '/img/geritch.jpeg',
      },
      {
        name: 'GPT-3 OpenAI Landing Page',
        description: 'Demo landing page for OpenAI GPT-3, with a modern and responsive design.',
        tech: ['HTML5', 'CSS3', 'React.js'],
        links: [
          { label: 'Repo', href: 'https://github.com/JoaquinManz/gpt3-jm', kind: 'repo' },
          { label: 'Demo', href: 'https://gpt3jm.netlify.app/', kind: 'demo' },
        ],
        imageAlt: 'Screenshot of GPT-3 OpenAI Landing Page',
        image: '/img/gpt3.jpeg',
      },
    ],
  },
}
