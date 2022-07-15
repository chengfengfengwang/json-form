export type schemaItemType = {
  label: string;
  field: string;
  type: formItemComponentType;
  selecTions?: selecTionsType;
  option?:{
    shortcuts?: Array<any>
  }
}
// 数组类型，数组里面有对象
export type schemaType = Array<schemaItemType>;
export type selecTionsType = Array<{
  label: string;
  value: string | number;
}>;

export type formItemComponentType = 'input' | 'select' | 'daterange' | 'daterangeShort'
