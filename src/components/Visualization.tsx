
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
  Search,
  ChevronRight,
  Info,
  MapPin,
  BarChart3,
  Eye,
  Share2,
  FileJson,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

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
                        <p className="text-xs text-muted-foreground">PRIMUS ONE ER ID: GR-73502</p>
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
        
        <TabsContent value="household" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Households</CardTitle>
                  <CardDescription>
                    Entity groups based on household relationships
                  </CardDescription>
                  <div className="mt-2 relative">
                    <Search className="h-4 w-4 absolute left-2 top-2.5 text-muted-foreground" />
                    <Input placeholder="Search households..." className="pl-8" />
                  </div>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-1 max-h-[400px] overflow-y-auto">
                    {[
                      { id: "HH-1456", name: "Singh Household", count: 4, active: true },
                      { id: "HH-1457", name: "Sharma Household", count: 3 },
                      { id: "HH-1458", name: "Ahmed Household", count: 5 },
                      { id: "HH-1459", name: "Patel Household", count: 2 },
                      { id: "HH-1460", name: "Kumar Household", count: 3 },
                    ].map((household, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between px-4 py-3 hover:bg-muted/50 cursor-pointer ${
                          household.active ? "bg-muted/50" : ""
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-sm">
                            <Home className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{household.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {household.id} • {household.count} members
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Singh Household</CardTitle>
                      <CardDescription>
                        Household ID: HH-1456 • Address: 123 Main Road, Sector 7, New Delhi
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Export
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-muted/30 p-5 rounded-md">
                    <div className="flex flex-col items-center">
                      {/* Family Tree Visualization */}
                      <div className="w-full flex justify-center">
                        <div className="flex flex-col items-center">
                          {/* Parents Row */}
                          <div className="flex space-x-6">
                            <div className="flex flex-col items-center">
                              <div className="h-16 w-16 rounded-full bg-primus-brown flex items-center justify-center text-white font-bold text-lg">
                                RKS
                              </div>
                              <div className="text-center mt-1">
                                <p className="text-sm font-medium">Rajesh Kumar Singh</p>
                                <p className="text-xs text-muted-foreground">45 years</p>
                              </div>
                              <Badge className="mt-1 bg-primus-brown hover:bg-primus-brown-dark">Head</Badge>
                            </div>

                            <div className="flex flex-col items-center">
                              <div className="h-16 w-16 rounded-full bg-primus-gold-light flex items-center justify-center text-primus-brown-dark font-bold text-lg">
                                PS
                              </div>
                              <div className="text-center mt-1">
                                <p className="text-sm font-medium">Priya Singh</p>
                                <p className="text-xs text-muted-foreground">42 years</p>
                              </div>
                              <Badge variant="outline" className="mt-1">Spouse</Badge>
                            </div>
                          </div>

                          {/* Connecting Line */}
                          <div className="h-6 border-l border-gray-300"></div>

                          {/* Children Row */}
                          <div className="flex justify-center">
                            <div className="w-32 border-t border-gray-300"></div>
                          </div>
                          <div className="flex space-x-6">
                            <div className="flex flex-col items-center">
                              <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-base">
                                AS
                              </div>
                              <div className="text-center mt-1">
                                <p className="text-sm font-medium">Akash Singh</p>
                                <p className="text-xs text-muted-foreground">18 years</p>
                              </div>
                              <Badge variant="outline" className="mt-1 bg-blue-50 text-blue-700 hover:bg-blue-50">Child</Badge>
                            </div>

                            <div className="flex flex-col items-center">
                              <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-base">
                                RS
                              </div>
                              <div className="text-center mt-1">
                                <p className="text-sm font-medium">Riya Singh</p>
                                <p className="text-xs text-muted-foreground">15 years</p>
                              </div>
                              <Badge variant="outline" className="mt-1 bg-green-50 text-green-700 hover:bg-green-50">Child</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Household Information</h3>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="bg-muted/30">
                        <CardHeader className="py-3">
                          <CardTitle className="text-sm font-medium flex items-center">
                            <Home className="h-4 w-4 mr-2" />
                            Housing Details
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="py-0">
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Type:</span>
                              <span>Permanent</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Ownership:</span>
                              <span>Self-owned</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Rooms:</span>
                              <span>3</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Electricity:</span>
                              <span>Yes</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Drinking Water:</span>
                              <span>Tap</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-muted/30">
                        <CardHeader className="py-3">
                          <CardTitle className="text-sm font-medium flex items-center">
                            <FileJson className="h-4 w-4 mr-2" />
                            Data Sources
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="py-0">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                              <span className="text-sm">PMJAY Database</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-green-500"></div>
                              <span className="text-sm">Ration Card System</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                              <span className="text-sm">Pension Database</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                              <span className="text-sm">Housing Registry</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-muted/30">
                        <CardHeader className="py-3">
                          <CardTitle className="text-sm font-medium flex items-center">
                            <BarChart3 className="h-4 w-4 mr-2" />
                            Scheme Participation
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="py-0">
                          <div className="space-y-2">
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Health Insurance</span>
                                <span className="font-medium">2/4</span>
                              </div>
                              <Progress value={50} className="h-1.5" />
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Food Security</span>
                                <span className="font-medium">4/4</span>
                              </div>
                              <Progress value={100} className="h-1.5" />
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Pension</span>
                                <span className="font-medium">0/4</span>
                              </div>
                              <Progress value={0} className="h-1.5" />
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Education</span>
                                <span className="font-medium">2/4</span>
                              </div>
                              <Progress value={50} className="h-1.5" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Household Members</h3>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="py-2 px-3 text-left font-medium">Name</th>
                            <th className="py-2 px-3 text-left font-medium">Relationship</th>
                            <th className="py-2 px-3 text-left font-medium">Age</th>
                            <th className="py-2 px-3 text-left font-medium">Gender</th>
                            <th className="py-2 px-3 text-left font-medium">Occupation</th>
                            <th className="py-2 px-3 text-left font-medium">Records</th>
                            <th className="py-2 px-3 text-right font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 px-3">
                              <div className="flex items-center">
                                <div className="h-8 w-8 rounded-full bg-primus-brown mr-2 flex items-center justify-center text-white font-medium">
                                  RKS
                                </div>
                                <span>Rajesh Kumar Singh</span>
                              </div>
                            </td>
                            <td className="py-2 px-3">Head</td>
                            <td className="py-2 px-3">45</td>
                            <td className="py-2 px-3">Male</td>
                            <td className="py-2 px-3">Government Service</td>
                            <td className="py-2 px-3">
                              <Badge>3 sources</Badge>
                            </td>
                            <td className="py-2 px-3 text-right">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-3">
                              <div className="flex items-center">
                                <div className="h-8 w-8 rounded-full bg-primus-gold-light mr-2 flex items-center justify-center text-primus-brown-dark font-medium">
                                  PS
                                </div>
                                <span>Priya Singh</span>
                              </div>
                            </td>
                            <td className="py-2 px-3">Spouse</td>
                            <td className="py-2 px-3">42</td>
                            <td className="py-2 px-3">Female</td>
                            <td className="py-2 px-3">Homemaker</td>
                            <td className="py-2 px-3">
                              <Badge>2 sources</Badge>
                            </td>
                            <td className="py-2 px-3 text-right">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-3">
                              <div className="flex items-center">
                                <div className="h-8 w-8 rounded-full bg-blue-100 mr-2 flex items-center justify-center text-blue-700 font-medium">
                                  AS
                                </div>
                                <span>Akash Singh</span>
                              </div>
                            </td>
                            <td className="py-2 px-3">Son</td>
                            <td className="py-2 px-3">18</td>
                            <td className="py-2 px-3">Male</td>
                            <td className="py-2 px-3">Student</td>
                            <td className="py-2 px-3">
                              <Badge>2 sources</Badge>
                            </td>
                            <td className="py-2 px-3 text-right">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3">
                              <div className="flex items-center">
                                <div className="h-8 w-8 rounded-full bg-green-100 mr-2 flex items-center justify-center text-green-700 font-medium">
                                  RS
                                </div>
                                <span>Riya Singh</span>
                              </div>
                            </td>
                            <td className="py-2 px-3">Daughter</td>
                            <td className="py-2 px-3">15</td>
                            <td className="py-2 px-3">Female</td>
                            <td className="py-2 px-3">Student</td>
                            <td className="py-2 px-3">
                              <Badge>2 sources</Badge>
                            </td>
                            <td className="py-2 px-3 text-right">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center justify-between w-full">
                    <Button variant="outline" size="sm">
                      <Info className="h-4 w-4 mr-1" />
                      Household History
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button size="sm">View Relationships</Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="geo" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>
                    View entity distribution across geographic regions
                  </CardDescription>
                </div>
                <div className="flex gap-3">
                  <Select defaultValue="district">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="View Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="state">State Level</SelectItem>
                      <SelectItem value="district">District Level</SelectItem>
                      <SelectItem value="block">Block Level</SelectItem>
                      <SelectItem value="panchayat">Panchayat Level</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="er">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Data to Show" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="er">ER Record Count</SelectItem>
                      <SelectItem value="source">Source Records</SelectItem>
                      <SelectItem value="duplicates">Duplicate Ratio</SelectItem>
                      <SelectItem value="quality">Data Quality</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] relative bg-muted/30 rounded-md overflow-hidden border">
                {/* Simulated map view */}
                <div className="absolute inset-0 p-4">
                  <div className="h-full w-full relative">
                    {/* India map outline - simplified representation */}
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                      <path
                        d="M120,40 Q160,20 200,40 Q240,60 280,50 Q320,60 350,100 Q370,150 350,200 Q320,250 330,300 Q300,350 250,340 Q200,350 150,330 Q100,300 80,250 Q60,200 80,150 Q100,100 120,40 Z"
                        fill="#e5e7eb"
                        stroke="#d1d5db"
                        strokeWidth="2"
                      />
                      
                      {/* State borders - simplified */}
                      <path
                        d="M200,40 Q220,80 240,120 Q260,160 250,200 Q230,240 200,280 Q170,240 150,200 Q140,160 160,120 Q180,80 200,40"
                        fill="none"
                        stroke="#d1d5db"
                        strokeWidth="1"
                      />
                      <path
                        d="M240,120 Q280,130 310,150 Q330,180 330,220 Q320,260 290,280 Q250,290 250,200"
                        fill="none"
                        stroke="#d1d5db"
                        strokeWidth="1"
                      />
                      <path
                        d="M160,120 Q120,130 100,160 Q90,200 110,240 Q140,270 150,200"
                        fill="none"
                        stroke="#d1d5db"
                        strokeWidth="1"
                      />

                      {/* District heat map - data density */}
                      <circle cx="220" cy="140" r="30" fill="#ef4444" fillOpacity="0.2" />
                      <circle cx="220" cy="140" r="20" fill="#ef4444" fillOpacity="0.3" />
                      <circle cx="220" cy="140" r="10" fill="#ef4444" fillOpacity="0.4" />
                      
                      <circle cx="180" cy="220" r="25" fill="#3b82f6" fillOpacity="0.2" />
                      <circle cx="180" cy="220" r="15" fill="#3b82f6" fillOpacity="0.3" />
                      <circle cx="180" cy="220" r="5" fill="#3b82f6" fillOpacity="0.4" />
                      
                      <circle cx="280" cy="220" r="20" fill="#10b981" fillOpacity="0.2" />
                      <circle cx="280" cy="220" r="12" fill="#10b981" fillOpacity="0.3" />
                      <circle cx="280" cy="220" r="4" fill="#10b981" fillOpacity="0.4" />
                      
                      <circle cx="150" cy="150" r="23" fill="#f59e0b" fillOpacity="0.2" />
                      <circle cx="150" cy="150" r="14" fill="#f59e0b" fillOpacity="0.3" />
                      <circle cx="150" cy="150" r="5" fill="#f59e0b" fillOpacity="0.4" />

                      {/* Map pins */}
                      <g transform="translate(220,140)" className="cursor-pointer">
                        <circle r="8" fill="#ef4444" />
                        <text x="15" y="5" fontSize="12" fill="#000">Delhi (1256)</text>
                      </g>
                      
                      <g transform="translate(180,220)" className="cursor-pointer">
                        <circle r="6" fill="#3b82f6" />
                        <text x="15" y="5" fontSize="12" fill="#000">Mumbai (843)</text>
                      </g>
                      
                      <g transform="translate(280,220)" className="cursor-pointer">
                        <circle r="5" fill="#10b981" />
                        <text x="15" y="5" fontSize="12" fill="#000">Kolkata (521)</text>
                      </g>
                      
                      <g transform="translate(150,150)" className="cursor-pointer">
                        <circle r="5" fill="#f59e0b" />
                        <text x="15" y="5" fontSize="12" fill="#000">Jaipur (408)</text>
                      </g>
                    </svg>
                    
                    {/* Map controls */}
                    <div className="absolute top-4 right-4 flex flex-col bg-white/90 p-2 rounded-md shadow-sm">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                      <Separator className="my-1" />
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ZoomOut className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    {/* Legend */}
                    <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-md shadow-sm">
                      <div className="text-xs font-medium mb-2">ER Record Count</div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <span className="text-xs">1000+</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                        <span className="text-xs">500-999</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <span className="text-xs">100-499</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                        <span className="text-xs">&lt;100</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 space-y-4">
                <h3 className="text-lg font-medium">Distribution Statistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="bg-muted/30">
                    <CardContent className="p-4">
                      <div className="flex flex-col">
                        <span className="text-muted-foreground text-sm">Top Region</span>
                        <span className="text-lg font-bold">Delhi</span>
                        <div className="flex items-center mt-1">
                          <Badge className="bg-red-100 text-red-700 hover:bg-red-100">1,256 Records</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-muted/30">
                    <CardContent className="p-4">
                      <div className="flex flex-col">
                        <span className="text-muted-foreground text-sm">Highest Density</span>
                        <span className="text-lg font-bold">Central Delhi</span>
                        <div className="flex items-center mt-1">
                          <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">428 per sq km</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-muted/30">
                    <CardContent className="p-4">
                      <div className="flex flex-col">
                        <span className="text-muted-foreground text-sm">Lowest Coverage</span>
                        <span className="text-lg font-bold">Remote Districts</span>
                        <div className="flex items-center mt-1">
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Below 30%</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-muted/30">
                    <CardContent className="p-4">
                      <div className="flex flex-col">
                        <span className="text-muted-foreground text-sm">Data Quality</span>
                        <span className="text-lg font-bold">Excellent</span>
                        <div className="flex items-center mt-1">
                          <Progress value={92} className="h-1.5 flex-1 mr-2" />
                          <span className="text-xs font-semibold">92%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex justify-end">
                  <Button variant="outline" size="sm" className="gap-1">
                    <MapPin className="h-4 w-4" />
                    View Detail Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
