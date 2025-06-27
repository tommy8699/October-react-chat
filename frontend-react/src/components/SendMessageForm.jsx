import { useState } from "react";
import { sendMessage } from "../api/messages";

export default function SendMessageForm({ onSent }) {
    const [text, setText] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendMessage(text);
        setText("");
        onSent(); // refresh messages
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write a message..."
            />
            <button type="submit">Send</button>
        </form>
    );
}
