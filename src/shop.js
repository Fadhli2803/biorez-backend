const { nanoid } = require("nanoid");

const shopItems = [
    {
        "id": nanoid(16),
        "category": "kendaraan",
        "imageUrl": "http://localhost:9000/image/biorezLogo.png",
        "itemName": "Sepatu Second",
        "price": 50,
    },
    {
        "id": nanoid(16),
        "category": "elektronik",
        "imageUrl": "http://localhost:9000/image/biorezLogoWhite.png",
        "itemName": "TV Bekas",
        "price": 100,
    },
    {
        "id": nanoid(16),
        "category": "pakaian",
        "imageUrl": "http://localhost:9000/image/biorezLogoWhite.png",
        "itemName": "Hoodie Second",
        "price": 75,
    },
];

module.exports = shopItems;