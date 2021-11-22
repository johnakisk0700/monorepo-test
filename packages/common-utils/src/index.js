import React, { useEffect } from 'react'
export const formatDate = (date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}
export const useKati = (kati) => {
  useEffect(() => {
    console.log(kati)
  }, [])
}
