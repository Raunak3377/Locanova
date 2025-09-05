import { useState } from 'react';
import { motion } from 'framer-motion';
import BlogEditor from './BlogEditor';
import './BlogPost.css';

const MotionDiv = motion.div;

export default function BlogPost({ blog, onBack, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedBlog) => {
    onEdit(updatedBlog);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      onDelete(blog.id);
    }
  };

  if (isEditing) {
    return (
      <BlogEditor 
        blog={blog}
        onSave={handleSave}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <div className="blog-post-page">
      {/* Header */}
      <section className="blog-post-header">
        <div className="container">
          <MotionDiv
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <button 
              className="btn btn-outline-secondary mb-4"
              onClick={onBack}
            >
              <i className="fas fa-arrow-left me-2"></i>
              Back to Blog
            </button>
            
            <div className="blog-post-meta mb-4">
              <span className="blog-category">{blog.category}</span>
              {blog.featured && <span className="featured-badge">Featured</span>}
            </div>
            
            <h1 className="blog-post-title display-4 fw-bold mb-4">
              {blog.title}
            </h1>
            
            <div className="blog-post-info d-flex flex-wrap align-items-center gap-4 mb-4">
              <div className="author-info d-flex align-items-center">
                <div className="author-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="ms-2">
                  <div className="author-name fw-semibold">{blog.author}</div>
                  <div className="post-date text-muted">
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
              <div className="read-time">
                <i className="fas fa-clock me-1"></i>
                {blog.readTime}
              </div>
            </div>
            
            <div className="blog-tags mb-4">
              {blog.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Content */}
      <section className="blog-post-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <MotionDiv
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="blog-content">
                  {blog.content.split('\n').map((paragraph, index) => {
                    if (paragraph.trim() === '') return <br key={index} />;
                    
                    // Handle headers
                    if (paragraph.startsWith('# ')) {
                      return <h1 key={index} className="content-h1">{paragraph.substring(2)}</h1>;
                    }
                    if (paragraph.startsWith('## ')) {
                      return <h2 key={index} className="content-h2">{paragraph.substring(3)}</h2>;
                    }
                    if (paragraph.startsWith('### ')) {
                      return <h3 key={index} className="content-h3">{paragraph.substring(4)}</h3>;
                    }
                    if (paragraph.startsWith('#### ')) {
                      return <h4 key={index} className="content-h4">{paragraph.substring(5)}</h4>;
                    }
                    
                    // Handle numbered lists
                    if (paragraph.match(/^\d+\.\s/)) {
                      return <p key={index} className="content-list-item">{paragraph}</p>;
                    }
                    
                    // Handle bullet points
                    if (paragraph.startsWith('- ')) {
                      return <p key={index} className="content-bullet-item">{paragraph}</p>;
                    }
                    
                    // Regular paragraphs
                    return <p key={index} className="content-paragraph">{paragraph}</p>;
                  })}
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="blog-post-actions py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="d-flex justify-content-between align-items-center">
                <button 
                  className="btn btn-outline-secondary"
                  onClick={onBack}
                >
                  <i className="fas fa-arrow-left me-2"></i>
                  Back to Blog
                </button>
                
                <div className="action-buttons">
                  <button 
                    className="btn btn-primary me-2"
                    onClick={() => setIsEditing(true)}
                  >
                    <i className="fas fa-edit me-2"></i>
                    Edit Post
                  </button>
                  <button 
                    className="btn btn-outline-dark"
                    onClick={handleDelete}
                  >
                    <i className="fas fa-trash me-2"></i>
                    Delete Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="related-posts py-5 bg-light">
        <div className="container">
          <h2 className="section-title mb-4">Related Posts</h2>
          <div className="row g-4">
            {/* This would typically show related posts from the same category */}
            <div className="col-md-4">
              <div className="related-post-card">
                <div className="related-post-image">
                  <div className="blog-placeholder">
                    <i className="fas fa-newspaper"></i>
                  </div>
                </div>
                <div className="related-post-content">
                  <h4>More insights coming soon...</h4>
                  <p>We're working on more great content for you!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
