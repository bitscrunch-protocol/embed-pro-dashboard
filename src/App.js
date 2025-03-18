import "./App.css";
import { useEffect, useState } from "react";
import { embedDashboard } from "@superset-ui/embedded-sdk";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const response = async () => {
      try {
        const check = await fetch(`${process.env.REACT_APP_API_URL}`, {
          method: "POST",
          body: JSON.stringify({
            dashboardId: process.env.REACT_APP_DASHBOARD_ID,
            userName: process.env.REACT_APP_PRO_DASHBOARD_USERNAME,
            password: process.env.REACT_APP_PRO_DASHBOARD_PASSWORD,
          }),
        });

        if (!check.ok) {
          throw new Error(`HTTP error! Status: ${check.status}`);
        }

        const test = await check.json();
        setData(test);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    response();
  }, []);

  useEffect(() => {
    if (data?.token) {
      embedDashboard({
        id: process.env.REACT_APP_DASHBOARD_ID,
        supersetDomain: "https://pro.unleashnfts.com/",
        mountPoint: document.getElementById("my-superset-container"),
        fetchGuestToken: () => data?.token,
        iframeSandboxExtras: [
          "allow-top-navigation",
          "allow-popups-to-escape-sandbox",
          "allow-fullscreen",
        ],
      });
    }
  }, [data]);

  return (
    <div className="App">
      <div
        id="my-superset-container"
        style={{ width: "100%", height: "100%" }}
      ></div>
    </div>
  );
}

export default App;
