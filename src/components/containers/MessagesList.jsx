import { connect } from 'react-redux'
import MessagesListComponent from '../presentational/MessagesListComponent'

export const MessagesList = connect(state => ({
  messages: state.messages
}), {})(MessagesListComponent)