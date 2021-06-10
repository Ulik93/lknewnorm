import React from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import Pagination from "../Pagination"
import products from "../../../products"

const MainNews = () => {
  const [showPerPage] = useState(3)
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  })

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end })
  }
  return (
    <React.Fragment>
      <h4 className="news_block_h">Новости</h4>
      <div className="news_block_row">
        {products.slice(pagination.start, pagination.end).map((posts) => (
          <NavLink
            className="newsLink"
            key={posts._id}
            to={{ pathname: `/news/${posts._id}`, state: { posts } }}
          >
            <div className="news_title">{posts.name}</div> <br />
            <div className="news_desc">{`${posts.description.substr(
              0,
              150
            )}...`}</div>
          </NavLink>
        ))}
      </div>

      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={products.length}
      />
    </React.Fragment>
  )
}

export default MainNews
