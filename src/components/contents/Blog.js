import React from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import "../../styles/blog.css";

export default function Blog() {
  return (
    <Element className="mh-blog" id="blog">
      <div className="container spaceContent">
        <div className="row">
          <div className="col-sm-12 mb-5">
            <h3>Featured Posts</h3>
          </div>
          <div className="col-md-4">
            <div className="mh-blog-item dar-bg">
              <img src="images/b-3.png" className="img-fluid" alt="" />
              <div className="blog-inner">
                <h2>
                  <Link to="">Google Starts crawl</Link>
                </h2>
                <br />
                <div className="mh-blog-post-info">
                  <ul>
                    <li>
                      Post on <Link to="">25.11.21</Link>
                    </li>
                    <li>
                      By <Link to="">Kwandee S.</Link>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nobis ad omnis doloremque, esse expedita a recusandae
                  consequuntur deserunt repudiandae iste.
                </p>
                <Link to="">Read more</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="mh-blog-item dar-bg">
              <img src="images/b-2.png" className="img-fluid" alt="" />
              <div className="blog-inner">
                <h2>
                  <Link to="">Google Starts crawl</Link>
                </h2>
                <br />
                <div className="mh-blog-post-info">
                  <ul>
                    <li>
                      Post on <Link to="">25.11.21</Link>
                    </li>
                    <li>
                      By <Link to="">Kwandee S.</Link>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nobis ad omnis doloremque, esse expedita a recusandae
                  consequuntur deserunt repudiandae iste.
                </p>
                <Link to="">Read more</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="mh-blog-item dar-bg">
              <img src="images/b-1.png" className="img-fluid" alt="" />
              <div className="blog-inner">
                <h2>
                  <Link to="">Google Starts crawl</Link>
                </h2>
                <br />
                <div className="mh-blog-post-info">
                  <ul>
                    <li>
                      Post on <Link to="">25.11.21</Link>
                    </li>
                    <li>
                      By <Link to="">Kwandee S.</Link>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nobis ad omnis doloremque, esse expedita a recusandae
                  consequuntur deserunt repudiandae iste.
                </p>
                <Link to="">Read more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
