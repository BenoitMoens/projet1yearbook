const wildersArray = [{
        name: "Antoine",
        type: "trainee",
        origine: "Belgium",
        html: 3,
        css: 2,
        javascript: "coming soon",
        catch: "Bientôt",
        onFocus: false
    },
    {
        name: "Astrid",
        type: "trainee",
        origine: "Belgium",
        html: 3,
        css: 3,
        catch: "Désolé j'ai oublié quelle était ta catchphrase...",
        onFocus: false
    },
    {
        name: "Benoit",
        type: "trainee",
        origine: "Belgium",
        html: 2,
        css: 3,
        javascript: "coming soon",
        catch: "L'échec nous rend plus fort",
        onFocus: false
    },
    {
        name: "Celestine",
        type: "WCS Master, Alumni",
        origine: "Belgium",
        html: 3,
        css: 3,
        javascript: 3,
        catch: "J'ai pas beaucoup de phrases dans ma tête!",
        onFocus: false
    },
    {
        name: "Charles-Elie",
        type: "trainee",
        origine: "Belgium",
        html: 2,
        css: 2,
        javascript: "coming soon",
        catch: "Vive les castors !",
        onFocus: false
    },
    {
        name: "Dinu",
        type: "trainee",
        origine: "Belgium",
        html: 1,
        css: 2,
        javascript: "coming soon",
        catch: "La musiqueeeee",
        onFocus: false
    },
    {
        name: "Etienne",
        type: "Serial Trainer",
        origine: "Belgium",
        html: 4,
        css: 4,
        javascript: 4,
        catch: "Va sur google",
        onFocus: false
    },
    {
        name: "François",
        type: "trainee",
        origine: "Belgium",
        html: 0,
        css: 0,
        javascript: 0,
        catch: "10h, café ou bière ?",
        onFocus: false
    },
    {
        name: "Ghislain",
        type: "trainee",
        origine: "Belgium",
        html: 1,
        css: 1,
        javascript: "coming soon",
        catch: "Pika pika",
        onFocus: false
    },
    {
        name: "Gregory",
        type: "trainee",
        origine: "Belgium",
        html: 3,
        css: 3,
        javascript: "coming soon",
        catch: "Quand est-ce qu'on mange ?",
        onFocus: false
    },
    {
        name: "Marine",
        type: "trainee",
        origine: "Belgium",
        html: 1,
        css: 1,
        javascript: "coming soon",
        catch: "L'amour n'a pas de sexe.",
        onFocus: false
    },
    {
        name: "Marouan",
        type: "trainee",
        origine: "Belgium",
        html: 2,
        css: 2,
        javascript: "coming soon",
        catch: "Ce qui ne tue pas rend plus fort.",
        onFocus: false
    },
    {
        name: "Maxime",
        type: "trainee",
        origine: "Belgium",
        html: 3,
        css: 3,
        javascript: "coming soon",
        catch: "Mon pied dans ta gueule.",
        onFocus: false
    },
    {
        name: "Nicolas",
        type: "trainee",
        origine: "Belgium",
        html: 1,
        css: 1,
        javascript: "coming soon",
        catch: "Thank you Mario! But our princess is in another castle!",
        onFocus: false
    },
    {
        name: "Pierre",
        type: "trainee",
        origine: "Belgium",
        html: 2,
        css: 4,
        javascript: "coming soon",
        catch: "Bouzigouloum est notre ennemi juré!",
        onFocus: false
    },
    {
        name: "Steve",
        type: "trainee",
        origine: "Belgium",
        html: 3,
        css: 3,
        javascript: "coming soon",
        catch: "C'est très bien, c'est niquel.",
        onFocus: false
    },
    {
        name: "Sydney",
        type: "trainee",
        origine: "Belgium",
        html: 3,
        css: 3,
        javascript: "coming soon",
        catch: "Je connais tout le Pokédex.",
        onFocus: false
    },
    {
        name: "William",
        type: "trainee",
        origine: "Belgium",
        html: 3,
        css: 3,
        javascript: "coming soon",
        catch: "J'aime les graines de shia.",
        onFocus: false
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
    articlePeople.id = wildersArray[i].name;

    innerSection.appendChild(articlePeople);
    articlePeople.innerHTML = articleContent;
}


const wilderPics = document.getElementById('profile-list');
const navPanel = document.getElementById("name-list-panel");
const tableMenu = [];
const state = [];

//Create profile-pic overview
for (let i = 0; i < wildersArray.length; i++) {
    let picProfile = document.createElement("img")
    picProfile.src = "img/" + wildersArray[i].name + ".jpg"
    document.getElementById('profile-list').appendChild(picProfile);
    picProfile.classList.add("profile-pic");
};

//Create desktop menu list
for (let i = 0; i < wildersArray.length; i++) {
    let aTag = document.createElement("a");
    aTag.id = wildersArray[i].name + "-link";
    aTag.classList.add("nav-menu-item");
    aTag.title = wildersArray[i].name;
    aTag.href = "#" + wildersArray[i].name;
    aTag.innerHTML = "#" + (i >= 9 ? i + 1 : "0" + (i + 1)) + " " + wildersArray[i].name;
    if (wildersArray[i].onFocus === true) {
        aTag.classList.add("yellow-back");
    }
    navPanel.appendChild(aTag);
    tableMenu.push(aTag);
    state[i] = (wildersArray[i].onFocus);
}

let i;

const changePosition = (position, direction) => {
    let getElementPosition = position + direction;
    myElement = document.getElementById(wildersArray[position + direction].name);
    myElement.scrollIntoView();

}

const changeColor = (position) => {

    let aTag = document.getElementsByClassName("nav-menu-item");
    aTag[position].classList.add("scroll");
    for (let i = 0; i < aTag.length; i++) {
        if (i === position) {
            continue;
        }
        aTag[i].classList.remove("scroll");
    }
}

/* CLICK EVENT */

const getActualFocusPosition = (state) => {
    return state.findIndex(element => element === true);
}

let anchorTag = document.getElementsByClassName("nav-menu-item");

[...anchorTag].forEach(element => {
    element.addEventListener("click", (element) => {
        let onFocus = getActualFocusPosition(state);
        //hack : voir console.log(element) in srcElement
        let idOfClickedElement = element.srcElement.id;
        let clickedId = tableMenu.findIndex(el => el.id == idOfClickedElement);
        changeState(onFocus, clickedId);
        changeColor(clickedId)
    });
});


/* WHEEL EVENT */

const changeState = (actual, next) => {
    state[actual] = false;
    state[next] = true;
};

if (window.innerWidth >= 768) {
    window.addEventListener('wheel', event => {

        let actualIndex = state.findIndex(element => element === true) == -1 ? 0 : state.findIndex(element => element === true)

        if (event.deltaY < 0) { //UP
            if (actualIndex < 1) {
                i = 0;
                previousIndex = 17;
            } else {
                i = actualIndex;
                previousIndex = i - 1;
            }
            changeState(i, previousIndex);
            changeColor(previousIndex);
            changePosition(previousIndex, 0);

        } else if (event.deltaY > 0) { //DOWN
            if (actualIndex >= 17) {
                i = 17;
                nextIndex = 0;
            } else {
                i = actualIndex;
                nextIndex = i + 1;
            }
            changeState(i, nextIndex);
            changeColor(actualIndex);
            changePosition(nextIndex, nextIndex === 0 ? 17 : -1);
        }
    });
} else {
    window.removeEventListener('wheel', event => {});
}

window.addEventListener("dblclick", () => {
    const overview = document.getElementById('wilderPic');
    overview.scrollIntoView();

});