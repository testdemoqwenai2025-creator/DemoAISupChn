'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Shield, Activity, Brain, LineChart, AlertTriangle, 
  ArrowRight, Zap, Globe, Lock, TrendingUp,
  BarChart3, Eye, Target
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Visual Impact */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="w-2 h-2 bg-primary rounded-full pulse-dot" />
              <span className="text-sm font-medium text-primary">AI-Powered Risk Intelligence</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="gradient-text">Predict Disruptions</span>
              <br />
              <span className="text-foreground">Before They Happen</span>
            </h1>

            {/* Subheadline - Minimal */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Real-time supply chain risk intelligence powered by explainable AI
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="/dashboard">
                <Button size="lg" className="gap-2 px-8 h-14 text-lg glow-emerald">
                  <LayoutDashboardIcon />
                  Open Dashboard
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/command-center">
                <Button variant="outline" size="lg" className="gap-2 px-8 h-14 text-lg border-primary/30 hover:bg-primary/5">
                  <CommandCenterIcon />
                  Command Center
                </Button>
              </Link>
            </div>

            {/* Live Stats Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <StatCard icon={AlertTriangle} value="24" label="Active Alerts" color="rose" />
              <StatCard icon={Shield} value="847" label="Suppliers Monitored" color="emerald" />
              <StatCard icon={Brain} value="94%" label="Prediction Accuracy" color="violet" />
              <StatCard icon={Globe} value="42" label="Countries Covered" color="cyan" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Visual Only */}
      <section className="py-24 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<RiskIcon />}
              title="Risk Intelligence"
              description="SHAP-powered AI explanations"
              gradient="from-rose-500/20 to-orange-500/20"
            />
            <FeatureCard
              icon={<SupplyIcon />}
              title="Supply Directory"
              description="Complete supplier ecosystem"
              gradient="from-emerald-500/20 to-cyan-500/20"
            />
            <FeatureCard
              icon={<ForecastIcon />}
              title="Demand Forecasting"
              description="Predictive scenario modeling"
              gradient="from-violet-500/20 to-purple-500/20"
            />
            <FeatureCard
              icon={<ComplianceIcon />}
              title="Compliance Center"
              description="UFLPA · EUDR · CSDDD · GDPR"
              gradient="from-amber-500/20 to-yellow-500/20"
            />
            <FeatureCard
              icon={<LiveIcon />}
              title="Live Monitoring"
              description="Real-time alert streaming"
              gradient="from-cyan-500/20 to-blue-500/20"
            />
            <FeatureCard
              icon={<AiIcon />}
              title="Explainable AI"
              description="Transparent decision logic"
              gradient="from-primary/20 to-emerald-500/20"
            />
          </div>
        </div>
      </section>

      {/* Mini Dashboard Preview */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Command Center Overview</h2>
            <p className="text-muted-foreground">Visual intelligence at a glance</p>
          </div>
          
          <div className="glass rounded-2xl p-8 animated-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Risk Distribution */}
              <div className="space-y-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-rose-500" />
                  Risk Distribution
                </h3>
                <div className="space-y-3">
                  <RiskBar level="Critical" percentage={8} color="bg-rose-500" />
                  <RiskBar level="High" percentage={22} color="bg-orange-500" />
                  <RiskBar level="Medium" percentage={35} color="bg-amber-500" />
                  <RiskBar level="Low" percentage={35} color="bg-emerald-500" />
                </div>
              </div>

              {/* Regional Coverage */}
              <div className="space-y-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <Globe className="h-5 w-5 text-cyan-500" />
                  Global Coverage
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <RegionCard region="Asia Pacific" count={342} />
                  <RegionCard region="Europe" count={256} />
                  <RegionCard region="North America" count={189} />
                  <RegionCard region="Rest of World" count={60} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-12 glow-emerald">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Supply Chain?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Start monitoring risks with AI-powered intelligence today
            </p>
            <Link href="/command-center">
              <Button size="lg" className="gap-2 px-10">
                Launch Command Center
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-semibold">AI Supply Chain Risk Predictor</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Enterprise-grade AI risk intelligence platform
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* Sub Components */
function StatCard({ icon: Icon, value, label, color }: { icon: React.ElementType; value: string; label: string; color: string }) {
  const colors: Record<string, string> = {
    emerald: 'text-emerald-500',
    rose: 'text-rose-500',
    violet: 'text-violet-500',
    cyan: 'text-cyan-500',
  }
  
  return (
    <div className="glass rounded-xl p-4 glass-hover transition-all">
      <Icon className={`h-6 w-6 ${colors[color]} mb-2`} />
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  )
}

function FeatureCard({ icon, title, description, gradient }: { icon: React.ReactNode; title: string; description: string; gradient: string }) {
  return (
    <div className="group glass rounded-xl p-6 glass-hover transition-all cursor-pointer">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function RiskBar({ level, percentage, color }: { level: string; percentage: number; color: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{level}</span>
        <span className="text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full transition-all duration-1000`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}

function RegionCard({ region, count }: { region: string; count: number }) {
  return (
    <div className="glass rounded-lg p-3 flex items-center justify-between">
      <span className="text-sm">{region}</span>
      <span className="font-semibold text-primary">{count}</span>
    </div>
  )
}

/* Icon Components */
function LayoutDashboardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
  )
}

function CommandCenterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  )
}

function RiskIcon() {
  return <AlertTriangle className="h-6 w-6 text-rose-500" />
}
function SupplyIcon() {
  return <Globe className="h-6 w-6 text-emerald-500" />
}
function ForecastIcon() {
  return <TrendingUp className="h-6 w-6 text-violet-500" />
}
function ComplianceIcon() {
  return <Lock className="h-6 w-6 text-amber-500" />
}
function LiveIcon() {
  return <Activity className="h-6 w-6 text-cyan-500" />
}
function AiIcon() {
  return <Brain className="h-6 w-6 text-primary" />
}
