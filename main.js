canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width="75";
greencar_height="100";

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x="5";
greencar_y="225";

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground; 
	background_imgTag.src = background_image;   

	rover_imgTag = new Image(); 
	rover_imgTag.onload = uploadgreencar;
	rover_imgTag.src = greencar_image;   
}

function uploadBackground() {
ctx.drawImage(backround_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, )

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if(greencar_y=0)
{
	greencar_y=greencar_y-10;
	console.log(rover_y);
	uploadBackground();
	uploadgreencar();
}
}

function down()
{
	greencar_y=greencar_y+10;
	console.log(rover_y);
	uploadBackground();
	uploadgreencar();
}

function left()
{
	greencar_x=greencar_x-10;
	console.log(rover_x);
	uploadBackground();
	uploadgreencar();
}

function right(){
greencar_x=greencar_x+10;
	console.log(rover_x);
	uploadBackground();
	uploadgreencar();
}
