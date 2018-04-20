import React from 'react'
import { connect } from 'react-redux'
 
import ImageUploadForm from './ImageUploadForm'
import { openForm } from '../actions/galleryForm'
import { updateImage, startUpdateImage, dragImage } from '../actions/gallery'
import { setModalInfo } from '../actions/modal'

class GalleryItem extends React.Component {
  render() {
    const { url, comment, id, updateImage, showEditForm, setModalInfo, startUpdateImage, dragImage } = this.props
    return (
      <div draggable onDragStart={() => dragImage(id)}>
          <img src={url} className="gallery-item"  onClick={() => setModalInfo(id)}/>
          <p>{comment}</p>
          <button onClick={() => {
            this.props.openForm(`editImage-${id}`, { url, comment})
          }}>Edit</button>
          {showEditForm && <ImageUploadForm formName={`editImage-${id}`} onSubmit={startUpdateImage} id={id} />}
      </div>
    )
  }
}

const mapStateToProps = ({galleryForm}, ownProps) => ({
  showEditForm: galleryForm[`editImage-${ownProps.id}`] && galleryForm[`editImage-${ownProps.id}`].isOpened
})

export default connect(mapStateToProps, {openForm, updateImage, setModalInfo, startUpdateImage, dragImage})(GalleryItem)