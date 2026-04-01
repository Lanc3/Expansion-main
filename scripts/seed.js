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

    // ============================================
    // RESEARCH ARTICLES — Expansion AI Research Labs
    // ============================================
    const researchArticles = [
      {
        title:
          'What 16GB of VRAM Can Really Do: Small Models, Business Automation, and Building Software Around an LLM',
        slug: 'small-models-16gb-vram-business-automation',
        excerpt:
          'A practical field report on what small local models can actually do on 16GB of VRAM, where they break, and how prompt engineering plus deterministic software design turns them into useful business systems.',
        Image:
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80&auto=format&fit=crop',
        tags: ['small-models', 'local-ai', 'automation', 'prompt-engineering'],
        seoTitle:
          'Small Models on 16GB VRAM for Business Automation | Expansion AI Research Labs',
        seoDescription:
          'What we learned from exploring Qwen, Mistral, and LFM-class small models on 16GB VRAM, and how to build real business automation systems around local LLMs.',
        authorName: 'Aaron Keating',
        published: true,
        publishedAt: new Date('2026-03-24T09:00:00.000Z'),
        featured: false,
        contentFormat: 'markdown',
        body: `# The Question We Started With

The first serious question we asked was not, "What is the biggest model we can run?" It was, "What is the smallest model we can trust to do paid work?"

That one shift in perspective changed everything.

A lab built around local AI has to live in the world of constraints. Power draw matters. Latency matters. Deployment simplicity matters. Hardware budget matters. Privacy matters. And if the model is going to sit inside a real business workflow, reliability matters far more than leaderboard theater.

That is why we became obsessed with the class of small models that can live comfortably on 16GB of VRAM. They are cheap enough to experiment with, fast enough to iterate on, and close enough to production reality that every lesson transfers into software you can actually ship.

## The Models We Spent Time With

We explored a wide spread of small local models and model families:

- Qwen 2.5 Coder Instruct for code-leaning reasoning and structured software tasks
- Qwen 3.5 class models for broader instruction following and practical assistant behavior
- Mistral-family models for strong baseline language performance and fast iteration
- LFM 2.5 from Liquid AI, which immediately stood out to us as one of the most interesting directions in compact model behavior

Each model had a personality. Some were better at structured transformations. Some handled instructions cleanly but lost discipline under long context. Some felt impressive in a chat demo and then collapsed when asked to behave like a system component.

That distinction matters. A useful business model is not the one that gives the most exciting answer. It is the one that repeatedly gives the right shape of answer inside a larger workflow.

## What Small Models Can Already Automate

The most useful insight from this exploration is that small models are not general replacements for large frontier systems. They are specialized operators. When you put them inside well-designed software, they become surprisingly capable.

Tasks they are already well suited for include:

- document classification and routing
- extracting fields from messy text into structured JSON
- cleaning up internal notes, tickets, and CRM records
- summarizing long documents into role-specific briefs
- customer support triage and response drafting
- internal knowledge search with answer synthesis
- transforming one business format into another
- report preparation from partially structured inputs
- proposal scaffolding and scope-draft generation
- tagging, clustering, and normalizing inbound business data

In other words: the best early wins are not "replace the whole company with one model." The best wins are "remove the repetitive cognitive glue work between systems."

## The Most Important Lesson: Build Around the Model

The biggest mistake people make with small models is asking them to behave like magic. The second biggest mistake is giving them too much authority with too little structure.

We learned very quickly that the right question is:

**What part of this workflow should be probabilistic, and what part should be deterministic?**

A good small-model system usually looks like this:

1. deterministic software gathers the right inputs
2. the model performs a narrow language or reasoning transformation
3. deterministic software validates, routes, stores, or retries the result

That means the LLM is not the product by itself. The LLM is a component inside the product.

When you design systems this way, prompt engineering stops being vague art and starts becoming interface design.

## What We Learned About Prompt Engineering

The phrase "prompt engineering" gets mocked because it is often treated like copywriting for chatbots. That is not how we see it.

In real systems, prompts act more like runtime policy.

We learned to care deeply about:

- role definition
- response format
- failure behavior
- tool boundaries
- forbidden assumptions
- confidence signaling
- explicit output contracts

The system prompt is where you teach the model what job it has. The user prompt is where you describe the current task. The surrounding application is what gives both of those things meaning.

A weak software system asks the model a question and hopes for brilliance.

A strong software system tells the model:

- what it is
- what it is not
- what inputs it may trust
- what output shape is acceptable
- what to do when information is missing
- when to stop and ask for help

This is especially important with small models because they have less room to recover from ambiguity. You are not just prompting them. You are reducing entropy.

## Where Small Models Break

We also learned not to romanticize them.

Small models break when:

- context windows are overloaded with irrelevant information
- tasks require too much latent world knowledge
- instructions conflict or arrive in the wrong order
- multi-step reasoning is left entirely inside one response
- the system expects flawless factual recall from the model alone
- output validation is missing

This is why software design matters so much. If the model is weak at arithmetic, do not "hope harder" with the prompt. Give it a deterministic calculation step. If the model is weak at exact retrieval, build retrieval. If it becomes unstable over long tasks, chunk the job and track state explicitly.

The line between language ability and systems engineering became clearer every week we worked with these models.

## Why LFM 2.5 Got Our Attention

Among all the models we explored, LFM 2.5 triggered something stronger than technical curiosity. It triggered strategy.

What fascinated us was not just that it was compact. It was that it hinted at a future where smaller models are not consolation prizes. They are the right instruments for specific domains.

That changed our thinking from:

"How do we use whatever model is available?"

to:

"How do we build a lab that learns how to gather, shape, and train data for purpose-built small models?"

That is the moment the idea of **Expansion AI Research Labs** stopped sounding like a nice brand name and started sounding like a real mission.

## The Business Opportunity

For business automation, small local models create a very attractive operating window:

- lower inference cost
- easier on-prem or private deployment
- faster iteration loops
- greater control over prompts and system behavior
- simpler product packaging for niche use cases

Most businesses do not need one god-model. They need five dependable workflows:

- intake
- classify
- extract
- summarize
- decide what happens next

If a small model can do those things with strong software around it, the economics become compelling very quickly.

## Where This Led Us

That work led us to a bigger thesis:

- first, understand what small models can already do
- second, gather high-quality domain data
- third, determine what should be trained into the model
- fourth, engineer the rest deterministically around it
- finally, orchestrate multiple narrow experts into a coherent system

That is the path that became this lab.

This first article is really the origin story. It is the point where local models stopped being a side interest and became a research direction.

We did not walk away thinking small models were sufficient on their own.

We walked away with a better conclusion:

small models become powerful when you stop treating them like answers and start treating them like components.`,
      },
      {
        title:
          'KnowledgeForge and the First Real Problem in Any AI Lab: High-Quality, Training-Ready Data',
        slug: 'knowledgeforge-data-curation-first-problem-ai-lab',
        excerpt:
          'A deep look at KnowledgeForge, the dataset curation app we are building to turn raw web content, uploads, and APIs into scored, deduplicated, export-ready training data.',
        Image:
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80&auto=format&fit=crop',
        tags: ['datasets', 'knowledgeforge', 'data-curation', 'training-data'],
        seoTitle:
          'KnowledgeForge and the Data Problem in AI Labs | Expansion AI Research Labs',
        seoDescription:
          'Why the hardest early problem in AI is not model selection but dataset quality, and how KnowledgeForge approaches crawl planning, curation, scoring, deduplication, and export.',
        authorName: 'Aaron Keating',
        published: true,
        publishedAt: new Date('2026-03-26T09:00:00.000Z'),
        featured: false,
        contentFormat: 'markdown',
        body: `# Every AI Lab Hits the Same Wall

The romance of AI usually starts with models.

The reality starts with data.

Once we began taking small-model research seriously, we hit the same wall that nearly every serious team hits: raw information is everywhere, but **training-ready data is rare**.

Articles are noisy. Forums are repetitive. Scraped pages are messy. Internal documents are inconsistent. APIs expose useful pieces, but rarely in the shape a training pipeline wants. And even when you gather enough material, quantity is not quality.

That is the problem **KnowledgeForge** is designed to solve.

## What KnowledgeForge Actually Does

KnowledgeForge is not just a web scraper, and it is not just an export utility. It is a **dataset curation system**.

The workflow begins with a goal. From there the app generates a crawl plan, identifies useful source priorities, and estimates the type of samples worth collecting. That matters because data collection without a plan becomes hoarding very quickly.

From there, the system ingests from multiple pathways:

- web search and page scraping
- API sources such as technical or public knowledge systems
- uploaded local files

What comes in is not treated as finished material. It is treated as raw ore.

## The Pipeline That Changed Our Thinking

What makes KnowledgeForge interesting is the multi-stage curation pipeline:

- extract
- clean
- rewrite
- structure
- score
- deduplicate
- filter

That sequence captures a very important truth: a useful dataset is **manufactured**, not merely collected.

The raw input might contain useful facts, examples, and patterns, but it is still tangled in formatting noise, duplicated concepts, off-topic detours, and inconsistent language. If you want a model to learn cleanly, your pipeline has to do the work your future training run cannot do for you.

## Why Structured Data Matters

One of the most valuable design decisions in this project is the insistence on structured outputs. Instead of letting the pipeline remain a vague text refinery, it aims toward training-oriented shapes such as:

- instruction
- input
- output

That is important because it creates a contract between curation and downstream fine-tuning. The export step is not improvisation. It is a handoff.

Once you can reliably move from messy source material to scored, structured examples, you can export into formats that fit real training workflows. That is the difference between a research toy and a lab tool.

## Why Deduplication and Scoring Are Not Optional

Another lesson we learned is that duplication destroys dataset quality quietly.

It inflates confidence. It gives the illusion of coverage. It tricks you into thinking you have depth when you really have repetition.

KnowledgeForge attacks this with both similarity-aware deduplication and scoring logic. Those mechanisms matter because dataset quality is not only about whether each individual item is decent. It is about whether the whole corpus teaches the model efficiently.

We care about:

- coherence
- usefulness
- uniqueness
- domain fit

Those are exactly the kinds of signals that determine whether a dataset creates a brittle parrot or a genuinely useful specialist.

## Why This Is the First Problem in Any LLM Endeavor

People often speak about training as though data gathering is the warm-up. In practice, data gathering and curation are the first real research problem.

Before you ask:

- which base model to use
- how many epochs to train
- what adapter strategy to choose
- how to benchmark the result

you first need to answer:

- what do we want the model to know?
- what examples teach that well?
- what examples teach it badly?
- what noise will poison the training run?
- what shape does the training pipeline expect?

That is why this project matters so much to our lab. It is not a side utility. It is the front gate.

## The Bigger Insight: Data Quality Is a Product

Working on KnowledgeForge pushed us toward a stronger belief:

**High-quality datasets are a product in their own right.**

That product has:

- user flows
- approval steps
- observability
- scoring
- exports
- support bundles
- operational safety concerns

The app reflects that. It is not built as a hidden script folder. It is built as a system with setup, planning, ingestion, processing, inspection, and export. That full loop matters because serious data work needs traceability.

If a sample gets into a dataset, we want to know where it came from, what stages transformed it, why it scored the way it did, and whether it should survive into export.

That is lab discipline.

## What We Learned While Building It

Three lessons stood out:

### 1. Collection without curation is mostly noise

A huge raw corpus can still be a weak training asset. Scale only helps once the pipeline is removing friction, duplication, and ambiguity.

### 2. A dataset needs an editorial point of view

If you do not know what makes a sample useful, the model will inherit your uncertainty. Curation is where a lab encodes its standards.

### 3. Training readiness is a systems problem

Good datasets do not emerge from one prompt. They emerge from workflow design, storage design, scoring design, dedup design, and export discipline.

## Why KnowledgeForge Is Step One for the Lab

Expansion AI Research Labs exists because we want to build small, capable, domain-focused AI systems.

But if that is the goal, then the first thing we need is not a better slogan or a louder model demo.

We need the ability to:

- gather domain material deliberately
- refine it into clean, high-signal examples
- score and inspect the output
- export it into formats suitable for fine-tuning and evaluation

That is exactly why KnowledgeForge is one of the foundational projects in this lab.

It solves the first serious bottleneck in any AI endeavor:

not running the model,

but deciding what the model should be allowed to learn from.`,
      },
      {
        title:
          'Train the Model or Engineer the System? The Real Boundary of Small-Model Intelligence',
        slug: 'train-the-model-or-engineer-the-system-small-llms',
        excerpt:
          'When should you train a small model to become an expert, and when should you keep the model narrow and build deterministic systems around it instead? This article explores that boundary.',
        Image:
          'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&q=80&auto=format&fit=crop',
        tags: ['small-llms', 'deterministic-systems', 'training', 'liquid-models'],
        seoTitle:
          'Train the Model or Engineer the System? | Expansion AI Research Labs',
        seoDescription:
          'A practical framework for deciding when to fine-tune or specialize a small model and when to solve the problem with deterministic software instead.',
        authorName: 'Aaron Keating',
        published: true,
        publishedAt: new Date('2026-03-28T09:00:00.000Z'),
        featured: false,
        contentFormat: 'markdown',
        body: `# The Most Important Architecture Question

Once you start building with small models, one question appears everywhere:

**Should this capability live inside the model, or outside it?**

That question is much more important than people think.

If you push too much into the model, you get fragile systems, hard-to-debug failures, and expensive retraining cycles. If you push too much into deterministic code, you miss the flexibility that makes language models valuable in the first place.

The craft is in drawing the boundary correctly.

## What Small Models Are Good At Internally

A small model can be excellent at narrow internal competencies such as:

- tone and style transfer
- domain-specific language patterns
- structured interpretation of messy text
- lightweight reasoning over well-framed tasks
- classification and ranking under clear schemas
- summarization and condensation

These are the kinds of capabilities that benefit from specialization. When the same pattern appears repeatedly, training or adaptation can make sense.

That is why we are interested in the idea of re-training or specializing liquid-style models on carefully curated data. Not because every problem needs a custom model, but because certain narrow domains reward compact, well-shaped internal knowledge.

## What Should Stay Deterministic

On the other hand, some capabilities should almost never be left to the model alone:

- arithmetic with business consequences
- compliance rules
- exact lookups
- pricing logic
- workflow state transitions
- permission checks
- external system writes
- irreversible actions

These are deterministic responsibilities.

A model can recommend. A model can translate intent. A model can explain choices. But when the task requires exactness, reproducibility, or auditability, the surrounding system should own the outcome.

This is the line we keep returning to:

**Use the LLM for ambiguity. Use deterministic tools for truth.**

## The Expert Model vs the Expert System

A lot of teams ask whether they should train a model to be an expert in a narrow area.

That can be the right move when:

- the task is language-heavy
- examples are abundant and high quality
- the domain has consistent patterns
- low latency matters
- the required output style is stable

But many so-called "expert model" problems are actually "expert system" problems in disguise.

For example:

- if the job is to choose the right internal policy section, retrieval may matter more than training
- if the job is to apply business rules, deterministic logic may matter more than latent reasoning
- if the job is to generate exact structured outputs, validators and repair loops may matter more than smarter weights

We increasingly see success coming from a hybrid:

- keep the model narrow
- teach it the domain language
- keep critical truth external
- build a deterministic execution layer around it

## What This Means for Small Business AI

For small business automation, this distinction is vital.

A model does not need to become an entire accountant, operations manager, sales coordinator, and support lead.

It needs to become excellent at specific subtasks:

- reading messy inbound information
- classifying intent
- drafting structured responses
- extracting the right fields
- asking the next useful question

Then the system around it can:

- validate numbers
- call tools
- fetch records
- enforce rules
- route work
- store outputs

That combination is what makes small models commercially viable.

## Why We Are Interested in Liquid-Style Specialization

Part of our research direction is the idea of taking an efficient liquid-style model and making it much better at small, valuable domains using the right data.

This is where the work from KnowledgeForge becomes essential. You cannot responsibly specialize a model unless the dataset is curated, labeled, and genuinely representative of the task.

The dream is not "train one model to know everything."

The dream is:

- gather high-signal domain material
- strip noise aggressively
- shape the examples deliberately
- train or adapt the model for a narrow class of work
- wrap that model in a deterministic product system

That is how small models become useful, trustworthy specialists.

## A Concrete Example: Small Business Tasks

Imagine a model specialized for a narrow band of small-business operations:

- invoice intake
- order email classification
- supplier communication drafting
- CRM cleanup
- lead qualification summaries
- support ticket normalization

The specialized model handles messy language and intent.

The deterministic system around it handles:

- exact schema validation
- database reads and writes
- known business rules
- retry flows
- audit logs
- tool invocation

That is not an LLM replacing the business.

That is an LLM becoming a reliable layer inside the business.

## Another Example: Game NPCs

We are also fascinated by the opposite kind of specialization: not purely operational, but experiential.

Imagine training a compact liquid-style model to behave as an NPC mind inside a fantasy game:

- trained on fantasy lore
- trained on old-form language patterns
- trained on the social rules of the world
- trained to preserve tone, cadence, and setting

The model does not need to understand modern business correspondence in that context. It needs to speak like the world it belongs to.

Even there, the same system principle applies.

The model can generate language and role-consistent behavior.

The game system still owns:

- quest state
- combat logic
- item truth
- relationship counters
- world rules

Again, the model handles ambiguity and expression. The system handles truth and consequence.

## The Real Decision Framework

When deciding whether to train the model or engineer the system, we ask:

### Train the model when:

- the value is in language behavior
- the pattern is repeated often
- the domain can be represented with strong examples
- the task benefits from internalized style or compact latent knowledge

### Engineer the system when:

- correctness matters more than fluency
- the answer exists in a database, ruleset, or external tool
- outcomes must be reproducible
- the task can be decomposed into explicit steps

### Do both when:

- the model interprets the messy world
- the system acts on the clean world

That hybrid pattern is where we think most practical small-model products will live.

## Our Current Belief

We no longer think the future belongs to one giant model asked to do everything.

We think the future belongs to:

- better data
- narrower experts
- cleaner boundaries
- stronger deterministic systems
- tighter orchestration

The model should know enough to be useful.

The system should know enough to keep it honest.

That is the boundary we are researching now, and it is one of the central design principles behind Expansion AI Research Labs.`,
      },
      {
        title:
          'Why Local AI Systems Live or Die by Orchestration: Swarms, Context Budgets, and Deterministic Checkpoints',
        slug: 'why-local-ai-systems-live-or-die-by-orchestration',
        excerpt:
          'A local model is only as useful as the orchestrator around it. Here we explore task decomposition, context control, agent swarms, and the deterministic checkpoints that make small-model systems reliable.',
        Image:
          'https://images.unsplash.com/photo-1526378800651-c996ea0b5d07?w=1600&q=80&auto=format&fit=crop',
        tags: ['orchestration', 'agent-swarms', 'context-engineering', 'local-ai'],
        seoTitle:
          'Why Local AI Systems Live or Die by Orchestration | Expansion AI Research Labs',
        seoDescription:
          'How we think about orchestrator lifecycles, context budgets, agent swarms, tool routing, and deterministic checkpoints for local small-model systems.',
        authorName: 'Aaron Keating',
        published: true,
        publishedAt: new Date('2026-03-30T09:00:00.000Z'),
        featured: false,
        contentFormat: 'markdown',
        body: `# The Model Is Not the System

One of the fastest ways to fail with local AI is to over-focus on model choice and under-invest in orchestration.

The difference between a promising local prototype and a dependable production system is usually not a few leaderboard points. It is the quality of the orchestrator.

When we talk about orchestration, we mean the full lifecycle around the model:

- how work is decomposed
- how context is selected
- how tools are called
- how state is tracked
- how failures are handled
- how multiple agent roles coordinate

For local systems, this matters even more because the margin for waste is smaller. Small models do not tolerate sloppy context management.

## Why Agentic Systems Need Structure

When a task becomes complex enough, one model invocation is the wrong unit of work.

Instead, we break work into roles:

- planner
- researcher
- extractor
- tool operator
- validator
- summarizer
- QA reviewer

That is where the idea of agentic swarms becomes useful. Not because more agents are automatically better, but because specialized roles reduce cognitive overload per step.

The orchestrator decides:

- who should act next
- what context that agent should receive
- what success looks like for that step
- whether the result should be accepted, repaired, or rerun

Without that structure, the system becomes a chat log pretending to be software.

## The Context Problem Is the Real Problem

Small local models do not usually fail because they are unintelligent in the abstract. They fail because we bury them in the wrong context.

That is why we think a serious orchestrator needs a **master context engine**.

Its job is to track the total task state and decide, at each step, how to budget the context window.

Not all agents need the same context mix.

For one agent, the right ratio may be:

- 40% system policy
- 20% current task
- 20% retrieved knowledge
- 20% recent execution history

For another agent, it may be:

- 20% system policy
- 15% task framing
- 45% tool or RAG context
- 20% strict output contract

That is the kind of detail that separates impressive demos from reliable behavior.

## Orchestrator Lifecycle

A strong orchestrator should move through a repeatable lifecycle:

1. understand the task
2. decompose it into bounded subproblems
3. assign a role to the next step
4. build a context package for that role
5. invoke the model or tool
6. validate the result
7. update global state
8. decide whether to continue, branch, retry, or finish

The crucial idea here is that global state should not be implied by the chat history. It should be tracked explicitly.

That state can include:

- task objective
- completed steps
- pending branches
- retrieved facts
- validated outputs
- unresolved ambiguities
- tool results
- failure notes

This is the beginning of a real context engine.

## When to Chunk Work

Chunking is not just for documents. It is for cognition.

If a task asks a small model to:

- understand a large body of source material
- infer priorities
- generate structured output
- cross-check edge cases
- propose next actions

all at once, you are setting it up to fail.

Chunking works because it lowers the burden per step. It allows the orchestrator to preserve signal and discard noise between stages.

In practice, this means:

- splitting research from synthesis
- splitting extraction from validation
- splitting planning from execution
- splitting execution from QA

Every time we do this well, the system becomes more stable.

## Parameters Are Behavioral Controls

A lot of people treat parameters like temperature, top_k, and similar controls as minor tuning knobs.

We do not.

For orchestrated systems, parameters are behavior controls.

Different agent roles may need very different operating modes:

- low-temperature validation agents
- moderate-temperature drafting agents
- constrained classification agents
- slightly more exploratory planning agents

You are not only selecting a model. You are selecting how that model should behave in a given role.

That is why one-size-fits-all runtime settings often produce disappointing results. The orchestration layer should own role-specific model behavior.

## Deterministic Checkpoints

Even in a swarm system, there are moments where probability must stop.

We use deterministic checkpoints as a way to keep the system aligned:

- schema validation
- business rule checks
- guardrails before side effects
- approval gates for risky actions
- explicit QA before completion

This is essential.

If a planner decides the task is complete, that should not automatically become truth. Completion is not a vibe. It is a validated state transition.

This is one of the most important ideas in local AI engineering:

**stochastic reasoning should flow into deterministic acceptance.**

## Why This Matters More for Local Models

Large hosted models can sometimes brute-force their way through bad orchestration because they have more reasoning capacity and more room to absorb noisy prompts.

Small local models do not forgive that kind of laziness.

They punish:

- bloated context
- weak role definitions
- missing validation
- mixed objectives
- unbounded tasks

But they also reward discipline.

When the orchestrator is good, small models become fast, cheap, and surprisingly dependable.

## The System We Want to Build

Our direction is toward orchestrators that do more than route prompts. We want systems that:

- track total task context explicitly
- dynamically budget context per agent
- separate internal memory from transient working memory
- decide when to call tools instead of the model
- tune role-specific runtime behavior
- preserve validated truth across long multi-step workflows

That is how agentic swarms become useful for real business tasks.

## Final Thought

A local model by itself is an engine.

An orchestrator is the transmission, the dashboard, the braking system, the memory, and the route planner.

If the orchestrator is weak, the whole machine feels weak.

If the orchestrator is strong, even a small model can participate in systems that look far larger than the raw model would suggest.

That is why we believe orchestration is not the supporting detail.

It is the discipline that turns local intelligence into software.`,
      },
      {
        title:
          'Launching Expansion AI Research Labs: From Small Models to Data, Training, and Agentic Systems',
        slug: 'launching-expansion-ai-research-labs',
        excerpt:
          'The manifesto for Expansion AI Research Labs: why small local models, curated datasets, narrow specialists, and orchestrated agent systems form our roadmap for building practical AI for business automation.',
        Image:
          'https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?w=1600&q=80&auto=format&fit=crop',
        tags: ['research-lab', 'manifesto', 'ai-strategy', 'business-automation'],
        seoTitle:
          'Launching Expansion AI Research Labs | Expansion AI Research Labs',
        seoDescription:
          'The research thesis behind Expansion AI Research Labs and how small models, data curation, specialization, and orchestration come together into a practical AI roadmap.',
        authorName: 'Aaron Keating',
        published: true,
        publishedAt: new Date('2026-04-01T09:00:00.000Z'),
        featured: true,
        contentFormat: 'markdown',
        body: `# Why This Lab Exists

Expansion AI Research Labs exists because we became convinced of something simple:

the future of useful AI will not be built from hype alone. It will be built from disciplined systems.

Our path into this lab did not begin with a manifesto. It began with a sequence of hard practical questions:

- what can small models actually do on local hardware?
- what kind of data do we need to make them better?
- what should be trained into a model versus enforced by software?
- how do multiple narrow agents coordinate without collapsing into chaos?

Each project we built answered one part of that chain.

This article ties them together.

## Part One: Small Models Made the Vision Plausible

The first breakthrough was not philosophical. It was operational.

We spent real time exploring what small local models could do on hardware in the 16GB VRAM class. That exploration changed our assumptions.

We found that compact models are already useful for:

- structured text transformation
- extraction and classification
- workflow triage
- drafting and summarization
- narrow code and systems tasks
- internal business process support

They are not magic. They do not replace architecture. But they are far more capable than many people assume when given clean prompts, narrow roles, and deterministic support.

That work is captured in our first article:

- [What 16GB of VRAM Can Really Do](/research/small-models-16gb-vram-business-automation)

That article is really the spark. It is where the idea of a research lab became economically credible.

## Part Two: Data Became the Bottleneck

Once we accepted that small models were worth serious effort, the next bottleneck became obvious.

If we want domain-focused AI systems, we need domain-focused data.

Not random scraped text.

Not giant undifferentiated corpora.

We need curated, labeled, polished, training-ready material.

That realization led directly to **KnowledgeForge**, our dataset curation project.

Its role is not glamorous, but it is foundational:

- generate crawl plans from research goals
- ingest from multiple sources
- transform raw material through curation stages
- score, deduplicate, and filter samples
- export training-ready outputs

That work is covered here:

- [KnowledgeForge and the First Real Problem in Any AI Lab](/research/knowledgeforge-data-curation-first-problem-ai-lab)

If the first article is the spark, this project is the furnace.

## Part Three: The Boundary Between Model and System

The third lesson was architectural.

Even with better data, not every capability belongs inside the model.

Some things should be learned internally:

- domain tone
- task-specific language patterns
- narrow expertise
- classification instincts

Other things should remain external and deterministic:

- exact rule application
- database truth
- calculations
- workflow permissions
- side-effect execution

This became one of the defining principles of the lab:

**Use the model for ambiguity. Use systems for certainty.**

That principle drives our article on specialization and deterministic design:

- [Train the Model or Engineer the System?](/research/train-the-model-or-engineer-the-system-small-llms)

This is also where our interest in liquid-style specialization becomes strategically important. We do not want giant generic intelligence for everything. We want small, high-signal specialists embedded inside strong systems.

## Part Four: Orchestration Makes the Whole Thing Real

Even a curated specialist model is not enough for real-world automation.

Once a task becomes multi-step, tool-driven, or cross-domain, the system needs orchestration.

That means:

- role assignment
- context budgeting
- memory management
- task chunking
- deterministic checkpoints
- explicit completion criteria

Without orchestration, local AI stays trapped in single-shot demos.

With orchestration, narrow model competence can be compounded into real systems.

That is the focus of our article on agentic swarms and orchestration:

- [Why Local AI Systems Live or Die by Orchestration](/research/why-local-ai-systems-live-or-die-by-orchestration)

## The Lab Thesis

Taken together, these projects define our thesis:

### 1. Start with efficient local intelligence

Small models matter because they force discipline and make deployment practical.

### 2. Build your own data advantage

The highest leverage asset in a narrow AI system is often not the model. It is the dataset.

### 3. Specialize intentionally

Do not train models to know everything. Train them to excel where latent language capability actually matters.

### 4. Engineer the boundary

Make a clean distinction between what the model infers and what the system proves.

### 5. Orchestrate for reliability

Multi-step business automation depends on context management, routing, validation, and explicit state.

That sequence is the blueprint behind Expansion AI Research Labs.

## What We Want This Lab To Produce

We are not interested in building AI that only impresses in a demo window.

We want to build:

- private automation systems for small and mid-sized businesses
- narrow expert models trained on curated, high-signal datasets
- tool-using local agents with reliable orchestration
- domain-specific systems that are cheaper, faster, and more controllable than generic hosted approaches

That includes both business systems and more experimental creative applications.

For business, that means workflows that reduce manual work without turning operations into probabilistic chaos.

For interactive systems, that means specialist models that feel native to a world or role rather than bolted on from outside it.

## Why Now

This lab makes sense now because three conditions have converged:

- small local models are good enough to be strategically interesting
- tooling for data curation and orchestration has matured enough to productize
- businesses increasingly need systems that are private, controllable, and purpose-built

The old assumption was that meaningful AI work required giant infrastructure first.

We think the more interesting path is the opposite:

start smaller,
get sharper,
own the data,
own the orchestration,
and build systems that solve real work.

## The Road Ahead

Expansion AI Research Labs is not a content category. It is a working roadmap.

The roadmap looks like this:

1. explore what compact local models can do today
2. build stronger dataset curation pipelines
3. specialize narrow models with deliberate data
4. wrap them in deterministic software systems
5. orchestrate multiple agents into reliable workflows

That is the stack we are building.

If you want to follow the thinking that led here, start with the other articles in this series:

- [What 16GB of VRAM Can Really Do](/research/small-models-16gb-vram-business-automation)
- [KnowledgeForge and the First Real Problem in Any AI Lab](/research/knowledgeforge-data-curation-first-problem-ai-lab)
- [Train the Model or Engineer the System?](/research/train-the-model-or-engineer-the-system-small-llms)
- [Why Local AI Systems Live or Die by Orchestration](/research/why-local-ai-systems-live-or-die-by-orchestration)

This lab is our attempt to turn those ideas into software, data, and systems that matter.

That is the work now.`,
      },
    ]

    await db.post.updateMany({
      data: { featured: false },
      where: { featured: true },
    })

    for (const article of researchArticles) {
      await db.post.upsert({
        where: { slug: article.slug },
        update: article,
        create: article,
      })
    }
    console.log(`Seeded ${researchArticles.length} research articles`)

    // ============================================
    // PROJECT DATA — Mindo (The Medical Independent)
    // ============================================
    const projectDatas = [
      {
        title: 'Mindo — The Medical Independent',
        category: 'Mobile',
        image:
          'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80&auto=format&fit=crop',
        video: '',
        clientName: 'The Medical Independent',
        clientWebsite: 'https://www.medicalindependent.ie/',
        objective:
          'Ship native-quality iOS and Android apps so Irish healthcare professionals can follow breaking medical news, analysis, and multimedia from The Medical Independent — with alerts, saved reading, podcasts, video, and access to digital journals, using their existing web credentials.',
        tools:
          'iOS, Android, push notifications, in-app audio & video, secure sign-in, publisher content APIs',
        body: `The Medical Independent is a leading Irish title for investigative and breaking news in healthcare. Their audience — GPs, hospital doctors, and allied health professionals — needed a single app that matched how people actually consume news on the go: short updates, deep reads, and audio when commuting.

We built Mindo for iOS and Android: breaking-news alerts, trusted reporting on the Irish health service, podcasts, video, article saving, social sharing, and access to digital e-copies and journals. Readers sign in with their existing medicalindependent.ie credentials so the experience stays continuous with the web.

The app is the publication’s official mobile channel for healthcare professionals who rely on timely, independent coverage of policy, clinical practice, and the wider medical industry in Ireland and abroad. It is listed on the App Store and Google Play as “Mindo — Medical Independent” (Greencross Publishing).`,
        by: 'Expansion',
        challenge:
          'Deliver a reliable news and media experience across iOS and Android — notifications, reading patterns suited to clinical schedules, and multimedia — while integrating with the publisher’s membership and content systems.',
        solution:
          'End-to-end mobile development with push-driven breaking news, structured article and media playback, and account flows aligned with The Medical Independent’s digital access.',
        results:
          'Mindo is live on the App Store and Google Play as the official Medical Independent app, with the feature set the publisher markets to its professional readership (alerts, podcasts, video, e-copies, and more).',
        metrics:
          'Medical Independent promotes Mindo to a community of 14,000+ healthcare professionals (publisher figure)',
        featured: true,
      },
    ]

    for (const project of projectDatas) {
      const existing = await db.projectData.findFirst({
        where: { title: project.title },
      })
      if (existing) {
        await db.projectData.update({
          where: { id: existing.id },
          data: project,
        })
      } else {
        await db.projectData.create({ data: project })
      }
    }
    console.log(`Seeded ${projectDatas.length} project showcase entries`)

    console.log('\n✓ Seed completed successfully')
  } catch (error) {
    console.error('Seed error:', error)
    throw error
  }
}
