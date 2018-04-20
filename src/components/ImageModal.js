import React from 'react'
import {connect} from 'react-redux'
import { getByIdFrom } from '../helpers/galleryItem'
import { setModalInfo } from '../actions/modal'

class ImageModal extends React.Component {
  render() {
    const { img, setModalInfo } = this.props
    console.log(img)
    return img ? (
      <div className="modal" onClick={() => setModalInfo()}>
          <img src={img.url} className="modal-content content-container" />
      </div>
    ) : null    
  }
}

const mapStateToProps = ({gallery, modalId}) => ({
  img: getByIdFrom(gallery, modalId)
})

export default connect(mapStateToProps, {setModalInfo})(ImageModal)