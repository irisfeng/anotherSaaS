export const navLinks = [
  {
    // label: "Home",
    label: "图片功能首页",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    // label: "Image Restore",
    label: "图片修复",
    route: "/transformations/add/restore",
    icon: "/assets/icons/image.svg",
  },
  {
    // label: "Generative Fill",
    label: "自动填充",
    route: "/transformations/add/fill",
    icon: "/assets/icons/stars.svg",
  },
  {
    // label: "Object Remove",
    label: "目标移除",
    route: "/transformations/add/remove",
    icon: "/assets/icons/scan.svg",
  },
  {
    // label: "Object Recolor",
    label: "重新着色",
    route: "/transformations/add/recolor",
    icon: "/assets/icons/filter.svg",
  },
  {
    // label: "Background Remove",
    label: "背景移除",
    route: "/transformations/add/removeBackground",
    icon: "/assets/icons/camera.svg",
  },
  {
    // label: "Profile",
    label: "个人档案",
    route: "/profile",
    icon: "/assets/icons/profile.svg",
  },
  {
    // label: "Buy Credits",
    label: "购买积分",
    route: "/credits",
    icon: "/assets/icons/bag.svg",
  },
];

export const plans = [
  {
    _id: 1,
    name: "Free",
    icon: "/assets/icons/free-plan.svg",
    price: 0,
    credits: 20,
    inclusions: [
      {
        label: "20 Free Credits",
        isIncluded: true,
      },
      {
        label: "Basic Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: false,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Pro Package",
    icon: "/assets/icons/free-plan.svg",
    price: 40,
    credits: 120,
    inclusions: [
      {
        label: "120 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Premium Package",
    icon: "/assets/icons/free-plan.svg",
    price: 199,
    credits: 2000,
    inclusions: [
      {
        label: "2000 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "图片修复",
    subTitle: "优化图像，去除噪点和瑕疵",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "抠图",
    subTitle: "使用AI去除图像背景",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  fill: {
    type: "fill",
    title: "自动填充",
    subTitle: "使用AI技术增强扩展图片",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  remove: {
    type: "remove",
    title: "对象移除",
    subTitle: "通过AI识别并消除图片中的对象",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "重新着色",
    subTitle: "识别并对图片中的对象重新上色",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;