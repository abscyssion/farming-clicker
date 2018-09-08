/*

CODED BY: kicuu_

*/

window.onload=function(){alert("Welcome to the Farming Clicker! Please don't mute alerts.");}

{
let growing=false;
function grow(name, time, yields)
{
	if(growing==false)
	{
	growing = true;
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
		
		document.getElementById(name+"_n").innerHTML = eval("crops."+name);
		document.getElementById(name+"_n2").innerHTML = eval("crops."+name)+eval("crops_med."+name)+eval("crops_high."+name);
		document.getElementById(name+"_med").innerHTML = eval("crops_med."+name);
		document.getElementById(name+"_high").innerHTML = eval("crops_high."+name);
		document.getElementById(name+"_plant_n").innerHTML = eval("plants."+name);
		
		growing=false
		
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
var refresh_map = false;
var i_a = 0;
//Functions

//Switching
function switch_place(a)
{
	switch(a)
	{
	case "farm":
	document.getElementById("shop_page").style.display = "none";
	document.getElementById("map_page").style.display = "none";
	document.getElementById("orchard_page").style.display = "none";
	
	document.getElementById("farm_page").style.display = "inline";
	
	document.getElementById("farm_button").setAttribute("class", "nav_button_active");
	break;

	case "map":
	document.getElementById("farm_page").style.display = "none";
	document.getElementById("shop_page").style.display = "none";
	document.getElementById("orchard_page").style.display = "none";
	
	document.getElementById("map_page").style.display = "inline";
	
	document.getElementById("farm_button").setAttribute("class", "nav_button");
	break;
	
	
	
	case "shop":
	document.getElementById("map_page").style.display = "none";
	document.getElementById("shop_page").style.display = "inline";
	break;
	
	case "orchard":
	document.getElementById("map_page").style.display = "none";
	document.getElementById("orchard_page").style.display = "inline";
	break;
}
}

//Add to map array
function add_to_map(val)
{
	map.push(val);
	document.getElementById(val.toLowerCase()+"_button").style.display = "inline";
	refresh_map=false;
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
	document.getElementById(name+"_seeds_n").innerHTML = eval("seeds."+name);
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
	document.getElementById(name+"_n").innerHTML = eval("crops."+name);
	}
	
	if(eval("crops_med."+name+">0;")){
	how_many=prompt("How many medium-level crops would you like to sell?", eval("crops_med."+name));
	
	eval("money+="+how_many+"*price*1.2;");
	eval("crops_med."+name+"-="+how_many);	
	document.getElementById(name+"_med").innerHTML = eval("crops_med."+name);
	}
	
	if(eval("crops_high."+name+">0;")){
	how_many=prompt("How many high-level crops would you like to sell?", eval("crops_high."+name));
	
	eval("money+="+how_many+"*price*1.8;");
	eval("crops_high."+name+"-="+how_many);
	document.getElementById(name+"_high").innerHTML = eval("crops_high."+name);
	}
	
	document.getElementById(name+"_n2").innerHTML = eval("crops."+name)+eval("crops_med."+name)+eval("crops_high."+name);
}
}

//Planting
{
let how_many;

function plant(name)
{
	if(document.getElementById("farm_page").style.display == "inline")
	{
	how_many=prompt("How many would you like to plant?", eval("seeds."+name));
	if(eval("seeds."+name+"-how_many>=0"))
	{
	if(how_many!=null){document.getElementById(name+"_section").style.display = "block";}
	eval("plants."+name+"+=Number(how_many);");
	eval("seeds."+name+"-=Number(how_many);");
	how_many=0;
	document.getElementById(name+"_plant_n").innerHTML = eval("plants."+name);
	document.getElementById(name+"_seeds_n").innerHTML = eval("seeds."+name);
	}
	else
	{
	alert("You don't have enough seeds!")
	}
	}

}
}

//Misc.




{
	
let a = true;
let have_m1 = false;


setInterval(function()
{
//Misc.
if(a==true&&document.getElementById("orchard_page").style.display == "inline")
{
alert("Congratulations! Looks like you found way to the old orchard. Come see me in shop when you accumulate enough money to buy a tree sapling.");
a=false;
}

	
//Refreshing html
document.getElementById("money_n").innerHTML = money;
document.getElementById("score_n").innerHTML = score;
	


/*
document.getElementById("tomato_seeds_n").innerHTML = seeds.tomato;
document.getElementById("tomato_plant_n").innerHTML = plants.tomato;
document.getElementById("tomato_n").innerHTML = crops.tomato;
document.getElementById("tomato_n2").innerHTML = crops.tomato+crops_med.tomato+crops_high.tomato;
document.getElementById("tomato_med").innerHTML = crops_med.tomato;
document.getElementById("tomato_high").innerHTML = crops_high.tomato;
*/

if(score>=7.5)
{
	document.getElementById("tomato_buy").style.display = "block";
	document.getElementById("tomato_sell").style.display = "block";
}


if(refresh_map==false)
{
for(i_a; i_a < map.length; i_a++)
{
	console.log("Map updated.");
	if(map.length>1){mapp += ", ";}
	mapp += map[i_a];
	console.log(mapp);
}
document.getElementById("map").setAttribute("data-title",mapp);
refresh_map=true;
}

if(have_m1==false&&score>=random)
{
	alert("You've found map fragment containing path to the old orchard!")
	console.log("First map fragment obtained.");
	add_to_map("Orchard");
	have_m1=true;
}

//Growing
if(plants.corn>0){grow("corn",10000,5);}
if(plants.tomato>0){grow("tomato",17500,7.5);}

//Inventory
	if(seeds.corn>0){document.getElementById("corn_inv").style.display = "block";}
	if(seeds.tomato>0){document.getElementById("tomato_inv").style.display = "block";}
}, 0)
}
