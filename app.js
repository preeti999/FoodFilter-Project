let menu = ["Kadhai Paneer", "Dal Makhni", "Chicken Changezi",
    "Veg Biryani", "Chhole Bhature", "Pizza", "Daal Fry",
    "Chicken Roll", "Zeera Rice", "Onion Rings",
    "Garlic Bread", "Onion Pizza", "Rajma Chawal",
    "Garlic Naan", "Egg Curry", "Egg Roll",
    "Egg Biryani", "Pasta", "Cookies", "Potato Chips", "French Fries"];

function isVeg(food) {
    if (food.toLowerCase().indexOf('chicken') !== -1 || food.toLowerCase().indexOf('egg') !== -1) {
        return false;
    }
    return true;
}

function isJain(food) {
    if (food.toLowerCase().indexOf('onion') !== -1 || food.toLowerCase().indexOf('garlic') !== -1) {
        return false;
    }
    return true;
}

console.log("---------------MAIN MENU IS-------------------");

console.log(menu);

console.log("---------------VEG MENU IS-------------------");

let vegMenu = menu.filter(isVeg);
console.log("VEG MENU IS : " + vegMenu);

console.log("---------------JAIN MENU IS-------------------");


let jainMenu = menu.filter(isVeg).filter(isJain);
console.log("JAIN MENU IS : " + jainMenu);