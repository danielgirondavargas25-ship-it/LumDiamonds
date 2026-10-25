// LumDiamonds: catálogo demo. Reemplaza los precios por tus tarifas reales.
// Añade tu número internacional de WhatsApp sin +, espacios ni guiones.
const WHATSAPP_NUMBER = ""; // Ejemplo Bolivia: 591XXXXXXXX

const products = [
  {
    id: 384,
    name: "Pase Semanal",
    price: 17.94,
    category: "Pases",
    image: "https://enzstore.com/storage/productos/01M2N4THEX003D1G0T5R63Z2M1.png",
    url: "https://enzstore.com/producto/384"
  },
  {
    id: 386,
    name: "Pase Crepuscular",
    price: 95.00,
    category: "Pases",
    image: "https://enzstore.com/storage/productos/01M2MFT3F0WB4BQCJYPJ3WNYHY.png",
    url: "https://enzstore.com/producto/386"
  },
  {
    id: 365,
    name: "78 + 8 Diamantes",
    price: 14.57,
    category: "Diamantes",
    image: "https://enzstore.com/storage/productos/01M2MFVRJTPJ4RZJX6YEPRCET1.png",
    url: "https://enzstore.com/producto/365"
  },
  {
    id: 364,
    name: "156 + 16 Diamantes",
    price: 28.54,
    category: "Diamantes",
    image: "https://enzstore.com/storage/productos/01M2MFWTCYDKCWCPJG554ZXPFR.png",
    url: "https://enzstore.com/producto/364"
  },
  {
    id: 363,
    name: "234 + 23 Diamantes",
    price: 41.87,
    category: "Diamantes",
    image: "https://enzstore.com/storage/productos/01M2MG04H2J70A80HZT9NVR6AC.png",
    url: "https://enzstore.com/producto/363"
  },
  {
    id: 362,
    name: "625 + 81 Diamantes",
    price: 113.60,
    category: "Diamantes",
    image: "https://enzstore.com/storage/productos/01M2MG1JC7890BV6VFTB7RK5Q7.png",
    url: "https://enzstore.com/producto/362"
  },
  {
    id: 361,
    name: "1860 + 335 Diamantes",
    price: 344.00,
    category: "Diamantes",
    image: "https://enzstore.com/storage/productos/01M2MG6XT3XEEZQR313DEPAZGW.png",
    url: "https://enzstore.com/producto/361"
  },
  {
    id: 360,
    name: "3099 + 589 Diamantes",
    price: 572.00,
    category: "Diamantes",
    image: "https://enzstore.com/storage/productos/01M2MGCYMRSEFH18PVY285Q1E0.png",
    url: "https://enzstore.com/producto/360"
  },
  {
    id: 359,
    name: "4649 + 883 Diamantes",
    price: 865.00,
    category: "Diamantes",
    image: "https://enzstore.com/storage/productos/01M2MGBBPK5KH84T1DGJ5TANVK.png",
    url: "https://enzstore.com/producto/359"
  },
  {
    id: 358,
    name: "7740 + 1548 Diamantes",
    price: 1442.00,
    category: "Diamantes",
    image: "https://enzstore.com/storage/productos/01M2MGC19E6980CBS4SZMEGKCX.png",
    url: "https://enzstore.com/producto/358"
  },
  {
    id: 385,
    name: "Paq. Semanal Elite",
    price: 9.36,
    category: "Pases",
    image: "https://enzstore.com/storage/productos/01M2N4GEVJ8M2BN8HX7D4F8B00.png",
    url: "https://enzstore.com/producto/385"
  },
  {
    id: 395,
    name: "Paq. Mensual Epico",
    price: 46.90,
    category: "Pases",
    image: "https://enzstore.com/storage/productos/01M2N4HW19HKAREM9C3BZWJHQ0.png",
    url: "https://enzstore.com/producto/395"
  },
  {
    id: 356,
    name: "50 + 5 Diamantes Evento",
    price: 9.25,
    category: "Evento",
    image: "https://enzstore.com/storage/productos/01M2MH8SP7SG5M3DTSRD13Q1HB.png",
    url: "https://enzstore.com/producto/356"
  },
  {
    id: 355,
    name: "150 + 15 Diamantes Evento",
    price: 27.85,
    category: "Evento",
    image: "https://enzstore.com/storage/productos/01M2MHBTR7KGKNAZS7RA0G5SBT.png",
    url: "https://enzstore.com/producto/355"
  },
  {
    id: 354,
    name: "250 + 25 Diamantes Evento",
    price: 44.80,
    category: "Evento",
    image: "https://enzstore.com/storage/productos/01M2MHD2K45FEM6SDC0YMYRRYM.png",
    url: "https://enzstore.com/producto/354"
  },
  {
    id: 353,
    name: "500 + 65 Diamantes Evento",
    price: 91.70,
    category: "Evento",
    image: "https://enzstore.com/storage/productos/01M2MHE3T8A7B77ET0YB348JPA.png",
    url: "https://enzstore.com/producto/353"
  }
];
