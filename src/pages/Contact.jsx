import { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Mensagem:', message);
      
    };

    return (
        <div className="w-[80%] mx-auto p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Contato</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-left text-gray-700 text-sm font-medium mb-2">Nome</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                        placeholder="Digite seu nome"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-left text-sm font-medium mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                        placeholder="Digite seu email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 text-left text-sm font-medium mb-2">Mensagem</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="4"
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                        placeholder="Digite sua mensagem"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-9 text-xl py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default Contact;
