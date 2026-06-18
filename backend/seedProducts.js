const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

mongoose.connect(process.env.MONGO_URI)
.then(async () => {

  console.log("MongoDB Connected");

  await Product.deleteMany({});

  await Product.insertMany([
  // Smartphones
  { name: "iPhone 15 Pro", price: 999, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab", description: "Apple flagship smartphone" },
  { name: "Samsung Galaxy S25 Ultra", price: 1299, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9", description: "Samsung premium smartphone" },
  { name: "Google Pixel 9", price: 999, image: "https://images.unsplash.com/photo-1580910051074-3eb694886505", description: "Google AI smartphone" },
  { name: "OnePlus 13", price: 899, image: "https://i.ibb.co/MWfrZmw/oneplus.jpg", description: "Flagship OnePlus device" },
  { name: "Nothing Phone 3", price: 799, image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e", description: "Transparent design smartphone" },
  { name: "Vivo X200", price: 849, image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37", description: "Vivo flagship smartphone" },
  { name: "Oppo Find X8", price: 899, image: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg", description: "Oppo premium smartphone" },
  { name: "Xiaomi 15", price: 799, image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0", description: "Xiaomi flagship smartphone" },
  { name: "Realme GT", price: 699, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97", description: "Gaming smartphone" },
  { name: "Motorola Edge", price: 749, image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672", description: "Motorola premium smartphone" },

  // Laptops
  { name: "MacBook Air M3", price: 1199, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853", description: "Apple M3 laptop" },
  { name: "MacBook Pro", price: 1999, image: "https://images.pexels.com/photos/18105/pexels-photo.jpg", description: "Professional Apple laptop" },
  { name: "Dell XPS 15", price: 1499, image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", description: "Dell premium laptop" },
  { name: "HP Spectre x360", price: 1399, image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef", description: "Convertible laptop" },
  { name: "Lenovo Legion 7", price: 1699, image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2", description: "Gaming laptop" },
  { name: "ASUS ROG Zephyrus", price: 1899, image: "https://i.ibb.co/8Lty23m3/laptop.webp", description: "ROG gaming laptop" },
  { name: "Acer Predator", price: 1599, image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef", description: "Gaming performance laptop" },
  { name: "MSI Katana", price: 1499, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed", description: "MSI gaming laptop" },
  { name: "Surface Laptop", price: 1299, image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97", description: "Microsoft laptop" },
  { name: "ThinkPad X1 Carbon", price: 1599, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf", description: "Business laptop" },

  // Audio
  { name: "AirPods Pro", price: 249, image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46", description: "Wireless earbuds" },
  { name: "Sony WH-1000XM5", price: 399, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e", description: "Noise cancelling headphones" },
  { name: "JBL Tune 770NC", price: 149, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944", description: "Wireless headphones" },
  { name: "Boat Rockerz", price: 49, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b", description: "Budget headphones" },
  { name: "Noise Buds", price: 39, image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb", description: "True wireless earbuds" },
  { name: "Bose QC Ultra", price: 429, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90", description: "Premium audio" },
  { name: "Marshall Major IV", price: 199, image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29", description: "Marshall headphones" },
  { name: "Beats Studio Pro", price: 349, image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a", description: "Beats headphones" },
  { name: "Realme Buds Air", price: 59, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df", description: "Wireless earbuds" },
  { name: "Sennheiser HD 450BT", price: 179, image: "https://images.unsplash.com/photo-1545127398-14699f92334b", description: "Premium audio headset" },

  // Gaming
  { name: "PlayStation 5", price: 499, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db", description: "Sony gaming console" },
  { name: "Xbox Series X", price: 499, image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d", description: "Microsoft gaming console" },
  { name: "Nintendo Switch", price: 299, image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e", description: "Portable gaming console" },
  { name: "Gaming Chair", price: 299, image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6", description: "Ergonomic gaming chair" },
  { name: "RTX 5090 GPU", price: 1999, image: "https://i.ibb.co/3mbWqB8p/gpu.jpg", description: "Latest NVIDIA graphics card" },
  { name: "Logitech G Pro Mouse", price: 129, image: "https://images.unsplash.com/photo-1527814050087-3793815479db", description: "Gaming mouse" },
  { name: "Razer Huntsman Keyboard", price: 169, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae", description: "Gaming keyboard" },
  { name: "Gaming Monitor", price: 399, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf", description: "High refresh display" },
  { name: "Elgato Stream Deck", price: 149, image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf", description: "Streaming controller" },
  { name: "VR Headset", price: 499, image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac", description: "Virtual reality headset" },

  // Accessories
  { name: "Apple Watch Ultra", price: 799, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12", description: "Smart watch" },
  { name: "Fitbit Charge 6", price: 199, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a", description: "Fitness tracker" },
  { name: "Mechanical Keyboard", price: 149, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae", description: "Mechanical keyboard" },
  { name: "Wireless Mouse", price: 79, image: "https://images.unsplash.com/photo-1527814050087-3793815479db", description: "Bluetooth mouse" },
  { name: "Logitech Webcam", price: 99, image: "https://i.ibb.co/vxKcgnqB/webcam.jpg", description: "HD webcam" },
  { name: "Samsung SSD 1TB", price: 129, image: "https://i.ibb.co/xqN3rD4f/samsung-1tb.jpg", description: "Fast SSD storage" },
  { name: "Power Bank 20000mAh", price: 59, image: "https://i.ibb.co/pBQ3Hj5v/powerbank.jpg", description: "Portable charger" },
  { name: "USB-C Hub", price: 49, image: "https://i.ibb.co/W4xkmprN/usb.jpg", description: "Multi-port adapter" },
  { name: "Phone Stand", price: 19, image: "https://i.ibb.co/twBzzgSm/jdnfkjdbv.webp", description: "Adjustable phone stand" },
  { name: "Laptop Stand", price: 39, image: "https://i.ibb.co/mFtpgrk8/laptop-stand.webp", description: "Aluminium laptop stand" },

  // HOME APPLIANCES
{
  name: "Samsung Smart TV 55 Inch",
  price: 699,
  image: "/products/home-appliances/tv samsung.jpeg",
  description: "4K Ultra HD Smart Television"
},

{
  name: "LG Double Door Refrigerator",
  price: 899,
  image: "/products/home-appliances/LG Fridge.webp",
  description: "Energy efficient refrigerator"
},

{
  name: "IFB Front Load Washing Machine",
  price: 599,
  image: "/products/home-appliances/wahsing machine.jpeg",
  description: "Fully automatic washing machine"
},

{
  name: "Samsung Microwave Oven",
  price: 249,
  image: "/products/home-appliances/samsung microwave.jpeg",
  description: "Convection microwave oven"
},

{
  name: "Daikin Air Conditioner",
  price: 799,
  image: "/products/home-appliances/ac.png",
  description: "1.5 Ton Inverter AC"
},

{
  name: "Dyson Vacuum Cleaner",
  price: 499,
  image: "/products/home-appliances/vacuum.jpeg",
  description: "Cordless vacuum cleaner"
},

// SMART HOME

{
  name: "Philips Smart Bulb",
  price: 39,
  image: "/products/smart-home/bulb.jpeg",
  description: "WiFi RGB smart bulb"
},

{
  name: "Mi Security Camera",
  price: 79,
  image: "/products/smart-home/camera mi.jpeg",
  description: "1080p indoor camera"
},

{
  name: "TP-Link Smart Plug",
  price: 29,
  image: "/products/smart-home/plug mini.avif",
  description: "Remote controlled smart plug"
},

{
  name: "Amazon Echo Dot",
  price: 59,
  image: "/products/smart-home/echo dot.jpeg",
  description: "Voice assistant speaker"
},

{
  name: "Google Nest Mini",
  price: 49,
  image: "/products/smart-home/nest mini.jpeg",
  description: "Smart voice assistant"
},

// ELECTRICAL COMPONENTS

{
  name: "Extension Board",
  price: 19,
  image: "/products/electrical/extension.jpeg",
  description: "6 socket surge protector"
},

{
  name: "Electrical Wire Roll",
  price: 35,
  image: "/products/electrical/wire.avif",
  description: "Copper electrical wiring"
},

{
  name: "Circuit Breaker",
  price: 15,
  image: "/products/electrical/circuit.jpeg",
  description: "MCB protection device"
},

{
  name: "Modular Switch",
  price: 8,
  image: "/products/electrical/switch.avif",
  description: "Electrical wall switch"
},

{
  name: "Universal Adapter",
  price: 25,
  image: "/products/electrical/adapter.avif",
  description: "Travel power adapter"
},

{
  name: "AA Rechargeable Batteries",
  price: 18,
  image: "/products/electrical/batteries.webp",
  description: "Pack of rechargeable batteries"
},

{
  name: "Bosch Dishwasher",
  price: 699,
  image: "/products/electrical/dishwasher.jpg",
  description: "Fully automatic dishwasher"
},

{
  name: "JBL Bluetooth Speaker",
  price: 129,
  image: "/products/electrical/speaker.jpg",
  description: "Portable wireless speaker"
},

{
  name: "Smart LED Light Strip",
  price: 49,
  image: "/products/electrical/led-strip.jpg",
  description: "WiFi controlled RGB light strip"
}, 

{ name: "Ceiling Fan", price: 89, image: "/products/electrical/Energy efficient ceiling fan.jpeg", description: "Energy efficient ceiling fan" },

{ name: "Air Cooler", price: 149, image: "/products/electrical/Portable air cooler.webp", description: "Portable air cooler" },

{ name: "Room Heater", price: 99, image: "/products/electrical/Electric room heater.jpeg", description: "Electric room heater" },

{ name: "Geyser 15L", price: 199, image: "/products/electrical/Instant water heater.jpeg", description: "Instant water heater" },

{ name: "Kitchen Chimney", price: 299, image: "/products/electrical/Kitchen smoke exhaust system.jpeg", description: "Kitchen smoke exhaust system" },

{ name: "Water Purifier", price: 249, image: "/products/electrical/RO water purifier.webp", description: "RO water purifier" },

{ name: "Mixer Grinder", price: 79, image: "/products/electrical/mixer.webp", description: "Kitchen mixer grinder" },

{ name: "Electric Kettle", price: 39, image: "/products/electrical/1.5L electric kettle.jpeg", description: "1.5L electric kettle" },

{ name: "Toaster", price: 29, image: "/products/electrical/2-slice bread toaste.jpeg", description: "2-slice bread toaster" },

{ name: "Induction Cooktop", price: 69, image: "/products/electrical/portable induction stove.avif", description: "Portable induction stove" }
]);

  console.log("Products Inserted Successfully");

  process.exit();

})
.catch((err) => {
  console.log(err);
}); 
