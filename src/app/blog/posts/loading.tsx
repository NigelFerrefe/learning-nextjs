/**
 * Loading component that displays a loading message.
 * 
 * This component will be displayed when the page is loading data from the database.
 * The syntax for the loading component is the same as the syntax for the error component.
 * It automatically reads the error and loading components from the pages folder,
 * so we don't need to import them in the page component.
 * This is useful for the frontend to indicate that data is currently being loaded.
 */

// export default function Loading() { 
    //     return (
        //         <div>
        //             <h1>Loading...</h1>
//         </div>
//     )
// }

import { PostsSkeleton } from "@/app/ui/components/skeleton"

export default function Loading() {
    return (
        <>
            <h1>Loading...</h1>
            <PostsSkeleton/>
        </>
    )
}