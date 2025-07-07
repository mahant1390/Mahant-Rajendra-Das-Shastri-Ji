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
  MessageCircleIcon,
  PhoneCallIcon,
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { FaWhatsapp } from "react-icons/fa"
import { GiLotus } from "react-icons/gi"

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
    <div className="min-h-screen bg-white relative">
      {/* Om SVG Background for spiritual vibes */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 select-none">
        <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="50%" y="30%" textAnchor="middle" fontSize="120" fill="#f59e42" opacity="0.15" fontFamily="serif">ॐ</text>
          <text x="20%" y="80%" textAnchor="middle" fontSize="80" fill="#fbbf24" opacity="0.12" fontFamily="serif">ॐ</text>
          <text x="80%" y="60%" textAnchor="middle" fontSize="100" fill="#fb7185" opacity="0.10" fontFamily="serif">ॐ</text>
        </svg>
      </div>
      {/* Floating Phone call Button */}
      <a
        href="tel:+919243011008"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center w-16 h-16 "
        title="Call"
        style={{ boxShadow: '0 4px 24px 0 rgba(34,197,94,0.3)' }}
      >
        <PhoneCallIcon size={36} />
      </a>
      <a
        href="https://wa.me/+919243011008"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg flex items-center justify-center w-16 h-16"
        title="WhatsApp"
        style={{ boxShadow: '0 4px 24px 0 rgba(37,211,102,0.3)' }}
      >
        <FaWhatsapp size={36} />
      </a>
     

     
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-orange-600">कालसर्प निवारण पूजा उज्जैन </div>

            
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
                <a href="tel:+919243011008">+91 9243011008</a>
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
                    <a href="tel:+919243011008">+919243011008</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-gradient-to-r from-orange-100 to-red-100 overflow-hidden">
        {/* Swastika PNG background for Hero section */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none">
          <img
            src="/swastika.png"
            alt="Swastika Spiritual Background"
            className="w-[60vw] max-w-[600px] opacity-20 mix-blend-multiply"
            style={{ filter: 'drop-shadow(0 0 40px #f59e42)' }}
          />
        </div>

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
            राजेश गुरु जी उज्जैन जी में आपका स्वागत है - आपके विश्वसनीय वैदिक अनुष्ठान विशेषज्ञ
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-slide-in-left delay-200">
              उज्जैन  मंदिर में अनुभवी पंडितों द्वारा किए गए प्रामाणिक वैदिक अनुष्ठानों से कालसर्प दोष से छुटकारा पाएं।
              राजेश गुरु जी उज्जैन जी, हम दुनिया में कहीं भी हों, आपके घर तक पवित्र वैदिक अनुष्ठान लाते हैं। राजेश गुरु जी उज्जैन जी के नेतृत्व में, जो 20 से अधिक वर्षों के अनुभव के साथ एक अनुभवी वैदिक विद्वान और कर्मकांडी हैं, हमारा मिशन प्राचीन हिंदू धर्मग्रंथों में निहित शक्तिशाली, व्यक्तिगत अनुष्ठानों के माध्यम से भक्तों को जीवन की बाधाओं को दूर करने में मदद करना है।
            </p>
           
<div className="flex justify-center">
  <Button className="relative"> Call us: +91 9243011008</Button>
</div>
            
            <br/>
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
          <form action="https://getform.io/f/bjjolznb" method="POST" className="w-full lg:w-96 animate-slide-in-right">
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-800">पूछताछ करें</CardTitle>
                <div className="w-16 h-1 bg-orange-600 mx-auto animate-pulse"></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <label className="block text-sm font-medium text-gray-700 mb-2">नाम</label>
                  <Input
                    name="name"
                    placeholder="अपना नाम दर्ज करें"
                    className="w-full focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  />
                </div>
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    फ़ोन नंबर <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="phone_number"
                    placeholder="फ़ोन नंबर दर्ज करें"
                    className="w-full focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  />
                </div>
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    पूजा की तारीख <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="puja_date"
                    type="date"
                    className="w-full focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  />
                </div>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-pulse">
                  अपनी पूजा बुक करें
                </Button>
              </CardContent>
            </Card>
          </form>
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
             About Rajesh Guru Ji Ujjain
              </h2>
              <div className="w-24 h-1 bg-orange-600 mb-6 animate-expand"></div>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                कालसर्प निवारण पूजा विशेषज्ञ होने के नाते गुरुजी को 20 वर्षो का अनुभव कालसर्प निवारण पूजा आयोजित करने में प्राप्त है, क्योंकि गुरुजी ने आज तक बहुत सारे शांति पूजा की सीमा पार कर दी है, और सभी (यज्ञ) शांति या पूजा विधि के बाद तुरन्त उत्कृष्ट परिणाम प्राप्त करते हैंं।
                </p>
                <p className="transform hover:translate-x-2 transition-transform duration-300 delay-100">
                राजेश गुरु जी उज्जैन
 जी का जन्म भूमि महाकाल की नगरी उज्जैन(अवंतिका)है।पंडित जी को बाल काल से ही पंडिताई एवं दोष निवारण पुजा मे रूचि थी।पंडित जी के पिताजी एवं दादाजी भी यही कर्म करते थे,ओर वो भी गृह रहस्य एवं दोष निवारण के वेदिक पद्धति का ज्ञान गुरूजी के पास सिद्धस्त है।जिसके फलस्वरूप आज गुरूजी तुरंत उत्कृष्ट परिणाम प्राप्त करते है ओर जो भी यजमान की बाधा ,कष्ट ,पीड़ा ,रोग ,दोष होते है ।गुरूजी कहते है कि जो यजमान पुजा कराने आये बिल्कूल,सच्चे मन से ,श्रद्धा से ,भाव से,पुजन करे तो ही उत्कृष्ट परिणाम प्राप्त होगा नाकी तर्क-वितर्क करने से।
                </p>
                <p className="transform hover:translate-x-2 transition-transform duration-300 delay-200">
                कालसर्प शांति करने से 9 विभिन्न प्रकार के सांपों का आशीर्वाद प्राप्त होता है। कालसर्प निवारण शांति पूजा के साथ राहु और केतु पूजा सफलता के द्वार खोलती है। नाग की सोने की मूर्ति की पूजा करने से देवी लक्ष्मी की कृपा प्राप्त होती है।
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { number: "20+", label: "Exp" },
                  { number: "11000+", label: "Pooja attended" },
                  { number: "10+", label: "Number of types of pooja" },
                  { number: "4.9★", label: "Rating" },
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
              राजेश गुरु जी उज्जैन जी की ऑनलाइन पूजा सेवा कैसे काम करती है?
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6 animate-expand"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              हमारी व्यापक ऑनलाइन पूजा सेवा के साथ अपने घर से ही प्रामाणिक वैदिक अनुष्ठानों का अनुभव करें
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "अपनी पूजा बुक करें",
                description:
                  "अपनी पसंदीदा पूजा की तारीख और समय बुक करने के लिए हमें फोन, व्हाट्सएप या हमारी वेबसाइट फॉर्म के माध्यम से संपर्क करें",
              },
              {
                step: 2,
                title: "विवरण प्रदान करें",
                description:
                  "व्यक्तिगत पूजा व्यवस्था के लिए अपना जन्म विवरण, गोत्र और विशिष्ट आवश्यकताएं साझा करें",
              },
              {
                step: 3,
                title: "लाइव स्ट्रीमिंग",
                description:
                  "हमारे अनुभवी पंडितों द्वारा उज्जैन  में अनुष्ठान करते हुए वीडियो कॉल के माध्यम से अपनी पूजा लाइव देखें",
              },
              {
                step: 4,
                title: "प्रसाद प्राप्त करें",
                description:
                  "3-5 दिनों के भीतर अपने घर पर आशीर्वाद प्राप्त प्रसाद, फोटो और पूजा प्रमाण पत्र प्राप्त करें",
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
              अपनी ऑनलाइन पूजा यात्रा शुरू करें
            </Button>
          </div>
        </div>
      </section>
            
      
      <section className="py-20 bg-white" data-animate id="why-choose-us-section">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has("why-choose-us-section") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">राजेश गुरु जी उज्जैन जी को क्यों चुनें?
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6 animate-expand"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              हमारी प्रामाणिक, व्यक्तिगत और करुणामय वैदिक अनुष्ठान सेवाओं के साथ अंतर का अनुभव करें।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
                icon: <Award className="w-12 h-12 text-orange-600" />,
                title: "अनुभवी और प्रामाणिक",
                description: "राजेश गुरु जी उज्जैन जी को वैदिक अनुष्ठानों में 20 वर्षों से अधिक का अनुभव है, जो प्रामाणिक और प्रभावी पूजा सुनिश्चित करते हैं।",
              },
              {
                icon: <Users className="w-12 h-12 text-orange-600" />,
                title: "व्यक्तिगत दृष्टिकोण",
                description: "हम आपकी विशिष्ट आवश्यकताओं और ज्योतिषीय विवरणों के अनुरूप प्रत्येक पूजा को अनुकूलित करते हैं, जिससे अधिकतम लाभ सुनिश्चित होता है।",
              },
              {
                icon: <Star className="w-12 h-12 text-orange-600" />,
                title: "विश्वसनीय और भरोसेमंद",
                description: "हजारों भक्तों ने हमारी सच्ची और समर्पित सेवाओं के माध्यम से सकारात्मक परिवर्तन का अनुभव किया है।",
              },
              {
                icon: <Calendar className="w-12 h-12 text-orange-600" />,
                title: "सुविधाजनक ऑनलाइन सेवा",
                description: "हमारी लाइव स्ट्रीमिंग और ऑनलाइन सहायता के साथ दुनिया में कहीं से भी पवित्र अनुष्ठानों में भाग लें।",
              },
              {
                icon: <GiLotus className="w-12 h-12 text-orange-600" />,
                title: "आध्यात्मिक मार्गदर्शन",
                description: "अनुष्ठानों से परे, हम आपको जीवन की चुनौतियों का सामना करने में मदद करने के लिए आध्यात्मिक मार्गदर्शन और सहायता प्रदान करते हैं।",
              },
              {
                icon: <Phone className="w-12 h-12 text-orange-600" />,
                title: "समर्पित समर्थन",
                description: "हमारी टीम बुकिंग से लेकर पूजा के बाद के समर्थन तक हर कदम पर आपकी सहायता के लिए उपलब्ध है।",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-orange-50 p-6 rounded-lg shadow-md text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                  visibleSections.has("why-choose-us-section") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome to Trusted Service */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              आपके विश्वसनीय कालसर्प दोष निवारण पूजा में आपका स्वागत है
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            कालसर्प निवारण पूजा विशेषज्ञ होने के नाते गुरुजी को 20 वर्षो का अनुभव पूजा आयोजित करने में प्राप्त है,राजेश गुरु जी उज्जैन
            दुवारा कि गई सभी पुजाये अर्थात कालसर्प दोष निवारण पूजा,मंगल भात पूजा,पितृ दोष पूजा,महामृत्युंजय जाप,अर्क/कुंभ विवाह,नव ग्रह शांति,बगलामुखी माता पुजा एवं विशेष संतान प्राप्ति का उत्कृष्ट परिणाम तुरंत प्राप्त होता है।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Spiritual spiral/rounded card with prominent Om background */}
            <Card className="relative text-center p-8 rounded-3xl shadow-xl border-t-4 border-orange-600 overflow-hidden group hover:scale-105 transition-transform duration-300 bg-orange-50">
              {/* Prominent Om SVG background */}
              <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="50%" y="60%" textAnchor="middle" fontSize="200" fill="#f59e42" opacity="0.35" fontFamily="serif" style={{ filter: 'drop-shadow(0 0 24px #f59e42)' }}>ॐ</text>
                </svg>
              </div>
              <div className="relative z-10 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 relative z-10">प्रामाणिक अनुष्ठान</h3>
              <p className="text-gray-600 relative z-10">
                प्रत्येक पूजा प्राचीन वैदिक परंपराओं के अनुसार उचित मंत्रों, चढ़ावों और प्रक्रियाओं के साथ की जाती है
              </p>
            </Card>
            <Card className="relative text-center p-8 rounded-3xl shadow-xl border-t-4 border-orange-600 overflow-hidden group hover:scale-105 transition-transform duration-300 bg-orange-50">
              <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="50%" y="60%" textAnchor="middle" fontSize="200" fill="#f59e42" opacity="0.35" fontFamily="serif" style={{ filter: 'drop-shadow(0 0 24px #f59e42)' }}>ॐ</text>
                </svg>
              </div>
              <div className="relative z-10 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 relative z-10">विशेषज्ञ मार्गदर्शन</h3>
              <p className="text-gray-600 relative z-10">
                हमारे अनुभवी पंडित आपकी आध्यात्मिक यात्रा के दौरान व्यक्तिगत परामर्श और मार्गदर्शन प्रदान करते हैं
              </p>
            </Card>
            <Card className="relative text-center p-8 rounded-3xl shadow-xl border-t-4 border-orange-600 overflow-hidden group hover:scale-105 transition-transform duration-300 bg-orange-50">
              <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="50%" y="60%" textAnchor="middle" fontSize="200" fill="#f59e42" opacity="0.35" fontFamily="serif" style={{ filter: 'drop-shadow(0 0 24px #f59e42)' }}>ॐ</text>
                </svg>
              </div>
              <div className="relative z-10 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 relative z-10">सिद्ध परिणाम</h3>
              <p className="text-gray-600 relative z-10">
                हजारों भक्तों ने हमारी पूजा सेवाओं के बाद अपने जीवन में सकारात्मक बदलाव का अनुभव किया है
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
                <div className="text-3xl font-bold mb-2">20+</div>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">हमारे भक्त क्या कहते हैं</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              हजारों संतुष्ट भक्तों की प्रशंसापत्र पढ़ें जिन्होंने अपने जीवन में सकारात्मक बदलाव का अनुभव किया है
            </p>
          </div>

          {/* Overall Rating */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-600 mb-2">4.9</div>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-orange-400 text-orange-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "राजेश कुमार",
                location: "मुंबई, महाराष्ट्र",
                rating: 5,
                review:
                  "राजेश गुरुजी उज्जैन जी ने मेरी कालसर्प दोष निवारण पूजा पूरी निष्ठा से की। 3 महीने के भीतर, मुझे काम पर पदोन्नति मिली और मेरी पारिवारिक समस्याएं हल हो गईं। अत्यधिक अनुशंसित!",
                date: "2 सप्ताह पहले",
              },
              {
                name: "प्रिया शर्मा",
                location: "दिल्ली, एनसीआर",
                rating: 5,
                review:
                  "ऑनलाइन पूजा सेवा अद्भुत थी! मैं अपने घर से पूरी विधि लाइव देख सकती थी। पंडित जी ने सब कुछ स्पष्ट रूप से समझाया और मुझे 4 दिनों के भीतर प्रसाद मिल गया। बहुत संतुष्ट!",
                date: "1 महीने पहले",
              },
              {
                name: "अमित पटेल",
                location: "अहमदाबाद, गुजरात",
                rating: 5,
                review:
                  "व्यवसाय में वर्षों के नुकसान के बाद, मैंने कालसर्प दोस निवारण  दोष पूजा करने का फैसला किया। परिणाम चमत्कारी थे! मेरा व्यवसाय बढ़ने लगा और सभी बाधाएं दूर हो गईं।",
                date: "3 सप्ताह पहले",
              },
              {
                name: "सुनीता देवी",
                location: "पुणे, महाराष्ट्र",
                rating: 5,
                review:
                  "गुरुजी का शास्त्रों का ज्ञान अविश्वसनीय है। उन्होंने मुझे पूरी प्रक्रिया में मार्गदर्शन किया और इतनी भक्ति के साथ पूजा की। मेरे बेटे की शादी 2 महीने के भीतर तय हो गई!",
                date: "1 सप्ताह पहले",
              },
              {
                name: "विक्रम सिंह",
                location: "जयपुर, राजस्थान",
                rating: 5,
                review:
                  "प्रामाणिक अनुष्ठानों के साथ पेशेवर सेवा। लाइव स्ट्रीमिंग की गुणवत्ता उत्कृष्ट थी और मुझे लगा जैसे मैं मंदिर में मौजूद था। इसे संभव बनाने के लिए धन्यवाद!",
                date: "2 महीने पहले",
              },
              {
                name: "मीरा जोशी",
                location: "बेंगलुरु, कर्नाटक",
                rating: 5,
                review:
                  "शुरुआत में मुझे ऑनलाइन पूजा पर संदेह था, लेकिन अनुभव मेरी उम्मीदों से बढ़कर था। पूजा के तुरंत बाद मेरे जीवन में सकारात्मक बदलाव आने लगे। इस सेवा को पाकर धन्य हूं!",
                date: "3 सप्ताह पहले",
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
      <section id="about" className="py-20 bg-white relative">
        {/* Om SVG background for About section */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-10 select-none">
          <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="60%" y="30%" textAnchor="middle" fontSize="120" fill="#f59e42" opacity="0.10" fontFamily="serif">ॐ</text>
            <text x="30%" y="80%" textAnchor="middle" fontSize="80" fill="#fbbf24" opacity="0.08" fontFamily="serif">ॐ</text>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-5xl text-orange-600 animate-pulse mb-2">ॐ</span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
              कालसर्प दोष के बारे में
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              कालसर्प दोष तब बनता है जब सभी ग्रह राहु और केतु के बीच आ जाते हैं। यह जीवन, करियर और रिश्तों में बाधाएं पैदा करता है।
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow relative z-10">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-orange-600 animate-pulse">ॐ</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 flex items-center justify-center gap-2">ॐ प्रामाणिक अनुष्ठान</h3>
              <p className="text-gray-600">प्राचीन शास्त्रों के अनुसार किए गए पारंपरिक वैदिक अनुष्ठान</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow relative z-10">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-orange-600 animate-pulse">ॐ</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 flex items-center justify-center gap-2">ॐ अनुभवी पंडित</h3>
              <p className="text-gray-600">शास्त्रों के गहन ज्ञान वाले योग्य और अनुभवी पंडित</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow relative z-10">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-orange-600 animate-pulse">ॐ</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 flex items-center justify-center gap-2">ॐ पवित्र स्थान</h3>
              <p className="text-gray-600">पवित्र उज्जैन  मंदिर में किया गया, जो 12 ज्योतिर्लिंगों में से एक है</p>
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
              हम आपकी विशिष्ट आवश्यकताओं और ग्रहों की स्थिति के आधार पर विभिन्न प्रकार की कालसर्प दोष निवारण पूजा  प्रदान करते हैं।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "कालसर्प दोष निवारण पूजा",
                description: "कालसर्प दोष के प्रभावों को कम करने के लिए व्यापक पूजा।",

                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCbnzes9aOfkVtAl_x_Noy7Rl8-Fy3Bg3e4VfOciJFREHFO98flDRpw1vXG9EjGiBfegpSpZYyy8I2nP14pIHwrocBReGq3ymetI32UA9qeCLQ51wLVeeNNnmDiTqpSwy-PnjZsdVvIf5dCieaDaTSeZ5-88l7YtWraFa3JmOf8OWRs4D0GER3mbTmy6U/s500/Kaalsarp-Dosh.jpeg",
              },
              {
                title: "मंगल भात पूजन ",
                description: "मंगल दोष (मंगल ग्रह की पीड़ा) को शांत करने हेतु विशेष पूजा, जो जीवन में सौहार्द और समृद्धि लाती है।",

                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_nzesWcad6VM43HEnqo5cbAT-hYF_oS8EoL617N9wY6oGTcM06jiVoZW1Xo5Bh-iz1mhz3rxk0Hl5BzrYSIGrfokAz9jk9rupZJJTUlAK1dYIWvCYT6B8RFm4-IR6ZkkMCguyoh0l9xF503P-yuUuv1V86ozGUt7cwy40EYtAG-6W7SS3ou4WwPETiNY/s275/images.jpeg",
              },
              {
                title: "कुंभ विवाह",
                description: "मंगल दोष या विवाह में अन्य ज्योतिषीय बाधाओं वाले व्यक्तियों के लिए किया जाने वाला अनुष्ठान।",

                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSSoUXjqOR05rchCIZV7RTJgh_moOkSQ9hFifP_S-SMxLA0lpw6t2_hblTSNIVGZ6sEGhjh5XJOmphn8ggzPHzgeDSDdFO4uSB-EyWVa9FXMzgINkygbOUYyhUhgOtgvMT_agWbvevd3vYcYkYQZS_1CI3Srv_e_LJK1jutcN-S5qFkSvLxDZFY5ZqLyU/s350/KUMBH%20VIVAH.webp",
              },
              {
                title: "अर्क विवाह",
                description: "किसी की कुंडली में सूर्य के बुरे प्रभावों को कम करने के लिए किया जाता है, खासकर विवाह के लिए।",

                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqxwyYeDBRuL2AuO4QomnMNFrqUKdHKYRPSmApDP3uCbpjkziO4eLJdq9WTKNQuRpv5DD3IODZcg3M4LI77kDdexDqhm6u3nvufESndXBWOtoPktyAsDHZDUpj8Go5vr0m1VoOrAJPAsDHYvHfpylqCa6_n6iU9-H9_BKQWDCeoVgFsv0E_V7ocIPDaQ0/s225/images%20(1).jpeg",
              },
              {
                title: "ग्रह दोष निवारण पूजा",
                description: "हानिकारक ग्रहों के प्रभावों को शांत करने और शांति और कल्याण लाने के लिए सामान्य पूजा।",

                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGicKztO4RReAAnhJ2N3L_d1Ad8MhF3TwUBrOvejE8MzMx6A_iumCZHKQucGcQ07BnMoqFE_HTNSvvHeoaCFs0YAL2oFr3M0ka5wPMdb9mHl0hz9RQ4G0AczKzDBcNJYx8uNnJftBQTsWbnTg6y5EG8qHvkXtDjkp4bFTZwAwRUikD7Ev9FX4OMxLsD5k/s234/images%20(2).jpeg",
              },
              {
                title: "मंगल शांति पूजा",
                description: "भगवान मंगल (मंगल) को प्रसन्न करने और उसके नकारात्मक प्रभाव को कम करने के लिए विशेष पूजा।",

                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikH0JX067PG02Q4EHrIwU0tEqOyBTxmki8-vB3o3oNsFHtqvEk1GHe8OXnluT3o4HNfxnFkQofr8SVwB0OavvpCItcUNGk1ETdxJI5stvCusGJSCGeU1B8xMQ4OhVHX5a5CxcTgaYpZJPGfzof4JA6rx7Ka2aHCaImjSBk77GQITwdLFP8v-9J2NZuDh8/s263/images%20(3).jpeg",
              },
            ].map((puja, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow relative z-10 overflow-hidden rounded-lg group"
              >
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={puja.image}
                    alt={puja.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-opacity duration-300"></div>
                <div className="relative z-10 text-white">
                  <h3 className="text-xl font-semibold mb-3 flex items-center justify-center gap-2">{puja.title}</h3>
                  <p className="text-gray-200">{puja.description}</p>

                  <Button onClick={() => scrollToSection("contact")} className="bg-orange-600 hover:bg-orange-700 mt-4">
                    अभी बुक करें
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">गैलरी</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              हमारी पूजा समारोहों और पवित्र उज्जैन  मंदिर की झलकियाँ
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
      <section id="contact" className="py-20 bg-white relative">
        {/* Om SVG background for Contact section */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-10 select-none">
          <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="50%" y="60%" textAnchor="middle" fontSize="140" fill="#f59e42" opacity="0.10" fontFamily="serif">ॐ</text>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">हमसे संपर्क करें</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              अपनी पूजा बुक करने या कालसर्प दोष निवारण के बारे में किसी भी प्रश्न के लिए हमसे संपर्क करें
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">संपर्क करें</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">पता</h4>
                    <p className="text-gray-600">
                    तिरुपति ड्रीम्स बी ब्लॉक मकान न 21 नागदा बाई पास उज्जैन म प्र पिन नंबर 456001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">फ़ोन</h4>
                    <p className="text-gray-600">+91 9243011008</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">ईमेल</h4>
                    <p className="text-gray-600">kalsarppoojamahant@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                    <a href="https://www.instagram.com/mahant_2214?igsh=MXZrcnEycGkyOTQzeQ=="><Facebook className="w-5 h-5 text-white" /></a>
                  </div>
                
                  <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                    <a href="https://www.instagram.com/mahant_2214?igsh=MXZrcnEycGkyOTQzeQ=="><Instagram className="w-5 h-5 text-white" /></a>
                  </div>
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                    <a href="https://youtube.com/channel/UCsVRKbTSmLIOK5lGUs__NXA?si=12XFwab6yidNoLiZ"><Youtube className="w-5 h-5 text-white" /></a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800">Send us a Message</CardTitle>
                </CardHeader>
                <form action="https://getform.io/f/bjjolznb" method="POST">
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <Input name="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                      <Input name="phone" placeholder="Your phone number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input name="email" type="email" placeholder="Your email address" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <Input name="preferred_date" type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea name="message" placeholder="Tell us about your requirements..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3">Send Message</Button>
                </CardContent>
                </form>
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
            <h3 className="text-2xl font-bold mb-6 text-center text-orange-400">Find Us at ujjain</h3>
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.8567890123456!2d73.5287!3d19.9317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9c7c8b123456%3A0x1234567890abcdef!2sujjain%20Temple!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
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
              <h3 className="text-xl font-bold mb-4 text-orange-400">कालसर्प दोष  पूजा </h3>
              <p className="text-gray-300 mb-4">
              उज्जैन के पवित्र मंदिर में कालसर्प दोष निवारण के लिए प्रामाणिक वैदिक अनुष्ठान।
              </p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/profile.php?id=100019534035147"><Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transform hover:scale-125 transition-all duration-300" /></a>
                <a href="https://www.instagram.com/mahant_2214?igsh=MXZrcnEycGkyOTQzeQ=="> <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transform hover:scale-125 transition-all duration-300" /></a>
                <a href="https://youtube.com/channel/UCsVRKbTSmLIOK5lGUs__NXA?si=12XFwab6yidNoLiZ"><Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transform hover:scale-125 transition-all duration-300" /></a>
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
                 "अनंत काल सर्प दोष निवारण पूजा",
                " कुलिक काल सर्प दोष निवारण पूजा",
                 
                " वासुकी काल सर्प दोष निवारण पूजा",
                 
                " शंखपाल काल सर्प दोष निवारण पूजा",
                 
               "  पद्म काल सर्प दोष निवारण पूजा    "            ].map((service, index) => (
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
                  <span className="text-sm">तिरुपति ड्रीम्स बी ब्लॉक मकान न 21 नागदा बाई पास उज्जैन म प्र पिन नंबर 456001
                  </span>
                </div>
                <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer">
                  <Phone className="w-4 h-4 animate-pulse" />
                  <span>+919243011008</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer">
                  <Mail className="w-4 h-4 animate-pulse" />
                  <span>kalsarppoojamahant@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p className="animate-fade-in">&copy; 2025 Kaal Sarp Dosh Puja ujjain. All rights reserved.<br/> Made by <a style={{color:"blue"}} href="http://CodeWithCurious.com">CodeWithCurious.com</a> by ❤</p>
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
