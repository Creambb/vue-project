<template>
  <el-submenu
    v-if="'children' in menuItem"
    :index="menuItem.id"
    :title="menuItem.name[$i18n.locale]"
  >
    <NavSubmenu
      v-for="submenuItem in menuItem.children"
      :menuItem="submenuItem"
      :key="submenuItem.id"
      :iconLibVersion="iconLibVersion"
    ></NavSubmenu>
  </el-submenu>
  <el-menu-item
    class="nav-submenu"
    v-else
    :index="menuItem.path"
  >
    {{ menuItem.name[$i18n.locale] }}
  </el-menu-item>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
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

@Component({
  name: 'NavSubmenu',
})
export default class NavSubmenu extends Vue {
  @Prop({ required: true })
  menuItem!: MenuItem;

  @Prop({ required: true })
  iconLibVersion!: string;
}
</script>

<style></style>
