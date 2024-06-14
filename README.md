# Hashira-AI

<p align="center">
  <img src="public/logo.svg" alt="Brainstormer Logo" width="100" height="100">
</p>
<h2 align="center">Hashira-AI</h2>
<p align="center">
Inspired by the strength and precision of Demon Slayers, Hashira-AI offers AI tools for conversation, image, audio, video, and code generation to empower developers and creators.
</p>

![banner](https://res.cloudinary.com/dmhfkaawt/image/upload/v1718265249/Screenshot_20240613_132136_mhucuk.png)


## Features

- **Conversation:** Build chatbots and conversational AI agents.
- **Code Generation:** Automate code writing for various purposes.
- **Image Generation:** Comming Soon.
- **Audio Generation:** Comming Soon.
- **Video Generation:** Comming Soon.

## Installation

1. Clone the repository
    ```bash
    git clone https://github.com/codemononoke/trello-clone
    cd trello-clone
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Set up your Prisma schema
    ```bash
    npx prisma generate
    npx prisma migrate dev --name init
    ```
    
## Environment Variables

Create a `.env` file in the root of your project and add the following variables:

```env
# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# clerk redirect url(s)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# openai api key
OPENAI_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXX

```

## Usage

1. Run the development server
    ```bash
    npm run dev
    ```

2. Open http://localhost:3000 with your browser to see the result.


## Contributing

1. Fork the repository.
2. Clone the forked repository to your local machine.
3. Install dependencies with npm install.
4. Add an .env file for environment variables.
5. Make your changes and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

For questions or feedback, please contact us at priyanshup891@gmail.com.

If you find Hashira-AI helpful, please consider giving it a star on GitHub to show your support!

