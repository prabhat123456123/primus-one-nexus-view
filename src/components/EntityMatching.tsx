
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function EntityMatching() {
  const [matchThreshold, setMatchThreshold] = React.useState(75);
  const [fuzzyThreshold, setFuzzyThreshold] = React.useState(60);
  
  const sampleRecords = [
    {
      field1: "Rajesh Kumar",
      field2: "Rajesh Kumar Singh",
      score: 87,
      match: true,
    },
    {
      field1: "Priya Sharma",
      field2: "P. Sharma",
      score: 72,
      match: true,
    },
    {
      field1: "Mohammed Ali",
      field2: "Mohammad Ali",
      score: 91,
      match: true,
    },
    {
      field1: "Anjali Patel",
      field2: "Anjali P.",
      score: 65,
      match: false,
    },
    {
      field1: "Vikram Singh",
      field2: "Bikram Singh",
      score: 82,
      match: true,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-primus-brown-dark">Entity Matching Configuration</h2>
      </div>

      <Tabs defaultValue="rules" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="rules">Rule Based</TabsTrigger>
          <TabsTrigger value="ml">Machine Learning</TabsTrigger>
          <TabsTrigger value="probabilistic">Probabilistic</TabsTrigger>
        </TabsList>
        
        <TabsContent value="rules" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Matching Rules Configuration</CardTitle>
              <CardDescription>
                Configure rule-based matching parameters and thresholds
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Match Threshold</h3>
                      <p className="text-sm text-muted-foreground">Minimum score to consider a match</p>
                    </div>
                    <span className="font-semibold text-primus-brown bg-muted px-2 py-0.5 rounded">
                      {matchThreshold}%
                    </span>
                  </div>
                  <Slider
                    defaultValue={[matchThreshold]}
                    max={100}
                    step={1}
                    onValueChange={(value) => setMatchThreshold(value[0])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Strict (More False Negatives)</span>
                    <span>Relaxed (More False Positives)</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Fuzzy Match Threshold</h3>
                      <p className="text-sm text-muted-foreground">Threshold for fuzzy matching algorithms</p>
                    </div>
                    <span className="font-semibold text-primus-brown bg-muted px-2 py-0.5 rounded">
                      {fuzzyThreshold}%
                    </span>
                  </div>
                  <Slider
                    defaultValue={[fuzzyThreshold]}
                    max={100}
                    step={1}
                    onValueChange={(value) => setFuzzyThreshold(value[0])}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-medium">Field Matching Algorithms</h3>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[250px]">Field Name</TableHead>
                      <TableHead>Algorithm</TableHead>
                      <TableHead>Weight</TableHead>
                      <TableHead className="text-right">Active</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Full Name</TableCell>
                      <TableCell>
                        <Select defaultValue="jaro">
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="jaro">Jaro-Winkler</SelectItem>
                            <SelectItem value="levenshtein">Levenshtein</SelectItem>
                            <SelectItem value="soundex">Soundex</SelectItem>
                            <SelectItem value="metaphone">Metaphone</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Select defaultValue="high">
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">High (0.8)</SelectItem>
                            <SelectItem value="medium">Medium (0.5)</SelectItem>
                            <SelectItem value="low">Low (0.3)</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-right">
                        <Switch defaultChecked />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Date of Birth</TableCell>
                      <TableCell>
                        <Select defaultValue="fuzzy">
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="exact">Exact Match</SelectItem>
                            <SelectItem value="fuzzy">Fuzzy Date</SelectItem>
                            <SelectItem value="year">Year Only</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Select defaultValue="high">
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">High (0.8)</SelectItem>
                            <SelectItem value="medium">Medium (0.5)</SelectItem>
                            <SelectItem value="low">Low (0.3)</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-right">
                        <Switch defaultChecked />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Address</TableCell>
                      <TableCell>
                        <Select defaultValue="token">
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="token">Token Sort Ratio</SelectItem>
                            <SelectItem value="levenshtein">Levenshtein</SelectItem>
                            <SelectItem value="jaccard">Jaccard Similarity</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Select defaultValue="medium">
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">High (0.8)</SelectItem>
                            <SelectItem value="medium">Medium (0.5)</SelectItem>
                            <SelectItem value="low">Low (0.3)</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-right">
                        <Switch defaultChecked />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Phone Number</TableCell>
                      <TableCell>
                        <Select defaultValue="exact">
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="exact">Exact Match</SelectItem>
                            <SelectItem value="lastdigits">Last 6 Digits</SelectItem>
                            <SelectItem value="formatted">Formatted Compare</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Select defaultValue="medium">
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">High (0.8)</SelectItem>
                            <SelectItem value="medium">Medium (0.5)</SelectItem>
                            <SelectItem value="low">Low (0.3)</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-right">
                        <Switch defaultChecked />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset to Default</Button>
              <Button>Save Configuration</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sample Match Results</CardTitle>
              <CardDescription>
                Preview of matches based on current configuration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Record 1</TableHead>
                    <TableHead>Record 2</TableHead>
                    <TableHead>Match Score</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sampleRecords.map((record, i) => (
                    <TableRow key={i}>
                      <TableCell>{record.field1}</TableCell>
                      <TableCell>{record.field2}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-full max-w-[100px] h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className={`h-full ${
                                record.score >= matchThreshold
                                  ? "bg-green-500"
                                  : record.score >= fuzzyThreshold
                                  ? "bg-amber-500"
                                  : "bg-red-500"
                              }`}
                              style={{ width: `${record.score}%` }}
                            ></div>
                          </div>
                          <span className="text-sm">{record.score}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        {record.match ? (
                          <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                            Match
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">
                            No Match
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Run Full Test Batch
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="ml" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Machine Learning Model Configuration</CardTitle>
              <CardDescription>Configure ML-based matching parameters</CardDescription>
            </CardHeader>
            <CardContent className="py-6">
              <div className="flex items-center justify-center h-40 bg-muted rounded-md">
                <p className="text-muted-foreground">ML configuration coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="probabilistic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Probabilistic Matching Configuration</CardTitle>
              <CardDescription>Configure probabilistic matching parameters</CardDescription>
            </CardHeader>
            <CardContent className="py-6">
              <div className="flex items-center justify-center h-40 bg-muted rounded-md">
                <p className="text-muted-foreground">Probabilistic configuration coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
