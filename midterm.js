import { useState } from "react";

function ChatApp() {
  const [messages, setMessages] = useState([
    "bsbhah", "bsbha", "hshna", "bbsnsn", "nnsns", "hjsja",
    "njsnsj", "hsnnaj", "njsns", "banana", "nanguta",
    "nhshwj", "hshhdttsys", "hshshhs", "hshshhs",
    "ntgvs", "nnsn"
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput(""); // clear input after send
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Header */}
      <div className="p-3 bg-gray-900 flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-700"></div>
        <span className="ml-2 font-semibold">Chat</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3">
        {messages.map((msg, i) => (
          <div key={i} className="flex justify-end mb-2">
            <div className="bg-blue-600 text-white px-3 py-2 rounded-xl max-w-xs">
              {msg}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 flex bg-gray-900">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded-xl text-black"
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-600 px-4 py-2 rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatApp;