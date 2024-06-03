import { expect } from "chai";
import { calculateRentalCost } from "../app.js";

describe("Car Rental Cost Calculation", () => {
   it("should calculate the cost correctly for 20 seats", () => {
      const result = calculateRentalCost(20);
      expect(result).to.deep.equal({
         carSize: "M",
         carCount: 2,
         totalCost: 16000,
      });
   });

   it("should calculate the cost correctly for 30 seats", () => {
      const result = calculateRentalCost(30);
      expect(result).to.deep.equal({
         carSize: "M",
         carCount: 3,
         totalCost: 24000,
      });
   });
});
