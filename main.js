var start ="<option>";
var end ="</option>";
var day_elm=document.getElementById('day');
var month_elm=document.getElementById('month');
var year_elm=document.getElementById('year');

var day2_elm=document.getElementById('day2');
var month2_elm=document.getElementById('month2');
var year2_elm=document.getElementById('year2');
var day_loop="";
var month_loop="";
var year_loop="";
var months=["January" , "February" , "March" ,"April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
for(var i=1;i<=31;i++)
{
    day_loop+=start + i + end; 
}
for(var i=1960;i<=2023;i++)
{
    year_loop+=start + i  + end; 
}
for(var i=0;i<months.length;i++)
{
    month_loop+=start + months[i] + end; 
}
day_elm.innerHTML = "<select id='sele'>" + day_loop + "</select>";
month_elm.innerHTML = "<select id='sele2'>" + month_loop + "</select>";
year_elm.innerHTML = "<select  id='sele3'>" + year_loop + "</select>";
function calc_age()
{
    var dayinput=document.getElementById("sele").value;
    var monthinput=document.getElementById("sele2").value;
    var yearinput=document.getElementById("sele3").value;
    switch (monthinput){
        case "January":
            monthinput=1;
            break;
        case "February":
            monthinput=2;
            break;
        case "March":
            monthinput=3;
            break;
        case "April":
            monthinput=4;
            break;
            case "May":
            monthinput=5;
            break;
        case "June":
            monthinput=6;
            break;
        case "July":
            monthinput=7;
            break;
        case "August":
            monthinput=8;
            break;
        case "September":
            monthinput=9;
            break;
        case "October":
            monthinput=10;
            break;
        case "November":
            monthinput=11;
            break;
        case "December":
            monthinput=12;
            break;
        
    }
const now = new Date();
const day = now.getDate(); 
const month = now.getMonth()+1;
const year = now.getFullYear(); 
var res1=day-dayinput;
var res2=month-monthinput;
var res3 =year-yearinput;
if(res2<=0)
    {
        res3--;
        res2+=12;
    }
if(res1<0)
    {
        res2--;
        res1+=31;
    }


document.getElementById('res').innerHTML=("You are " + res3 + " years ," + res2 + " Months and "+res1 + " Days")
}
