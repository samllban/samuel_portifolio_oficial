'use client'

import { useState } from 'react'
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import Background from '@/components/Background/Background'
import NavBar from '@/components/navigation/NavBar'
import Footer from '@/components/sections/Footer/Footer'
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
  id, label, type, placeholder, value, onChange
}) => (
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
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const { initializeApp } = await import('firebase/app')
      const { getDatabase, ref, set } = await import('firebase/database')

      const app = initializeApp({
        apiKey: "AIzaSyC_5187ACsNfTXvete_r_G9Z0ke3IfecTM",
        authDomain: "formularioportsamuelofcial.firebaseapp.com",
        databaseURL: "https://formularioportsamuelofcial-default-rtdb.firebaseio.com/",
        projectId: "formularioportsamuelofcial",
        storageBucket: "formularioportsamuelofcial.firebasestorage.app",
        messagingSenderId: "399475582021",
        appId: "1:399475582021:web:027ea7676bd049134caf2c",
        measurementId: "G-JJ1KZNRERG"
      })

      const db = getDatabase(app)
      const formRef = ref(db, 'formulario/' + Date.now())
      await set(formRef, { ...formData, dataEnvio: new Date().toISOString() })

      alert('Mensagem enviada com sucesso!')
      setFormData({ nome: '', email: '', whatsapp: '', mensagem: '', dataEnvio: '' })
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
            <div className="w-full md:w-1/2">
              <div className="relative h-full rounded-xl border border-gray-800 p-2 md:p-3">
                <GlowingEffect spread={50} glow proximity={70} inactiveZone={0.01} disabled={false} />
                <div className="relative z-10 bg-black bg-opacity-60 backdrop-blur-sm rounded-xl shadow-lg p-8">
                  <h2 className="mb-8 text-gray-300 text-center text-3xl font-bold">Vamos dar início?</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <FormField id="nome" label="Nome Completo" type="text" placeholder="João Guilherme" value={formData.nome} onChange={handleChange} />
                    <FormField id="email" label="E-mail" type="email" placeholder="joao@gmail.com" value={formData.email} onChange={handleChange} />
                    <FormField id="whatsapp" label="WhatsApp" type="tel" placeholder="(88) 9 9999-9999" value={formData.whatsapp} onChange={handleChange} />
                    <div className="mb-6">
                      <label htmlFor="mensagem" className="block text-gray-300 mb-3 text-lg">Mensagem</label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        rows={5}
                        required
                        placeholder="Informe aqui os objetivos com seu site"
                        value={formData.mensagem}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button type="submit" className="w-full py-3 px-4 border border-gray-300 text-gray-300 rounded-lg hover:bg-gray-700 hover:border-gray-600 transition-colors duration-300 text-lg">
                      Enviar Mensagem
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-6 lg:gap-8">
              <div className="relative h-full rounded-xl border border-gray-800 p-2 md:p-3">
                <GlowingEffect spread={40} glow proximity={60} inactiveZone={0.01} disabled={false} />
                <a
                  href="https://wa.me/message/D7SMXDK5YXAOA1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 bg-black bg-opacity-60 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:bg-gray-900 transition-all duration-300 block text-gray-300 hover:scale-[1.02]"
                >
                  <FaWhatsapp size={48} className="text-green-500 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Fale comigo no WhatsApp</h3>
                  <h4 className="text-lg">(88) 9 9256-6905</h4>
                </a>
              </div>

              <div className="relative h-full rounded-xl border border-gray-800 p-2 md:p-3">
                <GlowingEffect spread={40} glow proximity={60} inactiveZone={0.01} disabled={false} />
                <a
                  href="mailto:samuelalves2142@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 bg-black bg-opacity-60 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:bg-gray-900 transition-all duration-300 block text-gray-300 hover:scale-[1.02]"
                >
                  <FaEnvelope size={48} className="text-blue-500 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Mande um e-mail</h3>
                  <h4 className="text-lg">samuelalves2142@gmail.com</h4>
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Background>
    </>
  )
}
