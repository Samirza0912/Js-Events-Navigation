const companies=[
    {name:"Company One", category:"Finance", start:1981, end:2003},
    {name:"Company two", category:"Retail", start:1992, end:2008},
    {name:"Company three", category:"Auto", start:1999, end:2007},
    {name:"Company four", category:"Retail", start:1989, end:2010},
    {name:"Company five", category:"Technology", start:2009, end:2014},
    {name:"Company six", category:"Finance", start:1987, end:2010},
    {name:"Company seven", category:"Auto", start:1986, end:1996},
    {name:"Company eight", category:"Technology", start:2011, end:2016},
    {name:"Company nine", category:"Retail", start:1981, end:1989}
];

const ages=[33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// companies.forEach(function(company){
//     console.log(company.name);
// })

// let legal=[];

// for (let index = 0; index < ages.length; index++) {
//     if (ages[index]>=21) {
//         legal.push(ages[index]);
//     }
    
// }
// const legal18=ages.filter(function(age){
//     if (age>=21) {
//         return true;
//     }
// })
// const legal1=ages.filter(age=>age>=21)

// console.log(legal18);

// const retailcomp=companies.filter(function(company){
//     if (company.category==="Retail") {
//         return true;
//     }
// })

// const retailcomparr=companies.filter(company=>company==="Retail");
// console.log(retailcomparr);

// const eightiescomp=companies.filter(company => company.start>=1980 && company.start<=1989)
// const lasted=companies.filter(company => (company.end-company.start>=10));

// console.log(lasted);

// const compname=companies.map(company=>company.name);
// console.log(compname);

// const agesSq=ages.map(age=>Math.sqrt(age));
// console.log(agesSq);

// const agemap=ages
// .map(age=>Math.sqrt(age))
// .map(age=>age*3)
// console.log(agemap);

// const sorted=companies.sort(function(c1,c2){
//     if (c1.start>c2.start) {
//         return 1;
//     }
//     else{
//         return -1;
//     }
// })
// console.log(sorted);

// const sort=companies.sort((a,b)=>(a.start>b.start?1:-1))
// console.log(sort);

// let agesum=0;
// for (let index = 0; index < ages.length; index++) {
//     agesum+=ages[index];
// }
// console.log(agesum);

// const ageSum=ages.reduce((total,age)=>total+age,0)
// console.log(ageSum);

// const ageSum=companies.reduce((total,age)=>total+(age.end-age.start),0)
// console.log(ageSum);


