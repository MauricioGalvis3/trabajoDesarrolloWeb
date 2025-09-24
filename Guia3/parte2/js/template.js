const template = document.getElementById("card-template");
  const contenedor = document.getElementById("contenedor");

  const productos = [
    {
        titulo: "yamaha MT-09",
        desc: "900cc",
        img: "https://wallpapercat.com/w/full/2/1/d/1758710-3840x2160-desktop-4k-yamaha-mt-09-wallpaper.jpg",
        precio: 65000000
    },
    {
        titulo: "honda cbr1000rr-r",
        desc: "1000cc",
        img: "https://i.blogs.es/665d8e/honda-cbr1000rr-r-sp-fireblade-2020-014/1366_2000.jpg",
        precio: 135000000
    },
    {
        titulo: "kawasaki ninja zx-10r",
        desc: "1000cc",
        img: "https://i.pinimg.com/originals/d5/59/1c/d5591c640450f09a738c03a697947b91.jpg",
        precio: 110000000
    },
    {
        titulo: "BMW s1000rr",
        desc: "1000cc",
        img: "https://www.bmw-motorrad.co/content/dam/bmwmotorradnsc/common/multiimages/images/models/sport/s1000rr/2024/productstage/nsc-s1000rr-P0N3H-multiimage-2560x1440.jpg.asset.1732605093940.jpg",
        precio: 120000000
    },
    {
        titulo: "yamaha r1",
        desc: "1000cc",
        img: "https://www.motoscortes.com/wp-content/uploads/2024/09/2025-Yamaha-YZF1000R1.webp",
        precio: 100000000
    }
];

  productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".desc").textContent = p.desc;
    clon.querySelector(".img").src = p.img;         // Agrega la imagen
    clon.querySelector(".precio").textContent = p.precio.toLocaleString("es-co"); // Agrega el precio
    contenedor.appendChild(clon);
});
