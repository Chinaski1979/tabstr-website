import { motion } from "framer-motion";
import { blogData } from "../data/blogData";

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogData.map((post, index) => (
              <a
                href={post.href}
                key={`${post.title}-${index}`}
                className="w-full"
              >
                <div className="p-6 sm:p-10 bg-bgDark3 rounded-3xl hover:bg-bgDark3Hover transition cursor-pointer h-full flex flex-col">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="rounded-3xl mb-6 w-full h-48 sm:h-56 object-cover"
                    aria-label={post.title}
                  />
                  <h3 className="mb-4 text-xl sm:text-2xl font-bold font-heading text-primaryText line-clamp-3">
                    {post.title}
                  </h3>
                  <p className="text-secondaryText leading-relaxed line-clamp-3">
                    {post.subtitle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
