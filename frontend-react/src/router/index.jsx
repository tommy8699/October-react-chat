import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ChatPage from "@/pages/ChatPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />, // Zdieľaný layout
        children: [
            { path: "", element: <Home /> },
            { path: "login", element: <Login /> },
            { path: "chats/:id", element: <ChatPage /> },
        ],
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
