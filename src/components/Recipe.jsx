import ReactMarkdown from 'react-markdown';

export default function Recipe(props) {
    return (
        <section className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto mt-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Generated Recipe:</h2>
            <ReactMarkdown className="prose prose-blue text-gray-700">
                {props.recipe}
            </ReactMarkdown>
        </section>
    );
}
