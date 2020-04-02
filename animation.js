// Concepts and codes from JavaScript 2D Game Development by Gaeme Stuart 
function draw_pacman(ctx, radius, mouth) {
	
	angle = 0.2 * Math.PI * mouth; 
	
	ctx.fillStyle = "yellow"; 
	
	ctx.stokeStyle = "black"; 
	
	ctx.lineWidth = 0.5; 
	
	ctx.beginPath(); 
	
	ctx.arc(0, 0, radius, angle, -angle); 
	
	ctx.lineTo(0, 0); 
	
	ctx.closePath(); 
	
	ctx.fill(); 
	
	ctx.stroke(); 
	
	ctx.restore(); 
}