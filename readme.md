# Sia’s portfolio

Notion을 콘텐츠 소스로 사용하는 Sia의 포트폴리오입니다.

- Production: <https://siasun.yongwoocho.com>
- Content: `site.config.ts`에 지정된 공개 Notion 페이지
- Hosting: Vercel

## Development

```bash
pnpm install
pnpm dev
```

배포 전 검증:

```bash
pnpm test
pnpm build
```

이 프로젝트는 [Next.js Notion Starter Kit](https://github.com/transitive-bullshit/nextjs-notion-starter-kit)을 기반으로 합니다.
