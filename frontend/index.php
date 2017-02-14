<!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/html">
    <head lang="en">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">

<title>

Streams - гравець проти комп'ютера

</title>

<?

if(!empty($_GET['cook'])){

$set=$_GET['cook'];

$result=setcookie("firstPlayer",$set,time()+3600*24,"/");

if(empty($result)){echo'fail';}

}

?>

<link href="style.css" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="http://www.google.com/jsapi"></script>

<script type="text/javascript" src="init.js"></script>

</head>

<body id="gamepage">
<div id="gbody">

<div id="messages">

</div>

<div id="startgame">

<div id="about">

<div style="display:none;"><input id="splayer" type="text" value="Робот" name="sName" maxlength="10"></div>

<input title="Введіть ваше ім'я" id="fplayer" type="text" onchange="fPInput();" value="" name="fName" maxlength="10">

<button type="submit" id="game" onclick="startGame();" name="getStart">Почати гру</button>

<div id="gamenot">↑ Введіть ваше ім'я ↑</div>

<center><b>Як грати?</b><br>

Необхідно створити направлені потоки на ігровому полі. Напрямок потоку визначається стрілочками, які додаються в потік. Одна з властивостей потоку - відсутність розгалужень<br>

Основна задача в грі - користуючись властивостями потоку робити все можливе на полі, щоб заважати <b>боту</b> та аби останній хід був за тобою!<br>

<br>Перемагає той, хто робить останній хід!</center>

</div>

</div>

<div id="youwin"><table><tr><td>ВИ ПЕРЕМОГЛИ!</td></tr></table></div>

<div id="work" style="display:none;">

<button id="dbutt" class="finish" onclick="doStep();">ЗРОБИТИ ХІД</button>

<div id="tablo">

<input type="button" id="finfo" onclick="" value="хід"><input type="button" id="sinfo" onclick="" value=""><br>

<input type="button" id="fPbut" onclick="" value="" name="fpname"><input type="button" id="sPbut" onclick="" value="" name="spname"><br>

</div>

<table class="field">

<tr>

<td class="hb"></td>

<td id="1000" class="hf" onclick="setHArrow(this.id,0,1);"></td><td class="hb"></td>

<td id="102" class="hf" onclick="setHArrow(this.id,1,2);"></td><td class="hb"></td>

<td id="203" class="hf" onclick="setHArrow(this.id,2,3);"></td><td class="hb"></td>

<td id="304" class="hf" onclick="setHArrow(this.id,3,4);"></td><td class="hb"></td>

<td id="405" class="hf" onclick="setHArrow(this.id,4,5);"></td><td class="hb"></td>

<td id="506" class="hf" onclick="setHArrow(this.id,5,6);"></td><td class="hb"></td>

<td id="607" class="hf" onclick="setHArrow(this.id,6,7);"></td><td class="hb"></td>

<td id="708" class="hf" onclick="setHArrow(this.id,7,8);"></td><td class="hb"></td>

<td id="809" class="hf" onclick="setHArrow(this.id,8,9);"></td><td class="hb"></td>

</tr>



<tr>

<td id="fd" class="vb" onclick=""></td><td class="vf"></td>

<td id="111" class="vb" onclick="setVArrow(this.id,1,11);"></td><td class="vf"></td>

<td id="212" class="vb" onclick="setVArrow(this.id,2,12);"></td><td class="vf"></td>

<td id="313" class="vb" onclick="setVArrow(this.id,3,13);"></td><td class="vf"></td>

<td id="414" class="vb" onclick="setVArrow(this.id,4,14);"></td><td class="vf"></td>

<td id="515" class="vb" onclick="setVArrow(this.id,5,15);"></td><td class="vf"></td>

<td id="616" class="vb" onclick="setVArrow(this.id,6,16);"></td><td class="vf"></td>

<td id="717" class="vb" onclick="setVArrow(this.id,7,17);"></td><td class="vf"></td>

<td id="818" class="vb" onclick="setVArrow(this.id,8,18);"></td><td class="vf"></td>

<td id="919" class="vb" onclick="setVArrow(this.id,9,19);"></td>

</tr>



<tr>

<td class="hb"></td>

<td id="1011" class="hf" onclick="setHArrow(this.id,10,11);"></td><td class="hb"></td>

<td id="1112" class="hf" onclick="setHArrow(this.id,11,12);"></td><td class="hb"></td>

<td id="1213" class="hf" onclick="setHArrow(this.id,12,13);"></td><td class="hb"></td>

<td id="1314" class="hf" onclick="setHArrow(this.id,13,14);"></td><td class="hb"></td>

<td id="1415" class="hf" onclick="setHArrow(this.id,14,15);"></td><td class="hb"></td>

<td id="1516" class="hf" onclick="setHArrow(this.id,15,16);"></td><td class="hb"></td>

<td id="1617" class="hf" onclick="setHArrow(this.id,16,17);"></td><td class="hb"></td>

<td id="1718" class="hf" onclick="setHArrow(this.id,17,18);"></td><td class="hb"></td>

<td id="1819" class="hf" onclick="setHArrow(this.id,18,19);"></td><td class="hb"></td>

</tr>



<tr>

<td id="1020" class="vb" onclick="setVArrow(this.id,10,20);"></td><td class="vf"></td>

<td id="1121" class="vb" onclick="setVArrow(this.id,11,21);"></td><td class="vf"></td>

<td id="1222" class="vb" onclick="setVArrow(this.id,12,22);"></td><td class="vf"></td>

<td id="1323" class="vb" onclick="setVArrow(this.id,13,23);"></td><td class="vf"></td>

<td id="1424" class="vb" onclick="setVArrow(this.id,14,24);"></td><td class="vf"></td>

<td id="1525" class="vb" onclick="setVArrow(this.id,15,25);"></td><td class="vf"></td>

<td id="1626" class="vb" onclick="setVArrow(this.id,16,26);"></td><td class="vf"></td>

<td id="1727" class="vb" onclick="setVArrow(this.id,17,27);"></td><td class="vf"></td>

<td id="1828" class="vb" onclick="setVArrow(this.id,18,28);"></td><td class="vf"></td>

<td id="1929" class="vb" onclick="setVArrow(this.id,19,29);"></td>

</tr>



<tr>

<td class="hb"></td>

<td id="2021" class="hf" onclick="setHArrow(this.id,20,21);"></td><td class="hb"></td>

<td id="2122" class="hf" onclick="setHArrow(this.id,21,22);"></td><td class="hb"></td>

<td id="2223" class="hf" onclick="setHArrow(this.id,22,23);"></td><td class="hb"></td>

<td id="2324" class="hf" onclick="setHArrow(this.id,23,24);"></td><td class="hb"></td>

<td id="2425" class="hf" onclick="setHArrow(this.id,24,25);"></td><td class="hb"></td>

<td id="2526" class="hf" onclick="setHArrow(this.id,25,26);"></td><td class="hb"></td>

<td id="2627" class="hf" onclick="setHArrow(this.id,26,27);"></td><td class="hb"></td>

<td id="2728" class="hf" onclick="setHArrow(this.id,27,28);"></td><td class="hb"></td>

<td id="2829" class="hf" onclick="setHArrow(this.id,28,29);"></td><td class="hb"></td>

</tr>



<tr>

<td id="2030" class="vb" onclick="setVArrow(this.id,20,30);"></td><td class="vf"></td>

<td id="2131" class="vb" onclick="setVArrow(this.id,21,31);"></td><td class="vf"></td>

<td id="2232" class="vb" onclick="setVArrow(this.id,22,32);"></td><td class="vf"></td>

<td id="2333" class="vb" onclick="setVArrow(this.id,23,33);"></td><td class="vf"></td>

<td id="2434" class="vb" onclick="setVArrow(this.id,24,34);"></td><td class="vf"></td>

<td id="2535" class="vb" onclick="setVArrow(this.id,25,35);"></td><td class="vf"></td>

<td id="2636" class="vb" onclick="setVArrow(this.id,26,36);"></td><td class="vf"></td>

<td id="2737" class="vb" onclick="setVArrow(this.id,27,37);"></td><td class="vf"></td>

<td id="2838" class="vb" onclick="setVArrow(this.id,28,38);"></td><td class="vf"></td>

<td id="2939" class="vb" onclick="setVArrow(this.id,29,39);"></td>

</tr>



<tr>

<td class="hb"></td>

<td id="3031" class="hf" onclick="setHArrow(this.id,30,31);"></td><td class="hb"></td>

<td id="3132" class="hf" onclick="setHArrow(this.id,31,32);"></td><td class="hb"></td>

<td id="3233" class="hf" onclick="setHArrow(this.id,32,33);"></td><td class="hb"></td>

<td id="3334" class="hf" onclick="setHArrow(this.id,33,34);"></td><td class="hb"></td>

<td id="3435" class="hf" onclick="setHArrow(this.id,34,35);"></td><td class="hb"></td>

<td id="3536" class="hf" onclick="setHArrow(this.id,35,36);"></td><td class="hb"></td>

<td id="3637" class="hf" onclick="setHArrow(this.id,36,37);"></td><td class="hb"></td>

<td id="3738" class="hf" onclick="setHArrow(this.id,37,38);"></td><td class="hb"></td>

<td id="3839" class="hf" onclick="setHArrow(this.id,38,39);"></td><td class="hb"></td>

</tr>



<tr>



<td id="3040" class="vb" onclick="setVArrow(this.id,30,40);"></td><td class="vf"></td>

<td id="3141" class="vb" onclick="setVArrow(this.id,31,41);"></td><td class="vf"></td>

<td id="3242" class="vb" onclick="setVArrow(this.id,32,42);"></td><td class="vf"></td>

<td id="3343" class="vb" onclick="setVArrow(this.id,33,43);"></td><td class="vf"></td>

<td id="3444" class="vb" onclick="setVArrow(this.id,34,44);"></td><td class="vf"></td>

<td id="3545" class="vb" onclick="setVArrow(this.id,35,45);"></td><td class="vf"></td>

<td id="3646" class="vb" onclick="setVArrow(this.id,36,46);"></td><td class="vf"></td>

<td id="3747" class="vb" onclick="setVArrow(this.id,37,47);"></td><td class="vf"></td>

<td id="3848" class="vb" onclick="setVArrow(this.id,38,48);"></td><td class="vf"></td>

<td id="3949" class="vb" onclick="setVArrow(this.id,39,49);"></td>

</tr>



<td class="hb"></td>

<td id="4041" class="hf" onclick="setHArrow(this.id,40,41);"></td><td class="hb"></td>

<td id="4142" class="hf" onclick="setHArrow(this.id,41,42);"></td><td class="hb"></td>

<td id="4243" class="hf" onclick="setHArrow(this.id,42,43);"></td><td class="hb"></td>

<td id="4344" class="hf" onclick="setHArrow(this.id,43,44);"></td><td class="hb"></td>

<td id="4445" class="hf" onclick="setHArrow(this.id,44,45);"></td><td class="hb"></td>

<td id="4546" class="hf" onclick="setHArrow(this.id,45,46);"></td><td class="hb"></td>

<td id="4647" class="hf" onclick="setHArrow(this.id,46,47);"></td><td class="hb"></td>

<td id="4748" class="hf" onclick="setHArrow(this.id,47,48);"></td><td class="hb"></td>

<td id="4849" class="hf" onclick="setHArrow(this.id,48,49);"></td><td class="hb"></td>

</tr>



<tr>

<td id="4050" class="vb" onclick="setVArrow(this.id,40,50);"></td><td class="vf"></td>

<td id="4151" class="vb" onclick="setVArrow(this.id,41,51);"></td><td class="vf"></td>

<td id="4252" class="vb" onclick="setVArrow(this.id,42,52);"></td><td class="vf"></td>

<td id="4353" class="vb" onclick="setVArrow(this.id,43,53);"></td><td class="vf"></td>

<td id="4454" class="vb" onclick="setVArrow(this.id,44,54);"></td><td class="vf"></td>

<td id="4555" class="vb" onclick="setVArrow(this.id,45,55);"></td><td class="vf"></td>

<td id="4656" class="vb" onclick="setVArrow(this.id,46,56);"></td><td class="vf"></td>

<td id="4757" class="vb" onclick="setVArrow(this.id,47,57);"></td><td class="vf"></td>

<td id="4858" class="vb" onclick="setVArrow(this.id,48,58);"></td><td class="vf"></td>

<td id="4959" class="vb" onclick="setVArrow(this.id,49,59);"></td>

</tr>



<tr>

<td class="hb"></td>

<td id="5051" class="hf" onclick="setHArrow(this.id,50,51);"></td><td class="hb"></td>

<td id="5152" class="hf" onclick="setHArrow(this.id,51,52);"></td><td class="hb"></td>

<td id="5253" class="hf" onclick="setHArrow(this.id,52,53);"></td><td class="hb"></td>

<td id="5354" class="hf" onclick="setHArrow(this.id,53,54);"></td><td class="hb"></td>

<td id="5455" class="hf" onclick="setHArrow(this.id,54,55);"></td><td class="hb"></td>

<td id="5556" class="hf" onclick="setHArrow(this.id,55,56);"></td><td class="hb"></td>

<td id="5657" class="hf" onclick="setHArrow(this.id,56,57);"></td><td class="hb"></td>

<td id="5758" class="hf" onclick="setHArrow(this.id,57,58);"></td><td class="hb"></td>

<td id="5859" class="hf" onclick="setHArrow(this.id,58,59);"></td><td class="hb"></td>

</tr>



<tr>

<td id="5060" class="vb" onclick="setVArrow(this.id,50,60);"></td><td class="vf"></td>

<td id="5161" class="vb" onclick="setVArrow(this.id,51,61);"></td><td class="vf"></td>

<td id="5262" class="vb" onclick="setVArrow(this.id,52,62);"></td><td class="vf"></td>

<td id="5363" class="vb" onclick="setVArrow(this.id,53,63);"></td><td class="vf"></td>

<td id="5464" class="vb" onclick="setVArrow(this.id,54,64);"></td><td class="vf"></td>

<td id="5565" class="vb" onclick="setVArrow(this.id,55,65);"></td><td class="vf"></td>

<td id="5666" class="vb" onclick="setVArrow(this.id,56,66);"></td><td class="vf"></td>

<td id="5767" class="vb" onclick="setVArrow(this.id,57,67);"></td><td class="vf"></td>

<td id="5868" class="vb" onclick="setVArrow(this.id,58,68);"></td><td class="vf"></td>

<td id="5969" class="vb" onclick="setVArrow(this.id,59,69);"></td>

</tr>



<tr>

<td class="hb"></td>

<td id="6061" class="hf" onclick="setHArrow(this.id,60,61);"></td><td class="hb"></td>

<td id="6162" class="hf" onclick="setHArrow(this.id,61,62);"></td><td class="hb"></td>

<td id="6263" class="hf" onclick="setHArrow(this.id,62,63);"></td><td class="hb"></td>

<td id="6364" class="hf" onclick="setHArrow(this.id,63,64);"></td><td class="hb"></td>

<td id="6465" class="hf" onclick="setHArrow(this.id,64,65);"></td><td class="hb"></td>

<td id="6566" class="hf" onclick="setHArrow(this.id,65,66);"></td><td class="hb"></td>

<td id="6667" class="hf" onclick="setHArrow(this.id,66,67);"></td><td class="hb"></td>

<td id="6768" class="hf" onclick="setHArrow(this.id,67,68);"></td><td class="hb"></td>

<td id="6869" class="hf" onclick="setHArrow(this.id,68,69);"></td><td class="hb"></td>

</tr>



<tr>

<td id="6070" class="vb" onclick="setVArrow(this.id,60,70);"></td><td class="vf"></td>

<td id="6171" class="vb" onclick="setVArrow(this.id,61,71);"></td><td class="vf"></td>

<td id="6272" class="vb" onclick="setVArrow(this.id,62,72);"></td><td class="vf"></td>

<td id="6373" class="vb" onclick="setVArrow(this.id,63,73);"></td><td class="vf"></td>

<td id="6474" class="vb" onclick="setVArrow(this.id,64,74);"></td><td class="vf"></td>

<td id="6575" class="vb" onclick="setVArrow(this.id,65,75);"></td><td class="vf"></td>

<td id="6676" class="vb" onclick="setVArrow(this.id,66,76);"></td><td class="vf"></td>

<td id="6777" class="vb" onclick="setVArrow(this.id,67,77);"></td><td class="vf"></td>

<td id="6878" class="vb" onclick="setVArrow(this.id,68,78);"></td><td class="vf"></td>

<td id="6979" class="vb" onclick="setVArrow(this.id,69,79);"></td>

</tr>



<tr>

<td class="hb"></td>

<td id="7071" class="hf" onclick="setHArrow(this.id,70,71);"></td><td class="hb"></td>

<td id="7172" class="hf" onclick="setHArrow(this.id,71,72);"></td><td class="hb"></td>

<td id="7273" class="hf" onclick="setHArrow(this.id,72,73);"></td><td class="hb"></td>

<td id="7374" class="hf" onclick="setHArrow(this.id,73,74);"></td><td class="hb"></td>

<td id="7475" class="hf" onclick="setHArrow(this.id,74,75);"></td><td class="hb"></td>

<td id="7576" class="hf" onclick="setHArrow(this.id,75,76);"></td><td class="hb"></td>

<td id="7677" class="hf" onclick="setHArrow(this.id,76,77);"></td><td class="hb"></td>

<td id="7778" class="hf" onclick="setHArrow(this.id,77,78);"></td><td class="hb"></td>

<td id="7879" class="hf" onclick="setHArrow(this.id,78,79);"></td><td class="hb"></td>

</tr>



<tr>

<td id="7080" class="vb" onclick="setVArrow(this.id,70,80);"></td><td class="vf"></td>

<td id="7181" class="vb" onclick="setVArrow(this.id,71,81);"></td><td class="vf"></td>

<td id="7282" class="vb" onclick="setVArrow(this.id,72,82);"></td><td class="vf"></td>

<td id="7383" class="vb" onclick="setVArrow(this.id,73,83);"></td><td class="vf"></td>

<td id="7484" class="vb" onclick="setVArrow(this.id,74,84);"></td><td class="vf"></td>

<td id="7585" class="vb" onclick="setVArrow(this.id,75,85);"></td><td class="vf"></td>

<td id="7686" class="vb" onclick="setVArrow(this.id,76,86);"></td><td class="vf"></td>

<td id="7787" class="vb" onclick="setVArrow(this.id,77,87);"></td><td class="vf"></td>

<td id="7888" class="vb" onclick="setVArrow(this.id,78,88);"></td><td class="vf"></td>

<td id="7989" class="vb" onclick="setVArrow(this.id,79,89);"></td>

</tr>



<tr>

<td class="hb"></td>

<td id="8081" class="hf" onclick="setHArrow(this.id,80,81);"></td><td class="hb"></td>

<td id="8182" class="hf" onclick="setHArrow(this.id,81,82);"></td><td class="hb"></td>

<td id="8283" class="hf" onclick="setHArrow(this.id,82,83);"></td><td class="hb"></td>

<td id="8384" class="hf" onclick="setHArrow(this.id,83,84);"></td><td class="hb"></td>

<td id="8485" class="hf" onclick="setHArrow(this.id,84,85);"></td><td class="hb"></td>

<td id="8586" class="hf" onclick="setHArrow(this.id,85,86);"></td><td class="hb"></td>

<td id="8687" class="hf" onclick="setHArrow(this.id,86,87);"></td><td class="hb"></td>

<td id="8788" class="hf" onclick="setHArrow(this.id,87,88);"></td><td class="hb"></td>

<td id="8889" class="hf" onclick="setHArrow(this.id,88,89);"></td><td class="hb"></td>

</tr>



<tr>

<td id="8090" class="vb" onclick="setVArrow(this.id,80,90);"></td><td class="vf"></td>

<td id="8191" class="vb" onclick="setVArrow(this.id,81,91);"></td><td class="vf"></td>

<td id="8292" class="vb" onclick="setVArrow(this.id,82,92);"></td><td class="vf"></td>

<td id="8393" class="vb" onclick="setVArrow(this.id,83,93);"></td><td class="vf"></td>

<td id="8494" class="vb" onclick="setVArrow(this.id,84,94);"></td><td class="vf"></td>

<td id="8595" class="vb" onclick="setVArrow(this.id,85,95);"></td><td class="vf"></td>

<td id="8696" class="vb" onclick="setVArrow(this.id,86,96);"></td><td class="vf"></td>

<td id="8797" class="vb" onclick="setVArrow(this.id,87,97);"></td><td class="vf"></td>

<td id="8898" class="vb" onclick="setVArrow(this.id,88,98);"></td><td class="vf"></td>

<td id="su" class="vb" onclick=""></td>

</tr>



<tr>

<td class="hb"></td>

<td id="9091" class="hf" onclick="setHArrow(this.id,90,91);"></td><td class="hb"></td>

<td id="9192" class="hf" onclick="setHArrow(this.id,91,92);"></td><td class="hb"></td>

<td id="9293" class="hf" onclick="setHArrow(this.id,92,93);"></td><td class="hb"></td>

<td id="9394" class="hf" onclick="setHArrow(this.id,93,94);"></td><td class="hb"></td>

<td id="9495" class="hf" onclick="setHArrow(this.id,94,95);"></td><td class="hb"></td>

<td id="9596" class="hf" onclick="setHArrow(this.id,95,96);"></td><td class="hb"></td>

<td id="9697" class="hf" onclick="setHArrow(this.id,96,97);"></td><td class="hb"></td>

<td id="9798" class="hf" onclick="setHArrow(this.id,97,98);"></td><td class="hb"></td>

<td id="9899" class="hf" onclick="setHArrow(this.id,98,99);"></td><td class="hb"></td>

</tr>

</table>



<button id="end" class="finish" onclick="iamloser();">Здатися і завершити гру</button>

</div>

<!----><div id="base" style="display:none;">

<input type="button" id="fscore" onclick="" value="0" name="fpscore"><input type="button" id="sscore" onclick="" value="0" name="spscore">



Буфер: <input type="text" name="buffer" id="buf" value=""> (buf)<br>

Контроль: <input type="text" name="control" id="cont" value=""> (cont)<br>

Гравець: <input type="text" id="play" value="first"> (play)<br>

<input type="text" id="loser" value=""><input type="text" id="winner" value=""><br>

Індекси: <input type="text" id="findex" name="firstindex" value=""><input type="text" id="sindex" name="secondindex" value=""> (findex та sindex)<br>

Значення: <input type="text" id="fvalue" name="firstvalue" value=""><input type="text" id="svalue" name="secondvalue" value=""> (fvalue та svalue)<br>

<!----><br>

<input type="text" id="0" value="2">

<input type="text" id="1" value="1">

<input type="text" id="2" value="1">

<input type="text" id="3" value="1">

<input type="text" id="4" value="1">

<input type="text" id="5" value="1">

<input type="text" id="6" value="1">

<input type="text" id="7" value="1">

<input type="text" id="8" value="1">

<input type="text" id="9" value="1">

<!----><br>

<input type="text" id="10" value="3">

<input type="text" id="11" value="1">

<input type="text" id="12" value="1">

<input type="text" id="13" value="1">

<input type="text" id="14" value="1">

<input type="text" id="15" value="1">

<input type="text" id="16" value="1">

<input type="text" id="17" value="1">

<input type="text" id="18" value="1">

<input type="text" id="19" value="1">

<!----><br>

<input type="text" id="20" value="1">

<input type="text" id="21" value="1">

<input type="text" id="22" value="1">

<input type="text" id="23" value="1">

<input type="text" id="24" value="1">

<input type="text" id="25" value="1">

<input type="text" id="26" value="1">

<input type="text" id="27" value="1">

<input type="text" id="28" value="1">

<input type="text" id="29" value="1">

<!----><br>

<input type="text" id="30" value="1">

<input type="text" id="31" value="1">

<input type="text" id="32" value="1">

<input type="text" id="33" value="1">

<input type="text" id="34" value="1">

<input type="text" id="35" value="1">

<input type="text" id="36" value="1">

<input type="text" id="37" value="1">

<input type="text" id="38" value="1">

<input type="text" id="39" value="1">

<!----><br>

<input type="text" id="40" value="1">

<input type="text" id="41" value="1">

<input type="text" id="42" value="1">

<input type="text" id="43" value="1">

<input type="text" id="44" value="1">

<input type="text" id="45" value="1">

<input type="text" id="46" value="1">

<input type="text" id="47" value="1">

<input type="text" id="48" value="1">

<input type="text" id="49" value="1">

<!----><br>

<input type="text" id="50" value="1">

<input type="text" id="51" value="1">

<input type="text" id="52" value="1">

<input type="text" id="53" value="1">

<input type="text" id="54" value="1">

<input type="text" id="55" value="1">

<input type="text" id="56" value="1">

<input type="text" id="57" value="1">

<input type="text" id="58" value="1">

<input type="text" id="59" value="1">

<!----><br>

<input type="text" id="60" value="1">

<input type="text" id="61" value="1">

<input type="text" id="62" value="1">

<input type="text" id="63" value="1">

<input type="text" id="64" value="1">

<input type="text" id="65" value="1">

<input type="text" id="66" value="1">

<input type="text" id="67" value="1">

<input type="text" id="68" value="1">

<input type="text" id="69" value="1">

<!----><br>

<input type="text" id="70" value="1">

<input type="text" id="71" value="1">

<input type="text" id="72" value="1">

<input type="text" id="73" value="1">

<input type="text" id="74" value="1">

<input type="text" id="75" value="1">

<input type="text" id="76" value="1">

<input type="text" id="77" value="1">

<input type="text" id="78" value="1">

<input type="text" id="79" value="1">

<!----><br>

<input type="text" id="80" value="1">

<input type="text" id="81" value="1">

<input type="text" id="82" value="1">

<input type="text" id="83" value="1">

<input type="text" id="84" value="1">

<input type="text" id="85" value="1">

<input type="text" id="86" value="1">

<input type="text" id="87" value="1">

<input type="text" id="88" value="1">

<input type="text" id="89" value="3">

<!----><br>

<input type="text" id="90" value="1">

<input type="text" id="91" value="1">

<input type="text" id="92" value="1">

<input type="text" id="93" value="1">

<input type="text" id="94" value="1">

<input type="text" id="95" value="1">

<input type="text" id="96" value="1">

<input type="text" id="97" value="1">

<input type="text" id="98" value="1">

<input type="text" id="99" value="2">

</div>



<div id="si1" class="infoblock">

<center><b>Початок гри</b><button id="nextinfo" onclick="sIs();">Далі</button><br><br>

Постав першу стрілочку. Керувати напрямком стрілочки можна повторно клацнувши на неї. Стрілочки розрізняються двома кольорами. 

Щоб зробити хід натисніть <b>ПРОБІЛ</b><br>

</center>

</div>

<div id="si2" class="infoblock">

<center><b>Прибрати стрілку</b><button id="nextinfo" onclick="sIt();">Далі</button><br><br>

Прибрати стрілочку можна повторним натисканням на неї, або якщо натиснути курсором в іншому місці поля<br><br>

</center>

</div>

<div id="si3" class="infoblock">

<center><b>Робот</b><button id="nextinfo" onclick="sIf();">Далі</button><br><br>

Робот робить почергово свій хід після вашого ходу. Передбачити його хід майже неможливо<br>

</center>

</div>

<div id="si4" class="infoblock">

<center><b>Завершення гри</b><button id="nextinfo" onclick="sIfi();">Далі</button><br><br>

Завершити гру можна натиснувши кнопку "Здатися і завершити гру". Натиснувши цю кнопку результат гри буде записаний і опублікований на сайті автоматично. Кнопка з'явиться під час гри<br>

</center>

</div>

<div id="si5" class="infoblock">

<center><b>Способи ходу</b><button id="nextinfo" onclick="hI();">Закрити</button><br><br>

Якщо бажаєте ходити натискаючи кнопку "Зробити хід", натисніть <b>ENTER</b>. Повторне натискання сховає кнопку<br>

</center>

</div>

<!--<auto>-->

<div id="autoerr">

	<center><table><tr><td></td></tr><tr><td>

<center>Комп'ютер робить хід</center>

</td></tr><tr><td></td></tr></table>

</center>

</div>

<!--</auto>-->



<div id="err"><center><table><tr><td></td></tr><tr><td>

<center>ХОДУ НЕМАЄ</center>

</td></tr><tr><td></td></tr></table></center></div>



<script>

//При загрузке страницы подгружаем сообщения

load_messes();

//Ставим цикл на каждые три секунды

//setInterval(load_messes,15000);

</script>

</div>
</body>

</html>