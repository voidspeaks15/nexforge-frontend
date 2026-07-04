import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Billing() {
  const [selectedPlan, setSelectedPlan] = useState('starter')
  const [loading, setLoading] = useState(false)

  // Add Razorpay script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const plans = [
    { id: 'starter', name: 'STARTER', price: 9, videos: 3 },
    { id: 'creator', name: 'CREATOR', price: 19, videos: 10 },
    { id: 'pro', name: 'PRO', price: 49, videos: 30 }
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
      alert('Payment failed: ' + (err as any).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>💳 NEXFORGE Billing</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '30px' }}>
        {plans.map(plan => (
          <div
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)}
            style={{
              padding: '20px',
              border: selectedPlan === plan.id ? '2px solid #000' : '1px solid #ddd',
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor: selectedPlan === plan.id ? '#f0f0f0' : '#fff'
            }}
          >
            <h2>{plan.name}</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>₹{plan.price}/month</p>
            <p>{plan.videos} videos/day</p>
          </div>
        ))}
      </div>

      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          marginTop: '30px',
          padding: '15px 30px',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontSize: '16px',
          fontWeight: 'bold'
        }}
      >
        {loading ? 'Processing...' : '💳 Pay with Razorpay'}
      </button>
    </div>
  )
}
