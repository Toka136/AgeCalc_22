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
for(var i=1990;i<=2024;i++)
{
    year_loop+=start + i + end; 
}
for(var i=0;i<months.length;i++)
{
    month_loop+=start + months[i] + end; 
}
day_elm.innerHTML = "<select id='sele'>" + day_loop + "</select>";
month_elm.innerHTML = "<select id='sele2'>" + month_loop + "</select>";
year_elm.innerHTML = "<select  id='sele3'>" + year_loop + "</select>";

day2_elm.innerHTML = "<select  id='sele4'>" + day_loop + "</select>";
month2_elm.innerHTML = "<select id='sele5'>" + month_loop + "</select>";
year2_elm.innerHTML = "<select  id='sele6'>" + year_loop + "</select>";
function calc_age()
{
    var dayinput=document.getElementById("sele").value;
    var monthinput=document.getElementById("sele2").value;
    var yearinput=document.getElementById("sele3").value;

    var day2input=document.getElementById("sele4").value;
    var month2input=document.getElementById("sele5").value;
    var year2input=document.getElementById("sele6").value;
    dayinput=parseInt(dayinput);
    yearinput=parseInt(yearinput);
    day2input=parseInt(day2input);
    year2input=parseInt(year2input);
    //console.log(typeof(month2input)+" "+typeof( monthinput));
    var m1=0,m2=0;;
    for(var i=0; i<months.length;i++)
    {
        if(monthinput==months[i])
        {
        m1=i+1
        }
        if(month2input==months[i])
        {
        m2=i+1
        }
    }
    if(year2input<yearinput || year2input==yearinput)
        document.getElementById('res').innerHTML=("Current Date Must be Graeter than Birth Date");
    else{
    var res1=day2input-dayinput;
    var res2 =m2-m1;
    var res3=year2input-yearinput;
    if(res2<0)
    {
        res3--;
        res2=12+res2;
    }
    
    if(res1<0)
    {
        res2--;
        if(m2==1||m2==3||m2==5||m2==7||m2==8||m2==10||m2==12||m1==1||m1==3||m1==5||m1==7||m1==8||m1==10||m1==12);
        res1++;
        res1+=30;
    }
    
    document.getElementById('res').innerHTML=("You are " + res3 + " years ," + res2 + " Months and "+res1 + " Days")
    }
}