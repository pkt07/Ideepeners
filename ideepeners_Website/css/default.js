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
 imgh:322,
 p1:"\"Autorretrato\" (1906), Pablo Picasso",
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
img.setAttribute("src", "images/about-img-3" + o.imgh); 
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
