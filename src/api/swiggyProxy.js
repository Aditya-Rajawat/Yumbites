// api/swiggyProxy.js
const fetch = require("node-fetch");

export default async function handler(req, res) {
  const apiUrl =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.4924134&lng=77.673673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {},
    });

    if (!response.ok) {
      throw new Error("Error fetching data from Swiggy");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from Swiggy" });
  }
}
