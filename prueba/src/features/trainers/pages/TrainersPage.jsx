import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useTrainers } from '../hooks/useTrainers';
import { TrainersTable } from '../components/TrainersTable';
import { TrainersSkeleton } from '../components/TrainersSkeleton';
import { TrainerForm } from '../components/TrainerForm';
import { PokemonAvatar } from '../components/PokemonAvatar';
import { Modal } from '../../../components/ui/Modal';

export const TrainersPage = () => {
    const { trainers, isLoading, create, update, remove } = useTrainers();
    const [modalForm, setModalForm] = useState({ open: false, data: null });
    const [modalDetail, setModalDetail] = useState({ open: false, data: null });

    return (
        <div className="max-w-6xl mx-auto px-6 py-8">
            <Toaster position="bottom-right" />

            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                <div className="relative">
                    <h1 className="text-6xl font-black italic uppercase tracking-tighter leading-[0.7] text-slate-900">
                        Panel
                    </h1>
                    <p className="text-blue-600 font-bold uppercase text-[9px] tracking-[0.5em] mt-2 ml-1">
                        Administración
                    </p>
                </div>

                <button
                    onClick={() => setModalForm({ open: true, data: null })}
                    className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-blue-200 hover:-translate-y-1 transition-all"
                >
                    + Nuevo Registro
                </button>

            </header>

            {isLoading ? (
                <TrainersSkeleton />
            ) : (
                <TrainersTable
                    trainers={trainers}
                    onEdit={(t) => setModalForm({ open: true, data: t })}
                    onDelete={remove}
                    onDetail={(t) => setModalDetail({ open: true, data: t })}
                />
            )}

            {/* MODAL FORMULARIO */}
            <Modal
                isOpen={modalForm.open}
                onClose={() => setModalForm({ open: false, data: null })}
                title={modalForm.data ? "Editar Entrenador" : "Nuevo Registro"}
            >
                <TrainerForm
                    initialData={modalForm.data}
                    onSubmit={(data) => {
                        modalForm.data ? update({ id: modalForm.data.id, data }) : create(data);
                        setModalForm({ open: false, data: null });
                    }}
                    onCancel={() => setModalForm({ open: false, data: null })}
                />
            </Modal>

            {/* MODAL DETALLE */}
            <Modal
                isOpen={modalDetail.open}
                onClose={() => setModalDetail({ open: false, data: null })}
                title="Ficha Técnica"
            >
                {modalDetail.data && (
                    <div className="text-center space-y-8">
                        <PokemonAvatar identifier={modalDetail.data.pokemonName || modalDetail.data.pokemonId} size="lg" />

                        <div>
                            <h2 className="text-4xl font-black uppercase italic leading-none text-slate-900">{modalDetail.data.name}</h2>
                            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mt-4">
                                {modalDetail.data.pokemonName}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 text-left">
                                <span className="text-[9px] font-black text-slate-400 uppercase block mb-1">Ciudad</span>
                                <p className="font-bold text-sm text-slate-800">{modalDetail.data.city || 'Kanto Region'}</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 text-left">
                                <span className="text-[9px] font-black text-slate-400 uppercase block mb-1">Teléfono</span>
                                <p className="font-bold text-sm text-slate-800">{modalDetail.data.phone || 'No registrado'}</p>
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