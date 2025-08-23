export interface LocationItem {
  id: number;
  category: "BIG" | "SMALL";
  name: string;
  position: { lat: number; lng: number };
  info: string;
  photo: string | null;
  icon: string;
  materials: string[];
  audience: string;
}

export const locations: LocationItem[] = [
  {
    id: 0,
    category: "BIG",
    name: "KazRecycleService LLP",
    position: { lat: 51.126178, lng: 71.527115 },
    info: "♻️ Large recycling center for businesses! We accept plastic bottles, cardboard boxes, and all types of metal. Help us keep Astana clean by bringing your bulk recyclables here.",
    photo: null,
    icon: "",
    materials: ["Plastic", "Metals", "Paper"],
    audience: "Business / Bulk only"
  },
  {
    id: 1,
    category: "BIG",
    name: "LS Ecolife (LS Astana hub – Saryarqa 31A)",
    position: { lat: 51.16987, lng: 71.4038 },
    info: "🌱 Your one-stop recycling hub! We collect everything: plastic bottles, aluminum cans, paper, glass, and more. Perfect for businesses and large quantities. Let's make Astana greener together!",
    photo: null,
    icon: "",
    materials: ["Plastic", "Aluminium cans", "Paper", "Glass", "Bottles"],
    audience: "Business / Bulk only"
  },
  {
    id: 2,
    category: "BIG",
    name: "Astana Taza Alem",
    position: { lat: 51.1673, lng: 71.4379 },
    info: "🏛️ City recycling partner! We work with local businesses to collect cardboard, paper, glass, and metals. Contact us for container service and regular pickups. Building a cleaner Astana!",
    photo: null,
    icon: "",
    materials: ["Paper", "Glass", "Metals"],
    audience: "Business / Bulk only"
  },
  {
    id: 3,
    category: "BIG",
    name: "Taza Qala – Taza El",
    position: { lat: 51.102571, lng: 71.439484 },
    info: "🔋 Metal recycling experts! We buy scrap metal, colored metals, glass, and old batteries. Get paid for your recyclables while helping the environment. We issue official weigh tickets!",
    photo: null,
    icon: "",
    materials: ["Metals", "Glass", "Batteries"],
    audience: "Business / Bulk only"
  },
  {
    id: 4,
    category: "BIG",
    name: "AstanaQagazy",
    position: { lat: 51.2039, lng: 71.4786 },
    info: "📄 Paper recycling specialists! We focus on cardboard boxes, office paper, and old archives. Self-pickup available for large volumes. Turn your paper waste into new products!",
    photo: null,
    icon: "",
    materials: ["Paper"],
    audience: "Business / Bulk only"
  },
  {
    id: 5,
    category: "BIG",
    name: "Eco Polygon of Astana",
    position: { lat: 51.0618, lng: 71.6572 },
    info: "🏭 Industrial waste management center! We handle large industrial loads and construction debris. Contact us first for special arrangements. Helping businesses dispose of waste responsibly!",
    photo: null,
    icon: "",
    materials: ["Industrial waste"],
    audience: "Business / Bulk only"
  },
  {
    id: 6,
    category: "SMALL",
    name: "LS Ecolife kiosk (Saryarqa 31A)",
    position: { lat: 51.16987, lng: 71.4038 },
    info: "🌿 Friendly recycling kiosk! Drop off your plastic bottles, aluminum cans, paper, and glass. Our staff is here to help! Open daily for your recycling needs.",
    photo: null,
    icon: "",
    materials: ["Plastic", "Aluminium cans", "Paper", "Glass", "Bottles"],
    audience: "Public drop-off"
  },
  {
    id: 7,
    category: "SMALL",
    name: "LS Ecolife kiosk (Teljan Shonanuly 36/1a)",
    position: { lat: 51.2044, lng: 71.4454 },
    info: "💚 Convenient neighborhood recycling! Bring your plastic bottles, paper, small metals, and glass. Easy access, friendly service. Every small action helps our planet!",
    photo: null,
    icon: "",
    materials: ["Plastic", "Paper", "Metals", "Glass", "Bottles"],
    audience: "Public drop-off"
  },
  {
    id: 8,
    category: "SMALL",
    name: "LS Ecolife kiosk (Manas 11/4)",
    position: { lat: 51.1546, lng: 71.4089 },
    info: "♻️ Community recycling spot! Accepting plastic bottles, paper, small metals, and glass. Located in a convenient area. Join us in keeping Astana beautiful!",
    photo: null,
    icon: "",
    materials: ["Plastic", "Paper", "Metals", "Glass", "Bottles"],
    audience: "Public drop-off"
  },
  {
    id: 9,
    category: "SMALL",
    name: "LS Ecolife kiosk (Mustafina 17/1)",
    position: { lat: 51.1709, lng: 71.3889 },
    info: "🌱 Local recycling kiosk! We welcome your plastic bottles, paper, small metals, and glass. Easy to find, always open. Let's recycle together!",
    photo: null,
    icon: "",
    materials: ["Plastic", "Paper", "Metals", "Glass", "Bottles"],
    audience: "Public drop-off"
  },
  {
    id: 10,
    category: "SMALL",
    name: "Sparklo RVM (Astana Airport)",
    position: { lat: 51.022222, lng: 71.466944 },
    info: "✈️ Airport recycling machine! Drop off your plastic bottles and aluminum cans before your flight. Earn points in the Sparklo app while helping the environment. Travel green!",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  },
  {
    id: 11,
    category: "SMALL",
    name: "Sparklo RVM (Keruen Mall)",
    position: { lat: 51.12802, lng: 71.425381 },
    info: "🛍️ Shopping mall recycling! Recycle your bottles and cans while shopping. Earn Sparklo points and help keep our mall clean. Convenient and rewarding!",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  },
  {
    id: 12,
    category: "SMALL",
    name: "Likekomek charity bin (Turan 55A)",
    position: { lat: 51.116216, lng: 71.418778 },
    info: "👕 24/7 clothing donation! Give your clean clothes, shoes, and bedding a second life. Help those in need while reducing textile waste. Always open for donations!",
    photo: null,
    icon: "",
    materials: ["Clothes"],
    audience: "Public drop-off"
  },
  {
    id: 13,
    category: "SMALL",
    name: "ALGYS charity bin (central)",
    position: { lat: 51.112603, lng: 71.398386 },
    info: "❤️ Central donation center! Accepting clothing, shoes, linens, and small household items. Your donations help families in need. Located in the heart of Astana!",
    photo: null,
    icon: "",
    materials: ["Clothes"],
    audience: "Public drop-off"
  },
  {
    id: 14,
    category: "SMALL",
    name: "Eco Paper (Zhanazhol 20/3)",
    position: { lat: 51.1906, lng: 71.4409 },
    info: "📚 Late-night recycling! We buy back paper, cardboard, plastic bottles, and aluminum cans. Often open late for your convenience. Get paid for your recyclables!",
    photo: null,
    icon: "",
    materials: ["Paper", "Plastic", "Aluminium cans", "Bottles"],
    audience: "Public drop-off"
  },
  {
    id: 15,
    category: "SMALL",
    name: "Sparklo RVM – Turan 55d",
    position: { lat: 51.1169, lng: 71.4178 },
    info: "🎯 Smart recycling machine! Drop off your plastic bottles and aluminum cans. Earn points in the Sparklo app while helping the environment. Easy and rewarding!",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  },
  {
    id: 16,
    category: "SMALL",
    name: "Sparklo RVM – Konaev 10",
    position: { lat: 51.132, lng: 71.4305 },
    info: "♻️ Neighborhood recycling machine! Recycle your bottles and cans here. Earn Sparklo points and contribute to a cleaner Astana. Conveniently located!",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  },
  {
    id: 17,
    category: "SMALL",
    name: "Sparklo RVM – Kordai 6",
    position: { lat: 51.155, lng: 71.379 },
    info: "🌿 Community recycling machine! Drop off your plastic bottles and aluminum cans. Earn points while helping the environment. Every bottle counts!",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  },
  {
    id: 18,
    category: "SMALL",
    name: "Sparklo RVM – Edil 26",
    position: { lat: 51.0905, lng: 71.4155 },
    info: "💚 Local recycling machine! Recycle your bottles and cans here. Earn Sparklo points and help keep our neighborhood clean. Simple and effective!",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  },
  {
    id: 19,
    category: "SMALL",
    name: "Sparklo RVM – Kabanbay Batyr 119",
    position: { lat: 51.0908, lng: 71.4099 },
    info: "🎯 Smart recycling machine! Drop off your plastic bottles and aluminum cans. Earn points in the Sparklo app while helping the environment. Easy and rewarding!",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  },
  {
    id: 20,
    category: "SMALL",
    name: "Sparklo RVM – Tynyshbayuly 8",
    position: { lat: 51.1557, lng: 71.4636 },
    info: "🌱 Neighborhood recycling machine! Recycle your bottles and cans here. Earn Sparklo points and contribute to a cleaner Astana. Conveniently located!",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  },
  {
    id: 21,
    category: "SMALL",
    name: "Sparklo RVM – Shokan Ualikhanov 20",
    position: { lat: 51.1522, lng: 71.438 },
    info: "♻️ Community recycling machine! Drop off your plastic bottles and aluminum cans. Earn points while helping the environment. Every bottle counts!",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  }
]; 