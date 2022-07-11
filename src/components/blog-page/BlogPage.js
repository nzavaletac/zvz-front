import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./BlogPageElements";

export const BlogPage = ({ post }) => {
  return post.map(
    ({ _id, title, description, markdown, sanitizedHtml, createdAt }) => (
      <Container>
        <div className="container mr-4 ml-4">
          <h1 className="mb-4">Blog Contable</h1>
          <Link to="/" className="btn btn-secondary">
            Home
          </Link>
          <div className="card mt-4" key={_id}>
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <hr />
              <div className="card-subtitle text-muted mb-2">
                {new Date(createdAt).toLocaleDateString()}
              </div>
              <div className="card-subtitle text-muted mb-2">
                Publicado por: Noe Zavaleta
              </div>
              <hr />
              <div>{sanitizedHtml}</div>

              <Link to="/blog/" className="btn btn-info">
                Leer más
              </Link>
            </div>
          </div>
        </div>
      </Container>
    )
  );
};
