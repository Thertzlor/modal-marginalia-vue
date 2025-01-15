import {writeFileSync} from 'fs';

export const generateAndOutputPostMapping = async () => {

  const bumi = await fetch('https://modal-marginalia-cms.up.railway.app/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: /*JS*/`
    query mapQuery {
      aboutPage {
        updatedAt
      }
      posts {
        slug
        human_id
        updatedAt
        tags_connection {
          nodes {
            documentId
          }
        }
        category {
          documentId
        }
      }
      categories {
        documentId
        slug
      }
      tags {
        documentId
        slug
      }
    }
    

  ` }),
  });



  const {data} = JSON.parse(await bumi.text());

  const activeTags = new Set(data.posts.flatMap(p => p.tags_connection.nodes.map(n => n.documentId)));
  const activeCats = new Set(data.posts.map(p => p.category.documentId));

  /**@type {LocData[]} */

  const baseUrl = 'https://www.modal-marginalia.com/';

  /**
   * @typedef { {loc:string,lastmod?:Date,changefreq?:'monthly'|'yearly'|'weekly',priority?:number,c?:string,t?:string[]}} LocData
  */

  /**@type {LocData[]} */
  const postData = data.posts.map(
    /** @returns {LocData} */
    p => ({loc: `post/${p.human_id}-${p.slug}`, priority: 1, changefreq: 'monthly', lastmod: new Date(p.updatedAt), c: p.category.documentId, t: p.tags_connection.nodes.map(t => t.documentId)}));

  /**@type {LocData[]} */
  const catData = data.categories.filter(c => activeCats.has(c.documentId)).map(
    /** @returns {LocData} */
    c => ({
      loc: `post-list?category=${c.slug}`,
      priority: 0.6,
      changefreq: 'monthly',
      lastmod: new Date(Math.max(...postData.filter(p => p.c === c.documentId).map(p => p.lastmod?.getTime() ?? 0)))
    })
  );


  /**@type {LocData[]} */
  const tagData = data.tags.filter(t => activeTags.has(t.documentId)).map(
    /** @returns {LocData} */
    t => ({
      loc: `post-list?tag=${t.slug}`,
      priority: 0.4,
      changefreq: 'monthly',
      lastmod: new Date(Math.max(...postData.filter(p => p.t?.includes(t.documentId)).map(p => p.lastmod?.getTime() ?? 0)))
    })
  );

  /**@type {LocData[]} */
  const mapData = [
    {
      loc: 'about',
      changefreq: 'yearly',
      priority: 0.5,
      lastmod: new Date(data.aboutPage.updatedAt)
    },
    {
      loc: 'post-list',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date(Math.max(...postData.map(p => p.lastmod?.getTime() ?? 0)))
    },
    {
      loc: 'tag-cloud',
      changefreq: 'monthly',
      priority: 0.3,
      lastmod: new Date(Math.max(...postData.map(p => p.lastmod?.getTime() ?? 0)))
    }
  ];

  /**
   * 
   * @param {Date} d 
   */
  const datur = d => d.toISOString();

  /**
   * @param {LocData} x 
   */
  const toXML = x => {
    const womp = ['loc', 'lastmod', 'changefreq', 'priority'].map(t => {
      if (!x[t]) return;
      return /*xml*/`<${t}>${t === 'lastmod' ? datur(x[t]) : t === 'loc' ? baseUrl + x[t] : x[t]}</${t}>`;
    }).filter(x => x).join('');
    return `<url>${womp}</url>`;
  };

  const xmString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[...tagData, ...postData, ...catData, ...mapData].map(l => toXML(l)).join('')}</urlset> `;

  writeFileSync('./dist/sitemap.xml', xmString);

  return postData.map(l => '/' + l.loc.replace(baseUrl, '/'));
};
