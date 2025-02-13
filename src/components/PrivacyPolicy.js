import React from "react";

function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">
          Privacy Policy for Yugaa AI
        </h1>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-8 shadow-xl max-w-4xl mx-auto">
          <p className="text-gray-300 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="space-y-12">
            {/* Introduction Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                1. Introduction
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Welcome to Yugaa AI ("we", "our", or "us"), a product of QYTHERION TECHNOLOGIES PRIVATE LIMITED. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered customer support service.
              </p>
            </div>

            {/* Information Collection Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                2. Information We Collect
              </h2>
              <p className="text-gray-300 mb-4">We may collect the following types of information:</p>
              <ul className="space-y-3 text-gray-300 pl-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <div>
                    <span className="font-semibold text-white">Personal Information:</span>
                    {" "}Name, email address, phone number, and other contact details you provide.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <div>
                    <span className="font-semibold text-white">Usage Data:</span>
                    {" "}Information on how you use our service, including chat logs, feature usage, and interaction data.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <div>
                    <span className="font-semibold text-white">Technical Data:</span>
                    {" "}IP address, browser type, device information, and other technical details.
                  </div>
                </li>
              </ul>
            </div>

            {/* How We Use Your Information Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-300 mb-4">We use your information to:</p>
              <ul className="space-y-3 text-gray-300 pl-4">
                {[
                  "Provide and maintain our AI-powered customer support service",
                  "Improve and personalize user experience",
                  "Analyze usage patterns and optimize our AI algorithms",
                  "Communicate with you about our service and provide customer support",
                  "Comply with legal obligations",
                  "Detect, prevent, and address technical issues"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <div>{item}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Sharing Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                4. Data Sharing and Disclosure
              </h2>
              <p className="text-gray-300 mb-4">We may share your information with:</p>
              <ul className="space-y-3 text-gray-300 pl-4 mb-4">
                {[
                  "Service providers who assist us in operating our business and providing our services",
                  "Law enforcement or other authorities when required by law",
                  "Business partners, with your consent, for specific purposes"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <div>{item}</div>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300">We do not sell your personal information to third parties.</p>
            </div>

            {/* Data Security Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                5. Data Security
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your data. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            {/* Your Rights Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                6. Your Rights
              </h2>
              <p className="text-gray-300 mb-4">Depending on your location, you may have the right to:</p>
              <ul className="space-y-3 text-gray-300 pl-4 mb-4">
                {[
                  "Access your personal information",
                  "Correct inaccurate data",
                  "Request deletion of your data",
                  "Object to or restrict processing of your data",
                  "Data portability"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <div>{item}</div>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section.
              </p>
            </div>

            {/* Children's Privacy Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                7. Children's Privacy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our service is not intended for children under 13. We do not knowingly collect or maintain personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete such information as soon as possible.
              </p>
            </div>

            {/* Changes to Policy Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                8. Changes to This Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                9. Contact Us
              </h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <address className="text-gray-300 not-italic bg-gray-800/50 p-6 rounded-lg">
                <div className="space-y-2">
                  <p className="font-semibold text-white">QYTHERION TECHNOLOGIES PRIVATE LIMITED</p>
                  <p>881, Azad Nagar, Roorke, Uttarakhand, India</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:sales@yugaa.tech" className="text-blue-400 hover:text-blue-300 transition-colors">
                      sales@yugaa.tech
                    </a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a href="tel:+917017412845" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +91 7017412845
                    </a>
                  </p>
                </div>
              </address>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Privacy;