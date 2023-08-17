export interface Tree {
  label: string;
  value: string;
  children?: Tree[];
}
export const menuList = [
  {
    label: "组件",
    value: "Components",
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
    ],
  },
];
