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
        value: "myh-Qrcode",
        children: [],
      },
      {
        label: "Draggable",
        value: "myh-Draggable",
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
        value: "myh-RisingBubble",
        children: [],
      }
    ]
  }
];
