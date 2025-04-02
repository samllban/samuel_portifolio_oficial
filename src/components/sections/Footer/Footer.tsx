import React from 'react';
import RedeSociais from "./RedesSociais"

const Footer: React.FC = () => {
    return (
        <footer className="text-white text-center py-5 h-[200px]">
            <small className="block mb-4 text-sm">
                © 2025 Samuel Allsyon. Todos os direitos reservados.
            </small>
            <div className="flex justify-center items-center">
                <div className="flex justify-between">
                    <RedeSociais />
                </div>
            </div>
        </footer>
    );
};

export default Footer;