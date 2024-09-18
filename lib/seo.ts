export const seo = {
  title: 'Dawe',
  description:
    '我叫 Dawe，目前正在寻找一个前端开发的工作机会。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://dawe-omega.vercel.app/'
      : 'http://localhost:3000'
  ),
} as const
