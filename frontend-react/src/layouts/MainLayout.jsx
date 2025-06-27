import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Domov</Link> | <Link to="/login">Login</Link>
                </nav>
            </header>

            <main>
                <Outlet /> {/* tu sa bude renderovať aktuálna stránka */}
            </main>
        </div>
    );
}
