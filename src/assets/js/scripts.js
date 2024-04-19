
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


// Film showing 
// responsiveSliderShowing()
// window.addEventListener('resize',responsiveSliderShowing)


// function responsiveSliderShowing() {
//     function hiddenAllSiderShowing() {
//         let pc = document.querySelector('#slider-showing ._pc')
//         let tablet = document.querySelector('#slider-showing ._tablet')
//         let mobile = document.querySelector('#slider-showing ._mobile')

//         pc.classList.add('d-none')
//         tablet.classList.add('d-none')
//         mobile.classList.add('d-none')
//     }

//     let browserWidth = window.innerWidth;
    
//     // Mobile
//     if (browserWidth < 768) {
//         hiddenAllSiderShowing()
//         let mobile = document.querySelector('#slider-showing ._mobile')
//         mobile.classList.remove('d-none')


        
//     }

//     if (browserWidth >= 768 && browserWidth<1200) {
//         hiddenAllSiderShowing()
//     }

//     if (browserWidth >= 1200) {
//         hiddenAllSiderShowing()
//     }

// }




