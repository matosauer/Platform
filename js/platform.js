var PlatformSprite = cc.Sprite.extend( {

	screenHeight: 0.0,
	pixelsPerSecond: 0,
	yOffset: 0,
	//actionMove: null,
    
	ctor: function(spriteFrameName) {
		this._super(spriteFrameName);
	},
	
	SetSpeedAndHeight: function(pps, screenHeight, spriteHeight) {
		
		this.pixelsPerSecond = pps;
		this.screenHeight = screenHeight;
        this.yOffset = spriteHeight / 2;
	},
	
    Start: function() {
    
    },
    
	Stop: function() {
		//this.stopAllActions();
	},
	
	ReachedDestination: function(sender) {
		// reset to right of screen
		//sender.x = sender.xOffset + sender.screenWidth;
		
        sender.y = sender.screenHeight + sender.yOffset;
        //sender.Start();
	},
    
    update: function(dt){
        //console.log("update" + dt);
        
        this.y -= this.pixelsPerSecond * dt;
        
        if (this.y <= -this.yOffset)
        {
            this.ReachedDestination(this);
        }
        
    },
	
    /*
	Start: function() {
		this.stopAllActions();
        
		var distance = this.y + this.yOffset;
		var time = distance / this.pixelsPerSecond;
		var destination = cc.p(this.x, -this.yOffset);
        
        
		this.actionMove = cc.moveTo(time, destination).speed(2.0);
		var actionMoveDone = cc.callFunc(this.ReachedDestination, this);
		
		this.runAction(cc.sequence(this.actionMove, actionMoveDone));
	},
    */
    
    SetSpeed: function(speedY){
        
        this.pixelsPerSecond = speedY; 
        
        console.log('new speed ' + speedY);
        
        //if (this.actionMove != null){
        //    this.actionMove.speed(0.5);
        //}
        
    }
	
	
});


















