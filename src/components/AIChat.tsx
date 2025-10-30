import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Briefcase,
  Code,
  FolderOpen,
  Mail,
  GraduationCap,
  Award,
  MapPin,
  Clock,
} from "lucide-react";
import {
  personalInfo,
  skills,
  experience,
  projects,
  education,
  certifications,
} from "../data/portfolio";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
}

interface ChatResponse {
  response: string;
  suggestions?: string[];
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Quick action suggestions with icons
  const quickActions = [
    {
      text: "Tell me about his experience",
      icon: Briefcase,
      color: "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100",
    },
    {
      text: "What technologies does he work with?",
      icon: Code,
      color: "bg-green-50 text-green-600 border-green-200 hover:bg-green-100",
    },
    {
      text: "Show me his projects",
      icon: FolderOpen,
      color:
        "bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100",
    },
    {
      text: "How can I contact him?",
      icon: Mail,
      color:
        "bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100",
    },
  ];

  // Get icon for suggestion text
  const getSuggestionIcon = (text: string) => {
    if (
      text.toLowerCase().includes("experience") ||
      text.toLowerCase().includes("work")
    )
      return Briefcase;
    if (
      text.toLowerCase().includes("technolog") ||
      text.toLowerCase().includes("skill")
    )
      return Code;
    if (text.toLowerCase().includes("project")) return FolderOpen;
    if (
      text.toLowerCase().includes("contact") ||
      text.toLowerCase().includes("hire")
    )
      return Mail;
    if (
      text.toLowerCase().includes("education") ||
      text.toLowerCase().includes("study")
    )
      return GraduationCap;
    if (text.toLowerCase().includes("certification")) return Award;
    if (
      text.toLowerCase().includes("location") ||
      text.toLowerCase().includes("where")
    )
      return MapPin;
    if (
      text.toLowerCase().includes("available") ||
      text.toLowerCase().includes("timeline")
    )
      return Clock;
    return MessageCircle;
  };

  // Get color for suggestion text
  const getSuggestionColor = (text: string) => {
    if (
      text.toLowerCase().includes("experience") ||
      text.toLowerCase().includes("work")
    )
      return "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/40";
    if (
      text.toLowerCase().includes("technolog") ||
      text.toLowerCase().includes("skill")
    )
      return "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-700 hover:bg-green-100 dark:hover:bg-green-900/40";
    if (text.toLowerCase().includes("project"))
      return "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-700 hover:bg-purple-100 dark:hover:bg-purple-900/40";
    if (
      text.toLowerCase().includes("contact") ||
      text.toLowerCase().includes("hire")
    )
      return "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-700 hover:bg-orange-100 dark:hover:bg-orange-900/40";
    if (
      text.toLowerCase().includes("education") ||
      text.toLowerCase().includes("study")
    )
      return "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-700 hover:bg-indigo-100 dark:hover:bg-indigo-900/40";
    if (text.toLowerCase().includes("certification"))
      return "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-700 hover:bg-yellow-100 dark:hover:bg-yellow-900/40";
    return "bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700";
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message when chat is first opened
      addBotMessage(
        `Hi! I'm Kathan's AI assistant! 🤖 I can help you learn about his background, skills, projects, and experience. What would you like to know?`,
        [
          "Tell me about his experience",
          "What technologies does he work with?",
          "Show me his projects",
          "How can I contact him?",
        ]
      );
    }
  }, [isOpen]);

  const addBotMessage = (text: string, suggestions?: string[]) => {
    const botMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date(),
      suggestions,
    };
    setMessages((prev) => [...prev, botMessage]);
  };

  const addUserMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
  };

  const generateResponse = (input: string): ChatResponse => {
    const lowerInput = input.toLowerCase();

    // Fun/Personal questions
    if (
      lowerInput.includes("favorite") ||
      lowerInput.includes("hobby") ||
      lowerInput.includes("interest")
    ) {
      return {
        response: `While I focus on sharing Kathan's professional information, I can tell you he's passionate about technology and problem-solving! He loves building scalable solutions and working with cloud technologies. You can always ask him directly about his interests when you schedule a call! 😊`,
        suggestions: [
          "Tell me about his experience",
          "What technologies does he work with?",
          "How can I contact him?",
        ],
      };
    }

    // Pricing questions
    if (
      lowerInput.includes("price") ||
      lowerInput.includes("cost") ||
      lowerInput.includes("rate") ||
      lowerInput.includes("budget")
    ) {
      return {
        response: `Kathan offers competitive freelancer rates without agency overhead. His pricing depends on project scope, complexity, and timeline. He believes in transparent pricing with no hidden costs. For a personalized quote, I'd recommend scheduling a consultation call where he can understand your requirements better.`,
        suggestions: [
          "How can I contact him?",
          "What services does he offer?",
          "Tell me about his experience",
        ],
      };
    }

    // AI/Bot questions
    if (
      lowerInput.includes("ai") ||
      lowerInput.includes("bot") ||
      lowerInput.includes("assistant") ||
      (lowerInput.includes("you") && lowerInput.includes("are"))
    ) {
      return {
        response: `I'm Kathan's AI assistant, built to help visitors learn about his background and expertise. I have knowledge about his experience, skills, projects, and services. While I'm not as smart as the real Kathan, I can definitely help you get to know him better! 🤖`,
        suggestions: [
          "Tell me about Kathan's experience",
          "What technologies does he work with?",
          "How can I contact him?",
        ],
      };
    }

    // Thank you
    if (lowerInput.includes("thank") || lowerInput.includes("thanks")) {
      return {
        response: `You're welcome! I'm glad I could help you learn about Kathan. Feel free to ask me anything else, or you can reach out to him directly for more detailed discussions about your project needs.`,
        suggestions: [
          "How can I contact him?",
          "What services does he offer?",
          "Tell me about his projects",
        ],
      };
    }

    // Skills and technologies (check this first before experience)
    if (
      lowerInput.includes("skill") ||
      lowerInput.includes("technolog") ||
      lowerInput.includes("programming") ||
      lowerInput.includes("language") ||
      (lowerInput.includes("work") && lowerInput.includes("with")) ||
      lowerInput.includes("stack") ||
      lowerInput.includes("framework")
    ) {
      const skillsText = skills
        .map(
          (category) =>
            `**${category.category}:**\n${category.technologies.join(", ")}`
        )
        .join("\n\n");

      return {
        response: `Kathan has expertise in various technologies:\n\n${skillsText}`,
        suggestions: [
          "Show me his projects",
          "Tell me about his experience",
          "What certifications does he have?",
        ],
      };
    }

    // Experience related questions
    if (
      lowerInput.includes("experience") ||
      (lowerInput.includes("work") && !lowerInput.includes("with")) ||
      lowerInput.includes("job") ||
      lowerInput.includes("career")
    ) {
      const expText = experience
        .map(
          (exp) =>
            `• ${exp.title} at ${exp.company} (${exp.duration}): ${exp.description}`
        )
        .join("\n\n");

      return {
        response: `Here's Kathan's professional experience:\n\n${expText}`,
        suggestions: [
          "What technologies does he use?",
          "Tell me about his projects",
          "What's his education?",
        ],
      };
    }

    // Projects
    if (
      lowerInput.includes("project") ||
      lowerInput.includes("portfolio") ||
      lowerInput.includes("built") ||
      lowerInput.includes("created")
    ) {
      const projectsText = projects
        .map(
          (project) =>
            `**${project.title}**\n${
              project.description
            }\nTechnologies: ${project.technologies.join(", ")}`
        )
        .join("\n\n");

      return {
        response: `Here are some of Kathan's key projects:\n\n${projectsText}`,
        suggestions: [
          "Tell me about his experience",
          "What technologies does he work with?",
          "How can I contact him?",
        ],
      };
    }

    // Education
    if (
      lowerInput.includes("education") ||
      lowerInput.includes("study") ||
      lowerInput.includes("degree") ||
      lowerInput.includes("college") ||
      lowerInput.includes("university")
    ) {
      const eduText = education
        .map(
          (edu) =>
            `**${edu.degree}**\n${edu.school} (${edu.duration})\n${edu.description}`
        )
        .join("\n\n");

      return {
        response: `Kathan's educational background:\n\n${eduText}`,
        suggestions: [
          "What certifications does he have?",
          "Tell me about his experience",
          "Show me his projects",
        ],
      };
    }

    // Certifications
    if (
      lowerInput.includes("certification") ||
      lowerInput.includes("certified") ||
      lowerInput.includes("credential")
    ) {
      const certText = certifications
        .map((cert) => `• ${cert.title} - ${cert.issuer} (${cert.date})`)
        .join("\n");

      return {
        response: `Kathan's certifications:\n\n${certText}`,
        suggestions: [
          "Tell me about his skills",
          "Show me his projects",
          "What's his experience?",
        ],
      };
    }

    // Contact information
    if (
      lowerInput.includes("contact") ||
      lowerInput.includes("email") ||
      lowerInput.includes("reach") ||
      lowerInput.includes("hire")
    ) {
      return {
        response: `You can contact Kathan:\n\n• Email: ${
          personalInfo.email
        }\n• Location: ${personalInfo.location}\n\nHe's currently ${
          personalInfo.availability ? "available" : "not available"
        } for freelance work. You can schedule a call using the "Schedule a Call" button on the website!`,
        suggestions: [
          "Tell me about his experience",
          "What services does he offer?",
          "Show me his projects",
        ],
      };
    }

    // About/Bio
    if (
      lowerInput.includes("about") ||
      lowerInput.includes("who") ||
      lowerInput.includes("bio")
    ) {
      return {
        response: `${personalInfo.bio}\n\nTitle: ${personalInfo.title}\nLocation: ${personalInfo.location}`,
        suggestions: [
          "Tell me about his experience",
          "What technologies does he work with?",
          "Show me his projects",
        ],
      };
    }

    // Services
    if (
      lowerInput.includes("service") ||
      lowerInput.includes("offer") ||
      lowerInput.includes("do")
    ) {
      return {
        response: `Kathan offers:\n\n• Application Development\n• Data Engineering\n• Cloud Solutions\n• Full Stack Development\n\nHe specializes in building robust data pipelines, scalable applications, and cloud-first architectures.`,
        suggestions: [
          "Tell me about his experience",
          "What technologies does he use?",
          "How can I contact him?",
        ],
      };
    }

    // Location
    if (
      lowerInput.includes("location") ||
      lowerInput.includes("where") ||
      lowerInput.includes("based")
    ) {
      return {
        response: `Kathan is based in ${personalInfo.location}. He works remotely and is available for both local and international projects.`,
        suggestions: [
          "How can I contact him?",
          "Tell me about his experience",
          "What services does he offer?",
        ],
      };
    }

    // Availability
    if (
      lowerInput.includes("available") ||
      lowerInput.includes("free") ||
      lowerInput.includes("hire")
    ) {
      return {
        response: `Kathan is currently ${
          personalInfo.availability ? "available" : "not available"
        } for freelance work. He typically responds within 24 hours. You can schedule a call directly through his website!`,
        suggestions: [
          "How can I contact him?",
          "What services does he offer?",
          "Tell me about his experience",
        ],
      };
    }

    // Greetings
    if (
      lowerInput.includes("hello") ||
      lowerInput.includes("hi") ||
      lowerInput.includes("hey")
    ) {
      return {
        response: `Hello! I'm here to help you learn about Kathan Patel. He's an experienced Application Developer and Data Engineer. What would you like to know about him?`,
        suggestions: [
          "Tell me about his experience",
          "What technologies does he work with?",
          "Show me his projects",
        ],
      };
    }

    // Default response
    return {
      response: `I'd be happy to help you learn about Kathan! You can ask me about his experience, skills, projects, education, or how to contact him. What specific information are you looking for?`,
      suggestions: [
        "Tell me about his experience",
        "What technologies does he work with?",
        "Show me his projects",
        "How can I contact him?",
      ],
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userInput = inputValue.trim();
    setInputValue("");
    addUserMessage(userInput);
    setIsTyping(true);

    // Simulate thinking time
    setTimeout(() => {
      const response = generateResponse(userInput);
      setIsTyping(false);
      addBotMessage(response.response, response.suggestions);
    }, 800 + Math.random() * 800); // Random delay between 0.8-1.6s
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-16 right-4 sm:bottom-24 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-96 max-w-[calc(100vw-2rem)] h-[calc(100vh-8rem)] sm:h-[500px] sm:max-h-[calc(100vh-8rem)] bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col"
          >
            {/* Header */}
            <div className="p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700 bg-blue-600 text-white rounded-t-lg flex-shrink-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <Bot className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base truncate">
                    Kathan's AI Assistant
                  </h3>
                  <p className="text-xs text-blue-100 truncate">
                    Ask me anything about Kathan!
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="sm:hidden p-1 hover:bg-blue-700 rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-0">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 sm:gap-3 ${
                    message.isBot ? "justify-start" : "justify-end"
                  }`}
                >
                  {message.isBot && (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                  )}

                  <div className="flex flex-col max-w-[85%] sm:max-w-[80%]">
                    <div
                      className={`p-2.5 sm:p-3 rounded-lg ${
                        message.isBot
                          ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed">
                        {message.text}
                      </p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>

                    {/* Enhanced suggestion buttons for bot messages */}
                    {message.isBot && message.suggestions && (
                      <div className="mt-2 sm:mt-3">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-medium">
                          Quick questions:
                        </div>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {message.suggestions.map((suggestion, index) => {
                            const Icon = getSuggestionIcon(suggestion);
                            const colorClass = getSuggestionColor(suggestion);

                            return (
                              <motion.button
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() =>
                                  handleSuggestionClick(suggestion)
                                }
                                className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 text-xs font-medium border rounded-md sm:rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-sm ${colorClass}`}
                              >
                                <Icon className="w-3 h-3 flex-shrink-0" />
                                <span className="truncate text-xs sm:text-xs">
                                  {window.innerWidth < 640
                                    ? suggestion.length > 15
                                      ? `${suggestion.substring(0, 15)}...`
                                      : suggestion
                                    : suggestion}
                                </span>
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {!message.isBot && (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2 sm:gap-3 justify-start"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2.5 sm:p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions Section */}
            {messages.length > 1 && (
              <div className="px-3 sm:px-4 py-2 sm:py-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 flex-shrink-0">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-medium">
                  Quick actions:
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {quickActions.slice(0, 4).map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(action.text)}
                        className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium border rounded-md transition-all duration-200 hover:scale-105 ${action.color} dark:bg-opacity-20 dark:border-opacity-30 flex-shrink-0`}
                      >
                        <Icon className="w-3 h-3 flex-shrink-0" />
                        <span className="hidden xs:inline sm:inline truncate">
                          {action.text.split(" ").slice(0, 2).join(" ")}...
                        </span>
                        <span className="xs:hidden sm:hidden">
                          {action.text.split(" ")[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Kathan..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm min-w-0"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
