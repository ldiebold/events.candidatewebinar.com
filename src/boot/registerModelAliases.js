import { RegisterModelAliasesToVue } from '@ldiebold/process-orm-classes'
import Vue from 'vue'

export default ({ store }) => {
  RegisterModelAliasesToVue(Vue, store)
}
