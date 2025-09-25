"use client"
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import MessagesSidebar from '@/components/MessagesSidebar'
import MessageList from '@/components/MessageList'
import MessageInput from '@/components/MessageInput'
import { useState } from 'react';

export default function MessagesPage() {
  const conversations = [
    {
      id: 1,
      name: "Football Team Group",
      avatar: "/football-team.jpg",
      lastMessage: "Practice is moved to 4pm tomorrow",
      unread: 3,
      time: "2:30 PM",
      isGroup: true
    },
    {
      id: 2,
      name: "Alex Morgan",
      avatar: "/alex-morgan.jpg",
      lastMessage: "Did you finish the science project?",
      unread: 0,
      time: "Yesterday",
      isGroup: false
    },
    {
      id: 3,
      name: "Science Club",
      avatar: "/science-club.jpg",
      lastMessage: "Meeting agenda attached",
      unread: 1,
      time: "Monday",
      isGroup: true
    }
  ]

  const messages = [
    {
      id: 1,
      sender: "Alex Morgan",
      avatar: "/alex-morgan.jpg",
      content: "Hey, did you finish the science project?",
      time: "2:30 PM",
      isCurrentUser: false
    },
    {
      id: 2,
      sender: "You",
      avatar: "/user-avatar.jpg",
      content: "Almost done! Just need to complete the conclusion.",
      time: "2:32 PM",
      isCurrentUser: true
    },
    {
      id: 3,
      sender: "Alex Morgan",
      avatar: "/alex-morgan.jpg",
      content: "Great! Can you send it to me when you're finished?",
      time: "2:33 PM",
      isCurrentUser: false
    }
  ]

  const [activeConversation, setActiveConversation] = useState(1)

  return (
    <div className="flex min-h-screen">
      {/* Main Sidebar */}
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main className="flex flex-1 overflow-hidden pt-20 ml-0 lg:ml-64">
          {/* Conversations Sidebar */}
          <MessagesSidebar 
            conversations={conversations} 
            activeConversation={activeConversation}
            setActiveConversation={setActiveConversation}
          />
          
          {/* Messages Area */}
          <div className="flex flex-col flex-1 border-l border-gray-200 dark:border-gray-700">
            {/* Message List */}
            <MessageList messages={messages} />
            
            {/* Message Input */}
            <MessageInput />
          </div>
        </main>
      </div>
    </div>
  )
}