export function createData(name, principalAmount, interestPaid) {
  return { name, principalAmount, interestPaid };
}

export const processRowData = (item) => {
  const name = item["First Name"] + " " + item["Last Name"];
  const rate = 1 + parseFloat(item["Annual Interest Rate"]) / 100;
  const principalAmount = parseFloat(item["Principal Amount"]);
  const tenure = parseFloat(item["Tenures in Month"]) / 12;

  const compoundInterest = principalAmount * Math.pow(rate, tenure.toFixed(2));
  return { name, principalAmount, compoundInterest };
};

export const createRows = (data) => {
  let rows = [];

  for (let item of data) {
    const { name, principalAmount, compoundInterest } = processRowData(item);
    rows.push(
      createData(
        name,
        principalAmount,
        (compoundInterest.toFixed(2) - principalAmount).toFixed(2)
      )
    );
  }
  rows.sort((a, b) => {
    return b.interestPaid - a.interestPaid;
  });
  return rows;
};
