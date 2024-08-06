var dateTime = function()
{
    let date = new Date();
    let day=date.getDay();
    let hrs=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    let str="";
    let m;
    
    if(hrs>12)
        {
            hrs=hrs-12;
            m="PM"
        }
    else
        {
            m="AM"
        }


    switch(day)
    {
        case 0: str="Today is: Sunday";
                break;
        case 1: str="Today is: Monday";
                break;
        case 2: str="Today is: Tuesday";
                break;
        case 3: str="Today is: Wednesday";
                break;
        case 4: str="Today is: Thursday";
                break;
        case 5: str="Today is: Friday";
                break;
        case 6: str="Today is: Saturday";
            
    }

    str=str+"\nCurrent time is "+hrs+":"+min+":"+sec+" "+m;
    console.log(str)
}

dateTime();