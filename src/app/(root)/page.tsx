import { ArrowRight, Star, Play } from "lucide-react";

import AnimatedStats from "../../components/client/AnimatedStats";
import NavBar from "../../components/client/NavBar";
import FeaturesSection from "../../components/server/FeaturesSection";
import HeroVisual from "../../components/server/HeroVisual";
import HowItWorks from "../../components/server/HowItWorks";
import Pricing from "../../components/server/Pricing";

const QueueFlowHomepage = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Operations Manager",
      company: "Metro Bank",
      content:
        "QueueFlow reduced our customer wait times by 70%. The analytics help us optimize staffing during peak hours.",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      role: "Store Manager",
      company: "TechFix Solutions",
      content:
        "Our customers love the transparency. They can see their position and estimated wait time in real-time.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "Customer Service Director",
      company: "HealthFirst Clinic",
      content:
        "The email verification feature helps us maintain organized queues while respecting patient privacy.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-none dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium dark:bg-blue-900 dark:text-blue-300">
                  🎉 Trusted by 50,000+ businesses worldwide
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight dark:text-white">
                  Eliminate Wait Times,{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                    Maximize Satisfaction
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed dark:text-gray-300">
                  Transform your customer service with intelligent queue
                  management. Let customers join virtually, track their position
                  in real-time, and serve them efficiently.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              {/* Animated Stats */}
              <AnimatedStats />
            </div>

            {/* Hero Visual */}
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Loved by businesses worldwide
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              See how <span className="text-blue-600 font-bold">QueueFlow</span>{" "}
              transforms customer experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg dark:bg-gray-800 dark:shadow-gray-700"
              >
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic dark:text-gray-300">
                    <q>{testimonial.content}</q>
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-blue-600 font-medium dark:text-blue-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Pricing />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to eliminate wait times?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of businesses already using QueueFlow to provide
              better customer experiences and streamline operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                Start Free Trial - No Credit Card Required
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all">
                Schedule Demo
              </button>
            </div>
            <div className="text-blue-100 text-sm">
              ✓ 14-day free trial ✓ Setup in minutes ✓ Cancel anytime
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QueueFlowHomepage;
