import article1Image from "../assets/images/article1.png";
import article2Image from "../assets/images/article2.png";

export interface BlogPost {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  date: string;
}

export const blogData: BlogPost[] = [
  {
    title: "Tabstr nació el día que me cobraron $250 por usar mi propio bar desde la casa.",
    subtitle:
      "Un POS famoso. Licencia por dispositivo. Otra licencia para ver mis reportes. Capacitación obligatoria. Y un software que, encima, solo quería vivir en el sistema operativo que ellos decidieron.",
    image: article2Image.src,
    href: "/blog/tabstr-nacio-cobro-250/",
    date: "29 de agosto, 2026",
  },
  {
    title: 'Tu POS no es lealtad. Es pereza disfrazada de "así siempre lo hemos hecho".',
    subtitle:
      "Los sistemas de siempre se diseñaron en otra época. Seguir con ellos no te hace prudente. Te hace lento. Y migrar no tiene por qué doler.",
    image: article1Image.src,
    href: "/blog/tu-pos-no-es-lealtad/",
    date: "29 de agosto, 2026",
  },
];
