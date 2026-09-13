# Contributing

이 저장소는 Sia의 Notion 포트폴리오 사이트입니다.

## 로컬 개발

Node.js와 `pnpm`을 설치한 뒤 저장소 루트에서 다음 명령을 실행합니다.

```bash
git clone https://github.com/73510/siasun_yongwoocho.git
cd siasun_yongwoocho
pnpm install
pnpm dev
```

개발 서버는 기본적으로 `http://localhost:3000`에서 열립니다.

## 변경 사항 확인

Pull request를 열기 전에 아래 검사를 실행해 주세요.

```bash
pnpm test
pnpm exec tsc --noEmit
pnpm build
```

사이트 콘텐츠는 공개된 Notion 페이지에서 불러오므로, 코드 변경과 Notion 콘텐츠 변경을 구분해 주세요.
