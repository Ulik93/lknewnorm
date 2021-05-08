import React from "react"
import Footer from "../Footer/footer"
import Header from "../Header/Header"
import { useSelector } from "react-redux"
import Message from "./messages/Message"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import TableDoc from "../Docs/TableDoc"
import UpdateProfile from "../Profile/UpdateProfile"
import Sidebar from "./Sidebar"
import Perfume from "./messages/Perfume"
import Shoes from "./messages/Shoes"
import Clothes from "./messages/Clothes"


export default function Vlad() {

  const userData = useSelector((state) => state.data.userData)
  const docsList = useSelector((state) => state.docs.getTemplateExcelVlad)
  const successUpdate = useSelector((state) => state.data.updateProfile.success)

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/parfume">
            <Header userData={userData} />
            <Sidebar />
            <Perfume docsList={docsList} />
            <Footer />
          </Route>
          <Route path="/shoes">
            <Header userData={userData} />
            <Sidebar />
            <Shoes docsList={docsList} />
            <Footer />
          </Route>
          <Route path="/clothes">
            <Header userData={userData} />
            <Sidebar />
            <Clothes docsList={docsList} />
            <Footer />
          </Route>


          {!successUpdate && (
            <Route path="/main/update-profile" component={UpdateProfile} />
          )}
          <Route path="/docs/my_doc/:id" component={TableDoc} />
          <Redirect to="/parfume" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
