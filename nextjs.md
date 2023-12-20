# How to use Next.js to edit pages (for me(stupid))
### neodarkless/app/page.tsx = main index.html page
wrap everything around:

```import Image from 'next/image'

export default function Home() {
  return (
    <h1>hello world</h1>
  )
}```

### neodarkless/app/folder/page.tsx = any other pages
wrap everything around:

```export default function Home() {
    return (
        <h1>hello other world</h1>
    )
}```