
import React, { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Slider
} from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import {
  NetworkIcon,
  Home,
  Map,
  Users,
  Download,
  ZoomIn,
  ZoomOut,
  Filter,
} from "lucide-react";

export function Visualization() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-primus-brown-dark">Relationship Visualization</h2>
      </div>

      <Tabs defaultValue="graph" className="space-y-6">
        <TabsList>
          <TabsTrigger value="graph">
            <NetworkIcon className="h-4 w-4 mr-2" />
            Relationship Graph
          </TabsTrigger>
          <TabsTrigger value="household">
            <Home className="h-4 w-4 mr-2" />
            Household View
          </TabsTrigger>
          <TabsTrigger value="geo">
            <Map className="h-4 w-4 mr-2" />
            Geographic Distribution
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="graph" className="space-y-6">
          <div className="grid grid-cols-3 gap-6">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Entity Relationship Graph</CardTitle>
                <CardDescription>
                  Interactive visualization of relationships between entities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="force-graph-container bg-muted/30 rounded-md p-2 border border-border">
                  <div className="h-[500px] flex flex-col items-center justify-center">
                    {/* Simulated Relationship Graph */}
                    <div className="relative w-full h-full">
                      {/* Central node */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 rounded-full bg-primus-brown flex items-center justify-center text-white font-bold text-lg">
                          RKS
                        </div>
                        <div className="text-center mt-1 text-sm font-medium">Rajesh Kumar Singh</div>
                      </div>
                      
                      {/* Connected nodes */}
                      <div className="absolute top-1/4 left-1/3">
                        <div className="w-12 h-12 rounded-full bg-primus-gold flex items-center justify-center text-primus-brown-dark font-bold">
                          PS
                        </div>
                        <div className="text-center mt-1 text-xs">Priya Singh</div>
                      </div>
                      
                      <div className="absolute top-1/3 right-1/4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                          AS
                        </div>
                        <div className="text-center mt-1 text-xs">Akash Singh</div>
                      </div>
                      
                      <div className="absolute bottom-1/4 left-1/4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
                          RS
                        </div>
                        <div className="text-center mt-1 text-xs">Riya Singh</div>
                      </div>
                      
                      <div className="absolute bottom-1/3 right-1/3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold">
                          JS
                        </div>
                        <div className="text-center mt-1 text-xs">Jai Singh</div>
                      </div>
                      
                      {/* Connection lines */}
                      <svg className="absolute top-0 left-0 w-full h-full z-[-1]">
                        <line x1="50%" y1="50%" x2="33%" y2="25%" className="stroke-primus-gold-dark stroke-2 opacity-60" />
                        <line x1="50%" y1="50%" x2="75%" y2="33%" className="stroke-blue-400 stroke-2 opacity-60" />
                        <line x1="50%" y1="50%" x2="25%" y2="75%" className="stroke-green-400 stroke-2 opacity-60" />
                        <line x1="50%" y1="50%" x2="66%" y2="66%" className="stroke-purple-400 stroke-2 opacity-60" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                    <Slider
                      defaultValue={[75]}
                      max={100}
                      step={1}
                      className="w-32"
                    />
                  </div>
                  <div>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      Export Graph
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Graph Controls</CardTitle>
                <CardDescription>
                  Configure visualization settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium">Relationship Depth</label>
                  <div className="flex items-center gap-2">
                    <Slider
                      defaultValue={[2]}
                      max={4}
                      step={1}
                      className="flex-1"
                    />
                    <span className="font-medium">2</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Number of connection levels to display
                  </p>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-medium">Node Size By</label>
                  <Select defaultValue="connections">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="connections">Connection Count</SelectItem>
                      <SelectItem value="records">Record Count</SelectItem>
                      <SelectItem value="importance">Entity Importance</SelectItem>
                      <SelectItem value="uniform">Uniform Size</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-medium">Group By</label>
                  <Select defaultValue="source">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="source">Data Source</SelectItem>
                      <SelectItem value="household">Household</SelectItem>
                      <SelectItem value="location">Location</SelectItem>
                      <SelectItem value="none">No Grouping</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <label className="text-sm font-medium">Focus Entity</label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an entity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gid-73502">Rajesh Kumar Singh (GR-73502)</SelectItem>
                      <SelectItem value="gid-73503">Priya Sharma (GR-73503)</SelectItem>
                      <SelectItem value="gid-73504">Mohammed Ahmed (GR-73504)</SelectItem>
                      <SelectItem value="gid-73505">Anjali Patel (GR-73505)</SelectItem>
                      <SelectItem value="gid-73506">Vikram Singh (GR-73506)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button className="w-full">
                  <Filter className="h-4 w-4 mr-1" />
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Entity Details</CardTitle>
              <CardDescription>
                Information about the selected entity and its connections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Selected Entity</h3>
                  <div className="bg-muted/50 p-3 rounded-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-full bg-primus-brown flex items-center justify-center text-white font-bold">
                        RKS
                      </div>
                      <div>
                        <p className="font-medium">Rajesh Kumar Singh</p>
                        <p className="text-xs text-muted-foreground">Golden ID: GR-73502</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm mt-3">
                      <div>
                        <p className="text-xs text-muted-foreground">Date of Birth</p>
                        <p>15 Jun 1982</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Gender</p>
                        <p>Male</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-xs text-muted-foreground">Address</p>
                        <p>123 Main Road, Sector 7, New Delhi</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Connections (4)</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-muted/50 p-2 rounded">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-primus-gold flex items-center justify-center text-primus-brown-dark text-xs font-bold">
                          PS
                        </div>
                        <span className="text-sm">Priya Singh</span>
                      </div>
                      <span className="text-xs bg-primus-gold/20 text-primus-brown px-2 py-0.5 rounded">
                        Spouse
                      </span>
                    </div>
                    <div className="flex items-center justify-between bg-muted/50 p-2 rounded">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
                          AS
                        </div>
                        <span className="text-sm">Akash Singh</span>
                      </div>
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                        Child
                      </span>
                    </div>
                    <div className="flex items-center justify-between bg-muted/50 p-2 rounded">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs font-bold">
                          RS
                        </div>
                        <span className="text-sm">Riya Singh</span>
                      </div>
                      <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded">
                        Child
                      </span>
                    </div>
                    <div className="flex items-center justify-between bg-muted/50 p-2 rounded">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 text-xs font-bold">
                          JS
                        </div>
                        <span className="text-sm">Jai Singh</span>
                      </div>
                      <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded">
                        Sibling
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Data Sources (3)</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-muted/50 p-2 rounded">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        <span className="text-sm">PMJAY</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        PMJAY-2589
                      </span>
                    </div>
                    <div className="flex items-center justify-between bg-muted/50 p-2 rounded">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-sm">Ration Card</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        RC-45238
                      </span>
                    </div>
                    <div className="flex items-center justify-between bg-muted/50 p-2 rounded">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                        <span className="text-sm">Pension</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        OAP-10538
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <Button variant="outline" size="sm" className="w-full">
                      <Users className="h-3.5 w-3.5 mr-1" />
                      View Household
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="household">
          <Card>
            <CardHeader>
              <CardTitle>Household View</CardTitle>
              <CardDescription>
                Household relationship visualization
              </CardDescription>
            </CardHeader>
            <CardContent className="py-6">
              <div className="flex items-center justify-center h-96 bg-muted rounded-md">
                <p className="text-muted-foreground">Household view coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="geo">
          <Card>
            <CardHeader>
              <CardTitle>Geographic Distribution</CardTitle>
              <CardDescription>
                Geographic visualization of entities
              </CardDescription>
            </CardHeader>
            <CardContent className="py-6">
              <div className="flex items-center justify-center h-96 bg-muted rounded-md">
                <p className="text-muted-foreground">Geographic view coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
