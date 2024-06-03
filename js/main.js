let monthsWrapper = document.querySelector('.months-wrapper');
let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');
let yearTxt = document.querySelector('.current-year')

let date = new Date();
let currentYear = date.getFullYear();

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getCalendar() {
    for (let i = 0; i < months.length; i++) {
        let monthWrap = document.createElement('div');
        monthWrap.className = "month-wrapper";

        monthWrap.innerHTML = `                <div class="month-header">
        <h3 class="month">${months[i]}</h3>
    </div>

    <ul class="weeks">
    </ul>

    <ul class="days">

    </ul>`

        monthsWrapper.insertAdjacentElement('beforeend', monthWrap);
        getWeeks(monthWrap.querySelector('.weeks'))
        getDates(monthWrap.querySelector('.days'), i)
    }
}

function getWeeks(weeksWrapper){
    let liTag = "";
    for (let i = 0; i < days.length; i++) {
        liTag += `<li>${days[i]}</li>`
    }

    weeksWrapper.innerHTML = liTag
}

function getDates(daysWrapper, month){
    let firstDay = new Date(currentYear, month, 1);
    let lastDay = new Date(currentYear, month + 1, 0);

    let firstDayIndex = firstDay.getDay();
    let lastDayIndex = lastDay.getDay();

    let daysInMonth = lastDay.getDate();

    let liTag = "";
    for (let i = 0; i < firstDayIndex; i++) {
        liTag += `<li></li>`
    }

    for (let i = 1; i <= daysInMonth; i++) {
        liTag += `<li>${i}</li>`
    }

    for (let i = 0; i < 6 - lastDayIndex; i++) {
        liTag += `<li></li>`
    }

    daysWrapper.innerHTML = liTag

    console.log(firstDay, lastDay);
}

getCalendar()
prevBtn.addEventListener('click', () => {
    currentYear -= 1;
    updateCalendar();
});

nextBtn.addEventListener('click', () => {
    currentYear += 1;
    updateCalendar();
});

function updateCalendar() {
    monthsWrapper.innerHTML = '';
    getCalendar();
    yearTxt.innerHTML = currentYear;
}