/*

CODED BY: kicuu_

*/

window.onload=function(){alert("Welcome to the Farming Clicker! Please don't mute alerts.")}

{
let growing=0;
function grow(name, time, yields)
{
	if(growing==0)
	{
	growing = 1;
	setTimeout(function()
	{
		eval("plants."+name+"-=1;");
		score+=0.25;
		
		let rand=Math.floor(Math.random() * 100);
		
		if (rand < 70) { 
		eval("crops."+name+"+="+yields);
		}
		else if (rand < 70 + 20) {  
		eval("crops_med."+name+"+="+yields);
		}
		else if (rand < 70 + 20 + 10) {
		eval("crops_high."+name+"=+"+yields);
		} 
		growing=0
		
	},time)
}
}
}
//Variables

//Inventory
var money = 5;
var seeds = {corn: 0, tomato: 0};

var crops = {corn: 0, tomato: 0};
var crops_med = {corn: 0, tomato: 0};
var crops_high = {corn: 0, tomato: 0};

//Plants
var plants = {corn: 0, tomato: 0};

//Misc.
var random = Math.floor(Math.random() * 15) + 10;
var score = 0;
var map = ["Shop"]
var mapp = "Places: ";
var refresh_map=0;
var i_a=0;
//Functions

//Switching
function switch_place(a)
{
	switch(a)
	{
	case "farm":
	document.getElementById("farm_page").style.display = "inline";
	document.getElementById("shop_page").style.display = "none";
	document.getElementById("map_page").style.display = "none";
	
	document.getElementById("farm_button").setAttribute("class", "nav_button_active");
	
	
	break;
	
	case "shop":
	document.getElementById("map_page").style.display = "none";
	document.getElementById("shop_page").style.display = "inline";
	break;
	
	case "orchard":
	document.getElementById("map_page").style.display = "none";
	document.getElementById("orchard_page").style.display = "block";
	break;

	case "map":
	document.getElementById("farm_page").style.display = "none";
	document.getElementById("shop_page").style.display = "none";
	document.getElementById("orchard_page").style.display = "none";
	
	document.getElementById("map_page").style.display = "inline";
	
	document.getElementById("farm_button").setAttribute("class", "nav_button");
	break;
	}
	
	
	
}

//Add to map array
function add_to_map(val)
{
	map.push(val);
	document.getElementById(val.toLowerCase()+"_button").style.display = "inline";
	refresh_map=0;
}

//Shop
function shop_buy()
{
	document.getElementById("shop_start").style.display = "none";
	document.getElementById("shop_buy").style.display = "inline";
}

function shop_sell()
{
	document.getElementById("shop_start").style.display = "none";
	document.getElementById("shop_sell").style.display = "inline";
}

function back_to_start()
{
	document.getElementById("shop_start").style.display = "block";
	document.getElementById("shop_buy").style.display = "none";
	document.getElementById("shop_sell").style.display = "none";
}


function buy(price, name)
{
	if(money>=price)
	{
	money-=price;
	let seed_string="seeds."+name;
	eval(seed_string+"+="+"1;");
	}
}

{
let how_many;
	
function sell(price, name)
{
	if(eval("crops."+name+">0;")){
	how_many=prompt("How many normal crops would you like to sell?", eval("crops."+name));
	
	eval("money+="+how_many+"*price;");
	eval("crops."+name+"-="+how_many);	
	}
	
	if(eval("crops_med."+name+">0;")){
	how_many=prompt("How many medium-level crops would you like to sell?", eval("crops_med."+name));
	
	eval("money+="+how_many+"*price*1.2;");
	eval("crops_med."+name+"-="+how_many);	
	}
	
	if(eval("crops_high."+name+">0;")){
	how_many=prompt("How many high-level crops would you like to sell?", eval("crops_high."+name));
	
	eval("money+="+how_many+"*price*1.8;");
	eval("crops_high."+name+"-="+how_many);
	}
	
	how_many=0;
}
}

//Planting
{
let how_many;

function plant(a)
{
	if(document.getElementById("farm_page").style.display == "inline")
	{
	how_many=prompt("How many would you like to plant?", eval("seeds."+a));
	if(eval("seeds."+a+"-how_many>=0"))
	{
	if(how_many!=null){document.getElementById(a+"_section").style.display = "block";}
	eval("plants."+a+"+=Number(how_many);");
	eval("seeds."+a+"-=Number(how_many);");
	how_many=0;
	}
	else
	{
	alert("You don't have enough seeds!")
	}
	}	
}
}
//Misc.


var corn_growing=0;
var tomato_growing=0;
var have_m1 = 0;

//Refreshing html
setInterval(function()
{
document.getElementById("money_n").innerHTML = money;
document.getElementById("score_n").innerHTML = score;
	
document.getElementById("corn_seeds_n").innerHTML = seeds.corn;
document.getElementById("corn_plant_n").innerHTML = plants.corn;
document.getElementById("corn_n").innerHTML = crops.corn;
document.getElementById("corn_n2").innerHTML = crops.corn+crops_med.corn+crops_high.corn;
document.getElementById("corn_med").innerHTML = crops_med.corn;
document.getElementById("corn_high").innerHTML = crops_high.corn;

document.getElementById("tomato_seeds_n").innerHTML = seeds.tomato;
document.getElementById("tomato_plant_n").innerHTML = plants.tomato;
document.getElementById("tomato_n").innerHTML = crops.tomato;
document.getElementById("tomato_n2").innerHTML = crops.tomato+crops_med.tomato+crops_high.tomato;
document.getElementById("tomato_med").innerHTML = crops_med.tomato;
document.getElementById("tomato_high").innerHTML = crops_high.tomato;


if(score>=7.5)
{
	document.getElementById("tomato_buy").style.display = "block";
	document.getElementById("tomato_sell").style.display = "block";
}


if(refresh_map==0)
{
for(i_a; i_a < map.length; i_a++)
{
	console.log("Map updated.");
	mapp += map[i_a]+",";
}
document.getElementById("map").setAttribute("data-title",mapp);
refresh_map=1;
}

if(have_m1==0&&score>=random)
{
	console.log("First map fragment obtained.");
	add_to_map("Orchard");
	have_m1=1;
}

//Growing
if(plants.corn>0){grow("corn",10000,5);}
if(plants.tomato>0){grow("tomato",17500,7.5);}

//Inventory
	if(seeds.corn>0){document.getElementById("corn_inv").style.display = "block";}
	if(seeds.tomato>0){document.getElementById("tomato_inv").style.display = "block";}
}, 1)

