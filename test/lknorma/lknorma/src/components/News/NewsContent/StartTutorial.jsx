import ExcelIcon from "../../../redux/uils/icons/powerpoint_icon.svg"
import { CardMedia } from "@material-ui/core"
import powerpointFile from "./Docs/Презентация_маркировки_НН_последний21_05_2021.pptx"

const StartTutorial = () => {
  return (
    <div className="powerpoint-file ">
      <div className="card-header">
        {"Презентация маркировки НН последний21 05 2021"}
      </div>
      <CardMedia
        className="icon-card"
        type="file"
        image={ExcelIcon}
        // onChange={{ pathname: `/docs/${excel.id}`, state: { excel }}}
      />
      <h5 className="card-footer">
        <div className="powerpoint-footer-downloader">
          <a href={powerpointFile} download>
            Скачать
          </a>
        </div>
      </h5>
    </div>
  )
}

export default StartTutorial
