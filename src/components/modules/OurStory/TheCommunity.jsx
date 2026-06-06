 'use client'

import Link from 'next/link'
import { Fragment, useEffect, useRef, useState } from 'react'

const STATS = [
  { value: '50k+', label: 'Happy Customers', numeric: 50, suffix: 'k+' },
  { value: '10k+', label: 'Products Listed', numeric: 10, suffix: 'k+' },
  { value: '150+', label: 'Global Brands', numeric: 150, suffix: '+' },
  { value: '4.9★', label: 'Avg Rating', numeric: 4, suffix: '.9★' },
]

const useCountUp = (target, duration = 1800, start = false) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime = null

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp

      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setCount(Math.floor(eased * target))

      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}

const StatItem = ({ numeric, suffix, label, animate }) => {
  const count = useCountUp(numeric, 1800, animate)

  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(2rem,5vw,2.8rem)',
          fontWeight: 800,
          color: '#00d2ff',
          letterSpacing: '-0.5px',
          textShadow: '0 0 20px rgba(0,210,255,0.35)',
          lineHeight: 1,
        }}
      >
        {animate ? `${count}${suffix}` : `0${suffix}`}
      </div>

      <div
        style={{
          fontSize: '0.65rem',
          fontWeight: 600,
          color: 'rgba(160,195,235,0.48)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginTop: '8px',
        }}
      >
        {label}
      </div>
    </div>
  )
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

.sb-comm {
  position: relative;
  padding: 96px 0;
  background: linear-gradient(180deg, #060a14 0%, #080e1c 50%, #060a14 100%);
  overflow: hidden;
  font-family: 'DM Sans', sans-serif;
}

.sb-comm::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(0,210,255,0.06) 1px, transparent 1px);
  background-size: 36px 36px;
  pointer-events: none;
}

.sb-comm-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 600px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,210,255,0.07) 0%, transparent 70%);
  pointer-events: none;
}

.sb-comm-inner {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
  position: relative;
  z-index: 1;
}

.sb-comm-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 14px;
  margin-bottom: 16px;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: 99px;
  border: 1px solid rgba(0,210,255,0.3);
  background: rgba(0,210,255,0.07);
  color: #00d2ff;
}

.sb-comm-badge-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #00d2ff;
  box-shadow: 0 0 7px rgba(0,210,255,0.9);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,100% { opacity:1; transform:scale(1); }
  50% { opacity:0.4; transform:scale(0.7); }
}

.sb-comm-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 800;
  color: #fff;
  letter-spacing: -1px;
  line-height: 1.1;
  margin-bottom: 20px;
}

.sb-comm-title span {
  color: #00d2ff;
}

.sb-comm-desc {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: rgba(170,200,235,0.55);
  line-height: 1.8;
  max-width: 620px;
  margin: 0 auto 56px;
}

.sb-comm-stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 52px;
  padding: 28px 32px;
  background: linear-gradient(160deg,#0d1526,#0a1020);
  border: 1px solid rgba(0,210,255,0.12);
  border-radius: 16px;
}

.sb-comm-stat-item {
  flex: 1;
  min-width: 120px;
  padding: 12px 16px;
}

.sb-comm-stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(0,210,255,0.12);
  align-self: center;
}

.sb-comm-cta {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 14px 32px;
  border-radius: 10px;
  background: linear-gradient(135deg, #00d2ff, #0055ff);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
}
`

export default function TheCommunity() {
  const sectionRef = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <section className="sb-comm">
        <div className="sb-comm-glow" />

        <div className="sb-comm-inner" ref={sectionRef}>
          <div className="sb-comm-badge">
            <span className="sb-comm-badge-dot" />
            Chapter IV
          </div>

          <h2 className="sb-comm-title">
            Powering the World's <br />
            <span>Tech Enthusiasts.</span>
          </h2>

          <p className="sb-comm-desc">
            SmartByte is more than a store — it's a community of curious minds,
            early adopters, and everyday people who believe the right technology
            can change everything.
          </p>

          <div className="sb-comm-stats">
            {STATS.map((stat, i) => (
              <Fragment key={stat.label}>
                <div className="sb-comm-stat-item">
                  <StatItem {...stat} animate={animate} />
                </div>

                {i < STATS.length - 1 && (
                  <div className="sb-comm-stat-divider" />
                )}
              </Fragment>
            ))}
          </div>

          <Link href="/shop" className="sb-comm-cta">
            Start Exploring
          </Link>
        </div>
      </section>
    </>
  )
}