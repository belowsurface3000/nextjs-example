import Link from "next/link";

export default function Home() {
  return (
    <main className="index-page">
      <h1>Next.js Demo Page</h1>
      <h3><Link href="https://nextjs.org/" target="_blank"><span><b>Next.js</b></span></Link> is the most popular React framework.</h3>
      <p>To get started, just type <b>$ npx create-next-app@latest --typescript</b> into your console.</p>
      <p>Learn more about Next.js here:</p>

      <div className="iframe-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_w0Ikk4JY7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </main>
  )
}
