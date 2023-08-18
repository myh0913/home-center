<template>
  <div class="drag-container">
    <draggable
      :list="list"
      :disabled="false"
      class="list-group"
      ghost-class="ghost"
      :move="checkMove"
      item-key="id"
      @start="dragging = true"
      @end="dragging = false"
    >
      <template #item="{ element, index }">
        <div>{{ index + element.name }}</div>
      </template>
    </draggable>
    <draggable
      v-model="list"
      v-bind="dragOptions"
      item-key="id"
      :component-data="{
        tag: 'ul',
        type: 'transition-group',
        name: !dragging ? 'flip-list' : null,
      }"
      @start="dragging = true"
      @end="dragging = false"
    >
      <template #item="{ element: obj, index: m }">
        <div>{{ m }}:{{ obj.name }}</div>
      </template>
    </draggable>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";

const list = ref([
  { id: 10, name: "小明" },
  { id: 20, name: "小红" },
  { id: 30, name: "Karen" },
  { id: 40, name: "Mary" },
]);
const dragging = ref(false);
const dragOptions = {
  animation: 200,
  group: "description",
  disabled: false,
  ghostClass: "ghost",
};

const checkMove = (e: any) => {
  console.log(e, list);
};
</script>
<style scoped>
.drag-container {
  display: flex;
  justify-content: space-between;
  width: 400px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.6;
  background: #ececec;
}
</style>
