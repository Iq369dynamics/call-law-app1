import { useState, useEffect, useCallback } from 'react'
import emailjs from '@emailjs/browser'
import './SignupModal.css'

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
  'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming',
]

const SERVICES = [
  { id: 'personal', icon: '🛡️', name: 'Personal Legal Protection' },
  { id: 'business', icon: '💼', name: 'Business & Contract Law' },
  { id: 'family', icon: '🏠', name: 'Family & Estate Law' },
  { id: 'criminal', icon: '⚖️', name: 'Criminal Defense' },
  { id: 'employment', icon: '👔', name: 'Employment & Labor' },
  { id: 'immigration', icon: '🌎', name: 'Immigration Services' },
]

const SERVICE_LABELS = {
  personal: '🛡️ Personal Legal Protection',
  business: '💼 Business & Contract Law',
  family: '🏠 Family & Estate Law',
  criminal: '⚖️ Criminal Defense',
  employment: '👔 Employment & Labor',
  immigration: '🌎 Immigration Services',
}

const LAUNCH_DATE = new Date('2026-07-04T00:00:00')
const EXIT_ANIMATION_MS = 350

function SignupModal({ open, onClose }) {
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const [shouldRender, setShouldRender] = useState(open)
  const [isClosing, setIsClosing] = useState(false)
  const [step, setStep] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [barFill, setBarFill] = useState(0)
  const [countdown, setCountdown] = useState({ d: '--', h: '--', m: '--', s: '--' })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [state, setState] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedService, setSelectedService] = useState('')

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    state: '',
    service: '',
  })

  const resetForm = useCallback(() => {
    setStep(1)
    setShowSuccess(false)
    setIsSubmitting(false)
    setSubmitError('')
    setBarFill(0)
    setName('')
    setEmail('')
    setState('')
    setPhone('')
    setSelectedService('')
    setErrors({ name: '', email: '', state: '', service: '' })
  }, [])

  useEffect(() => {
    if (open) {
      setShouldRender(true)
      setIsClosing(false)
      return undefined
    }

    if (!shouldRender) return undefined

    setIsClosing(true)
    const t = setTimeout(() => {
      setShouldRender(false)
      setIsClosing(false)
      resetForm()
    }, EXIT_ANIMATION_MS)

    return () => clearTimeout(t)
  }, [open, resetForm, shouldRender])

  useEffect(() => {
    if (!shouldRender) return undefined

    document.body.style.overflow = 'hidden'

    const barTimer = setTimeout(() => {
      setBarFill(Math.floor(Math.random() * 36) + 40)
    }, 900)

    const updateCountdown = () => {
      let diff = LAUNCH_DATE - new Date()
      if (diff < 0) diff = 0
      const d = Math.floor(diff / 86400000)
      const h = Math.floor((diff % 86400000) / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      setCountdown({
        d: String(d).padStart(2, '0'),
        h: String(h).padStart(2, '0'),
        m: String(m).padStart(2, '0'),
        s: String(s).padStart(2, '0'),
      })
    }

    updateCountdown()
    const countdownInterval = setInterval(updateCountdown, 1000)

    return () => {
      document.body.style.overflow = ''
      clearTimeout(barTimer)
      clearInterval(countdownInterval)
    }
  }, [shouldRender])

  useEffect(() => {
    if (!open || isClosing) return undefined

    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [open, onClose, isClosing])

  if (!shouldRender) return null

  const handleOverlayClick = (e) => {
    if (isClosing) return
    if (e.target === e.currentTarget) onClose()
  }

  const handleNextStep = () => {
    const nextErrors = { name: '', email: '', state: '', service: '' }
    let ok = true

    if (!name.trim()) {
      nextErrors.name = 'Full name is required'
      ok = false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email'
      ok = false
    }
    if (!state) {
      nextErrors.state = 'Please select your state'
      ok = false
    }

    setErrors(nextErrors)
    if (!ok) return

    setStep(2)
  }

  const handleBack = () => {
    setStep(1)
    setErrors((prev) => ({ ...prev, service: '' }))
  }

  const handleSubmit = async () => {
    if (isSubmitting) return

    if (!selectedService) {
      setErrors((prev) => ({ ...prev, service: 'Please select a service to continue' }))
      return
    }

    if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
      setSubmitError('Signup is temporarily unavailable. Please try again shortly.')
      return
    }

    setSubmitError('')
    setIsSubmitting(true)

    try {
      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          full_name: name.trim(),
          email: email.trim(),
          state: state.trim(),
          phone: phone.trim() || 'N/A',
          service: SERVICE_LABELS[selectedService] || selectedService,
        },
        { publicKey: emailJsPublicKey }
      )

      setShowSuccess(true)
    } catch {
      setSubmitError('Could not submit your signup right now. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const firstName = name.trim().split(' ')[0]

  return (
    <div
      className={`signup-modal-overlay${isClosing ? ' closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="signup-modal-title"
      onClick={handleOverlayClick}
    >
      <div
        className={`signup-modal${isClosing ? ' closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cla-header-band">
          <button
            type="button"
            className="cla-close"
            onClick={() => {
              if (!isClosing) onClose()
            }}
            aria-label="Close signup"
          >
            ✕
          </button>
          <div className="cla-logo">calllawapp.com</div>
          <div className="cla-flag-badge">
            <span className="cla-pulse" />
            Launching July 4th
          </div>
          <h1 id="signup-modal-title" className="cla-headline">
            Legal Protection,
            <br />
            <span>Always Within Reach</span>
          </h1>
          <p className="cla-subhead">
            Sign up before July 4th for a chance to win
            <br />
            <strong>one full year of free legal coverage</strong> — no cost, no catch.
          </p>
        </div>

        <div className="cla-spots">
          <div className="cla-spots-top">
            <span className="cla-spots-label">🎯 Early Access Spots Filling Up</span>
            <span className="cla-spots-tag">⚡ First 1,000 Only</span>
          </div>
          <div className="cla-bar-track">
            <div className="cla-bar-fill" style={{ width: `${barFill}%` }} />
          </div>
          <p className="cla-spots-note">Sign up early to secure your place in the first 1,000</p>
        </div>

        <div className="cla-countdown-wrap">
          <span className="cla-countdown-label">🇺🇸 Launch in:</span>
          <div className="cla-countdown">
            <div className="cla-cu">
              <span className="cla-cn">{countdown.d}</span>
              <span className="cla-cl">Days</span>
            </div>
            <span className="cla-sep">:</span>
            <div className="cla-cu">
              <span className="cla-cn">{countdown.h}</span>
              <span className="cla-cl">Hrs</span>
            </div>
            <span className="cla-sep">:</span>
            <div className="cla-cu">
              <span className="cla-cn">{countdown.m}</span>
              <span className="cla-cl">Min</span>
            </div>
            <span className="cla-sep">:</span>
            <div className="cla-cu">
              <span className="cla-cn">{countdown.s}</span>
              <span className="cla-cl">Sec</span>
            </div>
          </div>
        </div>

        <div className="cla-cta">
          <p className="cla-cta-eyebrow">🏆 Limited Offer — 1,000 Spots Only</p>
          <h2 className="cla-cta-headline">A Full Year of Powerful Legal Coverage, On Us.</h2>
          <p className="cla-cta-body">
            We&apos;re giving <strong>1,000 clients</strong> a full year of free legal coverage through our
            Single Coverage Package — high-quality, professional legal service right at your fingertips.
            Don&apos;t miss your chance to secure the protection you deserve. <strong>Sign up today.</strong>
          </p>
          <div className="cla-cta-pills">
            <span className="cla-cta-pill">⚖️ Full Legal Coverage</span>
            <span className="cla-cta-pill">📞 On-Call Attorneys</span>
            <span className="cla-cta-pill">🆓 1 Year Free</span>
            <span className="cla-cta-pill">🗓️ July 4th Launch</span>
          </div>
        </div>

        {!showSuccess ? (
          <div className="cla-body">
            <div className="cla-steps">
              <div className={`cla-step ${step >= 1 ? 'active' : ''}`} />
              <div className={`cla-step ${step >= 2 ? 'active' : ''}`} />
            </div>
            <p className="cla-step-label">
              {step === 1 ? 'Step 1 of 2 — Your Details' : 'Step 2 of 2 — Your Service'}
            </p>

            {step === 1 && (
              <div>
                <div className="cla-field">
                  <label className="cla-label" htmlFor="cla-name">
                    Full Name *
                  </label>
                  <input
                    className={`cla-input ${errors.name ? 'err' : ''}`}
                    id="cla-name"
                    type="text"
                    placeholder="Jane Smith"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                      if (errors.name) setErrors((prev) => ({ ...prev, name: '' }))
                    }}
                  />
                  {errors.name && <span className="cla-err">{errors.name}</span>}
                </div>

                <div className="cla-field">
                  <label className="cla-label" htmlFor="cla-email">
                    Email Address *
                  </label>
                  <input
                    className={`cla-input ${errors.email ? 'err' : ''}`}
                    id="cla-email"
                    type="email"
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (errors.email) setErrors((prev) => ({ ...prev, email: '' }))
                    }}
                  />
                  {errors.email && <span className="cla-err">{errors.email}</span>}
                </div>

                <div className="cla-row">
                  <div className="cla-field">
                    <label className="cla-label" htmlFor="cla-state">
                      State of Residence *
                    </label>
                    <select
                      className={`cla-select ${errors.state ? 'err' : ''}`}
                      id="cla-state"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value)
                        if (errors.state) setErrors((prev) => ({ ...prev, state: '' }))
                      }}
                    >
                      <option value="">Select state…</option>
                      {US_STATES.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                    {errors.state && <span className="cla-err">{errors.state}</span>}
                  </div>
                  <div className="cla-field">
                    <label className="cla-label" htmlFor="cla-phone">
                      Phone <span className="cla-optional">(optional)</span>
                    </label>
                    <input
                      className="cla-input"
                      id="cla-phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <button type="button" className="cla-btn" onClick={handleNextStep}>
                  Continue — Choose Your Service →
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <p className="cla-service-intro">Which legal service matters most to you?</p>
                {errors.service && (
                  <span className="cla-err" style={{ display: 'block', marginBottom: 8 }}>
                    {errors.service}
                  </span>
                )}
                <div className="cla-services">
                  {SERVICES.map((service) => (
                    <div
                      key={service.id}
                      className={`cla-service ${selectedService === service.id ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedService(service.id)
                        setErrors((prev) => ({ ...prev, service: '' }))
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          setSelectedService(service.id)
                          setErrors((prev) => ({ ...prev, service: '' }))
                        }
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      <span className="cla-service-icon">{service.icon}</span>
                      <span className="cla-service-name">{service.name}</span>
                    </div>
                  ))}
                </div>

                <button type="button" className="cla-btn" onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : '🎇 Secure My Free Spot'}
                </button>
                {submitError && (
                  <span className="cla-err" style={{ display: 'block', marginTop: 8 }}>
                    {submitError}
                  </span>
                )}
                <button type="button" className="cla-back" onClick={handleBack}>
                  ← Back to details
                </button>
              </div>
            )}

            <div className="cla-trust">
              <span className="cla-trust-item">🔒 Secure & Private</span>
              <span className="cla-trust-item">✅ No Payment Required</span>
              <span className="cla-trust-item">📧 No Spam, Ever</span>
            </div>

            <p className="cla-disclaimer">
              No payment required. By submitting you agree to be contacted about Call Law App&apos;s July 4th
              launch. Free single-coverage package awarded by sweepstakes to eligible sign-ups among the
              first 1,000. Terms apply.
            </p>
          </div>
        ) : (
          <div className="cla-success">
            <div className="cla-success-icon">🎉</div>
            <h2 className="cla-success-head">You&apos;re on the list!</h2>
            <p className="cla-success-sub">
              Welcome, <strong>{firstName}</strong>.
              <br />
              We&apos;ll reach you at <strong style={{ color: '#0F2F6E' }}>{email.trim()}</strong>
              <br />
              before our July 4th launch.
            </p>
            <div className="cla-success-card">
              <div className="cla-success-card-label">Your Entry</div>
              <div className="cla-success-card-value">
                {SERVICE_LABELS[selectedService] || selectedService}
              </div>
              <div className="cla-success-card-sub">{state}</div>
            </div>
            <div className="cla-success-note">
              🇺🇸 Launching July 4th · <strong>calllawapp.com</strong>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SignupModal
