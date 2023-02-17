import React, {FC} from 'react'
import Card from '@mui/material/Card';

interface iCardComponent{
    icon: JSX.Element | JSX.Element[],
    data: string
}

const CardComponent: FC<iCardComponent> = ({data, icon}) => {
  return (
    <Card>
      {icon}
      {data}
    </Card>
  )
}

export default CardComponent
