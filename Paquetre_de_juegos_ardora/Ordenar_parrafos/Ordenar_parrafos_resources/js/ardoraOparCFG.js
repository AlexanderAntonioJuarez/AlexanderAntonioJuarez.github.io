//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
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
var timeOnMessage=5; messageOk="FELICIDADES"; messageTime="SE ACABO EL TIEMPO"; messageError="BRUH"; messageErrorG="BRUH"; messageAttempts="MAL HECHO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="T3JkZW5hcl9wYXJyYWZvcw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="Ordenar_parrafos_resources/media/";
var indexG=0;
var words1G=["RGVzZGUgZWwgZm9uZG8gZGUgdGksIHkgYXJyb2RpbGxhZG8s","dW4gbmnDsW8gdHJpc3RlLCBjb21vIHlvLCBub3MgbWlyYS4NCg0KdW4gbmnDsW8gdHJpc3RlLCBjb21vIHlvLCBub3MgbWlyYS4=","UG9yIGVzYSB2aWRhIHF1ZSBhcmRlcsOhIGVuIHN1cyB2ZW5hcw==","dGVuZHLDrWFuIHF1ZSBhbWFycmFyc2UgbnVlc3RyYXMgdmlkYXMu","UG9yIGVzYXMgbWFub3MsIGhpamFzIGRlIHR1cyBtYW5vcyw=","dGVuZHLDrWFuIHF1ZSBtYXRhciBsYXMgbWFub3MgbcOtYXMu","UG9yIHN1cyBvam9zIGFiaWVydG9zIGVuIGxhIHRpZXJyYQ==","dmVyw6kgZW4gbG9zIHR1eW9zIGzDoWdyaW1hcyB1biBkw61hLg0KdmVyw6kgZW4gbG9zIHR1eW9zIGzDoWdyaW1hcyB1biBkw61hLg=="];
var words2G=["UHVlZG8gZXNjcmliaXIgbG9zIHZlcnNvcyBtw6FzIHRyaXN0ZXMgZXN0YSBub2NoZS4=","RXNjcmliaXIsIHBvciBlamVtcGxvOiDCq0xhIG5vY2hlIGVzdMOhIGVzdHJlbGxhZGEs","eSB0aXJpdGFuLCBhenVsZXMsIGxvcyBhc3Ryb3MsIGEgbG8gbGVqb3PCuy4=","RWwgdmllbnRvIGRlIGxhIG5vY2hlIGdpcmEgZW4gZWwgY2llbG8geSBjYW50YS4=","UHVlZG8gZXNjcmliaXIgbG9zIHZlcnNvcyBtw6FzIHRyaXN0ZXMgZXN0YSBub2NoZS4=","WW8gbGEgcXVpc2UsIHkgYSB2ZWNlcyBlbGxhIHRhbWJpw6luIG1lIHF1aXNvLg==","RW4gbGFzIG5vY2hlcyBjb21vIMOpc3RhIGxhIHR1dmUgZW50cmUgbWlzIGJyYXpvcy4=","TGEgYmVzw6kgdGFudGFzIHZlY2VzIGJham8gZWwgY2llbG8gaW5maW5pdG8u"];
var words3G=["SGF5IGFsZ28gZGVuc28sIHVuaWRvLCBzZW50YWRvIGVuIGVsIGZvbmRvLA==","cmVwaXRpZW5kbyBzdSBuw7ptZXJvLCBzdSBzZcOxYWwgaWTDqW50aWNhLg==","Q8OzbW8gc2Ugbm90YSBxdWUgbGFzIHBpZWRyYXMgaGFuIHRvY2FkbyBlbCB0aWVtcG8s","ZW4gc3UgZmluYSBtYXRlcmlhIGhheSBvbG9yIGEgZWRhZCw=","eSBlbCBhZ3VhIHF1ZSB0cmFlIGVsIG1hciwgZGUgc2FsIHkgc3Vlw7FvLg==","TWUgcm9kZWEgdW5hIG1pc21hIGNvc2EsIHVuIHNvbG8gbW92aW1pZW50bzo=","ZWwgcGVzbyBkZWwgbWluZXJhbCwgbGEgbHV6IGRlIGxhIG1pZWws","c2UgcGVnYW4gYWwgc29uaWRvIGRlIGxhIHBhbGFicmEgbm9jaGU6","bGEgdGludGEgZGVsIHRyaWdvLCBkZWwgbWFyZmlsLCBkZWwgbGxhbnRvLA==","c2UgdW5lbiBlbiB0b3JubyBhIG3DrSBjb21vIHBhcmVkZXMu"];
var c1=[36,72,36,38,35,34,34,70];
var c2=[49,49,43,47,49,45,49,44];
var c3=[43,40,50,35,42,44,39,39,43,35];
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
