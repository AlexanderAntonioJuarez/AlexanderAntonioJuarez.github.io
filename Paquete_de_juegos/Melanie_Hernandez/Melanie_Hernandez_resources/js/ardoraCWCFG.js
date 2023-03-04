//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=80; timeIni=80; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=5;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#E9C2FE"; colorButton="#F8DFFF"; colorText="#000000"; colorSele="#CADFFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="'Times New Roman', Times, serif";
var fDefs="'Times New Roman', Times, serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Yei!"; messageTime=""; messageError="Ups!"; messageErrorG="Ups!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="TWVsYW5pZV9IZXJuYW5kZXo="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","QQ==","VA==","Tw==","TQ==","Tw==","","","","Qg=="],["","VA==","SA==","Tw==","TQ==","Uw==","Tw==","Tg==","","Tw=="],["","RA==","","","","","","","","Ug=="],["","QQ==","","","","","","","","Tg=="],["","TA==","TQ==","Tw==","RA==","RQ==","TA==","Tw==","Uw==",""],["QQ==","VA==","Tw==","TQ==","SQ==","Qw==","Tw==","Uw==","",""],["","Tw==","","","","","","","",""],["","Tg==","","","","","","","",""],["","","","","","","","","",""],["Ug==","VQ==","VA==","SA==","RQ==","Ug==","Rg==","Tw==","Ug==","RA=="]];
var x1=[2,2,1,2,10,1,2];
var y1=[1,2,6,5,1,10,1];
var x2=[6,8,8,9,10,10,2];
var y2=[1,2,6,5,4,10,8];
var imaCW=["Melanie_Hernandez_resources/media/descarga__1_.png","","","","","",""];
var audioCW=["","","","","","",""];
var defCW=["Los átomos son las unidades más pequeñas y estables de la materia.","Joseph John \"J.J.\" Thomson, fue un científico británico, descubridor del electrón","modelo atomico","modelo atomico","físico danés que realizó contribuciones fundamentales para la comprensión de la estructura del átomo y la mecánica cuántica.","creador de el modelo atomico de Rutherford","Creador de el modelo de Dalton"];
var altCW=["","","","","","",""];
var colNum=10;
var rowNum=10;
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
