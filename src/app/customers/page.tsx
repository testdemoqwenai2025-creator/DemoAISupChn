'use client'

import React from 'react'
import { 
  Star, Quote, Building2, ArrowRight,
  TrendingUp, Shield, Zap
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const testimonials = [
  {
    quote: "The AI risk predictions have been remarkably accurate. We've prevented 3 major disruptions in just 6 months.",
    author: "Jennifer Martinez",
    role: "VP Supply Chain",
    company: "GlobalTech Manufacturing",
    logo: "GT",
    results: ["45% reduction in disruptions", "$2.3M cost savings", "94% prediction accuracy"]
  },
  {
    quote: "Finally, explainable AI that our team trusts. The SHAP visualizations make it easy to understand why risks are flagged.",
    author: "David Chen",
    role: "Chief Procurement Officer",
    company: "InnovateCorp",
    logo: "IC",
    results: ["Faster decision making", "Team adoption 92%", "Audit-ready reports"]
  },
  {
    quote: "The compliance tracking alone saved us hundreds of hours. UFLPA and EUDR monitoring is now automated.",
    author: "Sarah Williams",
    role: "Director of Compliance",
    company: "EuroTrade Industries",
    logo: "ET",
    results: ["80% time savings", "Zero compliance violations", "Automated reporting"]
  }
]

const caseStudies = [
  {
    company: "Fortune 500 Automotive OEM",
    challenge: "Lack of visibility into Tier 2/3 suppliers causing production stoppages",
    solution: "Implemented multi-tier supplier mapping with AI risk scoring",
    results: "67% reduction in supply chain disruptions, $15M annual savings"
  },
  {
    company: "Global Pharmaceutical Leader",
    challenge: "Cold chain integrity monitoring across 40+ countries",
    solution: "Real-time IoT integration with predictive temperature alerts",
    results: "99.97% cold chain compliance, zero spoilage incidents in 18 months"
  },
  {
    company: "Major Retail Chain",
    challenge: "Demand forecasting accuracy leading to overstock/stockout issues",
    solution: "AI demand sensing with external data integration (weather, events)",
    results: "35% improvement in forecast accuracy, $8M inventory optimization"
  }
]

const stats = [
  { value: "500+", label: "Enterprise Customers" },
  { value: "50M+", label: "Suppliers Monitored" },
  { value: "99.9%", label: "Platform Uptime" },
  { value: "4.9/5", label: "Customer Satisfaction" }
]

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 grid-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <Badge variant="outline" className="mb-6 gap-2">
            <Star className="h-4 w-4" />
            Customer Success
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            Trusted by Industry <span className="gradient-text">Leaders</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how enterprises worldwide are transforming their supply chains with AI-powered intelligence.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="glass">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center text-white font-bold">
                      {testimonial.logo}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-primary">{testimonial.company}</div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key Results</p>
                    {testimonial.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-emerald-500" />
                        {result}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Case Studies</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {caseStudies.map((study, idx) => (
              <Card key={idx} className="glass hover:border-primary/50 transition-all">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-32 flex-shrink-0">
                      <Building2 className="h-12 w-12 text-primary" />
                      <div className="mt-2 text-sm font-semibold">{study.company.split(' ')[0]}</div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-rose-500 mb-1">Challenge</p>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-semibold text-emerald-500 mb-1">Solution</p>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                      
                      <div className="flex items-start gap-2 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                        <Zap className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-semibold text-emerald-700">Results:</span>
                          <span className="text-sm ml-2">{study.results}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="glass glow-emerald p-12">
            <Star className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Join Our Success Stories</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Ready to transform your supply chain? Start with a personalized demo.
            </p>
            <Button size="lg" className="gap-2 px-8">
              Request Demo
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Card>
        </div>
      </section>
    </div>
  )
}
