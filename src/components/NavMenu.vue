<template>
  <div class="hello">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
interface MenuItem {
  id: string;
  path: string;
  icon: string;
  name: {
    'zh-Hans': string;
    en: string;
  };
  children?: MenuItem[];
}
@Component
export default class NavMenu extends Vue {
  @Prop({ required: true })
  menuItems!: MenuItem[];

  @Prop({ required: true })
  iconLibVersion!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
