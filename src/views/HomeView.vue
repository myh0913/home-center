<template>
  <div class="custom-component-container">
    <el-tree
      :data="menuList"
      :props="treeProps"
      @node-click="handleClick"
    ></el-tree>
    <div class="component-container">
      <component v-if="vm" :is="vm"></component>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { menuList } from "@/assets/menu";
import type { Tree } from "@/assets/menu";

const treeProps = {
  label: "label",
  children: "children",
};
const vm = ref("");

const handleClick = (item: Tree) => {
  vm.value = item.value;
};
</script>
<style lang="scss" scoped>
.custom-component-constainer {
  display: flex;
}
.el-tree {
  width: 200px;
  :deep(.el-tree-node__expand-icon svg) {
    width: 14px;
    height: 14px;
  }
}
.component-container {
  flex: 1;
}
</style>
