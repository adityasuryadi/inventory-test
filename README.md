# Laravel Project Setup Guide

## Persyaratan Sistem
- PHP >= 8.1
- Composer
- Node.js & NPM
- MySQL/PostgreSQL
- Git

## Langkah-langkah Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/adityasuryadi/inventory-test.git
cd inventory-test
```

### 2. Install Dependencies
```bash
# Install PHP dependencies
composer install

# Install Node.js dependencies
yarn install
```

### 3. Konfigurasi Environment
```bash
# Copy file environment
cp .env.example .env

# Generate application key
php artisan key:generate
```

Sesuaikan konfigurasi database di file `.env`:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database
DB_USERNAME=root
DB_PASSWORD=
```

### 4. Setup Database & Migration
```bash

# Jalankan migration
php artisan migrate


```


### 6. Build Assets
```bash
# Development
npm run dev

# Production
npm run build
```

### 7. Setup Laravel Reverb

# Publish konfigurasi

# Generate encryption keys
```
php artisan reverb:install
php artisan reverb:key:generate
```

Update file `.env` untuk Reverb:
```
REVERB_APP_ID=your-app-id
REVERB_APP_KEY=your-app-key
REVERB_APP_SECRET=your-app-secret
```

### 8. Menjalankan Aplikasi

Terminal 1 - Laravel Server:
```bash
php artisan serve
```

Terminal 2 - Vite Development Server:
```bash
npm run dev
```

Terminal 3 - Reverb Server:
```bash
php artisan reverb:start
```


## Penggunaan

### Development
1. Jalankan server Laravel: `php artisan serve`
2. Jalankan Vite server: `npm run dev`
3. Jalankan Reverb server: `php artisan reverb:start`
4. Akses aplikasi di `http://localhost:8000`

### Production
1. Build assets: `npm run build`
2. Jalankan server Laravel dan Reverb
3. Akses aplikasi melalui web server yang telah dikonfigurasi

## Troubleshooting

### Masalah Umum
1. Jika terjadi error saat instalasi dependencies:
   ```bash
   composer install --ignore-platform-reqs
   ```

2. Jika ada masalah dengan cache:
   ```bash
   php artisan config:clear
   php artisan cache:clear
   php artisan view:clear
   ```

3. Jika Reverb tidak berjalan:
   ```bash
   php artisan reverb:restart
   ```
