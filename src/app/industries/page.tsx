'use client'

import React from 'react'
import { 
  Factory, Building2, ShoppingBag, Heart, Plane,
  Microchip, Car, UtensilsCrossed, ArrowRight, CheckCircle2
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const industries = [
  {
    icon: <Factory className="h-8 w-8 text-blue-500" />,
    name: 'Manufacturing',
    description: 'Complex multi-tier supply chains with global component sourcing',
    challenges: ['Component shortages', 'Quality control', 'Geopolitical risks'],
    solutions: ['Real-time supplier monitoring', 'Predictive disruption alerts', 'Quality scoring'],
    color: 'from-blue-500/20 to-cyan-500/20',
    stats: { customers: '200+', riskReduction: '45%' }
  },
  {
    icon: <Microchip className="h-8 w-8 text-violet-500" />,
    name: 'Technology & Electronics',
    description: 'Semiconductor dependencies and rapid innovation cycles',
    challenges: ['Chip shortages', 'IP protection', 'Lead time volatility'],
    solutions: ['Semiconductor tracking', 'Alternative supplier mapping', 'Demand sensing'],
    color: 'from-violet-500/20 to-purple-500/20',
    stats: { customers: '150+', riskReduction: '52%' }
  },
  {
    icon: <Car className="h-8 w-8 text-gray-600" />,
    name: 'Automotive',
    description: 'Just-in-time manufacturing with zero tolerance for disruptions',
    challenges: ['JIT dependencies', 'Tier N visibility', 'Regulatory compliance'],
    solutions: ['Multi-tier mapping', 'Production scheduling integration', 'EUDR/UFLPA compliance'],
    color: 'from-gray-500/20 to-slate-500/20',
    stats: { customers: '85+', riskReduction: '38%' }
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-pink-500" />,
    name: 'Retail & Consumer',
    description: 'Fast fashion cycles and omnichannel fulfillment demands',
    challenges: ['Demand volatility', 'Seasonal peaks', 'Sustainability pressure'],
    solutions: ['AI demand forecasting', 'Inventory optimization', 'ESG compliance tracking'],
    color: 'from-pink-500/20 to-rose-500/20',
    stats: { customers: '120+', riskReduction: '41%' }
  },
  {
    icon: <Heart className="h-8 w-8 text-red-500" />,
    name: 'Healthcare & Pharma',
    description: 'Critical cold-chain logistics and regulatory requirements',
    challenges: ['Cold chain integrity', 'Counterfeit prevention', 'Clinical trials'],
    solutions: ['Temperature monitoring', 'Authenticity verification', 'Supplier qualification'],
    color: 'from-red-500/20 to-rose-500/20',
    stats: { customers: '75+', riskReduction: '63%' }
  },
  {
    icon: <Plane className="h-8 w-8 text-emerald-500" />,
    name: 'Aerospace & Defense',
    description: 'Long lead times and strict certification requirements',
    challenges: ['Long-cycle parts', 'ITAR compliance', 'Single-source risk'],
    solutions: ['Program lifecycle management', 'Export control monitoring', 'Risk mitigation planning'],
    color: 'from-emerald-500/20 to-green-500/20',
    stats: { customers: '45+', riskReduction: '55%' }
  },
  {
    icon: <UtensilsCrossed className="h-8 w-8 text-orange-500" />,
    name: 'Food & Beverage',
    description: 'Perishable goods with safety and traceability requirements',
    challenges: ['Spoilage prevention', 'Food safety', 'Farm-to-fork traceability'],
    solutions: ['Shelf-life prediction', 'Safety alert system', 'Blockchain integration'],
    color: 'from-orange-500/20 to-amber-500/20',
    stats: { customers: '90+', riskReduction: '48%' }
  },
  {
    icon: <Building2 className="h-8 w-8 text-cyan-500" />,
    name: 'Energy & Utilities',
    description: 'Infrastructure projects with complex contractor networks',
    challenges: ['Project delays', 'Commodity price swings', 'ESG mandates'],
    solutions: ['Contractor risk assessment', 'Market intelligence', 'Carbon tracking'],
    color: 'from-cyan-500/20 to-blue-500/20',
    stats: { customers: '60+', riskReduction: '44%' }
  }
]

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 grid-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <Badge variant="outline" className="mb-6 gap-2">
            <Building2 className="h-4 w-4" />
            Industry Solutions
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            Built for Your <span className="gradient-text">Industry</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored AI supply chain intelligence for the unique challenges of each sector.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry, idx) => (
              <Card key={idx} className="group glass hover:scale-[1.01] transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      {industry.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{industry.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{industry.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Challenges</p>
                      <div className="space-y-1">
                        {industry.challenges.map((challenge, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                            {challenge}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Our Solutions</p>
                      <div className="space-y-1">
                        {industry.solutions.map((solution, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            {solution}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <div className="flex gap-4 text-sm">
                      <span><strong>{industry.stats.customers}</strong> customers</span>
                      <span><strong>{industry.stats.riskReduction}</strong> avg. risk reduction</span>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-1 group-hover:text-primary">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="glass p-12">
            <Building2 className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We customize our platform for unique industry requirements. Let's discuss your needs.
            </p>
            <Button size="lg" className="gap-2 px-8">
              Schedule Consultation
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Card>
        </div>
      </section>
    </div>
  )
}
