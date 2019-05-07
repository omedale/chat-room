import { connect } from 'react-redux'
import AddMessageComponent from '../presentational/AddMessageComponent'
import { addMessage } from '../../actions/index'

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author))
  }
})

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)