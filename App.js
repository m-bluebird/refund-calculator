import React, { useState } from "react";

export default function Calculator() {
  const [daysPaidFor, setDaysPaidFor] = useState(0);
  const [totalAmountPaid, setTotalAmountPaid] = useState(0);
  const [monthsReceived, setMonthsReceived] = useState(0);

  const monthsPaidFor = daysPaidFor / 30;
  const monthsToRefund = monthsPaidFor - monthsReceived;
  const amountToRefund = (totalAmountPaid / monthsPaidFor) * monthsToRefund;

  return (
    <div className="flex flex-col items-center p-4 max-w-sm mx-auto border rounded-xl shadow-md bg-white">
      <label className="w-full">Days Paid For:</label>
      <input
        type="number"
        value={daysPaidFor}
        onChange={(e) => setDaysPaidFor(Number(e.target.value))}
        className="w-full p-2 mb-4 border rounded-md text-xl"
      />

      <label className="w-full">Total Amount Paid:</label>
      <input
        type="number"
        value={totalAmountPaid}
        onChange={(e) => setTotalAmountPaid(Number(e.target.value))}
        className="w-full p-2 mb-4 border rounded-md text-xl"
      />

      <label className="w-full">Months Received:</label>
      <input
        type="number"
        value={monthsReceived}
        onChange={(e) => setMonthsReceived(Number(e.target.value))}
        className="w-full p-2 mb-4 border rounded-md text-xl"
      />

      <div className="w-full p-2 mb-4 border rounded-md text-xl bg-gray-100">
        <strong>Months Paid For:</strong> {monthsPaidFor.toFixed(2)}
      </div>
      <div className="w-full p-2 mb-4 border rounded-md text-xl bg-gray-100">
        <strong>Months to Refund:</strong> {monthsToRefund.toFixed(2)}
      </div>
      <div className="w-full p-2 mb-4 border rounded-md text-xl bg-gray-100">
        <strong>Amount to Refund:</strong> ${amountToRefund.toFixed(2)}
      </div>
    </div>
  );
}
