let abouttab = document.getElementById('aboutTab');
let timetovisittab = document.getElementById('timeToVisitTab');
let attractiontab = document.getElementById('attractionsTab');

let aboutbutton = document.getElementById('aboutButton');
let timebutton = document.getElementById('timeToVisitButton');
let attractionbutton = document.getElementById('attractionsButton');

timetovisittab.classList.add('d-none');
attractiontab.classList.add('d-none');

function about() {
    abouttab.classList.remove('d-none');
    timetovisittab.classList.add('d-none');
    attractiontab.classList.add('d-none');
    
    aboutbutton.classList.add('selected-button');
    timebutton.classList.remove('selected-button');
    attractionbutton.classList.remove('selected-button');
    
}

function Timetovisit() {
    abouttab.classList.add('d-none');
    timetovisittab.classList.remove('d-none');
    attractiontab.classList.add('d-none');
    aboutbutton.classList.remove('selected-button');
    timebutton.classList.add('selected-button');
    attractionbutton.classList.remove('selected-button');
    
}

function Attractions() {
    abouttab.classList.add('d-none');
    timetovisittab.classList.add('d-none');
    attractiontab.classList.remove('d-none');
    aboutbutton.classList.remove('selected-button');
    timebutton.classList.remove('selected-button');
    attractionbutton.classList.add('selected-button');
    
}