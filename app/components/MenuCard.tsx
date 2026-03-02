import { Button, Card } from 'flowbite-react'
import React from 'react'

interface CardInfo {
  title: string;
  description: string;
  // Path: string;
}

const MenuCard = ({title, description}: CardInfo) => {



  return (
    <div >
      <Card className="max-w-[324px] h-auto card-color rounded-lg shadow-md border-0">
        <h5 className="text-2xl text-center">
          {title}
        </h5>
        <p className="font-normal">
          {description}
        </p>
        <Button className='mt-15'>
          Play
        </Button>
      </Card>
    </div>
  )
}

export default MenuCard