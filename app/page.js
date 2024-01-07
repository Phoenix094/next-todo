import Feed from "@components/Feed";
import Form from "@components/Form";


export default function Home() {
  return (
    <main className="max-w-[1600px] mx-auto">
      <section className="w-11/12 lg:w-10/12 mx-auto mt-20 flex-col flex-center">
        <Feed />
      </section>
    </main>
  )
}
