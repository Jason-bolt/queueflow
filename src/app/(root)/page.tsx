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
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-20 dark:via-none dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  🎉 Trusted by 50,000+ businesses worldwide
                </div>
                <h1 className="text-5xl leading-tight font-bold text-gray-900 lg:text-6xl dark:text-white">
                  Eliminate Wait Times,{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                    Maximize Satisfaction
                  </span>
                </h1>
                <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                  Transform your customer service with intelligent queue
                  management. Let customers join virtually, track their position
                  in real-time, and serve them efficiently.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="flex transform items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-4 font-semibold text-gray-700 transition-all hover:border-blue-600 hover:text-blue-600 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400">
                  <Play className="h-5 w-5" />
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
        className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Loved by businesses worldwide
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              See how <span className="font-bold text-blue-600">QueueFlow</span>{" "}
              transforms customer experiences
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800 dark:shadow-gray-700"
              >
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-current text-yellow-400"
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
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 dark:from-blue-900 dark:to-purple-900">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Ready to eliminate wait times?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-blue-100">
              Join thousands of businesses already using QueueFlow to provide
              better customer experiences and streamline operations.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="transform rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-all hover:scale-105 hover:bg-gray-100">
                Start Free Trial - No Credit Card Required
              </button>
              <button className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white hover:text-blue-600">
                Schedule Demo
              </button>
            </div>
            <div className="text-sm text-blue-100">
              ✓ 14-day free trial ✓ Setup in minutes ✓ Cancel anytime
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QueueFlowHomepage;
