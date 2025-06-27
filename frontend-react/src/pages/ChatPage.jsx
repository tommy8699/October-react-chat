import { useParams } from "react-router-dom";

export default function ChatPage() {
  const { id } = useParams();

  return (
    <div>
      <h2>Chat #{id}</h2>
      <p>Tu sa budú zobrazovať správy a rozhranie chatu.</p>
    </div>
  );
}