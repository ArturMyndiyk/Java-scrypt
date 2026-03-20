document.addEventListener("DOMContentLoaded", () => {
   
    document.getElementById('btn1').addEventListener('click', () => {
        let now = new Date();
        const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
        const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота'];
        
        let s = `Дата: ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} року<br>`;
        s += `День тижня: ${days[now.getDay()]}<br>`;
        s += `Час: ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        
        document.getElementById('res1').innerHTML = s;
    });

    document.getElementById('btn3').addEventListener('click', () => {
        let n = document.getElementById('daysAgoInput').value;
        let resultDate = getNDaysAgo(parseInt(n));
        document.getElementById('res3').innerText = "Це було: " + formatShortDate(resultDate);
    });

    document.getElementById('btn4').addEventListener('click', () => {
        let y = document.getElementById('yearInput').value;
        let m = document.getElementById('monthInput').value; 
        let lastDay = getLastDayOfMonth(parseInt(y), parseInt(m));
        document.getElementById('res4').innerText = "Останній день: " + lastDay;
    });
});