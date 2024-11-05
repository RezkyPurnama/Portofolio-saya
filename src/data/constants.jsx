import picture from "../assets/onlineshopsaya.png";
import picture1 from "../assets/inventori.png";
import picture2 from "../assets/sekolahsaya1.png";

export const Bio = {
  name: "Rezky Purnama Sarta",
  roles: ["Front-End Developer", "UI/UX Designer"],
  description:
    "Saya adalah individu yang termotivasi dan serba bisa, selalu bersemangat untuk menghadapi tantangan baru. Dengan semangat belajar, saya berdedikasi untuk memberikan hasil berkualitas tinggi. Dengan sikap positif dan pola pikir berkembang, saya siap memberikan kontribusi yang berarti dan mencapai hal-hal besar.",
  github: "https://github.com/RezkyPurnama",
  insta: "https://www.instagram.com/_rezkypurnama/",
  email: "",
};

export const skills = [
  {
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Flutter",
        image:
          "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: " Website Inventori Jurusan Teknologi Informasi",
    desc: "WEB Inventori Jurusan Teknologi Informasi merupakan tugas Project Base Learning (PBL) yang dikerjakan dalam bentuk tim. Web ini bertujuan untuk meningkatkan efisiensi dan akurasi manajemen stok barang di Jurusan Teknologi Informasi. Website ini menawarkan fitur pernantauan persediaan barang, dan pengelolaan data peminjaman, sehingga proses manajemen stok menjadi lebih terorganisir dan efisien.",
    skills: ["PHP", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 0,
    role: "Website SMAN 14 Padang ",
    desc: "Website SMAN 14 Padang dibangun dengan Bootstrap untuk menyediakan platform yang responsif dan Informatif bagi komunitas sekolah. Situs ini menyajikan profil lengkap, termasuk struktur organisasi, visi dan misi, dan juga menampilkan galeri kegiatan dan prestasi siswa, serta contact yang dapat dihubungi. Dengan desain yang user-friendly, website ini mempermudah komunikasi antara siswa, orang tua, dan masyarakat.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 1,
    role: "Mobile OnlineShopRezky",
    desc: "Pengembangan aplikasi onlineshop berbasis mobile menggunakan Flutter untuk memberikan pengalaman belanja yang nyaman melalui antarmuka intuitif. Fitur utama termasuk CRUD untuk daftar produk, melihat detail produk.Built an employee management full stack web app used Docker and deployed on AWS ec2. I was the top performer in the program.",
    skills: ["Flutter"],
  },
];

export const projects = [
  {
    id: 4,
    title: "Website Inventori Jurusan Teknologi Informasi",
    description:
      "proyek berbasis tim yang bertujuan meningkatkan efisiensi dan akurasi manajemen stok di jurusan tersebut. Website ini menyediakan fitur pemantauan stok dan pengelolaan data peminjaman, menjadikan proses manajemen inventori lebih terstruktur dan efisien.",
    image: picture1 
  },
  {
    id: 5,
    title: "Website SMAN 14 Padang",

    description:
      "Website SMAN 14 Padang dibangun dengan Bootstrap untuk menyediakan platform yang responsif dan Informatif bagi komunitas sekolah. Situs ini menyajikan profil lengkap, termasuk struktur organisasi, visi dan misi, dan juga menampilkan galeri kegiatan dan prestasi siswa, serta contact yang dapat dihubungi. Dengan desain yang user-friendly.",
    image: picture2,
  },
  {
    id: 6,
    title: "Mobile OnlineShopRezky",

    description:
      "Pengembangan aplikasi onlineshop berbasis mobile menggunakan Flutter untuk memberikan pengalaman belanja yang nyaman melalui antarmuka intuitif. Fitur utama termasuk CRUD untuk daftar produk, melihat detail produk.Built an employee management full stack web app used Docker and deployed on AWS ec2. I was the top performer in the program.",
    image: picture,
  },
];
