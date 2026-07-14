const bikes = [
    {
        name: "Trail Blazer",
        type: "mountain",
        image: "images/mountain1.jpg"
    },
    {
        name: "Rock Rider",
        type: "mountain",
        image: "images/mountain2.jpg"
    },
    {
        name: "Speed Pro",
        type: "road",
        image: "images/road1.jpg"
    },
    {
        name: "Velocity X",
        type: "road",
        image: "images/road2.jpg"
    },
    {
        name: "Eco Cruiser",
        type: "electric",
        image: "images/ebike1.jpg"
    },
    {
        name: "Urban Volt",
        type: "electric",
        image: "images/ebike2.jpg"
    },
    {
        name: "City Comfort",
        type: "city",
        image: "images/city1.jpg"
    },
    {
        name: "Daily Rider",
        type: "city",
        image: "images/city2.jpg"
    },
        {
        name: "oger-mobil",
        type: "city",
        image: "https://raw.githubusercontent.com/iamcool12345/iamcool12345.github.io/refs/heads/main/images/bikes/Drache.png"
    }
];

const categories = [
    "all",
    "mountain",
    "road",
    "electric",
    "city"
];

let currentIndex = 0;

function renderBikes(type = "all") {

    const deck = $(".bike-deck");

    deck.empty();

    const filtered =
        type === "all"
            ? bikes
            : bikes.filter(bike => bike.type === type);

    filtered.forEach(bike => {

        deck.append(`
            <div class="bike-card">
                <img src="${bike.image}" alt="${bike.name}">
                <h3>${bike.name}</h3>
                <p>${bike.type.charAt(0).toUpperCase() + bike.type.slice(1)} Bike</p>
            </div>
        `);

    });
}
function updateCategory() {

    const type = categories[currentIndex];

    $("#currentType").text(
        type.charAt(0).toUpperCase() + type.slice(1)
    );

    renderBikes(type);
}
$(function () {

    updateCategory();

    $("#nextType").on("click", function () {

        currentIndex++;

        if (currentIndex >= categories.length) {
            currentIndex = 0;
        }

        updateCategory();
    });

    $("#prevType").on("click", function () {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = categories.length - 1;
        }

        updateCategory();
    });

});

const map = L.map('map').setView([36.7213, -4.4214], 13);

L.tileLayer(
    'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }
).addTo(map);

// Official Malaga bike paths
fetch('https://datosabiertos.malaga.eu/recursos/urbanismoEInfraestructura/equipamientos/da_carrilesBici-4326.geojson')
    .then(res => res.json())
    .then(data => {
        L.geoJSON(data, {
            style: {
                color: '#00c853',
                weight: 5,
                opacity: 0.9
            },
            onEachFeature: function(feature, layer) {
                if (feature.properties) {
                    layer.bindPopup(
                        `<strong>${feature.properties.nombre || 'Bike path'}</strong>`
                    );
                }
            }
        }).addTo(map);
    });