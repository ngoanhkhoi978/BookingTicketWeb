//Show-Hidden nav-bottom
var menuMobile = document.querySelector('#btn-menu-mobile')
menuMobile.addEventListener('click',function(){
    let navBottomMobile = document.querySelector('._navbar-bottom-mobile')
    navBottomMobile.classList.add('d-none')
})

var closeMenuMobile = document.querySelector('._btn-close-menu-mobile')
closeMenuMobile.addEventListener('click',function(){
    let navBottomMobile = document.querySelector('._navbar-bottom-mobile')
    navBottomMobile.classList.remove('d-none')
})





// Set value for date option 
var optChooseDate = document.querySelectorAll('._option._opt-choose-date');
var date = new Date();
date.setDate(date.getDate()-1)
var days = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
for (var i = 0; i < optChooseDate.length; i++) {
  date.setDate(date.getDate() + 1);
  var dateString = date.getDate().toString().padStart(2, '0') + '/' + (date.getMonth()+1).toString().padStart(2, '0') + '/' +  date.getFullYear();
  var dayName = days[date.getDay()];
  optChooseDate[i].value = dateString;
  optChooseDate[i].text = dayName + ', ' + dateString;
}

// JS - book ticket quick 
var selectQuicks = document.querySelectorAll('._select-quick')
for (let i = 0; i < selectQuicks.length; i++) {
    selectQuicks[i].addEventListener('change',function() {
        selectQuicks[i].classList.add('isActive')
        try {
            selectQuicks[i+1].classList.remove('_disabled')
        } catch(error) {}
    })
}







