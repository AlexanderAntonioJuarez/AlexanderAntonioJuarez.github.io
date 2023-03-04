//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Nada Mal"; messageTime=""; messageError="Muy Mal"; messageErrorG="Muy Mal"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q2VzYXJfSGVybmFuZGV6"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Qw==","QQ==","Rg==","RQ==","VA==","QQ==","TA==","RQ==","Ug==","Tw=="],["Og==","Ug==","Og==","Og==","Tw==","Og==","Og==","Og==","Og==","TA=="],["Og==","QQ==","Og==","Og==","TQ==","Og==","Og==","Og==","Og==","SQ=="],["Og==","VQ==","Og==","Og==","QQ==","Og==","Og==","Og==","Og==","Rw=="],["Og==","Sg==","Og==","Og==","Uw==","Og==","Og==","Og==","Og==","QQ=="],["Og==","Tw==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Ug=="],["QQ==","Tg==","VA==","Tw==","Tg==","SQ==","Tw==","Og==","Og==","UQ=="],["SQ==","TA==","VQ==","TQ==","SQ==","Tg==","QQ==","RA==","Tw==","VQ=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","SQ=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","QQ=="]];
var x1=[1,1,1,2,5,10];
var y1=[1,7,8,1,1,1];
var x2=[10,7,10,2,5,10];
var y2=[1,7,8,8,5,10];
var imaCW=["","","","","",""];
var audioCW=["","","","","",""];
var defCW=["el salvador durante 1900-1915","Presidente derrocado por Regalado","el centro de SanSalvador fue...","presidente asesinado","nombre del presidente que derroco a Gutierrez","Sistema de gobierno en la que el poder está en manos de unas pocas personas pertenecientes a una clase social privilegiada."];
var altCW=["","","","","",""];
var colNum=10;
var rowNum=10;
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
