var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=2;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES"; messageTime="SE ACABO EL TIEMPO"; messageError="BRUH"; messageErrorG="BRUH"; messageAttempts="MUY MAL, FALLASTE"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="T3JkZW5hcl9mcmFzZQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["Qm91bmpvdXIsIGNvbW1lbnQgw6dhIHZhPyBiaWVuPw==","QnVlbm9zIGRpYXMsIMK/Y29tbyBlc3Rhcz8gwr9iaWVuPw==","U0NSVU0gZXMgdW5hIG1ldG9kb2xvZ2lhIGFnaWw=","QmFjaGlsbGVyYXRvIGRlIHNvZnR3YXJlIGVsIG1lam9y","UG9yZmF2b3IsIHByb2Zlc29yLCBhcHJ1ZWJlbWUsIHF1ZSBzaSBubyBtaSBwYXBhIG1lIHBlZ2E="];imaW=["a.jpg","ScrumPoster.png","ScrumPoster.png","descarga.jpg","descarga__1_.jpg"];queW=["Saludo en frances","Saludoi en español","scrum","Una verdad","Estudiante LATAM promedio"];altW=["","","","",""];c=[30,32,29,33,56];
var auW=["MQ==","Mg==","Mw==","NA==","NQ=="];
var actMaxWidth="600"; actMaxHeight="300";indexG=0;profG=0;dirMedia="Ordenar_frase_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
