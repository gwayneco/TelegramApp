// Telegram Mini App Prototype (React)
// This is a basic structure for a Telegram WebApp (Mini App)

import React, { useEffect, useState } from "react";

const App = () => {
  const [tg, setTg] = useState(null);
  const [user, setUser] = useState(null);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const telegram = window.Telegram?.WebApp;
    if (telegram) {
      telegram.ready();
      telegram.expand();
      setTg(telegram);
      setUser(telegram.initDataUnsafe?.user);
      setGreeting(`Привет, ${telegram.initDataUnsafe?.user?.first_name || "Гость"}! 🎁`);
    }
  }, []);

  const handleGift = () => {
    tg?.close(); // simulate gift sending
    alert("Подарок отправлен! 🎉");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">NFT Gift Mini App</h1>
      <p className="text-lg mb-2">{greeting}</p>
      <button
        onClick={handleGift}
        className="bg-purple-600 text-white px-6 py-2 rounded-2xl text-lg shadow hover:bg-purple-700 transition"
      >
        Отправить Подарок ✨
      </button>
    </div>
  );
};

export default App;
