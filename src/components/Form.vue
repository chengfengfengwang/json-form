<script lang="tsx">
import { defineComponent, reactive, watch } from "vue";
import type { PropType } from "vue";
import type { schemaItemType, schemaType, selecTionsType } from "./type";

export default defineComponent({
  props: {
    schema: {
      type: Object as PropType<schemaType>,
      required: true,
    },
  },
  data() {
    return {
      msg: "test",
    };
  },
  setup(props, { expose }) {
    const { schema } = props;
    const formModel = reactive({});
    watch(formModel, () => {
      console.log("---", formModel);
    });
    const renderItem = (item: schemaItemType) => {
      const { label } = item;
      return <el-form-item label={label}>{renderType(item)}</el-form-item>;
    };
    const renderType = (item: schemaItemType) => {
      const { type, field, selecTions, option } = item;
      if (type === "input") {
        return (
          <el-input v-model={formModel[field]} placeholder="Please input" />
        );
      } else if (type === "select") {
        return (
          <el-select v-model={formModel[field]} placeholder="Select">
            {selecTions?.map((item) => (
              <el-option
                key={item.value}
                label={item.label}
                value={item.value}
              ></el-option>
            ))}
          </el-select>
        );
      } else if (type === "daterange") {
        return (
          <el-date-picker
            v-model={formModel[field]}
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
          />
        );
      } else if (type === "daterangeShort") {
        return (
          <el-date-picker
            v-model={formModel[field]}
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            shortcuts={option?.shortcuts}
          />
        );
      }
    };
    expose({
      formModel,
    });
    return () => {
      return <el-form inline>{schema.map((item) => renderItem(item))}</el-form>;
    };
  },
});
</script>
