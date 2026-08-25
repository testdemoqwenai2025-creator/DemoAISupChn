'use client'

import React, { useState } from 'react'
import { 
  LayoutDashboard, DatabaseZap, ShieldAlert, CalendarCheck,
  FileBarChart, MessageCircle, Search, Filter, Eye,
  AlertTriangle, CheckCircle2, Clock, TrendingUp, Globe,
  Brain, Scale, MapPin, Building2, Star, ExternalLink
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from '@/components/ui/table'
import { Progress } from '@/components/ui/progress'
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, PieChart, Pie, Cell, AreaChart, Area,
  Legend
} from 'recharts'

// Types
interface Supplier {
  id: string; name: string; region: string; tier: string;
  riskScore: number; status: 'active' | 'under-review' | 'suspended';
  categories: string[]; complianceScore: number;
}

interface RiskAlert {
  id: string; supplier: string; type: 'critical' | 'high' | 'medium' | 'low';
  category: string; description: string; timestamp: string;
  shapValues?: Record<string, number>;
}

// Mock Data
const suppliersData: Supplier[] = [
  { id: 'SUP001', name: 'TechComp Asia', region: 'APAC', tier: 'Tier 1', riskScore: 78, status: 'active', categories: ['Semiconductors', 'Electronics'], complianceScore: 92 },
  { id: 'SUP002', name: 'EuroManufacturing GmbH', region: 'Europe', tier: 'Tier 1', riskScore: 45, status: 'active', categories: ['Automotive Parts'], complianceScore: 88 },
  { id: 'SUP003', name: 'GlobalLogistics Co', region: 'N. America', tier: 'Tier 2', riskScore: 62, status: 'under-review', categories: ['Logistics', 'Freight'], complianceScore: 75 },
  { id: 'SUP004', name: 'SemiconTech Inc', region: 'APAC', tier: 'Tier 1', riskScore: 89, status: 'active', categories: ['Semiconductors', 'Chips'], complianceScore: 95 },
  { id: 'SUP005', name: 'GreenMaterials Ltd', region: 'Europe', tier: 'Tier 2', riskScore: 23, status: 'active', categories: ['Raw Materials', 'Sustainable'], complianceScore: 98 },
  { id: 'SUP006', name: 'MegaFactory Corp', region: 'LATAM', tier: 'Tier 3', riskScore: 71, status: 'suspended', categories: ['Manufacturing'], complianceScore: 52 },
  { id: 'SUP007', name: 'NordicTech AB', region: 'Europe', tier: 'Tier 1', riskScore: 34, status: 'active', categories: ['Electronics', 'IoT'], complianceScore: 91 },
  { id: 'SUP008', name: 'AsiaPacific Supplies', region: 'APAC', tier: 'Tier 2', riskScore: 56, status: 'active', categories: ['Components', 'Parts'], complianceScore: 82 },
]

const alertsData: RiskAlert[] = [
  { id: 'ALT001', supplier: 'SemiconTech Inc', type: 'critical', category: 'Supply Constraint', description: 'Critical component shortage detected', timestamp: '2 min ago', shapValues: { 'Financial Health': 0.35, 'Geopolitical': 0.28, 'Operational': 0.22, 'Environmental': 0.15 } },
  { id: 'ALT002', supplier: 'TechComp Asia', type: 'high', category: 'Geopolitical Risk', description: 'Regional tension escalation warning', timestamp: '15 min ago', shapValues: { 'Geopolitical': 0.45, 'Trade Policy': 0.30, 'Financial Health': 0.25 } },
  { id: 'ALT003', supplier: 'MegaFactory Corp', type: 'critical', category: 'Compliance Violation', description: 'EUDR non-compliance detected', timestamp: '32 min ago' },
  { id: 'ALT004', supplier: 'GlobalLogistics Co', type: 'medium', category: 'Operational', description: 'Shipping delay probability increased', timestamp: '1 hour ago' },
  { id: 'ALT005', supplier: 'EuroManufacturing GmbH', type: 'low', category: 'Financial', description: 'Credit score slight decrease', timestamp: '2 hours ago' },
  { id: 'ALT006', supplier: 'AsiaPacific Supplies', type: 'high', category: 'Environmental', description: 'Typhoon season approaching', timestamp: '3 hours ago' },
]

const riskTrendData = [
  { date: 'Mon', critical: 3, high: 8, medium: 15, low: 24 },
  { date: 'Tue', critical: 5, high: 10, medium: 12, low: 20 },
  { date: 'Wed', critical: 2, high: 6, medium: 18, low: 22 },
  { date: 'Thu', critical: 7, high: 12, medium: 14, low: 18 },
  { date: 'Fri', critical: 4, high: 9, medium: 16, low: 21 },
  { date: 'Sat', critical: 3, high: 7, medium: 13, low: 25 },
  { date: 'Sun', critical: 6, high: 11, medium: 15, low: 19 },
]

const demandForecastData = [
  { period: 'Q1', actual: 4500, forecast: 4400, optimistic: 4800, pessimistic: 4000 },
  { period: 'Q2', actual: 5200, forecast: 5000, optimistic: 5500, pessimistic: 4600 },
  { period: 'Q3', actual: null, forecast: 5800, optimistic: 6400, pessimistic: 5200 },
  { period: 'Q4', actual: null, forecast: 6200, optimistic: 6900, pessimistic: 5500 },
]

const complianceFrameworks = [
  { name: 'UFLPA', score: 94, status: 'compliant', items: 12, passed: 11 },
  { name: 'EUDR', score: 87, status: 'review', items: 18, passed: 15 },
  { name: 'CSDDD', score: 91, status: 'compliant', items: 15, passed: 14 },
  { name: 'GDPR', score: 98, status: 'compliant', items: 25, passed: 25 },
  { name: 'SOX', score: 96, status: 'compliant', items: 20, passed: 19 },
  { name: 'REACH', score: 82, status: 'action-needed', items: 14, passed: 11 },
]

const shapExplanationData = [
  { feature: 'Financial Health Score', impact: 0.35, color: '#f43f5e' },
  { feature: 'Geopolitical Index', impact: 0.28, color: '#f97316' },
  { feature: 'Operational Metrics', impact: 0.22, color: '#f59e0b' },
  { feature: 'Environmental Factors', impact: 0.15, color: '#10b981' },
  { feature: 'Compliance History', impact: -0.08, color: '#06b6d4' },
  { feature: 'Supplier Relationship', impact: -0.05, color: '#8b5cf6' },
]

export default function CommandCenterPage() {
  const [selectedTab, setSelectedTab] = useState('dashboard')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedAlert, setSelectedAlert] = useState<RiskAlert | null>(null)

  const filteredSuppliers = suppliersData.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.region.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Command Center</h1>
            <p className="text-muted-foreground mt-1">AI-Powered Supply Chain Operations</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="gap-1 py-1.5">
              <span className="w-2 h-2 bg-emerald-500 rounded-full pulse-dot" />
              System Online
            </Badge>
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Main Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
            <TabsTrigger value="dashboard" className="gap-2">
              <LayoutDashboard className="h-4 w-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="suppliers" className="gap-2">
              <DatabaseZap className="h-4 w-4" />
              <span className="hidden sm:inline">Suppliers</span>
            </TabsTrigger>
            <TabsTrigger value="risk-intel" className="gap-2">
              <ShieldAlert className="h-4 w-4" />
              <span className="hidden sm:inline">Risk Intel</span>
            </TabsTrigger>
            <TabsTrigger value="forecasting" className="gap-2">
              <CalendarCheck className="h-4 w-4" />
              <span className="hidden sm:inline">Forecast</span>
            </TabsTrigger>
            <TabsTrigger value="compliance" className="gap-2">
              <FileBarChart className="h-4 w-4" />
              <span className="hidden sm:inline">Compliance</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <QuickStatCard title="Total Suppliers" value="847" icon={<DatabaseZap className="h-5 w-5 text-primary" />} change="+23" positive />
              <QuickStatCard title="Active Alerts" value="24" icon={<ShieldAlert className="h-5 w-5 text-rose-500" />} change="+12" positive={false} alert />
              <QuickStatCard title="Avg Risk Score" value="42.3" icon={<Brain className="h-5 w-violet-500" />} change="-5.2" positive />
              <QuickStatCard title="Compliance Rate" value="96.8%" icon={<Scale className="h-5 w-5 text-cyan-500" />} change="+1.2%" positive />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    Weekly Risk Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={riskTrendData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-border/30" />
                      <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                      <YAxis tick={{ fontSize: 11 }} />
                      <Tooltip contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                      <Bar dataKey="critical" stackId="a" fill="#f43f5e" radius={[0, 0, 0, 0]} />
                      <Bar dataKey="high" stackId="a" fill="#f97316" />
                      <Bar dataKey="medium" stackId="a" fill="#f59e0b" />
                      <Bar dataKey="low" stackId="a" fill="#10b981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-violet-500" />
                    Demand Forecast (Quarterly)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={demandForecastData}>
                      <defs>
                        <linearGradient id="forecastGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-border/30" />
                      <XAxis dataKey="period" tick={{ fontSize: 11 }} />
                      <YAxis tick={{ fontSize: 11 }} />
                      <Tooltip contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                      <Area type="monotone" dataKey="optimistic" stroke="#10b981" fillOpacity={0} strokeWidth={1} strokeDasharray="5 5" />
                      <Area type="monotone" dataKey="pessimistic" stroke="#f43f5e" fillOpacity={0} strokeWidth={1} strokeDasharray="5 5" />
                      <Area type="monotone" dataKey="forecast" stroke="#8b5cf6" fill="url(#forecastGradient)" strokeWidth={2} />
                      <Line type="monotone" dataKey="actual" stroke="#06b6d4" strokeWidth={2} dot={{ r: 4 }} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Recent Alerts */}
            <Card className="glass">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Eye className="h-4 w-4 text-rose-500" />
                  Recent Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {alertsData.slice(0, 4).map((alert) => (
                    <div key={alert.id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
                         onClick={() => setSelectedAlert(alert)}>
                      <AlertBadge type={alert.type} />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{alert.supplier}</div>
                        <div className="text-xs text-muted-foreground truncate">{alert.description}</div>
                      </div>
                      <Badge variant="outline" className="text-xs">{alert.category}</Badge>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{alert.timestamp}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Suppliers Tab */}
          <TabsContent value="suppliers" className="space-y-6">
            <Card className="glass">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <CardTitle className="text-base flex items-center gap-2">
                    <DatabaseZap className="h-4 w-4 text-primary" />
                    Supplier Directory
                  </CardTitle>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Search suppliers..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9 w-64"
                      />
                    </div>
                    <Button variant="outline" size="sm"><Filter className="h-4 w-4 mr-2" />Filter</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Supplier</TableHead>
                      <TableHead>Region</TableHead>
                      <TableHead>Tier</TableHead>
                      <TableHead>Risk Score</TableHead>
                      <TableHead>Compliance</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSuppliers.map((supplier) => (
                      <TableRow key={supplier.id} className="cursor-pointer hover:bg-muted/50">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Building2 className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">{supplier.name}</div>
                              <div className="text-xs text-muted-foreground">{supplier.categories.join(', ')}</div>
                                </div>
                          </div>
                        </TableCell>
                        <TableCell><div className="flex items-center gap-1.5"><Globe className="h-3.5 w-3.5 text-muted-foreground" /><span>{supplier.region}</span></div></TableCell>
                        <TableCell><Badge variant="secondary">{supplier.tier}</Badge></TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <RiskGauge score={supplier.riskScore} />
                            <span className={`font-medium ${supplier.riskScore > 70 ? 'text-rose-500' : supplier.riskScore > 40 ? 'text-amber-500' : 'text-emerald-500'}`}>
                              {supplier.riskScore}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell><div className="flex items-center gap-2"><Progress value={supplier.complianceScore} className="w-16 h-1.5" /><span className="text-sm">{supplier.complianceScore}%</span></div></TableCell>
                        <TableCell><StatusBadge status={supplier.status} /></TableCell>
                        <TableCell><Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Risk Intelligence Tab */}
          <TabsContent value="risk-intel" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Active Alerts */}
              <Card className="glass">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <ShieldAlert className="h-4 w-4 text-rose-500" />
                    Active Risk Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-[400px] overflow-y-auto">
                    {alertsData.map((alert) => (
                      <div 
                        key={alert.id} 
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          selectedAlert?.id === alert.id ? 'border-primary bg-primary/5' : 'bg-muted/30 hover:bg-muted/50 border-transparent'
                        }`}
                        onClick={() => setSelectedAlert(alert)}
                      >
                        <div className="flex items-start gap-3">
                          <AlertBadge type={alert.type} />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm">{alert.supplier}</span>
                              <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                            </div>
                            <p className="text-xs text-muted-foreground mb-2">{alert.description}</p>
                            <Badge variant="outline" className="text-xs">{alert.category}</Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* SHAP Explanation Panel */}
              <Card className="glass">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Brain className="h-4 w-4 text-violet-500" />
                    AI Explanation (SHAP)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedAlert?.shapValues ? (
                    <div className="space-y-4">
                      <div className="p-3 rounded-lg bg-muted/30">
                        <div className="text-sm font-medium mb-1">{selectedAlert.supplier}</div>
                        <div className="text-xs text-muted-foreground">Feature attribution for risk prediction</div>
                      </div>
                      
                      <div className="space-y-3">
                        {shapExplanationData.map((item, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex items-center justify-between text-sm">
                              <span>{item.feature}</span>
                              <span className={`font-mono ${item.impact > 0 ? 'text-rose-500' : 'text-emerald-500'}`}>
                                {item.impact > 0 ? '+' : ''}{(item.impact * 100).toFixed(0)}%
                              </span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full transition-all duration-500`}
                                style={{ 
                                  width: `${Math.abs(item.impact) * 100}%`,
                                  backgroundColor: item.color,
                                  marginLeft: item.impact < 0 ? 'auto' : '0',
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Base Risk Probability</span>
                          <span className="font-bold text-lg text-rose-500">78.4%</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                      <Brain className="h-12 w-12 mb-3 opacity-50" />
                      <p className="text-sm">Select an alert to view AI explanation</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Demand Forecasting Tab */}
          <TabsContent value="forecasting" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              <ForecastMetricCard title="Current Quarter" value="5,200" unit="units" change="+8.3%" positive icon={<TrendingUp className="h-5 w-5" />} />
              <ForecastMetricCard title="Next Q Projection" value="5,800" unit="units" change="+11.5%" positive icon={<CalendarCheck className="h-5 w-5" />} />
              <ForecastMetricCard title="Confidence Level" value="87%" unit="" change="+2.1%" positive icon={<Brain className="h-5 w-5" />} />
            </div>

            <Card className="glass">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <CalendarCheck className="h-4 w-4 text-cyan-500" />
                  Forecast Scenarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={demandForecastData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border/30" />
                    <XAxis dataKey="period" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                    <Legend />
                    <Line type="monotone" dataKey="optimistic" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" name="Optimistic" />
                    <Line type="monotone" dataKey="forecast" stroke="#8b5cf6" strokeWidth={2} name="Forecast" />
                    <Line type="monotone" dataKey="pessimistic" stroke="#f43f5e" strokeWidth={2} strokeDasharray="5 5" name="Pessimistic" />
                    <Line type="monotone" dataKey="actual" stroke="#06b6d4" strokeWidth={2} dot={{ r: 5 }} name="Actual" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compliance Tab */}
          <TabsContent value="compliance" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {complianceFrameworks.map((framework) => (
                <ComplianceCard key={framework.name} {...framework} />
              ))}
            </div>

            <Card className="glass">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Scale className="h-4 w-4 text-amber-500" />
                  Compliance Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceFrameworks.map((fw) => (
                    <div key={fw.name} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <Scale className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold">{fw.name}</span>
                          <ComplianceStatusBadge status={fw.status} />
                        </div>
                        <div className="flex items-center gap-3">
                          <Progress value={fw.score} className="flex-1 h-2" />
                          <span className="font-bold text-sm w-10 text-right">{fw.score}%</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {fw.passed}/{fw.items} requirements met
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

/* UI Components */
function QuickStatCard({ title, value, icon, change, positive, alert }: {
  title: string; value: string; icon: React.ReactNode; change: string; positive?: boolean; alert?: boolean
}) {
  return (
    <Card className="glass hover:scale-[1.02] transition-transform">
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          {icon}
          <span className={`text-sm font-medium flex items-center gap-1 ${positive ? 'text-emerald-500' : 'text-rose-500'}`}>
            {change}
            <TrendingUp className={`h-3.5 w-3.5 ${!positive && !alert ? 'rotate-180' : ''}`} />
          </span>
        </div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm text-muted-foreground">{title}</div>
      </CardContent>
    </Card>
  )
}

function AlertBadge({ type }: { type: string }) {
  const styles: Record<string, string> = {
    critical: 'bg-rose-500',
    high: 'bg-orange-500',
    medium: 'bg-amber-500',
    low: 'bg-emerald-500',
  }
  
  return (
    <div className="relative">
      <span className={`w-3 h-3 rounded-full ${styles[type] || 'bg-gray-400'}`} />
      {type === 'critical' && <span className="absolute inset-0 rounded-full bg-rose-500 animate-ping opacity-75" />}
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
    active: { label: 'Active', variant: 'default' },
    'under-review': { label: 'Review', variant: 'secondary' },
    suspended: { label: 'Suspended', variant: 'destructive' },
  }
  const { label, variant } = config[status] || { label: status, variant: 'outline' as const }
  return <Badge variant={variant}>{label}</Badge>
}

function RiskGauge({ score }: { score: number }) {
  const getColor = () => {
    if (score > 70) return 'bg-rose-500'
    if (score > 40) return 'bg-amber-500'
    return 'bg-emerald-500'
  }
  
  return (
    <div className="w-12 h-1.5 bg-muted rounded-full overflow-hidden">
      <div className={`h-full rounded-full ${getColor()}`} style={{ width: `${score}%` }} />
    </div>
  )
}

function ComplianceStatusBadge({ status }: { status: string }) {
  const config: Record<string, { label: string; className: string }> = {
    compliant: { label: 'Compliant', className: 'bg-emerald-500/10 text-emerald-600 border-emerald-200' },
    review: { label: 'In Review', className: 'bg-amber-500/10 text-amber-600 border-amber-200' },
    'action-needed': { label: 'Action Needed', className: 'bg-rose-500/10 text-rose-600 border-rose-200' },
  }
  const { label, className } = config[status] || { label: status, className: '' }
  return <Badge variant="outline" className={className}>{label}</Badge>
}

function ComplianceCard({ name, score, status }: { name: string; score: number; status: string; items: number; passed: number }) {
  const colors: Record<string, string> = {
    compliant: 'border-emerald-500/30 bg-emerald-500/5',
    review: 'border-amber-500/30 bg-amber-500/5',
    'action-needed': 'border-rose-500/30 bg-rose-500/5',
  }

  return (
    <Card className={`cursor-pointer hover:scale-105 transition-transform ${colors[status] || ''}`}>
      <CardContent className="p-4 text-center">
        <div className="text-2xl font-bold mb-1">{score}%</div>
        <div className="text-sm font-medium">{name}</div>
        <ComplianceStatusBadge status={status} />
      </CardContent>
    </Card>
  )
}

function ForecastMetricCard({ title, value, unit, change, positive, icon }: {
  title: string; value: string; unit: string; change: string; positive: boolean; icon: React.ReactNode
}) {
  return (
    <Card className="glass">
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          {icon}
          <span className="text-xs uppercase tracking-wider">{title}</span>
        </div>
        <div className="text-2xl font-bold">
          {value}<span className="text-base font-normal text-muted-foreground ml-1">{unit}</span>
        </div>
        <div className={`text-sm mt-1 ${positive ? 'text-emerald-500' : 'text-rose-500'}`}>{change}</div>
      </CardContent>
    </Card>
  )
}
