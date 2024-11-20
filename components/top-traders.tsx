"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { UserPlus } from "lucide-react";

const traders = [
  {
    id: 1,
    name: "Sarah Chen",
    platform: "Binance",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profitRate: 32.5,
    followers: 1420,
    winRate: 78,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    platform: "eToro",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profitRate: 28.7,
    followers: 892,
    winRate: 72,
  },
  {
    id: 3,
    name: "Emma Thompson",
    platform: "Bybit",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    profitRate: 25.9,
    followers: 1150,
    winRate: 75,
  },
];

export default function TopTraders() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {traders.map((trader) => (
        <Card key={trader.id} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={trader.avatar} alt={trader.name} />
                <AvatarFallback>{trader.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{trader.name}</CardTitle>
                <Badge variant="secondary">{trader.platform}</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <p className="text-sm text-muted-foreground">Profit Rate</p>
                  <p className="text-2xl font-bold text-green-500">+{trader.profitRate}%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Win Rate</p>
                  <p className="text-2xl font-bold">{trader.winRate}%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{trader.followers} followers</span>
                <Button size="sm">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Copy Trader
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}