import readline from "readline";

// Car Rental Cost Table
const data = [
   { size: "S", seat_capacity: 5, cost: 5000 },
   { size: "M", seat_capacity: 10, cost: 8000 },
   { size: "L", seat_capacity: 15, cost: 12000 },
];

export function calculateRentalCost(sitNum) {
   let resCarAmm = ["", ""];
   let minCost = 0;
   for (let i = 0; i < data.length; i++) {
      let sitMultip = sitNum / data[i].seat_capacity;
      let currCost = data[i].cost * sitMultip;
      if (currCost < minCost || i == 0) {
         resCarAmm[0] = data[i].size;
         resCarAmm[1] = Math.floor(sitMultip);
         minCost = currCost;
      }
   }
   return { carSize: resCarAmm[0], carCount: resCarAmm[1], totalCost: minCost };
}

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

rl.question("Please input number (seat): ", (sitNum) => {
   const result = calculateRentalCost(Number(sitNum));
   console.log(result.carSize + " x " + result.carCount);
   console.log("Total = PHP " + result.totalCost);

   rl.close();
});
