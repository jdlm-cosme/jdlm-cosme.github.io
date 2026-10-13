import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowDown, ArrowDownToLine, ArrowRight, ArrowUpRight, CarFront, Check, ChevronRight, Facebook, Mail, MapPin, Menu, MessageCircle, Music2, Phone, ShieldCheck, X } from 'lucide-react'

export const Route = createFileRoute('/')({ component: MarketingPage })

const contact = {
  phone: '+639764130718',
  phoneDisplay: '+63 976 413 0718',
  email: 'kimberlygallardo1510@gmail.com',
  whatsapp: 'https://wa.me/639764130718',
  viber: 'viber://chat?number=%2B639764130718',
  facebook: 'https://www.facebook.com/p/Kim-Giron-Toyota-Silang-61595227050259/',
  tiktok: 'https://www.tiktok.com/@kimgrn1?is_from_webapp=1&sender_device=pc',
}

function MarketingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)

  async function copyNumber() {
    try {
      await navigator.clipboard.writeText(contact.phone)
      setCopied(true)
      setCopyFailed(false)
      window.setTimeout(() => setCopied(false), 3000)
    } catch {
      setCopyFailed(true)
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#" aria-label="Kim Giron at Toyota Silang home"><img className="brand-logo" src="/.netlify/images?url=/img/toyota-silang-logo.png&w=560" alt="Toyota Silang, Cavite" width="1140" height="225" /></a>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          <nav id="main-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
            <a href="#about" onClick={() => setMenuOpen(false)}>Meet Kim</a>
            <a href="#connect" onClick={() => setMenuOpen(false)}>Stay connected</a>
            <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight size={16} /></a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> YOUR TOYOTA JOURNEY STARTS HERE</div>
            <h1 id="hero-title">A new drive.<br />A new chapter.<br /><span>Let’s find yours.</span></h1>
            <p className="hero-description">Hi, I’m Kim Giron, your Marketing Professional at <strong>Toyota Silang, Cavite.</strong> Here to make finding your next Toyota feel a little more personal.</p>
            <div className="hero-actions"><a className="button button-primary" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">Let’s find your Toyota <ArrowUpRight size={19} /></a><a className="call-link" href={`tel:${contact.phone}`}><Phone size={17} /> Give me a call</a></div>
            <div className="hero-location"><MapPin size={15} /><span>Silang, Cavite, Philippines</span><span className="location-separator" /><span>Personal guidance. Every step.</span></div>
          </div>
          <div className="hero-visual">
            <div className="image-frame showroom-photo">
              <img className="hero-image" src="/img/toyota-showroom-original.jpg" alt="White Toyota displayed inside a showroom with a racing-themed wall and seating area" width="2048" height="1536" fetchPriority="high" />
              <span className="image-label"><MapPin size={13} /> A LOOK INSIDE THE SHOWROOM</span>
              <div className="profile-card"><div className="profile-monogram">kg.</div><div><strong>Kim Giron</strong><span>Your Toyota Marketing Professional</span></div><span className="profile-check"><Check size={17} /></span></div>
            </div>
            <div className="image-caption"><span>THE ROAD AHEAD LOOKS GOOD.</span><span>01 / YOUR NEXT CHAPTER</span></div>
          </div>
        </section>
        <section id="about" className="about-section">
          <div className="container about-inner">
            <div className="about-intro"><span className="eyebrow">MORE THAN A CAR. YOUR NEXT CHAPTER.</span><h2>A familiar face.<br />A helping hand.</h2><p>From your first question to your showroom visit, let’s make your Toyota journey clear, comfortable, and all about you.</p></div>
            <div className="service-list">
              <div className="service"><CarFront size={23} strokeWidth={1.5} /><div><h3>Find your fit</h3><p>Let’s talk about the Toyota that suits your lifestyle, plans, and everyday drive.</p></div><span>01</span></div>
              <div className="service"><ShieldCheck size={23} strokeWidth={1.5} /><div><h3>Get clear answers</h3><p>Ask about quotations, available units, and financing options. I’m here to help.</p></div><span>02</span></div>
              <div className="service"><MapPin size={23} strokeWidth={1.5} /><div><h3>Plan your visit</h3><p>Get in touch to arrange a showroom visit or ask about a test drive at Toyota Silang.</p></div><span>03</span></div>
            </div>
          </div>
        </section>
        <section id="connect" className="connect-section container">
          <div className="section-heading"><div><span className="eyebrow">A LITTLE MORE CONNECTED</span><h2>See what’s on the horizon.</h2></div><p>Car stories, updates, and a glimpse of life<br className="desktop-break" /> at Toyota Silang. Follow along.</p></div>
          <div className="social-grid">
            <a className="social-card facebook-card" href={contact.facebook} target="_blank" rel="noopener noreferrer"><span className="social-icon"><Facebook size={25} fill="currentColor" strokeWidth={1.3} /></span><div><span className="social-platform">FACEBOOK</span><h3>Kim Giron · Toyota Silang</h3><p>Let’s keep in touch.</p></div><span className="social-arrow"><ArrowUpRight size={23} /></span></a>
            <a className="social-card tiktok-card" href={contact.tiktok} target="_blank" rel="noopener noreferrer"><span className="social-icon"><Music2 size={26} /></span><div><span className="social-platform">TIKTOK</span><h3>@kimgrn1</h3><p>A fresh perspective on your next drive.</p></div><span className="social-arrow"><ArrowUpRight size={23} /></span></a>
          </div>
          <p className="social-note">A quick hello is always welcome. <a href="#contact">Find your favorite way to connect <ArrowDown size={13} /></a></p>
        </section>
        <section id="contact" className="contact-section container" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div className="contact-copy"><span className="eyebrow">GOOD CONVERSATIONS. GREAT BEGINNINGS.</span><h2 id="contact-title">Your next Toyota<br />starts with a hello<span>.</span></h2><p>A question, a quotation, or just exploring your options?<br />I’d love to hear from you.</p><a className="save-contact" href="/kim-giron.vcf" download><ArrowDownToLine size={17} /> Save my contact <ArrowRight size={16} /></a></div>
            <div className="contact-methods">
              <div className="phone-row"><Phone size={20} /><div><span>CALL OR TEXT</span><a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a></div><button className="copy-button" onClick={copyNumber} aria-label="Copy phone number">{copied ? <Check size={17} /> : 'Copy'}</button></div>
              <div className="messaging-buttons"><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} /> WhatsApp <ArrowUpRight size={16} /></a><a href={contact.viber}><Phone size={18} /> Viber <ArrowUpRight size={16} /></a></div>
              <p className="app-note">Viber opens in the app when installed.</p>
              <a className="email-row" href={`mailto:${contact.email}`}><Mail size={21} /><div><span>DROP ME AN EMAIL</span><span className="email-address">{contact.email}</span></div><ArrowUpRight size={19} /></a>
              <p className="contact-status" role="status">{copied ? 'Phone number copied.' : copyFailed ? `Please copy the number manually: ${contact.phoneDisplay}` : ''}</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="container site-footer"><div className="footer-top"><a className="brand footer-brand" href="#" aria-label="Kim Giron at Toyota Silang home"><img className="brand-logo" src="/.netlify/images?url=/img/toyota-silang-logo.png&w=560" alt="Toyota Silang, Cavite" width="1140" height="225" loading="lazy" /></a><span className="footer-location"><MapPin size={14} /> Silang, Cavite, Philippines</span><a href="#main" className="back-top">Back to top <ChevronRight size={16} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Kim Giron. Made for the journey ahead.</span><p>Personal marketing page · Toyota Silang, Cavite. Vehicle photo for reference only. Availability and offers are subject to confirmation.</p></div></footer>
    </>
  )
}
