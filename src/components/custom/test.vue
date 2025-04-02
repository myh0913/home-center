<template>
  <!-- <el-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :limit="3"
    :on-exceed="handleExceed"
  >
    <el-button type="primary">Click to upload</el-button>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
  </el-upload> -->
  <div class="demo-image">
    <div class="block">
      <el-button type="primary" @click="handleClick">下一张</el-button>
      <el-image
        v-if="url"
        style="width: 800px; height: auto"
        :src="url"
        fit="fill"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";

// const url = "http://127.0.0.1:3000/image/1.png";
const url = ref("");
const nextUrl = ref(1);

const handleClick = async () => {
  if (nextUrl.value > 10) {
    nextUrl.value = 1;
  }
  const res = await axios({
    method: "get",
    url: `https://ninety-cameras-follow.loca.lt/image/${nextUrl.value}.png`,
    headers: {
      "Bypass-Tunnel-Reminder": "y",
    },
    responseType: "blob",
  });
  url.value = URL.createObjectURL(res.data);
  nextUrl.value++;
};
</script>
<style scoped>
.demo-image .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image .block:last-child {
  border-right: none;
}
.demo-image .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
