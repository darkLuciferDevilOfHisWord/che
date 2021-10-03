let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let generalsol = document.getElementById('generalsol');
let continueCal = document.getElementById('continue');
let past = document.getElementById('past');
let specialsol = document.getElementById('specialsol');

let a,b;
let result1;
let result2;

value1.addEventListener("input",function(){
    a = parseInt(value1.value);
});
value2.addEventListener("input",function(){
    b = parseInt(value2.value);
});

function con(){
    value1.value = result1;
    value2.value = "";
    a = result1;
    b = "";
    continueCal.innerHTML = ``;
        specialsol.value = "";
        generalsol.value = "";
    past.innerText += "->"
}

function clear(){
    a = "";
    b = "";
    value1.value = "";
    value2.value = "";
    result1 = "";
    result2 = "";
    generalsol.value = "";
    past.innerText = "";
    continueCal.innerHTML = "";

}
function add(){
    if(a>0 && b>0){
        result1 = parseInt(a+b);
        generalsol.value = "Add is "+parseInt(a+b);
        specialsol.value = "";
        continueCal.innerHTML = `
        <button type="button" class="btn btn-success " onclick="con()">Continue Calculation</button>
        `;
        past.innerText += `${a}+${b};`;
    }
}

function sub(){
    if(a>0 && b>0){
        result1 = parseInt(a-b);
        generalsol.value = "Sub is "+parseInt(a-b);
        specialsol.value = "";
        continueCal.innerHTML = `
        <button type="button" class="btn btn-success" onclick="con()">Continue Calculation</button>
        `;
        past.innerText += `${a}-${b};`;
    }
}

function mul(){
    if(a>0 && b>0){
        result1 = parseInt(a*b);
        result2 = `${a*b}`;
        generalsol.value = "Mul is "+parseInt(a*b);
        specialsol.value = "Unit digit is "+parseInt(result2.slice(result2.length-1));
        continueCal.innerHTML = `
        <button type="button" class="btn btn-success" onclick="con()">Continue Calculation</button>
        `;
        past.innerText += `${a}*${b};`;
    }
}

function div(){
    if(a>0 && b>0){
        result1 = parseInt(a/b);
        result2 = `${a/b}`;
        generalsol.value = "Div is "+parseInt(a/b);
        specialsol.value = " remainder is "+parseInt(a%b);
        continueCal.innerHTML = `
        <button type="button" class="btn btn-success" onclick="con()">Continue Calculation</button>
        `;
        past.innerText += `${a}/${b};`;
    }
}

function pow(){
    result1 = parseInt(Math.pow(a,b));
    result2 = `${Math.pow(a,b)}`;
    generalsol.value = "Power is "+parseInt(Math.pow(a,b));
    specialsol.value = "Unit digit is "+parseInt(result2.slice(result2.length-1));
    continueCal.innerHTML = `
    <button type="button" class="btn btn-success" onclick="con()">Continue Calculation</button>
    `;
    past.innerText += `${a}^${b};`;
}


