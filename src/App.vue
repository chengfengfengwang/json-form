<script setup lang="ts">
import { ref } from "vue";
import Form from "./components/Form.vue";
import type { schemaType } from "./components/type";

const schema: schemaType = [
  {
    label: "姓名",
    field: "name",
    type: "input",
  },
  {
    label: "手机号",
    field: "mobile",
    type: "input",
  },
  {
    label: "等级",
    field: "grade",
    type: "select",
    selecTions: [
      {
        label: "高级",
        value: 2,
      },
      {
        label: "中级",
        value: 1,
      },
    ],
  },
  {
    label: "日期范围",
    field: "date",
    type: "daterange",
  },
  {
    label: "日期范围",
    field: "daterangeShort",
    type: "daterangeShort",
    option: {
      shortcuts: [
        {
          text: "Last week",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end];
          },
        },
        {
          text: "Last month",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end];
          },
        },
        {
          text: "Last 3 months",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end];
          },
        },
      ],
    },
  },
];
// the same name to form dom's attribute
// const formRef = ref(null);
const formRef = ref<InstanceType<typeof Form> | null>(null);
const getFormValue = () => {
  console.log("---formValue is: ", formRef.value?.formModel);
};
</script>

<template>
  <Form :schema="schema" ref="formRef"></Form>
  <el-button @click="getFormValue" type="primary">search</el-button>
</template>
