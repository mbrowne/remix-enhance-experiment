import data from './data'

const articles = data.map((article) => ({
    ...article,
    url: `/blog/${article.id}/${article.slug}`,
}))

export function getArticleById(id: string) {
    const article = articles.find((a) => a.id === id)
    return article
        ? {
              ...article,
              body: `<p>I'm baby vaporware pok pok bitters hammock normcore meh shaman single-origin coffee palo santo kogi put a bird on it austin pour-over lomo. Pickled twee godard, whatever semiotics poutine everyday carry hot chicken. Bushwick asymmetrical DIY vice butcher, scenester etsy small batch marxism forage four dollar toast godard keffiyeh echo park blog. Gochujang you probably haven't heard of them intelligentsia viral. Selfies hammock plaid, bitters Brooklyn tbh paleo palo santo.</p>
                <p>Echo park godard tattooed farm-to-table DSA, vice green juice. Poutine tilde beard mixtape meggings. Vice solarpunk crucifix occupy, waistcoat tbh fashion axe kickstarter hot chicken pork belly jean shorts. Tofu banh mi 90's, air plant tattooed kogi locavore flexitarian vibecession salvia deep v.</p>
                <p>(Courtesy of <a href="https://hipsum.co/" target="_blank" rel="noreferrer">Hipster Ipsum</a> :-) )`,
          }
        : null
}

export function getRelatedArticles(id: string) {
    return articles.filter((a) => a.id !== id)
}
