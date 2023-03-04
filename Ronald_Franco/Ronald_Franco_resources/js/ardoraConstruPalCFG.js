//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#00FFFF"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="bien hecho"; messageTime="3.00"; messageError="es incorrecto"; messageErrorG="es incorrecto"; messageAttempts="intentalo de nuevo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var cp_pal=["Q0FGRQ==","UFJFU0lERU5URSBFTiBFTCBTSUdMTyBYWA==","UFJFU0lERU5URSBQUk9WSVNJT05BTA==","VE9NQVMgUkVHQUxBRE8="];var cp_ima=["Caferico.jpg","Tomas_regalado.jpg","Rafael_gutierrez.jpg","front-of-building.jpg"];var cp_mp3=["","","",""];var cp_ogg=["","","",""];var cp_que=["RU4gMTkyNiBlc3RlIHByb2R1Y3RvIHNlIGR1cGxpY28gZW4gdmVudGFzLg==","ZGVzZGUgMTg4MS0gMTg4NA==","ZW4gMTg5NC0xODk1","Y3JlYSBlc2N1ZWxhIGRlPw=="];var cp_num=[4,25,22,14];var cp_alt=["","","",""];
var wordsGame="Um9uYWxkX0ZyYW5jbw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var au="";var cp=[];var letters=[];var posAns=0;var lettersId=[];var lettersX=[];var lettersY=[];var lettersAns=[];var answers=[];var indexGame=1;var numle=5; var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";
