import { responseAtom } from "@/lib/response-atom";
import { useAtom } from "jotai";

export default function Response() {
    const [response] = useAtom(responseAtom)

    return (
        <div className="bg-gray-100">
            {response && (
                <>
                    <div className="p-4">
                        <h2 className="text-xl font-bold">Response</h2>
                        <p>{response}</p>
                    </div>
                </>
            )}
        </div>
    )
}