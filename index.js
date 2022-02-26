var btncolor=["red","blue","green","yellow"];
var gamePattern=[];
var userPattern=[];

var colorChosen ;
var usercosencolor;
var level=0;
document.addEventListener("keydown",()=>{
    if(level==0)
    {
        $("h1").text("Level "+level);
        level++;
        gamePattern=[];
        nextSequence();
    }
})
var count;
$(".btn").click(function(){
    count++;
    clicked(this.id);
    usercosencolor=this.id;
    userPattern.push(usercosencolor);
    //console.log(userPattern);
    if(userPattern[count-1]!=gamePattern[count-1])
    {
        //console.log(count);
        var audio=new Audio("sounds/"+"wrong"+".mp3");
         audio.play();
        $("h1").text("You Loose!!Press any key to restart");
        userPattern=[];
        level=0; 
        return ;

    }
    if(count<level){}
    else if(count ==level)
    {
            $("h1").text("Level "+level);
            level++;
            setTimeout(
               function() {
                   //console.log("level completed");
                   nextSequence(); 
                },1000);
            }
    else 
    {
        $("h1").text("You Loose !!Press any key to restart");
        userPattern=[];
        level=0;
    }
    
});

function nextSequence(){
    count=0;
    let randomno=Math.floor(Math.random()*4);
    colorChosen=btncolor[randomno];
    clicked(colorChosen);
    gamePattern.push(colorChosen);
    userPattern=[];
    
}

function clicked(color)
{
    var audio=new Audio("sounds/"+color+".mp3");
    audio.play();
    $("."+color).addClass("pressed");
   
    setTimeout(function(){
        $("."+color).removeClass("pressed");
    },100);
}

/*function isequal(a1,a2)
{
    //console.log("just checking");
   /// console.log(a1);
    //console.log(a2);
    if(a1.length!=a2.length)
    return false;
    for(let i=0;i<a1.length;i++)
    {
        if(a1[i]!=a2[i])
        return false;
    }
    return true;
}*/