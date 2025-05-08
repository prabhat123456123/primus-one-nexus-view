
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart2,
  Database,
  Users,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";

const kpiData = [
  {
    title: "Records Ingested",
    value: "10,248",
    change: "+6.5%",
    positive: true,
    icon: Database,
  },
  {
    title: "Duplicates Detected",
    value: "2,341",
    change: "+12.3%",
    positive: false,
    icon: Users,
  },
  {
    title: "Golden Records",
    value: "3,028",
    change: "+8.1%",
    positive: true,
    icon: BarChart2,
  },
];

const activityData = [
  {
    message: "Data ingestion completed for PMJAY dataset",
    timestamp: "2 hours ago",
    status: "success",
  },
  {
    message: "Entity match processing for Ration Cards",
    timestamp: "3 hours ago",
    status: "processing",
  },
  {
    message: "Match threshold warning for Old-Age Pensions",
    timestamp: "5 hours ago",
    status: "warning",
  },
  {
    message: "Failed import for Rural Housing dataset",
    timestamp: "1 day ago",
    status: "error",
  },
];

const statusIcons = {
  success: CheckCircle,
  processing: Clock,
  warning: AlertCircle,
  error: XCircle,
};

const statusColors = {
  success: "text-green-500",
  processing: "text-blue-500",
  warning: "text-amber-500",
  error: "text-red-500",
};

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-primus-brown-dark">Dashboard</h2>
        <Button variant="outline">
          Download Report <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">{kpi.title}</CardTitle>
                <Icon className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primus-brown-dark">{kpi.value}</div>
                <p className={`${kpi.positive ? "text-green-600" : "text-red-600"} text-sm mt-1`}>
                  {kpi.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest system events and alerts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {activityData.map((activity, index) => {
              const Icon = statusIcons[activity.status as keyof typeof statusIcons];
              const colorClass = statusColors[activity.status as keyof typeof statusColors];
              
              return (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-md bg-muted/50">
                  <Icon className={`h-5 w-5 mt-0.5 ${colorClass}`} />
                  <div className="space-y-1">
                    <p className="text-sm">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                  </div>
                </div>
              );
            })}
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full">
              View All Activity
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Current Workload</CardTitle>
            <CardDescription>Processing resources and queue status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Entity Matching Queue</span>
                <span className="font-medium">86%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full">
                <div className="h-full bg-primus-brown rounded-full" style={{ width: "86%" }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Data Processing</span>
                <span className="font-medium">42%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full">
                <div className="h-full bg-primus-gold rounded-full" style={{ width: "42%" }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Storage Usage</span>
                <span className="font-medium">68%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full">
                <div className="h-full bg-primus-brown-light rounded-full" style={{ width: "68%" }}></div>
              </div>
            </div>
            
            <div className="pt-2">
              <div className="rounded-md bg-muted p-3">
                <div className="flex justify-between text-sm font-medium">
                  <span>System Status:</span>
                  <span className="text-green-600">Normal</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">All services operating efficiently</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
