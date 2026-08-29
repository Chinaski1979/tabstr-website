import { motion } from "framer-motion";

import blogHero from "../assets/images/tabs-management.png";

const blogData = [
  {
    title: 'Tu POS no es lealtad. Es pereza disfrazada de "así siempre lo hemos hecho".',
    subtitle:
      "Los sistemas de siempre se diseñaron en otra época. Seguir con ellos no te hace prudente. Te hace lento. Y migrar no tiene por qué doler.",
    image: blogHero.src,
    href: "/blog/article",
  },
];

export const Blog = () => (
  <section className="w-screen flex justify-center bg-bgDark2 relative ">
    <div className="absolute -top-16" id="blog" />
    <div className="pb-0 pt-4 bg-bgDark2 2xl:w-[1200px] lg:w-[1000px] xl:w-[1150px]  ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container px-4 mb-20">
          <div className="max-w-2xl text-center lg:text-left mb-16 mx-auto lg:ml-0 lg:mr-0">
            <span className="block-subtitle">Blog</span>
            <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
              Últimas publicaciones
            </h2>
            <p className="mb-6 text-secondaryText">
              Ideas directas sobre POS, migración y operación de tu negocio.
            </p>
          </div>
          <div className="flex 2xl:w-[1200px] lg:w-[1000px] xl:w-[1150px] flex-wrap -mx-4 items-start">
            {blogData.map((post, index) => (
              <div
                key={`${post.title}-${index}`}
                className="flex w-11/12 mx-auto lg:w-2/3 xl:w-3/5 px-4 mb-8 h-full"
              >
                <a href={post.href} className="w-full">
                  <div className="p-6 sm:p-10 bg-bgDark3 rounded-3xl h-full hover:bg-bgDark3Hover transition cursor-pointer">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="rounded-3xl mb-6 w-full"
                      aria-label={post.title}
                    />
                    <h3 className="mb-4 text-2xl font-bold font-heading text-primaryText">
                      {post.title}
                    </h3>
                    <p className="text-secondaryText leading-loose">
                      {post.subtitle}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
