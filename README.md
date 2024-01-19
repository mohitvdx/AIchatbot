# GPT Bot - AI Chatbot using OpenAI API

Welcome to the GPT Bot project! This project utilizes the OpenAI API to create an interactive chatbot powered by GPT (Generative Pre-trained Transformer). The chatbot is implemented in a React application, allowing users to engage in conversations with the AI assistant.

## Getting Started

To use this chatbot in your own project, follow the steps below:

1. **Set Up OpenAI API Key:**
   Obtain your OpenAI API key by signing up on the [OpenAI Platform](https://beta.openai.com/signup/). Once you have the API key, make sure to keep it secure.

2. **Install Dependencies:**
   Ensure you have the necessary dependencies installed. This project uses React and assumes you have a basic understanding of creating React applications.

   ```bash
   use client;  # Make sure to install any additional dependencies if required.
   ```

3. **Integrate OpenAI API Key:**
   Insert your OpenAI API key into the appropriate section in the project where the API is called. Locate the following line in the code:

   ```javascript
   const response = await fetch("/api", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       // Add your OpenAI API key here
       "Authorization": "Bearer YOUR_OPENAI_API_KEY",
     },
     body: JSON.stringify({ messages }),
   });
   ```

4. **Run the Project:**
   Start your React development server to run the chatbot application.

   ```bash
   npm start
   ```

   Open your browser and navigate to `http://localhost:3000` to interact with the chatbot.

## Features

- **User Interaction:**
  Users can input messages in the textarea and submit by pressing Enter or clicking the "send" button.

- **Real-time Conversation:**
  The chatbot maintains a conversation history and displays both user and assistant messages in a visually appealing format.

- **Loading Indicator:**
  A "thinking" message is displayed when the chatbot is processing a response, providing feedback to the user.

## Project Structure

- **Home Component:**
  The main React component containing the chatbot UI and logic.

- **State Management:**
  The component uses the React `useState` hook to manage the input, loading state, and message history.

- **Message Rendering:**
  Messages are dynamically rendered based on their role (assistant or user) with a timestamp for better readability.

## Customize and Extend

Feel free to customize the styling, add more features, or integrate additional functionality based on your project requirements. Explore the capabilities of the OpenAI API to enhance the chatbot's responses.

## Contributing

Contributions are welcome! If you have ideas for improvements, new features, or bug fixes, please open an issue or submit a pull request.

Happy Chatbotting!