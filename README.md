<p align="center">
    <img src="https://github.com/octobercms/october/blob/develop/themes/demo/assets/images/favicon.png?raw=true" alt="October" width="25%" height="25%" />
</p>

# OctoberCMS + React Chat App

[October](https://octobercms.com) is a Content Management System (CMS) and web platform whose sole purpose is to make your development workflow simple again.

---

## 🚀 Spustenie projektu

### 🧠 Požiadavky

- PHP 8.1+
- Composer
- Node.js + npm
- Databáza (napr. MySQL, MariaDB, SQLite)
- OctoberCMS nainštalovaný cez Composer

---

### 🔌 Backend – OctoberCMS API

1. Nainštaluj závislosti:

   ```bash
   composer install
   ```

2. Skopíruj `.env.example` a nakonfiguruj databázu:

   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

3. Spusti migrácie a seedre (ak existujú):

   ```bash
   php artisan migrate
   php artisan db:seed
   ```

4. Spusti dev server:

   ```bash
   php artisan serve
   ```

   Backend pobeží na `http://127.0.0.1:8000`

---

### 💻 Frontend – React App (`frontend-react`)

1. Prejdi do priečinka:

   ```bash
   cd frontend-react
   ```

2. Nainštaluj závislosti:

   ```bash
   npm install
   ```

3. Vytvor `.env` súbor:

   ```bash
   echo "VITE_API_URL=http://127.0.0.1:8000/api" > .env
   ```

4. Spusti vývojový server:

   ```bash
   npm run dev
   ```

   Frontend beží na `http://localhost:5173`

---

## 🧭 Cesta vývoja

- API endpointy sú definované v `routes.php` cez prefix `/api`.
- React aplikácia využíva `axios` a `VITE_API_URL` na volanie backendu.
- Login, register a zobrazenie správ je riešené cez React Router + OCMS API.

---

## 📁 Štruktúra projektu

```
project-root/
├── backend-ocms/          # OctoberCMS (OCMS backend)
│   ├── plugins/app/api/   # Plugin s API (Chat, Auth, Messages)
│   └── ...
└── frontend-react/        # React SPA komunikujúca s OCMS backendom
    ├── pages/             # React stránky (Login, Home, Chat)
    ├── router/            # React Router definícia
    ├── App.jsx
    └── ...
```

---

## ℹ️ Originálne OctoberCMS info

(💬 zachované z pôvodného README)

> Instructions on how to install October can be found at the [installation guide](https://docs.octobercms.com/3.x/setup/installation.html).  
> October CMS was created by [Alexey Bobkov](https://www.linkedin.com/in/alexey-bobkov-232ba02b/) and [Samuel Georges](https://www.linkedin.com/in/samuel-georges-0a964131/).  
> [Laravel](https://laravel.com) is the underlying PHP framework.

---

## 📄 License

See [LICENSE.md](./LICENSE.md) for usage terms (OctoberCMS is licensed software).