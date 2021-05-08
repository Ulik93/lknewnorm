import React from 'react'
import { useSelector } from 'react-redux'
import InputFile from '../../Docs/InputFile'
import ListDocs from '../../Docs/ListDocs'
import MyDocuments from '../../Docs/MyDocuments'
import excelfile from '../../Docs/excelDocs/new.xlsx'


export default function Clothes() {
  const docsList = useSelector((state) => state.docs.getDocsList)
  const data = {template: "Шаблоны для одежды", excel: excelfile, fileName: "Шаблон для одежды"}
  return (
    <div className='table-container'>
      <InputFile category="clothes" />
      <ListDocs data={data}/>
      <MyDocuments category="clothes" docsList={docsList} />
    </div>
  )
}
