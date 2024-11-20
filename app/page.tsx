import { TrendingUp, Users, BarChart3 } from "lucide-react";
import TopTraders from "@/components/top-traders";
import PlatformStats from "@/components/platform-stats";
import TradingOverview from "@/components/trading-overview";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl">
        <h1 className="text-4xl font-bold mb-4">Copy Trading Made Simple</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Follow top traders and replicate their success across multiple platforms
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg">
            <TrendingUp className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Track Performance</h3>
            <p className="text-sm text-muted-foreground">Real-time tracking of trader performance</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Copy Traders</h3>
            <p className="text-sm text-muted-foreground">Automatically copy successful traders</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg">
            <BarChart3 className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Analytics</h3>
            <p className="text-sm text-muted-foreground">Detailed analytics and insights</p>
          </div>
        </div>
      </section>

      {/* Top Traders Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Top Traders</h2>
        <TopTraders />
      </section>

      {/* Platform Statistics */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-6">Platform Statistics</h2>
          <PlatformStats />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Trading Overview</h2>
          <TradingOverview />
        </div>
      </section>
    </div>
  );
}