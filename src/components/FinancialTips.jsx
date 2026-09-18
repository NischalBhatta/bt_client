import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GiReceiveMoney } from "react-icons/gi";
const financialTips = [
  {
    id: 1,
    tip: "Start saving early and let compound growth work over time.",
    quote:
      "Someone's sitting in the shade today because someone planted a tree a long time ago.",
    expert: "Warren Buffett",
  },
  {
    id: 2,
    tip: "Focus on the value you receive rather than simply looking at the price.",
    quote: "Price is what you pay; value is what you get.",
    expert: "Warren Buffett",
  },
  {
    id: 3,
    tip: "Spend less than you earn and consistently save the difference.",
    quote:
      "Do not save what is left after spending, but spend what is left after saving.",
    expert: "Warren Buffett",
  },
  {
    id: 4,
    tip: "Avoid putting all your money into a single investment or asset.",
    quote: "Don't put all your eggs in one basket.",
    expert: "Harry Markowitz",
  },
  {
    id: 5,
    tip: "Think about investing as a long-term process rather than chasing quick profits.",
    quote:
      "The stock market is designed to transfer money from the Active to the Patient.",
    expert: "Warren Buffett",
  },
  {
    id: 6,
    tip: "Build an emergency fund before taking unnecessary financial risks.",
    quote: "The best investment you can make is in yourself.",
    expert: "Warren Buffett",
  },
  {
    id: 7,
    tip: "Pay attention to fees because small costs can significantly affect long-term returns.",
    quote: "Costs matter. A lot.",
    expert: "John C. Bogle",
  },
  {
    id: 8,
    tip: "Avoid making investment decisions based on fear, excitement, or market hype.",
    quote:
      "The investor's chief problem—and even his worst enemy—is likely to be himself.",
    expert: "Benjamin Graham",
  },
  {
    id: 9,
    tip: "Learn about money and investing before putting your money at risk.",
    quote: "An investment in knowledge pays the best interest.",
    expert: "Benjamin Franklin",
  },
  {
    id: 10,
    tip: "Make regular saving and investing a habit instead of relying on occasional large contributions.",
    quote: "Regular investments + time → wealth.",
    expert: "Investor.gov",
  },
];

export const FinancialTips = () => {
  const [showQuote, setShowQuote] = useState(financialTips[0]);

  useEffect(() => {
    setInterval(() => {
      setShowQuote(
        financialTips[Math.floor(Math.random() * financialTips.length)],
      );
    }, 3000);
  }, []);
  const { tip, quote, expert } = showQuote;
  return (
    <div
      className="d-flex flex-column justify-content-center"
      style={{
        height: "100%",
      }}
    >
      <div className="mb-5">
        <GiReceiveMoney
          className="text-success"
          style={{
            fontSize: "10rem",
          }}
        />
        <div>Watch Your Money Grow!!</div>
      </div>
      <h4>{tip}</h4>
      <div className="fw-bolder">
        "{quote}" - {expert}
      </div>
    </div>
  );
};
