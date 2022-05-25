import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Container, Row } from "reactstrap"
import SubHeader from "../components/SubHeader"
import CampsiteDetail from "../features/campsites/CampsiteDetail"
import { selectCampsiteById } from "../features/campsites/campsitesSlice"
import CommentsList from "../features/comments/CommentsList"

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams()
    const campsite = useSelector(selectCampsiteById(campsiteId))

    return (
        <Container>
            <SubHeader current={campsite.name} detail={true} />
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </Row>
        </Container>
    )
}

export default CampsiteDetailPage
