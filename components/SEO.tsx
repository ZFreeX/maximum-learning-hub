
import Head from 'next/head'

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

const SEO = ({
  title = "МАКСИМУМ | Образовательный центр",
  description = "Образовательный центр МАКСИМУМ - путь к вашему успеху в образовании и карьере",
  canonicalUrl = "",
}: SEOProps) => {
  const fullTitle = title;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default SEO
