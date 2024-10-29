import React, { useState } from 'react';
import { MessageCircle } from '@tabler/icons-react';

const MusicPlatform = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3); // 示例未读消息数

  return (
    <>
      {isChatOpen && (
        <div className="fixed bottom-24 right-8 w-80 h-96 bg-zinc-800 rounded-lg p-4 shadow-lg animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">聊天室</h3>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="text-zinc-400 hover:text-white"
            >
              关闭
            </button>
          </div>
          <div className="h-[calc(100%-60px)] overflow-y-auto">
            {/* 聊天内容 */}
          </div>
        </div>
      )}
      
      <div className="fixed bottom-8 right-8 flex flex-col items-end gap-3">
        {isHovered && (
          <div className="bg-zinc-800 p-2 rounded-lg text-sm animate-fade-in">
            有新消息
          </div>
        )}
        <button 
          className={`
            relative
            bg-green-500 p-3 rounded-full 
            hover:bg-green-600 transition-all duration-300
            ${unreadCount > 0 ? 'before:absolute before:inset-0 before:animate-pulse-ring before:rounded-full before:bg-green-500' : ''}
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="打开聊天"
        >
          <MessageCircle className="h-6 w-6" />
          {unreadCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center animate-fade-in">
              {unreadCount}
            </span>
          )}
        </button>
      </div>
    </>
  );
};

export default MusicPlatform;
