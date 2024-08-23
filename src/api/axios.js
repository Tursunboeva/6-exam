import React from 'react'
import axios from 'axios'

const apiInstance =axios.create({
  baseURL:"https://api.escuelajs.co/api/v1/products"
})

export default apiInstance