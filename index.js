const canvasEl = document.querySelector("canvas"), canvasCtx= canvasEl.getContext("2d");
const lineWidth = 15;
const gapX = 10;
const mouse = {x:0, y:0};
const field = {
    w: window.innerWidth,
    h: window.innerHeight,
    draw: function(){
        // desenho do campo
        // fillRect(x,y, width, height)
        canvasCtx.fillStyle = "#286047";
        canvasCtx.fillRect (0, 0, this.w, this.h);
    }
}
const line = {
    w: 15,
    h: field.h,
    draw: function(){
        //desenho da linha central 
        canvasCtx.fillStyle = "#fff";
        canvasCtx.fillRect (field.w / 2 - this.w / 2, 0, this.w, this.h);
    }
}

const leftPaddle = {
    x: gapX,
    y: 0,
    w: line.w,
    h: 200,
    _mover: function(){
        this.y = mouse.y - this.h / 2;
    },
    draw: function(){
        
        canvasCtx.fillStyle = "#fff";
        canvasCtx.fillRect (this.x, this.y, this.w, this.h);
        this._mover();
    }

}

const rightPaddle = {
    x: field.w - line.w - gapX,
    y: 100,
    w: line.w,
    h: 200,
    _mover: function(){
        this.y = ball.y
    },
    draw: function(){
         
        canvasCtx.fillStyle = "#fff";
        canvasCtx.fillRect (this.x, this.y, this.w, this.h);
        this._mover()
    }
}
const ball = {
    x: 0,
    y: 0,
    r: 20,
    speed: 5,
    directionY: 1,
    directionX: 1,
    _calcPosition: function(){
        // if(this.x > field.w){
        //     if(this.y + this.r )
        // }
        if((this.y < 0 - this.r && this.directionY < 0) ||
            (this.y > field.h - this.r && this.directionY > 0)){
            this._reverseY();
        }
    },
    _reverseY: function(){
        this.directionY *= -1
    },
    _reverseX: function(){
        this.directionX *= -1
    },
    _move: function (){
        this.x += this.directionX * this.speed;
        this.y += this.directionY * this.speed;
    },
    draw: function(){
        canvasCtx.fillStyle = "#fff";
        // bolinha
        // arc(x, y, r, 0, 2.0 * Math.PI, false)
        canvasCtx.beginPath();
        canvasCtx.arc(this.x, this.y, this.r, 0, 2.0 * Math.PI, false);
        canvasCtx.fill();
        this._move();
        this._calcPosition()
    }
}
 const score = {
    humano: 1,
    humano2: 2,
    draw: function(){
        // Placar
    canvasCtx.font = 'bold 72px Arial';
    canvasCtx.textAlign = 'center';
    canvasCtx.textBaseline = 'bttom';
    canvasCtx.fillStyle = '#01341D';
    canvasCtx.fillText(this.humano, field.w / 4, 60);
    canvasCtx.fillText(this.humano2, field.w / 4 + window.innerWidth / 2, 60);
    }
 }
function setup (){
    canvasEl.width = canvasCtx.width = field.w;
    canvasEl.height = canvasCtx.height = field.h;
}
function draw() {
    field.draw();
    line.draw();
    leftPaddle.draw();
    rightPaddle.draw();
    score.draw();
    ball.draw();
}
window.animateFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60)
      }
    )
  })()
  function main() {
    animateFrame(main)
    draw()
  }
setup();
draw();
main();
canvasEl.addEventListener("mousemove", function (e) {
    mouse.x = e.pageX
    mouse.y = e.pageY
 })