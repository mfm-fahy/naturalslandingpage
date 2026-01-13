import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-xl">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last Updated: Dec 2025</p>
            
            <div className="prose prose-gray max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed">
                We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how your data is collected, used, and safeguarded when you interact with our website and submit information through our forms.
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-700 mb-3">When you submit your details through our lead form, we may collect:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Name</li>
                  <li>Phone Number</li>
                  <li>Email Address</li>
                  <li>Selected service / treatment</li>
                  <li>Any additional information you voluntarily provide</li>
                </ul>
                
                <p className="text-gray-700 mt-4 mb-3">We may also automatically collect non-identifiable information such as:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Device type</li>
                  <li>Browser type</li>
                  <li>IP location</li>
                  <li>Interaction data (Clicks, form submissions, time on page, etc.)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-3">The information collected is used solely for:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Contacting you to confirm bookings or inquiries</li>
                  <li>Providing service-related follow-up communication</li>
                  <li>Improving customer experience</li>
                  <li>Sending important updates or offers related to our services</li>
                  <li>Advertising and remarketing (only when applicable)</li>
                </ul>
                <p className="text-gray-700 mt-4 font-medium">
                  We do not sell, rent, trade, or disclose your personal information to any third-party marketing company.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies & Tracking Technologies</h2>
                <p className="text-gray-700 mb-3">We may use cookies, analytics tools, and tracking pixels from platforms like Google and Meta to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Measure performance of ads</li>
                  <li>Understand user behavior</li>
                  <li>Improve website usability</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  You can disable cookies at any time through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection & Security</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Your personal information is stored securely and accessed only by authorized personnel.</li>
                  <li>We take appropriate safety measures to prevent unauthorized access, misuse, or disclosure.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Our website may integrate with third-party platforms (e.g., Google Ads, Meta Ads, Analytics tools).</li>
                  <li>They may collect their own tracking data as per their own policies.</li>
                  <li>We are not responsible for the privacy practices of these external services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you wish to update, correct, or request deletion of your data, you may contact us at:
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Address:</h3>
                  <p className="text-gray-700 mb-4">
                    New No 52, Sreerosh Renaissance, No 76, near HDFC Bank Building, Agasthiya Nagar, Thandavaraya, Kilpauk, Chennai, Tamil Nadu 600010
                  </p>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">Email:</h3>
                  <p className="text-gray-700">
                    abc@example.com <span className="text-sm text-gray-500">(placeholder — to be replaced)</span>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Consent</h2>
                <p className="text-gray-700">
                  By submitting your details through our lead form or interacting with our website, you consent to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}