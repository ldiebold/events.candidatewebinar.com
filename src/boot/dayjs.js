import Vue from 'vue'
import dayjs from 'dayjs'

var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

Vue.prototype.$dayjs = dayjs
