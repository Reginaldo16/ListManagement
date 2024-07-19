import { Chat, UserPlus, UsersFour } from '@phosphor-icons/react';

export const Home = () => {
    return (
        <div className="container  bg-gray-50 max-h-full pt-16 p-8 pb-16">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">Bem-vindo ao Gerenciador de Estudantes</h1>
                <p className="mt-2 text-gray-600">Gerencie seus estudantes de forma fácil e eficiente.</p>
            </header>

            <main className="flex flex-col items-center space-y-6">
                <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-700">Funcionalidades Principais</h2>
                    <ul className="mt-4 space-y-4">
                        <li className="flex items-center space-x-2">
                            <span className="bg-blue-500 text-white rounded-full p-2"><UserPlus size={32} /></span>
                            <span className="text-gray-600">Adicionar Novo Estudante</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="bg-green-500 text-white rounded-full p-2"><UsersFour size={32} /></span>
                            <span className="text-gray-600">Visualizar Todos os Estudantes</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="bg-yellow-500 text-white rounded-full p-2"><Chat size={32} /></span>
                            <span className="text-gray-600">Entrar em Contato</span>
                        </li>
                    </ul>
                </div>

                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-700">Últimos Destaques</h2>
                    <p className="mt-2 text-gray-600">Confira os últimos registros e atualizações.</p>
                </div>
            </main>
        </div>

    )
}

