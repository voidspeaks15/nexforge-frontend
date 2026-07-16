import React, { useState } from 'react'
import axios from 'axios'
import { Check, Zap } from 'lucide-react'

export default function Billing() {
  const [selectedPlan, setSelectedPlan] = useState('starter')
  const [loading, setLoading] = useState(false)

  const plans = [
    {
      id: 'starter',
      name: 'STARTER',
      price: 9,
      videos: 3,
      features: ['3 videos/day', '5 genres', 'YouTube only', 'Basic analytics', 'Email support'],
      description: 'Perfect for beginners'
    },
    {
      id: 'creator',
      name: 'CREATOR',
      price: 19,
      videos: 10,
      features: ['10 videos/day', '15 genres', 'YouTube + Instagram', 'Advanced analytics', 'Priority support', 'API access'],
      description: 'Most popular',
      popular: true
    },
    {
      id: 'pro',
      name: 'PRO',
      price: 49,
      videos: 30,
      features: ['30 videos/day', 'Unlimited genres', 'All platforms', 'Real-time analytics', '24/7 phone support', 'Custom integrations'],
      description: 'For professionals'
    }
  ]

  const handlePayment = async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post(
        'https://nexforge-backend.onrender.com/api/razorpay/create-order',
        { planId: selectedPlan },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      const options = {
        key: 'rzp_live_T7QW3u95fvv3Hx',
        amount: response.data.amount,
        currency: response.data.currency,
        order_id: response.data.orderId,
        handler: (paymentResponse: any) => {
          alert('Payment successful! ' + paymentResponse.razorpay_payment_id)
        },
        prefill: {
          email: localStorage.getItem('email')
        }
      }

      const rzp = new (window as any).Razorpay(options)
      rzp.open()
    } catch (err) {
      alert('Payment failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      backgroundColor: '#0a0e27',
      color: '#fff',
      minHeight: '100vh',
      padding: '40px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' }}>
          💳 Simple Pricing
        </h1>
        <p style={{ color: '#cbd5e1', fontSize: '16px' }}>
          Choose the perfect plan for your content creation needs
        </p>
      </div>

      {/* Pricing Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: '60px'
      }}>
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)}
            style={{
              position: 'relative',
              padding: '40px',
              backgroundColor: 'rgba(26, 31, 58, 0.8)',
              border: selectedPlan === plan.id
                ? '2px solid #a855f7'
                : plan.popular
                ? '2px solid #a855f7'
                : '1px solid rgba(168, 85, 247, 0.3)',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: selectedPlan === plan.id ? 'scale(1.05)' : 'scale(1)'
            }}
            onMouseEnter={(e) => {
              if (selectedPlan !== plan.id) {
                e.currentTarget.style.borderColor = '#a855f7'
                e.currentTarget.style.transform = 'translateY(-5px)'
              }
            }}
            onMouseLeave={(e) => {
              if (selectedPlan !== plan.id) {
                e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)'
                e.currentTarget.style.transform = 'scale(1)'
              }
            }}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#a855f7',
                color: '#fff',
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <Zap size={14} />
                MOST POPULAR
              </div>
            )}

            {/* Plan Name */}
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px', marginTop: plan.popular ? '10px' : '0' }}>
              {plan.name}
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '14px', marginBottom: '20px' }}>
              {plan.description}
            </p>

            {/* Price */}
            <div style={{ marginBottom: '25px' }}>
              <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#a855f7' }}>
                ₹{plan.price}
              </span>
              <span style={{ color: '#cbd5e1', fontSize: '16px' }}>/month</span>
            </div>

            {/* Videos Per Day */}
            <div style={{
              padding: '12px',
              backgroundColor: 'rgba(168, 85, 247, 0.1)',
              borderRadius: '8px',
              marginBottom: '25px',
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#a855f7'
            }}>
              {plan.videos} Videos/Day
            </div>

            {/* Features */}
            <ul style={{
              listStyle: 'none',
              padding: '0',
              marginBottom: '30px'
            }}>
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  style={{
                    padding: '12px 0',
                    borderBottom: '1px solid rgba(168, 85, 247, 0.1)',
                    color: '#cbd5e1',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <Check size={18} color="#10b981" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              onClick={handlePayment}
              disabled={loading}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: selectedPlan === plan.id
                  ? '#a855f7'
                  : 'transparent',
                color: selectedPlan === plan.id ? '#fff' : '#a855f7',
                border: selectedPlan === plan.id
                  ? '2px solid #a855f7'
                  : '2px solid #a855f7',
                borderRadius: '8px',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontWeight: 'bold',
                fontSize: '16px',
                transition: 'all 0.3s ease'
              }}
            >
              {loading ? 'Processing...' : 'Choose Plan'}
            </button>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'rgba(168, 85, 247, 0.05)',
        border: '1px solid rgba(168, 85, 247, 0.2)',
        borderRadius: '12px',
        padding: '40px'
      }}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '25px', textAlign: 'center' }}>
          Frequently Asked Questions
        </h3>

        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '8px', color: '#a855f7' }}>
            Can I change my plan anytime?
          </p>
          <p style={{ color: '#cbd5e1', margin: '0' }}>
            Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '8px', color: '#a855f7' }}>
            Is there a free trial?
          </p>
          <p style={{ color: '#cbd5e1', margin: '0' }}>
            Yes! Start with our STARTER plan at ₹9/month or contact us for a custom trial.
          </p>
        </div>

        <div>
          <p style={{ fontWeight: 'bold', marginBottom: '8px', color: '#a855f7' }}>
            What payment methods do you accept?
          </p>
          <p style={{ color: '#cbd5e1', margin: '0' }}>
            We accept all major credit/debit cards, UPI, and digital wallets via Razorpay.
          </p>
        </div>
      </div>

      {/* Script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </div>
  )
}
