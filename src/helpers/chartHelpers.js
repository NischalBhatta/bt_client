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
  const labels = Object.keys(aggregatedResult.income)
    .concat(Object.keys(aggregatedResult.expenses))
    .filter((value, index, self) => self.indexOf(value) === index);

  const incomeData = labels.map((label) => aggregatedResult.income[label] || 0);
  const expenseData = labels.map(
    (label) => aggregatedResult.expenses[label] || 0,
  );

  return { labels, incomeData, expenseData };
};

export const formatChartData = (transactionData) => {
  transactionData.sort((a, b) => new Date(a.tdate) - new Date(b.tdate));

  const incomeRecord = transactionData
    .filter((record) => record.type === "income")
    .map((record) => ({
      date: record.tdate.split("T")[0],
      amount: record.amount,
    }));

  const expenseRecord = transactionData
    .filter((record) => record.type === "expenses")
    .map((record) => ({
      date: record.tdate.split("T")[0],
      amount: record.amount,
    }));

  const income = {
    amount: incomeRecord.reduce((acc, i) => acc + parseInt(i.amount), 0),
    dataset: incomeRecord.map((i) => i.amount),
    label: incomeRecord.map((i) => i.date),
    color: "#47c911",
  };
  const expense = {
    amount: expenseRecord.reduce((acc, i) => acc + parseInt(i.amount), 0),
    dataset: expenseRecord.map((i) => i.amount),
    label: expenseRecord.map((i) => i.date),
    color: "#e54444",
  };

  const aggregatedData = aggregatedResult(transactionData);
  const combinedData = prepareChartData(aggregatedData);

  let tempChartData = {
    balance: {
      amount: income.amount + expense.amount,
      chartData: {
        labels: ["Income", "Expenses"],
        datasets: [
          {
            label: "Amount",
            data: [income.amount, expense.amount],
            backgroundColor: [income.color + "95", expense.color + "95"],
            borderColor: [income.color, expense.color],
            borderWidth: 1,
          },
        ],
      },
    },
    income: {
      amount: income.amount,
      lineData: {
        labels: income.label,
        datasets: [
          {
            label: "Income",
            data: income.dataset,
            borderColor: income.color,
            backgroundColor: income.color + "30",
            tension: 0.2,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            ticks: {
              maxRotation: 180,
              minRotation: 20,
            },
          },
        },

        plugins: {
          title: {
            display: true,
            text: "Income Over Time",
          },
        },
      },
    },
    expense: {
      amount: expense.amount,
      lineData: {
        labels: expense.label,
        datasets: [
          {
            label: "Expenses",
            data: expense.dataset,
            borderColor: expense.color,
            backgroundColor: expense.color + "30",
            tension: 0.2,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            ticks: {
              maxRotation: 180,
              minRotation: 20,
            },
          },
        },

        plugins: {
          title: {
            display: true,
            text: "Expense Over Time",
          },
        },
      },
    },

    combined: {
      data: {
        labels: combinedData.labels,
        datasets: [
          {
            label: "Income",
            data: combinedData.incomeData,
            borderColor: income.color,
            backgroundColor: income.color + "90",
          },
          {
            label: "Expenses",
            data: combinedData.expenseData,
            borderColor: expense.color,
            backgroundColor: expense.color + "90",
          },
        ],
      },
    },
  };

  return tempChartData;
};
