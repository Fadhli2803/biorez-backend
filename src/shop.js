const { nanoid } = require("nanoid");

const shopItems = [
    {
        "id": nanoid(16),
        "imageUrl": "https://story-api.dicoding.dev/images/stories/photos-1641623658595_dummy-pic.png",
        "itemName": "Sepatu Second",
        "price": 50,
    },
    {
        "id": nanoid(16),
        "imageUrl": "https://story-api.dicoding.dev/images/stories/photos-1641623658595_dummy-pic.png",
        "itemName": "TV Bekas",
        "price": 100,
    },
    {
        "id": nanoid(16),
        "imageUrl": "https://story-api.dicoding.dev/images/stories/photos-1641623658595_dummy-pic.png",
        "itemName": "Hoodie Second",
        "price": 75,
    },
    {
        "id": nanoid(16),
        "imageUrl": "https://story-api.dicoding.dev/images/stories/photos-1641623658595_dummy-pic.png",
        "itemName": "Kaos",
        "price": 25,
    },
];

module.exports = shopItems;