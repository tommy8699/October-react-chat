import { useEffect, useState } from 'react';

function App() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/plugin/app/chat/messages`)
            .then(res => res.json())
            .then(data => {
                setMessages(data);
            })
            .catch(err => console.error('Chyba pri načítaní:', err));
    }, []);

    return (
        <div>
            <h1>Správy z OCMS</h1>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
