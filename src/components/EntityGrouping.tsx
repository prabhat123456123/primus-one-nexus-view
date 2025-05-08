
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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Check,
  ChevronRight,
  Users,
  UserCheck,
  X,
  Link,
  AlertCircle,
  Edit,
} from "lucide-react";

function EntityCard({ entity, isGolden = false }) {
  return (
    <Card className={isGolden ? "border-primus-gold/50 bg-primus-gold/5" : ""}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className={isGolden ? "bg-primus-gold-light text-primus-brown-dark" : ""}>
              <AvatarFallback>{entity.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base">{entity.name}</CardTitle>
              <CardDescription className="text-xs">{entity.id}</CardDescription>
            </div>
          </div>
          {isGolden && (
            <Badge className="bg-primus-gold text-primus-brown-dark hover:bg-primus-gold/80">
              Golden Record
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="py-2 text-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Date of Birth</p>
            <p>{entity.dob}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Gender</p>
            <p>{entity.gender}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Phone</p>
            <p>{entity.phone}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Source</p>
            <Badge variant="outline" className="font-normal">
              {entity.source}
            </Badge>
          </div>
        </div>
        
        <div className="mt-3 space-y-1">
          <p className="text-xs text-muted-foreground">Address</p>
          <p className="text-sm">{entity.address}</p>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="flex justify-end w-full gap-2">
          {isGolden ? (
            <Button size="sm" variant="outline" className="h-8">
              <Edit className="h-3.5 w-3.5 mr-1" />
              Edit
            </Button>
          ) : (
            <>
              <Button size="sm" variant="outline" className="h-8 text-red-600 hover:text-red-600">
                <X className="h-3.5 w-3.5 mr-1" />
                Reject
              </Button>
              <Button size="sm" className="h-8 bg-primus-brown hover:bg-primus-brown-dark">
                <Check className="h-3.5 w-3.5 mr-1" />
                Accept
              </Button>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export function EntityGrouping() {
  const clusterData = {
    golden: {
      id: "GR-73502",
      name: "Rajesh Kumar Singh",
      dob: "15 Jun 1982",
      gender: "Male",
      phone: "9876543210",
      address: "123 Main Road, Sector 7, New Delhi",
      source: "Merged",
    },
    records: [
      {
        id: "PMJAY-2589",
        name: "Rajesh K Singh",
        dob: "15 Jun 1982",
        gender: "Male",
        phone: "9876543210",
        address: "123 Main Rd, Sec 7, New Delhi",
        source: "PMJAY",
      },
      {
        id: "RC-45238",
        name: "Rajesh Kumar Singh",
        dob: "15 Jun 1982",
        gender: "Male",
        phone: "9876543211",
        address: "123, Main Road, Sector 7, New Delhi",
        source: "Ration Card",
      },
      {
        id: "OAP-10538",
        name: "R K Singh",
        dob: "15 June 1982",
        gender: "Male",
        phone: "9876543210",
        address: "123 Main Road, S-7, New Delhi",
        source: "Pension",
      },
    ],
    suggestedMatches: [
      {
        id: "HOUSING-8976",
        name: "Rajesh Singh",
        dob: "16 Jun 1982",
        gender: "Male",
        phone: "9876543212",
        address: "123A Main Road, Sector 7, New Delhi",
        source: "Housing",
        matchScore: 86,
      },
    ],
  };

  const clusters = [
    {
      id: "CLU-5842",
      name: "Rajesh Kumar Singh",
      recordCount: 4,
      goldenRecord: "GR-73502",
      confidence: "high",
    },
    {
      id: "CLU-5843",
      name: "Priya Sharma",
      recordCount: 2,
      goldenRecord: "GR-73503",
      confidence: "medium",
    },
    {
      id: "CLU-5844",
      name: "Mohammed Ahmed",
      recordCount: 3,
      goldenRecord: "GR-73504",
      confidence: "high",
    },
    {
      id: "CLU-5845",
      name: "Anjali Patel",
      recordCount: 3,
      goldenRecord: "GR-73505",
      confidence: "low",
    },
    {
      id: "CLU-5846",
      name: "Vikram Singh",
      recordCount: 2,
      goldenRecord: "GR-73506",
      confidence: "high",
    },
  ];

  const confidenceColors = {
    high: "text-green-600 bg-green-50",
    medium: "text-amber-600 bg-amber-50",
    low: "text-red-600 bg-red-50",
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-primus-brown-dark">Entity Grouping & Golden Records</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Entity Clusters</CardTitle>
            <CardDescription>
              Grouped records based on matching criteria
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <div className="space-y-1 max-h-[500px] overflow-y-auto">
              {clusters.map((cluster, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-4 py-3 hover:bg-muted/50 cursor-pointer ${
                    i === 0 ? "bg-muted/50" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-sm">
                      {cluster.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{cluster.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {cluster.id} • {cluster.recordCount} records
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className={`${
                        confidenceColors[cluster.confidence]
                      } border-none text-xs`}
                    >
                      {cluster.confidence}
                    </Badge>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Apply Filters</Button>
            <Button variant="outline">
              <UserCheck className="h-4 w-4 mr-1" />
              Auto-Merge
            </Button>
          </CardFooter>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Cluster Detail: {clusterData.golden.name}</CardTitle>
                <CardDescription>
                  Cluster ID: {clusters[0].id} • Last Updated: Today, 10:23 AM
                </CardDescription>
              </div>
              <Button variant="outline">
                <Users className="h-4 w-4 mr-1" />
                Related Entities
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <EntityCard entity={clusterData.golden} isGolden={true} />

            <div className="space-y-2">
              <h3 className="text-lg font-medium flex items-center">
                <Link className="h-4 w-4 mr-1" />
                Matched Records
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {clusterData.records.map((record, i) => (
                  <EntityCard key={i} entity={record} />
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                Suggested Matches
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {clusterData.suggestedMatches.map((record, i) => (
                  <EntityCard key={i} entity={record} />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="golden-records" className="space-y-6">
        <TabsList>
          <TabsTrigger value="golden-records">Golden Records</TabsTrigger>
          <TabsTrigger value="audit-trail">Audit Trail</TabsTrigger>
        </TabsList>
        
        <TabsContent value="golden-records">
          <Card>
            <CardHeader>
              <CardTitle>Golden Records</CardTitle>
              <CardDescription>
                Master records created from entity resolution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Golden ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Sources</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead>Confidence</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clusters.map((cluster, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-mono text-xs">
                        {cluster.goldenRecord}
                      </TableCell>
                      <TableCell className="font-medium">{cluster.name}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">PMJAY</Badge>
                          <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">Ration</Badge>
                          {i % 2 === 0 && (
                            <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">Pension</Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">
                        {i === 0 ? "Today, 10:23 AM" : "Yesterday, 2:45 PM"}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={`${
                            confidenceColors[cluster.confidence]
                          } border-none text-xs`}
                        >
                          {cluster.confidence}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Showing 5 of 3,028 golden records
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="audit-trail">
          <Card>
            <CardHeader>
              <CardTitle>Golden Record Audit Trail</CardTitle>
              <CardDescription>
                Track changes and merges to golden records
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-muted pl-4 py-2 relative">
                  <div className="absolute w-3 h-3 bg-primus-gold rounded-full -left-[6.5px] top-3"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Golden Record GR-73502 Created</p>
                    <p className="text-xs text-muted-foreground">Today, 10:23 AM • By System</p>
                    <p className="text-sm mt-2">
                      Created from 3 source records with high confidence (92%)
                    </p>
                  </div>
                </div>
                
                <div className="border-l-2 border-muted pl-4 py-2 relative">
                  <div className="absolute w-3 h-3 bg-primus-brown-light rounded-full -left-[6.5px] top-3"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Additional Record Linked</p>
                    <p className="text-xs text-muted-foreground">Today, 09:45 AM • By System</p>
                    <p className="text-sm mt-2">
                      Record HOUSING-8976 added to cluster with match score 86%
                    </p>
                  </div>
                </div>
                
                <div className="border-l-2 border-muted pl-4 py-2 relative">
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-3"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Manual Edit</p>
                    <p className="text-xs text-muted-foreground">Yesterday, 2:30 PM • By admin@primusone.com</p>
                    <p className="text-sm mt-2">
                      Phone number updated from 9876543211 to 9876543210
                    </p>
                  </div>
                </div>
                
                <div className="border-l-2 border-muted pl-4 py-2 relative">
                  <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-[6.5px] top-3"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Record Unlinked</p>
                    <p className="text-xs text-muted-foreground">Yesterday, 11:15 AM • By admin@primusone.com</p>
                    <p className="text-sm mt-2">
                      Record HEALTH-23456 removed from cluster due to mismatch
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
