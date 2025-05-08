
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
  Upload,
  Database,
  Code,
  FileText,
  X,
  CheckCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const jobStatuses = {
  completed: {
    label: "Completed",
    icon: CheckCircle,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  processing: {
    label: "Processing",
    icon: Loader2,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  error: {
    label: "Error",
    icon: X,
    color: "text-red-600",
    bg: "bg-red-100",
  },
  warning: {
    label: "Warning",
    icon: AlertCircle,
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
};

const recentJobs = [
  {
    id: "JB-3845",
    name: "PMJAY Database",
    type: "Database Connection",
    records: "3,452",
    status: "completed",
    date: "2024-05-06",
  },
  {
    id: "JB-3844",
    name: "Ration Cards",
    type: "CSV Upload",
    records: "5,621",
    status: "processing",
    date: "2024-05-05",
  },
  {
    id: "JB-3843",
    name: "Old-Age Pensions",
    type: "JSON Upload",
    records: "1,175",
    status: "warning",
    date: "2024-05-05",
  },
  {
    id: "JB-3842",
    name: "Rural Housing",
    type: "API Connection",
    records: "0",
    status: "error",
    date: "2024-05-04",
  },
];

export function DataIngestion() {
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [uploading, setUploading] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const simulateUpload = () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select a file to upload",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          toast({
            title: "Upload Complete",
            description: `Successfully uploaded ${selectedFile.name}`,
          });
          setSelectedFile(null);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-primus-brown-dark">Data Ingestion</h2>
      </div>

      <Tabs defaultValue="file-upload" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="file-upload">File Upload</TabsTrigger>
          <TabsTrigger value="api">API Endpoint</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
        </TabsList>

        <TabsContent value="file-upload" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload Data Files</CardTitle>
              <CardDescription>
                Upload CSV, JSON, or Excel files to ingest into the system
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div 
                className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center ${
                  selectedFile ? "border-primus-brown" : "border-border"
                }`}
              >
                {!selectedFile ? (
                  <>
                    <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">Drop files here or click to browse</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Support for CSV, JSON, XLSX (Max: 100MB)
                    </p>
                    <Input 
                      id="file-upload" 
                      type="file" 
                      className="hidden" 
                      onChange={handleFileChange}
                      accept=".csv,.json,.xlsx"
                    />
                    <Button asChild>
                      <label htmlFor="file-upload">Select Files</label>
                    </Button>
                  </>
                ) : (
                  <>
                    <FileText className="h-10 w-10 text-primus-brown mb-4" />
                    <h3 className="text-lg font-medium mb-2">{selectedFile.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {Math.round(selectedFile.size / 1024)} KB
                    </p>

                    {uploading ? (
                      <div className="w-full max-w-xs space-y-2">
                        <Progress value={uploadProgress} className="h-2 w-full" />
                        <div className="text-xs text-right text-muted-foreground">
                          {uploadProgress}%
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <Button onClick={() => setSelectedFile(null)} variant="outline">
                          <X className="h-4 w-4 mr-1" /> Remove
                        </Button>
                        <Button onClick={simulateUpload}>
                          <Upload className="h-4 w-4 mr-1" /> Upload
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Upload Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Dataset Name</label>
                    <Input placeholder="e.g., Citizen Registry May 2024" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Source System</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select source system" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pmjay">PMJAY</SelectItem>
                        <SelectItem value="ration">Ration Card System</SelectItem>
                        <SelectItem value="pension">Pension Database</SelectItem>
                        <SelectItem value="housing">Housing Scheme</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Data Format</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="csv">CSV</SelectItem>
                        <SelectItem value="json">JSON</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Processing Priority</label>
                    <Select defaultValue="normal">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Start Ingestion</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API Connection</CardTitle>
              <CardDescription>
                Set up an API endpoint to ingest data from external systems
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">API Endpoint URL</label>
                  <Input placeholder="https://api.example.com/data" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Authentication Method</label>
                    <Select defaultValue="bearer">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bearer">Bearer Token</SelectItem>
                        <SelectItem value="basic">Basic Auth</SelectItem>
                        <SelectItem value="apikey">API Key</SelectItem>
                        <SelectItem value="oauth">OAuth 2.0</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">API Key / Token</label>
                    <Input type="password" placeholder="Enter your API key or token" />
                  </div>
                </div>
                
                <div className="rounded-md bg-muted p-4">
                  <h4 className="text-sm font-medium mb-2 flex items-center">
                    <Code className="h-4 w-4 mr-2" /> 
                    Sample Request
                  </h4>
                  <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
                    {`GET /api/v1/citizens HTTP/1.1
Host: api.example.com
Authorization: Bearer {token}
Content-Type: application/json`}
                  </pre>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Test Connection</Button>
              <Button>Save Configuration</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="database" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Database Connection</CardTitle>
              <CardDescription>
                Connect directly to an external database to ingest data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Database Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select database type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mysql">MySQL</SelectItem>
                      <SelectItem value="postgres">PostgreSQL</SelectItem>
                      <SelectItem value="oracle">Oracle</SelectItem>
                      <SelectItem value="mssql">MS SQL Server</SelectItem>
                      <SelectItem value="mongodb">MongoDB</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Host</label>
                  <Input placeholder="e.g., db.example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Port</label>
                  <Input placeholder="e.g., 3306" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Database Name</label>
                  <Input placeholder="e.g., citizens_registry" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Username</label>
                  <Input placeholder="Database username" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <Input type="password" placeholder="Database password" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">SQL Query (Optional)</label>
                <Input
                  as="textarea"
                  className="min-h-[100px]"
                  placeholder="SELECT * FROM citizens WHERE registration_date > '2024-01-01'"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Test Connection</Button>
              <Button>Connect Database</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Recent Ingestion Jobs</CardTitle>
          <CardDescription>
            Status and details of your recent data ingestion activities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted text-left">
                <tr>
                  <th className="px-4 py-3 font-medium">Job ID</th>
                  <th className="px-4 py-3 font-medium">Dataset</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Records</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {recentJobs.map((job, i) => {
                  const status = jobStatuses[job.status as keyof typeof jobStatuses];
                  const StatusIcon = status.icon;
                  
                  return (
                    <tr key={i} className="hover:bg-muted/50">
                      <td className="px-4 py-3 font-mono text-xs">{job.id}</td>
                      <td className="px-4 py-3">{job.name}</td>
                      <td className="px-4 py-3">{job.type}</td>
                      <td className="px-4 py-3">{job.records}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${status.bg} ${status.color}`}>
                            <StatusIcon className={`h-3 w-3 mr-1 ${job.status === "processing" ? "animate-spin" : ""}`} />
                            {status.label}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">{job.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">View All Jobs</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
