import { type GetStaticProps } from 'next'
import { uuidToId } from 'notion-utils'

import { NotionPage } from '@/components/NotionPage'
import { domain, isDev, rootNotionPageId } from '@/lib/config'
import { getSiteMap } from '@/lib/get-site-map'
import { resolveNotionPage } from '@/lib/resolve-notion-page'
import { type PageProps, type Params } from '@/lib/types'

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context
) => {
  const rawPageId = context.params?.pageId as string

  try {
    const props = await resolveNotionPage(domain, rawPageId)

    if (props.error?.statusCode === 404) {
      return { notFound: true, revalidate: 3600 }
    }

    return { props, revalidate: 3600 }
  } catch (err) {
    console.error('page error', domain, rawPageId, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: 'blocking'
    }
  }

  const siteMap = await getSiteMap()

  const staticPaths = {
    paths: Object.entries(siteMap.canonicalPageMap)
      .filter(([, pageId]) => uuidToId(pageId) !== rootNotionPageId)
      .map(([pageId]) => ({
        params: {
          pageId
        }
      })),
    fallback: 'blocking'
  }

  return staticPaths
}

export default function NotionDomainDynamicPage(props: PageProps) {
  return <NotionPage {...props} />
}
