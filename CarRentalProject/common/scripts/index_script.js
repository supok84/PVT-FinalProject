/*----For Car Rental----------*/

$(document).ready(function() {
    $("#carousel-example-generic").carousel({interval: 500000000});
});

function changePriceLeft(){
    var elem1 = document.getElementsByClassName("carousel-indicators-item");
    var elem2 = document.getElementById("carRental__bottom_price");
    if(elem1[0].getAttribute('class') == 'carousel-indicators-item active'){elem2.innerHTML = elem1[2].getAttribute('data-price');}
    if(elem1[1].getAttribute('class') == 'carousel-indicators-item active'){elem2.innerHTML = elem1[0].getAttribute('data-price');}
    if(elem1[2].getAttribute('class') == 'carousel-indicators-item active'){elem2.innerHTML = elem1[1].getAttribute('data-price');}
}

function changePriceRight(){
    var elem1 = document.getElementsByClassName("carousel-indicators-item");
    var elem2 = document.getElementById("carRental__bottom_price");
    if(elem1[0].getAttribute('class') == 'carousel-indicators-item active'){elem2.innerHTML = elem1[1].getAttribute('data-price');}
    if(elem1[1].getAttribute('class') == 'carousel-indicators-item active'){elem2.innerHTML = elem1[2].getAttribute('data-price');}
    if(elem1[2].getAttribute('class') == 'carousel-indicators-item active'){elem2.innerHTML = elem1[0].getAttribute('data-price');}
}


leftControl.addEventListener("click", changePriceLeft);
rightControl.addEventListener("click", changePriceRight);



/*----For Cart Summary----------*/

function cartSummarySum() {
    var cartSummary__flightPrice = Number(document.getElementById("cartSummary__flightPrice").innerHTML);
    var cartSummary__hotelPrice = Number(document.getElementById("cartSummary__hotelPrice").innerHTML);
    document.getElementById("cartSummary_totalPrice").innerHTML = cartSummary__flightPrice + cartSummary__hotelPrice;
}

function deleteFlightClick() {
    var cartSummary__flightData = document.getElementById("cartSummary__flightData");
    var cartSummary__addFlightButton = document.getElementById("cartSummary__addFlightButton");
    var cartSummary__flightPrice = document.getElementById("cartSummary__flightPrice");
    cartSummary__flightPrice.innerHTML = '';
    cartSummary__flightData.style.visibility = "hidden";
    cartSummary__addFlightButton.style.visibility = "visible";
    cartSummarySum();
}

function deleteHotelClick() {
    var cartSummary__hotelData = document.getElementById("cartSummary__hotelData");
    var cartSummary__addHotelButton = document.getElementById("cartSummary__addHotelButton");
    var cartSummary__hotelPrice = document.getElementById("cartSummary__hotelPrice");
    cartSummary__hotelPrice.innerHTML = '';
    cartSummary__hotelData.style.visibility = "hidden";
    cartSummary__addHotelButton.style.visibility = "visible";
    cartSummarySum();
}

function flightButtonClick(){
    var cartSummary__flightData = document.getElementById("cartSummary__flightData");
    var cartSummary__addFlightButton = document.getElementById("cartSummary__addFlightButton");
    var cartSummary__flightPrice = document.getElementById("cartSummary__flightPrice");
    cartSummary__flightPrice.innerHTML = 623.65;
    cartSummary__flightData.style.visibility = "visible";
    cartSummary__addFlightButton.style.visibility = "hidden";
    cartSummarySum();
}

function hotelButtonClick(){
    var cartSummary__hotelData = document.getElementById("cartSummary__hotelData");
    var cartSummary__addHotelButton = document.getElementById("cartSummary__addHotelButton");
    var cartSummary__hotelPrice = document.getElementById("cartSummary__hotelPrice");
    cartSummary__hotelPrice.innerHTML = 750;
    cartSummary__hotelData.style.visibility = "visible";
    cartSummary__addHotelButton.style.visibility = "hidden";
    cartSummarySum();
}

cartSummary__flightData_delete.addEventListener("click", deleteFlightClick);
cartSummary__hotelData_delete.addEventListener("click", deleteHotelClick);
cartSummary__addFlightButton.addEventListener("click", flightButtonClick);
cartSummary__addHotelButton.addEventListener("click", hotelButtonClick);

/*-----For Line Chart-------------*/

var Visitors = [5324500,4418880,3985150,4626000,5538780,5122225,3500120,3123850,3441110,4199990,3977650]; /*Visitors Number per year from 2016 to 2006*/
var OverseasVisitors = [2650000, 2200000, 1950000, 2300000, 2750000, 2550000, 1750000, 1500000, 1700000, 2050000, 1950000]; /* Overseas Visitors Number per year from 2016 to 2006*/
var VisitorsEdited = [];
var i, j, k;
var TotalVisitors = 0;
var x1,x2;
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


/*-------------------For Product-------------*/
var likesFlag = 0;

function imageZoom(){
    var product__image_zoomed = document.getElementById("product__image_zoomed");
    product__image_zoomed.style.visibility = "visible";
    product__image_zoomed.style.width = "705px";
    product__image_zoomed.style.height = "545px";
}

function closeZoom(){
    var product__image_zoomed = document.getElementById("product__image_zoomed");
    product__image_zoomed.style.visibility = "hidden";
    product__image_zoomed.style.width = "330px";
    product__image_zoomed.style.height = "290px";
}

function showLikeWindow(){
    var product__description_likeInfo = document.getElementById("product__description_likeInfo");
    product__description_likeInfo.style.visibility = "visible";
}

function removeLikeWindow(){
    var product__description_likeInfoHidden = document.getElementById("product__description_likeInfo");
    product__description_likeInfoHidden.style.visibility = "hidden";
}

function addLike(){
    var product__likesNumber = Number(document.getElementById("product__likesNumber").innerHTML);
    document.getElementById("product__likesNumber").innerHTML = String(product__likesNumber + 1);
    likesFlag = likesFlag + 1;
}

function removeLike(){
    var product__likesNumber = Number(document.getElementById("product__likesNumber").innerHTML);
    document.getElementById("product__likesNumber").innerHTML = String(product__likesNumber - 1);
    likesFlag = likesFlag - 1;
}

function likeClick(){
    if(likesFlag == 0){addLike();}
    else{removeLike();}
}


product__image_icon.addEventListener('click', imageZoom);
product__zoomCloseButton.addEventListener('click', closeZoom);
product__description_icon.addEventListener('mouseover', showLikeWindow);
product__description_icon.addEventListener('mouseout', removeLikeWindow);
product__description_icon.addEventListener('click', likeClick);