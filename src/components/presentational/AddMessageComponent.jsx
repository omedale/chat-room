import React from 'react'
import PropTypes from 'prop-types'

const AddMessageComponent = (props) => {
  let input

  return (
    <section id="new-message">
      <input
        onKeyPress={(e) => {
        if (e.key === 'Enter') {
          props.dispatch(input.value, 'Me')
          input.value = ''
        }
      }}
        type="text"
        ref={(node) => {
        input = node
      }}
      />
    </section>
  )
}

AddMessageComponent.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddMessageComponent