import React from "react";
import { Pie, PieChart, Cell } from "recharts";
const Chart = ({ correctAnswers, wrongAnswers }) => {
  const data = [
    { name: "Correct Answers", value: correctAnswers, fill: "#41C300" },
    { name: "Wrong Answers", value: wrongAnswers, fill: "#B00020" },
  ];
  return (
    <PieChart width={730} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {" "}
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Chart;
