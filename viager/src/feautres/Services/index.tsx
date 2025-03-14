import React from "react";
import NavigationBar from "../../layouts/Navigation";
import { Link } from "react-router-dom";

const ViagerServices: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <div className="viager-services">
        {/* Section Simulation Gratuite */}
        <section className="service-card">
          <h2 className="title-lg">Simulation Gratuite de Vente en Viager</h2>
          <p className="text">
            Obtenez une estimation fiable du bouquet et de la rente viagère adaptée à votre bien et à votre situation.
            Notre calculatrice vous aide à construire des ventes en viager simples et fiables, conformes aux pratiques des notaires de France.
          </p>
          <Link to="/" className="btn btn--brown">Accéder à la calculatrice</Link>
        </section>

        {/* Section Questions Techniques */}
        <section className="service-card">
          <h2 className="title-lg">Réponses à Vos Questions Techniques</h2>
          <ul className="text">
            <li>Les différents types de viagers (occupé, libre, sans rente…)</li>
            <li>Les impacts fiscaux et successoraux</li>
            <li>Comment sécuriser une vente ou un achat en viager</li>
          </ul>
          <Link to="/contact" className="btn btn--brown">Posez votre question gratuitement</Link>
        </section>

        {/* Section Mise en Relation */}
        <section className="service-card">
          <h2 className="title-lg">Mise en Relation avec des Experts Viager</h2>
          <p className="text">
            Besoin d’un accompagnement plus approfondi ? Nous vous mettons en relation avec des professionnels qualifiés près de chez vous :
          </p>
          <ul className="text">
            <li>Notaires spécialisés</li>
            <li>Experts immobiliers</li>
            <li>Courtiers en viager</li>
          </ul>
          <Link to="/contact"className="btn btn--brown">Trouver un expert près de chez moi</Link>
        </section>

        {/* Section Témoignages */}
        <section className="testimonials ">
          <h2 className="title-lg">Témoignages</h2>
          <div className="testimonial">
            <p className="text"><strong>Marie, 72 ans (Paris)</strong>: "Grâce à la calculatrice viager, j’ai pu évaluer facilement le montant de ma rente..."</p>
          </div>
          <div className="testimonial">
            <p className="text"><strong>Jean et Sophie, 65 et 68 ans (Lyon)</strong>: "Nous voulions vendre en viager mais ne savions pas par où commencer..."</p>
          </div>
          <div className="testimonial">
            <p className="text"><strong>Luc, 73 ans (Bordeaux)</strong>: "Je cherchais un moyen de sécuriser ma retraite tout en restant chez moi..."</p>
          </div>
          <div className="testimonial">
            <p className="text"><strong>Claire, 60 ans (Toulouse)</strong>: "En tant que future retraitée, je souhaitais anticiper mes besoins financiers..."</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ViagerServices;
