import React, { useState } from 'react';
import { 
  Building2, MapPin, Phone, MessageSquare, Star, ShieldCheck, 
  Clock, CheckCircle, ChevronRight, Calendar, User, Mail, 
  ArrowRight, Sparkles, Home as HomeIcon, Award, Compass, 
  Menu, X, PhoneCall, Check, ExternalLink, Calculator, Landmark
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    property: '4 Bedroom Terrace Duplex (₦6.3M)',
    date: '',
    time: '10:00 AM',
    notes: ''
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [activeOffice, setActiveOffice] = useState('jabi');
  const [calcPropertyPrice, setCalcPropertyPrice] = useState(6300000);
  const [calcDeposit, setCalcDeposit] = useState(30); // percentage

  // Properties data
  const properties = [
    {
      id: 1,
      title: "2 Bedroom Terrace Duplex",
      subtitle: "With Attached BQ",
      price: "₦4,500,000",
      rawPrice: 4500000,
      oldPrice: "₦9,000,000",
      discount: "50% OFF",
      type: "terrace",
      features: ["2 Bedrooms", "Attached BQ", "Spacious Living", "Modern Finishing"],
      description: "Compact luxury designed for young families and smart investors looking for high rental yields along Kubwa Express."
    },
    {
      id: 2,
      title: "4 Bedroom Terrace Duplex",
      subtitle: "With Attached BQ",
      price: "₦6,300,000",
      rawPrice: 6300000,
      oldPrice: "₦12,600,000",
      discount: "50% OFF",
      type: "terrace",
      features: ["4 En-suite Bedrooms", "Attached BQ", "Ample Parking", "Pop Ceilings"],
      description: "Elegantly proportioned terrace duplex offering comfort, security, and top-tier architectural finishing."
    },
    {
      id: 3,
      title: "4 Bedroom Semi-Detached Penthouse",
      subtitle: "Exclusive View & Terrace",
      price: "₦8,800,000",
      rawPrice: 8800000,
      oldPrice: "₦19,600,000",
      discount: "55% OFF",
      type: "penthouse",
      features: ["Panoramic Roof Terrace", "4 En-suite Rooms", "Walk-in Closet", "Smart Home Ready"],
      description: "Breathtaking penthouse experience featuring expansive sky-view terrace and unmatched privacy in Treasure Gate Estate."
    },
    {
      id: 4,
      title: "4 Bedroom Fully Detached Penthouse",
      subtitle: "With Attached BQ",
      price: "₦11,300,000",
      rawPrice: 11300000,
      oldPrice: "₦22,600,000",
      discount: "50% OFF",
      type: "detached",
      features: ["Fully Detached", "Attached BQ", "Private Gate", "Spacious Compound"],
      description: "Ultimate standalone luxury with private compound space, security perimeter, and premium aesthetic touches."
    },
    {
      id: 5,
      title: "5 Bedroom Fully Detached Duplex",
      subtitle: "With Attached BQ & Gatehouse",
      price: "₦13,800,000",
      rawPrice: 13800000,
      oldPrice: "₦27,600,000",
      discount: "50% OFF",
      type: "detached",
      features: ["5 Master Bedrooms", "Attached BQ & Gatehouse", "Lounge & Family Room", "Luxury Kitchen"],
      description: "Our flagship architectural masterpiece. Designed for executive prestige, generous family living, and elite comfort."
    }
  ];

  const filteredProperties = activeTab === 'all' 
    ? properties 
    : properties.filter(p => p.type === activeTab);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setBookingModalOpen(false);
      alert("Inspection & Consultation booked successfully! Our team will contact you shortly.");
    }, 1800);
  };

  const calculateInstallment = () => {
    const depositAmount = (calcPropertyPrice * calcDeposit) / 100;
    const balance = calcPropertyPrice - depositAmount;
    const monthly12 = balance / 12;
    const monthly24 = balance / 24;
    return { depositAmount, balance, monthly12, monthly24 };
  };

  const { depositAmount, balance, monthly12, monthly24 } = calculateInstallment();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      
      {/* TOP NOTIFICATION / PROMO BAR */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white text-xs sm:text-sm font-medium py-2 px-4 text-center shadow-inner relative z-40 flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 animate-pulse text-amber-100" />
        <span><strong>Treasure Gate Estate Mega Promo:</strong> 50% Discount on All Housing Units & Land Plots in Abuja! Limited Slots Available.</span>
        <a href="#estates" className="underline font-bold hover:text-amber-100 ml-1 hidden md:inline-block">View Offers &rarr;</a>
      </div>

      {/* TOP NAVIGATION */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-11 h-11 rounded-xl bg-slate-900 text-amber-500 flex items-center justify-center font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              CH
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 block font-['Playfair_Display',serif]">Classic Homes</span>
              <span className="text-[10px] text-amber-600 font-semibold uppercase tracking-wider block">Real Estate Developer</span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <a href="#" className="text-slate-900 hover:text-amber-600 transition-colors whitespace-nowrap">Home</a>
            <a href="#estates" className="hover:text-amber-600 transition-colors whitespace-nowrap">Estates & Promo</a>
            <a href="#services" className="hover:text-amber-600 transition-colors whitespace-nowrap">Services</a>
            <a href="#about" className="hover:text-amber-600 transition-colors whitespace-nowrap">About Us</a>
            <a href="#calculator" className="hover:text-amber-600 transition-colors whitespace-nowrap">Payment Plan</a>
            <a href="#reviews" className="hover:text-amber-600 transition-colors whitespace-nowrap">Reviews</a>
            <a href="#contact" className="hover:text-amber-600 transition-colors whitespace-nowrap">Contact</a>
          </nav>

          {/* Zone 3: Primary Action & Phone */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a 
              href="tel:08145675693" 
              className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2.5 rounded-lg transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-amber-600" />
              <span>0814 567 5693</span>
            </a>
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-slate-900 hover:bg-amber-600 text-white font-semibold text-xs px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 whitespace-nowrap"
            >
              Book Inspection
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600">Home</a>
            <a href="#estates" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600">Estates & Promo</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600">Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600">About Us</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600">Payment Plan</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600">Reviews</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600">Contact Us</a>
            <div className="pt-2 flex flex-col gap-2">
              <a href="tel:08145675693" className="flex items-center justify-center gap-2 bg-amber-50 text-amber-800 py-2.5 rounded-lg font-bold text-sm">
                <PhoneCall className="w-4 h-4" /> Call: 0814 567 5693
              </a>
              <button 
                onClick={() => { setMobileMenuOpen(false); setBookingModalOpen(true); }}
                className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold text-sm shadow"
              >
                Book Inspection Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/hero_luxury_villa_1791579114688.jpg" 
            alt="Luxury Villa Abuja" 
            className="w-full h-full object-cover object-center opacity-40 scale-105 transform transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Premier Abuja Real Estate Developer · Women-Owned</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-['Playfair_Display',serif] leading-tight">
              Acquiring Land & Constructing <span className="text-amber-400 underline decoration-amber-500/50 underline-offset-8">Dream Properties</span> in Abuja
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              We specialize in strategic land acquisition, bespoke residential construction, and commercial developments. Discover our signature <strong>Treasure Gate Estate</strong> promo with up to 50% discount.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#estates" 
                className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3 text-base"
              >
                <span>Explore Treasure Gate Estate</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={() => setBookingModalOpen(true)}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-4 rounded-xl backdrop-blur-sm transition-all text-base"
              >
                Book Site Inspection
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/80 max-w-xl">
              <div>
                <div className="flex items-center gap-1 text-amber-400 font-bold text-xl">
                  <span>5.0</span>
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Verified Client Rating</p>
              </div>
              <div>
                <div className="font-bold text-xl text-white">100%</div>
                <p className="text-xs text-slate-400 mt-0.5">Genuine Land Titles</p>
              </div>
              <div>
                <div className="font-bold text-xl text-white">3 Offices</div>
                <p className="text-xs text-slate-400 mt-0.5">Strategic Abuja Locations</p>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Card in Hero */}
          <div className="lg:col-span-4 bg-white text-slate-900 p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-100">
            <h3 className="text-xl font-bold font-['Playfair_Display',serif] text-slate-900 mb-1">Quick Property Inquiry</h3>
            <p className="text-xs text-slate-500 mb-6">Speak directly with our property advisors in Jabi or Garki.</p>
            
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Barrister Emeka Johnson" 
                  value={bookingForm.name}
                  onChange={e => setBookingForm({...bookingForm, name: e.target.value})}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="e.g. 08012345678" 
                  value={bookingForm.phone}
                  onChange={e => setBookingForm({...bookingForm, phone: e.target.value})}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Interested Property</label>
                <select 
                  value={bookingForm.property}
                  onChange={e => setBookingForm({...bookingForm, property: e.target.value})}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                >
                  <option value="2 Bedroom Terrace Duplex (₦4.5M)">2 Bed Terrace Duplex - ₦4.5M</option>
                  <option value="4 Bedroom Terrace Duplex (₦6.3M)">4 Bed Terrace Duplex - ₦6.3M</option>
                  <option value="4 Bedroom Semi-Detached Penthouse (₦8.8M)">4 Bed Semi-Detached Penthouse - ₦8.8M</option>
                  <option value="4 Bedroom Fully Detached Penthouse (₦11.3M)">4 Bed Detached Penthouse - ₦11.3M</option>
                  <option value="5 Bedroom Fully Detached Duplex (₦13.8M)">5 Bed Detached Duplex - ₦13.8M</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full bg-slate-900 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg shadow-md transition-colors text-sm"
              >
                Request Inspection & Info
              </button>

              <div className="text-center pt-2">
                <a href="https://wa.me/2348145675693" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-semibold hover:underline">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Chat instantly on WhatsApp (0814 567 5693)</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FEATURED ESTATES & PROMO BANNER SECTION */}
      <section id="estates" className="py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header & Promo Callout */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12 mb-12 shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 bg-red-600 text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow">
                  <Sparkles className="w-3.5 h-3.5" /> 50% Mega Promo Active
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] tracking-tight">
                  Treasure Gate Estate · Dei-Dei Along Kubwa Express
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Located beside Water Lake Farm Estate / Behind Hantrack, Estate Phase 4, Airport Road / Kubwa Express. Secure your future with our ultra-modern residential offerings at unprecedented promotional prices.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> Dei-Dei / Kubwa Express, Abuja</span>
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-amber-400" /> C of O & Governor's Consent</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-amber-400" /> Immediate Allocation</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-3">
                <div className="text-left lg:text-right">
                  <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">Promo Ends Soon</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">Save Up To ₦14,000,000</span>
                </div>
                <button 
                  onClick={() => setBookingModalOpen(true)}
                  className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all text-sm w-full lg:w-auto text-center"
                >
                  Book Estate Inspection
                </button>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 font-['Playfair_Display',serif]">Treasure Gate Estate Pricing & Units</h3>
              <p className="text-sm text-slate-600 mt-1">Select from our range of meticulously engineered homes with attached BQs.</p>
            </div>
            
            <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm overflow-x-auto max-w-full">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${activeTab === 'all' ? 'bg-slate-900 text-white shadow' : 'text-slate-600 hover:text-slate-900'}`}
              >
                All Units ({properties.length})
              </button>
              <button 
                onClick={() => setActiveTab('terrace')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${activeTab === 'terrace' ? 'bg-slate-900 text-white shadow' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Terrace Duplexes
              </button>
              <button 
                onClick={() => setActiveTab('penthouse')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${activeTab === 'penthouse' ? 'bg-slate-900 text-white shadow' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Penthouses
              </button>
              <button 
                onClick={() => setActiveTab('detached')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${activeTab === 'detached' ? 'bg-slate-900 text-white shadow' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Detached Duplexes
              </button>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <div 
                key={prop.id} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Card Image Header */}
                <div className="relative h-60 overflow-hidden bg-slate-200">
                  <img 
                    src={prop.id === 1 ? "/src/assets/images/treasure_gate_estate_1791579124784.jpg" : prop.id % 2 === 0 ? "/src/assets/images/property_interior_1791579134977.jpg" : "/src/assets/images/hero_luxury_villa_1791579114688.jpg"} 
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-full shadow">
                      {prop.discount}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
                    Treasure Gate Estate
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-xs text-amber-600 font-bold uppercase tracking-wider mb-1">{prop.subtitle}</div>
                    <h4 className="text-xl font-bold text-slate-900 font-['Playfair_Display',serif]">{prop.title}</h4>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2">{prop.description}</p>

                    {/* Features list */}
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100">
                      {prop.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 line-through block">{prop.oldPrice}</span>
                      <span className="text-2xl font-extrabold text-slate-900 font-['Playfair_Display',serif]">{prop.price}</span>
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedProperty(prop);
                        setBookingForm({...bookingForm, property: `${prop.title} (${prop.price})`});
                        setBookingModalOpen(true);
                      }}
                      className="bg-slate-900 hover:bg-amber-600 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors shadow"
                    >
                      Inspect Unit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MORTGAGE / PAYMENT PLAN CALCULATOR SECTION */}
      <section id="calculator" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-wider block mb-2">Flexible Financial Planning</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-slate-900">
              Interactive Payment Plan Calculator
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Classic Homes offers convenient installment options spread across 12 to 24 months with flexible initial deposits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            
            {/* Calculator Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">Select Property Unit</label>
                <select 
                  value={calcPropertyPrice}
                  onChange={e => setCalcPropertyPrice(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl font-medium text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                >
                  <option value={4500000}>2 Bedroom Terrace Duplex (₦4,500,000)</option>
                  <option value={6300000}>4 Bedroom Terrace Duplex (₦6,300,000)</option>
                  <option value={8800000}>4 Bedroom Semi-Detached Penthouse (₦8,800,000)</option>
                  <option value={11300000}>4 Bedroom Fully Detached Penthouse (₦11,300,000)</option>
                  <option value={13800000}>5 Bedroom Fully Detached Duplex (₦13,800,000)</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-800">Initial Deposit Percentage</label>
                  <span className="text-amber-600 font-extrabold text-lg">{calcDeposit}%</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="60" 
                  step="5"
                  value={calcDeposit}
                  onChange={e => setCalcDeposit(Number(e.target.value))}
                  className="w-full accent-amber-600 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>20% Min Deposit</span>
                  <span>40%</span>
                  <span>60%</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-start gap-3">
                <Landmark className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-900 leading-relaxed">
                  <strong>Flexible Payment Guarantee:</strong> All payments are secured against official land allocations and titles. Custom milestone payment plans can be arranged with our executive directors in Jabi.
                </p>
              </div>
            </div>

            {/* Calculator Results Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-8 rounded-2xl shadow-xl space-y-6">
              <h3 className="text-lg font-bold font-['Playfair_Display',serif] border-b border-slate-800 pb-4">
                Estimated Payment Breakdown
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Selected Property Price:</span>
                  <span className="font-bold text-lg font-mono">₦{calcPropertyPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Initial Deposit ({calcDeposit}%):</span>
                  <span className="font-bold text-amber-400 font-mono">₦{depositAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Balance to Spread:</span>
                  <span className="font-bold text-white font-mono">₦{balance.toLocaleString()}</span>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <div className="bg-slate-800/80 p-3 rounded-lg flex justify-between items-center">
                    <div>
                      <span className="text-xs text-slate-300 block">12 Months Installment</span>
                      <span className="text-[10px] text-amber-400">Zero Interest Spread</span>
                    </div>
                    <span className="font-extrabold text-base font-mono text-white">₦{Math.round(monthly12).toLocaleString()}/mo</span>
                  </div>

                  <div className="bg-slate-800/80 p-3 rounded-lg flex justify-between items-center">
                    <div>
                      <span className="text-xs text-slate-300 block">24 Months Installment</span>
                      <span className="text-[10px] text-amber-400">Extended Payment Plan</span>
                    </div>
                    <span className="font-extrabold text-base font-mono text-white">₦{Math.round(monthly24).toLocaleString()}/mo</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setBookingModalOpen(true)}
                className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-3.5 rounded-xl shadow transition-colors text-sm"
              >
                Apply for this Payment Plan
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION */}
      <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-wider block mb-2">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-slate-900">
              Our Professional Real Estate Services
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Specializing in acquiring prime land and constructing residential and commercial properties across Abuja with unmatched excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 01 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-['Playfair_Display',serif] mb-3">Land Acquisition & Banking</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We acquire strategic, litigation-free land parcels in high-growth corridors of Abuja, ensuring secure titles (C of O) for our clients.
              </p>
            </div>

            {/* Service 02 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-['Playfair_Display',serif] mb-3">Residential Construction</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                From luxury terrace duplexes to executive penthouses, our engineering team delivers world-class structural integrity and modern finishing.
              </p>
            </div>

            {/* Service 03 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-['Playfair_Display',serif] mb-3">Commercial Property Development</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Developing state-of-the-art plazas, commercial hubs, and office complexes designed for optimal business yield and prestige.
              </p>
            </div>

            {/* Service 04 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6">
                04
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-['Playfair_Display',serif] mb-3">Free Site Inspections</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We provide complimentary guided inspection tours to all our estates in Abuja, complete with dedicated transport and professional advisors.
              </p>
            </div>

            {/* Service 05 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6">
                05
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-['Playfair_Display',serif] mb-3">Flexible Payment Structuring</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tailored financial plans allowing clients and diaspora investors to acquire properties comfortably without financial strain.
              </p>
            </div>

            {/* Service 06 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6">
                06
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-['Playfair_Display',serif] mb-3">Property Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                End-to-end facility management, tenant sourcing, and maintenance services to safeguard your real estate investments.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-600" /> Women-Owned Enterprise
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-slate-900 leading-tight">
                Pioneering Excellence in Nigerian Real Estate Development
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Classic Homes is a premier real estate development company headquartered in Abuja. As a proudly women-owned enterprise, we bring meticulous attention to detail, uncompromising integrity, and visionary architectural concepts to every land acquisition and construction project.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Whether you are a first-time homebuyer, a seasoned investor looking for high capital appreciation, or a corporation seeking commercial space, our team delivers transparency and satisfaction at every step.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-amber-600 pl-4">
                  <span className="block text-2xl font-extrabold text-slate-900 font-mono">500+</span>
                  <span className="text-xs text-slate-500 font-medium">Plots Acquired & Allocated</span>
                </div>
                <div className="border-l-2 border-amber-600 pl-4">
                  <span className="block text-2xl font-extrabold text-slate-900 font-mono">100%</span>
                  <span className="text-xs text-slate-500 font-medium">Client Satisfaction Rate</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900">
                <img 
                  src="/src/assets/images/construction_site_1791579143300.jpg" 
                  alt="Classic Homes Construction" 
                  className="w-full h-[450px] object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block mb-1">Our Engineering Commitment</span>
                    <h4 className="text-xl font-bold font-['Playfair_Display',serif]">Building secure, high-value assets across Abuja.</h4>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS / TESTIMONIALS */}
      <section id="reviews" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Star className="w-4 h-4 fill-amber-600 text-amber-600" /> 5.0 Star Rating
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-slate-900">
              What Our Clients Say
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Read genuine reviews from delighted property owners and investors who trusted Classic Homes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                </div>
                <p className="text-slate-700 text-sm italic leading-relaxed">
                  "Acquiring plots from you is one of the best decisions I have made. The transparency, prompt allocation, and professionalism at Classic Homes is unmatched in Abuja."
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-sm">
                  OA
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Dr. Ogechi Adeleke</h4>
                  <p className="text-xs text-slate-500">Investor, Treasure Gate Estate</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                </div>
                <p className="text-slate-700 text-sm italic leading-relaxed">
                  "As a woman in business, seeing a top-tier women-owned real estate developer deliver such high-end construction quality is inspiring. My terrace duplex is gorgeous!"
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-sm">
                  FB
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Hajiya Fatima Bello</h4>
                  <p className="text-xs text-slate-500">Homeowner, Jabi Abuja</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                </div>
                <p className="text-slate-700 text-sm italic leading-relaxed">
                  "The 50% promo on Treasure Gate Estate felt too good to be true, but inspection proved it. I secured my 4 bedroom penthouse with zero stress. Highly recommended!"
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-sm">
                  CE
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Chinedu Ezenwa</h4>
                  <p className="text-xs text-slate-500">Diaspora Investor</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE CONTACT & OFFICE LOCATIONS */}
      <section id="contact" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-wider block mb-2">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif] text-slate-900">
              Visit Our Offices in Abuja
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              We have three strategic offices across Abuja to serve you promptly. Contact us via phone or WhatsApp anytime.
            </p>
          </div>

          {/* Office Location Tabs */}
          <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2">
            <button 
              onClick={() => setActiveOffice('jabi')}
              className={`px-5 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${activeOffice === 'jabi' ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Head Office (Jabi)
            </button>
            <button 
              onClick={() => setActiveOffice('garki')}
              className={`px-5 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${activeOffice === 'garki' ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Branch Office (Garki 2)
            </button>
            <button 
              onClick={() => setActiveOffice('kubwa')}
              className={`px-5 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${activeOffice === 'kubwa' ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Kubwa Expressway Office
            </button>
          </div>

          {/* Office Detail Card */}
          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                <MapPin className="w-4 h-4 text-amber-600" /> 
                {activeOffice === 'jabi' ? 'Headquarters' : activeOffice === 'garki' ? 'Branch Office' : 'Kubwa Location'}
              </div>

              <h3 className="text-2xl font-bold font-['Playfair_Display',serif] text-slate-900">
                {activeOffice === 'jabi' && 'Suite B4, HCR Plaza, Plot 529 Splendor Ugo Crescent, Jabi, Abuja'}
                {activeOffice === 'garki' && '5 Kaltungo St, Garki 2, Abuja 90001, FCT'}
                {activeOffice === 'kubwa' && 'Along Kubwa Express, Dei-Dei, Abuja'}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                Open Monday to Saturday from 10:00 AM onwards. Walk in for consultations, land title verifications, or inspection bookings.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="tel:08145675693" 
                  className="bg-slate-900 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 text-sm shadow transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Call 0814 567 5693</span>
                </a>
                <a 
                  href="https://wa.me/2348145675693" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 text-sm shadow transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Contact & Hours Summary</h4>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-700">Phone Hotline:</span>
                  <span className="font-mono font-bold text-slate-900">0814 567 5693</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-700">Business Hours:</span>
                  <span className="font-medium text-slate-900">10:00 AM onwards (Mon - Sat)</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-700">Customer Rating:</span>
                  <span className="font-bold text-amber-600 flex items-center gap-1">5.0 <Star className="w-3.5 h-3.5 fill-amber-500" /></span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700">Enterprise Status:</span>
                  <span className="font-medium text-slate-900">Women-Owned Developer</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-lg">
                CH
              </div>
              <span className="text-lg font-bold text-white font-['Playfair_Display',serif]">Classic Homes</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Premier real estate developer specializing in land acquisition and the construction of residential and commercial properties in Abuja.
            </p>
            <div className="text-xs text-amber-400 font-semibold">
              Proudly Women-Owned Enterprise
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#estates" className="hover:text-white transition-colors">Treasure Gate Estate Promo</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Classic Homes</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Payment Plan Calculator</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Customer Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Abuja Office Locations</h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li>
                <strong className="text-slate-200 block">Head Office:</strong>
                Suite B4, HCR Plaza, Plot 529 Splendor Ugo Crescent, Jabi, Abuja.
              </li>
              <li>
                <strong className="text-slate-200 block">Branch Office:</strong>
                5 Kaltungo St, Garki 2, Abuja 90001, FCT.
              </li>
              <li>
                <strong className="text-slate-200 block">Kubwa Office:</strong>
                Along Kubwa Express, Dei-Dei, Abuja.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact & Hours</h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li>
                <strong className="text-slate-200 block">Hotline:</strong>
                <a href="tel:08145675693" className="text-amber-400 font-bold hover:underline">0814 567 5693</a>
              </li>
              <li>
                <strong className="text-slate-200 block">Business Hours:</strong>
                Opens 10:00 AM onwards (Mon - Sat)
              </li>
              <li>
                <strong className="text-slate-200 block">WhatsApp:</strong>
                <a href="https://wa.me/2348145675693" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Chat with an Advisor</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Classic Homes Real Estate Developer. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Land Allocation Terms</a>
          </div>
        </div>
      </footer>

      {/* BOOKING / INSPECTION MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-amber-600 text-xs font-bold uppercase tracking-wider block mb-1">Free Site Visit & Consultation</span>
              <h3 className="text-2xl font-bold font-['Playfair_Display',serif] text-slate-900">Book Property Inspection</h3>
              <p className="text-xs text-slate-500 mt-1">Fill the details below and our Abuja inspection team will contact you promptly.</p>
            </div>

            {bookingSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-2xl text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="text-lg font-bold">Booking Request Received!</h4>
                <p className="text-xs text-emerald-700">Thank you, {bookingForm.name}. Our property advisor will call {bookingForm.phone} shortly to confirm your site inspection schedule.</p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Mrs. Amina Garba"
                    value={bookingForm.name}
                    onChange={e => setBookingForm({...bookingForm, name: e.target.value})}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="0814 567 5693"
                      value={bookingForm.phone}
                      onChange={e => setBookingForm({...bookingForm, phone: e.target.value})}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="name@example.com"
                      value={bookingForm.email}
                      onChange={e => setBookingForm({...bookingForm, email: e.target.value})}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Property Unit / Estate</label>
                  <select 
                    value={bookingForm.property}
                    onChange={e => setBookingForm({...bookingForm, property: e.target.value})}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  >
                    <option value="2 Bedroom Terrace Duplex (₦4.5M)">2 Bed Terrace Duplex - ₦4.5M (Treasure Gate)</option>
                    <option value="4 Bedroom Terrace Duplex (₦6.3M)">4 Bed Terrace Duplex - ₦6.3M (Treasure Gate)</option>
                    <option value="4 Bedroom Semi-Detached Penthouse (₦8.8M)">4 Bed Semi-Detached Penthouse - ₦8.8M</option>
                    <option value="4 Bedroom Fully Detached Penthouse (₦11.3M)">4 Bed Detached Penthouse - ₦11.3M</option>
                    <option value="5 Bedroom Fully Detached Duplex (₦13.8M)">5 Bed Detached Duplex - ₦13.8M</option>
                    <option value="General Land Acquisition">General Land Acquisition Consultation</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Preferred Date</label>
                    <input 
                      type="date" 
                      required
                      value={bookingForm.date}
                      onChange={e => setBookingForm({...bookingForm, date: e.target.value})}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Preferred Time</label>
                    <select 
                      value={bookingForm.time}
                      onChange={e => setBookingForm({...bookingForm, time: e.target.value})}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    >
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-slate-900 hover:bg-amber-600 text-white font-semibold py-3.5 rounded-xl shadow transition-colors text-sm mt-2"
                >
                  Confirm Inspection Booking
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
