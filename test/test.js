var spins;
var result;
var canvas = document.getElementById("greg");
var ctx = canvas.getContext("2d");
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function test(){
    for (spins=0; spins<30; spins++){
        ctx.clearRect(0,0,100,100);

        //Selecting winner
        var raw = (Math.random()*53)+1;
        if (raw>=53){
            result="gold";
            ctx.fillStyle="#f6c23e";
        }
        else if (raw>=43){
            result="red";
            ctx.fillStyle="#e74a3b";
        }
        else if (raw>=26){
            result="green";
            ctx.fillStyle="#1cc88a";
        }
        else{
            result="blue";
            ctx.fillStyle="##4e73df";
        }
    
        //Outputs
        ctx.fillRect(0,0,100,100);
        console.log("Bing" + spins + result + ctx.fillStyle)
        await sleep(100);
    
    }
}
test();
