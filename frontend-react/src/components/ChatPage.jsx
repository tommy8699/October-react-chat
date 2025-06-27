import MessageList from "../components/MessageList";
import SendMessageForm from "../components/SendMessageForm";
import { useState } from "react";

export default function ChatPage() {
    const [refreshKey, setRefreshKey] = useState(0);

    return (
        <div>
            <h1>React Chat</h1>
            <SendMessageForm onSent={() => setRefreshKey(prev => prev + 1)} />
            <MessageList key={refreshKey} />
        </div>
    );
}
