export interface Tree {
  label: string;
  value: string;
  children?: Tree[];
}
export const menuList = [
  {
    label: "组件",
    value: "myh-common-components",
    children: [
      {
        label: "QR code",
        value: "myh-qrcode",
        children: [],
      },
      {
        label: "Draggable",
        value: "myh-draggable",
        children: [],
      },
      {
        label: "Test",
        value: "myh-test",
        children: [],
      },
    ],
  },
  {
    label: "UI组件",
    value: "myh-ui-components",
    children: [
      {
        label: "RisingBubble",
        value: "myh-risingBubble",
        children: [],
      },
    ],
  },
];
