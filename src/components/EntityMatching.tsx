
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
import { AlertCircle, BarChart, Brain, Check, FileUp, Play, PlusCircle, Settings, Trash2, Upload } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function EntityMatching() {
  const [matchThreshold, setMatchThreshold] = React.useState(75);
  const [fuzzyThreshold, setFuzzyThreshold] = React.useState(60);
  const [mlConfidence, setMlConfidence] = React.useState(85);
  const [probabilisticThreshold, setProbabilisticThreshold] = React.useState(70);
  
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
            <CardContent className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">ML Confidence Threshold</h3>
                      <p className="text-sm text-muted-foreground">Minimum confidence score to accept ML predictions</p>
                    </div>
                    <span className="font-semibold text-primus-brown bg-muted px-2 py-0.5 rounded">
                      {mlConfidence}%
                    </span>
                  </div>
                  <Slider
                    defaultValue={[mlConfidence]}
                    max={100}
                    step={1}
                    onValueChange={(value) => setMlConfidence(value[0])}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Model Selection
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="model-pretrained" 
                        name="model-type" 
                        className="h-4 w-4 border-gray-300 text-primus-brown focus:ring-primus-brown" 
                        defaultChecked
                      />
                      <div className="flex flex-col">
                        <label htmlFor="model-pretrained" className="text-sm font-medium">Pre-trained Model</label>
                        <p className="text-xs text-muted-foreground">Use PRIMUS ONE's pre-trained entity resolution model</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="model-custom" 
                        name="model-type" 
                        className="h-4 w-4 border-gray-300 text-primus-brown focus:ring-primus-brown" 
                      />
                      <div className="flex flex-col">
                        <label htmlFor="model-custom" className="text-sm font-medium">Custom Trained Model</label>
                        <p className="text-xs text-muted-foreground">Use a model trained on your specific data</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="model-hybrid" 
                        name="model-type" 
                        className="h-4 w-4 border-gray-300 text-primus-brown focus:ring-primus-brown" 
                      />
                      <div className="flex flex-col">
                        <label htmlFor="model-hybrid" className="text-sm font-medium">Hybrid Approach</label>
                        <p className="text-xs text-muted-foreground">Combine rule-based and ML predictions</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Select defaultValue="transformer">
                      <SelectTrigger>
                        <SelectValue placeholder="Select model architecture" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="transformer">Transformer-based Model</SelectItem>
                        <SelectItem value="gradient">Gradient Boosting Classifier</SelectItem>
                        <SelectItem value="neural">Neural Network</SelectItem>
                        <SelectItem value="ensemble">Ensemble Model</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Training Controls
                  </h3>
                  
                  <div className="space-y-4 bg-muted/30 p-4 rounded-md">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Learning Rate</label>
                        <span className="text-xs bg-muted px-2 py-0.5 rounded">0.001</span>
                      </div>
                      <Slider defaultValue={[30]} max={100} step={1} className="w-full" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Batch Size</label>
                        <span className="text-xs bg-muted px-2 py-0.5 rounded">32</span>
                      </div>
                      <Slider defaultValue={[40]} max={100} step={1} className="w-full" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Epochs</label>
                        <span className="text-xs bg-muted px-2 py-0.5 rounded">10</span>
                      </div>
                      <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <Switch id="auto-optimization" defaultChecked />
                        <label htmlFor="auto-optimization" className="text-sm">Auto-optimization</label>
                      </div>
                      <Button variant="ghost" size="sm">
                        Reset
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Feature Engineering</h3>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Field</TableHead>
                      <TableHead>Feature Type</TableHead>
                      <TableHead>Importance</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Name</TableCell>
                      <TableCell>Text Embedding</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={85} className="h-2" />
                          <span className="text-xs">85%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Date of Birth</TableCell>
                      <TableCell>Date Vector</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={78} className="h-2" />
                          <span className="text-xs">78%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Address</TableCell>
                      <TableCell>Text + Geo Embedding</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={72} className="h-2" />
                          <span className="text-xs">72%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Phone</TableCell>
                      <TableCell>Numerical Pattern</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={65} className="h-2" />
                          <span className="text-xs">65%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={4}>
                        <Button variant="outline" size="sm" className="w-full mt-2">
                          <PlusCircle className="h-4 w-4 mr-1" />
                          Add Feature
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <div className="grid grid-cols-2 w-full gap-4">
                <Button className="bg-primus-brown hover:bg-primus-brown-dark">
                  <Play className="h-4 w-4 mr-1" />
                  Train Model
                </Button>
                <Button variant="outline">
                  <FileUp className="h-4 w-4 mr-1" />
                  Upload Model
                </Button>
              </div>
              
              <Card className="w-full bg-muted/30">
                <CardContent className="p-3">
                  <div className="flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-primus-brown" />
                    <div>
                      <h4 className="text-sm font-medium">Last Training Performance</h4>
                      <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
                        <div>
                          <span className="text-muted-foreground">Precision:</span>
                          <span className="ml-1 font-medium">94.2%</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Recall:</span>
                          <span className="ml-1 font-medium">91.5%</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">F1 Score:</span>
                          <span className="ml-1 font-medium">92.8%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="probabilistic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Probabilistic Matching Configuration</CardTitle>
              <CardDescription>Configure probabilistic matching parameters using Fellegi-Sunter model</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Match Weight Threshold</h3>
                      <p className="text-sm text-muted-foreground">Minimum threshold for match decision</p>
                    </div>
                    <span className="font-semibold text-primus-brown bg-muted px-2 py-0.5 rounded">
                      {probabilisticThreshold}%
                    </span>
                  </div>
                  <Slider
                    defaultValue={[probabilisticThreshold]}
                    max={100}
                    step={1}
                    onValueChange={(value) => setProbabilisticThreshold(value[0])}
                    className="w-full"
                  />
                </div>
                
                <div className="bg-muted/30 p-4 rounded-md space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    <p className="text-sm font-medium">Advanced Probabilistic Settings</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Probabilistic matching builds a statistical model of what makes a match based on agreement patterns 
                    between field values. The system will estimate m-probabilities (chance of agreement given records match)
                    and u-probabilities (chance of agreement given records don't match).
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Field Agreement Weights</h3>
                <p className="text-sm text-muted-foreground">
                  Configure agreement and disagreement weights for each field used in probabilistic matching
                </p>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Field</TableHead>
                      <TableHead>Comparison Method</TableHead>
                      <TableHead>Match Weight</TableHead>
                      <TableHead>Non-Match Weight</TableHead>
                      <TableHead className="text-right">Active</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Name (Given)</TableCell>
                      <TableCell>
                        <Select defaultValue="jaro">
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="jaro">Jaro-Winkler</SelectItem>
                            <SelectItem value="exact">Exact</SelectItem>
                            <SelectItem value="soundex">Soundex</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <input 
                            type="number" 
                            className="w-14 h-8 rounded-md border border-input bg-background px-2 text-sm"
                            defaultValue="2.7"
                            min="0"
                            step="0.1"
                          />
                          <span className="text-xs text-muted-foreground">ln(m/u)</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <input 
                            type="number" 
                            className="w-14 h-8 rounded-md border border-input bg-background px-2 text-sm"
                            defaultValue="-1.2"
                            step="0.1"
                          />
                          <span className="text-xs text-muted-foreground">ln(1-m/1-u)</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Switch defaultChecked />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Name (Family)</TableCell>
                      <TableCell>
                        <Select defaultValue="jaro">
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="jaro">Jaro-Winkler</SelectItem>
                            <SelectItem value="exact">Exact</SelectItem>
                            <SelectItem value="soundex">Soundex</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <input 
                            type="number" 
                            className="w-14 h-8 rounded-md border border-input bg-background px-2 text-sm"
                            defaultValue="3.2"
                            min="0"
                            step="0.1"
                          />
                          <span className="text-xs text-muted-foreground">ln(m/u)</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <input 
                            type="number" 
                            className="w-14 h-8 rounded-md border border-input bg-background px-2 text-sm"
                            defaultValue="-1.8"
                            step="0.1"
                          />
                          <span className="text-xs text-muted-foreground">ln(1-m/1-u)</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Switch defaultChecked />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Date of Birth</TableCell>
                      <TableCell>
                        <Select defaultValue="fuzzyDate">
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="exact">Exact</SelectItem>
                            <SelectItem value="fuzzyDate">Fuzzy Date</SelectItem>
                            <SelectItem value="yearOnly">Year Only</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <input 
                            type="number" 
                            className="w-14 h-8 rounded-md border border-input bg-background px-2 text-sm"
                            defaultValue="4.5"
                            min="0"
                            step="0.1"
                          />
                          <span className="text-xs text-muted-foreground">ln(m/u)</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <input 
                            type="number" 
                            className="w-14 h-8 rounded-md border border-input bg-background px-2 text-sm"
                            defaultValue="-2.7"
                            step="0.1"
                          />
                          <span className="text-xs text-muted-foreground">ln(1-m/1-u)</span>
                        </div>
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
                            <SelectItem value="jaccard">Jaccard</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <input 
                            type="number" 
                            className="w-14 h-8 rounded-md border border-input bg-background px-2 text-sm"
                            defaultValue="2.1"
                            min="0"
                            step="0.1"
                          />
                          <span className="text-xs text-muted-foreground">ln(m/u)</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <input 
                            type="number" 
                            className="w-14 h-8 rounded-md border border-input bg-background px-2 text-sm"
                            defaultValue="-0.8"
                            step="0.1"
                          />
                          <span className="text-xs text-muted-foreground">ln(1-m/1-u)</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Switch defaultChecked />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={5}>
                        <Button variant="outline" size="sm" className="w-full mt-2">
                          <PlusCircle className="h-4 w-4 mr-1" />
                          Add Field
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-muted/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Blocking Configuration</CardTitle>
                    <CardDescription>
                      Reduce comparison space by only comparing records within blocks
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Switch id="blocking-enabled" defaultChecked />
                          <label htmlFor="blocking-enabled" className="text-sm font-medium">Enable Blocking</label>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm">Blocking Keys</label>
                        <Select defaultValue="district">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="district">District Code</SelectItem>
                            <SelectItem value="pincode">PIN Code</SelectItem>
                            <SelectItem value="yearofbirth">Year of Birth</SelectItem>
                            <SelectItem value="gender">Gender</SelectItem>
                            <SelectItem value="custom">Custom Rule</SelectItem>
                          </SelectContent>
                        </Select>
                        
                        <div className="pt-2 flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <PlusCircle className="h-3.5 w-3.5 mr-1" />
                            Add Key
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground">
                            <Trash2 className="h-3.5 w-3.5 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-muted/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">EM Algorithm Settings</CardTitle>
                    <CardDescription>
                      Configure Expectation-Maximization algorithm parameters
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Switch id="em-enabled" defaultChecked />
                          <label htmlFor="em-enabled" className="text-sm font-medium">Auto-estimate parameters</label>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <label className="text-sm">Max Iterations</label>
                          <span className="text-xs bg-muted px-2 py-0.5 rounded">20</span>
                        </div>
                        <Slider defaultValue={[40]} max={100} className="w-full" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <label className="text-sm">Convergence Threshold</label>
                          <span className="text-xs bg-muted px-2 py-0.5 rounded">0.001</span>
                        </div>
                        <Slider defaultValue={[30]} max={100} className="w-full" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                Reset Parameters
              </Button>
              <div className="flex gap-3">
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-1" />
                  Import Settings
                </Button>
                <Button className="bg-primus-brown hover:bg-primus-brown-dark">
                  <Check className="h-4 w-4 mr-1" />
                  Save Configuration
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
