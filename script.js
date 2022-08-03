
const liters = document.getElementById('liters');
const remained = document.getElementById('remained');
const percentage = document.getElementById('percentage');
const smallCups = document.querySelectorAll('.cup-small');

updateBigCup();

smallCups.forEach((cup, index) => {
    // console.log(index);
    cup.addEventListener('click', () => highlightCups(index))
})

function highlightCups(index) {
    if (index===7 && smallCups[index].classList.contains("full")) index--;
    else if(smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')) {
        index--
    }

    smallCups.forEach((cup, index2) => {
        if(index2 <= index) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    // console.log(fullCups);
    const totalCups = smallCups.length;
    // console.log(totalCups);
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'; // to hide the word Remaining
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible' // if not full set remained to visible again
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}