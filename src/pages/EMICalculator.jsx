import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function EMICalculator() {
  const [inputs, setInputs] = useState({
    loanAmount: 5000000,
    interestRate: 8.5,
    tenure: 20
  })

  const calculateEMI = () => {
    const principal = inputs.loanAmount
    const rate = inputs.interestRate / 12 / 100
    const months = inputs.tenure * 12

    const emi = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1)
    const totalAmount = emi * months
    const totalInterest = totalAmount - principal

    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      principal: principal
    }
  }

  const result = calculateEMI()

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl mb-4">EMI Calculator</h1>
            <p className="text-lg text-slate-200">
              Calculate your monthly loan payments instantly and plan your home purchase
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Input Section */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="font-heading text-2xl text-navy mb-6">Loan Details</h2>

            {/* Loan Amount */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Loan Amount</label>
                <span className="text-navy font-bold">₹ {inputs.loanAmount.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="100000"
                max="50000000"
                step="100000"
                value={inputs.loanAmount}
                onChange={(e) => setInputs({ ...inputs, loanAmount: Number(e.target.value) })}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-navy"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>₹1L</span>
                <span>₹5Cr</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Interest Rate (per annum)</label>
                <span className="text-navy font-bold">{inputs.interestRate}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="15"
                step="0.1"
                value={inputs.interestRate}
                onChange={(e) => setInputs({ ...inputs, interestRate: Number(e.target.value) })}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-navy"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>5%</span>
                <span>15%</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700">Loan Tenure</label>
                <span className="text-navy font-bold">{inputs.tenure} Years</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={inputs.tenure}
                onChange={(e) => setInputs({ ...inputs, tenure: Number(e.target.value) })}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-navy"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>1 Year</span>
                <span>30 Years</span>
              </div>
            </div>
          </motion.div>

          {/* Result Section */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Monthly EMI */}
            <div className="bg-gradient-to-br from-navy to-navy/90 text-white rounded-xl p-8 shadow-xl">
              <div className="text-sm text-slate-200 mb-2">Monthly EMI</div>
              <div className="text-5xl font-heading text-gold mb-2">
                ₹{result.emi.toLocaleString('en-IN')}
              </div>
              <div className="text-sm text-slate-300">per month for {inputs.tenure} years</div>
            </div>

            {/* Breakdown */}
            <div className="bg-white rounded-xl p-8 shadow-lg space-y-4">
              <h3 className="font-heading text-xl text-navy mb-4">Payment Breakdown</h3>
              
              <div className="flex justify-between py-3 border-b border-slate-200">
                <span className="text-slate-600">Principal Amount</span>
                <span className="font-bold text-navy">₹{result.principal.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="flex justify-between py-3 border-b border-slate-200">
                <span className="text-slate-600">Total Interest</span>
                <span className="font-bold text-navy">₹{result.totalInterest.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="flex justify-between py-3 pt-4">
                <span className="font-semibold text-slate-700">Total Amount Payable</span>
                <span className="font-bold text-navy text-xl">₹{result.totalAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Visual Breakdown */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="font-heading text-xl text-navy mb-4">Payment Distribution</h3>
              <div className="flex h-8 rounded-full overflow-hidden mb-4">
                <div 
                  className="bg-navy"
                  style={{ width: `${(result.principal / result.totalAmount) * 100}%` }}
                />
                <div 
                  className="bg-gold"
                  style={{ width: `${(result.totalInterest / result.totalAmount) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-navy" />
                  <span className="text-slate-600">Principal ({Math.round((result.principal / result.totalAmount) * 100)}%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-gold" />
                  <span className="text-slate-600">Interest ({Math.round((result.totalInterest / result.totalAmount) * 100)}%)</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-100 rounded-xl p-6 text-center">
              <p className="text-slate-700 mb-4">Ready to take the next step?</p>
              <a href="/contact" className="inline-block px-6 py-3 rounded-lg bg-navy text-white font-semibold hover:bg-navy/90 transition-colors">
                Get Pre-Approved
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="container mx-auto px-6 pb-16">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-4xl mx-auto">
          <p className="text-sm text-slate-600">
            <strong>Disclaimer:</strong> This calculator provides an estimate only. Actual EMI may vary based on 
            bank policies, processing fees, and other charges. Please consult with our financial advisors for 
            accurate loan details and the best financing options for your property purchase.
          </p>
        </div>
      </section>
    </div>
  )
}
