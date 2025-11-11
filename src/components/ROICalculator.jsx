import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ROICalculator() {
  const [inputs, setInputs] = useState({
    propertyPrice: 12000000, // ₹1.2 Cr
    downPayment: 20,
    loanTenure: 20,
    interestRate: 8.5,
    appreciationRate: 7,
    rentalYield: 3,
    holdingPeriod: 5
  })

  const [results, setResults] = useState({
    totalInvestment: 0,
    futureValue: 0,
    rentalIncome: 0,
    totalReturns: 0,
    roi: 0,
    annualizedReturn: 0
  })

  useEffect(() => {
    calculateROI()
  }, [inputs])

  const calculateROI = () => {
    const downPaymentAmount = (inputs.propertyPrice * inputs.downPayment) / 100
    const loanAmount = inputs.propertyPrice - downPaymentAmount
    
    // Calculate future property value with appreciation
    const futureValue = inputs.propertyPrice * Math.pow(1 + inputs.appreciationRate / 100, inputs.holdingPeriod)
    
    // Calculate rental income (assuming annual rental income)
    const annualRentalIncome = (inputs.propertyPrice * inputs.rentalYield) / 100
    const totalRentalIncome = annualRentalIncome * inputs.holdingPeriod
    
    // Calculate total returns
    const capitalAppreciation = futureValue - inputs.propertyPrice
    const totalReturns = capitalAppreciation + totalRentalIncome
    
    // Calculate ROI
    const totalInvestment = downPaymentAmount
    const roi = ((totalReturns / totalInvestment) * 100)
    const annualizedReturn = (Math.pow(1 + roi / 100, 1 / inputs.holdingPeriod) - 1) * 100

    setResults({
      totalInvestment: totalInvestment,
      futureValue: futureValue,
      rentalIncome: totalRentalIncome,
      totalReturns: totalReturns,
      roi: roi,
      annualizedReturn: annualizedReturn
    })
  }

  const handleInputChange = (field, value) => {
    setInputs({ ...inputs, [field]: parseFloat(value) || 0 })
  }

  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`
    } else {
      return `₹${amount.toLocaleString('en-IN')}`
    }
  }

  return (
    <section id="roi-calculator" className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold font-semibold text-sm mb-4">
            INVESTMENT INSIGHTS
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-navy mb-4">
            Calculate Your <span className="text-gold">Investment Returns</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Get accurate projections of your property investment returns including rental yield and capital appreciation
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="font-heading text-2xl text-navy mb-6">Investment Parameters</h3>
            
            <div className="space-y-6">
              {/* Property Price */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Property Price: {formatCurrency(inputs.propertyPrice)}
                </label>
                <input
                  type="range"
                  min="1000000"
                  max="50000000"
                  step="100000"
                  value={inputs.propertyPrice}
                  onChange={(e) => handleInputChange('propertyPrice', e.target.value)}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-navy"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>₹10L</span>
                  <span>₹5Cr</span>
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Down Payment: {inputs.downPayment}% ({formatCurrency((inputs.propertyPrice * inputs.downPayment) / 100)})
                </label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={inputs.downPayment}
                  onChange={(e) => handleInputChange('downPayment', e.target.value)}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-gold"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>10%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Appreciation Rate */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Expected Appreciation Rate: {inputs.appreciationRate}% per year
                </label>
                <input
                  type="range"
                  min="3"
                  max="15"
                  step="0.5"
                  value={inputs.appreciationRate}
                  onChange={(e) => handleInputChange('appreciationRate', e.target.value)}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>3%</span>
                  <span>15%</span>
                </div>
              </div>

              {/* Rental Yield */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Annual Rental Yield: {inputs.rentalYield}% ({formatCurrency((inputs.propertyPrice * inputs.rentalYield) / 100)}/year)
                </label>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="0.5"
                  value={inputs.rentalYield}
                  onChange={(e) => handleInputChange('rentalYield', e.target.value)}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>1%</span>
                  <span>8%</span>
                </div>
              </div>

              {/* Holding Period */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Investment Period: {inputs.holdingPeriod} years
                </label>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={inputs.holdingPeriod}
                  onChange={(e) => handleInputChange('holdingPeriod', e.target.value)}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>1 year</span>
                  <span>30 years</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-navy via-navy/95 to-slate-900 rounded-2xl p-8 shadow-xl text-white">
              <h3 className="font-heading text-2xl mb-6">Investment Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-slate-300">Initial Investment</span>
                  <span className="text-xl font-bold">{formatCurrency(results.totalInvestment)}</span>
                </div>
                
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-slate-300">Future Property Value</span>
                  <span className="text-xl font-bold text-green-400">{formatCurrency(results.futureValue)}</span>
                </div>
                
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-slate-300">Total Rental Income</span>
                  <span className="text-xl font-bold text-blue-400">{formatCurrency(results.rentalIncome)}</span>
                </div>
                
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-slate-300">Capital Appreciation</span>
                  <span className="text-xl font-bold text-green-400">{formatCurrency(results.futureValue - inputs.propertyPrice)}</span>
                </div>
              </div>
            </div>

            {/* ROI Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gold to-gold/90 rounded-xl p-6 text-center shadow-lg"
              >
                <div className="text-navy/80 text-sm font-medium mb-2">Total ROI</div>
                <div className="text-4xl font-bold text-navy">{results.roi.toFixed(1)}%</div>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-center shadow-lg text-white"
              >
                <div className="text-white/80 text-sm font-medium mb-2">Annualized Return</div>
                <div className="text-4xl font-bold">{results.annualizedReturn.toFixed(1)}%</div>
              </motion.div>
            </div>

            {/* Total Returns Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-6 shadow-lg border-2 border-gold/20"
            >
              <div className="text-center">
                <div className="text-slate-600 text-sm mb-2">Expected Total Returns in {inputs.holdingPeriod} years</div>
                <div className="text-5xl font-bold text-navy mb-2">{formatCurrency(results.totalReturns)}</div>
                <div className="text-sm text-green-600 font-medium">
                  ↑ {((results.totalReturns / results.totalInvestment) * 100).toFixed(0)}% increase on your investment
                </div>
              </div>
            </motion.div>

            {/* Disclaimer */}
            <p className="text-xs text-slate-500 text-center">
              *These are estimated projections based on historical trends. Actual returns may vary depending on market conditions, location, and other factors.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
