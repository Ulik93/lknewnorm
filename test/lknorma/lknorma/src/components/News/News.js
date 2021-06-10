import { useState } from "react"
import "./news.css"
import Aos from "aos"
import "aos/dist/aos.css"
import {
  MainNews,
  Deadlines,
  MarkingProducts,
  StartTutorial,
  SystemDocuments,
} from "./NewsContent"
import { useEffect } from "react"

const News = () => {
  const [content, setContent] = useState("news")

  useEffect(() => {
    window.scrollTo(0, 0)
    Aos.init({ duration: 500 })
  }, [])

  return (
    <div className="main_block">
      <div className="main_navlink-list">
        <div
          onClick={() => setContent("news")}
          className="main_link-items"
          to="/"
        >
          <i className="main_list-icon fas fa-newspaper" />
          Новости
        </div>
        <div
          onClick={() => setContent("startTutorial")}
          className="main_link-items"
          to="/"
        >
          <i className="main_list-icon fas fa-qrcode" />
          Как начать маркировку?
        </div>
        <div
          onClick={() => setContent("deadlines")}
          className="main_link-items"
          to="/"
        >
          <i className="main_list-icon far fa-calendar-alt" />
          Сроки запуска маркировки
        </div>
        <div
          onClick={() => setContent("markingProducts")}
          className="main_link-items"
          to="/"
        >
          <i className="main_list-icon fas fa-box" />
          Товары, подлежащие маркировке
        </div>
        <div
          onClick={() => setContent("systemDocuments")}
          className="main_link-items"
          to="/"
        >
          <i className="main_list-icon fas fa-file" />
          Документация по работе в системе
        </div>
      </div>
      <div className="main_content">
        {content === "news" && (
          <div data-aos="fade-up">
            <MainNews />
          </div>
        )}
        {content === "startTutorial" && (
          <div data-aos="fade-up">
            <StartTutorial />
          </div>
        )}
        {content === "deadlines" && (
          <div data-aos="fade-up">
            <Deadlines />
          </div>
        )}
        {content === "markingProducts" && (
          <div data-aos="fade-up">
            <MarkingProducts />
          </div>
        )}
        {content === "systemDocuments" && (
          <div data-aos="fade-up">
            <SystemDocuments />
          </div>
        )}
      </div>
    </div>
  )
}

export default News
