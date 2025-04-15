# 🧩 Embed UnleashNFTs Pro Dashboards

This template helps you easily embed **UnleashNFTs Pro Dashboards** into your site using **Apache ECharts**. It's quick to set up and requires minimal configuration.

> ⚡️ Dashboards are embedded securely using credentials and dashboard IDs. All charts and visuals are rendered via Apache ECharts.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/bitscrunch-protocol/embed-pro-dashboard.git
cd embed-pro-dashboard
```

### 2. Install Dependencies

Make sure you have Node.js and npm installed.

```bash
npm install
```

---

## 🔐 Environment Variables

### 3. Configure `.env` File

Create a `.env` file by copying the `.env.sample`:

```bash
cp .env.sample .env
```

Then update the `.env` file with your credentials:

```env
# DO NOT change this API URL
REACT_APP_API_URL=https://unleashnfts.com/api/security/embed_dashboard

# 🔄 Replace the following values with your actual credentials
REACT_APP_DASHBOARD_ID='YOUR_DASHBOARD_ID'
REACT_APP_PRO_DASHBOARD_USERNAME='YOUR_DASHBOARD_USERNAME'
REACT_APP_PRO_DASHBOARD_PASSWORD='YOUR_DASHBOARD_PASSWORD'
```

---

## 🧪 Run the App

Start the development server:

```bash
npm start
```

Open your browser and go to `http://localhost:3000` to view the embedded dashboard.

---

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

---

## 💬 Need Help?

For any questions or issues, feel free to reach out or raise a GitHub issue.

---

## 📄 License

MIT © [bitsCrunch](https://bitscrunch.com)
