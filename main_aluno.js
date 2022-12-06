//PEDIR PRO ALUNO COPIAR O ARQUIVO AULA 82 PARA USAR:
//MUDANÇAS QUE O ALUNO DEVERÁ FAZER

var mouseEvent = "empty";//FRetira linha 
var positionMouseXInicial, positionMouseYInicial; //MODIFICAR

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthLine = 1;

//CRIAR: 
   //p saber o tamanho da tela que está usando)
    var width = screen.width;
    newWidth =  screen.width - 70; 
    newHeight = screen.height - 300;

    if(width < 992)
	{
	document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    //desabilitar rolamento da tela p facilitar pintura->com fluidez
    document.body.style.overflow = "hidden";
	}
	
//NOVIDADES ACABAM AQUI
    
//MUDAR 
  //canvas.addEventListener("mousedown", myMouseDown);
  //PARA
    canvas.addEventListener("touchstart", myTouchStart);

//Mudar nome da função tb:
    function myTouchStart(e) 
    {
        //REMOVER:mouseEvent = "mouseDown";
        //ADICIONAR:
        console.log("myTouchStart");
        lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
        lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
    }

//MODIFICAR PARA TOUCHMOVE
canvas.addEventListener("touchmove",myTouchMove);

function myTouchMove(e){

   /* RETIRAR:
   var positionMouseX =e.clientX-canvas.offsetLeft;
    var positionMouseY =e.clientY-canvas.offsetTop
    
    if (mouseEvent =="mouseDown") 
   {*/

   //ADICIONAR:
   console.log("myTouchMove");
   positionToqueX = e.touches[0].clientX - canvas.offsetLeft;
   positionToqueY = e.touches[0].clientY - canvas.offsetTop;


//MANTER
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthLine;
     
    console.log("posiçãoXInicial="+positionMouseXInicial+" posiçãoYInicial="+positionMouseYInicial)
    ctx.moveTo(positionMouseXInicial,positionMouseYInicial)

    console.log("posiçãoXFinal="+positionToqueX+" posiçãoYFinal="+positionToqueY)
    ctx.lineTo(positionToqueX,positionToqueY)
    ctx.stroke();
   

   //SÓ TIRAR O "VAR" DAS LINHAS 41 E 42
 positionMouseXInicial=positionToqueX
 positionMouseYInicial=positionToqueY

}

/*REMOVER ESTA PARTE

canvas.addEventListener("mouseup", myMouseUp);
    function myMouseUp(e)
    {
        mouseEvent = "mouseUP";
    }

   canvas.addEventListener("mouseleave", myMouseLeave);
    function myMouseLeave(e)
    {
        mouseEvent = "mouseleave";
    }
*/    
