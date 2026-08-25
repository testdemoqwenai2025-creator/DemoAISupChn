'use client'

import React from 'react'
import { 
  ShieldAlert, Activity, ArrowRight, Zap, Clock, Shield,
  Globe, Brain, Gavel, LineChart, DatabaseZap, ShieldAlert as ShieldIcon
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTheme } from '@/app/page'

export function LandingPage() {
  const { theme } = useTheme()
  const router = useRouter()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-black' : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'} transition-colors duration-300`}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 shadow-2xl shadow-cyan-500/25">
                <ShieldAlert className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              AI Supply Chain
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Command Center
              </span>
            </h1>
            <p className={`text-xl sm:text-2xl max-w-3xl mx-auto mb-10 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Enterprise-grade risk intelligence powered by AI
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg px-8 py-6 shadow-xl shadow-cyan-500/25"
                onClick={() => router.push('/command-center')}
              >
                Launch Command Center
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className={`text-lg px-8 py-6 ${theme === 'dark' ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'}`}
                onClick={() => router.push('/dashboard')}
              >
                View Dashboard
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: '99.9%', label: 'Uptime', icon: Activity },
                { value: '<2min', label: 'Response', icon: Zap },
                { value: '50+', label: 'Risk Factors', icon: Shield },
                { value: '24/7', label: 'Monitoring', icon: Clock },
              ].map((stat, i) => (
                <div key={i} className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50 border border-gray-800' : 'bg-white/80 border border-gray-200'} backdrop-blur`}>
                  <stat.icon className={`w-6 h-6 mx-auto mb-2 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{stat.value}</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-black/20' : 'bg-gray-50/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: 'AI Analytics', desc: 'SHAP explainable AI for transparent predictions' },
              { icon: Globe, title: 'Global Visibility', desc: 'Real-time monitoring across all regions' },
              { icon: Gavel, title: 'Compliance Engine', desc: 'UFLPA, EUDR, CSDDD, SOX, GDPR, REACH' },
              { icon: LineChart, title: 'Demand Forecasting', desc: 'ML-powered predictions with confidence intervals' },
              { icon: ShieldIcon, title: 'Threat Intelligence', desc: 'Live alert streaming with automated response' },
              { icon: DatabaseZap, title: 'Supplier Directory', desc: 'Complete profiles with 50+ data points each' },
            ].map((feature, i) => (
              <Card key={i} className={`${theme === 'dark' ? 'bg-gray-900/50 border-gray-800 hover:border-cyan-500/50' : 'bg-white border-gray-200 hover:border-cyan-300'} transition-all group`}>
                <CardContent className="p-6">
                  <feature.icon className={`w-10 h-10 mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} group-hover:scale-110 transition-transform`} />
                  <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Card className={`${theme === 'dark' ? 'bg-gradient-to-r from-cyan-950 to-purple-950 border-cyan-500/20' : 'bg-gradient-to-r from-cyan-50 to-purple-50 border-cyan-200'}`}>
            <CardContent className="p-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Transform your supply chain?</h2>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                onClick={() => router.push('/command-center')}
              >
                Enter Command Center
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
