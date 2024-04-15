import React, { useEffect, useState } from 'react';
import { getFirstEducacionDocument } from '../../controllers/Education';
import { University } from '../../controllers/Interfaces';
import '../../shared/Education.css'

const Education: React.FC = () => {
    const [education, setEducation] = useState<University | null>(null);

    useEffect(() => {
        const fetchEducation = async () => {
            try {
                const firstEducationDocument = await getFirstEducacionDocument();
                setEducation(firstEducationDocument);
            } catch (error) {
                console.error('Error fetching education:', error);
            }
        };

        fetchEducation();
    }, []);

    const animateEntrance = () => {
        const text = document.querySelector('.education');

        // Animación para las cards
        text?.classList.add('slide-from-left');
    };
    useEffect(() => {
        animateEntrance();
    }, [education]); // Se ejecuta cada vez que education cambia

    return (
        <div className="container ">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mb-3 shadow-lg education">
                        <div className="card-body ">
                            <h5 className="card-title">{education?.nombre}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{education?.carrera}</h6>
                            <p className="card-text">{education?.descripcion}</p>
                            <p className="card-text">Fecha de inicio: {education?.fechaInicio}</p>
                            <p className="card-text">Fecha de fin: {education?.fechaFin}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;