// src/components/MusicPlatform.js
import React, { useState } from 'react';
import { Play, User, Music, ListMusic, MessageCircle } from 'lucide-react';

const MusicPlatform = () => {
  const [currentPlaylist, setCurrentPlaylist] = useState('Daily Mix');
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="h-screen bg-zinc-900 text-white flex">
      {/* Left Sidebar */}
      <div className="w-64 bg-zinc-800 p-6 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Music className="h-8 w-8" />
          <h1 className="text-xl font-bold">Music Stream</h1>
        </div>
        
        <nav className="flex flex-col gap-4">
          <button className="flex items-center gap-2 hover:text-green-400 transition-colors"
            aria-label="播放音乐">
            <Play className="h-5 w-5" aria-hidden="true" />
            Play Music
          </button>
          <button className="flex items-center gap-2 hover:text-green-400 transition-colors">
            <ListMusic className="h-5 w-5" />
            Your Playlists
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">What to Play</h2>
          <button className="hover:opacity-80 transition-opacity">
            <User className="h-6 w-6" />
          </button>
        </header>

        {/* Featured Section */}
        <div className="bg-zinc-800 p-6 rounded-lg mb-8">
          <h3 className="text-lg mb-2">Playlist of the Day</h3>
          <p className="text-zinc-400">Important announcement or featured content</p>
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['For You', 'Daily Mix', 'Discover Weekly', 'Friend Activity'].map((title, index) => (
            <div key={index} className="bg-zinc-800 p-4 rounded-lg hover:bg-zinc-700 transition-colors">
              <div className="bg-zinc-700 h-40 rounded-md mb-4"></div>
              <h4 className="font-medium mb-1">{title}</h4>
              <p className="text-sm text-zinc-400">Personalized for you</p>
            </div>
          ))}
        </div>

        {/* Chat Button */}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition-colors"
          aria-label="打开聊天">
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Chat Window */}
        {isChatOpen && (
          <div className="fixed bottom-24 right-8 w-80 h-96 bg-zinc-800 rounded-lg p-4 shadow-lg animate-fade-in">
            {/* ... 聊天窗口内容 ... */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicPlatform;
