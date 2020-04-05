// Concepts and codes taught by Gaeme Stuart from Introduction to JavaScript Game Development
function draw_grid(ctx, minor, major, stroke, fill) {
	
	minor = minor || 10; 
	
	major = major || minor * 5; 
	
	stroke = stroke || "#00FF00"; 
	
	fill = fill || "#009900"; 
	
	ctx.save(); 
	
	ctx.strokeStyle = stroke; 
	
	ctx.fillStyle = fill; 
	
	for(var x = 0; x < ctx.canvas.width; x += minor) {
		
		ctx.beginPath(); 
		
		ctx.moveTo(x, 0); 
		
		ctx.lineTo(x, ctx.canvas.height); 
		
		ctx.lineWidth = (x % major == 0) ? 0.5 : 0.25; 
		
		ctx.stroke(); 
		
		if(x % major == 0) {ctx.fillText(x, x, 10);} 
	}
	
	for(var y = 0; y < ctx.canvas.height; y += minor) {
		
		ctx.beginPath(); 
		
		ctx.moveTo(0, y); 
		
		ctx.lineTo(ctx.canvas.width, y);
		
		ctx.lineWidth = (y % major == 0) ? 0.5 : 0.25; 
		
		ctx.stroke(); 
		
		if(y % major == 0) {ctx.fillText(y, 0, y + 10);} 
	}
	
}

function draw_pacman(context, x, y, radius, mouth) {
	
	angle = 0.2 * Math.PI * mouth; 
	
	context.save(); 
	
	context.fillStyle = "yellow"; 
	
	context.strokeStyle = "black"; 
	
	context.beginPath(); 
	
	context.arc(x, y, radius, angle, -angle); 
	
	context.lineTo(x, y); 
	
	context.stroke();
	
	context.fill();
	
	context.closePath(); 
	
	context.restore(); 
}

function draw_ghost(ctx, radius, options) {
	
	options = options || {}; 
	
	var feet = options.feet || 4; 
	
	var head_radius = radius * 0.8; 
	
	var foot_radius = head_radius / feet; 
	
	ctx.save(); 
	
	ctx.strokeStyle = options.stroke || "white"; 
	
	ctx.fillStyle = options.fill || "red"; 
	
	ctx.lineWidth = options.lineWidth || radius * 0.05; 
	
	ctx.beginPath(); 
	
	for(foot = 0; foot < feet; foot++) {
		
		ctx.arc(2 * foot_radius * (feet - foot)) - head_radius - foot_radius, radius - foot_radius, foot_radius, 0, Math.PI); 
		
	}
	
	ctx.lineTo(-head_radius, radius - foot_radius); 
	
	ctx.arC(0, head_radius - radius, head_radius, Math.PI, 2 * Math.PI); 
	
	ctx.closePath(); 
	
	ctx.fill(); 
	
	ctx.stroke(); 
	
	ctx.restore(); 
}
