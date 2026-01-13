export default function MapSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Salon</h2>
          <p className="text-gray-600">Find us at our convenient location in Kolathur, Chennai</p>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d31084.62072407086!2d80.2110269!3d13.12592475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a5264f317957881%3A0xa2138d200ee0e754!2s28%2C%20Secretariat%20Colony%201st%20St%2C%20near%20Secretariat%20Colony%2C%20Secretariat%20Nagar%2C%20Vinayakapuram%2C%20Kolathur%2C%20Chennai%2C%20Tamil%20Nadu%20600099!3m2!1d13.135679!2d80.2097144!5e0!3m2!1sen!2sin!4v1768131300050!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}