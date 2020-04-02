// Concepts learned from Gaeme Stuart of Introducing JavaScript Game Development 
function draw_pacman(ctx, x, y, radius, pacmanMouth) {
	var pacmanAngle = 0.2 * Math.PI * pacmanMouth; 
	ctx.save();
	ctx.beginPath(); 
	ctx.arc(x, y, radius, pacmanAngle, -pacmanAngle);
	ctx.lineTo(x, y); 
	ctx.fillStyle = "yellow"; 
	ctx.strokeStyle = "black";
	ctx.stroke();
	ctx.fill();
	ctx.restore(); 
}