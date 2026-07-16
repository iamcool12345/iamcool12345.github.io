$(document).ready(loaded);
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
    }/*,
        {
        name: "oger-mobil",
        type: "city",
        image: "https://raw.githubusercontent.com/iamcool12345/iamcool12345.github.io/refs/heads/main/images/bikes/Drache.png"
    }*/
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
    // 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }
).addTo(map);

// Official Malaga bike paths

function loaded(){

   
    $(".Land").on("click",function() {pressed(2)});
    $("#Language").on("click",function() {pressed(1)});
    $(".Water").on("click",function() {pressed(3)});
    $(".Bike").on("click",function() {pressed(4)});
    $(".events").on("click",function() {pressed(5)});
    $(".accommodations").on("click",function() {pressed(6)});
    $(".left-side").on("click",function() {pressed(7)});
    $(".right-side").on("click",function() {pressed(8)});
// alert("a"); 
}

function pressed(number){
    // alert("meddl loide");   
    // alert("d");
    switch (number){
        case 1:
            window.open("https://google.com");
        break;
        case 2:
             
        break;
        case 3:

        break;
        case 5:
            window.open("https://reckssel.github.io/newspaper_for_vamos/");
        break;
        case 7:
            window.open("https://web.archive.org/web/20251130071750im_/http://www.themostamazingwebsiteontheinternet.com/");
        break;
        case 8:

        break;
    }

}
