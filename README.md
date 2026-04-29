# openschooldesk-web

This is the landing page for **openschooldesk**, an open-source school management solution.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Production Build

To build the project for production, run:
```bash
npm run build
```
This will generate a `dist` directory containing the static files.

## Deployment on Ubuntu 26.04 LTS

To deploy this website on an Ubuntu server, you can use Nginx.

### 1. Prerequisites
- Ubuntu 26.04 LTS x64
- Nginx installed (`sudo apt update && sudo apt install nginx`)
- Node.js and npm (if you build on the server)

### 2. Transferring the files
You can transfer the repository to the server using Git:
```bash
git clone <repository-url>
cd openschooldesk-web
npm install
npm run build
```
Alternatively, transfer the `dist` folder contents directly via SCP/SFTP.

### 3. Nginx Configuration
Create a configuration file `/etc/nginx/sites-available/openschooldesk`:
```nginx
server {
    listen 80;
    server_name your-domain.com; # Replace with your domain or IP

    root /var/www/openschooldesk-web/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
Enable the site and restart Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/openschooldesk /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```
