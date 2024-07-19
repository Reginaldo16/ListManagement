import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">NOT FOUND</h1>
            <p className="text-gray-600 mb-8">A página que você está procurando não existe.</p>
            <button
                onClick={handleGoHome}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
            >
                HOME
            </button>
        </div>
    );
};
