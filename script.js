const wildersArray = [
{
    name: "Antoine",
    type: "trainee",
    origne: "Belgium",
    html: "bien"
}, 
{
    name: "Astrid",
    type: "trainee",
    origne: "Belgium",
    html: "bien"
}, 
{
    name: "Benoit",
    type: "trainee",
    origne: "Belgium",
    html: "bien"
},
{
    name: "Célestine",
    type: "trainee",
    origne: "Belgium",
    html: "bien"
},
{
    name: "Charles-Elie",
    type: "trainee",
    origne: "Belgium",
    html: "bien"
},
{
    name: "Dinu",
    type: "trainee",
    origne: "Belgium",
    html: "bien"
},
{
    name: "Etienne",
    type: "trainee",
    origne: "Belgium",
    html: "bien"
},
{
    name: "François",
    type: "trainee",
    origne: "Belgium",
    html: "bien"
},
{
    name: "Ghislain",
    type: "trainee",
    origne: "Belgium",
    html: "bien"
},
{
    name: "Gregory",
    type: "trainee",
    origne: "Belgium",
    html: "bien"
},
{
    name: "Marine",
    type: "trainee",
    origne: "Belgium",
    html: "bien"
},
{
    name: "Marouan",
    type: "trainee",
    origne: "Belgium",
    html: "bien"
},
{
    name: "Maxime",
    type: "trainee",
    origne: "Belgium",
    html: "bien"
},
{
    name: "Nicolas",
    type: "trainee",
    origne: "Belgium",
    html: "bien"
},
{
    name: "Pierre",
    type: "trainee",
    origne: "Belgium",
    html: "bien"
},
{
    name: "Steve",
    type: "trainee",
    origne: "Belgium",
    html: "bien"
},
{
    name: "Sydney",
    type: "trainee",
    origne: "Belgium",
    html: "bien"
},
{
    name: "William",
    type: "trainee",
    origne: "Belgium",
    html: "bien"
},
];

const wilderPics = document.getElementById('profile-list');

for (let i = 0; i < wildersArray.length; i++){
    let picProfile = document.createElement("img")
    picProfile.src = "img/" + wildersArray[i].name + ".jpg" 
    document.getElementById('profile-list').appendChild(picProfile);
    picProfile.classList.add("profile-pic"); 
};

const navigationPanel = document.getElementById("navigation-panel");

for (let i = 0; i < wildersArray.length; i++) {
    let aTag = document.createElement("a");
    aTag.id = wildersArray[i].name + "-link";
    aTag.classList.add("nav-menu-item");
    aTag.title=wildersArray[i].name;
    aTag.href="#" + wildersArray[i].name;
    aTag.innerHTML = "#" + (i >= 9 ? i + 1 : "0" + (i + 1)) + " " + wildersArray[i].name;
    navigationPanel.appendChild(aTag);    
}

var navPanel = document.getElementById("navigation-panel");
/*

1) Répcupérer l'event scroll // scroll vers le haut, scroll vers le vas
*/

/*
i = 0;
var lastScrollTop = 0;
window.addEventListener("scroll", () => {

    console.log("je suis scrollé");
    var scrollingPosition = window.pageYOffset;
    if (scrollingPosition > lastScrollTop) {
        console.log("LastScrollTop :" + lastScrollTop);
        console.log("ScrollingPosition :" + scrollingPosition)
            //scrolling down
        wildersArray[i].onFocus = true;
        //wildersArray[i + 1].onFocus = false;
        i <= 0 ? i = 2 : i = i - 1;
    } else if (scrollingPosition < lastScrollTop) {
        console.log("scroll up")
        console.log("LastScrollTop :" + lastScrollTop);
        console.log("ScrollingPosition :" + scrollingPosition)
            //scrolling up
        wildersArray[i].onFocus = true;
        //wildersArray[i + 1].onFocus = false;
        i >= 2 ? i = 0 : i = i + 1;
    }
    lastScrollTop = scrollingPosition <= 0 ? 0 : scrollingPosition; // For Mobile or negative scrolling

    
});

/*

2) Dans mon array wildersArray, on rentre dans l'array d'objet 


quand je scroll, propriété de Focus On = true et quand je scroll, off et le prochain off. 

3)  Donc créer une classe qui toggle sur la couleur */






