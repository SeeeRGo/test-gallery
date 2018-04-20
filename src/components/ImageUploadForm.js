import React from 'react'
import { connect } from 'react-redux'

import { addImage } from '../actions/gallery'
import { updateForm, openForm, closeForm } from '../actions/galleryForm'
class ImageUploadForm extends React.Component {
  static defaultProps = {
    formName: 'garbageCan'
  }
  render () {
    const { addImage, updateForm, closeForm, formName, url, comment, onSubmit, id } = this.props
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          const urlSub = e.target[`url-${formName}`].value
          const commentSub = e.target.comment.value
          onSubmit({url: urlSub, comment: commentSub}, id),
          closeForm(formName)
        }}>
          <input 
            type="url"
            name={`url-${formName}`}
            value={url}
            onChange={(e) => updateForm(formName, 'url', e.target.value)}
          />
          <input 
            type="text" 
            name="comment"
            value={comment}
            onChange={(e) => updateForm(formName, 'comment', e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...state.galleryForm[ownProps.formName]
})

export default connect(mapStateToProps, {addImage, updateForm, openForm, closeForm})(ImageUploadForm)