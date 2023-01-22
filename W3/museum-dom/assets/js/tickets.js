const basicLeft = document.getElementById('basic_left_btn');
const basicRight = document.getElementById('basic_right_btn');
const seniorLeft = document.getElementById('senior_left_btn');
const seniorRight = document.getElementById('senior_right_btn');
const basicLeftForm = document.getElementById('basic_minus_form');
const basicRightForm = document.getElementById('basic_plus_form');
const seniorLeftForm = document.getElementById('senior_minus_form');
const seniorRightForm = document.getElementById('senior_plus_form');
let permanentExhibition = document.getElementById('permanentCheck');
let temporaryExhibition = document.getElementById('temporaryCheck');
let combinedExhibition = document.getElementById('combinedCheck');
let basicNum = document.getElementById('basicNum');
let seniorNum = document.getElementById('seniorNum');
let basicNumForm = document.getElementById('basic_number_form');
let seniorNumForm = document.getElementById('senior_number_form');
let total = document.getElementById('total');
let totalForm = document.getElementById('total_form');
let ticketType = document.getElementById('ticket_type');
let overviewSeniorNumber = document.getElementById('overview_sen_ticket_num');
let overviewBasicNumber = document.getElementById('overview_bas_ticket_num');
let ticketTypeForm = document.getElementById('ticket_type_form');
let currentTicketForm = document.getElementById('overview_ticket_type');
let time = document.getElementById('time');
let currentTime = document.getElementById('overview_time');
let date = document.getElementById('date');
let currentDate = document.getElementById('overview_date');
let current_entry_basic = document.getElementById('current_entry_basic');
let current_entry_senior =document.getElementById('current_entry_senior');
let currentBasicNum = document.getElementById('current-basic-over');
let currentSeniorNum = document.getElementById('current-senior-over');
let TotalBasicNum = document.getElementById('total-basic-over');
let TotalSeniorNum = document.getElementById('total-senior-over');


// findData();

let currentTicketNumber = () => {
    overviewBasicNumber.innerHTML = basicNum.value;
    overviewSeniorNumber.innerHTML = seniorNum.value;
}
// function findData() {
//     if (localStorage.length > 4){
//         total = localStorage.getItem('total') * 1;
//      basicNum = localStorage.getItem('basic') * 1;
//      seniorNum = localStorage.getItem('senior')* 1;
//      ticketTypeForm = localStorage.getItem('ticketType')* 1;
//     }
// }

function amountTotal() {
    if(permanentExhibition.checked) {
        currentBasicNum.innerHTML = 20;
        current_entry_basic.innerHTML = 20
        currentSeniorNum.innerHTML = 10;
        current_entry_senior.innerHTML = 10
        TotalBasicNum.innerHTML = (basicNum.value * 20) + "€";
        TotalSeniorNum.innerHTML = (seniorNum.value * 10) + "€";
        total.innerHTML = (basicNum.value * 20) + (seniorNum.value * 10);
        totalForm.innerHTML = (basicNum.value * 20) + (seniorNum.value * 10);
        ticketTypeForm.value = "Permanent exhibition";
        currentTicketForm.innerHTML = "Permanent exhibition";
        // console.log(typeof(total));
        // localStorage.setItem('total', total.textContent);
        // localStorage.setItem('basic', basicNum.value.toString());
        // localStorage.setItem('senior', seniorNum.value.toString());
        // localStorage.setItem('ticketType', ticketTypeForm.value.toString());
    } else if (temporaryExhibition.checked){
        currentBasicNum.innerHTML = 25;
        current_entry_basic.innerHTML = 25;
        currentSeniorNum.innerHTML = 12.5;
        current_entry_senior.innerHTML = 12.5;
        TotalBasicNum.innerHTML = (basicNum.value * 25) + "€";
        TotalSeniorNum.innerHTML = (seniorNum.value * 12.5) + "€";
        total.innerHTML = (basicNum.value * 25) + (seniorNum.value * 12.5);
        totalForm.innerHTML = (basicNum.value * 25) + (seniorNum.value * 12.5);
        ticketTypeForm.value = "Temporary exhibition";
        currentTicketForm.innerHTML = "Temporary exhibition";
        localStorge.setItem('total', total.toString());
        // localStorge.setItem('basic', basicNum.toString());
        // localStorge.setItem('senior', seniorNum.toString());
        // localStorage.setItem('ticketType', ticketTypeForm.value.toString());
    } else {
        currentBasicNum.innerHTML = 40;
        current_entry_basic.innerHTML = 40;
        currentSeniorNum.innerHTML = 20;
        current_entry_senior.innerHTML = 20;
        TotalBasicNum.innerHTML = (basicNum.value * 40) + "€";
        TotalSeniorNum.innerHTML = (seniorNum.value * 20) + "€";
        total.innerHTML = (basicNum.value * 40) + (seniorNum.value * 20);
        totalForm.innerHTML = (basicNum.value * 40) + (seniorNum.value * 20);
        ticketTypeForm.value = "Combined Admission";
        currentTicketForm.innerHTML = "Combined Admission";
        localStorage.setItem('total', total.toString());
        // localStorage.setItem('basic', basicNum.toString());
        // localStorage.setItem('senior', seniorNum.toString());
        // localStorage.setItem('ticketType', ticketTypeForm.value.toString());
    }
};


ticketType.addEventListener('change', (event) => {
    amountTotal();
});


basicLeft.addEventListener('click', (event) => {
    basicNumForm.stepDown();
    amountTotal();
    currentTicketNumber();
});


basicRight.addEventListener('click', (event) => {
    basicNumForm.stepUp();
    amountTotal();
    currentTicketNumber();
});


seniorLeft.addEventListener('click', (event) => {
    seniorNumForm.stepDown();
    amountTotal();
    currentTicketNumber();
});


seniorRight.addEventListener('click', (event) => {
    seniorNumForm.stepUp();
    amountTotal();
    currentTicketNumber();
});


basicLeftForm.addEventListener('click', (event) => {
    basicNum.stepDown();
    basicNumForm.stepDown();
    amountTotal();
    currentTicketNumber();
});


basicRightForm.addEventListener('click', (event) => {
    basicNum.stepUp();
    basicNumForm.stepUp();
    amountTotal();
    currentTicketNumber();
});


seniorLeftForm.addEventListener('click', (event) => {
    seniorNum.stepDown();
    seniorNumForm.stepDown();
    amountTotal();
    currentTicketNumber();
});


seniorRightForm.addEventListener('click', (event) => {
    seniorNum.stepUp();
    seniorNumForm.stepUp();
    amountTotal();
    currentTicketNumber();
});


function unload(){
    if (performance.navigation.type == 1) {
    console.log( "Страница перезагружена" );
    } else {
    console.log( "Страница не перезагружена");
    }
}
ticketTypeForm.addEventListener('change', function (e) {
    if (e.target.value == "Permanent exhibition") {
        permanentExhibition.checked = true;
        amountTotal();
    } else if(e.target.value == "Temporary exhibition"){
        temporaryExhibition.checked = true;
        amountTotal();
    } else {
        combinedExhibition.checked = true;
        amountTotal();
    }
});

date.addEventListener('change', function (e) {
    const options = {weekday: 'long', day: 'numeric', month: 'long'};
    let now = new Date();
    let input = this.value;
    let current = new Date(input);
    if (current > now){
    currentDate.innerHTML = current.toLocaleDateString('eng', options);
    } else {
    return false;
    }
})

time.addEventListener('change', function (e){
    let timeValue = e.target.value;
    if( timeValue > '09:00' && timeValue < '18:00'){
    currentTime.textContent = timeValue ;
    } else {
    currentTime.textContent = 'Invalid time';
    }
}) 

amountTotal();

