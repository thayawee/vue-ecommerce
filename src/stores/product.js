import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    list: [
      {
        code: "0001",
        nameTh: "ปราสาทนางฟ้า",
        nameEn: "Fairy Castle Cactus",
        imageUrl:
          "https://images.pexels.com/photos/3075987/pexels-photo-3075987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description:
          "กระบองเพชรเป็นพรรณไม้ยืนต้นขนาดเล็กถึงขนาดกลาง ลำต้นมีสีเขียวหรือเขียวคล้ำ มีขนหรือหนามรอบต้นหรือไม่มีก็ได้แล้วแต่ชนิดพันธุ์",
        price: 60,
      },
      {
        code: "0002",
        nameTh: "ยิมโน",
        nameEn: "Moon Cactus",
        imageUrl:
          "https://images.pexels.com/photos/9214047/pexels-photo-9214047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description:
          "กระบองเพชรเป็นพรรณไม้ยืนต้นขนาดเล็กถึงขนาดกลาง ลำต้นมีสีเขียวหรือเขียวคล้ำ มีขนหรือหนามรอบต้นหรือไม่มีก็ได้แล้วแต่ชนิดพันธุ์",
        price: 90,
      },
      {
        code: "0003",
        nameTh: "หูกระต่าย",
        nameEn: "Bunny Ears Cactus",
        imageUrl:
          "https://images.pexels.com/photos/7159916/pexels-photo-7159916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description:
          "กระบองเพชรเป็นพรรณไม้ยืนต้นขนาดเล็กถึงขนาดกลาง ลำต้นมีสีเขียวหรือเขียวคล้ำ มีขนหรือหนามรอบต้นหรือไม่มีก็ได้แล้วแต่ชนิดพันธุ์",
        price: 50,
      },
      {
        code: "0004",
        nameTh: "ถังทอง",
        nameEn: "Golden Barrel Cactus",
        imageUrl:
          "https://images.pexels.com/photos/9130817/pexels-photo-9130817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        discription:
          "กระบองเพชรเป็นพรรณไม้ยืนต้นขนาดเล็กถึงขนาดกลาง ลำต้นมีสีเขียวหรือเขียวคล้ำ มีขนหรือหนามรอบต้นหรือไม่มีก็ได้แล้วแต่ชนิดพันธุ์",
        price: 60,
      },

      {
        code: "0005",
        nameTh: "แมมตุ๊กตาญี่ปุ่น",
        nameEn: "Thimble Cactus",
        imageUrl:
          "https://images.pexels.com/photos/1370697/pexels-photo-1370697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description:
          "กระบองเพชรเป็นพรรณไม้ยืนต้นขนาดเล็กถึงขนาดกลาง ลำต้นมีสีเขียวหรือเขียวคล้ำ มีขนหรือหนามรอบต้นหรือไม่มีก็ได้แล้วแต่ชนิดพันธุ์",
        price: 60,
      },
      {
        code: "0006",
        nameTh: "นิ้วทอง",
        nameEn: "Ladyfinger Cactus",
        imageUrl:
          "https://images.pexels.com/photos/1211736/pexels-photo-1211736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description:
          "กระบองเพชรเป็นพรรณไม้ยืนต้นขนาดเล็กถึงขนาดกลาง ลำต้นมีสีเขียวหรือเขียวคล้ำ มีขนหรือหนามรอบต้นหรือไม่มีก็ได้แล้วแต่ชนิดพันธุ์",
        price: 60,
      },
      {
        code: "0007",
        nameTh: "คลื่นสมอง",
        nameEn: "Brain Cactus",
        imageUrl:
          "https://images.pexels.com/photos/1034467/pexels-photo-1034467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description:
          "กระบองเพชรเป็นพรรณไม้ยืนต้นขนาดเล็กถึงขนาดกลาง ลำต้นมีสีเขียวหรือเขียวคล้ำ มีขนหรือหนามรอบต้นหรือไม่มีก็ได้แล้วแต่ชนิดพันธุ์",
        price: 80,
      },
      {
        code: "0008",
        nameTh: "นูปต้า",
        nameEn: "Echinopsis Subdenudata",
        imageUrl:
          "https://images.pexels.com/photos/2180212/pexels-photo-2180212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description:
          "กระบองเพชรเป็นพรรณไม้ยืนต้นขนาดเล็กถึงขนาดกลาง ลำต้นมีสีเขียวหรือเขียวคล้ำ มีขนหรือหนามรอบต้นหรือไม่มีก็ได้แล้วแต่ชนิดพันธุ์",
        price: 80,
      },
      {
        code: "0009",
        nameTh: "ฮาโวเทียหยดน้ำ",
        nameEn: "Haworthia Cooperi",
        imageUrl:
          "https://images.pexels.com/photos/11216392/pexels-photo-11216392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description:
          "กระบองเพชรเป็นพรรณไม้ยืนต้นขนาดเล็กถึงขนาดกลาง ลำต้นมีสีเขียวหรือเขียวคล้ำ มีขนหรือหนามรอบต้นหรือไม่มีก็ได้แล้วแต่ชนิดพันธุ์",
        price: 70,
      },
    ],
  }),
  actions: {
    filterProducts(searchText) {
      return this.list.filter(
        (product) =>
          product.nameTh.includes(searchText) ||
          product.nameEn.includes(searchText)
      );
    },
    selectProductById(productId) {
      return this.list.filter((product) => product.code.includes(productId));
    },
  },
});
