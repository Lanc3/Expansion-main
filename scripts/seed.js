import { hashPassword } from '@redwoodjs/auth-dbauth-api'

import { db } from 'api/src/lib/db'

export default async () => {
  try {
    // ============================================
    // ADMIN USER
    // ============================================
    const adminEmail = 'aaron.keating.lanc3@gmail.com'
    const adminPassword = process.env.ADMIN_PASSWORD || 'V5fg6ppasD'
    const [hashedPassword, salt] = hashPassword(adminPassword)

    const existingUser = await db.user.findUnique({
      where: { email: adminEmail },
    })

    if (existingUser) {
      await db.user.update({
        where: { email: adminEmail },
        data: {
          hashedPassword,
          salt,
          roles: 'admin',
          name: 'Aaron Keating',
        },
      })
      console.log('Updated existing admin user:', adminEmail)
    } else {
      await db.user.create({
        data: {
          name: 'Aaron Keating',
          email: adminEmail,
          hashedPassword,
          salt,
          roles: 'admin',
        },
      })
      console.log('Created admin user:', adminEmail)
    }

    // ============================================
    // SERVICES (7)
    // ============================================
    const services = [
      {
        title: 'Custom Software Development',
        slug: 'custom-software-development',
        shortDescription:
          'Bespoke software solutions engineered to solve your unique business challenges. From internal tools to customer-facing platforms.',
        fullDescription: `Every business has problems that off-the-shelf software can't solve. We architect and build custom software from the ground up — designed around your workflows, your data, and your growth trajectory.

Our process begins with deep discovery to understand not just what you need today, but what you'll need in two years. We deliver production-grade applications built on modern architectures that are maintainable, scalable, and a pleasure to use.

Whether you need an internal operations platform, a data pipeline, a complex workflow engine, or a full SaaS product — we've done it before and we'll make it work for you.

Technologies we commonly use: React, Node.js, Python, PostgreSQL, Redis, Docker, AWS, and whatever else the problem demands.`,
        icon: 'FiCode',
        order: 1,
      },
      {
        title: 'AI Engineering',
        slug: 'ai-engineering',
        shortDescription:
          'Production-grade AI systems — from LLM integration and RAG pipelines to computer vision and custom model training.',
        fullDescription: `AI isn't magic — it's engineering. We build AI systems that actually work in production, not just in a notebook. From integrating large language models into your existing products to building custom ML pipelines from scratch.

Our AI engineering work includes:
• LLM integration and prompt engineering (OpenAI, Anthropic, open-source models)
• Retrieval-Augmented Generation (RAG) systems for knowledge bases and document Q&A
• Custom fine-tuning and model training
• Computer vision systems for inspection, classification, and detection
• Natural language processing pipelines
• AI-powered search and recommendation engines

We focus on the full lifecycle — from prototype to production deployment, with monitoring, evaluation, and continuous improvement baked in. No proof-of-concept that never ships.`,
        icon: 'FiBrain',
        order: 2,
      },
      {
        title: 'AI Automation',
        slug: 'ai-automation',
        shortDescription:
          'Intelligent automation that eliminates manual work. AI agents, workflow automation, and smart integrations that save hours every week.',
        fullDescription: `Stop paying humans to do what machines can do better. We build AI-powered automation systems that handle repetitive tasks, make decisions, and connect your tools — so your team can focus on work that actually matters.

Our automation solutions include:
• AI agents that handle multi-step business processes autonomously
• Intelligent document processing — extraction, classification, routing
• Automated customer support with AI triage and response drafting
• Smart data entry and reconciliation across systems
• Workflow automation connecting your CRM, ERP, email, and custom tools
• Scheduled reporting and anomaly detection

Every automation we build includes human-in-the-loop controls where they matter, comprehensive logging, and graceful fallbacks. We make AI reliable enough to trust with your business processes.`,
        icon: 'FiZap',
        order: 3,
      },
      {
        title: 'Web Applications',
        slug: 'web-applications',
        shortDescription:
          'Full-stack web applications with beautiful interfaces and rock-solid backends. SaaS products, dashboards, portals, and platforms.',
        fullDescription: `We build web applications that users love and engineers respect. From single-page apps to complex multi-tenant SaaS platforms, we deliver polished products that perform under real-world load.

Our web development covers the full stack:
• Frontend: React, Next.js, RedwoodJS, TypeScript, Tailwind CSS
• Backend: Node.js, Python, GraphQL, REST APIs
• Databases: PostgreSQL, Redis, MongoDB
• Infrastructure: AWS, Vercel, Docker, CI/CD pipelines
• Real-time: WebSockets, Server-Sent Events, live collaboration

We build with a mobile-first approach, accessibility baked in from day one, and performance budgets that keep your app fast as it grows. Every project includes responsive design, SEO fundamentals, and analytics integration.`,
        icon: 'FiGlobe',
        order: 4,
      },
      {
        title: 'Mobile Applications',
        slug: 'mobile-applications',
        shortDescription:
          'Cross-platform mobile apps built with React Native. One codebase, native performance on iOS and Android.',
        fullDescription: `Ship to both app stores from a single codebase without compromising on user experience. We build cross-platform mobile applications using React Native that feel truly native on both iOS and Android.

What we deliver:
• Cross-platform apps with shared business logic and platform-specific UI where it matters
• Offline-first architecture for reliable performance anywhere
• Push notifications, deep linking, and app store optimization
• Integration with device APIs — camera, GPS, biometrics, NFC, Bluetooth
• Backend APIs and real-time sync designed for mobile usage patterns
• App store submission, review management, and update workflows

We've shipped apps ranging from field service tools to consumer social platforms. Every app we build is optimized for battery life, data usage, and the real-world conditions your users operate in.`,
        icon: 'FiSmartphone',
        order: 5,
      },
      {
        title: 'Game Development',
        slug: 'game-development',
        shortDescription:
          'From custom game engines to full titles. C++, OpenGL, Vulkan, Unity, and Unreal Engine — we build interactive experiences that push boundaries.',
        fullDescription: `Games are where art meets hardcore engineering. We build interactive experiences ranging from custom engine development to full game titles, with deep expertise in real-time graphics, physics, and performance optimization.

Our game development capabilities:
• Custom game engine development in C++ with OpenGL/Vulkan rendering
• Unity and Unreal Engine game development
• Godot Engine projects for lightweight, open-source game builds
• Real-time 3D graphics, shader programming, and VFX pipelines
• Physics simulation, procedural generation, and AI behavior systems
• Multiplayer networking and game server architecture
• Cross-platform deployment (PC, console, mobile, web)

Whether you're building an indie title, a serious game for training, an interactive visualization, or a gamified application — we bring the technical depth to make it performant and the creative sensibility to make it engaging.

We've built everything from space combat simulations to augmented reality experiences. If it's interactive and real-time, we can build it.`,
        icon: 'FiMonitor',
        order: 6,
      },
      {
        title: 'API & Integration',
        slug: 'api-integration',
        shortDescription:
          'Connect your systems with robust APIs and integrations. REST, GraphQL, webhooks, and third-party platform connections.',
        fullDescription: `Your systems need to talk to each other. We design and build APIs that are fast, well-documented, and a pleasure for developers to work with — plus integrations that connect your existing tools into a cohesive ecosystem.

What we build:
• RESTful and GraphQL API design and implementation
• Third-party API integrations (Stripe, Twilio, HubSpot, Salesforce, and hundreds more)
• Webhook systems for real-time event processing
• ETL pipelines and data synchronization between platforms
• API gateway setup, rate limiting, and authentication
• Developer documentation and SDK generation
• Legacy system modernization and API wrapping

We follow API-first design principles, comprehensive error handling, and versioning strategies that let your API evolve without breaking existing consumers. Every API we build comes with documentation, monitoring, and usage analytics.`,
        icon: 'FiLink',
        order: 7,
      },
    ]

    for (const service of services) {
      await db.service.upsert({
        where: { slug: service.slug },
        update: service,
        create: service,
      })
    }
    console.log(`Seeded ${services.length} services`)

    // ============================================
    // TECHNOLOGIES (22)
    // ============================================
    const technologies = [
      // Frontend
      { name: 'React', icon: 'SiReact', category: 'Frontend', proficiency: 'Expert', order: 1 },
      { name: 'React Native', icon: 'SiReact', category: 'Frontend', proficiency: 'Expert', order: 2 },
      { name: 'TypeScript', icon: 'SiTypescript', category: 'Frontend', proficiency: 'Expert', order: 3 },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', category: 'Frontend', proficiency: 'Expert', order: 4 },
      { name: 'RedwoodJS', icon: 'SiRedwoodjs', category: 'Frontend', proficiency: 'Expert', order: 5 },
      // Backend
      { name: 'Node.js', icon: 'SiNodedotjs', category: 'Backend', proficiency: 'Expert', order: 6 },
      { name: 'Python', icon: 'SiPython', category: 'Backend', proficiency: 'Expert', order: 7 },
      { name: 'PostgreSQL', icon: 'SiPostgresql', category: 'Backend', proficiency: 'Expert', order: 8 },
      { name: 'GraphQL', icon: 'SiGraphql', category: 'Backend', proficiency: 'Expert', order: 9 },
      { name: 'Prisma', icon: 'SiPrisma', category: 'Backend', proficiency: 'Expert', order: 10 },
      // AI / ML
      { name: 'OpenAI', icon: 'SiOpenai', category: 'AI / ML', proficiency: 'Expert', order: 11 },
      { name: 'LangChain', icon: 'SiChainlink', category: 'AI / ML', proficiency: 'Advanced', order: 12 },
      { name: 'TensorFlow', icon: 'SiTensorflow', category: 'AI / ML', proficiency: 'Advanced', order: 13 },
      { name: 'Computer Vision', icon: 'SiOpencv', category: 'AI / ML', proficiency: 'Advanced', order: 14 },
      // Game Dev
      { name: 'C++', icon: 'SiCplusplus', category: 'Game Dev', proficiency: 'Expert', order: 15 },
      { name: 'OpenGL', icon: 'SiOpengl', category: 'Game Dev', proficiency: 'Expert', order: 16 },
      { name: 'Vulkan', icon: 'SiVulkan', category: 'Game Dev', proficiency: 'Advanced', order: 17 },
      { name: 'Unity', icon: 'SiUnity', category: 'Game Dev', proficiency: 'Advanced', order: 18 },
      { name: 'Unreal Engine', icon: 'SiUnrealengine', category: 'Game Dev', proficiency: 'Advanced', order: 19 },
      { name: 'Godot', icon: 'SiGodotengine', category: 'Game Dev', proficiency: 'Intermediate', order: 20 },
      // DevOps
      { name: 'AWS', icon: 'SiAmazonaws', category: 'DevOps', proficiency: 'Expert', order: 21 },
      { name: 'Docker', icon: 'SiDocker', category: 'DevOps', proficiency: 'Expert', order: 22 },
    ]

    for (const tech of technologies) {
      const existing = await db.technology.findFirst({
        where: { name: tech.name },
      })
      if (existing) {
        await db.technology.update({ where: { id: existing.id }, data: tech })
      } else {
        await db.technology.create({ data: tech })
      }
    }
    console.log(`Seeded ${technologies.length} technologies`)

    // ============================================
    // PROCESS STEPS (6)
    // ============================================
    const processSteps = [
      {
        title: 'Discovery',
        description:
          'We start with a deep dive into your business, your users, and the problem you need solved. No generic questionnaires — a real conversation to understand what success looks like for you.',
        icon: 'FiSearch',
        order: 1,
      },
      {
        title: 'Proposal & Architecture',
        description:
          'You receive a detailed proposal including technical architecture, timeline, milestones, and transparent pricing. We explain the trade-offs so you can make informed decisions.',
        icon: 'FiFileText',
        order: 2,
      },
      {
        title: 'Design & Prototype',
        description:
          'Interactive prototypes and UI designs you can click through before any code is written. We iterate on the design until it feels right — changing direction is cheap at this stage.',
        icon: 'FiLayout',
        order: 3,
      },
      {
        title: 'Development',
        description:
          'Agile sprints with regular demos so you see progress every week. Clean, tested, well-documented code built on modern architectures. No surprises at the end.',
        icon: 'FiCode',
        order: 4,
      },
      {
        title: 'Testing & Launch',
        description:
          'Rigorous QA across devices and browsers, performance optimization, security review, and a smooth deployment. We handle the DevOps so you can focus on your business.',
        icon: 'FiCheckCircle',
        order: 5,
      },
      {
        title: 'Ongoing Support',
        description:
          'Post-launch monitoring, bug fixes, feature iterations, and scaling support. We stick around to make sure your software keeps delivering value as your business grows.',
        icon: 'FiLifeBuoy',
        order: 6,
      },
    ]

    for (const step of processSteps) {
      const existing = await db.processStep.findFirst({
        where: { title: step.title },
      })
      if (existing) {
        await db.processStep.update({ where: { id: existing.id }, data: step })
      } else {
        await db.processStep.create({ data: step })
      }
    }
    console.log(`Seeded ${processSteps.length} process steps`)

    // ============================================
    // PRICING TIERS (3)
    // ============================================
    const pricingTiers = [
      {
        name: 'Project-Based',
        description:
          'Ideal for well-defined projects with clear scope. Fixed price, fixed timeline, delivered to spec.',
        features:
          'Detailed scoping & proposal,Fixed price — no surprises,Milestone-based payments,Full source code ownership,30 days post-launch support,Dedicated project manager',
        price: 'From €5,000',
        unit: 'per project',
        isPopular: false,
        ctaText: 'Get a Quote',
        order: 1,
      },
      {
        name: 'Monthly Retainer',
        description:
          'Ongoing development capacity for evolving products. Flexible scope, predictable costs, continuous delivery.',
        features:
          'Dedicated development hours,Weekly sprint demos,Priority support & bug fixes,Flexible scope — reprioritize anytime,Infrastructure monitoring included,Monthly progress reports',
        price: 'From €3,000',
        unit: 'per month',
        isPopular: true,
        ctaText: 'Start a Retainer',
        order: 2,
      },
      {
        name: 'Dedicated Team',
        description:
          'A full engineering team embedded in your organization. For companies that need sustained, high-output development.',
        features:
          'Full-time dedicated engineers,Team lead & architecture oversight,Daily standups & sprint planning,Scales up or down as needed,Full integration with your tools & processes,Quarterly strategy reviews',
        price: 'Custom',
        unit: 'based on team size',
        isPopular: false,
        ctaText: "Let's Talk",
        order: 3,
      },
    ]

    for (const tier of pricingTiers) {
      const existing = await db.pricingTier.findFirst({
        where: { name: tier.name },
      })
      if (existing) {
        await db.pricingTier.update({ where: { id: existing.id }, data: tier })
      } else {
        await db.pricingTier.create({ data: tier })
      }
    }
    console.log(`Seeded ${pricingTiers.length} pricing tiers`)

    // ============================================
    // FAQS (8)
    // ============================================
    const faqs = [
      {
        question: 'How long does a typical project take?',
        answer:
          'It depends on scope, but most projects fall into these ranges: a simple web app or landing site takes 2–4 weeks. A full-stack application with backend, auth, and integrations takes 6–12 weeks. Complex platforms, AI systems, or game projects can take 3–6 months. We give you a detailed timeline during the proposal phase and we hit our deadlines.',
        category: 'General',
        order: 1,
      },
      {
        question: 'How much does it cost to build software with Expansion?',
        answer:
          'Our project-based work starts from €5,000 for smaller applications and goes up from there based on complexity. Monthly retainers start at €3,000/month. During discovery, we scope the work thoroughly and give you a fixed quote — no surprise invoices. We also offer flexible payment milestones tied to deliverables.',
        category: 'Pricing',
        order: 2,
      },
      {
        question: 'What technologies do you work with?',
        answer:
          "We're technology-agnostic — we pick the best tool for the job, not the one we're most comfortable with. Our core expertise spans React, Node.js, Python, C++, PostgreSQL, and AWS. For AI work, we use OpenAI, LangChain, TensorFlow, and custom models. For games, C++ with OpenGL/Vulkan, Unity, and Unreal Engine. Check our Technologies section for the full list.",
        category: 'Technical',
        order: 3,
      },
      {
        question: 'Do you sign NDAs?',
        answer:
          "Absolutely. We're happy to sign a mutual NDA before any discussion of your project details. Confidentiality is standard practice — we treat every client's IP, business logic, and data with the same care we'd want for our own.",
        category: 'General',
        order: 4,
      },
      {
        question: 'Who owns the code and intellectual property?',
        answer:
          'You do. 100%. Once a project is complete and paid for, you receive full ownership of all source code, designs, documentation, and assets. We don\'t retain licenses or hold your code hostage. You get the Git repository, deployment credentials, and everything you need to take it forward independently.',
        category: 'General',
        order: 5,
      },
      {
        question: 'How do you communicate during a project?',
        answer:
          'We adapt to your preferred tools — Slack, Teams, Discord, email, or whatever works for your team. Every project gets weekly progress updates, regular demo sessions where you see working software, and a shared project board (Jira, Linear, or Trello) for full transparency. You\'ll never wonder what we\'re working on.',
        category: 'Process',
        order: 6,
      },
      {
        question: 'What happens after launch?',
        answer:
          'Every project includes 30 days of post-launch support for bug fixes and adjustments. Beyond that, most clients move to a monthly retainer for ongoing feature development, performance monitoring, and scaling support. We also offer ad-hoc support packages if you just need occasional maintenance.',
        category: 'Process',
        order: 7,
      },
      {
        question: 'Can you work with our existing codebase or team?',
        answer:
          "Yes. We regularly join existing projects — whether that means auditing and improving a legacy codebase, building new features on top of an existing system, or embedding with your in-house team as extra engineering capacity. We'll review your current setup and give you an honest assessment of what's needed.",
        category: 'Technical',
        order: 8,
      },
    ]

    for (const faq of faqs) {
      const existing = await db.faq.findFirst({
        where: { question: faq.question },
      })
      if (existing) {
        await db.faq.update({ where: { id: existing.id }, data: faq })
      } else {
        await db.faq.create({ data: faq })
      }
    }
    console.log(`Seeded ${faqs.length} FAQs`)

    // ============================================
    // TEAM MEMBERS (1)
    // ============================================
    const teamMembers = [
      {
        name: 'Aaron Keating',
        role: 'Founder & Lead Engineer',
        bio: `Aaron brings over 10 years of software engineering experience across the full stack — from real-time 3D graphics in C++ to production AI systems and modern web applications.

He founded Expansion to build the kind of software he'd want to use himself: fast, reliable, and thoughtfully designed. His background spans game engine development, enterprise SaaS platforms, and AI-powered automation systems.

When he's not shipping code, Aaron contributes to open-source projects and writes about software engineering on the Expansion blog.`,
        image: '/Images/profile.png',
        linkedin: 'https://www.linkedin.com/in/aaron-keating-a4228985/',
        github: 'https://github.com/Lanc3',
        email: 'aaron.keating.lanc3@gmail.com',
        order: 1,
      },
    ]

    for (const member of teamMembers) {
      const existing = await db.teamMember.findFirst({
        where: { name: member.name },
      })
      if (existing) {
        await db.teamMember.update({
          where: { id: existing.id },
          data: member,
        })
      } else {
        await db.teamMember.create({ data: member })
      }
    }
    console.log(`Seeded ${teamMembers.length} team members`)

    // ============================================
    // TESTIMONIALS (3 placeholders)
    // ============================================
    const testimonials = [
      {
        clientName: 'Sarah Mitchell',
        clientTitle: 'CEO',
        clientCompany: 'GreenLeaf Analytics',
        quote:
          'Expansion took our vague idea for an AI-powered analytics dashboard and turned it into a product our clients love. Aaron\'s technical depth meant we never hit a wall — every challenge had a solution. Delivered on time and on budget.',
        rating: 5,
        order: 1,
      },
      {
        clientName: 'David Chen',
        clientTitle: 'CTO',
        clientCompany: 'SwiftRoute Logistics',
        quote:
          'We needed a complex automation system to replace 40+ hours of weekly manual data processing. Expansion built it in 8 weeks and it hasn\'t missed a beat in 6 months of production use. The ROI paid for the project in the first month.',
        rating: 5,
        order: 2,
      },
      {
        clientName: 'Emma O\'Brien',
        clientTitle: 'Product Manager',
        clientCompany: 'Velocity Games',
        quote:
          'Working with Aaron on our game\'s rendering pipeline was a masterclass in C++ and graphics programming. He optimized our frame times by 60% and implemented features our engine simply couldn\'t handle before. Genuinely world-class talent.',
        rating: 5,
        order: 3,
      },
    ]

    for (const testimonial of testimonials) {
      const existing = await db.testimonial.findFirst({
        where: { clientName: testimonial.clientName },
      })
      if (existing) {
        await db.testimonial.update({
          where: { id: existing.id },
          data: testimonial,
        })
      } else {
        await db.testimonial.create({ data: testimonial })
      }
    }
    console.log(`Seeded ${testimonials.length} testimonials`)

    // ============================================
    // LEGAL PAGES (2)
    // ============================================
    const legalPages = [
      {
        slug: 'privacy-policy',
        title: 'Privacy Policy',
        body: `Last updated: March 2026

Expansion ("we", "us", or "our") operates the expansion.ie website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.

## Information We Collect

### Information You Provide
When you contact us through our website, we collect:
- Your name and email address
- Company name (if provided)
- Phone number (if provided)
- Project details you share with us
- Any other information you voluntarily provide

### Information Collected Automatically
When you visit our site, we may automatically collect:
- Browser type and version
- Pages visited and time spent
- Referring website
- General location (country/region level)

## How We Use Your Information

We use the information we collect to:
- Respond to your inquiries and project requests
- Provide and maintain our services
- Send you project updates and relevant communications
- Improve our website and services
- Comply with legal obligations

## Data Storage and Security

Your data is stored securely using industry-standard encryption. We use PostgreSQL databases hosted on secure cloud infrastructure with encryption at rest and in transit.

## Your Rights Under GDPR

If you are a resident of the European Economic Area, you have the right to:
- Access the personal data we hold about you
- Request correction of inaccurate data
- Request deletion of your data
- Object to processing of your data
- Request restriction of processing
- Data portability
- Withdraw consent at any time

To exercise any of these rights, contact us at aaron.keating.lanc3@gmail.com.

## Cookies

We use minimal, essential cookies for website functionality. We do not use tracking cookies without your explicit consent. See our cookie consent banner for options.

## Third-Party Services

We may use third-party services (analytics, email) that collect data according to their own privacy policies. We only use GDPR-compliant service providers.

## Data Retention

We retain contact form submissions for up to 2 years or until you request deletion. Newsletter subscriptions are retained until you unsubscribe.

## Changes to This Policy

We may update this policy from time to time. Changes will be posted on this page with an updated revision date.

## Contact

For privacy-related questions or to exercise your rights:
- Email: aaron.keating.lanc3@gmail.com
- Location: Carlow, Ireland`,
      },
      {
        slug: 'terms-of-service',
        title: 'Terms of Service',
        body: `Last updated: March 2026

These Terms of Service ("Terms") govern your use of the expansion.ie website and any services provided by Expansion ("we", "us", "our").

## Services

Expansion provides custom software development, AI engineering, AI automation, web and mobile application development, game development, and API integration services. Specific terms for each engagement are detailed in individual project agreements.

## Use of Website

You may use our website for lawful purposes only. You agree not to:
- Use the site in any way that violates applicable laws
- Attempt to gain unauthorized access to any part of the site
- Transmit any malicious code or harmful content
- Use automated systems to scrape or extract data without permission

## Intellectual Property

### Our Website
The content, design, and code of this website are owned by Expansion and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.

### Client Projects
Intellectual property for commissioned work is governed by individual project agreements. Our standard terms grant full IP ownership to the client upon final payment.

## Project Engagements

All project work is governed by a separate project agreement that covers:
- Scope of work and deliverables
- Timeline and milestones
- Payment terms and schedule
- Intellectual property ownership
- Confidentiality obligations
- Warranty and support terms

## Limitation of Liability

To the maximum extent permitted by law, Expansion shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.

## Confidentiality

We treat all client information as confidential. We are happy to sign mutual NDAs before project discussions begin.

## Governing Law

These Terms are governed by and construed in accordance with the laws of Ireland. Any disputes shall be subject to the exclusive jurisdiction of the Irish courts.

## Changes to Terms

We reserve the right to modify these Terms at any time. Changes become effective when posted on this page.

## Contact

For questions about these Terms:
- Email: aaron.keating.lanc3@gmail.com
- Location: Carlow, Ireland`,
      },
    ]

    for (const page of legalPages) {
      await db.legalPage.upsert({
        where: { slug: page.slug },
        update: page,
        create: page,
      })
    }
    console.log(`Seeded ${legalPages.length} legal pages`)

    // ============================================
    // SITE SETTINGS (20)
    // ============================================
    const siteSettings = [
      // Hero
      {
        key: 'heroTitle',
        value: 'We Engineer Software, AI & Games',
        group: 'hero',
        label: 'Hero Title',
        fieldType: 'text',
      },
      {
        key: 'heroSubtitle',
        value: 'EXPANSION.IE // Software Engineering Studio',
        group: 'hero',
        label: 'Hero Subtitle',
        fieldType: 'text',
      },
      {
        key: 'heroDescription',
        value:
          'From AI automation to game development — we build production-grade software on any stack. 10+ years of engineering experience, delivered with precision.',
        group: 'hero',
        label: 'Hero Description',
        fieldType: 'textarea',
      },
      // Meta descriptions
      {
        key: 'metaHome',
        value:
          'Expansion.ie — Custom software development, AI engineering, game development, and automation. We build production-grade software on any stack.',
        group: 'meta',
        label: 'Home Page Meta Description',
        fieldType: 'textarea',
      },
      {
        key: 'metaAbout',
        value:
          'About Expansion — a software engineering studio founded by Aaron Keating. 10+ years building custom software, AI systems, and games.',
        group: 'meta',
        label: 'About Page Meta Description',
        fieldType: 'textarea',
      },
      {
        key: 'metaServices',
        value:
          'Our services: custom software development, AI engineering, AI automation, web & mobile apps, game development, and API integration.',
        group: 'meta',
        label: 'Services Page Meta Description',
        fieldType: 'textarea',
      },
      {
        key: 'metaContact',
        value:
          'Get in touch with Expansion. Tell us about your project and get a free consultation. We respond within 24 hours.',
        group: 'meta',
        label: 'Contact Page Meta Description',
        fieldType: 'textarea',
      },
      {
        key: 'metaFaq',
        value:
          'Frequently asked questions about working with Expansion — timelines, pricing, technology, IP ownership, and more.',
        group: 'meta',
        label: 'FAQ Page Meta Description',
        fieldType: 'textarea',
      },
      {
        key: 'metaPricing',
        value:
          'Expansion pricing — project-based, monthly retainer, and dedicated team options. Transparent pricing with no surprises.',
        group: 'meta',
        label: 'Pricing Page Meta Description',
        fieldType: 'textarea',
      },
      // Company info
      {
        key: 'companyPhone',
        value: '083 317 5637',
        group: 'company',
        label: 'Phone Number',
        fieldType: 'text',
      },
      {
        key: 'companyEmail',
        value: 'aaron.keating.lanc3@gmail.com',
        group: 'company',
        label: 'Email Address',
        fieldType: 'text',
      },
      {
        key: 'companyAddress',
        value: 'Carlow, Ireland',
        group: 'company',
        label: 'Address',
        fieldType: 'text',
      },
      {
        key: 'bookingUrl',
        value: '',
        group: 'company',
        label: 'Booking/Calendly URL',
        fieldType: 'text',
      },
      // Social
      {
        key: 'githubUrl',
        value: 'https://github.com/Lanc3',
        group: 'social',
        label: 'GitHub URL',
        fieldType: 'text',
      },
      {
        key: 'linkedinUrl',
        value: 'https://www.linkedin.com/in/aaron-keating-a4228985/',
        group: 'social',
        label: 'LinkedIn URL',
        fieldType: 'text',
      },
      {
        key: 'youtubeUrl',
        value: 'https://www.youtube.com/@AaronKeatingLanc3/',
        group: 'social',
        label: 'YouTube URL',
        fieldType: 'text',
      },
      {
        key: 'websiteUrl',
        value: 'https://www.expansion.ie/',
        group: 'social',
        label: 'Website URL',
        fieldType: 'text',
      },
      // Analytics
      {
        key: 'analyticsId',
        value: '',
        group: 'analytics',
        label: 'Plausible/Analytics Domain',
        fieldType: 'text',
      },
      // Branding
      {
        key: 'companyName',
        value: 'Expansion',
        group: 'branding',
        label: 'Company Name',
        fieldType: 'text',
      },
      {
        key: 'companyTagline',
        value: 'Software Engineering Studio',
        group: 'branding',
        label: 'Company Tagline',
        fieldType: 'text',
      },
    ]

    for (const setting of siteSettings) {
      await db.siteSetting.upsert({
        where: { key: setting.key },
        update: setting,
        create: setting,
      })
    }
    console.log(`Seeded ${siteSettings.length} site settings`)

    console.log('\n✓ Seed completed successfully')
  } catch (error) {
    console.error('Seed error:', error)
    throw error
  }
}
