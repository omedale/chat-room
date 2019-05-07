import { connect } from 'react-redux'
import SidebarComponent from '../presentational/SidebarComponent'

export const SideBar = connect(state => ({
  users: state.users
}), {})(SidebarComponent)