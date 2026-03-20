function getWeekDayInfo(date) {
    const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота'];
    let dayNum = date.getDay();
 
    let normalNum = dayNum === 0 ? 7 : dayNum;
    return {
        dayNumber: normalNum,
        dayName: days[dayNum]
    };
}

function getNDaysAgo(n) {
    let date = new Date();
    date.setDate(date.getDate() - n);
    return date;
}

function getLastDayOfMonth(year, month) {
    
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

function getSecondsStats() {
    let now = new Date();
    let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    
    return {
        passed: Math.floor((now - startOfDay) / 1000),
        left: Math.floor((endOfDay - now) / 1000)
    };
}

function formatShortDate(date) {
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
}

function getDatesDiff(d1, d2) {
    let diff = Math.abs(d1 - d2);
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function formatDateRelative(date) {
    let diff = new Date() - date;
    if (diff < 1000) return "тільки що";
    
    let sec = Math.floor(diff / 1000);
    if (sec < 60) return `${sec} сек. назад`;
    
    let min = Math.floor(diff / 60000);
    if (min < 60) return `${min} хв. назад`;
    
    return formatShortDate(date) + " " + 
           String(date.getHours()).padStart(2, '0') + ":" + 
           String(date.getMinutes()).padStart(2, '0');
}

function getLocalizedDate(date, lang) {
    const options = { 
        weekday: 'long', year: 'numeric', month: 'long', 
        day: 'numeric', era: 'long', hour: '2-digit', 
        minute: '2-digit', second: '2-digit' 
    };
    return date.toLocaleDateString(lang, options);
}