import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './BlogEditor.css';

const MotionDiv = motion.div;

export default function BlogEditor({ blog, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Digital Marketing',
    tags: [],
    featured: false
  });

  const [newTag, setNewTag] = useState('');

  const categories = [
    'Digital Marketing',
    'Branding',
    'Content Marketing',
    'SEO',
    'Social Media',
    'Analytics',
    'Strategy',
    'Technology'
  ];

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || '',
        excerpt: blog.excerpt || '',
        content: blog.content || '',
        category: blog.category || 'Digital Marketing',
        tags: blog.tags || [],
        featured: blog.featured || false
      });
    }
  }, [blog]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() && formData.content.trim()) {
      onSave(formData);
    }
  };

  const wordCount = formData.content.split(' ').filter(word => word.length > 0).length;
  const estimatedReadTime = Math.ceil(wordCount / 200);

  return (
    <div className="blog-editor-page">
      <div className="container">
        <MotionDiv
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="editor-header mb-4">
            <h1 className="editor-title">
              {blog ? 'Edit Blog Post' : 'Write New Blog Post'}
            </h1>
            <p className="editor-subtitle text-muted">
              Share your insights and updates with your audience
            </p>
          </div>

          <form onSubmit={handleSubmit} className="blog-editor-form">
            <div className="row">
              <div className="col-lg-8">
                <div className="editor-main">
                  {/* Title */}
                  <div className="form-group mb-4">
                    <label htmlFor="title" className="form-label fw-semibold">
                      Title *
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="form-control form-control-lg"
                      placeholder="Enter a compelling title for your blog post..."
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Excerpt */}
                  <div className="form-group mb-4">
                    <label htmlFor="excerpt" className="form-label fw-semibold">
                      Excerpt
                    </label>
                    <textarea
                      id="excerpt"
                      name="excerpt"
                      className="form-control"
                      rows="3"
                      placeholder="Write a brief summary of your blog post..."
                      value={formData.excerpt}
                      onChange={handleInputChange}
                    />
                    <div className="form-text">
                      This will be shown in the blog listing and social media previews
                    </div>
                  </div>

                  {/* Content */}
                  <div className="form-group mb-4">
                    <label htmlFor="content" className="form-label fw-semibold">
                      Content *
                    </label>
                    <textarea
                      id="content"
                      name="content"
                      className="form-control editor-textarea"
                      rows="20"
                      placeholder="Write your blog post content here...

You can use Markdown formatting:
# Main Heading
## Subheading
### Smaller Heading

- Bullet points
- More bullet points

1. Numbered lists
2. Second item

**Bold text** and *italic text*"
                      value={formData.content}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="editor-stats">
                      <span className="word-count">{wordCount} words</span>
                      <span className="read-time">~{estimatedReadTime} min read</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="editor-sidebar">
                  {/* Publish Settings */}
                  <div className="sidebar-section">
                    <h3 className="sidebar-title">Publish Settings</h3>
                    
                    <div className="form-group mb-3">
                      <label htmlFor="category" className="form-label fw-semibold">
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        className="form-select"
                        value={formData.category}
                        onChange={handleInputChange}
                      >
                        {categories.map(category => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group mb-3">
                      <label className="form-label fw-semibold">Tags</label>
                      <div className="tags-input">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Add a tag..."
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            onKeyPress={handleKeyPress}
                          />
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={handleAddTag}
                          >
                            Add
                          </button>
                        </div>
                        <div className="tags-list mt-2">
                          {formData.tags.map(tag => (
                            <span key={tag} className="tag">
                              {tag}
                              <button
                                type="button"
                                className="tag-remove"
                                onClick={() => handleRemoveTag(tag)}
                              >
                                ×
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="form-check mb-3">
                      <input
                        type="checkbox"
                        id="featured"
                        name="featured"
                        className="form-check-input"
                        checked={formData.featured}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="featured" className="form-check-label">
                        Featured Post
                      </label>
                      <div className="form-text">
                        Featured posts appear prominently on the blog page
                      </div>
                    </div>
                  </div>

                  {/* Preview */}
                  <div className="sidebar-section">
                    <h3 className="sidebar-title">Preview</h3>
                    <div className="preview-card">
                      <div className="preview-category">{formData.category}</div>
                      <h4 className="preview-title">
                        {formData.title || 'Your blog title will appear here...'}
                      </h4>
                      <p className="preview-excerpt">
                        {formData.excerpt || 'Your excerpt will appear here...'}
                      </p>
                      <div className="preview-meta">
                        <span className="author">You</span>
                        <span className="date">{new Date().toLocaleDateString()}</span>
                        <span className="read-time">~{estimatedReadTime} min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="editor-actions">
              <div className="d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={onCancel}
                >
                  <i className="fas fa-times me-2"></i>
                  Cancel
                </button>
                
                <div className="action-buttons">
                  <button
                    type="button"
                    className="btn btn-outline-primary me-2"
                    onClick={() => {
                      // Save as draft functionality could be added here
                      alert('Draft saved! (This is a demo)');
                    }}
                  >
                    <i className="fas fa-save me-2"></i>
                    Save Draft
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary btn-shimmer"
                    disabled={!formData.title.trim() || !formData.content.trim()}
                  >
                    <i className="fas fa-paper-plane me-2"></i>
                    {blog ? 'Update Post' : 'Publish Post'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </MotionDiv>
      </div>
    </div>
  );
}
