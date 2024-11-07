import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Success! You're All Set
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Your account has been successfully created and you're ready to start your
          financial journey with FinanceFlow.
        </p>

        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <NextStep
              number="1"
              title="Complete Your Profile"
              description="Add your personal information and preferences"
            />
            <NextStep
              number="2"
              title="Connect Your Accounts"
              description="Link your bank accounts and credit cards"
            />
            <NextStep
              number="3"
              title="Set Your Goals"
              description="Define your financial goals and create a plan"
            />
          </div>

          <div className="flex justify-center space-x-4">
            <Link
              to="/profile"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go to Dashboard
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function NextStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="h-8 w-8 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 mx-auto">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Success;