import Vue from 'vue'
import Element from 'element-ui'
import '../element-variables.scss'
import i18n from './i18n'

Vue.use(Element)

// 设置全局组件的尺寸size和弹框的初始zIndex(默认值:2000)
Vue.use(Element, {
    size: 'small',
    zIndex: 3000,
    i18n: (key: string, value: string) => i18n.t(key, value)
})
