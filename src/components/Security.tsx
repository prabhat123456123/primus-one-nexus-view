
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
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Lock,
  Shield,
  UserCheck,
  FileText,
  Eye,
  EyeOff,
  Settings,
  Download,
  Database,
  Users,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

export function Security() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-primus-brown-dark">Security & Access Control</h2>
      </div>

      <Tabs defaultValue="roles" className="space-y-6">
        <TabsList>
          <TabsTrigger value="roles">
            <UserCheck className="h-4 w-4 mr-2" />
            User Roles
          </TabsTrigger>
          <TabsTrigger value="permissions">
            <Lock className="h-4 w-4 mr-2" />
            Field-Level Access
          </TabsTrigger>
          <TabsTrigger value="deployment">
            <Settings className="h-4 w-4 mr-2" />
            Deployment Options
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="roles" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Role-Based Access Control</CardTitle>
              <CardDescription>
                Configure access levels for different user roles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Role</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Users</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Administrator</TableCell>
                    <TableCell>Full system access with configuration rights</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>
                      <Badge className="bg-green-50 text-green-700 hover:bg-green-50">
                        Active
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Data Supervisor</TableCell>
                    <TableCell>Manage data ingestion and entity resolution</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>
                      <Badge className="bg-green-50 text-green-700 hover:bg-green-50">
                        Active
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Data Analyst</TableCell>
                    <TableCell>View data and generate reports</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>
                      <Badge className="bg-green-50 text-green-700 hover:bg-green-50">
                        Active
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Auditor</TableCell>
                    <TableCell>View audit logs and compliance reports</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>
                      <Badge className="bg-green-50 text-green-700 hover:bg-green-50">
                        Active
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">API User</TableCell>
                    <TableCell>System API access for integrations</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-50 text-amber-700 hover:bg-amber-50">
                        Limited
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Add Role</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Module Access Matrix</CardTitle>
              <CardDescription>
                Configure which roles can access specific modules
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Module</TableHead>
                    <TableHead>Administrator</TableHead>
                    <TableHead>Data Supervisor</TableHead>
                    <TableHead>Data Analyst</TableHead>
                    <TableHead>Auditor</TableHead>
                    <TableHead>API User</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Dashboard</TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={false} /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Data Ingestion</TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={false} /></TableCell>
                    <TableCell><Checkbox checked={false} /></TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Match Configuration</TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={false} /></TableCell>
                    <TableCell><Checkbox checked={false} /></TableCell>
                    <TableCell><Checkbox checked={false} /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Entity Grouping</TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={false} /></TableCell>
                    <TableCell><Checkbox checked={false} /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Explainability</TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={false} /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Visualization</TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={false} /></TableCell>
                    <TableCell><Checkbox checked={false} /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Security & Access</TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={false} /></TableCell>
                    <TableCell><Checkbox checked={false} /></TableCell>
                    <TableCell><Checkbox checked={false} /></TableCell>
                    <TableCell><Checkbox checked={false} /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Audit Logs</TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={false} /></TableCell>
                    <TableCell><Checkbox checked={false} /></TableCell>
                    <TableCell><Checkbox checked={true} /></TableCell>
                    <TableCell><Checkbox checked={false} /></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset to Default</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="permissions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Field-Level Access Controls</CardTitle>
              <CardDescription>
                Configure access to specific data fields by role
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data Field</TableHead>
                    <TableHead>Administrator</TableHead>
                    <TableHead>Data Supervisor</TableHead>
                    <TableHead>Data Analyst</TableHead>
                    <TableHead>Auditor</TableHead>
                    <TableHead>API User</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Full Name</TableCell>
                    <TableCell>
                      <Select defaultValue="full">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="full">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="readonly">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="readonly">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="masked">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Date of Birth</TableCell>
                    <TableCell>
                      <Select defaultValue="full">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="full">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="readonly">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="masked">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="none">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Phone Number</TableCell>
                    <TableCell>
                      <Select defaultValue="full">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="full">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="masked">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="masked">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="none">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Address</TableCell>
                    <TableCell>
                      <Select defaultValue="full">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="full">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="masked">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="masked">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="none">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Match Scores</TableCell>
                    <TableCell>
                      <Select defaultValue="full">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="full">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="readonly">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="readonly">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select defaultValue="readonly">
                        <SelectTrigger className="h-8 w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full</SelectItem>
                          <SelectItem value="readonly">Read</SelectItem>
                          <SelectItem value="masked">Masked</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Full: Read/Write, Read: Read-only, Masked: Partial/Hidden</span>
              </div>
              <Button>Save Permissions</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Access Controls</CardTitle>
              <CardDescription>
                Configure data encryption and masking settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Data At Rest Encryption</div>
                  <div className="text-sm text-muted-foreground">
                    Enable encryption for all stored data
                  </div>
                </div>
                <Switch checked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Data In Transit Encryption</div>
                  <div className="text-sm text-muted-foreground">
                    Encrypt all data being transmitted over networks
                  </div>
                </div>
                <Switch checked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Phone Number Masking</div>
                  <div className="text-sm text-muted-foreground">
                    Show only last 4 digits of phone numbers to restricted roles
                  </div>
                </div>
                <Switch checked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Address Masking</div>
                  <div className="text-sm text-muted-foreground">
                    Show only district/city level for restricted roles
                  </div>
                </div>
                <Switch checked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Data Export Restrictions</div>
                  <div className="text-sm text-muted-foreground">
                    Enforce role-based restrictions on data exports
                  </div>
                </div>
                <Switch checked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="deployment" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Deployment Options</CardTitle>
                <CardDescription>
                  View available deployment options for PRIMUS ONE ER
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-md space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-primus-brown flex items-center justify-center">
                        <Cloud className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium">Cloud Deployment</h3>
                        <p className="text-xs text-muted-foreground">Fully managed SaaS solution</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-primus-brown bg-primus-brown/10">
                      Recommended
                    </Badge>
                  </div>
                  <ul className="space-y-2 pl-5 text-sm">
                    <li className="list-disc">Automatic updates and maintenance</li>
                    <li className="list-disc">Elastic scaling based on demand</li>
                    <li className="list-disc">99.9% uptime SLA</li>
                    <li className="list-disc">Geo-redundant backups</li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-md space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-md bg-blue-600 flex items-center justify-center">
                      <Database className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">On-Premises Deployment</h3>
                      <p className="text-xs text-muted-foreground">Self-hosted within your infrastructure</p>
                    </div>
                  </div>
                  <ul className="space-y-2 pl-5 text-sm">
                    <li className="list-disc">Complete data sovereignty</li>
                    <li className="list-disc">Integration with existing systems</li>
                    <li className="list-disc">Custom security configurations</li>
                    <li className="list-disc">Private network operation</li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-md space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-md bg-purple-600 flex items-center justify-center">
                      <Network className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">Hybrid Deployment</h3>
                      <p className="text-xs text-muted-foreground">Combined cloud and on-premises</p>
                    </div>
                  </div>
                  <ul className="space-y-2 pl-5 text-sm">
                    <li className="list-disc">Sensitive data remains on-premises</li>
                    <li className="list-disc">Processing in the cloud</li>
                    <li className="list-disc">Flexible scaling options</li>
                    <li className="list-disc">Disaster recovery benefits</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>API & Integration</CardTitle>
                <CardDescription>
                  Available API endpoints for system integration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium flex items-center gap-1">
                    <FileText className="h-4 w-4" /> API Documentation
                  </h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-xs overflow-x-auto">
                    https://api.primusone.com/er/docs
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Authentication Endpoints</h3>
                  <div className="space-y-1">
                    <div className="bg-muted p-2 rounded-md font-mono text-xs flex justify-between">
                      <span>POST /auth/token</span>
                      <Badge variant="outline" className="text-green-700 bg-green-50">Available</Badge>
                    </div>
                    <div className="bg-muted p-2 rounded-md font-mono text-xs flex justify-between">
                      <span>POST /auth/refresh</span>
                      <Badge variant="outline" className="text-green-700 bg-green-50">Available</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Entity Resolution Endpoints</h3>
                  <div className="space-y-1">
                    <div className="bg-muted p-2 rounded-md font-mono text-xs flex justify-between">
                      <span>POST /api/entities/resolve</span>
                      <Badge variant="outline" className="text-green-700 bg-green-50">Available</Badge>
                    </div>
                    <div className="bg-muted p-2 rounded-md font-mono text-xs flex justify-between">
                      <span>GET /api/entities/{"{id}"}</span>
                      <Badge variant="outline" className="text-green-700 bg-green-50">Available</Badge>
                    </div>
                    <div className="bg-muted p-2 rounded-md font-mono text-xs flex justify-between">
                      <span>GET /api/entities/search</span>
                      <Badge variant="outline" className="text-green-700 bg-green-50">Available</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Data Management Endpoints</h3>
                  <div className="space-y-1">
                    <div className="bg-muted p-2 rounded-md font-mono text-xs flex justify-between">
                      <span>POST /api/data/ingest</span>
                      <Badge variant="outline" className="text-green-700 bg-green-50">Available</Badge>
                    </div>
                    <div className="bg-muted p-2 rounded-md font-mono text-xs flex justify-between">
                      <span>GET /api/data/status/{"{job-id}"}</span>
                      <Badge variant="outline" className="text-green-700 bg-green-50">Available</Badge>
                    </div>
                    <div className="bg-muted p-2 rounded-md font-mono text-xs flex justify-between">
                      <span>GET /api/golden-records</span>
                      <Badge variant="outline" className="text-green-700 bg-green-50">Available</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-1" />
                    Download API Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Compliance & Data Governance</CardTitle>
              <CardDescription>
                Configure compliance settings to meet regulatory requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Regulatory Compliance</h3>
                  
                  <div className="flex items-center gap-3 p-3 border rounded-md">
                    <Checkbox id="gdpr" />
                    <div className="space-y-1">
                      <label htmlFor="gdpr" className="font-medium cursor-pointer">GDPR Compliance</label>
                      <p className="text-sm text-muted-foreground">
                        Enable features for EU General Data Protection Regulation
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 border rounded-md">
                    <Checkbox id="ccpa" />
                    <div className="space-y-1">
                      <label htmlFor="ccpa" className="font-medium cursor-pointer">CCPA Compliance</label>
                      <p className="text-sm text-muted-foreground">
                        California Consumer Privacy Act requirements
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 border rounded-md">
                    <Checkbox id="hipaa" />
                    <div className="space-y-1">
                      <label htmlFor="hipaa" className="font-medium cursor-pointer">HIPAA Compliance</label>
                      <p className="text-sm text-muted-foreground">
                        Health Insurance Portability and Accountability Act
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Data Retention Controls</h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Data Retention Period</label>
                    <Select defaultValue="5y">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1y">1 Year</SelectItem>
                        <SelectItem value="3y">3 Years</SelectItem>
                        <SelectItem value="5y">5 Years</SelectItem>
                        <SelectItem value="7y">7 Years</SelectItem>
                        <SelectItem value="perm">Permanent</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">Duration to keep records before automatic deletion</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="space-y-0.5">
                      <div className="font-medium">Right to be Forgotten</div>
                      <div className="text-sm text-muted-foreground">
                        Enable user data deletion requests
                      </div>
                    </div>
                    <Switch checked />
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="space-y-0.5">
                      <div className="font-medium">Data Portability</div>
                      <div className="text-sm text-muted-foreground">
                        Allow users to request and export their data
                      </div>
                    </div>
                    <Switch checked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset to Default</Button>
              <Button>Save Compliance Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function Cloud(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function Network(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}
