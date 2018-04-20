import React from 'react'
import { connect } from 'react-redux';

import GalleryItem from './GalleryItem'
import Row from './Row'
import ImageUploadForm from './ImageUploadForm'
import ImageModal from './ImageModal'
import { openForm, closeForm } from '../actions/galleryForm'
import { addImage, startAddImage, getGallery, dropImage, dragImage } from '../actions/gallery'

class Gallery extends React.Component {
  componentDidMount() {
    this.props.getGallery()
  }
  render () {
    const {addImage, openForm, showForm, closeForm, startAddImage, dropImage, dragId} = this.props
    return (
      <div className="content-container">
        <div >
          <div className="header__content">
            <h3>Gallery Component here</h3>
            <button onClick={() => openForm('addImage')}>
              Add Image
            </button>
          </div>
          {showForm && <ImageUploadForm formName="addImage" onSubmit={startAddImage}/>}
          <ImageModal />
        </div>
        <div className="gallery-grid">
        {
          this.props.gallery.map((item, index) => (
            <div key={item.id} data-number={index} onDrop={(e) => {
              e.preventDefault()
              dropImage(dragId, e.currentTarget.getAttribute('data-number'))             
            }} onDragOver={(e) => {
              e.preventDefault()              
            }}>
              <GalleryItem {...item}/>
            </div>
          ))
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({gallery, galleryForm, dragId}) => ({
  gallery,
  dragId,
  showForm: galleryForm.addImage && galleryForm.addImage.isOpened
})

export default connect(mapStateToProps, {openForm, addImage, closeForm, startAddImage, dragImage, getGallery, dropImage})(Gallery)