'use client'

import { useState } from 'react'
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import Background from '@/components/Background/Background'
import NavBar from '@/components/navigation/NavBar'
import Footer from '@/components/sections/Footer/Footer'
import { db, ref, set } from '@/lib/firebase'
import { GlowingEffect } from '@/components/ui/Glowing-effect'

interface FormFieldProps {
    id: string
    label: string
    type: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormField: React.FC<FormFieldProps> = ({
    id,
    label,
    type,
    placeholder,
    value,
    onChange
}) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="block text-gray-300 mb-2">
                {label}
            </label>
            <input
                type={type}
                className="w-full px-3 py-2 bg-transparent border border-gray-700 rounded text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                id={id}
                placeholder={placeholder}
                required
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

interface FormData {
    nome: string
    email: string
    whatsapp: string
    mensagem: string
    dataEnvio: string
}

export default function Contato() {
    const [formData, setFormData] = useState<FormData>({
        nome: '',
        email: '',
        whatsapp: '',
        mensagem: '',
        dataEnvio: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData(prev => ({
            ...prev,
            [id]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const dadosFormulario: FormData = {
            ...formData,
            dataEnvio: new Date().toISOString()
        }

        try {
            const formRef = ref(db, 'formulario/' + Date.now())
            await set(formRef, dadosFormulario)
            alert('Mensagem enviada com sucesso!')
            setFormData({
                nome: '',
                email: '',
                whatsapp: '',
                mensagem: '',
                dataEnvio: ''
            })
        } catch (error) {
            console.error(error)
            alert('Erro ao enviar os dados')
        }
    }

    return (
        <>
            <Background>
                <NavBar />                
                <section className="mx-auto w-full max-w-7xl px-4 py-16 md:py-24 lg:py-32">
                    <div className="flex flex-col md:flex-row md:items-start gap-8 lg:gap-12 pt-32">
                        {/* Formulário à esquerda */}
                        <div className="w-full md:w-1/2">
                            <div className="relative h-full rounded-xl border border-gray-800 p-2 md:p-3">
                                <GlowingEffect
                                    spread={50}
                                    glow={true}
                                    disabled={false}
                                    proximity={70}
                                    inactiveZone={0.01}
                                />
                                <div className="relative z-10 bg-black bg-opacity-60 backdrop-blur-sm rounded-xl shadow-lg">
                                    <div className="p-8">
                                        <h2 className="mb-8 text-gray-300 text-center text-3xl font-bold">
                                            Vamos dar início?
                                        </h2>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <FormField
                                                id="nome"
                                                label="Nome Completo"
                                                type="text"
                                                placeholder="João Guilherme"
                                                value={formData.nome}
                                                onChange={handleChange}
                                            />
                                            <FormField
                                                id="email"
                                                label="E-mail"
                                                type="email"
                                                placeholder="joao@gmail.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            <FormField
                                                id="whatsapp"
                                                label="Número de WhatsApp"
                                                type="tel"
                                                placeholder="(88) 9 9999-9999"
                                                value={formData.whatsapp}
                                                onChange={handleChange}
                                            />
                                            <div className="mb-6">
                                                <label htmlFor="mensagem" className="block text-gray-300 mb-3 text-lg">
                                                    Mensagem
                                                </label>
                                                <textarea
                                                    className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    id="mensagem"
                                                    name="mensagem"
                                                    rows={5}
                                                    placeholder="Informe aqui, em detalhes, os objetivos com o seu site"
                                                    required
                                                    value={formData.mensagem}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <button
                                                    type="submit"
                                                    className="w-full py-3 px-4 border border-gray-300 text-gray-300 rounded-lg hover:bg-gray-700 hover:border-gray-600 transition-colors duration-300 text-lg"
                                                >
                                                    Enviar Mensagem
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cards à direita */}
                        <div className="w-full md:w-1/2 flex flex-col gap-6 lg:gap-8">
                            {/* Card WhatsApp */}
                            <div className="relative h-full rounded-xl border border-gray-800 p-2 md:p-3">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={60}
                                    inactiveZone={0.01}
                                />
                                <a
                                    href="https://wa.me/message/D7SMXDK5YXAOA1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-10 bg-black bg-opacity-60 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:bg-gray-900 transition-all duration-300 block text-gray-300 hover:scale-[1.02]"
                                >
                                    <div className="flex flex-col items-start">
                                        <FaWhatsapp size={48} className="text-green-500 mb-4" />
                                        <h3 className="text-2xl font-semibold mb-2">Fale comigo no WhatsApp</h3>
                                        <h4 className="text-lg">(88) 9 9256-6905</h4>
                                    </div>
                                </a>
                            </div>

                            {/* Card E-mail */}
                            <div className="relative h-full rounded-xl border border-gray-800 p-2 md:p-3">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={60}
                                    inactiveZone={0.01}
                                />
                                <a
                                    href="mailto:samuelalves2142@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-10 bg-black bg-opacity-60 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:bg-gray-900 transition-all duration-300 block text-gray-300 hover:scale-[1.02]"
                                >
                                    <div className="flex flex-col items-start">
                                        <FaEnvelope size={48} className="text-blue-500 mb-4" />
                                        <h3 className="text-2xl font-semibold mb-2">Mande um e-mail</h3>
                                        <h4 className="text-lg">samuelalves2142@gmail.com</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </Background>
        </>
    );
}