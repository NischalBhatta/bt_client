const aggregatedResult = (transaction) => {
  const result = { income: {}, expenses: {} };

  transaction.forEach((transaction) => {
    const date = transaction.tdate.split("T")[0];
    if (transaction.type === "income") {
      result.income[date] = (result.income[date] || 0) + transaction.amount;
    } else if (transaction.type === "expenses") {
      result.expenses[date] = (result.expenses[date] || 0) + transaction.amount;
    }
  });

  return result;
};

//Data for the chart
const prepareChartData = (aggregatedResult) => {
  const labels = Objects.key(aggregatedResult.income)
    .concat(Object.key(aggregatedResult.expenses))
    .filter((value, index, self) => self.indexOf(value) === index);

  const incomeData = labels.map();
};

//
