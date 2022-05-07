import { CAMPSITES } from '../../app/shared/CAMPSITES'
import { Col, Row } from 'reactstrap'
import CampsiteCard from './CampsiteCard'

const CampsitesList = () => {
  return (
    <Row className='ms-auto'>
      {CAMPSITES.map((campsite) => (
        <Col className='m-4' md='5' key={campsite.id}>
          <CampsiteCard campsite={campsite} />
        </Col>
      ))}
    </Row>
  )
}

export default CampsitesList