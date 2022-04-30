import React from "react";
import { Link } from "react-router-dom";
import "../../styles/blog.css";

export default function Blog() {
  return (
    <div class="mh-blog" id="blog">
      <div class="container spaceContent">
        <div class="row">
          <div class="col-sm-12 mb-5">
            <h3>Featured Posts</h3>
          </div>
          <div class="col-md-4">
            <div class="mh-blog-item dar-bg">
              <img src="images/b-3.png" class="img-fluid" alt="" />
              <div class="blog-inner">
                <h2>
                  <Link to="">Google Starts crawl</Link>
                </h2>
                <br />
                <div class="mh-blog-post-info">
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

          <div class="col-md-4">
            <div class="mh-blog-item dar-bg">
              <img src="images/b-2.png" class="img-fluid" alt="" />
              <div class="blog-inner">
                <h2>
                  <aLink to="">Google Starts crawl</aLink>
                </h2>
                <br />
                <div class="mh-blog-post-info">
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

          <div class="col-md-4">
            <div class="mh-blog-item dar-bg">
              <img src="images/b-1.png" class="img-fluid" alt="" />
              <div class="blog-inner">
                <h2>
                  <Link to="">Google Starts crawl</Link>
                </h2>
                <br />
                <div class="mh-blog-post-info">
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
    </div>
  );
}
