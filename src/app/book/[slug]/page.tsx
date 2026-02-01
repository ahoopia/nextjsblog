// app/blog/[slug]/page.tsx

// 1. 定义要在构建时生成的路径
export async function generateStaticParams() {
  const posts: any = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  ).then((res) => res.json());

  return posts.slice(0, 5).map((post: any) => ({
    slug: post.id.toString(),
  }));
}

// 2. 页面组件
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 必须 await params
  const { slug } = await params;

  // 此 fetch 会在构建时执行并缓存结果
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const data: any = await res.json();

  return (
    <main>
      <div
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          justifyContent: "center",
          maxWidth: "600px",
          margin: "20px auto",
          color: "#1b1313",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div
          style={{ fontWeight: "bold", fontSize: "1.2em", color: "#534f4f" }}
        >
          {data.title}
        </div>
        <div
          style={{
            marginTop: "10px",
            lineHeight: "1.6",
            color: "#6b6060",
          }}
        >
          {data.body}
        </div>
      </div>
    </main>
  );
}
