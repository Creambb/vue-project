# vue-project
搭建一个Vue+Typescript+Scss+ElementUI+i18n的项目

## 步骤

1. 初始化项目

2. 安装element-ui依赖

```
yarn add element-ui@^2.4.5
```

3. 引入方式有如下两种

   * 如果我们按照一般的引入方式，可以进行如下操作

   ```
   // main.ts
   import ElementUI from 'element-ui';
   // 导入css样式文件
   import 'element-ui/lib/theme-chalk/index.css';
   
   Vue.use(ElementUI);
   ```

   * 通过CLI插件引入

   ```
   vue add element
   ```

   ```
   ? How do you want to import Element? Fully import
   ? Do you wish to overwrite Element's SCSS variables? Yes
   ? Choose the locale you want to load zh-CN
   ```

   插件会自动生成element.js文件和element-variables.scss文件，并且已自动导入需要的文件。我们手动将element.js改为element.ts即可。

   如果是完整引入Element可以将element.js中的内容放到main.ts中，删除element.js文件。如果是按需引入Element，还是建议将独立出的element.js保留。

   element-variables.scss文件内容

   ```
   // 设置主题颜色
   $--color-primary: teal;
   
   /* icon font path, required */
   $--font-path: '~element-ui/lib/theme-chalk/fonts';
   
   // 导入scss样式文件
   @import "~element-ui/packages/theme-chalk/src/index";
   ```

   我们可以配置全局组件的尺寸。

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

4. 配置i18n

   安装vue-i18n依赖

   ```
   yarn add vue-i18n@^8.17.3
   ```

   安装i18n插件

   ```
   vue add i18n
   ```

   插件会自动生成i18n.ts文件和locals文件夹，locals文件夹内放置各类型语言包；自动在main.ts中导入i18n。并且会在vue.config.js文件夹(如果没有会自动生成)内配置i18n相关设置。

   这个时候locals内的文件是默认的json文件，它支持以下几种定义方式。

   * 内联为JavaScript代码中的数据(**虽然可以将翻译可以独立包含在一个文件中，但是不建议这样写**)

   * js文件(**优点是可以使用require / import轻松导入这些文件** )

   * json文件(**如果项目较大，建议使用JSON文件**)

   * 在.vue文件内联i18n(**适用于重复使用的组件**，在vue.config.js中配置enableInSFC为true才能使用)

     ```
     <i18n>
     {
       "en": {
         "hello": "Hello i18n in SFC!",
         "welcome": "Welcome!",
         "yes-button": "Yes",
         "no-button": "No!"
       },
       "de": {
         "hello": "Hallo i18n in SFC!",
         "welcome": "Willkommen!",
         "yes-button": "Ja",
         "no-button": "Nein!"
       }
     }
     </i18n>
     ```

   参考链接：[How to translate your Vue.js application with vue-i18n](https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-vue-app-with-vue-i18n)

   在locals中配置zh-CN.ts和en-US.ts文件

   zh-CN.ts

   ```
   const zhCN = {
       message: "hello i18n !!",
   };
   
   export default zhCN;
   
   type LangPack = typeof zhCN
   export type { LangPack };
   ```

   在en-US.ts文件中设置了类型匹配，里面字段类型必须和zh-CN.ts中一致

   ```
   import type { LangPack } from "./zh-CN";
   
   const enUS: LangPack = {
     message: "hello i18n !!",
   };
   
   export default enUS;
   ```

   i18n.ts

   ```
   import Vue from 'vue'
   import VueI18n, { LocaleMessages } from 'vue-i18n'
   
   import zhCN from "@/locales/zh-CN";
   import enUS from "@/locales/en-US";
   
   Vue.use(VueI18n)
   
   const messages: LocaleMessages = {
     "zh-CN": zhCN,
     "en-US": enUS,
   };
   
   function getLocation() {
     if (navigator.language in messages) {
       return navigator.language;
     }
     for (let i = 0; i < navigator.languages.length; i++) {
       let lang = navigator.languages[i];
       if (lang in messages) {
         return lang;
       }
     }
     return "en-US";
   }
   
   export default new VueI18n({
     messages,
     locale: getLocation(),
   });
   ```

   给Element配置i18n

   ```
   Vue.use(Element, {
     i18n: (key: string, value: string) => i18n.t(key, value)
   })
   ```

5. 配置axios

```
yarn add axios@^0.18.0
```

​	继续使用插件安装，

```
vue add axios
```

​	需要将生成的axios.js文件修改为axios.ts文件

```
// 将Plugin改为下面内容
Vue.use({
  install: function (Vue, options) {
    (Vue as typeof Vue & { axios: typeof _axios }).axios = _axios;
    (window as typeof window & { axios: typeof _axios }).axios = _axios;
    Object.defineProperties(Vue.prototype, {
      axios: {
        get() {
          return _axios;
        }
      },
      $axios: {
        get() {
          return _axios;
        }
      },
    });
  }
});
```



5. 关于VueCLI插件

VueCLI插件的名字以`@vue/cli-plugin-`（内部建插件）或`vue-cli-plugin-`（社区插件）开头，非常容易使用。

