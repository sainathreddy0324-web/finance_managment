import React from 'react';
import { User, CreditCard, Wallet, Bell, Settings } from 'lucide-react';

function Profile() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="h-12 w-12 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <StatCard
            icon={<Wallet className="h-6 w-6 text-blue-600" />}
            label="Total Balance"
            value="$24,500"
          />
          <StatCard
            icon={<CreditCard className="h-6 w-6 text-green-600" />}
            label="Monthly Savings"
            value="$2,300"
          />
          <StatCard
            icon={<Bell className="h-6 w-6 text-purple-600" />}
            label="Active Goals"
            value="4"
          />
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          <Section title="Personal Information" icon={<User className="h-5 w-5" />}>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Full Name" value="John Doe" />
              <Field label="Email" value="john.doe@example.com" />
              <Field label="Phone" value="+1 (555) 123-4567" />
              <Field label="Location" value="New York, USA" />
            </div>
          </Section>

          <Section title="Security Settings" icon={<Settings className="h-5 w-5" />}>
            <div className="space-y-4">
              <button className="text-blue-600 hover:text-blue-700">
                Change Password
              </button>
              <button className="text-blue-600 hover:text-blue-700">
                Enable Two-Factor Authentication
              </button>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex items-center space-x-3">
        {icon}
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-lg font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}

function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="border-t pt-6">
      <div className="flex items-center space-x-2 mb-4">
        {icon}
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-gray-900">{value}</p>
    </div>
  );
}

export default Profile;