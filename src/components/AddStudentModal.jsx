import React from 'react';

const AddStudentModal = ({ isOpen, onClose, onAdd }) => {
    const [formData, setFormData] = React.useState({
        name: '',
        idade: '',
        email: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-xl font-bold mb-4">Adicionar Novo Estudante</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-left">Nome:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg bg-white shadow-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-left">Idade:</label>
                        <input
                            type="number"
                            name="idade"
                            value={formData.idade}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg bg-white shadow-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-left">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg bg-white shadow-sm"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400 transition-colors mr-4"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                        >
                            Adicionar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddStudentModal;
