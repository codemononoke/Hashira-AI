<p align="center">
  <img src="public/logo.svg" alt="Hashira-AI Logo" width="100">
</p>
<h1 align="center">Hashira-AI</h1>
<p align="center">
Inspired by the strength and precision of Demon Slayers, Hashira-AI offers a suite of AI tools for conversation, image, audio, video, and code generation to empower developers and creators.
</p>
<p align="center">
  <img src="https://res.cloudinary.com/dmhfkaawt/image/upload/v1718265249/Screenshot_20240613_132136_mhucuk.png" alt="Hashira-AI Logo" width="100%">
</p>

## 📋 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## 📖 Introduction

Hashira-AI is a powerful platform that leverages the latest advancements in AI to provide a wide range of tools for various creative and development tasks. Whether you need to generate code, create stunning images, produce audio, craft videos, or engage in meaningful conversations, Hashira-AI has you covered.

## ✨ Features

- **Conversation Generation**: Engage in AI-powered conversations.
- **Image Generation**: Create stunning images using advanced AI models.
- **Audio Generation**: Produce high-quality audio content.
- **Video Generation**: Craft videos with AI-driven tools.
- **Code Generation**: Generate code snippets to accelerate your development process.

## 🛠️ Tech Stack

- **Frontend**: Next.js, TailwindCSS, shadcn
- **Backend**: Prisma, Replicate AI, OpenAI
- **Authentication**: Clerk
- **Payments**: Stripe
- **Database**: PostgreSQL (Dockerized)
- **Containerization**: Docker, docker-compose

## 🚀 Installation

To get started with Hashira-AI, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/hashira-ai.git
    cd hashira-ai
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your environment variables. Here's an example:
    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
    CLERK_SECRET_KEY=your-clerk-secret-key

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

    OPENAI_API_KEY=your-openai-api-key
    REPLICATE_API_TOKEN=your-replicate-api-token

    POSTGRES_HOST=your-postgres-host
    POSTGRES_PORT=your-postgres-port
    POSTGRES_USER=your-postgres-user
    POSTGRES_PASSWORD=your-postgres-password
    POSTGRES_DB=your-postgres-db

    DATABASE_URL=postgresql://your-postgres-user:your-postgres-password@your-postgres-host:your-postgres-port/your-postgres-db?schema=public

    STRIPE_API_KEY=your-stripe-api-key
    STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret

    NEXT_PUBLIC_APP_URL=your-app-url
    ```

4. **Set up PostgreSQL with Docker**:
    ```bash
    docker-compose up -d
    ```

5. **Run database migrations**:
    ```bash
    npx prisma migrate dev
    ```

6. **Start the development server**:
    ```bash
    npm run dev
    ```

## 💻 Usage

Visit `http://localhost:3000` to access the Hashira-AI platform. Use the provided tools to generate conversations, images, audio, videos, and code.

## 🤝 Contributing

We welcome contributions from the community. To contribute, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. **Make your changes**.
4. **Commit your changes**:
    ```bash
    git commit -m "Add feature: your feature name"
    ```
5. **Push to the branch**:
    ```bash
    git push origin feature/your-feature-name
    ```
6. **Create a pull request**.


## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
