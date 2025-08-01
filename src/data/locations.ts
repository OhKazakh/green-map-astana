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
    info: "Industrial MRF/baling plant in Promyshlennyi zone – plastics (PET/PE), cardboard, ferrous & non-ferrous metals.",
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
    info: "Private multi-site collection & baling network; bulk pickup. Takes PET/other plastics, Al cans, cardboard, paper, glass, PE film.",
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
    info: "Municipal contractor; accepts sorted recyclables by agreement. Cardboard, paper, glass, metals; container service for businesses.",
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
    info: "Scrap & recyclables buyer; issues weigh tickets. Scrap metal, coloured metals, glass, lead-acid batteries.",
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
    info: "OCC & office paper specialist; self-pickup for volume. Cardboard (OCC), mixed office paper, archives.",
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
    info: "Paid tipping point near city waste plant; segregated industrial loads & large debris by prior agreement.",
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
    info: "Staffed walk-up point. PET1, HDPE2, aluminium cans, cardboard/paper, glass.",
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
    info: "Staffed walk-up point. PET, paper/cardboard, small metals, glass.",
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
    info: "Staffed walk-up point. PET, paper/cardboard, small metals, glass.",
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
    info: "Staffed walk-up point. PET, paper/cardboard, small metals, glass.",
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
    info: "Reverse-vending machine; earn points in Sparklo app. PET bottles, aluminium cans.",
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
    info: "RVM in shopping mall; see app for full list. PET bottles, aluminium cans.",
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
    info: "24/7 textile donation box. Clean clothing, paired footwear, bedding.",
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
    info: "Textile/household donation box. Clothing, shoes, linens, small goods.",
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
    info: "Garage-format buy-back point; often open late. Paper, cardboard, PET, PE film, aluminium cans.",
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
    info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
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
    info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
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
    info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
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
    info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
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
    info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
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
    info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
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
    info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  }
]; 