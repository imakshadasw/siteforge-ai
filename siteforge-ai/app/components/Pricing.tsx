export default function Pricing() {
  return (
    <section className="py-24 px-6 bg-[#07101f]">
      <h2 className="text-5xl font-bold text-center text-cyan-400 mb-14">
        Simple Pricing
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-[#0b1120] rounded-2xl p-8 border border-cyan-900">
          <h3 className="text-3xl font-bold">Free</h3>
          <p className="text-5xl font-bold my-6">₹0</p>

          <ul className="space-y-3 text-gray-400">
            <li>✓ 1 Website</li>
            <li>✓ AI Content</li>
            <li>✓ Mobile Responsive</li>
          </ul>

          <button className="mt-8 w-full py-3 rounded-xl bg-cyan-500 font-bold">
            Get Started
          </button>
        </div>

        <div className="bg-cyan-500 rounded-2xl p-8 text-black scale-105">
          <p className="font-bold uppercase">Most Popular</p>

          <h3 className="text-3xl font-bold mt-4">
            Pro
          </h3>

          <p className="text-5xl font-bold my-6">
            ₹999
          </p>

          <ul className="space-y-3">
            <li>✓ Unlimited Websites</li>
            <li>✓ AI Images</li>
            <li>✓ SEO Optimization</li>
            <li>✓ Export Code</li>
          </ul>

          <button className="mt-8 w-full py-3 rounded-xl bg-black text-white font-bold">
            Upgrade
          </button>
        </div>

        <div className="bg-[#0b1120] rounded-2xl p-8 border border-cyan-900">
          <h3 className="text-3xl font-bold">
            Business
          </h3>

          <p className="text-5xl font-bold my-6">
            ₹2999
          </p>

          <ul className="space-y-3 text-gray-400">
            <li>✓ Team Access</li>
            <li>✓ Custom Domain</li>
            <li>✓ Analytics</li>
            <li>✓ Priority Support</li>
          </ul>

          <button className="mt-8 w-full py-3 rounded-xl bg-cyan-500 font-bold">
            Contact Sales
          </button>
        </div>

      </div>
    </section>
  );
}