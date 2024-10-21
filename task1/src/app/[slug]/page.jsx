"use clent"


export default function SlugPage({ params }) {
    const { slug } = params;

    return (
        <div>
            <h1>Slug: {slug}</h1>
        </div>
    );
};

// export async function getServerSideProps() {
//     const dataFromServer = 'Server-rendered data for this page';
// }
