import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'
import PricingTable from '@/components/PricingTable'

export default function Ebook() {
  return (
    <>
      <Head>
        <title>How To Start a Trucking Business eBook | 26-Foot Box Truck Edition - $27</title>
        <meta name="description" content="Get Shakur Mac's complete guide to starting and scaling a 26-foot box truck business. Learn step-by-step how to launch your trucking empire." />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="hero-gradient text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* eBook Cover Image */}
                <div className="flex justify-center">
                  <div className="relative">
                    <img 
                      src="/images/howtostartatruckingbusinessebook.png" 
                      alt="How To Start and Scale a Trucking Business - 26 Foot Box Truck Edition by Shakur Mac" 
                      className="max-w-sm w-full rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -top-4 -right-4 bg-accent-gold text-black font-bold px-4 py-2 rounded-full text-sm shadow-lg">
                      72% OFF!
                    </div>
                  </div>
                </div>

                {/* Content & Form */}
                <div>
                  <div className="inline-block bg-accent-gold text-black font-bold px-4 py-2 rounded-full mb-6">
                    🔥 LIMITED TIME OFFER
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    How To Start and Scale a Trucking Business
                  </h1>
                  <p className="text-xl text-gray-300 mb-6">
                    The complete guide to launching your 26-foot box truck business from scratch.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <span className="text-accent-gold">✓</span>
                      Step-by-step startup roadmap
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-gold">✓</span>
                      Equipment & truck buying guide
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-gold">✓</span>
                      Finding loads & building routes
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-gold">✓</span>
                      Scaling to multiple trucks
                    </li>
                  </ul>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-5xl font-bold">$27</span>
                    <span className="text-gray-400 line-through text-2xl">$97</span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">72% OFF</span>
                  </div>

                  <div className="bg-white rounded-2xl p-6 text-gray-900">
                    <h3 className="text-xl font-bold mb-4 text-center">Get Instant Access</h3>
                    <LeadForm 
                      formId="ebook_purchase"
                      productId="ebook_27"
                      submitText="Buy Now - $27"
                      showPayment={true}
                    />
                    <p className="text-center text-sm text-gray-500 mt-4">
                      🔒 Secure checkout • Instant digital delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What's Inside */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="section-title text-center mb-4">What's Inside the eBook</h2>
              <p className="section-subtitle text-center mb-12">
                Everything you need to start your trucking business from scratch
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card">
                  <div className="text-4xl mb-4">🚚</div>
                  <h3 className="text-xl font-bold mb-2">Chapter 1: Getting Started</h3>
                  <p className="text-gray-600">
                    Business setup, licensing requirements, and what you need before buying your first truck.
                  </p>
                </div>

                <div className="card">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="text-xl font-bold mb-2">Chapter 2: Choosing Your Truck</h3>
                  <p className="text-gray-600">
                    How to buy or lease a 26-foot box truck. What to look for, what to avoid.
                  </p>
                </div>

                <div className="card">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-xl font-bold mb-2">Chapter 3: Insurance & DOT</h3>
                  <p className="text-gray-600">
                    Navigate insurance requirements, DOT regulations, and stay compliant.
                  </p>
                </div>

                <div className="card">
                  <div className="text-4xl mb-4">📦</div>
                  <h3 className="text-xl font-bold mb-2">Chapter 4: Finding Loads</h3>
                  <p className="text-gray-600">
                    Load boards, contracts, building relationships with shippers and brokers.
                  </p>
                </div>

                <div className="card">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-bold mb-2">Chapter 5: Pricing & Profits</h3>
                  <p className="text-gray-600">
                    How to price your services, manage expenses, and maximize profit margins.
                  </p>
                </div>

                <div className="card">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-xl font-bold mb-2">Chapter 6: Scaling Up</h3>
                  <p className="text-gray-600">
                    How to add more trucks, hire drivers, and build a fleet that runs without you.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Bonus Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="section-title text-center mb-4">Plus These Bonuses</h2>
              <p className="section-subtitle text-center mb-12">
                Valued at over $200 — Yours FREE with the eBook
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 border-2 border-accent-gold">
                  <div className="text-accent-gold font-bold mb-2">BONUS #1</div>
                  <h3 className="text-xl font-bold mb-2">Load Board Cheat Sheet</h3>
                  <p className="text-gray-600 mb-4">
                    Top load boards ranked, with tips on how to find the best-paying loads.
                  </p>
                  <p className="text-gray-400 line-through">Value: $47</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-accent-gold">
                  <div className="text-accent-gold font-bold mb-2">BONUS #2</div>
                  <h3 className="text-xl font-bold mb-2">Startup Checklist</h3>
                  <p className="text-gray-600 mb-4">
                    The exact step-by-step checklist to launch your trucking business fast.
                  </p>
                  <p className="text-gray-400 line-through">Value: $27</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-accent-gold">
                  <div className="text-accent-gold font-bold mb-2">BONUS #3</div>
                  <h3 className="text-xl font-bold mb-2">Vendor & Contact List</h3>
                  <p className="text-gray-600 mb-4">
                    Trusted vendors for trucks, insurance, factoring, and more.
                  </p>
                  <p className="text-gray-400 line-through">Value: $97</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Trucking Business Today
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                For less than the cost of dinner, you can have the complete roadmap to starting your trucking empire.
              </p>
              <a href="#top" className="btn-secondary text-lg inline-block">
                Get the eBook - Only $27
              </a>
              <p className="mt-6 text-gray-400 text-sm">
                ✅ Instant download • ✅ Lifetime access • ✅ 30-day money back guarantee
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
