//Coding Challenge #1
console.log("____Coding Challenge #1____");
Mark=[78, 1.69]
Join=[92, 1.95]

function BMIavg([a, b]) {
    return a / (b * b);
}

BMI_Mark= BMIavg(Mark);
BMI_Join= BMIavg(Join);

console.log("BMI Mark: ", BMI_Mark.toFixed(2));
console.log("BMI Join: ", BMI_Join.toFixed(2));

markHigherBMI= BMI_Mark > BMI_Join;
console.log("Mark cao hơn Join?", markHigherBMI);

//Coding Challenge #2
console.log("____Coding Challenge #2____");
//Mark's BMI is higher than John's!

if (BMI_Mark > BMI_Join) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}
if (BMI_Mark > BMI_Join) {
    console.log("Mark's BMI "+ BMI_Mark.toFixed(1) +" is higher than John's "+BMI_Join.toFixed(1)+"!");
} else {
    console.log("John's BMI "+BMI_Join.toFixed(1)+" is higher than Mark's "+BMI_Mark.toFixed(1)+"!");
}


//coding challenge #3
console.log("____Coding Challenge #3____");

Dolphins=[96, 108, 89];
Koalas=[88, 91, 110];

function avgCores([a,b,c]) {
    return (a+b+c)/3;
}

if (avgCores(Dolphins) > avgCores(Koalas)) {
    console.log("Dolphins win!");
} else if (avgCores(Dolphins) < avgCores(Koalas)) {
    console.log("Koalas win!");
} else {
    console.log("Draw!");
}

//Bonus 1
console.log("____Bonus 1____");
Dolphins=[97, 112, 101];
Koalas=[109, 95, 123];  
if (avgCores(Dolphins) > avgCores(Koalas) && avgCores(Dolphins) >= 100) {
    console.log("Dolphins win!");
} else if (avgCores(Dolphins) < avgCores(Koalas) && avgCores(Koalas) >= 100) {
    console.log("Koalas win!");
} else if (avgCores(Dolphins) === avgCores(Koalas) && avgCores(Dolphins) >= 100 && avgCores(Koalas) >= 100) {
    console.log("Draw!");
} else {
    console.log("No team wins!");
}

//coding challenge #4
console.log("____Coding Challenge #4____");

bill1= 275;
bill2= 40;
bill3= 430;

function tip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill*0.15;
    } else {
        return bill*0.2;
    }
}

tip1= tip(bill1);
tip2= tip(bill2);
tip3= tip(bill3);

console.log("Tip 1: ", tip1);
console.log("Tip 2: ", tip2);
console.log("Tip 3: ", tip3);

console.log("The bill was "+ bill1+", the tip was "+tip1+", and the total value "+ (bill1+tip1));

//code challenge #5
console.log("____Coding Challenge #5____");

Dolphins=[44, 23, 71];
Koalas=[65, 54, 49]; 

function calcAverage([a, b, c]) {
    return (a+b+c)/3;
}

avgCoresDolphin= calcAverage(Dolphins);
avgCoresKoalas= calcAverage(Koalas);

function checkWinner(avgCoresDolphin, avgCoresKoalas) {
    if (avgCoresDolphin > avgCoresKoalas) 
        console.log(`Dolphins win ${avgCoresDolphin} vs. ${avgCoresKoalas}  `);
    else if (avgCoresDolphin < avgCoresKoalas)
        console.log(`Koalas win ${avgCoresKoalas} vs. ${avgCoresDolphin}`);
    else
        console.log("Draw!");
    
}

checkWinner(avgCoresDolphin, avgCoresKoalas);

//code challenge #6
console.log("____Coding Challenge #6____");

bills=[125, 555, 44];

function calcTip(a) {
    if (a>=50 && a<=300)
        return a*0.15;
    else 
        return a*0.2;
}

console.log("Tip:",calcTip(100));

tips=[calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log("Tips:", tips);

total=[bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];

console.log("Total:", total);

//code challenge #7
console.log("____Coding Challenge #7____");

var Mark= {
    full_name: "Mark Miller",
    mass: 78,
    height: 1.69
};

var John= {
    full_name: "John_Smith",
    mass: 92,
    height: 1.95
};

function calcBMI(mass, height) {
    return mass/(height*height);
}

bmiMark= calcBMI(Mark.mass, Mark.height);
bmiJohn= calcBMI(John.mass, John.height);

if (bmiMark > bmiJohn) {
    console.log(`${Mark.full_name}'s BMI (${bmiMark.toFixed(2)}) is higher than ${John.full_name}'s (${bmiJohn.toFixed(2)})!`);
} else if (bmiJohn> bmiMark) {
    console.log(`${Join.full_name}'s BMI ${bmiJohn.toFixed(2)} is higher than ${Mark.full_name}'s ${bmiMark.toFixed(2)}!`);
}


//code challenge #8
console.log("____Coding Challenge #8____");

bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

TipsAndTotal= [];

for (let i=0; i<bills.length; i++) {
    TipsAndTotal.push(calcTip(bills[i]), bills[i]+calcTip(bills[i]));
}

console.log(TipsAndTotal);

//bonus
console.log("BONUS___");

sum =0;

for (let i =0; i < bills.length; i++) {
    sum= sum + bills[i];
}

average = sum / bills.length;
    
