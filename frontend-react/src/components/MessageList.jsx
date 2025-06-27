import { useEffect, useState } from "react";
import { fetchMessages } from "../api/messages";

export default function MessageList() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages().then(setMessages);
    }, []);

    return (
        <div>
            <h2>Messages</h2>
            <ul>
                {messages.map((msg, i) => (
                    <li key={i}>{msg.text}</li>
                ))}
            </ul>
        </div>
    );
}
