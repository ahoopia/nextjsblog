interface Todo {
  userId: number;
  id: number;
  title: string;
  completed?: boolean;
}

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data: Todo = await res.json();
  return <p>{JSON.stringify(data)}</p>;
}

// export async function getServerSideProps() {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
//     const data: Todo[] = await res.json()

//     return { props: { data } }
// }
