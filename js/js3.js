var person1={
name:"rafat",
age:27,
height:1.93,
eyeColor:"brown"
	
};
var person2={
name:"adi",
age:25,
height:1.80,
eyeColor:"brown"	
};
var person3={
	name:"ali",
age:26,
height:1.75,
eyeColor:"blue"
};


var arrayUsers=[person1,person2,person3];

for(var i=0;i<arrayUsers.length;i++)
{
	for(var Docheigth in arrayUsers[i] )
	{
		if(Docheigth==="height")
	document.write("the height:"+arrayUsers[i][Docheigth]+"<br>");
	}
}


/* for(var i=0;i<arrayUsers.length;i++) //anther option
 {
 	var currentUser=arrayUsers[i];
 	document.wirte( currentUser.name +" "+ currentUser.height +"<br>");
 }*/
 