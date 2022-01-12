import React, {useState, useEffect} from 'react';

import { useParams } from "react-router-dom";
import axios from 'axios';

import './index.css'

export function DetailsItem({ label, value }) {
  return (
    <div className="field-container">
      <div className="label">
        {label}:
        </div>
      <div className="value">
        {value}
      </div>
    </div>
  )
}


export function WithFetch ({ uri, DetailsComponent }) {
  const { id } = useParams();

  const [detailsData, setDetailsData] = useState({})

  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/${uri}/${id}`)
    setDetailsData(res.data.data)
  }, [id])

  return (
    <DetailsComponent data={detailsData} />
  )
}
