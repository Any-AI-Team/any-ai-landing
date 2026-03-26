import { JsonLd } from "@/components/seo/JsonLd";
import HomeClient from "./HomeClient";

export default function Index() {
    return (
        <>
            <JsonLd />
            <HomeClient />
        </>
    );
}
