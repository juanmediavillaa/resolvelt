import React from 'react';

// Importing images from assets folder
import onlinePaymentDebtor from '../assets/images/online-payment-debtor.jpg';
import paymentPlanDebtors from '../assets/images/payment-plan-debtors.jpg';
import debtRecovery from '../assets/images/debt-recovery.jpg';
import aiNegotiationBusiness from '../assets/images/ai-negotiation-business.jpg';

const Services = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Debt Repayment Section */}
      <section id="debt-repayment-solutions" className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Debt Repayment Solutions
        </h2>

        {/* Panel 1: Easy Online Debt Repayment */}
        <div className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Easy Online Debt Repayment
            </h3>
            <p className="text-gray-600 mb-4">
              Debtors can easily repay their debts online using our platform’s secure and fast methods, such as Apple Pay and Google Pay, ensuring a hassle-free experience.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Convenient payment options</li>
              <li>Fast and secure online transactions</li>
              <li>Instant payment confirmations</li>
              <li>Access from anywhere, anytime</li>
            </ul>
            <a
              href="../workinprogress.html"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Get Started
            </a>
          </div>
          <div>
            <img
              src={onlinePaymentDebtor}
              alt="Online Payment"
              className="w-full h-64 object-cover rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Panel 2: Personalized Payment Plans for Debtors */}
        <div className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Personalized Payment Plans for Debtors
            </h3>
            <p className="text-gray-600 mb-4">
              We offer flexible, personalized payment plans that are tailored to your financial needs, helping you repay debts at your own pace without added stress.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Flexible installment options</li>
              <li>Adjustable payment schedules</li>
              <li>Automated reminders</li>
              <li>No hidden fees or charges</li>
            </ul>
            <a
              href="../workinprogress.html"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Get Started
            </a>
          </div>
          <div>
            <img
              src={paymentPlanDebtors}
              alt="Payment Plan for Debtors"
              className="w-full h-64 object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section id="business-solutions" className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Business Solutions
        </h2>

        {/* Panel 1: Recover Your Money from Debtors */}
        <div className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Recover Your Money from Debtors
            </h3>
            <p className="text-gray-600 mb-4">
              Our business solution helps you efficiently recover money from debtors with minimal hassle. We provide comprehensive services to ensure you get back what is rightfully yours.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Personalized debt recovery strategies</li>
              <li>Legal assistance and representation</li>
              <li>Negotiation and mediation services</li>
              <li>Regular updates and transparent processes</li>
            </ul>
            <a
              href="./contact.html"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Contact Us
            </a>
          </div>
          <div>
            <img
              src={debtRecovery}
              alt="Debt Recovery"
              className="w-full h-64 object-cover rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Panel 2: AI-Powered Negotiation Tools for Businesses */}
        <div className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              AI-Powered Negotiation Tools for Businesses
            </h3>
            <p className="text-gray-600 mb-4">
              Our platform uses AI negotiation tools to help businesses settle debt repayment terms with debtors quickly and efficiently. Achieve favorable outcomes and save time.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Automated negotiation processes</li>
              <li>Fair, data-driven repayment suggestions</li>
              <li>Reduces need for manual intervention</li>
              <li>Faster settlements</li>
            </ul>
            <a
              href="./contact.html"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Contact Us
            </a>
          </div>
          <div>
            <img
              src={aiNegotiationBusiness}
              alt="AI for Businesses"
              className="w-full h-64 object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Added space between sections */}
      <div className="my-12"></div>
    </main>
  );
};

export default Services;
