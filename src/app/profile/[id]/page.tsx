export default function UserProfile({params}: any) {
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <h1>Profile</h1>
                <hr />
                <p>Profile Page {params.id}</p>
            </div>
        </div>
    )
}