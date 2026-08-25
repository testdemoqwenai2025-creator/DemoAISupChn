'use client'

import React, { useState, useEffect } from 'react'
import { 
  AlertTriangle, Shield, TrendingUp, TrendingDown, Activity,
  Globe, Brain, Zap, Eye, ArrowUpRight, ArrowDownRight,
  Package, Truck, Factory
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  PieChart, Pie, Cell, ComposedChart
} from 'recharts'

// Mock Data - Visual Only
const riskTrendData = [
  { date: 'Jan', risk: 45, incidents: 3 },
  { date: 'Feb', risk: 52, incidents: 5 },
  { date: 'Mar', risk: 38, incidents: 2 },
  { date: 'Apr', risk: 65, incidents: 8 },
  { date: 'May', risk: 58, incidents: 6 },
  { date: 'Jun', risk: 42, incidents: 4 },
  { date: 'Jul', risk: 72, incidents: 10 },
]

const demandForecastData = [
  { month: 'Week 1', actual: 1200, forecast: 1150, lower: 1000, upper: 1300 },
  { month: 'Week 2', actual: 1350, forecast: 1300, lower: 1150, upper: 1450 },
  { month: 'Week 3', actual: 1100, forecast: 1250, lower: 1100, upper: 1400 },
  { month: 'Week 4', actual: null, forecast: 1400, lower: 1250, upper: 1550 },
  { month: 'Week 5', actual: null, forecast: 1500, lower: 1350, upper: 1650 },
]

const riskByCategoryData = [
  { category: 'Geopolitical', value: 85, fullMark: 100 },
  { category: 'Financial', value: 65, fullMark: 100 },
  { category: 'Operational', value: 45, fullMark: 100 },
  { category: 'Environmental', value: 70, fullMark: 100 },
  { category: 'Compliance', value: 55, fullMark: 100 },
  { category: 'Cyber', value: 40, fullMark: 100 },
]

const supplierRiskData = [
  { name: 'Low Risk', value: 35, color: '#10b981' },
  { name: 'Medium', value: 30, color: '#f59e0b' },
  { name: 'High', value: 22, color: '#f97316' },
  { name: 'Critical', value: 13, color: '#f43f5e' },
]

const regionData = [
  { region: 'APAC', suppliers: 342, riskScore: 62 },
  { region: 'Europe', suppliers: 256, riskScore: 38 },
  { region: 'N. America', suppliers: 189, riskScore: 25 },
  { region: 'LATAM', suppliers: 42, riskScore: 48 },
  { region: 'MEA', suppliers: 18, riskScore: 71 },
]

const liveAlerts = [
  { id: 1, type: 'critical', supplier: 'TechComp Asia', issue: 'Potential disruption', time: '2m ago' },
  { id: 2, type: 'warning', supplier: 'EuroManufacturing', issue: 'Financial stress detected', time: '15m ago' },
  { id: 3, type: 'info', supplier: 'GlobalLogistics Co', issue: 'Route optimization needed', time: '32m ago' },
  { id: 4, type: 'critical', supplier: 'SemiconTech', issue: 'Supply constraint alert', time: '1h ago' },
]

export default function DashboardPage() {
  const [liveData, setLiveData] = useState(riskTrendData)

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => {
        const newData = [...prev.slice(1)]
        const lastValue = prev[prev.length - 1].risk
        const change = (Math.random() - 0.5) * 10
        newData.push({
          date: `Live`,
          risk: Math.max(20, Math.min(90, lastValue + change)),
          incidents: Math.floor(Math.random() * 8)
        })
        return newData
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <KPICard
            title="Active Risks"
            value="24"
            trend="+12%"
            trendUp={true}
            icon={<AlertTriangle className="h-5 w-5" />}
            color="rose"
          />
          <KPICard
            title="Suppliers"
            value="847"
            trend="+23"
            trendUp={true}
            icon={<Shield className="h-5 w-5" />}
            color="emerald"
          />
          <KPICard
            title="AI Accuracy"
            value="94.2%"
            trend="+2.1%"
            trendUp={true}
            icon={<Brain className="h-5 w-5" />}
            color="violet"
          />
          <KPICard
            title="Avg Response"
            value="1.8s"
            trend="-0.3s"
            trendUp={false}
            icon={<Zap className="h-5 w-5" />}
            color="cyan"
          />
        </div>

        {/* Main Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Risk Trend Chart */}
          <Card className="lg:col-span-2 glass">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <Activity className="h-4 w-4 text-primary" />
                  Risk Trend (Live)
                </h3>
                <Badge variant="outline" className="gap-1 text-xs">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full pulse-dot" />
                  Live
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={liveData}>
                  <defs>
                    <linearGradient id="riskGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="stroke-border/50" />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} className="text-muted-foreground" />
                  <YAxis tick={{ fontSize: 12 }} className="text-muted-foreground" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }}
                  />
                  <Area type="monotone" dataKey="risk" stroke="#10b981" fill="url(#riskGradient)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Supplier Risk Distribution */}
          <Card className="glass">
            <CardContent className="p-6">
              <h3 className="font-semibold flex items-center gap-2 mb-4">
                <Shield className="h-4 w-4 text-primary" />
                Risk Distribution
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={supplierRiskData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {supplierRiskData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {supplierRiskData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2 text-sm">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-muted-foreground">{item.name}</span>
                    <span className="ml-auto font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Second Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Demand Forecasting */}
          <Card className="glass">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-violet-500" />
                  Demand Forecast
                </h3>
                <Badge variant="secondary" className="text-xs">Next 5 Weeks</Badge>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <ComposedChart data={demandForecastData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="stroke-border/50" />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                  <Area dataKey="upper" fill="#8b5cf6" fillOpacity={0.1} stroke="none" />
                  <Area dataKey="lower" fill="#8b5cf6" fillOpacity={0.1} stroke="none" />
                  <Line type="monotone" dataKey="forecast" stroke="#8b5cf6" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Risk Radar */}
          <Card className="glass">
            <CardContent className="p-6">
              <h3 className="font-semibold flex items-center gap-2 mb-4">
                <Brain className="h-4 w-4 text-cyan-500" />
                Risk Categories
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <RadarChart data={riskByCategoryData}>
                  <PolarGrid stroke="currentColor" className="stroke-border/30" />
                  <PolarAngleAxis dataKey="category" tick={{ fontSize: 11 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
                  <Radar name="Risk Score" dataKey="value" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.3} />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section: Live Alerts & Regional Data */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Live Alerts Feed */}
          <Card className="lg:col-span-2 glass">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <Eye className="h-4 w-4 text-rose-500" />
                  Live Alerts
                </h3>
                <Badge variant="destructive" className="gap-1 animate-pulse">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  {liveAlerts.length} Active
                </Badge>
              </div>
              <div className="space-y-3">
                {liveAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <AlertDot type={alert.type} />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{alert.supplier}</div>
                      <div className="text-xs text-muted-foreground">{alert.issue}</div>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{alert.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Regional Overview */}
          <Card className="glass">
            <CardContent className="p-6">
              <h3 className="font-semibold flex items-center gap-2 mb-4">
                <Globe className="h-4 w-4 text-primary" />
                Regional View
              </h3>
              <div className="space-y-3">
                {regionData.map((region) => (
                  <div key={region.region} className="p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{region.region}</span>
                      <span className="text-lg font-bold text-primary">{region.suppliers}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            region.riskScore > 60 ? 'bg-rose-500' : 
                            region.riskScore > 40 ? 'bg-amber-500' : 'bg-emerald-500'
                          }`}
                          style={{ width: `${region.riskScore}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">Risk {region.riskScore}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

/* Dashboard Components */
function KPICard({ title, value, trend, trendUp, icon, color }: {
  title: string; value: string; trend: string; trendUp: boolean; icon: React.ReactNode; color: string
}) {
  const colors: Record<string, string> = {
    rose: 'from-rose-500/20 to-rose-600/20',
    emerald: 'from-emerald-500/20 to-emerald-600/20',
    violet: 'from-violet-500/20 to-violet-600/20',
    cyan: 'from-cyan-500/20 to-cyan-600/20',
  }
  
  const iconColors: Record<string, string> = {
    rose: 'text-rose-500',
    emerald: 'text-emerald-500',
    violet: 'text-violet-500',
    cyan: 'text-cyan-500',
  }

  return (
    <Card className="glass group hover:scale-[1.02] transition-transform">
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${colors[color]}`}>
            <span className={iconColors[color]}>{icon}</span>
          </div>
          <div className={`flex items-center gap-1 text-sm font-medium ${trendUp ? 'text-emerald-500' : 'text-rose-500'}`}>
            {trendUp ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
            {trend}
          </div>
        </div>
        <div className="text-2xl font-bold mb-1">{value}</div>
        <div className="text-sm text-muted-foreground">{title}</div>
      </CardContent>
    </Card>
  )
}

function AlertDot({ type }: { type: string }) {
  const colors: Record<string, string> = {
    critical: 'bg-rose-500',
    warning: 'bg-amber-500',
    info: 'bg-cyan-500',
  }
  
  return (
    <div className="relative">
      <span className={`w-3 h-3 rounded-full ${colors[type] || 'bg-gray-400'}`} />
      {(type === 'critical') && (
        <span className={`absolute inset-0 rounded-full ${colors[type]} animate-ping opacity-75`} />
      )}
    </div>
  )
}
