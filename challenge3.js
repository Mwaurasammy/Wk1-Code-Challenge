const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//NHIF calculation
function calculateNHIF(grossSalary) {
  if (grossSalary <= 5999) {
    return 150;
  } else if (grossSalary <= 7999) {
    return 300;
  } else if (grossSalary <= 11999) {
    return 400;
  } else if (grossSalary <= 14999) {
    return 500;
  } else if (grossSalary <= 19999) {
    return 600;
  } else if (grossSalary <= 24999) {
    return 750;
  } else if (grossSalary <= 29999) {
    return 850;
  } else if (grossSalary <= 34999) {
    return 900;
  } else if (grossSalary <= 39999) {
    return 950;
  } else if (grossSalary <= 44999) {
    return 1000;
  } else if (grossSalary <= 49999) {
    return 1100;
  } else if (grossSalary <= 59999) {
    return 1200;
  } else if (grossSalary <= 69999) {
    return 1300;
  } else if (grossSalary <= 79999) {
    return 1400;
  } else if (grossSalary <= 89999) {
    return 1500;
  } else if (grossSalary <= 99999) {
    return 1600;
  } else {
    return 1700;
  }
}

// NSSF calculation
function calculateNSSF(grossSalary) {
  let tier1 = Math.min(grossSalary, 7000) * 0.06;
  let tier2 = 0;
  if (grossSalary > 7000) {
    tier2 = Math.min(grossSalary - 7000, 29000) * 0.06;
  }
  return tier1 + tier2;
}

//Calculate PAYEE based on the tax brackets
function calculatePAYE(grossSalary) {
  let payee = 0;

  if (grossSalary <= 24000) {
    payee = grossSalary * 0.1;
  } else if (grossSalary <= 32333) {
    payee = 24000 * 0.1 + (grossSalary - 24000) * 0.25;
  } else if (grossSalary <= 467667) {
    payee = 24000 * 0.1 + 8333 * 0.25 + (grossSalary - 32333) * 0.3;
  } else if (grossSalary <= 767667) {
    payee = 24000 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + (grossSalary - 467667) * 0.325;
  } else {
    payee = 24000 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + 300000 * 0.325 + (grossSalary - 767667) * 0.35;
  }

  // Apply personal tax relief
  const personalTaxRelief = 2400;
  payee -= personalTaxRelief;

  payee = parseFloat(payee.toFixed(4));

  return payee > 0 ? payee : 0;
}

//Calculate net salary
function netSalaryCalculator() {
  rl.question("Enter basic salary: ", (basicSalaryInput) => {
    const basicSalary = Number(basicSalaryInput);

    rl.question("Enter benefits: ", (benefitsInput) => {
      const benefits = Number(benefitsInput);

      // Calculate the gross salary by adding basic salary and benefits
      const grossSalary = basicSalary + benefits;

      // Calculate PAYE (tax)
      const payee = calculatePAYE(grossSalary);

      // Calculate NHIF deduction
      const nhifDeduction = calculateNHIF(grossSalary);

      // Calculate NSSF deduction
      const nssfDeduction = calculateNSSF(grossSalary);

      // Calculate the net salary by subtracting PAYEE, NHIF, and NSSF deductions from the gross salary
      const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

      // Display the salary breakdown to the user
      console.log(`Gross Salary: ${grossSalary}`);
      console.log(`PAYEE: ${payee}`);
      console.log(`NHIF Deductions: ${nhifDeduction}`);
      console.log(`NSSF Deductions: ${nssfDeduction}`);
      console.log(`Net Salary: ${netSalary}`);

      rl.close();
    });
  });
}

// Call the netSalaryCalculator function to execute the code
netSalaryCalculator();



