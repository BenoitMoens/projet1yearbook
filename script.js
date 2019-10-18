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








