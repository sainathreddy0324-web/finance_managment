import React from 'react';
import { ArrowRight, PieChart, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-16">
        <h1 className="text-5xl font-bold text-gray-900">
          Take Control of Your{' '}
          <span className="text-blue-600">Financial Future</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Smart financial management solutions to help you track, save, and grow
          your wealth with confidence.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<PieChart className="h-8 w-8 text-blue-600" />}
          title="Smart Analytics"
          description="Get detailed insights into your spending patterns and financial health."
        />
        <FeatureCard
          icon={<Shield className="h-8 w-8 text-blue-600" />}
          title="Secure Platform"
          description="Bank-level security to keep your financial data safe and protected."
        />
        <FeatureCard
          icon={<TrendingUp className="h-8 w-8 text-blue-600" />}
          title="Investment Tracking"
          description="Monitor your investments and portfolio performance in real-time."
        />
      </section>

      {/* Stats Section */}
      <section className="bg-white rounded-2xl shadow-xl p-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <StatCard number="50K+" label="Active Users" />
          <StatCard number="$2M+" label="Managed Assets" />
          <StatCard number="99.9%" label="Uptime" />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="space-y-4">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="space-y-2">
      <div className="text-3xl font-bold text-blue-600">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export default Home;