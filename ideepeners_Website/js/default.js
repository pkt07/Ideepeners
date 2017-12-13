var ry = [
{
 alt:"Nicolas Cage",
 imgh:275,
 h3:"Samantha French",
 p1:"Samantha French received a BFA from Minneapolis College of Art and Design in 2005. ",
 p2:"<strong>Pinned from</strong>:<br>Uploaded by user"
},
{
 alt:"Nicolas Cage",
 imgh:282,
 p1:"Este fotograf\355a muestra mi pintura favorita. La mayor\355a de obras de arte por Picasso est\341 sombr\355o y oscuro, pero, en esta pintura, Picasso us\363 colores brillante y la cara de la mujer es casi c\363mico",
 p2:"<strong>Pinned from</strong>:<br>Uploaded by user"
},
{
 alt:"Nicolas Cage",
 imgh:315,
 p1:"Salvador Dali, 1944, photo by Johan Hagemeyer",
 p2:"<strong>Pinned from</strong>:<br>Uploaded by user"
},
{
 alt:"Nicolas Cage",
 imgh:257,
 p1:"Jackson Pollock, \"Phosphorescence\"",
 p2:"<strong>Pinned from</strong>:<br>Uploaded by user"
},
{
 alt:"Nicolas Cage",
 imgh:322,
 p1:"\"Autorretrato\" (1906), Pablo Picasso",
 p2:"<strong>Pinned from</strong>:<br>Uploaded by user"
},

{
 alt:"Nicolas Cage",
 imgh:196,
 h3:"Salvador Dali - Wailing Wall",	
 p1:"Signed litho hanging in my family room, I can look at this for hours",
 p2:"<strong>Pinned from</strong>:<br>Uploaded by user"
},
{
 alt:"Nicolas Cage",
 imgh:293,
 h3:"Pablo Picasso",	
 p1:"Don Quixote. Uno de mis dibujos favoritos, quiz\341s por mi predilecci\363n por el hidalgo indomable.",
 p2:"<strong>Pinned from</strong>:<br>Uploaded by user"
},
{
 alt:"Nicolas Cage",
 imgh:275,
 h3:"Bev Doolittle",	
 p1:"\"Pintos\" c.2000",
 p2:"<strong>Pinned from</strong>:<br>Uploaded by user"
},
{
 alt:"Nicolas Cage",
 imgh:315,
 h3:"Pablo Picasso",	
 p1:"Don Quixote. Uno de mis dibujos favoritos, quiz\341s por mi predilecci\363n por el hidalgo indomable.",
 p2:"<strong>Pinned from</strong>:<br>Uploaded by user"
},
{
 alt:"Nicolas Cage",
 imgh:311,
 h3:"Michael Sowa ",	
 p1:"Killer Cat",
 p2:"<strong>Pinned from</strong>:<br>Uploaded by user"
},
{
 alt:"Nicolas Cage",
 imgh:285,
 p1:"Parisian Surrealists Tristan Tzara, Paul Eluard, Andre Breton, Hans Arp, Salvador Dali, Yves Tanguy, Max Ernst, Rene Crevel, and Man Ray, Paris, 1933, by Anna Riwkin",
 p2:"<strong>Pinned from</strong>:<br>Uploaded by user"
},
{
 alt:"Nicolas Cage",
 imgh:260,
 h3:"10 Creative Ice Cube Tray Designs That Will Make You Look As Cool As You're Going To Feel",	
 p1:"Vladimir Kush. I like to think that this is what happened to Atlantis.",
 p2:"<strong>Pinned from</strong>:<br>Uploaded by user"
},
{
 alt:"Nicolas Cage",
 imgh:239,	
 p1:"Constantin Brancusi – Mademoiselle Pogany III - 1933",
 p2:"<strong>Pinned from</strong>:<br>Uploaded by user"
},
{
 alt:"Nicolas Cage",
 imgh:186,
 h3:"Realist painter Lucian Freud, famed for his nudes of family and friends, dies aged 88",	
 p1:"Lucian Freud's portrait, Benefits Supervisor Sleeping,",
 p2:"<strong>Pinned from</strong>:<br>Uploaded by user"
},
{
 alt:"Nicolas Cage",
 imgh:337,
 p1:"Papua, New Guinea. Standing male figure with serpent. <a href = \"http://www.johncorigliano.com/\">johncorigliano.com</a>",
 p2:"<strong>Pinned from</strong>:<br>Uploaded by user"
},
{
 alt:"Nicolas Cage",
 imgh:195,
 h3:"Samantha French",
 p1:"Samantha French received a BFA from Minneapolis College of Art and Design in 2005. Her work is inspired by memories of life in Minnesota, recalling warm summer days at the lake and commonly featuring figures immersed in the water or bathed in sun.",
 p2:"<strong>Pinned from</strong>:<br>Uploaded by user"
},
{
 alt:"Nicolas Cage",
 imgh:225,
 p1:"Rinocerote vestido con puntillas. Salvador Dali.",
 p2:"<strong>Pinned from</strong>:<br>Uploaded by user"
}
];

/*function compare(a, b){return b.imgh - a.imgh}
ry.sort(compare)*/

var pinTerest = document.querySelector("#pinTerest");


function buildPin(o){

var pinWrapper = document.createElement("div");
pinWrapper.setAttribute("class", "pinWrapper");
pinTerest.appendChild(pinWrapper);

var pinImage = document.createElement("div");
pinImage.setAttribute("class", "pinImage");
pinWrapper.appendChild(pinImage);


var img = document.createElement("img"); 
img.setAttribute("src", "http://www.placecage.com/236/" + o.imgh); 
img.setAttribute("alt", o.alt);
pinImage.appendChild(img);


if(o.h3){
var GridTitle = document.createElement("h3");
GridTitle.setAttribute("class", "pin GridTitle");
GridTitle.innerHTML = o.h3;
pinImage.appendChild(GridTitle);
}

var Description = document.createElement("p");
Description.setAttribute("class", "pin Description");
Description.innerHTML = o.p1;
pinImage.appendChild(Description);


var CreditTitle = document.createElement("p");
CreditTitle.setAttribute("class", "pin CreditTitle");
CreditTitle.innerHTML = o.p2;
pinWrapper.appendChild(CreditTitle);


}


for(var i = 0; i < ry.length; i++){
buildPin(ry[i]);
}
