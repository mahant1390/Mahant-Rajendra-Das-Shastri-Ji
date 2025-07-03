"use client"

import { useState, useEffect, useRef } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Menu,
  Star,
  Calendar,
  Users,
  Award,
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function KaalSarpDoshWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const [visibleSections, setVisibleSections] = useState(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "pooja", "gallery", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About us" },
    { id: "pooja", label: "Pooja" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact us" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-gray-100 py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-col md:flex-row items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Kalyan Bhawan, Pavan Ganesh Nagar, Trimbakeshwar, Shirsagaon, Maharashtra 422212</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>kalsarpdoshivaran@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+911234567890" className="hover:underline">
                +91 1234567890
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Facebook className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-800" />
            <Twitter className="w-4 h-4 text-blue-400 cursor-pointer hover:text-blue-600" />
            <Instagram className="w-4 h-4 text-pink-600 cursor-pointer hover:text-pink-800" />
            <Youtube className="w-4 h-4 text-red-600 cursor-pointer hover:text-red-800" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-orange-600">Kaal Sarp Dosh Puja</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-700 hover:text-orange-600 transition-colors ${
                    activeSection === item.id ? "text-orange-600 font-semibold" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full"
                asChild
              >
                <a href="tel:+911234567890">+91 1234567890</a>
              </Button>
            </nav>

            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left text-lg py-2 px-4 rounded hover:bg-orange-50 transition-colors ${
                        activeSection === item.id ? "text-orange-600 bg-orange-50" : "text-gray-700"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-orange-600 hover:bg-orange-700 text-white mt-4"
                    asChild
                  >
                    <a href="tel:+911234567890">+91 1234567890</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-gradient-to-r from-orange-100 to-red-100 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Floating animation elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/30 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-red-200/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-orange-300/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-40 w-24 h-24 bg-red-300/20 rounded-full animate-bounce delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 animate-slide-in-left">
            Welcome to Mahant Rajendra Das Shastri Ji -  Your Trusted Vedic Ritual Specialist
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-slide-in-left delay-200">
              Get rid of Kaal Sarp Dosh with authentic Vedic rituals performed by experienced pandits at the sacred
              Trimbakeshwar Temple.
              Mahant Rajendra Das Shastri Ji , we bring sacred Vedic rituals to your home, no matter where you are in the world. Led by Mahant Rajendra Das Shastri Ji , a seasoned Vedic scholar and karmakandi with over 12 years of experience, our mission is to help devotees overcome life’s obstacles through powerful, personalized rituals rooted in ancient Hindu scriptures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in-left delay-400">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                Book Your Puja
              </Button>
              <Button
                onClick={() => scrollToSection("about")}
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="w-full lg:w-96 animate-slide-in-right">
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-800">Make an Enquiry</CardTitle>
                <div className="w-16 h-1 bg-orange-600 mx-auto animate-pulse"></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <Input
                    placeholder="Enter your name"
                    className="w-full focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  />
                </div>
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Enter phone number"
                    className="w-full focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  />
                </div>
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of puja <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="date"
                    className="w-full focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  />
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-pulse">
                  Book your Puja
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-white" data-animate id="guruji-section">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              visibleSections.has("guruji-section") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="transform hover:scale-105 transition-all duration-500">
              <div className="aspect-square relative overflow-hidden rounded-2xl shadow-2xl group">
                <Image
                  src={"/mahant-rajendra-das-shastri.jpg"}
                  alt="Mahant Rajendra Das Shastri Ji"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-slide-in-right">
             About Mahant Rajendra Das Shastri Ji
              </h2>
              <div className="w-24 h-1 bg-orange-600 mb-6 animate-expand"></div>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi eaque porro animi dolorem, architecto quae nobis distinctio quasi, rerum facere pariatur, dolor debitis voluptatibus! Alias veritatis corporis ipsam ex expedita.
                </p>
                <p className="transform hover:translate-x-2 transition-transform duration-300 delay-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sequi, animi, dolorem eum cum tempore non consequatur quibusdam ut necessitatibus assumenda ullam, itaque molestias. Deleniti culpa assumenda reprehenderit esse sit!
                </p>
                <p className="transform hover:translate-x-2 transition-transform duration-300 delay-200">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla, hic facere veniam reiciendis aliquam amet provident corrupti perspiciatis, pariatur accusantium! Iure maxime aperiam fugiat aliquam quis unde omnis similique!
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { number: "15+", label: "Years Experience" },
                  { number: "5000+", label: "Pujas Performed" },
                  { number: "98%", label: "Success Rate" },
                  { number: "4.9★", label: "Customer Rating" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center transform hover:scale-110 transition-all duration-300 hover:bg-orange-50 p-4 rounded-lg"
                  >
                    <div className="text-3xl font-bold text-orange-600 animate-count-up">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Online Puja Service Works */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50" data-animate id="process-section">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has("process-section") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How does Mahant Rajendra Das Shastri Ji Online Puja Service Work?
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6 animate-expand"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience authentic Vedic rituals from the comfort of your home with our comprehensive online puja
              service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Book Your Puja",
                description:
                  "Contact us via phone, WhatsApp, or our website form to book your preferred puja date and time",
              },
              {
                step: 2,
                title: "Provide Details",
                description:
                  "Share your birth details, gotra, and specific requirements for personalized puja arrangements",
              },
              {
                step: 3,
                title: "Live Streaming",
                description:
                  "Watch your puja live via video call as our experienced pandits perform the rituals at Trimbakeshwar",
              },
              {
                step: 4,
                title: "Receive Prasad",
                description:
                  "Get blessed prasad, photos, and puja certificate delivered to your doorstep within 3-5 days",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center group transform transition-all duration-500 hover:scale-105 ${
                  visibleSections.has("process-section") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 group-hover:shadow-lg">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-bounce"
            >
              Start Your Online Puja Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome to Trusted Service */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to Your Trusted Kalsarp Dosh Nivaran Pooja
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minima accusantium magnam fuga amet praesentium eos officiis. Consequuntur assumenda tempora ipsam fugiat blanditiis sint eos, eum laudantium ducimus? Vel, nesciunt!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-600">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Authentic Rituals</h3>
              <p className="text-gray-600">
                Every puja is performed according to ancient Vedic traditions with proper mantras, offerings, and
                procedures
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-600">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Expert Guidance</h3>
              <p className="text-gray-600">
                Our experienced pandits provide personalized consultation and guidance throughout your spiritual journey
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-600">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Proven Results</h3>
              <p className="text-gray-600">
                Thousands of devotees have experienced positive changes in their lives after our puja services
              </p>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Services?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div>Customer Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div>Satisfaction Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div>Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews and Ratings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Devotees Say</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read testimonials from thousands of satisfied devotees who have experienced positive changes in their
              lives
            </p>
          </div>

          {/* Overall Rating */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-600 mb-2">4.9</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <div className="text-gray-600">Based on 2,847 reviews</div>
              </div>
              <div className="border-l border-gray-200 pl-8 ml-8">
                <div className="space-y-2">
                  {[
                    { stars: 5, percentage: 89 },
                    { stars: 4, percentage: 8 },
                    { stars: 3, percentage: 2 },
                    { stars: 2, percentage: 1 },
                    { stars: 1, percentage: 0 },
                  ].map((rating) => (
                    <div key={rating.stars} className="flex items-center gap-3">
                      <span className="text-sm w-8">{rating.stars}★</span>
                      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-orange-400 rounded-full"
                          style={{ width: `${rating.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-8">{rating.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                location: "Mumbai, Maharashtra",
                rating: 5,
                review:
                  "Mahant Rajendra Das Shastri Ji performed my Kaal Sarp Dosh puja with complete dedication. Within 3 months, I got a promotion at work and my family problems were resolved. Highly recommended!",
                date: "2 weeks ago",
              },
              {
                name: "Priya Sharma",
                location: "Delhi, NCR",
                rating: 5,
                review:
                  "The online puja service was amazing! I could watch the entire ritual live from my home. The pandit ji explained everything clearly and I received prasad within 4 days. Very satisfied!",
                date: "1 month ago",
              },
              {
                name: "Amit Patel",
                location: "Ahmedabad, Gujarat",
                rating: 5,
                review:
                  "After years of struggle with business losses, I decided to perform Kaal Sarp Dosh puja. The results were miraculous! My business started growing and all obstacles were removed.",
                date: "3 weeks ago",
              },
              {
                name: "Sunita Devi",
                location: "Pune, Maharashtra",
                rating: 5,
                review:
                  "Guruji's knowledge of scriptures is incredible. He guided me through the entire process and performed the puja with such devotion. My son's marriage got fixed within 2 months!",
                date: "1 week ago",
              },
              {
                name: "Vikram Singh",
                location: "Jaipur, Rajasthan",
                rating: 5,
                review:
                  "Professional service with authentic rituals. The live streaming quality was excellent and I felt like I was present at the temple. Thank you for making this possible!",
                date: "2 months ago",
              },
              {
                name: "Meera Joshi",
                location: "Bangalore, Karnataka",
                rating: 5,
                review:
                  "I was skeptical about online puja initially, but the experience was beyond my expectations. The positive changes in my life started immediately after the puja. Blessed to find this service!",
                date: "3 weeks ago",
              },
            ].map((review, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-orange-600">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{review.review}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg rounded-full"
            >
              Book Your Puja Today
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Kaal Sarp Dosh</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kaal Sarp Dosh is formed when all planets come between Rahu and Ketu. This creates obstacles in life,
              career, and relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Authentic Rituals</h3>
              <p className="text-gray-600">Traditional Vedic rituals performed according to ancient scriptures</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Experienced Pandits</h3>
              <p className="text-gray-600">Qualified and experienced pandits with deep knowledge of scriptures</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sacred Location</h3>
              <p className="text-gray-600">Performed at the holy Trimbakeshwar Temple, one of the 12 Jyotirlingas</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pooja Section */}
      <section id="pooja" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Puja Services</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer various types of Kaal Sarp Dosh Puja based on your specific requirements and planetary positions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Anant Kaal Sarp Dosh Puja",
                description: "When Rahu is in 1st house and Ketu in 7th house",
                price: "₹5,100",
              },
              {
                title: "Kulik Kaal Sarp Dosh Puja",
                description: "When Rahu is in 2nd house and Ketu in 8th house",
                price: "₹5,100",
              },
              {
                title: "Vasuki Kaal Sarp Dosh Puja",
                description: "When Rahu is in 3rd house and Ketu in 9th house",
                price: "₹5,100",
              },
              {
                title: "Shankpal Kaal Sarp Dosh Puja",
                description: "When Rahu is in 4th house and Ketu in 10th house",
                price: "₹5,100",
              },
              {
                title: "Padam Kaal Sarp Dosh Puja",
                description: "When Rahu is in 5th house and Ketu in 11th house",
                price: "₹5,100",
              },
              {
                title: "Mahapadma Kaal Sarp Dosh Puja",
                description: "When Rahu is in 6th house and Ketu in 12th house",
                price: "₹5,100",
              },
            ].map((puja, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-600">{puja.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{puja.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">{puja.price}</span>
                    <Button onClick={() => scrollToSection("contact")} className="bg-orange-600 hover:bg-orange-700">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Glimpses of our puja ceremonies and the sacred Trimbakeshwar Temple
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           
              <div  className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOl7_Y1kv4Ksu97XB1NC1J67tOlxM_xv0QJ41FDdErWkRfhvePB_Hn8rl0Lnu7ppwutF9oI1Q6kzv4slHMp_5mpUG17JtiKkVxsSEsPpjjkVF9H6ylWeM0BBUV0bgPmxkam6E0EW5UQLaU45FXhOmqJFEDWc3CQniHT2bfn6zeH_Bho66G7OwMU4Il1SB7/s1280/101.jpg"
                  alt={`Gallery image`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>

              <div  className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjU23EZhhHmvTMTJKhmHBRzRnFXEZ2eNlPfrJ1faP7DCrXJDKxN2MfG7sCM16Yr8YwP9gt4OZsacB-Forh7lAi1WA7kNtHLFPVZvjrn_wdU-iPaf7XBcCoDMUIigA-YC6MbF90IPjpFGnKpC90gn10btpL9oEnWuRg3JCaV-EOe4NftsaOZXDxynq9rwM4p/s1280/3.jpg"
                  alt={`Gallery image`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>


              <div  className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4GEw_byK01XJgGrlZEqCAOheApE80hiuZQVRC10PufnZo0vsFNvE98Ourv-9IZA6BovZEJY_zNn0n-hZOHP42Nvyi3P4g6x0Eh0WgESLMzfAdTkhoW8QMUtL9A-t1lsR96ggpVM5afiwKDSVhZuMdlRLtSWV3xpOnGke4txfm-u6D5a_7X4yVxTLkyMuM/s1280/4.jpg"
                  alt={`Gallery image`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>

              <div  className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6nXssjKhIreu1qB7IU44Vx6GpFMJd6RwByX2WJa-0fiztybHsyMIsOR2sZAgZ5rH4_holCGQg6TXV_4bh-Gm0fkj158jgDroKN2K0CtKWzEZiANkN_1BXDe6HhyphenhyphenitxDEp_igSKKo5YI_vdA1L6kTK8JJ_fnTqkaH-ast0Mxb15tmBF9ueP3-FlAqcBmtG/s1280/5.jpg"
                  alt={`Gallery image`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>

              <div  className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiM0u3C1A5PZAUdDlGzbTU612vrLrezjcAooCD7jmEw_DwFJCFxDVGlhF0a7GKEGSkOT1iODF-5ch1xHVxKH2kiMWH92j4Q-qMHFbIDNd6o8Ya4fEL14qTeSGEoOV-dzkVM56a-Pov1r_G4rrW2NNJAVxjNuMrtGFwBkjY9jAPKnka8knQ2dspyw6Uc_Mke/s1280/6.jpg"
                  alt={`Gallery image`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>


              <div  className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeUIoGXbha4ULzH_D52ukpzayjhQ8ifHmhgM8-FxgUy74yTmj96ln3O3aFx7p5ei7jVYqnLAb6SECkuyYx8Glom1BxKIKWZtFSzLwc8Di5px8AFFxvdrH3Vm3lSZ_UivfTJl_TZtafT7KKTEP74dFs9opiEBvRZG1ZNh7i1bEs7oEzmdU6lkT4Mn_gH3TU/s1280/7.jpg"
                  alt={`Gallery image`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>


              <div  className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRUIA7zGjz1nlwS-upRN7apCn1MGv35N1BRZ0snSUnRkalvSwZeadlka4R5CItS7Ycd2WwzOEFQYdrx9V_LJPLknRFozACGPcO27OVdqzsp8ie1Z5ZsptubtlY2JtGZeM8jtPbAaqnKTkuUPbNfTxGxwO-FKHs2hxovrsN9l76Q0SXT2b9iWInKm1E7noX/s1280/8.jpg"
                  alt={`Gallery image`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>

              <div  className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhULx0KHGYwETjhOVF2tCPEpQfyC0JSFyZdCMoq4McGeQ9T1aGrKuQN6j4GDr5gWmz1KSPi8ime76zg3OKaQw3tHuEZ3UYwzL0Zd_dnoQ8Bs5JtpGX1TE0Hl2PCdrg9mqBoFrY13OEE-fpA2wGcUEuCU-cCwIJDwoV5LDCKPaCZB0KzWsiZ-p2Xou2rKl1p/s1280/9.jpg"
                  alt={`Gallery image`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>


              

         
          </div>
        </div>
      </section>

      

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us to book your puja or for any queries about Kaal Sarp Dosh remedies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">
                      Kalyan Bhawan, Pavan Ganesh Nagar, Trimbakeshwar, Shirsagaon, Maharashtra 422212
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 1234567890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">kalsarpdoshivaran@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                    <Twitter className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                    <Youtube className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                      <Input placeholder="Your phone number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="Your email address" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea placeholder="Tell us about your requirements..." rows={4} />
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Map Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-orange-400">Find Us at Trimbakeshwar</h3>
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.8567890123456!2d73.5287!3d19.9317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9c7c8b123456%3A0x1234567890abcdef!2sTrimbakeshwar%20Temple!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96 md:h-[400px]"
              ></iframe>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Kaal Sarp Dosh Puja</h3>
              <p className="text-gray-300 mb-4">
                Authentic Vedic rituals for Kaal Sarp Dosh removal at the sacred Trimbakeshwar Temple.
              </p>
              <div className="flex gap-3">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transform hover:scale-125 transition-all duration-300" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transform hover:scale-125 transition-all duration-300" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transform hover:scale-125 transition-all duration-300" />
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transform hover:scale-125 transition-all duration-300" />
              </div>
            </div>

            <div className="transform hover:scale-105 transition-all duration-300">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 transform"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="transform hover:scale-105 transition-all duration-300">
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Anant Kaal Sarp Dosh Puja",
                  "Kulik Kaal Sarp Dosh Puja",
                  "Vasuki Kaal Sarp Dosh Puja",
                  "Shankpal Kaal Sarp Dosh Puja",
                  "Padam Kaal Sarp Dosh Puja",
                ].map((service, index) => (
                  <li
                    key={index}
                    className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform cursor-pointer"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="transform hover:scale-105 transition-all duration-300">
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-2 hover:text-white transition-colors duration-300">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0 animate-pulse" />
                  <span className="text-sm">Kalyan Bhawan, Pavan Ganesh Nagar, Trimbakeshwar, Maharashtra</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer">
                  <Phone className="w-4 h-4 animate-pulse" />
                  <span>+91 1234567890</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer">
                  <Mail className="w-4 h-4 animate-pulse" />
                  <span>kalsarpdoshivaran@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p className="animate-fade-in">&copy; 2024 Kaal Sarp Dosh Puja Trimbakeshwar. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out;
        }

        .animate-expand {
          animation: expand 2s ease-out;
        }

        .animate-count-up {
          animation: countUp 1s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 2s ease-out;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  )
}
