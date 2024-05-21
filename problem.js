function monthlySaving(payments, cost) {
    let total = 0;
    let vet=0;
    for (let i = 0; i < payments.length; i++) {
        const amount=payments[i];
        if (amount >3000)
            {
                vet=amount*0.2;
            }
        total += payments[i];
    }
    let savings = total - (cost+vet);
    if (savings >= 0)  
    {
        return savings;
    } 
    else
     {
        return "earn more";
    }
}
let payments=[3020,500,600,400];
let livingcost=3001;
let result = monthlySaving(payments, livingcost );
console.log(result);

