document.addEventListener("DOMContentLoaded", () => {
    
    // 1 & 2. Поточна дата та назва дня
    document.getElementById('btn1').addEventListener('click', () => {
        let now = new Date();
        const info = getWeekDayInfo(now);
        const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
        
        let s = `Дата: ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} року<br>`;
        s += `День тижня: ${info.dayName} (номер: ${info.dayNumber})<br>`;
        s += `Час: ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        
        document.getElementById('res1').innerHTML = s;
    });

    // 3. Дата N днів назад
    document.getElementById('btn3').addEventListener('click', () => {
        let n = document.getElementById('daysAgoInput').value;
        if(n === "") return;
        let resultDate = getNDaysAgo(parseInt(n));
        document.getElementById('res3').innerText = "Результат: " + formatShortDate(resultDate);
    });

    // 4. Останній день місяця
    document.getElementById('btn4').addEventListener('click', () => {
        let y = document.getElementById('yearInput').value;
        let m = document.getElementById('monthInput').value; 
        let lastDay = getLastDayOfMonth(parseInt(y), parseInt(m));
        document.getElementById('res4').innerText = "Останній день: " + lastDay;
    });

    // 5. Секунди
    document.getElementById('btn5').addEventListener('click', () => {
        let stats = getSecondsStats();
        document.getElementById('res5').innerHTML = 
            `Пройшло від початку дня: ${stats.passed} сек.<br>` +
            `До кінця дня залишилось: ${stats.left} сек.`;
    });

    // 9. Створення дати з рядка
    document.getElementById('btn9').addEventListener('click', () => {
        let input = document.getElementById('dateStringInput').value;
        let dateObj = parseDateString(input);
        if (dateObj) {
            document.getElementById('res9').innerText = "Об'єкт створено: " + dateObj.toString();
        } else {
            document.getElementById('res9').innerText = "Невірний формат!";
        }
    });

    // 10. Локалізація
    document.getElementById('btn10').addEventListener('click', () => {
        let lang = document.getElementById('langInput').value || 'uk';
        let formatted = getLocalizedDate(new Date(), lang);
        document.getElementById('res10').innerText = formatted;
    });
});

// --- Функції логіки ---

function getWeekDayInfo(date) {
    const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота'];
    let dayNum = date.getDay();
    let normalNum = dayNum === 0 ? 7 : dayNum; // Перетворюємо 0 (нд) на 7
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
    // Встановлюємо 0-й день наступного місяця, що автоматично повертає останній день поточного
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

// 7. Різниця між датами (в днях)
function getDatesDiff(d1, d2) {
    let diff = Math.abs(d1 - d2);
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

// 8. Відносний формат
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

// 9. Парсинг (підтримка основних форматів)
function parseDateString(str) {
    // Спроба розпізнати формат ДД.ММ.РРРР
    let parts = str.split('.');
    if (parts.length === 3) {
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }
    // Спроба стандартного JS парсингу (YYYY-MM-DD або MM/DD/YYYY)
    let d = new Date(str);
    return isNaN(d.getTime()) ? null : d;
}

// 10. Локалізація
function getLocalizedDate(date, lang) {
    const options = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric', 
        era: 'long',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    return date.toLocaleDateString(lang, options);
}
