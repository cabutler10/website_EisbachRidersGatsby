const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
// const { access } = require("fs")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve("src/templates/page.js")
  const productTemplate = path.resolve("src/templates/productTemplate.js")
  const productCategoryTemplate = path.resolve(
    "src/templates/productCategoryTemplate.js"
  )

  const result = await graphql(`
    query {
      pagesRemark: allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
      products: wpgraphql {
        products(first: 50, where: { tagIn: "Eisbach Riders" }) {
          edges {
            node {
              name
              image {
                sourceUrl
                slug
              }
              galleryImages {
                edges {
                  node {
                    sourceUrl
                    slug
                  }
                }
              }
              shortDescription(format: RENDERED)
              paAmounts {
                edges {
                  node {
                    name
                  }
                }
              }
              paWaterTemps {
                edges {
                  node {
                    name
                  }
                }
              }
              paColors {
                edges {
                  node {
                    name
                  }
                }
              }
              paFinPlugs {
                edges {
                  node {
                    name
                  }
                }
              }
              paSizes {
                edges {
                  node {
                    name
                  }
                }
              }
              productTags {
                edges {
                  node {
                    name
                  }
                }
              }
              slug
              link
            }
          }
        }
      }
      fins: wpgraphql {
        products(
          first: 30
          where: { category: "Fins", tagIn: "Eisbach Riders", tagNotIn: "sup" }
        ) {
          edges {
            node {
              name
              image {
                sourceUrl
                slug
              }
              galleryImages {
                edges {
                  node {
                    sourceUrl
                    slug
                  }
                }
              }
              shortDescription(format: RENDERED)
              paAmounts {
                edges {
                  node {
                    name
                  }
                }
              }
              paWaterTemps {
                edges {
                  node {
                    name
                  }
                }
              }
              paColors {
                edges {
                  node {
                    name
                  }
                }
              }
              paFinPlugs {
                edges {
                  node {
                    name
                  }
                }
              }
              paSizes {
                edges {
                  node {
                    name
                  }
                }
              }
              productTags {
                edges {
                  node {
                    name
                  }
                }
              }
              slug
              link
            }
          }
        }
      }
      leashes: wpgraphql {
        products(where: { category: "Leashes", tagIn: "Eisbach Riders" }) {
          edges {
            node {
              name
              image {
                sourceUrl
                slug
              }
              galleryImages {
                edges {
                  node {
                    sourceUrl
                    slug
                  }
                }
              }
              shortDescription(format: RENDERED)
              paAmounts {
                edges {
                  node {
                    name
                  }
                }
              }
              paWaterTemps {
                edges {
                  node {
                    name
                  }
                }
              }
              paColors {
                edges {
                  node {
                    name
                  }
                }
              }
              paFinPlugs {
                edges {
                  node {
                    name
                  }
                }
              }
              paSizes {
                edges {
                  node {
                    name
                  }
                }
              }
              productTags {
                edges {
                  node {
                    name
                  }
                }
              }
              slug
              link
            }
          }
        }
      }
      sup: wpgraphql {
        products(
          first: 30
          where: { category: "SUP", tagIn: "Eisbach Riders", tagNotIn: "leash" }
        ) {
          edges {
            node {
              name
              image {
                sourceUrl
                slug
              }
              galleryImages {
                edges {
                  node {
                    sourceUrl
                    slug
                  }
                }
              }
              shortDescription(format: RENDERED)
              paAmounts {
                edges {
                  node {
                    name
                  }
                }
              }
              paWaterTemps {
                edges {
                  node {
                    name
                  }
                }
              }
              paColors {
                edges {
                  node {
                    name
                  }
                }
              }
              paFinPlugs {
                edges {
                  node {
                    name
                  }
                }
              }
              paSizes {
                edges {
                  node {
                    name
                  }
                }
              }
              productTags {
                edges {
                  node {
                    name
                  }
                }
              }
              slug
              link
            }
          }
        }
      }
      accessories: wpgraphql {
        products(
          first: 30
          where: { category: "Accessories", tagIn: "Eisbach Riders" }
        ) {
          edges {
            node {
              name
              image {
                sourceUrl
                slug
              }
              galleryImages {
                edges {
                  node {
                    sourceUrl
                    slug
                  }
                }
              }
              shortDescription(format: RENDERED)
              paAmounts {
                edges {
                  node {
                    name
                  }
                }
              }
              paWaterTemps {
                edges {
                  node {
                    name
                  }
                }
              }
              paColors {
                edges {
                  node {
                    name
                  }
                }
              }
              paFinPlugs {
                edges {
                  node {
                    name
                  }
                }
              }
              paSizes {
                edges {
                  node {
                    name
                  }
                }
              }
              productTags {
                edges {
                  node {
                    name
                  }
                }
              }
              slug
              link
            }
          }
        }
      }
      apparel: wpgraphql {
        products(where: { category: "Apparel", tagIn: "Eisbach Riders" }) {
          edges {
            node {
              name
              image {
                sourceUrl
                slug
              }
              galleryImages {
                edges {
                  node {
                    sourceUrl
                    slug
                  }
                }
              }
              shortDescription(format: RENDERED)
              paAmounts {
                edges {
                  node {
                    name
                  }
                }
              }
              paWaterTemps {
                edges {
                  node {
                    name
                  }
                }
              }
              paColors {
                edges {
                  node {
                    name
                  }
                }
              }
              paFinPlugs {
                edges {
                  node {
                    name
                  }
                }
              }
              paSizes {
                edges {
                  node {
                    name
                  }
                }
              }
              productTags {
                edges {
                  node {
                    name
                  }
                }
              }
              slug
              link
            }
          }
        }
      }
    }
  `)
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const pages = result.data.pagesRemark.edges
  const products = result.data.products.products.edges
  const fins = result.data.fins.products.edges
  const leashes = result.data.leashes.products.edges
  const sup = result.data.sup.products.edges
  const accessories = result.data.accessories.products.edges
  const apparel = result.data.apparel.products.edges

  // Create pages
  pages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: pageTemplate,
      context: { id: node.id },
    })
  })

  // Create product category pages
  createPage({
    path: "/products",
    component: productCategoryTemplate,
    context: { products: products, category: "products" },
  })
  createPage({
    path: "/products/surfboard-fins",
    component: productCategoryTemplate,
    context: { products: fins, category: "surfboard-fins" },
  })
  createPage({
    path: "/products/sup-longboard-fins",
    component: productCategoryTemplate,
    context: { products: sup, category: "sup-longboard-fins" },
  })
  createPage({
    path: "/products/leashes",
    component: productCategoryTemplate,
    context: { products: leashes, category: "leashes" },
  })
  createPage({
    path: "/products/accessories",
    component: productCategoryTemplate,
    context: { products: accessories, category: "accessories" },
  })
  createPage({
    path: "/products/apparel",
    component: productCategoryTemplate,
    context: { products: apparel, category: "apparel" },
  })

  // Create individual product pages
  fins.forEach(({ node }) => {
    createPage({
      path: `products/${node.slug}`,
      component: productTemplate,
      context: { product: node },
    })
  })

  leashes.forEach(({ node }) => {
    createPage({
      path: `products/${node.slug}`,
      component: productTemplate,
      context: { product: node },
    })
  })

  sup.forEach(({ node }) => {
    createPage({
      path: `products/${node.slug}`,
      component: productTemplate,
      context: { product: node },
    })
  })

  accessories.forEach(({ node }) => {
    createPage({
      path: `products/${node.slug}`,
      component: productTemplate,
      context: { product: node },
    })
  })

  apparel.forEach(({ node }) => {
    createPage({
      path: `products/${node.slug}`,
      component: productTemplate,
      context: { product: node },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: value,
    })
  }
}
