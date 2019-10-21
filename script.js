const wildersArray = [{
        name: "Antoine",
        type: "trainee",
        origine: "Belgium",
        html: 3,
        css: 2,
        javascript: "coming soon",
        catch: "Bientôt !"
    },
    {
        name: "Astrid",
        type: "trainee",
        origine: "France",
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
        origine: "France",
        html: 2,
        css: 2,
        javascript: "coming soon",
        catch: "Vive les castors !"
    },
    {
        name: "Dinu",
        type: "trainee",
        origine: "Moldavia",
        html: 1,
        css: 2,
        javascript: "coming soon",
        catch: "La musiqueeeee"
    },
    {
        name: "Etienne",
        type: "Serial Trainer",
        origine: "France",
        html: 4,
        css: 4,
        javascript: 4,
        catch: "Va sur google"
    },
    {
        name: "François",
        type: "campus manager",
        origine: "Belgium",
        html: 0,
        css: 0,
        javascript: 0,
        catch: "10h, café ou bière ?"
    },
    {
        name: "Ghislain",
        type: "trainee",
        origine: "Luxembourg",
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
        origine: "France",
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
        catch: "Je connais tout le Pokédex."
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
// 1 - Identifier avec JS le noeud parent dans lequel je veux inserer des noeuds enfants
//const wildersParentDiv = document.getElementById('people-list')
//console.log(wildersParentDiv);
// 2 - Inserer avec javascript UN SEUL noeud enfant à ce parent. En utilisant le bout de code HTML qui fonctionnait pour Marouane.

for (let i = 0; i <= wildersArray.length; i++) {
    let component =
        `<article id=${wildersArray[i].name}" class="carte">
<h2>${i<9 ? "#0" + (i+1) : "#"+ (i +1)} ${wildersArray[i].name}</h2>
<img src="img/${wildersArray[i].name}.jpg" class="img-profile">
<div class="proprietes">
    <div>Type:</div>
    <div>${wildersArray[i].type}</div>
    <div>Origin:</div>
    <div>${wildersArray[i].origine}</div>

    <div>HTML</div>
    <div>
        <img src="icons8-pokéball-48.png" alt="Red Pokeball">
        <img src="icons8-pokéball-48.png" alt="Red Pokeball">
        <img src="icons8-pokéball-48.png" alt="Red Pokeball">
        <img src="icon-disabled.png" alt="Black Pokeball">
    </div>
    <div>CSS</div>
    <div><img src="icons8-pokéball-48.png" alt="Red Pokeball">
        <img src="icons8-pokéball-48.png" alt="Red Pokeball">
        <img src="icon-disabled.png" alt="Black Pokeball">
        <img src="icon-disabled.png" alt="Black Pokeball">
    </div>
    <div>Javascript:</div>
    <div>Coming Soon !</div>
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
    <a title="Previous" href="#Menu"> <svg id="svg_left" width="40" height="40">
        <line x1="30" y1="5" x2="10" y2="20" 
            style="stroke:white; stroke-linecap:round; stroke-width:3"  />
        <line x1="10" y1="20" x2="30" y2="35" 
            style="stroke: white; stroke-linecap:round; stroke-width:3"  />
    </svg> </a>
    <a title="Next" href="#Astrid"> <svg id="svg_right" width="40" height="40">
        <line x1="10" y1=5 x2="30" y2="20" 
            style="stroke:white; stroke-linecap:round; stroke-width:3"  />
        <line x1="30" y1="20" x2="10" y2="35" 
            style="stroke: white; stroke-linecap:round; stroke-width:3"  />
    </svg> </a>
</article>
</article>
`
    document.getElementById('people-list').innerHTML += component
};