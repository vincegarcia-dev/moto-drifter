const guideName = "Moto-Drifter";
const currentYear = 2026;
let runningCount = 0;

document.getElementById("guide-name").textContent = guideName;

document.getElementById("footer-text").textContent = `© ${currentYear} ${guideName}. All rights reserved.`;

const placesArray = ["Bonifacio Global City", "Venice Grand Canal", "Laiya Beaches"];
runningCount = placesArray.length;
document.getElementById("total-places").textContent = runningCount;


const bgcRating = 4.5;
let bgcRatingText = "";
if (bgcRating >= 4) {
    bgcRatingText = "Highly recommended";
} else if (bgcRating >= 2.5 && bgcRating <= 3.9) {
    bgcRatingText = "Worth a visit";
} else {
    bgcRatingText = "Only if you're nearby";
}
document.getElementById("bgc-rating-label").textContent = bgcRatingText;

const bgcAffordable = true;
const bgcOpenNow = true;
document.getElementById("bgc-budget-status").textContent = (bgcAffordable && bgcOpenNow) ? "Good option right now" : "Maybe another time";

const bgcIsNearby = false;
document.getElementById("bgc-distance-status").textContent = bgcIsNearby ? "Walking distance" : "Better to commute";


const veniceRating = 3.8;
let veniceRatingText = "";
if (veniceRating >= 4) {
    veniceRatingText = "Highly recommended";
} else if (veniceRating >= 2.5 && veniceRating <= 3.9) {
    veniceRatingText = "Worth a visit";
} else {
    veniceRatingText = "Only if you're nearby";
}
document.getElementById("venice-rating-label").textContent = veniceRatingText;

const veniceAffordable = true;
const veniceOpenNow = true;
document.getElementById("venice-budget-status").textContent = (veniceAffordable && veniceOpenNow) ? "Good option right now" : "Maybe another time";

const veniceIsNearby = false;
document.getElementById("venice-distance-status").textContent = veniceIsNearby ? "Walking distance" : "Better to commute";



const laiyaRating = 4.8;
let laiyaRatingText = "";
if (laiyaRating >= 4) {
    laiyaRatingText = "Highly recommended";
} else if (laiyaRating >= 2.5 && laiyaRating <= 3.9) {
    laiyaRatingText = "Worth a visit";
} else {
    laiyaRatingText = "Only if you're nearby";
}
document.getElementById("laiya-rating-label").textContent = laiyaRatingText;

const laiyaAffordable = false; 
const laiyaOpenNow = true;
document.getElementById("laiya-budget-status").textContent = (laiyaAffordable && laiyaOpenNow) ? "Good option right now" : "Maybe another time";

const laiyaIsNearby = false;
document.getElementById("laiya-distance-status").textContent = laiyaIsNearby ? "Walking distance" : "Better to commute";


console.log("Guide Name:", guideName);
console.log("Current Year:", currentYear);
console.log("Total Places Count:", runningCount);