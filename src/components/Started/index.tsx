import React from 'react'
import { Container, Image, Start } from './styles'
import Salt from './../../assets/salt.png'

type StartedProps = {
  getMeal?: () => void
}

const Started: React.FC<StartedProps> = ({getMeal}) => {
  return (
    <Container>
        <Start onClick={getMeal}>
          Get Meal
          <Image src={Salt} />
        </Start>
    </Container>
  )
}

export default Started