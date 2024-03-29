import React, {useState, useEffect, useCallback} from 'react';

import { useParams } from "react-router-dom";
import axios from 'axios';

import './index.css'

export function DetailsItem({ label, value }) {
  return (
    <div className="details-field">
      <div className="label">
        {label}:
        </div>
      <div className="value">
        {value}
      </div>
    </div>
  )
}


export function WithFetch ({ uri, DetailsComponent, moreProps }) {
  const { id } = useParams();

  const [detailsData, setDetailsData] = useState({})

  const fetchit = useCallback(async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/${uri}/${id}`)
    setDetailsData(res.data.data)
  }, [id])

  useEffect(async () => {
    fetchit()
  }, [fetchit])

  return (
    <DetailsComponent data={detailsData} {...moreProps} refetch={fetchit}/>
  )
}
