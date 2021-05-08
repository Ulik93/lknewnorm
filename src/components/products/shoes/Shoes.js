import React from 'react'
import { useSelector } from 'react-redux'
import InputFile from '../../Docs/InputFile'
import ListDocs from '../../Docs/ListDocs'
import MyDocuments from '../../Docs/MyDocuments'
import excelfile from '../../../redux/uils/excelfiles/Shoes.xlsx'


export default function Shoes() {
  const docsList = useSelector((state) => state.docs.getDocsList)
  const data = {template: "Шаблоны для обуви", excel: excelfile, fileName: "Шаблон для кроссовок"}
  return (
    <div className='table-container'>
      <InputFile category="shoes" />
      <ListDocs data={data}/>
      <MyDocuments category="shoes" docsList={docsList} />
    </div>
  )
}
