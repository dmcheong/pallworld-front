import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Questions from '../components/Questions';

const FAQ = () => {
  const questions = [
    {
      question: 'Comment puis-je passer une commande ?',
      answer:
        "Pour passer une commande, il vous suffit de naviguer sur notre boutique, de choisir les articles que vous souhaitez acheter et de les ajouter à votre panier. Avant d'ajouter l'article au panier, n'oubliez pas de le personnaliser selon vos préférences. Une fois votre sélection terminée, cliquez sur le panier pour finaliser votre commande en suivant les instructions à l'écran.",
    },
    {
      question: 'Quels modes de paiement acceptez-vous ?',
      answer:
        'Nous acceptons plusieurs modes de paiement, y compris les cartes de crédit/débit. Toutes les transactions sont protégées par une connexion cryptée SSL.',
    },
    {
      question: 'Comment suivre ma commande ?',
      answer:
        'Une fois votre commande expédiée, vous recevrez un email de confirmation contenant un lien de suivi. Vous pouvez également suivre votre commande en vous connectant à votre compte sur notre site web.',
    },
    {
      question: 'Puis-je retourner un article ?',
      answer: (
        <>
          Étant donné que nos articles sont personnalisés selon vos préférences, ils ne peuvent pas être retournés. Nous vous recommandons de vérifier attentivement toutes les options de personnalisation avant de finaliser votre commande.
          Pour plus de détails, veuillez consulter notre{' '}
          <Link to="/politique-de-retour" className="text-sky-600 hover:underline">
            politique de retours
          </Link>.
        </>
      ),
    },
    {
      question: 'Comment puis-je contacter le support client ?',
      answer: (
        <>
        Vous pouvez contacter notre support client via notre par email à palworldeshop@gmail.com ou via notre {' '}
        <Link to="/contact" className="text-sky-600 hover:underline">
          formulaire de contact
        </Link>.
        Nous nous efforçons de répondre à toutes les demandes dans les 24 heures.
        </>
      ),
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero */}
      <section className="relative bg-sky-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Foire Aux Questions</h1>
          <p className="text-lg sm:text-xl mt-4">Vous avez une question ? Nous avons la réponse.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Questions fréquentes</h2>
          <Questions questions={questions} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
