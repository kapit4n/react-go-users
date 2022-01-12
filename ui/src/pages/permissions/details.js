import React, {useState, useEffect} from 'react';

import DetailsRole from '../../components/permissions/details'
import { useParams } from "react-router-dom";
import axios from 'axios';

const Details = () => {
  const { id } = useParams();

  const [detailsData, setDetailsData] = useState({})

  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/permissions/${id}`)
    console.log(res);
    setDetailsData(res.data.data)
  }, [id])

  return (
    <DetailsRole data={detailsData}/>
  )
}

export default Details;