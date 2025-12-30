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
                            <h4 className="card-title">{education?.nombre}</h4>
                            
                            <p className="card-text">{education?.descripcion}</p>
                            <h5 className="card-subtitle mb-2 text-bold">{education?.carrera}</h5>
                            <p className="card-text">Date of admission: {education?.fechaInicio}</p>
                            <p className="card-text">Date of graduation: {education?.fechaFin}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
