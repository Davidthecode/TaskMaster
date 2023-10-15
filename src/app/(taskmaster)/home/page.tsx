import dynamic from "next/dynamic"
const DynamicHomeClient = dynamic(()=> import("@/app/client/home/homeClient"), {
    ssr: false,
    loading: ()=> <div>Loading...</div>
})

export default function Home() {
    return (
        <DynamicHomeClient />
    )
}