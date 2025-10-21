import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X, Play, Volume2, Maximize, MoreVertical, Phone, Mail, MapPin, Shield, Users, Clock, Star, CheckCircle, ArrowRight, Download, Scale, Gavel, FileText, Facebook, Twitter, Instagram, Linkedin, DollarSign } from 'lucide-react'
import handcuffsImage from './assets/hero.png'
import claLogo from './assets/cla_logo.png'
import footerLogo from './assets/cla_logo.png'
import freedPersonImage from './assets/jail.png'
import claAppBanner from './assets/cla_app_banner_new.png'
import usbDeviceBranded from './assets/usb_device_branded_final.png'
import otgConnectionEnhanced from './assets/otg_connection_enhanced.png'
import lisaAiBot from './assets/lisa_ai_bot.webp'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const coverageOptions = [
    {
      title: "CLA 30-Day Travel Coverage",
      price: "$75.49",
      features: [
        "30-Day Individual Coverage",
        "24/7 Legal question and answer",
        "2 Hours of attorney access or representation",
        "$2,500 Bail Bond coverage",
        "30 Pre-paid phone or video call minutes"
      ],
      popular: false
    },
    {
      title: "Single Coverage",
      price: "$117.90",
      features: [
        "1-Year Individual Coverage",
        "24/7 Legal question and answer",
        "5 Hours of attorney access and representation",
        "$5,000 Bail Bond coverage",
        "Personal CALL LAW APP ID card",
        "100 Pre-paid phone or video call minutes"
      ],
      popular: true
    },
    {
      title: "Family Coverage",
      price: "$87.90",
      priceNote: "(Per Person)",
      features: [
        "1-Year Family Coverage for five individuals",
        "24/7 legal question and answer",
        "5 Hours attorney access and representation",
        "$5,000 Bail Bond coverage",
        "Personal CALL LAW APP ID card",
        "100 Pre-paid phone or video call minutes"
      ],
      popular: false
    },
    {
      title: "Group Coverage",
      price: "$69.16",
      priceNote: "(Per Person)",
      features: [
        "1-Year Group Coverage for ten individuals",
        "24/7 Legal question and answer",
        "5 Hours attorney access or representation",
        "$5,000 Bail Bond coverage",
        "Personal CALL LAW APP ID card",
        "100 Pre-paid phone or video call minutes"
      ],
      popular: false
    }
  ]

  const blogPosts = [
    {
      title: "CALL LAW APP Bail Bonds services",
      date: "Oct 10, 2021",
      excerpt: "Bail Bonds services Call Law App (CLA), a legal service-based company that is bringing legal help to your fingertips. We are excited to feature our Bail Bond option..."
    },
    {
      title: "Police Stops: Know Your Rights When Pulled Over or Questioned",
      date: "May 2021",
      excerpt: "Police officials are tasked with keeping community protection and maintaining law and order, but for many individuals, interactions with police force can be stressful and confusing..."
    },
    {
      title: "What Is a Breach of Contract Claim? Burden of Proof",
      date: "June 2021",
      excerpt: "A breach of contract claim is a legal action taken when one party fails to fulfill their obligations under a contract. To win a breach of contract claim..."
    },
    {
      title: "How Bail and Bonds Work",
      date: "June 2021",
      excerpt: "Bail and bonds are an essential part of the criminal justice system, allowing defendants to be released from custody while awaiting trial..."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={claLogo} alt="CLA Logo" className="w-12 h-12" />
              <div>
                <div className="text-gray-800 font-bold text-xl">CALL LAW APP</div>
                <div className="text-blue-600 text-sm font-medium">Legal Services at Your Fingertips</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">About Us</a>
              <a href="#coverage" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Coverage Options</a>
              <a href="#attorney" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Attorney Network</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Blog</a>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                Free Coverage Survey
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">About Us</a>
                <a href="#coverage" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Coverage Options</a>
                <a href="#attorney" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Attorney Network</a>
                <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Blog</a>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg w-fit">
                  Free Coverage Survey
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Putting robust <span className="text-blue-600">legal services</span> in the palm of your hand
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Advanced features make Call Law App a legal game changer. Get the legal help you need, when you need it.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Download CALL LAW APP Version 2.0</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2">
                    <Download size={20} />
                    <span>Android</span>
                  </Button>
                  <Button className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2">
                    <Download size={20} />
                    <span>iOS</span>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <img 
                src={handcuffsImage} 
                alt="Legal representation and justice" 
                className="relative w-full h-auto rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Call Law App Section */}
      <section id="about" className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What is CALL LAW APP?</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Call Law App is a personal, high powered legal resource that you can access from the palm of your hand. 
                  User friendly service options make it easy to get the effective legal resources you and your loved ones 
                  need when and where you need them.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 Access</h3>
                    <p className="text-gray-600 text-sm">Legal help whenever you need it</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Bail Bond Coverage</h3>
                    <p className="text-gray-600 text-sm">Up to $10,000 coverage available</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Attorney Network</h3>
                    <p className="text-gray-600 text-sm">Access to qualified legal professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Direct Communication</h3>
                    <p className="text-gray-600 text-sm">Phone and video call minutes included</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Who is CALL LAW APP for?</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                CALL LAW APP was designed to meet the needs of individuals dealing with the justice system. 
                The unfortunate reality is far too many people are underserved. This leads to poor representation, 
                and that is where CLA comes into play for you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Individuals facing legal challenges</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Families needing legal protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Travelers requiring legal coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Groups and organizations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLA App Banner Section */}
      <section className="py-8 lg:py-12 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Experience the Call Law App Interface</h2>
          <img src={claAppBanner} alt="Call Law App Interface Banner" className="w-full h-auto rounded-lg shadow-xl mx-auto" />
        </div>
      </section>

      {/* L.I.S.A. A.I. Legal Assistant Section */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-black">
                Introducing <span className="text-blue-600">L.I.S.A.</span>
              </h2>
              <p className="text-xl text-black font-semibold leading-relaxed">
                Your friendly legal service assistant, L.I.S.A. (Legal Intelligence System Analysis), is now available for Call Law App users. 
                With her deep legal knowledge, incredible speed, and extensive case study awareness, L.I.S.A. provides clients with sound legal information and advice, 
                adding an unparalleled layer of support to your legal journey.
              </p>
            </div>
            <div className="flex justify-center">
              <img src={lisaAiBot} alt="L.I.S.A. A.I. Legal Assistant" className="w-full max-w-md h-auto rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Options Section */}
      <section id="coverage" className="py-8 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Choose Your Coverage Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our comprehensive coverage options designed to meet your specific legal needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coverageOptions.map((option, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${option.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">{option.price}</span>
                    {option.priceNote && <span className="text-gray-600 ml-2">{option.priceNote}</span>}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${option.popular ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLA Body Camera Coverage Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-black">
                <span className="text-blue-600 font-bold">ADVANCED LEGAL PROTECTION</span> <br /> 
                <span className="font-bold text-black">CLA PERSONAL BODY CAMERA</span>
              </h2>
              <p className="text-xl text-black font-semibold leading-relaxed">
                CLA offers our user friendly body camera. Helping our clients stay safe and compliant during emergency and non emergency situations. Adding an additional layer of protection and peace of mind.
              </p>
              <Button className="bg-white border-2 border-green-500 hover:bg-green-50 text-green-600 px-6 py-3 rounded-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl">
                PURCHASE
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <img src={usbDeviceBranded} alt="CLA Personal Body Camera" className="w-full h-auto rounded-lg shadow-xl" />
              <img src={otgConnectionEnhanced} alt="OTG Connection Enhanced" className="w-full h-auto rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Bail Bonds Section */}
      <section className="py-8 lg:py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Bail Bonds Services</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Call Law App (CLA), a legal service-based company that is bringing legal help to your fingertips. 
                We are excited to feature our Bail Bond option - a request can be made via the app and an amount 
                of UP TO $500 will be provided by CLA to the Subscriber.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <DollarSign className="text-green-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Up to $500 Coverage</h3>
                  <p className="text-blue-100">Get released and back home quickly</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-black">Quick Bail Bond Request</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Submit request through the app</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Receive up to $500 coverage</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Get released and back home</h4>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Introducing the CLA SMART CLIENT PROGRAM</h4>
                <Button className="bg-white text-green-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold transition-colors">
                  Learn More
                </Button>
              </div>
                <div className="mt-6">
                  <img src={freedPersonImage} alt="Freed Person" className="w-full h-auto rounded-lg shadow-xl" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attorney Network Section */}
      <section id="attorney" className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Join Our Attorney Network</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Are you a qualified attorney looking to help underserved individuals? Join our network of legal 
                  professionals committed to providing accessible legal services.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Network</h3>
                    <p className="text-gray-600">Connect with a network of dedicated legal professionals committed to justice and accessibility.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Help Those in Need</h3>
                    <p className="text-gray-600">Make a difference by providing legal services to individuals who need it most.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Scale className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Practice</h3>
                    <p className="text-gray-600">Work on your terms while expanding your practice and client base.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Attorney Application</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bar License Number</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select experience level</option>
                    <option>0-2 years</option>
                    <option>3-5 years</option>
                    <option>6-10 years</option>
                    <option>10+ years</option>
                  </select>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-8 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Legal Insights & Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest articles on legal topics, rights, and important information
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-blue-600 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>Blog</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 group">
                    <span>Read More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">About Call Law App</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Call Law App was conceived over ten years ago in response to the inequities present in the judicial system. 
                It's a documented fact, individuals of limited means receive harsher treatment than those possessed of the 
                resources to insulate themselves legally.
              </p>
              <p>
                Call Law App offers peace of mind to those who find themselves in the justice system with little to no 
                resources to protect their rights. This is a way for all people to have access to the same amount and 
                quality of resources equally.
              </p>
              <p>
                At Call Law App our goal is to be a resource for underserved individuals can rely upon when dealing with 
                the justice system. For those that do not have thousands of dollars to retain top-shelf legal representation 
                or find themselves in legal jeopardy while away from home, Call Law App provides access to the resources 
                you need to get the help you deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src={footerLogo} alt="CLA Logo" className="w-10 h

-10" />
                <div>
                  <div className="text-white font-bold text-lg">CALL LAW APP</div>
                  <div className="text-blue-400 text-sm">Legal Services at Your Fingertips</div>
                </div>
              </div>
              <p className="text-gray-400 mt-4">
                Providing accessible legal services to those who need them most. Your trusted partner in legal protection.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#coverage" className="text-gray-400 hover:text-white transition-colors">Coverage Options</a></li>
                <li><a href="#attorney" className="text-gray-400 hover:text-white transition-colors">Attorney Network</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-400" size={16} />
                  <span className="text-gray-400">888-CLA-LAW1</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-blue-400 mt-1" size={16} />
                  <div className="text-gray-400 text-sm">
                    <div>401 East 8th Street</div>
                    <div>Sioux Falls, South Dakota 57103</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h5 className="font-semibold mb-3">Follow Us</h5>
                <div className="flex space-x-4">
                  <a href="https://facebook.com/888CLALAW1" className="text-gray-400 hover:text-white transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="https://twitter.com/calllawapp" className="text-gray-400 hover:text-white transition-colors">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2021 Call Law App LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
