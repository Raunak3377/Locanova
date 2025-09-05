import { useState } from 'react';
import { motion } from 'framer-motion';
import BlogPost from '../components/BlogPost';
import BlogEditor from '../components/BlogEditor';
import './Blog.css';

const MotionDiv = motion.div;

// Sample blog data - in a real app, this would come from an API or database
const sampleBlogs = [
  {
    id: 1,
    title: "The Future of Digital Marketing: AI and Automation",
    excerpt: "Explore how artificial intelligence is revolutionizing digital marketing strategies and what it means for businesses in 2024.",
    content: `# The Future of Digital Marketing: AI and Automation

The digital marketing landscape is evolving at an unprecedented pace, with artificial intelligence and automation leading the charge. As we move through 2024, businesses that embrace these technologies are seeing remarkable results.

## Key Trends Shaping the Industry

### 1. AI-Powered Personalization
Modern consumers expect personalized experiences. AI enables marketers to deliver highly targeted content based on user behavior, preferences, and demographics.

### 2. Automated Campaign Management
From email marketing to social media posting, automation tools are helping businesses maintain consistent engagement without constant manual intervention.

### 3. Predictive Analytics
AI can now predict customer behavior, helping businesses optimize their marketing strategies before campaigns even launch.

## What This Means for Your Business

The integration of AI and automation isn't just a trend—it's becoming a necessity for competitive businesses. Companies that adopt these technologies early will have a significant advantage in the marketplace.

## Getting Started

1. **Audit your current marketing stack**
2. **Identify automation opportunities**
3. **Start with simple AI tools**
4. **Scale gradually as you see results**

The future is here, and it's time to embrace it.`,
    author: "John Smith",
    date: "2024-01-15",
    category: "Digital Marketing",
    tags: ["AI", "Automation", "Marketing", "Technology"],
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    title: "Building a Strong Brand Identity in the Digital Age",
    excerpt: "Learn the essential elements of creating a memorable brand identity that resonates with your target audience online.",
    content: `# Building a Strong Brand Identity in the Digital Age

In today's digital-first world, your brand identity is more important than ever. It's not just about having a nice logo—it's about creating a cohesive experience that your customers will remember and trust.

## The Foundation of Brand Identity

### Visual Elements
- Logo design
- Color palette
- Typography
- Imagery style

### Brand Voice and Messaging
- Tone of voice
- Key messages
- Value propositions
- Brand personality

## Digital Considerations

When building your brand for the digital age, consider:

1. **Consistency across all touchpoints**
2. **Mobile-first design approach**
3. **Social media presence**
4. **Website user experience**

## Measuring Brand Success

Track these key metrics:
- Brand awareness
- Customer sentiment
- Engagement rates
- Conversion rates

Building a strong brand takes time and consistency, but the investment pays off in customer loyalty and business growth.`,
    author: "Sarah Johnson",
    date: "2024-01-10",
    category: "Branding",
    tags: ["Branding", "Identity", "Design", "Marketing"],
    readTime: "4 min read",
    featured: false
  },
  {
    id: 3,
    title: "Content Marketing Strategies That Actually Work",
    excerpt: "Discover proven content marketing strategies that drive engagement, build authority, and generate leads for your business.",
    content: `# Content Marketing Strategies That Actually Work

Content marketing has evolved significantly over the years. What worked in 2020 might not be effective today. Here are the strategies that are actually driving results in 2024.

## The Content Marketing Landscape

### Current Trends
- Video content dominance
- Interactive content
- User-generated content
- Long-form educational content

### What's Working Now

1. **Educational Content**
   - How-to guides
   - Industry insights
   - Case studies
   - Webinars

2. **Storytelling**
   - Customer success stories
   - Behind-the-scenes content
   - Company culture
   - Founder stories

3. **Interactive Content**
   - Quizzes and polls
   - Calculators
   - Interactive infographics
   - Live Q&A sessions

## Content Distribution Strategy

### Owned Channels
- Company blog
- Email newsletter
- Website resources

### Earned Channels
- Social media
- Industry publications
- Podcast appearances
- Speaking engagements

### Paid Channels
- Social media advertising
- Content promotion
- Influencer partnerships
- Sponsored content

## Measuring Success

Key metrics to track:
- Content engagement rates
- Lead generation
- Brand awareness
- Customer acquisition cost

Remember: Quality over quantity. It's better to create fewer pieces of high-quality content than to churn out mediocre content regularly.`,
    author: "Mike Chen",
    date: "2024-01-05",
    category: "Content Marketing",
    tags: ["Content", "Strategy", "Marketing", "Engagement"],
    readTime: "6 min read",
    featured: true
  }
];

export default function Blog() {
  const [blogs, setBlogs] = useState(sampleBlogs);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...new Set(blogs.map(blog => blog.category))];

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = filter === 'all' || blog.category === filter;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleNewBlog = (newBlog) => {
    const blog = {
      ...newBlog,
      id: Math.max(...blogs.map(b => b.id)) + 1,
      date: new Date().toISOString().split('T')[0],
      author: "You",
      readTime: `${Math.ceil(newBlog.content.split(' ').length / 200)} min read`
    };
    setBlogs([blog, ...blogs]);
    setShowEditor(false);
  };

  const handleEditBlog = (updatedBlog) => {
    setBlogs(blogs.map(blog => 
      blog.id === updatedBlog.id ? updatedBlog : blog
    ));
    setSelectedBlog(null);
  };

  const handleDeleteBlog = (blogId) => {
    setBlogs(blogs.filter(blog => blog.id !== blogId));
    setSelectedBlog(null);
  };

  if (selectedBlog) {
    return (
      <BlogPost 
        blog={selectedBlog} 
        onBack={() => setSelectedBlog(null)}
        onEdit={handleEditBlog}
        onDelete={handleDeleteBlog}
      />
    );
  }

  if (showEditor) {
    return (
      <BlogEditor 
        onSave={handleNewBlog}
        onCancel={() => setShowEditor(false)}
      />
    );
  }

  return (
    <div className="blog-page">
      {/* Header Section */}
      <section className="blog-header">
        <div className="container">
          <MotionDiv
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="blog-title display-4 fw-bold mb-4">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="blog-subtitle lead text-muted mb-5">
              Insights, strategies, and updates from our team of digital marketing experts
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Controls Section */}
      <section className="blog-controls py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="search-box">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search blogs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="fas fa-search search-icon"></i>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-wrap gap-2 justify-content-md-end">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`btn ${filter === category ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setFilter(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
                <button
                  className="btn btn-secondary ms-2"
                  onClick={() => setShowEditor(true)}
                >
                  <i className="fas fa-plus me-2"></i>
                  New Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog */}
      {filteredBlogs.filter(blog => blog.featured).length > 0 && (
        <section className="featured-blog py-5">
          <div className="container">
            <h2 className="section-title mb-4">Featured Post</h2>
            <MotionDiv
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {(() => {
                const featured = filteredBlogs.find(blog => blog.featured);
                return featured ? (
                  <div className="featured-blog-card" onClick={() => setSelectedBlog(featured)}>
                    <div className="row align-items-center">
                      <div className="col-lg-8">
                        <div className="featured-content">
                          <span className="featured-badge">Featured</span>
                          <h3 className="featured-title">{featured.title}</h3>
                          <p className="featured-excerpt">{featured.excerpt}</p>
                          <div className="featured-meta">
                            <span className="author">{featured.author}</span>
                            <span className="date">{new Date(featured.date).toLocaleDateString()}</span>
                            <span className="read-time">{featured.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="featured-image">
                          <div className="blog-placeholder">
                            <i className="fas fa-newspaper"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null;
              })()}
            </MotionDiv>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="blog-grid py-5">
        <div className="container">
          <h2 className="section-title mb-4">Latest Posts</h2>
          <div className="row g-4">
            {filteredBlogs.map((blog, index) => (
              <div key={blog.id} className="col-lg-4 col-md-6">
                <MotionDiv
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="blog-card" onClick={() => setSelectedBlog(blog)}>
                    <div className="blog-image">
                      <div className="blog-placeholder">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      {blog.featured && <span className="featured-badge">Featured</span>}
                    </div>
                    <div className="blog-content">
                      <div className="blog-category">{blog.category}</div>
                      <h3 className="blog-card-title">{blog.title}</h3>
                      <p className="blog-excerpt">{blog.excerpt}</p>
                      <div className="blog-meta">
                        <span className="author">{blog.author}</span>
                        <span className="date">{new Date(blog.date).toLocaleDateString()}</span>
                        <span className="read-time">{blog.readTime}</span>
                      </div>
                      <div className="blog-tags">
                        {blog.tags.map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              </div>
            ))}
          </div>
          
          {filteredBlogs.length === 0 && (
            <div className="text-center py-5">
              <i className="fas fa-search fa-3x text-muted mb-3"></i>
              <h3>No blogs found</h3>
              <p className="text-muted">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
