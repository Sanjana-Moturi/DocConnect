import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Appointment = () => {
  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }

  const getAvailableSlots = async () => {
    setDocSlots([])
    let today = new Date()
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }
      else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      let timeSlots = []

      while (currentDate <= endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots(prev => ([...prev, timeSlots]))
    }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])

  useEffect(() => {
    console.log(docSlots)
  }, [docSlots])

  return docInfo && (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary border border-blue-200 rounded-lg sm:max-w-72 w-full' src={docInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg py-7 p-8 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 '>
          <p className='flex gap-2 text-2xl font-medium text-gray-900 items-center'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm text-gray-600 mt-1'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 text-xs border rounded-full'>{docInfo.experience}</button>
          </div>
          <div>
            <p className='font-medium text-gray-900 mt-3 flex gap-1 items-center text-sm'>About <img src={assets.info_icon} alt="" /></p>
            <p className='text-gray-500 text-sm max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 mt-4 font-medium'>Appointment fee: <span className='text-gray-700'>{currencySymbol}{docInfo.fees}</span></p>
        </div>
      </div>

    </div>
  )
}

export default Appointment
