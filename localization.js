$(document).ready(setlanguage);
function setlanguage(){
const lang = getLanguage();
$(".section-title").text(translations[lang].fleet);
$(".Water h2").text(translations[lang].waterTours);
$("#Language h2").text(translations[lang].language);
$("#Land h2").text(translations[lang].land);
$("#Bike h2").text(translations[lang].bike);
$("#events h2").text(translations[lang].events);
$("#accomodations h2").text(translations[lang].accomodations);
$(".formbox h2").text(translations[lang].booking);
$(".formbox h2").text(translations[lang].booking);  
$("#intro").text(translations[lang].intro); 
$(".header").text(translations[lang].header); 
$(".topbar-left").text(translations[lang].topbar); 
$("#fname").text(translations[lang].fname); 
}
$(function () {

    const params = new URLSearchParams(window.location.search);
    const currentLang = params.get("lang") || "en";
    
    // Update button text
    $("#langToggle").text(currentLang === "es" ? "EN" : "ES");
//     if (params.get("lang") === "es") {//spainish
//         // alert("de schbrache isd ezdaller schbanisch!");
//         $("#intro").text("maskdmas");

//         //infocards
//         $("#Language h2").html("experiencia lingüístic");
//         $("#Land h2").html("lando tours");
//         $("#Water h2").html("Aqua tours");
//         $("#Bike h2").html("Aqua tours");
//         $("#events h2").html("Aqua tours");
//         $("#accomodations h2").html("Aqua tours");
//         //bike fleet

//     }
//     else{//angelosaxian
//         // alert("de schbrache isd ezdaller angelsäggsisch")
//          $("#intro").text("meddl");
//   }
    $("#langToggle").on("click", function () {

        const params = new URLSearchParams(window.location.search);

        if (params.get("lang") === "es") {
            params.set("lang", "en");
        } else {
            params.set("lang", "es");

        }
            params.set("Rainer", "winkler");
        window.location.search = params.toString();
    });
});

function getLanguage() {
    return new URLSearchParams(window.location.search).get("lang") || "en";
}