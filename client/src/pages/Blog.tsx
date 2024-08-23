import "./Blog.css";
import './BlogAnimation.css'

const Blog = () => {
  const blogRowContent = [
    {
      img: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2FyaWVzLXN5bWJvbC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==",
      title: "Unreveling the captivating essence of aries",
    },
    {
      img: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dldHR5aW1hZ2VzLTQ4Nzg5MDQ1My1oZXJvLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjAwfSwidG9Gb3JtYXQiOiJhdmlmIn19",
      title: "How do you measure the largest waterfall in the world?",
    },
    {
      img: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2FyaWVzLXN5bWJvbC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==",
      title: "Unreveling the captivating essence of aries",
    },
    {
      img: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dldHR5aW1hZ2VzLTQ4Nzg5MDQ1My1oZXJvLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjAwfSwidG9Gb3JtYXQiOiJhdmlmIn19",
      title: "How do you measure the largest waterfall in the world?",
    },
  ];
  return (
    <div className="blog-container">
      <h1>Blog Feed</h1>
      <div className="blog">
        <section className="blog-content">
          <div className="blog-image">
            <img
              src="https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/vdw3fdnjrjqyxxscep5n"
              alt="blogimg"
            />
          </div>
          <div className="blog-heading">
            <span>Design Journal</span>
            <h2>The Untitled UI Design Journal</h2>
            <h6>
              The Untitled UI Journal feature carefully selected good works from
              studios amd designers from around the globe. Subscribe for new
              posts in your inbox.
            </h6>
          </div>
        </section>

        <section className="blog-related">
          <h4 className="blog-related-header">Our Top Read</h4>
          <ul className="blog-related-list">
            <li>
              <span>Security</span>
              <h4>
                Cisco employees face a month of silence ahead of second layoff
                in 2024
              </h4>
              <h6>By Lorenzo Franceschi Bicchierai</h6>
            </li>
            <li>
              <span>Security</span>
              <h4>
                Cisco employees face a month of silence ahead of second layoff
                in 2024
              </h4>
              <h6>By Lorenzo Franceschi Bicchierai</h6>
            </li>
            <li>
              <span>Security</span>
              <h4>
                Cisco employees face a month of silence ahead of second layoff
                in 2024
              </h4>
              <h6>By Lorenzo Franceschi Bicchierai</h6>
            </li>
          </ul>
        </section>
      </div>
      <div className="blog-2">
        <section className="blog-row">
          {blogRowContent.map((item, index) => (
            <article key={index} className="blog-row-article">
              <div className="img-container">
                <img src={item.img} />
              </div>
              <div className="article-desc">
                <p>{item.title}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
      <div>
        <h1>Blog 3</h1>
      </div>
    </div>
  );
};

export default Blog;
