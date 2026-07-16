import React from 'react'
import { ArrowRight, Zap, BarChart3, CreditCard } from 'lucide-react'

interface LandingProps {
  onNavigate?: (page: string) => void;
}

export default function Landing({ onNavigate }: LandingProps) {
  return (
    <div style={{ backgroundColor: '#0a0e27', color: '#fff', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation */}
      <nav style={{
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(168, 85, 247, 0.2)',
        backdropFilter: 'blur(10px)'
      }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#a855f7' }}>🌑 NEXFORGE</h1>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#features" style={{ color: '#fff', textDecoration: 'none', cursor: 'pointer' }}>Features</a>
          <a href="#pricing" style={{ color: '#fff', textDecoration: 'none', cursor: 'pointer' }}>Pricing</a>
          <button onClick={() => onNavigate?.('auth')} style={{
            padding: '10px 20px',
            backgroundColor: '#a855f7',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: '100px 40px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a0f35 50%, #0a0e27 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background glow effect */}
        <div style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(60px)',
          zIndex: 0
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontSize: '56px',
            fontWeight: 'bold',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Automate Your AI Content Pipeline
          </h2>
          <p style={{ fontSize: '20px', color: '#cbd5e1', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Generate, optimize, and publish AI-powered content across YouTube, Instagram, and TikTok automatically.
          </p>
          <button onClick={() => onNavigate?.('auth')} style={{
            padding: '16px 40px',
            fontSize: '16px',
            backgroundColor: '#a855f7',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'all 0.3s ease'
          }}>
            Get Started <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', marginBottom: '60px' }}>
          Powerful Features
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {/* Feature 1 */}
          <div style={{
            padding: '30px',
            backgroundColor: 'rgba(168, 85, 247, 0.1)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}>
            <Zap size={40} color="#a855f7" style={{ marginBottom: '15px' }} />
            <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>AI-Powered Generation</h4>
            <p style={{ color: '#cbd5e1' }}>Generate quotes, images, and voiceovers powered by Groq, Cloudflare, and ElevenLabs</p>
          </div>

          {/* Feature 2 */}
          <div style={{
            padding: '30px',
            backgroundColor: 'rgba(168, 85, 247, 0.1)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)'
          }}>
            <BarChart3 size={40} color="#06b6d4" style={{ marginBottom: '15px' }} />
            <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Advanced Analytics</h4>
            <p style={{ color: '#cbd5e1' }}>Track views, likes, engagement with real-time charts and insights</p>
          </div>

          {/* Feature 3 */}
          <div style={{
            padding: '30px',
            backgroundColor: 'rgba(168, 85, 247, 0.1)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)'
          }}>
            <CreditCard size={40} color="#06b6d4" style={{ marginBottom: '15px' }} />
            <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Easy Monetization</h4>
            <p style={{ color: '#cbd5e1' }}>Flexible pricing tiers with live Razorpay payment integration</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{
        padding: '80px 40px',
        backgroundColor: 'rgba(168, 85, 247, 0.05)',
        borderTop: '1px solid rgba(168, 85, 247, 0.2)'
      }}>
        <h3 style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', marginBottom: '60px' }}>
          Simple Pricing
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Starter */}
          <div style={{
            padding: '40px',
            backgroundColor: '#1a1f3a',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h4 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>STARTER</h4>
            <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '20px' }}>Perfect for beginners</p>
            <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#a855f7', marginBottom: '20px' }}>₹9<span style={{ fontSize: '16px' }}>/month</span></p>
            <ul style={{ textAlign: 'left', color: '#cbd5e1', marginBottom: '30px', listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>✅ 3 videos/day</li>
              <li style={{ marginBottom: '10px' }}>✅ 5 genres</li>
              <li>✅ YouTube only</li>
            </ul>
            <button onClick={() => onNavigate?.('auth')} style={{
              width: '100%',
              padding: '12px',
              backgroundColor: 'transparent',
              border: '2px solid #a855f7',
              color: '#a855f7',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>Get Started</button>
          </div>

          {/* Creator */}
          <div style={{
            padding: '40px',
            backgroundColor: '#1a1f3a',
            border: '2px solid #a855f7',
            borderRadius: '12px',
            textAlign: 'center',
            position: 'relative',
            transform: 'scale(1.05)'
          }}>
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#a855f7',
              color: '#fff',
              padding: '5px 15px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>POPULAR</div>
            <h4 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', marginTop: '10px' }}>CREATOR</h4>
            <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '20px' }}>Most popular</p>
            <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#a855f7', marginBottom: '20px' }}>₹19<span style={{ fontSize: '16px' }}>/month</span></p>
            <ul style={{ textAlign: 'left', color: '#cbd5e1', marginBottom: '30px', listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>✅ 10 videos/day</li>
              <li style={{ marginBottom: '10px' }}>✅ 15 genres</li>
              <li>✅ YouTube + Instagram</li>
            </ul>
            <button onClick={() => onNavigate?.('auth')} style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#a855f7',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>Get Started</button>
          </div>

          {/* Pro */}
          <div style={{
            padding: '40px',
            backgroundColor: '#1a1f3a',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h4 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>PRO</h4>
            <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '20px' }}>For professionals</p>
            <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#a855f7', marginBottom: '20px' }}>₹49<span style={{ fontSize: '16px' }}>/month</span></p>
            <ul style={{ textAlign: 'left', color: '#cbd5e1', marginBottom: '30px', listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>✅ 30 videos/day</li>
              <li style={{ marginBottom: '10px' }}>✅ Unlimited genres</li>
              <li>✅ All platforms</li>
            </ul>
            <button onClick={() => onNavigate?.('auth')} style={{
              width: '100%',
              padding: '12px',
              backgroundColor: 'transparent',
              border: '2px solid #a855f7',
              color: '#a855f7',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>Get Started</button>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section style={{
        padding: '60px 40px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
        borderTop: '1px solid rgba(168, 85, 247, 0.2)'
      }}>
        <h3 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>Ready to Automate?</h3>
        <p style={{ fontSize: '18px', color: '#cbd5e1', marginBottom: '30px' }}>Start creating amazing AI content today</p>
        <button onClick={() => onNavigate?.('auth')} style={{
          padding: '16px 40px',
          fontSize: '16px',
          backgroundColor: '#a855f7',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>Launch App →</button>
      </section>
    </div>
  )
}
