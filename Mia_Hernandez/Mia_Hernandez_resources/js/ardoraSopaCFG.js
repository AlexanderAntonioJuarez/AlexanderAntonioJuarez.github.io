//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0
var successes=0; successesMax=1; attempts=1; attemptsMax=1;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="play!";
var startTime; tiSuccesses=false; tiAttempts=false; tiScore=false;
typeGame=1;
var colorBack="#99E98B"; colorButton="#91FF91"; colorText="#000000"; colorSele="#A9C8FC";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Genial, lo has logrado!"; messageTime="owlo arruinaste...."; isShowMessage=false;
var urlOk=""; urlTime="";
var goURLOk="_blank"; goURLTime="_blank"; 
var borderOk="#AAAAF9"; borderTime="#B4F9AA"; borderAttempts="#B4F9AA";borderError="#B4F9AA";
var imaSel=0; texSel=0;
var board=[]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=["QcORSUw=","Q0FGRQ==","RVhQT1JUQUNJT04=","RUNPTk9NSUE=","T0JMSUdBUlFVSUE=","SU1QVUVTVE9T","UkVGT1JNQUxJQkVSQUw=","Q1VMVElWTw==","TElCRVJBTElTTU8=","SU5ESUdFTkE=","RU1QUkVORElNSUVOVE8=","UEFSQ0VMQQ==","R09CSUVSTk8=","R0FOQURFUklB","SU5ERVBFTkRFTkNJQQ=="];
var c=[4,4,11,8,11,9,14,7,11,8,14,7,8,9,13];
var defs=["denominación tradicional del color azul","es la bebida que se obtiene al partir de los granos tostados y molidos de los frutos","cualquier bien o servicio enviado fuera del territorio nacional","área de la producción, distribución y comercio, así como el consumo de bienes y servicios por parte de los diferentes agentes económicos","forma de gobierno en el cual el poder politico es ejercido por grupo minoritario","es un tributo o carga que las personas están obligadas a pagar a alguna organización","Conjunto de iniciativas politicas","Acción o actividad de cultivar algo","doctrina política social y económica.","Originario del país de que se trata.","Inicio de una actividad que exige esfuerzo o trabajo, o tiene cierta importancia o envergadura","Parte en que se divide un terreno agrícola o urbanizado en el campo.","conjunto de órganos a los que institucionalmente les está confiado el ejercicio del poder político.","actividad que consiste en el manejo y explotación de animales domesticables con fines de producción","formación o la restauración de un país inmediatamente después de la separación de otro del que solo formaba una parte."];
var wDefs=350; posCheck=[];
var answers=[]; letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="TWlhX0hlcm5hbmRleg=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var numCols=14; numRows=14; sizeCell=20;
var direction=["HD","VD","X1D","X2D"];
var boardGame=[[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."]];
var solved1X=[];solved1Y=[];solved2X=[];solved2Y=[];paintSolved=["N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"];x1=[];y1=[];x2=[];y2=[];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";
