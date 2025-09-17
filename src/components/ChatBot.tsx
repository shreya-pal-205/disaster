// ChatBot.tsx
import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Load API key from .env
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([
    {
      role: "bot",
      text: "👋 Hi! I’m your Disaster Safety Assistant. Ask me how to stay safe during earthquakes, floods, or fires.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const chatHistory = newMessages
        .map((m) => `${m.role === "user" ? "Student" : "Assistant"}: ${m.text}`)
        .join("\n");

      const result = await model.generateContent(
        `You are a friendly disaster safety assistant for school/college students.
        Provide interactive, clear, and practical guidance on precautionary measures 
        during disasters like earthquakes, floods, and fires.
        Keep it very short and crisp, student-friendly, and conversational.

        Conversation so far:
        ${chatHistory}

        Student just asked: ${input}`
      );

      const reply = result.response.text();
      setMessages([...newMessages, { role: "bot", text: reply }]);
    } catch (error) {
      console.error(error);
      setMessages([
        ...newMessages,
        { role: "bot", text: "⚠️ Oops! Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#000000] p-2 sm:p-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white rounded-2xl shadow-2xl flex flex-col h-[90vh] sm:h-[85vh] md:h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="bg-[#d38d59] text-white p-4 text-lg font-bold text-center shadow-md">
          🛡️ Disaster Safety Chatbot
        </div>

        {/* Chat Window */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-[#ffffff] to-[#f9f9f9] text-sm sm:text-base">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-2xl max-w-[80%] break-words shadow ${
                msg.role === "user"
                  ? "ml-auto bg-[#f7ba05] text-black rounded-br-none"
                  : "mr-auto bg-[#7c7888] text-white rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="italic text-gray-500 animate-pulse">Typing...</div>
          )}
        </div>

        {/* Input Box */}
        <div className="flex border-t border-gray-200 bg-white">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="💬 Ask about disaster safety..."
            className="flex-1 p-3 text-sm sm:text-base outline-none rounded-bl-2xl"
          />
          <button
            onClick={handleSend}
            className="bg-[#d38d59] text-white px-4 sm:px-6 font-semibold hover:bg-[#f7ba05] hover:text-black transition rounded-br-2xl"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
