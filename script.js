$(document).ready(loaded);


const categories = [
    "all",
    "mountain",
    "road",
    "electric",
    "city"
    
];

let currentIndex = 0;

function renderBikes(type = "all") {

    const lang = getLanguage();
    const deck = $(".bike-deck");

    deck.empty();

    const filtered =
        type === "all"
            ? bikes
            : bikes.filter(bike => bike.type === type);

    filtered.forEach(bike => {

        deck.append(`
            <div class="bike-card">
                <img src="${bike.image}" alt="${bike.name[lang]}">
                <h3>${bike.name[lang]}</h3>
                <p>${translations[lang][bike.type]} Bike</p>
            </div>
        `);

    });
}
function updateCategory() {

    const type = categories[currentIndex];
    const lang = getLanguage();

    $("#currentType").text(
        translations[lang][type]
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
 const params = new URLSearchParams(window.location.search);
params.set("Rainer", "winkler");
   
    $("#Land").on("click",function() {pressed(2)});
    $("#Language").on("click",function() {pressed(1)});
    $("#Water").on("click",function() {pressed(3)});
    $("#Bike").on("click",function() {pressed(4)});
    $("#events").on("click",function() {pressed(5)});
    $("#accomodations").on("click",function() {pressed(6)});
    $(".left-side").on("click",function() {pressed(7)});
    $(".right-side").on("click",function() {pressed(8)});
    $(".booking-left").on("click",function() {pressed(9)});
    $(".booking-right").on("click",function() {pressed(10)});
    $("#imprint").on("click",function() {pressed(11)});
    $("#legal").on("click",function() {pressed(12)});
// alert("a"); 
}


function populateBikeDropdown() {

    const lang = getLanguage();
    const select = $("#bikeSelect");

    select.empty();

    bikes.forEach(bike => {

        select.append(`
            <option value="${bike.name[lang]}">
                ${bike.name[lang]} (${translations[lang][bike.type]})
            </option>
        `);

    });
}

$(function () {
    populateBikeDropdown();
});

