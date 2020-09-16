# vue-project
搭建一个Vue+Typescript+Scss+ElementUI+i18n的项目

## 步骤

1. 初始化项目

2. 安装element-ui

```
yarn add element-ui@^2.4.5
```

3. 在main.ts文件中引入element-ui

   创建scss样式文件element-variables.scss，在main.ts中导入

   ```
   import './element-variables.scss'
   ```

   element-variables.scss文件内容

   ```
   // 主题颜色
   $--color-primary: teal;
   
   /* icon font path, required */
   $--font-path: '~element-ui/lib/theme-chalk/fonts';
   
   // 导入scss样式文件
   @import "~element-ui/packages/theme-chalk/src/index";
   ```

   * 完整引入Element

   ```
   import Element from 'element-ui'
   // 设置全局组件的尺寸size和弹框的初始zIndex(默认值:2000)
   Vue.use(Element, { size: 'small', zIndex: 3000 })
   ```

   * 按需引入Element

   ```
   import { Button } from 'element-ui'
   // 按需引入Element时设置全局组件的值
   Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
   Vue.use(Button);
   ```

   