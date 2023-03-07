const canvasEl = document.querySelector("canvas"), canvasCtx= canvasEl.getContext("2d");
const lineWidth = 15;
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
    x: 10,
    h: field.h,
    draw: function(){
        //desenho da linha central 
        canvasCtx.fillStyle = "#fff";
        canvasCtx.fillRect (field.w / 2 - this.w / 2, 0, this.w, this.h);
    }
}

function setup (){
    canvasEl.width = canvasCtx.width = field.w;
    canvasEl.height = canvasCtx.height = field.h;
}
function draw() {
    field.draw();
    line.draw();

    

    // raquete esquerda 
    canvasCtx.fillRect (10, 400, lineWidth, 200);
    // raquete direita
    canvasCtx.fillRect (window.innerWidth - lineWidth -10, 200, lineWidth, 200);
    // bolinha
    // arc(x, y, r, 0, 2.0 * Math.PI, false)
    canvasCtx.beginPath();
    canvasCtx.arc(200, 300, 20, 0, 2.0 * Math.PI, false);
    canvasCtx.fill();
    // Placar
    canvasCtx.font = 'bold 72px Arial';
    canvasCtx.textAlign = 'center';
    canvasCtx.textBaseline = 'bttom';
    canvasCtx.fillStyle = '#01341D';
    canvasCtx.fillText('0', window.innerWidth / 4, 60);
    canvasCtx.fillText('0', window.innerWidth / 4 + window.innerWidth / 2, 60);

}
setup();
draw();