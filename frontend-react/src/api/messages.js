const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export async function fetchMessages() {
  const res = await fetch(`${API_URL}/messages`);
  return await res.json();
}

export async function sendMessage(text) {
  return await fetch(`${API_URL}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_TOKEN"
    },
    body: JSON.stringify({ text })
  });
}
