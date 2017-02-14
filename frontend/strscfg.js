function timeAutoStart(){
setTimeout(function(){autoStep();},1000);
}
function autoStep(){
var startPoint = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
//console.log(startPoint);
var typePlace = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
//console.log(typePlace);
var f=startPoint;
	if(typePlace==1){
		//ставимо вертикально
		
		if(f>89){f=f*1-10;}
		var s=f*1+10;
		if(f==0&&s==1){
			var chkId=1000*s;
			}else{
				if(f==0&&s==10){
				var chkId=1010;
				}else{
					var chkId=f*100+s;}
				}
		/**/
		var element=document.getElementById(chkId);
		if(!element){
		resrartAuto();
		}else{
		/**/
		if(autoSetVArrow(chkId,f,s)){
		//console.log(f);
		//console.log(s);
		//console.log(1);
		doStep();
		}}
	}else {
		//ставимо горизонтально
		
		if(f>98){f=f*1-1;}
		var s=f*1+1;
		if(f==0&&s==1){
			var chkId=1000*s;
			}else{
				if(f==0&&s==10){
				var chkId=1010;
				}else{
					var chkId=f*100+s;}
				}
		/**/
		var element=document.getElementById(chkId);
		if(!element){
		resrartAuto();
		}else{
		/**/
		if(autoSetHArrow(chkId,f,s)){
		//console.log(f);
		//console.log(s);
		//console.log(2);
		doStep();
		}}
	}
	if(end.style.display=='none'){
		var tfs=fscore.value;
		var tss=sscore.value;
		var ttemp=tfs*1+tss*1;
		if(ttemp>39){
			end.style.display='block';
		}
	}
}

function resrartAuto(){
try {
    autoStep();
} catch (ex){
    youwin.style.display='block';
    setTimeout(function(){iamloser();},3000);
}

}
/****************/
function showAutoError(){autoerr.style.display='block';
setTimeout(function(){hideAutoError();},3000);}
function hideAutoError(){autoerr.style.display='none';}

function autoSetHArrow(chk,f,s){
	//генеруємо ID
	if(f==0&&s==1){
		var id=1000*s;
	}else{
		if(f==0&&s==10){
			var id=1010;
		}else{
			var id=f*100+s;
		}
	}
	
	if(chk!=id){
	}else{
		//змінні що повертатимуться
		var finf,fins;
		//отримуємоо значення першої і другої позиції
		var fp = document.getElementById(f).value;
		var sp = document.getElementById(s).value;
		//перевірка, чи застосовувались функції на інших рядках
		var buffer = buf.value;
		if(buffer=='down' || buffer=='up' || buffer=='left'|| buffer=='right'){
			var ctrl = cont.value;
			if(ctrl!=id){
				//очищаємо стиль і буфер
				document.getElementById(ctrl).style.backgroundImage="";
				buf.value='';
				}
			}
		//закінчили перевірку
		//якщо не можна
		var fTestOne = fp*1+1;
		var fTestTwo = fp*1+2;
		var sTestOne = sp*1+1;
		var sTestTwo = sp*1+2;
		
		if(fp>3||sp>3||(fp==3&&sp==3)||(fp==2&&sp==2)||(fp==4&&sp==4)){
			showAutoError();
			resrartAuto();
			//було
			//autoStep();
			//console.log("Стрілку не встановлено");
		}else{
			//якщо можна тільки вправо
			if((fp == 3 && sp == 1)||(fp == 3 && sp == 2)){
				//якщо буфер пустий
				if(buf.value==''){
					buf.value='right';
					if(play.value=='first'){document.getElementById(id).style.backgroundImage="url('fright.png')";}
					if(play.value=='second'){document.getElementById(id).style.backgroundImage="url('sright.png')";}
					
					finf = fp*1 + 1;
					fins = sp*1 + 2;
					fvalue.value = ""+finf;
					svalue.value = ""+fins;
					//console.log("Стрілку встановлено");
				}else{
					//якщо буфер наповнений
					if(buf.value=='right'){
						buf.value='';
						document.getElementById(id).style.backgroundImage="";
						finf = 0;
						fins = 0;
						fvalue.value = '';
						svalue.value = '';
					}
				}
			}else{
				//якщо можна тільки вліво
				if((fp == 1 && sp == 3)||(fp == 2 && sp == 3)){
				//якщо буфер пустий
				if(buf.value==''){
					buf.value='left';
					if(play.value=='first'){document.getElementById(id).style.backgroundImage="url('fleft.png')";}
					if(play.value=='second'){document.getElementById(id).style.backgroundImage="url('sleft.png')";}
	
					finf = fp*1 + 2;
					fins = sp*1 + 1;
					fvalue.value = finf;
					svalue.value = fins;
					//console.log("Стрілку встановлено");
				}else{
					//якщо буфер наповнений
					if(buf.value=='left'){
						buf.value='';
						document.getElementById(id).style.backgroundImage="";
						finf = 0;
						fins = 0;
						fvalue.value = '';
						svalue.value = '';
					}
				}
			}else{
				//якщо можна в будь яку сторону
				if((fp == 1 && sp == 2)||(fp == 2 && sp == 1)||(fp == 1 && sp == 1)){
					if(buf.value==''&&sp!=2){
						buf.value='left';
						if(play.value=='first'){document.getElementById(id).style.backgroundImage="url('fleft.png')";}
						if(play.value=='second'){document.getElementById(id).style.backgroundImage="url('sleft.png')";}
						document.getElementById(id).style.backgroundRepeat="no-repeat";
						fvalue.value=fp*1+2;
						svalue.value=sp*1+1;
						//console.log("Стрілку встановлено");
					}else{
						if((buf.value=='left')&&fp!=2||(buf.value==''&&fp!=2)){
							buf.value='right';
							if(play.value=='first'){document.getElementById(id).style.backgroundImage="url('fright.png')";}
							if(play.value=='second'){document.getElementById(id).style.backgroundImage="url('sright.png')";}
							document.getElementById(id).style.backgroundRepeat="no-repeat";
							fvalue.value=fp*1+1;
							svalue.value=sp*1+2;
							//console.log("Стрілку встановлено");
						}else{
							if((buf.value=='right'||(buf.value=='left'&&fp==2))){
								buf.value='';
								document.getElementById(id).style.background="";
								document.getElementById(id).style.backgroundimage="";
								fvalue.value='';
								svalue.value='';
							}
						}
					}
				}
			}
			}
		}
	cont.value=id;
	findex.value=f;
	sindex.value=s;
	return 1;
	//кінець функції
	}
}

function autoSetVArrow(chk,f,s){
//генеруємо ID
if(f==0&&s==1){
var id=1000*s;}else{
if(f==0&&s==10){
var id=1010;}else{
var id=f*100+s;}}
if(chk!=id){}else{
//змінні що повертатимуться
var finf,fins;
//отримуємоо значення першої і другої позиції
var fp = document.getElementById(f).value;
var sp = document.getElementById(s).value;
//перевірка, чи застосовувались функції на інших рядках
var buffer = buf.value;
if(buffer=='down' || buffer=='up' || buffer=='left'|| buffer=='right'){
var ctrl = cont.value;
if(ctrl!=id){
//очищаємо стиль і буфер
document.getElementById(ctrl).style.backgroundImage="";
buf.value='';}}
//закінчили перевірку
//якщо не можна
var fTestOne = fp*1+1;
var fTestTwo = fp*1+2;
var sTestOne = sp*1+1;
var sTestTwo = sp*1+2;
if(fp>3||sp>3||(fp==3&&sp==3)||(fp==2&&sp==2)||(fp==4&&sp==4)){
showAutoError();
resrartAuto();
//autoStep();
//console.log("Стрілку не встановлено");
}else{
//якщо можна тільки вниз
if((fp == 3 && sp == 1)||(fp == 3 && sp == 2)){
	//якщо буфер пустий
	if(buf.value==''){
	buf.value='down';
	if(play.value=='first'){document.getElementById(id).style.backgroundImage="url('fdown.png')";}
	if(play.value=='second'){document.getElementById(id).style.backgroundImage="url('sdown.png')";}
	finf = fp*1 + 1;
	fins = sp*1 + 2;
	fvalue.value = ""+finf;
	svalue.value = ""+fins;
	//console.log("Стрілку встановлено");
	}else{
	//якщо буфер наповнений
	if(buf.value=='down'){
	buf.value='';
	document.getElementById(id).style.backgroundImage="";
	finf = 0;
	fins = 0;
	fvalue.value = '';
	svalue.value = '';
	}}}else{
//якщо можна тільки вгору
if((fp == 1 && sp == 3)||(fp == 2 && sp == 3)){
	//якщо буфер пустий
	if(buf.value==''){
	buf.value='up';
	if(play.value=='first'){document.getElementById(id).style.backgroundImage="url('fup.png')";}
	if(play.value=='second'){document.getElementById(id).style.backgroundImage="url('sup.png')";}
	finf = fp*1 + 2;
	fins = sp*1 + 1;
	fvalue.value = finf;
	svalue.value = fins;
	//console.log("Стрілку встановлено");
	}else{
	//якщо буфер наповнений
	if(buf.value=='up'){
	buf.value='';
	document.getElementById(id).style.backgroundImage="";
	finf = 0;
	fins = 0;
	fvalue.value = '';
	svalue.value = '';
	}}
}else{
//якщо можна в будь яку сторону
if((fp == 1 && sp == 2)||(fp == 2 && sp == 1)||(fp == 1 && sp == 1)){
	if(buf.value==''&&sp!=2){
	buf.value='up';
	if(play.value=='first'){document.getElementById(id).style.backgroundImage="url('fup.png')";}
	if(play.value=='second'){document.getElementById(id).style.backgroundImage="url('sup.png')";}
	document.getElementById(id).style.backgroundRepeat="no-repeat";
	fvalue.value=fp*1+2;
	svalue.value=sp*1+1;
	//console.log("Стрілку встановлено");
	}else{
	if((buf.value=='up'&&fp!=2)||(buf.value==''&&fp!=2)){
	buf.value='down';
	if(play.value=='first'){document.getElementById(id).style.backgroundImage="url('fdown.png')";}
	if(play.value=='second'){document.getElementById(id).style.backgroundImage="url('sdown.png')";}
	document.getElementById(id).style.backgroundRepeat="no-repeat";
	fvalue.value=fp*1+1;
	svalue.value=sp*1+2;
	//console.log("Стрілку встановлено");
	}else{
	if(buf.value=='down'||(buf.value=='up'&&fp==2)){
	buf.value='';
	document.getElementById(id).style.background="";
	document.getElementById(id).style.backgroundImage="";
	fvalue.value='';
	svalue.value='';
	}}}}}}}
cont.value=id;
findex.value=f;
sindex.value=s;
//кінець функції
return 1;
}}
/*****************/

function iamloser(){
var l,w;
var ws,ls;
if(play.value=='first'){
ls=fscore.value;
ws=sscore.value;
l=fPbut.value;
w=sPbut.value;}
if(play.value=='second'){
ws=fscore.value;
ls=sscore.value;
w=fPbut.value;
l=sPbut.value;}
loser.value=l;
winner.value=w;
var finurl="http://streams.url.ph/finish.php?winner="+w+"&loser="+l+"&ws="+ws+"&ls="+ls;
location.href=finurl;}

function gotoGame(){location.href="http://ua.streams.url.ph";}
function gotoMain(){location.href="http://streams.url.ph";}

function sIs(){
si1.style.display='none';
si2.style.display='block';}

function sIt(){
si2.style.display='none';
si3.style.display='block';}

function sIf(){
si3.style.display='none';
si4.style.display='block';}

function sIfi(){
si4.style.display='none';
si5.style.display='block';}
function hI(){si5.style.display='none';}

function showError(){err.style.display='block';
setTimeout(function(){hideError();},3000);}

function hideError(){err.style.display='none';}

function fPInput(){
setTimeout(function(){
gamenot.style.display='none';
game.style.display='block';},6000);}

function sPInput(){
setTimeout(function(){
gamenot.style.display='none';
game.style.display='block';},3000);}

function startGame(){
startgame.style.display='none';
work.style.display='block';
var fplay = fplayer.value;
var splay = splayer.value;
fPbut.value=fplay;
sPbut.value=splay;
si1.style.display='block';}

/*******************************************************************************/
document.onkeydown = function(e) {
if(play.value=='first'){
   e = e || window.event;
   var charCode = e.keyCode || e.which;
   if (charCode == 32) {
		doStep();}
   if(charCode == 13){
   if(dbutt.style.display=='none'){
   dbutt.style.display='block';}else{
   dbutt.style.display='none';
   }}}}
   
/******************************************************************************/
function doStep(){

if(buf.value!=''&&fvalue.value!=''&&svalue.value!=''){
letDoStep();
dbutt.style.display='none';
tablo.style.display='block';
}}

function letDoStep(){
	var fs=fscore.value;
	var ss=sscore.value;
	var temp=fs*1+ss*1;
	if(temp>39){
		end.style.display='block';
	}
	if(play.value=='first'){
		var score=fscore.value;
		var newId;
		var bufferValue = buf.value;
		var frtIndex = findex.value;
		var scdIndex = sindex.value;
		var newFValue = fvalue.value;
		var newSValue = svalue.value;
		if(frtIndex==0&&scdIndex==1){
			var setId = 1000;
		}else{
			if(frtIndex==0&&scdIndex==10){
				var setId = 1010;
			}else{
				var setId = frtIndex*100+scdIndex*1;
			}
		}
		
		document.getElementById(frtIndex).value=newFValue;
		document.getElementById(scdIndex).value=newSValue;
		if(bufferValue=='left'){newId='fl';}
		if(bufferValue=='right'){newId='fr';}
		if(bufferValue=='up'){newId='fu';}
		if(bufferValue=='down'){newId='fd';}
		document.getElementById(setId).id=newId;
		cont.value='';
		buf.value='';
		play.value='second';
		finfo.value='';
		sinfo.value='хід';
		fscore.value=score*1+1;
		/*запуск бота*/
		autoerr.style.display='block';
		if(end.style.display=='block'){
			end.style.display='none';
		}
		timeAutoStart();
		/* зупинка */
	}else{
	if(play.value=='second'){
		var score=sscore.value;
		console.log("Отримано рахунок");
		console.log(score);
		
		var newId;
		var bufferValue = buf.value;
		console.log("Отримано буферне значення");
		console.log(bufferValue);
		
		var frtIndex = findex.value;
		console.log("Отримано перший індекс");
		console.log(frtIndex); 
		
		var scdIndex = sindex.value;
		console.log("Отримано другий індекс");
		console.log(scdIndex); 
		
		var newFValue = fvalue.value;
		console.log("Отримано нове перше значення");
		console.log(newFValue);
		
		var newSValue = svalue.value;
		console.log("Отримано нове друге значення");
		console.log(newSValue);
		
		if(frtIndex==0&&scdIndex==1){var setId = 1000;
		}else{
			var setId = frtIndex*100+scdIndex*1;
			console.log("Отримано значення айді блоку встановлення");
			console.log(setId);
		}
		document.getElementById(frtIndex).value=newFValue;
		console.log("Отримано новий перший індекс");
		console.log(frtIndex); 
		
		document.getElementById(scdIndex).value=newSValue;
		console.log("Отримано новий другий індекс");
		console.log(scdIndex); 
		
		console.log("Перевірка буферу напрямку");
		console.log(bufferValue); 
		
		if(bufferValue=='left'){newId='sl';}
		if(bufferValue=='right'){newId='sr';}
		if(bufferValue=='up'){newId='su';}
		if(bufferValue=='down'){newId='sd';}
		document.getElementById(setId).id=newId;
		console.log("Перевірка нового айді");
		console.log(setId); 
		
		cont.value='';
		buf.value='';
		play.value='first';
		sinfo.value='';
		finfo.value='хід';
		sscore.value=score*1+1;
		autoerr.style.display='none'
		return("success");
		}
	}
}
/************************************/
/************************************/
function setHArrow(chk,f,s){
//генеруємо ID
if(f==0&&s==1){
var id=1000*s;
}else{
if(f==0&&s==10){
var id=1010;
}else{
var id=f*100+s;}
}
if(chk!=id){
}else{
//змінні що повертатимуться
var finf,fins;
//отримуємоо значення першої і другої позиції
var fp = document.getElementById(f).value;
var sp = document.getElementById(s).value;
//перевірка, чи застосовувались функції на інших рядках
var buffer = buf.value;
if(buffer=='down' || buffer=='up' || buffer=='left'|| buffer=='right'){
var ctrl = cont.value;
if(ctrl!=id){
//очищаємо стиль і буфер
document.getElementById(ctrl).style.backgroundImage="";
buf.value='';}}
//закінчили перевірку
//якщо не можна
var fTestOne = fp*1+1;
var fTestTwo = fp*1+2;
var sTestOne = sp*1+1;
var sTestTwo = sp*1+2;
if(fp>3||sp>3||(fp==3&&sp==3)||(fp==2&&sp==2)||(fp==4&&sp==4)){
showError();
}else{
//якщо можна тільки вправо
if((fp == 3 && sp == 1)||(fp == 3 && sp == 2)){
	//якщо буфер пустий
	if(buf.value==''){
	buf.value='right';
	if(play.value=='first'){document.getElementById(id).style.backgroundImage="url('fright.png')";}
	if(play.value=='second'){document.getElementById(id).style.backgroundImage="url('sright.png')";}
	finf = fp*1 + 1;
	fins = sp*1 + 2;
	fvalue.value = ""+finf;
	svalue.value = ""+fins;
	/* показуємо кнопку "ЗРОБИТИ ХІД" */
	tablo.style.display='none';
	dbutt.style.display='block';
	/* !  */
	}else{
	//якщо буфер наповнений
	if(buf.value=='right'){
	buf.value='';
	document.getElementById(id).style.backgroundImage="";
	finf = 0;
	fins = 0;
	fvalue.value = '';
	svalue.value = '';
	/* ховаємо кнопку "ЗРОБИТИ ХІД" */
	dbutt.style.display='none';
	tablo.style.display='block';
	/* !  */
	}}
}else{
//якщо можна тільки вліво
if((fp == 1 && sp == 3)||(fp == 2 && sp == 3)){
	//якщо буфер пустий
	if(buf.value==''){
	buf.value='left';
	if(play.value=='first'){document.getElementById(id).style.backgroundImage="url('fleft.png')";}
	if(play.value=='second'){document.getElementById(id).style.backgroundImage="url('sleft.png')";}
	finf = fp*1 + 2;
	fins = sp*1 + 1;
	fvalue.value = finf;
	svalue.value = fins;
	/* показуємо кнопку "ЗРОБИТИ ХІД" */
	tablo.style.display='none';
	dbutt.style.display='block';
	/* !  */
	}else{
	//якщо буфер наповнений
	if(buf.value=='left'){
	buf.value='';
	document.getElementById(id).style.backgroundImage="";
	finf = 0;
	fins = 0;
	fvalue.value = '';
	svalue.value = '';
	/* ховаємо кнопку "ЗРОБИТИ ХІД" */
	dbutt.style.display='none';
	tablo.style.display='block';
	/* !  */
	}}
}else{
//якщо можна в будь яку сторону
if((fp == 1 && sp == 2)||(fp == 2 && sp == 1)||(fp == 1 && sp == 1)){
	if(buf.value==''&&sp!=2){
	buf.value='left';
	if(play.value=='first'){document.getElementById(id).style.backgroundImage="url('fleft.png')";}
	if(play.value=='second'){document.getElementById(id).style.backgroundImage="url('sleft.png')";}
	document.getElementById(id).style.backgroundRepeat="no-repeat";
	fvalue.value=fp*1+2;
	svalue.value=sp*1+1;
	/* показуємо кнопку "ЗРОБИТИ ХІД" */
	tablo.style.display='none';
	dbutt.style.display='block';
	/* !  */
	}else{
	if((buf.value=='left')&&fp!=2||(buf.value==''&&fp!=2)){
	buf.value='right';
	if(play.value=='first'){document.getElementById(id).style.backgroundImage="url('fright.png')";}
	if(play.value=='second'){document.getElementById(id).style.backgroundImage="url('sright.png')";}
	document.getElementById(id).style.backgroundRepeat="no-repeat";
	fvalue.value=fp*1+1;
	svalue.value=sp*1+2;
	/* показуємо кнопку "ЗРОБИТИ ХІД" */
	tablo.style.display='none';
	dbutt.style.display='block';
	/* !  */
	}else{
	if((buf.value=='right'||(buf.value=='left'&&fp==2))){
	buf.value='';
	document.getElementById(id).style.background="";
	document.getElementById(id).style.backgroundimage="";
	fvalue.value='';
	svalue.value='';
	/* ховаємо кнопку "ЗРОБИТИ ХІД" */
	dbutt.style.display='none';
	tablo.style.display='block';
	/* !  */
	}}}}}}}
cont.value=id;
findex.value=f;
sindex.value=s;
//кінець функції
}}

function setVArrow(chk,f,s){
//генеруємо ID
if(f==0&&s==1){
var id=1000*s;}else{
if(f==0&&s==10){
var id=1010;}else{
var id=f*100+s;}}
if(chk!=id){}else{
//змінні що повертатимуться
var finf,fins;
//отримуємоо значення першої і другої позиції
var fp = document.getElementById(f).value;
var sp = document.getElementById(s).value;
//перевірка, чи застосовувались функції на інших рядках
var buffer = buf.value;
if(buffer=='down' || buffer=='up' || buffer=='left'|| buffer=='right'){
var ctrl = cont.value;
if(ctrl!=id){
//очищаємо стиль і буфер
document.getElementById(ctrl).style.backgroundImage="";
buf.value='';}}
//закінчили перевірку
//якщо не можна
var fTestOne = fp*1+1;
var fTestTwo = fp*1+2;
var sTestOne = sp*1+1;
var sTestTwo = sp*1+2;
if(fp>3||sp>3||(fp==3&&sp==3)||(fp==2&&sp==2)||(fp==4&&sp==4)){
showError();}else{
//якщо можна тільки вниз
if((fp == 3 && sp == 1)||(fp == 3 && sp == 2)){
	//якщо буфер пустий
	if(buf.value==''){
	buf.value='down';
	if(play.value=='first'){document.getElementById(id).style.backgroundImage="url('fdown.png')";}
	if(play.value=='second'){document.getElementById(id).style.backgroundImage="url('sdown.png')";}
	finf = fp*1 + 1;
	fins = sp*1 + 2;
	fvalue.value = ""+finf;
	svalue.value = ""+fins;
	/* показуємо кнопку "ЗРОБИТИ ХІД" */
	tablo.style.display='none';
	dbutt.style.display='block';
	/* !  */
	}else{
	//якщо буфер наповнений
	if(buf.value=='down'){
	buf.value='';
	document.getElementById(id).style.backgroundImage="";
	finf = 0;
	fins = 0;
	fvalue.value = '';
	svalue.value = '';
	/* hide кнопку "ЗРОБИТИ ХІД" */
	dbutt.style.display='none';
	tablo.style.display='block';
	/* !  */
	}}}else{
//якщо можна тільки вгору
if((fp == 1 && sp == 3)||(fp == 2 && sp == 3)){
	//якщо буфер пустий
	if(buf.value==''){
	buf.value='up';
	if(play.value=='first'){document.getElementById(id).style.backgroundImage="url('fup.png')";}
	if(play.value=='second'){document.getElementById(id).style.backgroundImage="url('sup.png')";}
	finf = fp*1 + 2;
	fins = sp*1 + 1;
	fvalue.value = finf;
	svalue.value = fins;
	/* показуємо кнопку "ЗРОБИТИ ХІД" */
	tablo.style.display='none';
	dbutt.style.display='block';
	
	/* !  */
	}else{
	//якщо буфер наповнений
	if(buf.value=='up'){
	buf.value='';
	document.getElementById(id).style.backgroundImage="";
	finf = 0;
	fins = 0;
	fvalue.value = '';
	svalue.value = '';
	/* hide кнопку "ЗРОБИТИ ХІД" */
	dbutt.style.display='none';
	tablo.style.display='block';
	/* !  */
	}}
}else{
//якщо можна в будь яку сторону
if((fp == 1 && sp == 2)||(fp == 2 && sp == 1)||(fp == 1 && sp == 1)){
	if(buf.value==''&&sp!=2){
	buf.value='up';
	if(play.value=='first'){document.getElementById(id).style.backgroundImage="url('fup.png')";}
	if(play.value=='second'){document.getElementById(id).style.backgroundImage="url('sup.png')";}
	document.getElementById(id).style.backgroundRepeat="no-repeat";
	fvalue.value=fp*1+2;
	svalue.value=sp*1+1;
	/* показуємо кнопку "ЗРОБИТИ ХІД" */
	tablo.style.display='none';
	dbutt.style.display='block';
	/* !  */
	}else{
	if((buf.value=='up'&&fp!=2)||(buf.value==''&&fp!=2)){
	buf.value='down';
	if(play.value=='first'){document.getElementById(id).style.backgroundImage="url('fdown.png')";}
	if(play.value=='second'){document.getElementById(id).style.backgroundImage="url('sdown.png')";}
	document.getElementById(id).style.backgroundRepeat="no-repeat";
	fvalue.value=fp*1+1;
	svalue.value=sp*1+2;
	/* показуємо кнопку "ЗРОБИТИ ХІД" */
	tablo.style.display='none';
	dbutt.style.display='block';
	/* !  */
	}else{
	if(buf.value=='down'||(buf.value=='up'&&fp==2)){
	buf.value='';
	document.getElementById(id).style.background="";
	document.getElementById(id).style.backgroundImage="";
	fvalue.value='';
	svalue.value='';
	/* hide кнопку "ЗРОБИТИ ХІД" */
	dbutt.style.display='none';
	tablo.style.display='block';
	/* !  */
	}}}}}}}
cont.value=id;
findex.value=f;
sindex.value=s;
//кінець функції
}}