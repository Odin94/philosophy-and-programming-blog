import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import FaCalendar from "react-icons/lib/fa/calendar";
import FaUser from "react-icons/lib/fa/user";
import FaTag from "react-icons/lib/fa/tag";

const Meta = props => {
  const { prefix, author: authorName, category, theme } = props;

  return (
    <p className="meta">
      <span className="small">
        {prefix}
      </span>
      {/* <span className="small">
        <FaUser size={18} /> {authorName}
      </span> */}
      {category && (
        <span className="category">
          <Link style={{ color: `${theme.color.brand.primary}` }} className="categoryLink" to={`/category/${category}`}>{category}</Link>
        </span>
      )}

      {/* --- STYLES --- */}
      <style jsx>{`
        .meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.8em;
          margin: ${theme.space.m} 0;
          background: transparent;

          :global(svg) {
            fill: ${theme.icon.color};
            margin: ${theme.space.inline.xs};
          }

          .small {
            color: rgba(0,0,0,.54);
          }

          .category {
            align-self: flex-end;
          }

          span {
            display: flex;
            text-transform: uppercase;
            margin: ${theme.space.xs} ${theme.space.s} ${theme.space.xs} 0;
          }
        }

        @from-width tablet {
          .meta {
            margin: ${`calc(${theme.space.m} * 1.5) 0 ${theme.space.m}`};
          }
        }
      `}</style>
    </p>
  );
};

Meta.propTypes = {
  prefix: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string,
  theme: PropTypes.object.isRequired
};

export default Meta;
