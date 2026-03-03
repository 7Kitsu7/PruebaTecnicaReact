import { useState } from 'react';
import { useTrainers } from '../hooks/useTrainers';
import { TrainersTable } from '../components/TrainersTable';
import { TrainerForm } from '../components/TrainerForm';
import { PokemonAvatar } from '../components/PokemonAvatar';
import { Modal } from '../../../components/ui/Modal';

export const TrainersPage = () => {
    const { trainers, isLoading, create, update, remove } = useTrainers();
    const [modalForm, setModalForm] = useState({ isOpen: false, data: null });
    const [modalDetail, setModalDetail] = useState({ isOpen: false, data: null });

    const handleSave = (formData) => {
        modalForm.data ? update({ id: modalForm.data.id, data: formData }) : create(formData);
        setModalForm({ isOpen: false, data: null });
    };

    if (isLoading) return <div className="h-screen flex items-center justify-center font-black animate-pulse">CARGANDO...</div>;

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <header className="flex justify-between items-center mb-12">
                <h1 className="text-5xl font-black italic uppercase tracking-tighter">Entrenadores</h1>
                <button
                    onClick={() => setModalForm({ isOpen: true, data: null })}
                    className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl"
                >
                    Nuevo Registro
                </button>
            </header>

            <TrainersTable
                trainers={trainers}
                onEdit={(t) => setModalForm({ isOpen: true, data: t })}
                onDelete={remove}
                onDetail={(t) => setModalDetail({ isOpen: true, data: t })}
            />

            {/* FORMULARIO */}
            <Modal isOpen={modalForm.isOpen} onClose={() => setModalForm({ isOpen: false, data: null })} title="Datos Entrenador">
                <TrainerForm
                    initialData={modalForm.data}
                    onSubmit={handleSave}
                    onCancel={() => setModalForm({ isOpen: false, data: null })}
                />
            </Modal>

            {/* DETALLE */}
            <Modal isOpen={modalDetail.isOpen} onClose={() => setModalDetail({ isOpen: false, data: null })} title="Ficha Técnica">
                {modalDetail.data && (
                    <div className="text-center space-y-6">
                        <PokemonAvatar identifier={modalDetail.data.pokemonName || modalDetail.data.pokemonId} size="lg" />

                        <div>
                            <h2 className="text-3xl font-black uppercase italic leading-none">{modalDetail.data.name}</h2>
                            <p className="text-blue-600 font-bold text-xs mt-2 uppercase">{modalDetail.data.pokemonName}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-4 rounded-2xl text-left border border-slate-100">
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Ciudad</span>
                                <p className="font-bold text-sm text-slate-700 truncate">{modalDetail.data.city || 'Kanto Region'}</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-2xl text-left border border-slate-100">
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Teléfono</span>
                                <p className="font-bold text-sm text-slate-700 truncate">{modalDetail.data.phone || 'No registrado'}</p>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-4 rounded-2xl text-white">
                            <span className="text-[8px] font-black uppercase text-slate-500 block mb-1">Email de Contacto</span>
                            <p className="font-bold text-xs italic">{modalDetail.data.email}</p>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};