'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Shield, Brain, Zap, Globe, BarChart3, Lock, Cpu,
  ArrowRight, CheckCircle2, Star, Box, Layers
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const products = [
  {
    icon: <Shield className="h-8 w-8 text-emerald-500" />,
    title: 'Risk Intelligence Platform',
    description: 'Real-time risk monitoring and prediction across your entire supply chain',
    features: ['Predictive Risk Scoring', 'Early Warning System', 'SHAP Explainability', 'Alert Management'],
    cta: 'Explore Risk Intel',
    href: '/command-center',
    color: 'from-emerald-500/20 to-green-500/20'
  },
  {
    icon: <Brain className="h-8 w-8 text-violet-500" />,
    title: 'AI/ML Engine',
    description: 'Advanced machine learning models for demand forecasting and anomaly detection',
    features: ['Demand Forecasting', 'Anomaly Detection', 'Pattern Recognition', 'Model Training'],
    cta: 'View AI Capabilities',
    href: '/intelligence',
    color: 'from-violet-500/20 to-purple-500/20'
  },
  {
    icon: <Globe className="h-8 w-8 text-cyan-500" />,
    title: 'Supplier Directory',
    description: 'Comprehensive supplier management with multi-tier visibility',
    features: ['Supplier Database', 'Tier Mapping', 'Performance Tracking', 'Compliance Status'],
    cta: 'Browse Suppliers',
    href: '/dashboard',
    color: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: 'Compliance Center',
    description: 'Regulatory framework tracking across global jurisdictions',
    features: ['UFLPA Monitoring', 'EUDR Compliance', 'CSDDD Tracking', 'GDPR Alignment'],
    cta: 'Check Compliance',
    href: '/command-center',
    color: 'from-primary/20 to-emerald-500/20'
  },
  {
    icon: <Zap className="h-8 w-8 text-amber-500" />,
    title: 'Alert Hub',
    description: 'Real-time intelligent alerts with smart escalation workflows',
    features: ['WebSocket Streaming', 'Smart Routing', 'Mobile Push', 'Integration Hub'],
    cta: 'See Alerts',
    href: '/dashboard',
    color: 'from-amber-500/20 to-orange-500/20'
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-rose-500" />,
    title: 'Analytics Suite',
    description: 'Business intelligence dashboards and custom reporting',
    features: ['Custom Dashboards', 'Scheduled Reports', 'Data Export', 'API Access'],
    cta: 'Try Analytics',
    href: '/platform',
    color: 'from-rose-500/20 to-pink-500/20'
  }
]

const pricing = [
  { name: 'Starter', price: '$2,499', period: '/month', description: 'For small teams getting started', features: ['50 Suppliers', 'Basic Risk Scoring', 'Email Alerts', 'Dashboard Access'], cta: 'Start Free Trial' },
  { name: 'Professional', price: '$7,999', period: '/month', description: 'For growing supply chain operations', popular: true, features: ['500 Suppliers', 'AI Predictions', 'SHAP Explanations', 'API Access', 'Priority Support'], cta: 'Start Free Trial' },
  { name: 'Enterprise', price: 'Custom', period: '', description: 'For large-scale operations', features: ['Unlimited Suppliers', 'Custom Models', 'Dedicated Support', 'SLA Guarantee', 'On-premise Option'], cta: 'Contact Sales' }
]

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 gap-2">
              <Box className="h-4 w-4" />
              Product Suite
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6">
              Complete AI Supply Chain <span className="gradient-text">Platform</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Six integrated modules working together to provide end-to-end supply chain intelligence, 
              from risk prediction to compliance automation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gap-2 px-8">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 px-8">
                Schedule Demo
              </Button>
              <Button variant="ghost" size="lg" className="gap-2 px-8">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Platform Modules</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each product integrates seamlessly with the others for unified intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <Card key={idx} className="group glass hover:scale-[1.02] transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    {product.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={product.href}>
                    <Button variant="outline" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {product.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, idx) => (
              <Card key={idx} className={`relative glass ${plan.popular ? 'border-primary ring-2 ring-primary/20' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-cyan-500">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-cyan-500' : ''}`}>
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Works With Your Stack</h2>
            <p className="text-muted-foreground">Pre-built integrations with leading enterprise platforms</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {['SAP', 'Oracle', 'Salesforce', 'ServiceNow', 'Workday', 'Kinaxis', 'Blue Yonder', 'Coupa', 'SAP Ariba', 'JDA', 'Manhattan', 'E2open'].map((name) => (
              <Card key={name} className="px-6 py-3 hover:border-primary/50 transition-colors cursor-pointer">
                <span className="font-medium">{name}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
