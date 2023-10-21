import dynamic from "next/dynamic";
import { HomeSkeleton } from "@/app/components/skeleton";
const DynamicHomeClient = dynamic(()=> import("@/app/client/home/homeClient"), {
    ssr: false,
    loading: ()=> <HomeSkeleton />
})

export default function Home() {
    return (
        <DynamicHomeClient />
    )
}