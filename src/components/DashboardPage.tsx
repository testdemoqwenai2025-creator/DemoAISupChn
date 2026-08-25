'use client'

import React, { useState } from 'react'
import { 
  ShieldAlert, Activity, AlertTriangle, CheckCircle2, Building2, Bell,
  Settings, Users, Leaf, Gavel, Globe2, Eye, Mail, Pause, Play,
  Brain, LineChart, BarChart3, DatabaseZap, Radar, DollarSign, Cpu,
  Shield, Star, Target, TrendingUp, TrendingDown, Minus
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'
import { useTheme, ThemeToggle } from '@/app/page'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip,
  ResponsiveContainer, LineChart, Line, BarChart, Bar, Legend,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts'
import { suppliersData, alertsData, riskTrendData, riskByRegionData } from '@/app/page'

export function DashboardPage() {
  const { theme } = useTheme()
  
  const totalSuppliers = suppliersData.length
  const highRiskCount = suppliersData.filter(s => s.riskLevel === 'high' || s.riskLevel === 'critical').length
  const avgEsgScore = Math.round(suppliersData.reduce((acc, s) => acc + s.esgScore, 0) / suppliersData.length)
  const compliantCount = suppliersData.filter(s => s.uflpaStatus === 'Compliant').length

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl ${theme === 'dark' ? 'bg-gray-950/80 border-gray-800' : 'bg-white/80 border-gray-200'} border-b`}>
        <div className="max-w-[1800px] mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <ShieldAlert className="w-8 h-8 text-cyan-400" />
            <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Command Center</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 text-sm">
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{totalSuppliers} Suppliers</span>
              <span className={`flex items-center gap-1 ${highRiskCount > 0 ? 'text-red-400' : 'text-green-400'}`}>
                <AlertTriangle className="w-4 h-4" /> {highRiskCount} High Risk
              </span>
            </div>
            <ThemeToggle />
            <Button variant="ghost" size="icon"><Bell className="w-5 h-5" /></Button>
          </div>
        </div>
      </header>

      <main className="max-w-[1800px] mx-auto p-4 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Suppliers', value: totalSuppliers, icon: Users, color: 'cyan' },
            { label: 'High Risk', value: highRiskCount, icon: AlertTriangle, color: 'red' },
            { label: 'Avg ESG', value: avgEsgScore, icon: Leaf, color: 'green' },
            { label: 'UFLPA OK', value: `${compliantCount}/${totalSuppliers}`, icon: Gavel, color: 'yellow' },
          ].map((kpi, i) => (
            <Card key={i} className={`${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>{kpi.label}</p>
                    <p className={`text-2xl font-bold mt-1 ${kpi.color === 'red' ? 'text-red-400' : kpi.color === 'green' ? 'text-green-400' : theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{kpi.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${kpi.color === 'cyan' ? 'bg-cyan-500/10' : kpi.color === 'red' ? 'bg-red-500/10' : kpi.color === 'green' ? 'bg-green-500/10' : 'bg-yellow-500/10'}`}>
                    <kpi.icon className={`w-5 h-5 ${kpi.color === 'cyan' ? 'text-cyan-400' : kpi.color === 'red' ? 'text-red-400' : kpi.color === 'green' ? 'text-green-400' : 'text-yellow-400'}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className={`${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
            <CardHeader className="pb-2"><CardTitle className={`text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Risk Trend</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={riskTrendData}>
                  <defs><linearGradient id="colorOverall" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/><stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/></linearGradient></defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="month" stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize={11} />
                  <YAxis stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize={11} />
                  <RechartsTooltip contentStyle={{ backgroundColor: theme === 'dark' ? '#1f2937' : '#fff', borderRadius: '8px' }} />
                  <Area type="monotone" dataKey="overallRisk" stroke="#06b6d4" fill="url(#colorOverall)" strokeWidth={2} />
                  <Line type="monotone" dataKey="compliance" stroke="#ef4444" strokeWidth={2} dot={false} />
                  <Legend />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className={`${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
            <CardHeader className="pb-2"><CardTitle className={`text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Regional Risk</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={riskByRegionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="region" stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize={11} />
                  <YAxis stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize={11} />
                  <RechartsTooltip contentStyle={{ backgroundColor: theme === 'dark' ? '#1f2937' : '#fff', borderRadius: '8px' }} />
                  <Bar dataKey="highRisk" stackId="a" fill="#ef4444" name="High" />
                  <Bar dataKey="mediumRisk" stackId="a" fill="#f97316" name="Medium" />
                  <Bar dataKey="lowRisk" stackId="a" fill="#22c55e" name="Low" />
                  <Legend />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Alerts */}
        <Card className={`${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className={`text-base flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}><Activity className="w-5 h-5 text-cyan-400 animate-pulse" /> Live Alerts</CardTitle>
              <Button variant="outline" size="sm"><Pause className="w-3 h-3" /></Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-[350px] overflow-y-auto">
              {alertsData.map(alert => (
                <div key={alert.id} className={`p-4 rounded-lg border ${alert.severity === 'critical' ? (theme === 'dark' ? 'bg-red-950/20 border-red-500/30' : 'bg-red-50 border-red-200') : (theme === 'dark' ? 'bg-yellow-950/20 border-yellow-500/30' : 'bg-yellow-50 border-yellow-200')}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className={alert.severity === 'critical' ? 'border-red-500 text-red-400' : 'border-yellow-500 text-yellow-400'}>{alert.severity.toUpperCase()}</Badge>
                    <span className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{alert.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
