import React from 'react'

const MeetDoctors = () => {
    const data = [
        {
          id: 1,
          name: 'Blake Shaw, M.D.',
          image: '/images/doctor01.jpg'
        },
        {
          id: 2,
          name: 'Evelyn Wright, M.D.',
          image: '/images/doctor02.jpg'
        },
        {
            id: 3,
            name: 'David Wayne, M.D.',
            image: '/images/doctor03.jpg'
        },
    ]
  return (
    <div className='font-poppins bg-light py-16'>
      <p className='text-dark font-bold text-5xl text-center pt-32'>Meet Our Doctors</p>
      <div className='grid grid-cols-3 w-4/5 my-16 mx-auto border border-dark'>
        {
           data.map((doctor) => (
            <div className='bg-light '>
                <img src={doctor.image} alt="doc" className="border border-dark"/>
                <div className='border border-dark'>
                <span class="text-dark font-bold text-2xl justify-center flex py-2">{doctor.name}</span>
                <p className='px-10 py-5 text-dark font-light text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                </div>
            </div>
           ))
        }
      </div>
    </div>
  )
}

export default MeetDoctors
