var Visitors = [5124500,4418880,3985150,4626000,5538580,5122225,3500120,3123850,3441110,4199990,3977650];
var OverseasVisitors = [2650000, 2200000, 1950000, 2300000, 2750000, 2550000, 1750000, 1500000, 1700000, 2050000, 1950000];
var VisitorsEdited = [];
var i, j, k;
var TotalVisitors = 0;
var x1,x2,x3;
var newSpan1,newSpan2,newSpan3,newSpan4;
var TableData = [];
var OverseasTableData = [];

function drawLine(a,b,c,d){
    var lineChart__canvas = document.getElementById("lineChart__canvas");
    var line = lineChart__canvas.getContext("2d");
    line.moveTo(a, b);
    line.lineTo(c, d);
    line.strokeStyle = "#ffffff";
    line.lineWidth = 4;
    line.stroke();

    line.beginPath();
    line.arc(a, b , 3 ,0 , Math.PI*2, true);
    line.fillStyle = "white";
    line.fill();

    line.beginPath();
    line.arc(c, d , 3 ,0 , Math.PI*2, true);
    line.fillStyle = "white";
    line.fill();
    line.closePath();

}
function drawSolidLine(a,b,c,d,e){
    var lineChart__canvas = document.getElementById("lineChart__canvas");
    var line = lineChart__canvas.getContext("2d");
    line.moveTo(a, b);
    line.lineTo(c, d);
    line.strokeStyle = "#ffffff";
    line.lineWidth = 1;
    line.stroke();
    line.font = "normal 18px 'Verdana'";
    line.fillText(e,c+2,d+6);

}

function countVisitors(){
	for (i=0; i<Visitors.length; i++){
    VisitorsEdited[i] = (145 - (OverseasVisitors[i]-1500000)/10000);
    TotalVisitors += Visitors[i];}
}

function lineChart(arr){
    var i;
    var x = -10;
    for(i=0; i<arr.length; i++){
        x = x+25;
        drawLine(x,arr[i-1],x+25,arr[i]);
    }
}

function showVisitorsNumber(){
	countVisitors();

	x1 = Math.floor(TotalVisitors/1000000);
	document.getElementById("lineChart_totalVisitors").innerHTML = x1;
    x2 = Math.floor((TotalVisitors - x1*1000000 )/1000);
    x3 = (TotalVisitors - x1*1000000 ) - x2*1000;


    newSpan1 = document.createElement('span');
	if(x2>100){ newSpan1.innerHTML = ',';}
    else{newSpan1.innerHTML = ',0';}

	lineChart_totalVisitors.appendChild(newSpan1);

	newSpan2 = document.createElement('span');
	newSpan2.innerHTML = x2;
	lineChart_totalVisitors.appendChild(newSpan2);

	newSpan3 = document.createElement('span');
    if(x3>100){ newSpan3.innerHTML = ',';}
    else{newSpan3.innerHTML = ',0';}

	lineChart_totalVisitors.appendChild(newSpan3);

	newSpan4 = document.createElement('span');
	newSpan4.innerHTML = x3;
	lineChart_totalVisitors.appendChild(newSpan4);
}	

function fillTable(){
	TableData = document.getElementsByClassName("table_data");
	for (j=0; j<Visitors.length; j++) {TableData[j].innerHTML = Visitors[j];}
}
function fillOverseasTable(){
    OverseasTableData = document.getElementsByClassName("overseasTable_data");
    for (k=0; k<OverseasVisitors.length; k++) {OverseasTableData[k].innerHTML = OverseasVisitors[k];}
}


function lineChartButtonClick(){
    var elem = document.getElementById("lineChart__totalVisitorsTable");
    elem.style.display = "block";
}
function tableButtonClick(){
    var elem2 = document.getElementById("lineChart__totalVisitorsTable");
    elem2.style.display = "none";
}
function lineChartIconClick(){
    var elem3 = document.getElementById("lineChart__overseasVisitorsTable");
    elem3.style.display = "block";
}
function overseasTableButtonClick(){
    var elem4 = document.getElementById("lineChart__overseasVisitorsTable");
    elem4.style.display = "none";
}


lineChart__button.addEventListener("click", lineChartButtonClick);
lineChart__table_button.addEventListener("click", tableButtonClick);
lineChart__icon.addEventListener("click", lineChartIconClick);
lineChart__overseasTable_button.addEventListener("click", overseasTableButtonClick);


showVisitorsNumber();
lineChart(VisitorsEdited);
drawSolidLine(170,VisitorsEdited[5]-5,190,VisitorsEdited[5]-20,"");
drawSolidLine(190,VisitorsEdited[5]-20,210,VisitorsEdited[5]-20,"-20%");
fillTable();
fillOverseasTable();

