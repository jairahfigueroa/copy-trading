"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { month: "Jan", totalTrades: 4000, successfulTrades: 3200 },
  { month: "Feb", totalTrades: 4500, successfulTrades: 3800 },
  { month: "Mar", totalTrades: 5000, successfulTrades: 4100 },
  { month: "Apr", totalTrades: 4800, successfulTrades: 3900 },
  { month: "May", totalTrades: 5500, successfulTrades: 4600 },
  { month: "Jun", totalTrades: 6000, successfulTrades: 5100 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border rounded-lg p-3 shadow-sm">
        <p className="font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function TradingOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trading Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month"
                stroke="hsl(var(--foreground))"
                tick={{ fill: 'hsl(var(--foreground))' }}
                axisLine={{ stroke: 'hsl(var(--border))' }}
              />
              <YAxis
                stroke="hsl(var(--foreground))"
                tick={{ fill: 'hsl(var(--foreground))' }}
                axisLine={{ stroke: 'hsl(var(--border))' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="totalTrades" 
                stroke="hsl(var(--chart-1))"
                name="Total Trades"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-1))" }}
                activeDot={{ r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="successfulTrades" 
                stroke="hsl(var(--chart-2))"
                name="Successful Trades"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-2))" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}