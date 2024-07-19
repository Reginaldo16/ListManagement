import { useState, useEffect } from "react";
import { data } from "../data/data";
import AddStudentModal from "../components/AddStudentModal";
import EditStudentModal from "../components/EditStudentModal";
import { User } from "@phosphor-icons/react";

export const Student = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    useEffect(() => {
        getAllStudents();
    }, []);

    useEffect(() => {
        filterStudents();
    }, [searchTerm, students]);

    function getAllStudents() {
        setStudents(data);
    }

    function filterStudents() {
        const term = searchTerm.toLowerCase();
        const filtered = students.filter(student =>
            student.name.toLowerCase().includes(term) ||
            student.idade.toString().includes(term) ||
            student.email.toLowerCase().includes(term)
        );
        setFilteredStudents(filtered);
    }

    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
    }

    function handleEdit(index) {
        setEditingIndex(index);
        setIsEditModalOpen(true);
    }

    function handleDelete(index) {
        const updatedStudents = students.filter((_, i) => i !== index);
        setStudents(updatedStudents);
    }

    function handleSave(updatedStudent) {
        const updatedStudents = students.map((student, index) =>
            index === editingIndex ? updatedStudent : student
        );
        setStudents(updatedStudents);
        setEditingIndex(null);
        setIsEditModalOpen(false);
    }

    function handleAdd(newStudent) {
        setStudents([...students, newStudent]);
        setIsAddModalOpen(false);
    }

    return (
        <div className="container bg-gray-50 min-h-screen pt-16 p-8 pb-16">
            <div className="flex flex-col min-h-screen bg-gray-50">
                <main className="flex-grow p-8">
                    <header className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">Estudantes</h1>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                            onClick={() => setIsAddModalOpen(true)}
                        >
                            Adicionar Novo Estudante
                        </button>
                    </header>

                    <div className="mb-8">
                        <input
                            type="text"
                            placeholder="Pesquisar estudantes..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full p-3 border rounded-lg bg-white shadow-sm"
                        />
                    </div>

                    <table className="w-full bg-white rounded-lg shadow-md">
                        <thead>
                            <tr className="border-b bg-gray-200">
                                <th className="p-4 text-left">Nome</th>
                                <th className="p-4 text-left">Idade</th>
                                <th className="p-4 text-left">Email</th>
                                <th className="p-4 text-left">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.length > 0 ? (
                                filteredStudents.map((student, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-100">
                                        <td className="p-4 text-left flex items-center space-x-2"><User size={32} /> {student.name}</td>
                                        <td className="p-4 text-left"> {student.idade}</td>
                                        <td className="p-4 text-left">{student.email}</td>
                                        <td className="p-4 text-left">
                                            <button
                                                className="text-blue-500 hover:text-blue-700"
                                                onClick={() => handleEdit(index)}
                                            >
                                                Editar
                                            </button>
                                            <button
                                                className="text-red-500 hover:text-red-700 ml-4"
                                                onClick={() => handleDelete(index)}
                                            >
                                                Excluir
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="p-4 text-center text-gray-700">Nenhum estudante encontrado</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <div className="flex justify-between items-center mt-8">
                        <button
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400 transition-colors"
                        >
                            Anterior
                        </button>
                        <span className="text-gray-700">Página</span>
                        <button
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400 transition-colors"
                        >
                            Próxima
                        </button>
                    </div>
                </main>
            </div>

       
            <EditStudentModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                student={students[editingIndex] || {}}
                onSave={handleSave}
            />

         
            <AddStudentModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onAdd={handleAdd}
            />
        </div>
    );
};
