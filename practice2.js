const click = document.querySelector('#object');
let points = 0;
let ppc = document.getElementById('ppc');
ppc = 1;


let unlockBoost1 = function (){
    if(points >= 100){
        document.getElementById('c1').style.visibility = 'hidden'
    } else {
        document.getElementById('c1').style.visibility = 'visible'
    };
};

let unlockBoost2 = function (){
    if(points >= 1000){
        document.getElementById('c2').style.visibility = 'hidden'
    } else {
        document.getElementById('c2').style.visibility = 'visible'
    };
};

let unlockBoost3 = function (){
    if(points >= 50000){
        document.getElementById('c3').style.visibility = 'hidden'
    } else {
        document.getElementById('c3').style.visibility = 'visible'
    };
};

let unlockBoost4 = function (){
    if(points >= 1000000){
        document.getElementById('c4').style.visibility = 'hidden'
    } else {
        document.getElementById('c4').style.visibility = 'visible'
    };
};

let unlockClick1 = function (){
    if(points >= 50){
        document.getElementById('up1').style.borderColor = 'green';
        document.getElementById('up1').style.backgroundColor = '#00800038';
    } else {
        document.getElementById('up1').style.borderColor = 'red';
        document.getElementById('up1').style.backgroundColor = '#ff000048';
    }
}

let unlockClick2 = function (){
    if(points >= 250){
        document.getElementById('up2').style.borderColor = 'green';
        document.getElementById('up2').style.backgroundColor = '#00800038';
    } else {
        document.getElementById('up2').style.borderColor = 'red';
        document.getElementById('up2').style.backgroundColor = '#ff000048';
    }
}

let unlockClick3 = function (){
    if(points >= 400){
        document.getElementById('up3').style.borderColor = 'green';
        document.getElementById('up3').style.backgroundColor = '#00800038';
    } else {
        document.getElementById('up3').style.borderColor = 'red';
        document.getElementById('up3').style.backgroundColor = '#ff000048';
    }
}

let unlockClick4 = function (){
    if(points >= 3000){
        document.getElementById('up4').style.borderColor = 'green';
        document.getElementById('up4').style.backgroundColor = '#00800038';
    } else {
        document.getElementById('up4').style.borderColor = 'red';
        document.getElementById('up4').style.backgroundColor = '#ff000048';
    }
}


let klick = click.addEventListener('click', () => {
    points += 1;
    document.querySelector('#kkk').innerHTML = points;
    unlockBoost1 ();
    unlockBoost2 ();
    unlockBoost3 ();
    unlockBoost4 ();
});


const boost1 = document.querySelector('#boost1');
const boost2 = document.querySelector('#boost2');
const boost3 = document.querySelector('#boost3');
const boost4 = document.querySelector('#boost4');

let bonus1 = 0;
let bonus2 = 0;
let bonus3 = 0;
let bonus4 = 0;

const cost1 = document.querySelector('#costp1');
const cost2 = document.querySelector('#costp2');
const cost3 = document.querySelector('#costp3');
const cost4 = document.querySelector('#costp4');

const up1 = document.querySelector('#up1');
const up2 = document.querySelector('#up2');
const up3 = document.querySelector('#up3');
const up4 = document.querySelector('#up4');

// click points

up1.addEventListener('click', () => {
    if(points >= 50){
        klick = click.addEventListener('click', () => {
            points += 2;
            document.querySelector('#kkk').innerHTML = points;
        });
    ppc += 2;
    points -= 50;
    document.querySelector('#ppc').innerHTML = ppc;
    document.querySelector('#kkk').innerHTML = points;
    }
});
up2.addEventListener('click', () => {
    if(points >= 250){
        klick = click.addEventListener('click', () => {
            points += 5;
            document.querySelector('#kkk').innerHTML = points;
        });
    points -= 250;
    ppc += 5;
    document.querySelector('#ppc').innerHTML = ppc;
    document.querySelector('#kkk').innerHTML = points;
    }
});
up3.addEventListener('click', () => {
    if(points >= 400){
        klick = click.addEventListener('click', () => {
            points += 20;
            document.querySelector('#kkk').innerHTML = points;
        });
    points -= 400;
    ppc += 20;
    document.querySelector('#ppc').innerHTML = ppc;
    document.querySelector('#kkk').innerHTML = points;
    }
});
up4.addEventListener('click', () => {
    if(points >= 3000){
        klick = click.addEventListener('click', () => {
            points += 300;
            document.querySelector('#kkk').innerHTML = points;
        });
    points -= 3000;
    ppc += 300;
    document.querySelector('#ppc').innerHTML = ppc;
    document.querySelector('#kkk').innerHTML = points;
    }
});



setInterval(function(){        
    unlockBoost1 ();
    unlockBoost2 ();
    unlockBoost3 ();
    unlockBoost4 ();
    unlockClick1 ();
    unlockClick2 ();
    unlockClick3 ();
    unlockClick4 ();
}, 10);

// boosts

boost1.addEventListener('click', () => {
    if(points >= 100){
        setInterval(function(){ points = points + 1; }, 1000);
        setInterval(function(){ document.querySelector('#kkk').innerHTML = points;
        }, 1000);
        bonus1 += 1;
        points -= 100;
        document.querySelector('#bonus1').innerHTML = bonus1;
        unlockBoost1 ();
        unlockBoost2 ();
        unlockBoost3 ();
        unlockBoost4 ();
    }

});


boost2.addEventListener('click', () => {
    if(points >= 1000){
        setInterval(function(){ points = points + 30; }, 1000);
        setInterval(function(){ document.querySelector('#kkk').innerHTML = points;
        }, 1000);
        bonus2 += 30;
        points -= 1000;
        document.querySelector('#bonus2').innerHTML = bonus2;
        unlockBoost1 ();
        unlockBoost2 ();
        unlockBoost3 ();
        unlockBoost4 ();
        if(points < 1000){
            document.getElementById('c2').style.visibility = 'visible'
        };
    }
});

boost3.addEventListener('click', () => {
    if(points >= 50000){
        setInterval(function(){ points = points + 3000; }, 1000);
        setInterval(function(){ document.querySelector('#kkk').innerHTML = points;
        }, 1000);
        bonus3 += 3000;
        points -= 50000;
        document.querySelector('#bonus3').innerHTML = bonus3;
        unlockBoost1 ();
        unlockBoost2 ();
        unlockBoost3 ();
        unlockBoost4 ();
        if(points < 50000){
            document.getElementById('c3').style.visibility = 'visible'
        };
    }
});

boost4.addEventListener('click', () => {
    if(points >= 1000000){
        console.log('boosted');
        setInterval(function(){ points = points + 70000; }, 1000);
        setInterval(function(){ document.querySelector('#kkk').innerHTML = points;
        }, 1000);
        bonus4 += 70000;
        points -= 1000000;
        document.querySelector('#bonus4').innerHTML = bonus4;
        unlockBoost1 ();
        unlockBoost2 ();
        unlockBoost3 ();
        unlockBoost4 ();
        if(points < 1000000){
            document.getElementById('c4').style.visibility = 'visible'
        };
    }
});

