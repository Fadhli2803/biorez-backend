const { nanoid } = require("nanoid");

const shopItems = [
    {
        "id": nanoid(16),
        "category": "kendaraan",
        "imageUrl": "https://story-api.dicoding.dev/images/stories/photos-1641623658595_dummy-pic.png",
        "itemName": "Sepatu Second",
        "price": 50,
    },
    {
        "id": nanoid(16),
        "category": "elektronik",
        "imageUrl": "https://story-api.dicoding.dev/images/stories/photos-1641623658595_dummy-pic.png",
        "itemName": "TV Bekas",
        "price": 100,
    },
    {
        "id": nanoid(16),
        "category": "pakaian",
        "imageUrl": "https://story-api.dicoding.dev/images/stories/photos-1641623658595_dummy-pic.png",
        "itemName": "Hoodie Second",
        "price": 75,
    },
];

module.exports = shopItems;