import './Pricing.css';

const packages = [
  {
    name: 'Basic',
    price: '₹2999',
    features: [
      'Social Media Management',
      'Basic SEO',
      'Meta Ads management',
      'Google My Business Setup',
      '1 Landing Page',
      '12 post per month',
      '5 reel edit and post'
    ]
  },
  {
    name: 'Standard',
    price: '₹4999',
    features: [
      'All Basic Features',
      'Digital Marketing Strategy',
      'Social Media Management',
      'SEO Optimization',
      '20 high quality posts',
      '10 reel edit and post',
      '1 Landing Pages functional',
      'HR cusultancy',
      'Priority Support'
    ]
  },
  {
    name: 'Premium',
    price: '₹9999',
    features: [
      'All Standard Features',
      'Advanced SEO',
      'Unlimited Pages',
      'Dedicated Manager',
      '30 high quality posts',
      '20 reel edit and post',
      'Comprehensive Analytics',
      '24/7 Support',
      'Custom Solutions'

    ]
  }
];

// Replace with your WhatsApp number and YouTube demo link
const whatsappLink = "https://wa.me/918084868414?text=I'm%20interested%20in%20your%20package";
const youtubeDemoLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <h2 className="pricing-title">Our Packages</h2>
      <div className="pricing-cards">
        {packages.map(pkg => (
          <div className="pricing-card" key={pkg.name}>
            <h3 className="package-name">{pkg.name} Package</h3>
            <div className="package-price">{pkg.price}</div>
            <ul className="package-features">
              {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="pricing-btn"
              style={{ marginBottom: '0.5rem', display: 'block' }}
            >
              Choose {pkg.name}
            </a>
            <a
              href={youtubeDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="pricing-btn secondary"
            >
              Watch Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}