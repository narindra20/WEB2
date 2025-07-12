import React from 'react';

export default function Header() {
 return (
  <header>
    <h1>Haute École d'Informatique</h1>
    <p>Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relâche pour la montée en compétences de nos étudiants.</p>
    <div className="buttons">
      <button>Inscrivez-vous ici</button>
      <button>Emploi du temps</button>
      <button>Programme pédagogique</button>
    </div>
    <p>Habilitation MESupRES, suivant l'arrêté n°31309/2023</p>
  </header>
  );
};