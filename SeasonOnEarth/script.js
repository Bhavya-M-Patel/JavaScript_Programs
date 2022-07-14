
const Seasons = {
    Spring: "Spring",
    Winter: "Winter",
    Autumn: "Automn",
    Summer: "Summer"
};

const Months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

function CheckMonth(Start,End,current){
    if(Start != 12)
        return (Start <= current && current <= End);
    return (Start == current || current <=End) 
}

function getSeason(hemispher, month) {
    switch(String(hemispher).toLowerCase()){
        case "n":if (CheckMonth(3,5,month)) return Seasons.Spring;
                 else if (CheckMonth(6,8,month)) return Seasons.Summer;
                 else if (CheckMonth(9,11,month)) return Seasons.Autumn;
                 else if (CheckMonth(12,2,month)) return Seasons.Winter;
                 break;
        case "s":if (CheckMonth(3,5,month)) return Seasons.Autumn;
                 else if (CheckMonth(6,8,month)) return Seasons.Winter;
                 else if (CheckMonth(9,11,month)) return Seasons.Spring;
                 else if (CheckMonth(12,2,month)) return Seasons.Summer;
                 break;
        default: return "Enter proper hemispher N or S"
    }   
}

function hemispherSeason(hemispher, date) {
    let month = date.split(",")[0].toLowerCase();
    let MonthIndex = Months.indexOf(month);
    if (MonthIndex != -1)
        return getSeason(hemispher,MonthIndex+1);
    return "Enter proper month";
}


console.log(hemispherSeason("N", "June, 22"));
console.log(hemispherSeason("N", "July, 1"));
console.log(hemispherSeason("S", "August, 26"));
console.log(hemispherSeason("S", "January, 18"));
