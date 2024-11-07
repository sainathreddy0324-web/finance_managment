import React from 'react';
import { Shield, Users, Award, Target } from 'lucide-react';

function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About FinanceFlow
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're on a mission to make financial management accessible, intuitive, and
          empowering for everyone.
        </p>
      </section>

      {/* Values Section */}
      <section className="grid md:grid-cols-2 gap-8">
        <ValueCard
          icon={<Shield className="h-8 w-8 text-blue-600" />}
          title="Security First"
          description="Your financial data is protected with bank-level security and encryption."
        />
        <ValueCard
          icon={<Users className="h-8 w-8 text-blue-600" />}
          title="Customer Focused"
          description="We put our customers first and build solutions that matter to you."
        />
        <ValueCard
          icon={<Award className="h-8 w-8 text-blue-600" />}
          title="Excellence"
          description="We strive for excellence in everything we do, from code to customer service."
        />
        <ValueCard
          icon={<Target className="h-8 w-8 text-blue-600" />}
          title="Innovation"
          description="Constantly innovating to provide the best financial tools and features."
        />
      </section>

      {/* Team Section */}
      <section className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TeamMember
            name="Sarah Johnson"
            role="CEO & Founder"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200"
          />
          <TeamMember
            name="Michael Chen"
            role="CTO"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200"
          />
          <TeamMember
            name="Emily Rodriguez"
            role="Head of Product"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in 2023, FinanceFlow began with a simple idea: make financial
          management accessible to everyone. What started as a small team of
          passionate developers and financial experts has grown into a
          comprehensive platform trusted by thousands of users worldwide.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          Today, we continue to innovate and expand our services, always keeping
          our core mission in mind: empowering individuals to take control of
          their financial future.
        </p>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
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

function TeamMember({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}

export default About;