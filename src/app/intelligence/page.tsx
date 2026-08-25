'use client'

import React, { useState } from 'react'
import { 
  Brain, Sparkles, Target, Lightbulb, TrendingUp,
  Activity, Zap, Shield, Globe, BarChart3,
  ArrowRight, CheckCircle2, Play, Pause
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  AreaChart, Area
} from 'recharts'

const aiCapabilities = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'Predictive Analytics',
    description: 'Forecast disruptions before they occur using ensemble ML models',
    accuracy: '94.2%',
    trend: '+2.1%'
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Risk Scoring',
    description: 'Multi-dimensional risk assessment with real-time updates',
    accuracy: '91.8%',
    trend: '+3.4%'
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: 'Anomaly Detection',
    description: 'Identify unusual patterns across supply chain data streams',
    accuracy: '89.5%',
    trend: '+5.2%'
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Demand Forecasting',
    description: 'AI-powered demand prediction with confidence intervals',
    accuracy: '92.7%',
    trend: '+1.8%'
  }
]

const shapData = [
  { feature: 'Financial Health', impact: 0.35, color: '#f43f5e' },
  { feature: 'Geopolitical Risk', impact: 0.28, color: '#f97316' },
  { feature: 'Operational Metrics', impact: 0.22, color: '#f59e0b' },
  { feature: 'Environmental Factors', impact: 0.15, color: '#10b981' },
  { feature: 'Compliance History', impact: -0.08, color: '#06b6d4' },
  { feature: 'Supplier Relationship', impact: -0.05, color: '#8b5cf6' }
]

const modelPerformance = [
  { month: 'Jan', actual: 85, predicted: 82 },
  { month: 'Feb', actual: 88, predicted: 86 },
  { month: 'Mar', actual: 91, predicted: 89 },
  { month: 'Apr', actual: 93, predicted: 92 },
  { month: 'May', actual: 94, predicted: 93 },
  { month: 'Jun', actual: 95, predicted: 94 }
]

const radarData = [
  { subject: 'Accuracy', A: 94, fullMark: 100 },
  { subject: 'Speed', A: 88, fullMark: 100 },
  { subject: 'Explainability', A: 96, fullMark: 100 },
  { subject: 'Reliability', A: 92, fullMark: 100 },
  { subject: 'Scalability', A: 90, fullMark: 100 }
]

export default function IntelligencePage() {
  const [selectedModel, setSelectedModel] = useState('risk-prediction')

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 gap-2">
              <Sparkles className="h-4 w-4" />
              AI/ML Engine
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6">
              Explainable <span className="gradient-text">Artificial Intelligence</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Transparent AI decisions you can trust. Every prediction explained.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="py-2 px-4 text-sm">PyTorch</Badge>
              <Badge variant="secondary" className="py-2 px-4 text-sm">TensorFlow</Badge>
              <Badge variant="secondary" className="py-2 px-4 text-sm">SHAP</Badge>
              <Badge variant="secondary" className="py-2 px-4 text-sm">LIME</Badge>
              <Badge variant="secondary" className="py-2 px-4 text-sm">Transformers</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {aiCapabilities.map((cap, idx) => (
              <Card key={idx} className="glass hover:scale-[1.02] transition-all group cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    {cap.icon}
                  </div>
                  
                  <h3 className="font-semibold mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{cap.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary">{cap.accuracy}</div>
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                    </div>
                    <Badge variant="outline" className="text-emerald-600 border-emerald-200">
                      {cap.trend}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* SHAP Explanation Demo */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-violet-500" />
                  SHAP Feature Attribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  See exactly which factors drive each risk prediction. Full transparency.
                </p>
                
                <div className="space-y-4">
                  {shapData.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{item.feature}</span>
                        <span className={`font-mono ${item.impact > 0 ? 'text-rose-500' : 'text-emerald-500'}`}>
                          {item.impact > 0 ? '+' : ''}{(item.impact * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ 
                            width: `${Math.abs(item.impact) * 100}%`,
                            backgroundColor: item.color,
                            marginLeft: item.impact < 0 ? 'auto' : '0'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-lg bg-muted/50">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Predicted Risk Probability</span>
                    <span className="text-2xl font-bold text-rose-500">78.4%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Model Performance Chart */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-emerald-500" />
                  Model Accuracy Over Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={modelPerformance}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border/30" />
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                    <YAxis domain={[80, 100]} tick={{ fontSize: 11 }} />
                    <Tooltip contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                    <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} name="Actual" />
                    <Line type="monotone" dataKey="predicted" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} name="Predicted" />
                  </LineChart>
                </ResponsiveContainer>
                
                <div className="mt-4 flex justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span>Actual Accuracy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-violet-500" />
                    <span>Predicted Accuracy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Model Capabilities Radar */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Model Performance Profile</h2>
              <p className="text-muted-foreground mb-8">
                Our AI models are optimized for enterprise supply chain use cases, balancing accuracy, speed, and explainability.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: 'Training Data Volume', value: '10M+ records' },
                  { label: 'Model Update Frequency', value: 'Real-time' },
                  { label: 'Inference Latency', value: '< 50ms' },
                  { label: 'Feature Dimensions', value: '250+ factors' }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 glass rounded-lg">
                    <span>{stat.label}</span>
                    <Badge variant="secondary">{stat.value}</Badge>
                  </div>
                ))}
              </div>
            </div>

            <Card className="glass p-6">
              <ResponsiveContainer width="100%" height={350}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="currentColor" className="stroke-border/30" />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
                  <Radar name="AI Model Score" dataKey="A" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                </RadarChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Agent Capabilities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">AI Agent Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Autonomous agents that monitor, analyze, and act on your supply chain
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass hover:border-primary/50 transition-all cursor-pointer group">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Activity className="h-7 w-7 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Monitoring Agent</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Continuously scans all data sources for anomalies and emerging risks.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" />24/7 surveillance</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" />Pattern recognition</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" />Auto-alerting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass hover:border-primary/50 transition-all cursor-pointer group">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-7 w-7 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Analysis Agent</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Deep-dive analysis when risks are detected, providing context and recommendations.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" />Root cause analysis</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" />Impact assessment</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" />Mitigation options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass hover:border-primary/50 transition-all cursor-pointer group">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-7 w-7 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Compliance Agent</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Tracks regulatory requirements and flags potential compliance gaps.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" />Regulatory tracking</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" />Gap analysis</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" />Audit support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="glass glow-violet p-12">
            <Sparkles className="h-16 w-16 text-violet-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Experience AI-Powered Intelligence</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              See how explainable AI can transform your supply chain risk management.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gap-2 px-8">
                Try AI Demo
                <Play className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 px-8">
                View Documentation
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
