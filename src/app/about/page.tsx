'use client'

import React from 'react'
import { 
  Info, Target, Eye, Heart, Users, Award,
  Globe, Zap, ArrowRight, Linkedin, Twitter,
  Github, Building2
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former VP of Supply Chain at GlobalTech. PhD in Operations Research from MIT.",
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Ex-Google AI Lead. Built ML systems serving billions of predictions daily.",
    avatar: "MR"
  },
  {
    name: "Emily Watson",
    role: "VP of Product",
    bio: "15 years in enterprise SaaS. Previously led product at Salesforce and ServiceNow.",
    avatar: "EW"
  },
  {
    name: "James Park",
    role: "VP of Engineering",
    bio: "Former Principal Engineer at Amazon AWS. Expert in distributed systems.",
    avatar: "JP"
  }
]

const values = [
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Mission-Driven",
    description: "We believe AI should make supply chains more resilient, transparent, and sustainable."
  },
  {
    icon: <Eye className="h-6 w-6 text-cyan-500" />,
    title: "Transparency First",
    description: "Every AI decision is explainable. No black boxes. Full SHAP attribution for every prediction."
  },
  {
    icon: <Heart className="h-6 w-6 text-rose-500" />,
    title: "Customer Success",
    description: "We measure our success by your outcomes. Our team is obsessed with customer value."
  },
  {
    icon: <Zap className="h-6 w-6 text-amber-500" />,
    title: "Innovation",
    description: "Continuously pushing boundaries in AI/ML to solve real-world supply chain challenges."
  }
]

const milestones = [
  { year: "2022", event: "Company founded by Dr. Sarah Chen and Michael Rodriguez" },
  { year: "2023", event: "Seed funding raised. First enterprise pilot launched" },
  { year: "2024", event: "Series A. 100+ enterprise customers onboarded" },
  { year: "2025", event: "Series B. Platform expanded to 8 industry verticals" },
  { year: "2026", event: "Global expansion. 500+ customers across 40 countries" }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 grid-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <Badge variant="outline" className="mb-6 gap-2">
            <Info className="h-4 w-4" />
            About Us
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            Making Supply Chains <span className="gradient-text">Smarter</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a team of supply chain experts, data scientists, and engineers 
            building AI that enterprises can trust.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            To democratize AI-powered supply chain intelligence, making it accessible, 
            explainable, and actionable for organizations of all sizes.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {values.map((value, idx) => (
              <Card key={idx} className="glass p-6">
                <CardContent className="p-0 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <Card key={idx} className="glass group hover:border-primary/50 transition-all text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {member.avatar}
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          
          <div className="space-y-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">{milestone.year}</span>
                  </div>
                  {idx < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <Card className="glass flex-1 mb-4">
                  <CardContent className="p-4">
                    <p>{milestone.event}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">$85M</div>
              <div className="text-muted-foreground">Funding Raised</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">180+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-muted-foreground">Enterprise Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">40+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Careers */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass p-8">
              <Building2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>📍 San Francisco, CA (HQ)</p>
                <p>📍 London, UK (EMEA)</p>
                <p>📍 Singapore (APAC)</p>
                <p>✉️ hello@aisupplychain.ai</p>
                <p>📞 +1 (888) 555-SUPPLY</p>
              </div>
              
              <div className="flex gap-3 mt-6">
                <Button variant="outline" size="icon"><Linkedin className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon"><Twitter className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon"><Github className="h-4 w-4" /></Button>
              </div>
            </Card>

            <Card className="glass p-8 bg-gradient-to-br from-primary/10 to-cyan-500/10">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented people who are passionate about 
                transforming supply chains with AI.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between p-3 glass rounded-lg">
                  <span>Senior ML Engineer</span>
                  <Badge variant="secondary">Remote</Badge>
                </div>
                <div className="flex justify-between p-3 glass rounded-lg">
                  <span>Supply Chain Consultant</span>
                  <Badge variant="secondary">SF/London</Badge>
                </div>
                <div className="flex justify-between p-3 glass rounded-lg">
                  <span>Full Stack Developer</span>
                  <Badge variant="secondary">Remote</Badge>
                </div>
              </div>
              
              <Button className="w-full gap-2">
                View All Openings
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
