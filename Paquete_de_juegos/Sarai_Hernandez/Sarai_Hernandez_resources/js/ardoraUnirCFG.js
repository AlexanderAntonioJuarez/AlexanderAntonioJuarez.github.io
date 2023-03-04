//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#A477A4"; colorButton="#93F07B"; colorText="#000000"; colorSele="#919FDB";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidadeees , lo hiciste muy bien"; messageTime="YA SE ACABOOO EL TIEMPO :/"; messageError="Vamos sigue intentando, fallaste :c"; messageErrorG="Vamos sigue intentando, fallaste :c"; messageAttempts="Ya llegaste al limite de intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="U2FyYWlfSGVybmFuZGV6"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["wr9RdcOpIHByZXNpZGVudGUgZGUgRWwgU2FsdmFkb3IgZ29iZXJubyBlbiAxODk5IGhhc3RhIDE4MDM/", "VG9tYXMgUmVnYWxhZG8="],["wr8gUXVlIGNyZW8gcmVnYWxhZG8gZHVyYW50ZSBzdSBtYW5kYXRvPw==", "Q3JlbyBsYSBqdW50YSBjZW50cmFsIGRlIGFncmljdWx0dXJhIHkgZWwgY29uc2VqbyBzdXBlcmlvciBkZSBzYWx1ZA=="],["wr9RdcOpIG9jdXJyaW8gZWwgcHJpbWVybyBkZSBtYXJ6byBkZSAxOTAzPw==", "UmVnYWxhZG8gZW50cmVnYSBwcmVzaWRlbmNpYSBhIFBlZHJvIEpvc8OpIEVzY2Fsw7Nu"],["QcOxbyBlbiBlbCBxdWUgc2UgaW5pY2lhIGxhIGNvbnN0cnVjY2nDs24gZGVsIHBhbGFjaW8geSB0ZWF0cm8gbmFjaW9uYWw/", "RW4gMTkwNg=="],["RW4gcXVlIGZlY2hhIGZhbGxlY2UgUmVnYWxhZG8=", "RmFsbGVjZSBlbCAxMSBkZSBqdWxpbyBkZSAxOTA2"],["wr9RdWllbiBnb2Jlcm5vIEVsIFNhbHZhZG9yIGVuIGVsIGHDsW8gMTkxMSBoYXN0YSAxOTE1Pw==", "R29iZXJubyBlbCBEci5NYW51ZWwgRW5yaXF1ZSBBcmF1am8="],["wr9Qb3IgcXVpw6luIGVzdGEgZm9ybWFkYSBsYSBkaW5hc3TDrWEgTWVsw6luZGV6LVF1acOxb25lej8=", "Rm9ybWFkYSBwb3IgbG9zIGhlcm1hbm9yIENhcmxvcyB5IEpvcmdlIE1lbMOpbmRleiB5IHN1IGN1w7FhZG8gUXVpw7FvbmV6"],["wr9RdWUgc29uIGxhcyBsaWdhcyByb2phcz8=", "RWwgcHJlc2lkZW50ZSBDYXJsb3MgTWVsw6luZGV6IGNyZW8gZXN0byxwYXJhIHVuYSBlc3RydWN0dXJhIHBvbGl0aWNhIHZlcnRpY2FsIGFwb3lvIGEgIHN1IHBhcnRpZG8="]];
var c=[[58,14],[39,67],[41,49],[70,7],[29,30],[53,35],[54,69],[25,97]];
var con1=["¿Qué presidente de El Salvador goberno en 1899 hasta 1803?","¿ Que creo regalado durante su mandato?","¿Qué ocurrio el primero de marzo de 1903?","Año en el que se inicia la construcción del palacio y teatro nacional?","En que fecha fallece Regalado","¿Quien goberno El Salvador en el año 1911 hasta 1915?","¿Por quién esta formada la dinastía Meléndez-Quiñonez?","¿Que son las ligas rojas?"];
var con2=["Tomas Regalado","Creo la junta central de agricultura y el consejo superior de salud","Regalado entrega presidencia a Pedro José Escalón","En 1906","Fallece el 11 de julio de 1906","Goberno el Dr.Manuel Enrique Araujo","Formada por los hermanor Carlos y Jorge Meléndez y su cuñado Quiñonez","El presidente Carlos Meléndez creo esto,para una estructura politica vertical apoyo a  su partido"];
var sel1=""; join1=[]; join2=[];
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
