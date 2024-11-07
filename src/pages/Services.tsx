import React from 'react';
import { PieChart, TrendingUp, CreditCard, Wallet, Shield, LineChart } from 'lucide-react';

function Services() {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive financial management tools and services to help you achieve
          your financial goals.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid md:grid-cols-2 gap-8">
        <ServiceCard
          icon={<PieChart className="h-8 w-8 text-blue-600" />}
          title="Expense Tracking"
          description="Track your spending patterns and categorize expenses automatically."
          features={[
            'Automatic categorization',
            'Custom categories',
            'Receipt scanning',
            'Monthly reports',
          ]}
        />
        <ServiceCard
          icon={<TrendingUp className="h-8 w-8 text-blue-600" />}
          title="Investment Management"
          description="Monitor and manage your investment portfolio with real-time updates."
          features={[
            'Portfolio tracking',
            'Investment analytics',
            'Market insights',
            'Performance reports',
          ]}
        />
        <ServiceCard
          icon={<CreditCard className="h-8 w-8 text-blue-600" />}
          title="Budget Planning"
          description="Create and manage budgets to reach your financial goals faster."
          features={[
            'Custom budget creation',
            'Goal setting',
            'Progress tracking',
            'Smart alerts',
          ]}
        />
        <ServiceCard
          icon={<LineChart className="h-8 w-8 text-blue-600" />}
          title="Financial Analytics"
          description="Get detailed insights into your financial health with advanced analytics."
          features={[
            'Spending analysis',
            'Income tracking',
            'Trend identification',
            'Custom reports',
          ]}
        />
      </section>

      {/* Premium Features */}
      <section className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Premium Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <PremiumFeature
            icon={<Shield className="h-6 w-6 text-green-600" />}
            title="Advanced Security"
            description="Enhanced security features including biometric authentication and encrypted data storage."
          />
          <PremiumFeature
            icon={<Wallet className="h-6 w-6 text-green-600" />}
            title="Wealth Management"
            description="Personalized wealth management strategies and advisory services."
          />
          <PremiumFeature
            icon={<CreditCard className="h-6 w-6 text-green-600" />}
            title="Premium Support"
            description="24/7 priority customer support and dedicated financial advisor."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to take control of your finances?
        </h2>
        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Get Started Now
        </button>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, features }: { icon: React.ReactNode; title: string; description: string; features: string[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="space-y-4">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PremiumFeature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Services;