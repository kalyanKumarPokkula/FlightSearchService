function compareTime(timeString1 , timeString2){
    let Time1 = new Date(timeString1);
    let Time2 = new Date(timeString2);
    console.log(Time1.getTime());
    console.log(Time2.getTime());
    return Time1.getTime() > Time2.getTime();
}

function compareDate(timeString1 , timeString2){
    let Time1 = new Date(timeString1);
    let Time2 = new Date(timeString2);
    console.log(Time1.getDate());
    console.log(Time2.getDate());
    return Time1.getDate() >= Time2.getDate();
}

module.exports = {
    compareTime,
    compareDate
}