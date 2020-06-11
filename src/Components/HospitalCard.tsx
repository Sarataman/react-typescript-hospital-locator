import React, { FC } from 'react'

interface HospitalCardProps {
    hospitalData: hospitalDataTypes
}

const HospitalCard:FC<HospitalCardProps> = ({hospitalData}) => {
    return (
        <div>
            <p>{hospitalData.hospitalName}</p>
            <span>{hospitalData.hospitalLoc}</span>
        </div>
    )
}

export default HospitalCard