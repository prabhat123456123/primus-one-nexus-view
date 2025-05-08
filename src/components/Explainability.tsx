
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
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  Download,
  AlertTriangle,
  Info,
  Search,
  FileText,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

export function Explainability() {
  const fieldMatchDetails = {
    name: [
      {
        field1: "Rajesh Kumar Singh",
        field2: "Rajesh K Singh",
        algorithm: "Jaro-Winkler",
        score: 89,
        weight: 0.8,
        weighted: 71.2,
      },
    ],
    dob: [
      {
        field1: "15 Jun 1982",
        field2: "15 Jun 1982",
        algorithm: "Exact Match",
        score: 100,
        weight: 0.8,
        weighted: 80,
      },
    ],
    gender: [
      {
        field1: "Male",
        field2: "Male",
        algorithm: "Exact Match",
        score: 100,
        weight: 0.5,
        weighted: 50,
      },
    ],
    phone: [
      {
        field1: "9876543210",
        field2: "9876543211",
        algorithm: "Last 6 Digits",
        score: 83,
        weight: 0.7,
        weighted: 58.1,
      },
    ],
    address: [
      {
        field1: "123 Main Road, Sector 7, New Delhi",
        field2: "123 Main Rd, Sec 7, New Delhi",
        algorithm: "Token Sort Ratio",
        score: 92,
        weight: 0.6,
        weighted: 55.2,
      },
    ],
  };

  const totalScore = Object.values(fieldMatchDetails).reduce(
    (acc, fields) => acc + fields[0].weighted,
    0
  );
  const totalWeight = Object.values(fieldMatchDetails).reduce(
    (acc, fields) => acc + fields[0].weight,
    0
  );
  const finalScore = Math.round((totalScore / (totalWeight * 100)) * 100);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-primus-brown-dark">Explainability Console</h2>
      </div>
      
      <Card className="relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 flex items-center">
          <Badge 
            variant="outline" 
            className="bg-green-50 text-green-700 font-semibold">
            Threshold Passed: 92%
          </Badge>
        </div>
        <CardHeader>
          <CardTitle>Match Determination</CardTitle>
          <CardDescription>
            Details of how the match was determined between these records
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Record 1: PMJAY-2589</h3>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-muted-foreground font-medium">Name</TableCell>
                    <TableCell>Rajesh Kumar Singh</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-muted-foreground font-medium">Date of Birth</TableCell>
                    <TableCell>15 Jun 1982</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-muted-foreground font-medium">Gender</TableCell>
                    <TableCell>Male</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-muted-foreground font-medium">Phone</TableCell>
                    <TableCell>9876543210</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-muted-foreground font-medium">Address</TableCell>
                    <TableCell>123 Main Road, Sector 7, New Delhi</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Record 2: RC-45238</h3>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-muted-foreground font-medium">Name</TableCell>
                    <TableCell>Rajesh K Singh</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-muted-foreground font-medium">Date of Birth</TableCell>
                    <TableCell>15 Jun 1982</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-muted-foreground font-medium">Gender</TableCell>
                    <TableCell>Male</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-muted-foreground font-medium">Phone</TableCell>
                    <TableCell>9876543211</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-muted-foreground font-medium">Address</TableCell>
                    <TableCell>123 Main Rd, Sec 7, New Delhi</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Match Breakdown</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Field</TableHead>
                  <TableHead>Algorithm</TableHead>
                  <TableHead>Match Score</TableHead>
                  <TableHead>Weight</TableHead>
                  <TableHead>Weighted Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(fieldMatchDetails).map(([field, details]) => (
                  <TableRow key={field}>
                    <TableCell className="font-medium capitalize">{field}</TableCell>
                    <TableCell>{details[0].algorithm}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={details[0].score}
                          className="h-2 w-20"
                        />
                        <span>{details[0].score}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{details[0].weight}</TableCell>
                    <TableCell className="font-medium">{details[0].weighted}%</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-muted/50">
                  <TableCell colSpan={3}></TableCell>
                  <TableCell className="font-medium">Total:</TableCell>
                  <TableCell className="font-bold">{finalScore}%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h3 className="font-medium">Match Conclusion</h3>
            </div>
            <p className="text-sm">
              These records are considered a <strong>match</strong> with <strong>92% confidence</strong>. 
              The match exceeds the configured threshold of 75%.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-1" />
            Export Report
          </Button>
          <Button>View Match History</Button>
        </CardFooter>
      </Card>

      <Tabs defaultValue="governance" className="space-y-6">
        <TabsList>
          <TabsTrigger value="governance">Governance Thresholds</TabsTrigger>
          <TabsTrigger value="audit">Audit & Logging</TabsTrigger>
        </TabsList>
        
        <TabsContent value="governance">
          <Card>
            <CardHeader>
              <CardTitle>Governance Configuration</CardTitle>
              <CardDescription>
                Configure thresholds and controls for match verification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Control Type</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Threshold</TableHead>
                    <TableHead>Override Required</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Auto-Merge Threshold</TableCell>
                    <TableCell>Minimum score for automatic merging</TableCell>
                    <TableCell>90%</TableCell>
                    <TableCell>Admin</TableCell>
                    <TableCell className="text-right">
                      <Switch defaultChecked />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Review Threshold</TableCell>
                    <TableCell>Score range requiring human review</TableCell>
                    <TableCell>75% - 90%</TableCell>
                    <TableCell>Supervisor</TableCell>
                    <TableCell className="text-right">
                      <Switch defaultChecked />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Reject Threshold</TableCell>
                    <TableCell>Maximum score for automatic rejection</TableCell>
                    <TableCell>&lt; 75%</TableCell>
                    <TableCell>Analyst</TableCell>
                    <TableCell className="text-right">
                      <Switch defaultChecked />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Duplicate Warning</TableCell>
                    <TableCell>Warn if potential duplicates exceed threshold</TableCell>
                    <TableCell>3 records</TableCell>
                    <TableCell>None</TableCell>
                    <TableCell className="text-right">
                      <Switch defaultChecked />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Abnormal Merge Alert</TableCell>
                    <TableCell>Flag suspicious merges for review</TableCell>
                    <TableCell>Enabled</TableCell>
                    <TableCell>Admin</TableCell>
                    <TableCell className="text-right">
                      <Switch defaultChecked />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset to Default</Button>
              <Button>Save Configuration</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="audit">
          <Card>
            <CardHeader>
              <CardTitle>System Audit Log</CardTitle>
              <CardDescription>
                Comprehensive log of all system actions and decisions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search logs..."
                      className="text-sm bg-transparent border-none outline-none w-64"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-1" />
                    Export Logs
                  </Button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-muted/50 rounded-md p-3 flex items-start gap-3">
                  <div className="mt-0.5">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium">Threshold Override</p>
                      <Badge variant="outline" className="text-xs bg-amber-50 text-amber-700">Warning</Badge>
                    </div>
                    <p className="text-sm mb-1">
                      Admin user (admin@primusone.com) manually merged records below threshold
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Today 11:45 AM</span>
                      <span>•</span>
                      <span>Records: PMJAY-2589, HOUSING-8976</span>
                      <span>•</span>
                      <span>Match Score: 68%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/50 rounded-md p-3 flex items-start gap-3">
                  <div className="mt-0.5">
                    <Info className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium">Configuration Change</p>
                      <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700">Info</Badge>
                    </div>
                    <p className="text-sm mb-1">
                      Match threshold updated from 70% to 75%
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Today 10:23 AM</span>
                      <span>•</span>
                      <span>User: admin@primusone.com</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/50 rounded-md p-3 flex items-start gap-3">
                  <div className="mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium">Auto-Merge Completed</p>
                      <Badge variant="outline" className="text-xs bg-green-50 text-green-700">Success</Badge>
                    </div>
                    <p className="text-sm mb-1">
                      System automatically merged records with 92% match score
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Today 09:17 AM</span>
                      <span>•</span>
                      <span>Records: PMJAY-2589, RC-45238</span>
                      <span>•</span>
                      <span>Golden Record: GR-73502</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/50 rounded-md p-3 flex items-start gap-3">
                  <div className="mt-0.5">
                    <Info className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium">Match Rejection</p>
                      <Badge variant="outline" className="text-xs bg-red-50 text-red-700">Rejected</Badge>
                    </div>
                    <p className="text-sm mb-1">
                      User manually rejected potential match between records
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Yesterday 3:45 PM</span>
                      <span>•</span>
                      <span>User: analyst@primusone.com</span>
                      <span>•</span>
                      <span>Match Score: 78%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  Showing 4 of 237 log entries
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="sm" disabled>Previous</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
