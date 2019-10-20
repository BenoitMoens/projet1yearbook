const wildersArray = [
{
    name: "Antoine",
    type: "trainee",
    origine: "Belgium",
    html: 3,
    css: 2, 
    javascript: "coming soon",
    catch: "Bientôt"
}, 
{
    name: "Astrid",
    type: "trainee",
    origine: "Belgium",
    html: 3,
    css: 3,
    catch: "Désolé j'ai oublié quelle était ta catchphrase..."
}, 
{
    name: "Benoit",
    type: "trainee",
    origine: "Belgium",
    html: 2,
    css: 3,
    javascript: "coming soon",
    catch: "L'échec nous rend plus fort"
},
{
    name: "Célestine",
    type: "WCS Master, Alumni",
    origine: "Belgium",
    html: 3,
    css: 3,
    javascript: 3,
    catch: "J'ai pas beaucoup de phrases dans ma tête!"
},
{
    name: "Charles-Elie",
    type: "trainee",
    origine: "Belgium",
    html: 2,
    css: 2,
    javascript: "coming soon",
    catch: "Vive les castors !"
},
{
    name: "Dinu",
    type: "trainee",
    origine: "Belgium",
    html: 1,
    css: 2,
    javascript: "coming soon",
    catch: "La musiqueeeee"
},
{
    name: "Etienne",
    type: "Serial Trainer",
    origine: "Belgium",
    html: 4,
    css: 4,
    javascript: 4, 
    catch: "Va sur google"
},
{
    name: "François",
    type: "trainee",
    origine: "Belgium",
    html: 0,
    css: 0,
    javascript: 0,
    catch: "10h, café ou bière ?"
},
{
    name: "Ghislain",
    type: "trainee",
    origine: "Belgium",
    html: 1,
    css: 1,
    javascript: "coming soon",
    catch: "Pika pika"
},
{
    name: "Gregory",
    type: "trainee",
    origine: "Belgium",
    html: 3,
    css: 3,
    javascript: "coming soon",
    catch: "Quand est-ce qu'on mange ?"
},
{
    name: "Marine",
    type: "trainee",
    origine: "Belgium",
    html: 1,
    css: 1,
    javascript: "coming soon",
    catch: "L'amour n'a pas de sexe."
},
{
    name: "Marouan",
    type: "trainee",
    origine: "Belgium",
    html: 2,
    css: 2,
    javascript: "coming soon",
    catch: "Ce qui ne tue pas rend plus fort."
},
{
    name: "Maxime",
    type: "trainee",
    origine: "Belgium",
    html: 3,
    css: 3,
    javascript: "coming soon",
    catch: "Mon pied dans ta gueule."
},
{
    name: "Nicolas",
    type: "trainee",
    origine: "Belgium",
    html: 1,
    css: 1,
    javascript: "coming soon",
    catch: "Thank you Mario! But our princess is in another castle!"
},
{
    name: "Pierre",
    type: "trainee",
    origine: "Belgium",
    html: 2,
    css: 4,
    javascript: "coming soon",
    catch: "Bouzigouloum est notre ennemi juré!"
},
{
    name: "Steve",
    type: "trainee",
    origine: "Belgium",
    html: 3,
    css: 3,
    javascript: "coming soon",
    catch: "C'est très bien, c'est niquel."
},
{
    name: "Sydney",
    type: "trainee",
    origine: "Belgium",
    html: 3,
    css: 3,
    javascript: "coming soon",
    catch:"Je connais tout le Pokédex."
},
{
    name: "William",
    type: "trainee",
    origine: "Belgium",
    html: 3,
    css: 3,
    javascript: "coming soon",
    catch: "J'aime les graines de shia."
},
];

//Attempt of function to convert html = 3 return in 3 sentences

let translatePropertyInLiterals = (numOfHTML, type) => {
    let literalTranslated = "";
    if (type === "positive") {
        for (let index = 0; index < numOfHTML; index++) {
            literalTranslated += `<img src="icons8-pokéball-48.png" alt="Red Pokeball">`
        }
        return literalTranslated
    } else {
        for (let index = 0; index < numOfHTML; index++) {
            literalTranslated += `<img src="icon-disabled.png" alt="Black Pokeball"></img>`
        }
        return literalTranslated
    }
}

for (let i = 0; i < wildersArray.length; i++) {
    let articleContent = `
    <h2>#${i >= 9 ? i + 1 : "0" + (i + 1)} ${wildersArray[i].name}</h2>
    <img src="img/${wildersArray[i].name}.jpg" class="img-profile" alt="${wildersArray[i].name}">
    <div class="proprietes">
        <div>Type:</div>
        <div>${wildersArray[i].type}</div>
        <div>Origin:</div>
        <div>${wildersArray[i].origine}</div>
        <div>HTML :</div>
        <div>
        ${translatePropertyInLiterals(wildersArray[i].html, "positive")}${translatePropertyInLiterals(4 - wildersArray[i].html, "negative")}
        </div>
        <div>CSS :</div>
        <div> 
        ${translatePropertyInLiterals(wildersArray[i].css, "positive")}${translatePropertyInLiterals(4 - wildersArray[i].css, "negative")}
        
        </div>
        <div>Javascript: </div>
        <div>${wildersArray[i].javascript}</div>
    </div>
    <div class="description">
        <div>Catchphrase:</div>
        <div class="description-content">
            <div>«</div>
            <div><i>${wildersArray[i].catch}</i></div>
            <div>»</div>
        </div>
    </div>
    <article class="footer">
        <a title="Previous" href="#${i <= 0 ? wildersArray[i].name : wildersArray[i - 1].name}"> <svg id="svg_left" width="40" height="40">
        <line x1="30" y1="5" x2="10" y2="20" 
            style="stroke:white; stroke-linecap:round; stroke-width:3"  />
        <line x1="10" y1="20" x2="30" y2="35" 
            style="stroke: white; stroke-linecap:round; stroke-width:3"  />
    </svg> </a>
        <a title="Next" href="#${i < 17 ? wildersArray[i + 1].name : wildersArray[i].name}"> <svg id="svg_right" width="40" height="40">
        <line x1="10" y1=5 x2="30" y2="20" 
            style="stroke:white; stroke-linecap:round; stroke-width:3"  />
        <line x1="30" y1="20" x2="10" y2="35" 
            style="stroke: white; stroke-linecap:round; stroke-width:3"  />
    </svg> </a>
    `
    let innerSection = document.getElementById("people-all-list");
    let articlePeople = document.createElement("article");
    articlePeople.classList.add("carte");
    articlePeople.id = wildersArray[i].name ;

    innerSection.appendChild(articlePeople);
    articlePeople.innerHTML = articleContent;
}

const wilderPics = document.getElementById('profile-list');

for (let i = 0; i < wildersArray.length; i++){
    let picProfile = document.createElement("img")
    picProfile.src = "img/" + wildersArray[i].name + ".jpg" 
    document.getElementById('profile-list').appendChild(picProfile);
    //Image sizing:
    //let carte = document.getElementById("'" + wildersArray[i].name + "'");
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






